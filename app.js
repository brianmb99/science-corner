/* Science Corner reader. Content lives in courses/*.js. */
(function () {
  "use strict";

  var KEY = "science-corner-v1";
  var WIDGETS = {
    pairs: mountPairs,
    copies: mountCopies,
    selection: mountSelection,
    timeline: mountTimeline,
    homology: mountHomology,
    blindspot: mountBlindspot,
    tree: mountTree,
  };

  var state = load();
  var app = document.getElementById("app");

  function load() {
    var data = { theme: null, done: {}, last: null };
    try {
      var parsed = JSON.parse(localStorage.getItem(KEY) || "{}");
      if (parsed && typeof parsed === "object") {
        if (parsed.theme === "night" || parsed.theme === "lamp") data.theme = parsed.theme;
        if (parsed.done && typeof parsed.done === "object") data.done = parsed.done;
        if (parsed.last && parsed.last.course && parsed.last.lesson) data.last = parsed.last;
      }
    } catch (e) {}
    if (!data.theme) {
      var dark = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
      data.theme = dark ? "night" : "lamp";
    }
    return data;
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function courses() {
    return (window.SCIENCE_COURSES || []).slice().sort(function (a, b) {
      return String(b.added || "").localeCompare(String(a.added || ""));
    });
  }

  function findCourse(id) {
    var list = courses();
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function findLesson(course, id) {
    var lessons = course.lessons || [];
    for (var i = 0; i < lessons.length; i++) if (lessons[i].id === id) return { lesson: lessons[i], index: i };
    return null;
  }

  function keyOf(course, lesson) {
    return course.id + ":" + lesson.id;
  }

  function isDone(course, lesson) {
    return !!state.done[keyOf(course, lesson)];
  }

  function doneCount(course) {
    var n = 0;
    (course.lessons || []).forEach(function (lesson) {
      if (isDone(course, lesson)) n += 1;
    });
    return n;
  }

  function firstUndone(course) {
    var lessons = course.lessons || [];
    for (var i = 0; i < lessons.length; i++) if (!isDone(course, lessons[i])) return lessons[i];
    return null;
  }

  function continueLesson(course) {
    if (state.last && state.last.course === course.id) {
      var found = findLesson(course, state.last.lesson);
      if (found && !isDone(course, found.lesson)) return found.lesson;
    }
    return firstUndone(course) || (course.lessons || [])[0] || null;
  }

  function route() {
    var parts = (location.hash || "#/").replace(/^#/, "").split("/").filter(Boolean);
    return { courseId: parts[0] || "", lessonId: parts[1] || "" };
  }

  function el(tag, className) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  function text(tag, className, value) {
    var node = el(tag, className);
    node.textContent = value == null ? "" : String(value);
    return node;
  }

  function appendRich(parent, value) {
    var source = String(value || "");
    var re = /(\*\*[^*]+\*\*|\[[^\]]+\]\(https:\/\/[^)\s]+\))/g;
    var last = 0;
    var match;
    while ((match = re.exec(source))) {
      if (match.index > last) parent.appendChild(document.createTextNode(source.slice(last, match.index)));
      var token = match[1];
      if (token.charAt(0) === "*") {
        parent.appendChild(text("strong", "", token.slice(2, -2)));
      } else {
        var label = token.slice(1, token.indexOf("]"));
        var url = token.slice(token.indexOf("(") + 1, -1);
        var link = el("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = label;
        parent.appendChild(link);
      }
      last = match.index + token.length;
    }
    if (last < source.length) parent.appendChild(document.createTextNode(source.slice(last)));
  }

  function paragraph(value, className) {
    var node = el("p", className || "");
    appendRich(node, value);
    return node;
  }

  function applyTheme() {
    var night = state.theme === "night";
    document.documentElement.setAttribute("data-theme", night ? "night" : "lamp");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", night ? "#1b1815" : "#f6f0e4");
  }

  function themeButton() {
    var button = el("button", "theme-btn");
    button.type = "button";
    function paint() {
      var night = state.theme === "night";
      button.textContent = night ? "Light" : "Dark";
      button.setAttribute("aria-pressed", night ? "true" : "false");
      button.setAttribute("aria-label", night ? "Switch to light theme" : "Switch to dark theme");
    }
    paint();
    button.addEventListener("click", function () {
      state.theme = state.theme === "night" ? "lamp" : "night";
      save();
      applyTheme();
      paint();
    });
    return button;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function draw() {
    applyTheme();
    clear(app);
    var where = route();
    var sheet = el("main", "sheet");
    app.appendChild(sheet);
    if (!where.courseId) renderHome(sheet);
    else {
      var course = findCourse(where.courseId);
      if (!course) renderMissing(sheet);
      else if (!where.lessonId) renderCourse(sheet, course);
      else {
        var found = findLesson(course, where.lessonId);
        if (!found) renderMissing(sheet);
        else renderLesson(sheet, course, found.lesson, found.index);
      }
    }
    window.scrollTo(0, 0);
  }

  function renderHome(sheet) {
    document.title = "Science Corner";
    var bar = el("header", "topbar");
    var heading = el("div");
    heading.appendChild(text("h1", "", "Science Corner"));
    bar.appendChild(heading);
    bar.appendChild(themeButton());
    sheet.appendChild(bar);
    sheet.appendChild(el("div", "rule"));
    var list = courses();
    if (!list.length) {
      sheet.appendChild(paragraph("No courses are available."));
      return;
    }
    var ul = el("ul", "course-list");
    list.forEach(function (course) {
      var total = (course.lessons || []).length;
      var done = doneCount(course);
      var li = el("li");
      var card = el("a", "course-card");
      card.href = "#/" + course.id;
      card.appendChild(text("span", "label", "Course"));
      card.appendChild(text("span", "title", course.title));
      card.appendChild(text("span", "meta", total + " lessons"));
      card.appendChild(text("span", "blurb", course.blurb || ""));
      card.appendChild(text("span", "meta", done + " of " + total + " lessons completed"));
      var barWrap = el("span", "bar");
      var fill = el("i");
      fill.style.width = total ? Math.round((done / total) * 100) + "%" : "0%";
      barWrap.appendChild(fill);
      barWrap.setAttribute("aria-hidden", "true");
      card.appendChild(barWrap);
      li.appendChild(card);
      ul.appendChild(li);
    });
    sheet.appendChild(ul);
    sheet.appendChild(text("p", "colophon", "Progress is stored in this browser only. Links to other sites lead to Learn.Genetics at the University of Utah, HHMI BioInteractive, PBS Eons, Crash Course Kids, PhET at the University of Colorado, the Smithsonian Human Origins Program, and Understanding Evolution at UC Berkeley."));
  }

  function renderCourse(sheet, course) {
    document.title = course.title + " · Science Corner";
    var lessons = course.lessons || [];
    var next = continueLesson(course);
    var undone = firstUndone(course);
    sheet.appendChild(backLink("#/", "All courses"));
    var bar = el("header", "topbar");
    var heading = el("div");
    heading.appendChild(text("p", "eyebrow", lessons.length + " lessons"));
    heading.appendChild(text("h1", "", course.title));
    bar.appendChild(heading);
    bar.appendChild(themeButton());
    sheet.appendChild(bar);
    sheet.appendChild(el("div", "rule"));
    sheet.appendChild(paragraph(course.blurb || ""));
    if (next) {
      var go = el("a", "go");
      var lessonNo = 1;
      for (var i = 0; i < lessons.length; i++) if (lessons[i].id === next.id) lessonNo = i + 1;
      var allDone = !undone;
      go.href = "#/" + course.id + "/" + next.id;
      go.textContent = allDone ? "Review from lesson 1" : (doneCount(course) === 0 && (!state.last || state.last.course !== course.id) ? "Start lesson 1" : "Continue with lesson " + lessonNo);
      sheet.appendChild(go);
    }
    var ul = el("ul", "lesson-list");
    lessons.forEach(function (lesson, index) {
      var li = el("li");
      var link = el("a", "lesson-link" + (undone && undone.id === lesson.id ? " upnext" : ""));
      link.href = "#/" + course.id + "/" + lesson.id;
      link.appendChild(text("span", "num", String(index + 1)));
      var mid = el("span");
      mid.appendChild(text("span", "title", lesson.title));
      link.appendChild(mid);
      var mark = text("span", "check" + (isDone(course, lesson) ? " on" : ""), isDone(course, lesson) ? "✓" : "");
      mark.setAttribute("aria-label", isDone(course, lesson) ? "Completed" : "Not completed");
      link.appendChild(mark);
      var tease = text("span", "tease", lesson.tease || "");
      link.appendChild(tease);
      li.appendChild(link);
      ul.appendChild(li);
    });
    sheet.appendChild(ul);
  }

  function backLink(href, label) {
    var link = el("a", "back");
    link.href = href;
    link.textContent = "← " + label;
    return link;
  }

  function renderMissing(sheet) {
    document.title = "Science Corner";
    sheet.appendChild(text("h1", "", "Page not found"));
    sheet.appendChild(backLink("#/", "All courses"));
  }

  function renderLesson(sheet, course, lesson, index) {
    document.title = lesson.title + " · Science Corner";
    state.last = { course: course.id, lesson: lesson.id };
    save();
    var lessons = course.lessons;
    sheet.appendChild(backLink("#/" + course.id, course.title));
    var bar = el("header", "topbar");
    var heading = el("div");
    heading.appendChild(text("p", "eyebrow", "Lesson " + (index + 1) + " of " + lessons.length));
    heading.appendChild(text("h1", "", lesson.title));
    bar.appendChild(heading);
    bar.appendChild(themeButton());
    sheet.appendChild(bar);
    sheet.appendChild(el("div", "rule"));

    if (lesson.review && lesson.review.length) {
      var review = el("section", "review");
      review.appendChild(text("p", "label", lesson.reviewLabel || "Last time"));
      lesson.review.forEach(function (line) { review.appendChild(paragraph(line)); });
      sheet.appendChild(review);
    }

    (lesson.body || []).forEach(function (block) {
      if (!block) return;
      if (block.type === "prose") {
        (block.paragraphs || []).forEach(function (line) { sheet.appendChild(paragraph(line)); });
      } else if (block.type === "aside") {
        var aside = el("aside", "aside");
        if (block.title) aside.appendChild(text("p", "label", block.title));
        aside.appendChild(paragraph(block.text || ""));
        sheet.appendChild(aside);
      } else if (block.type === "ask") {
        var ask = el("section", "ask");
        ask.appendChild(text("p", "label", "Question"));
        ask.appendChild(paragraph(block.text || ""));
        sheet.appendChild(ask);
      } else if (block.type === "h") {
        sheet.appendChild(text("h2", "", block.text || ""));
      }
    });

    var activity = lesson.activity || {};
    if (activity.widget && WIDGETS[activity.widget]) {
      var widget = el("section", "widget");
      widget.setAttribute("aria-label", "Activity");
      WIDGETS[activity.widget](widget);
      sheet.appendChild(widget);
    }
    (activity.links || []).forEach(function (item) { sheet.appendChild(linkCard(item)); });
    if (activity.quiz && activity.quiz.length) sheet.appendChild(quizCard(activity.quiz));

    if (lesson.talk && lesson.talk.length) {
      var talk = el("section", "talk");
      talk.appendChild(text("h2", "", "Discussion questions"));
      var ol = el("ol");
      lesson.talk.forEach(function (line) {
        var li = el("li");
        appendRich(li, line);
        ol.appendChild(li);
      });
      talk.appendChild(ol);
      sheet.appendChild(talk);
    }

    if (lesson.summary) {
      var summary = el("section", "lights");
      summary.appendChild(text("p", "label", "Summary"));
      summary.appendChild(paragraph(lesson.summary));
      sheet.appendChild(summary);
    }

    sheet.appendChild(dock(course, lesson, index));
  }

  function linkCard(item) {
    var link = el("a", "out");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.appendChild(text("span", "kind", item.kind || "Open"));
    link.appendChild(text("span", "out-title", item.title || item.url));
    if (item.source) link.appendChild(text("span", "out-source", item.source));
    if (item.note) link.appendChild(text("span", "out-note", item.note));
    return link;
  }

  function quizCard(questions) {
    var box = el("section", "quiz");
    box.appendChild(text("h2", "", "Quick check"));
    box.appendChild(paragraph("Choose an answer for each question. Scores are not saved."));
    var cursor = 0;
    var stage = el("div");
    box.appendChild(stage);

    function show() {
      clear(stage);
      if (cursor >= questions.length) {
        stage.appendChild(paragraph("You have answered all of the questions."));
        var again = el("button", "ghost");
        again.type = "button";
        again.textContent = "Try again";
        again.addEventListener("click", function () {
          cursor = 0;
          show();
        });
        stage.appendChild(again);
        return;
      }
      var item = questions[cursor];
      stage.appendChild(text("p", "label", "Question " + (cursor + 1) + " of " + questions.length));
      stage.appendChild(paragraph(item.q));
      var locked = false;
      (item.choices || []).forEach(function (choice, choiceIndex) {
        var button = el("button", "choice");
        button.type = "button";
        button.textContent = choice;
        button.addEventListener("click", function () {
          if (locked) return;
          locked = true;
          var buttons = stage.querySelectorAll(".choice");
          buttons.forEach(function (candidate, index) {
            candidate.disabled = true;
            if (index === item.answer) candidate.classList.add("answer");
            else if (index === choiceIndex) candidate.classList.add("picked-wrong");
          });
          if (item.why) stage.appendChild(paragraph(item.why, "why"));
          var next = el("button", "primary");
          next.type = "button";
          next.textContent = cursor === questions.length - 1 ? "Finish" : "Next question";
          next.addEventListener("click", function () {
            cursor += 1;
            show();
          });
          stage.appendChild(next);
        });
        stage.appendChild(button);
      });
    }

    show();
    return box;
  }

  function dock(course, lesson, index) {
    var lessons = course.lessons;
    var bar = el("nav", "dock");
    bar.setAttribute("aria-label", "Lesson navigation");
    var wrap = el("div", "wrap");
    var prev = el("a", "ghost");
    if (index > 0) {
      prev.href = "#/" + course.id + "/" + lessons[index - 1].id;
      prev.textContent = "Prev";
    } else {
      prev.href = "#/" + course.id;
      prev.textContent = "Lessons";
    }
    var done = el("button", "primary" + (isDone(course, lesson) ? " done" : ""));
    done.type = "button";
    done.id = "done-btn";
    function paintDone() {
      var on = isDone(course, lesson);
      done.className = "primary" + (on ? " done" : "");
      done.textContent = on ? "Completed" : "Mark complete";
      done.setAttribute("aria-pressed", on ? "true" : "false");
    }
    paintDone();
    done.addEventListener("click", function () {
      var id = keyOf(course, lesson);
      if (state.done[id]) delete state.done[id];
      else state.done[id] = Date.now();
      save();
      paintDone();
    });
    var next = el("a", "ghost");
    if (index < lessons.length - 1) {
      next.href = "#/" + course.id + "/" + lessons[index + 1].id;
      next.textContent = "Next";
    } else {
      next.href = "#/" + course.id;
      next.textContent = "Lessons";
    }
    wrap.appendChild(prev);
    wrap.appendChild(done);
    wrap.appendChild(next);
    bar.appendChild(wrap);
    return bar;
  }

  function button(label, className, onClick) {
    var node = el("button", className || "ghost");
    node.type = "button";
    node.textContent = label;
    node.addEventListener("click", onClick);
    return node;
  }

  function mountPairs(host) {
    var template = ["A", "C", "T", "G", "G", "T", "A", "C"];
    var match = { A: "T", T: "A", C: "G", G: "C" };
    var index = 0;
    var note = "";
    host.appendChild(text("h2", "", "Base pairing"));
    host.appendChild(paragraph("Adenine (A) pairs with thymine (T), and cytosine (C) pairs with guanine (G). For each base on the template strand, choose the base that pairs with it."));
    var view = el("div");
    host.appendChild(view);
    function render() {
      clear(view);
      var strand = el("div", "strand");
      template.forEach(function (letter, i) {
        var col = el("div", "pair-col");
        col.appendChild(text("span", "base", letter));
        col.appendChild(text("span", "slot" + (i < index ? " filled" : "") + (i === index ? " now" : ""), i < index ? match[letter] : ""));
        strand.appendChild(col);
      });
      view.appendChild(strand);
      if (index >= template.length) {
        view.appendChild(paragraph("The new strand is complete. Hydrogen bonds hold the two strands together, and covalent bonds hold each backbone together. The hydrogen bonds are weaker, so the strands can be separated."));
        view.appendChild(button("Try again", "ghost", function () {
          index = 0;
          note = "";
          render();
        }));
        return;
      }
      view.appendChild(text("p", "status", note || "Base " + (index + 1) + " of 8. Which base pairs with " + template[index] + "?"));
      var row = el("div", "row");
      ["A", "T", "C", "G"].forEach(function (letter) {
        row.appendChild(button(letter, "primary", function () {
          if (letter === match[template[index]]) {
            index += 1;
            note = index >= template.length ? "" : "Correct. " + template[index - 1] + " pairs with " + letter + ".";
          } else {
            note = letter + " does not pair with " + template[index] + ". A pairs with T, and C pairs with G.";
          }
          render();
        }));
      });
      view.appendChild(row);
    }
    render();
  }

  function mountCopies(host) {
    var original = "ATGCCGAT".split("");
    var rows = [original.slice()];
    host.appendChild(text("h2", "", "Copying errors"));
    host.appendChild(paragraph("Each row is a copy of the row above it. This model makes an error about once in every seven bases so that changes show up quickly. Real DNA copying makes far fewer errors, about one in every 100 million bases after proofreading."));
    var view = el("div");
    host.appendChild(view);
    function render() {
      clear(view);
      rows.forEach(function (row, rowIndex) {
        var line = el("p", "seq");
        line.appendChild(document.createTextNode(rowIndex === 0 ? "Original  " : "Copy " + rowIndex + "  "));
        row.forEach(function (letter, i) {
          if (letter !== original[i]) line.appendChild(text("b", "", letter));
          else line.appendChild(document.createTextNode(letter));
          line.appendChild(document.createTextNode(" "));
        });
        view.appendChild(line);
      });
      var changed = rows[rows.length - 1].some(function (letter, i) { return letter !== original[i]; });
      view.appendChild(paragraph(changed ? "Highlighted bases differ from the original. They are copying errors, and nothing chose them. Natural selection can only act on changes like these after they happen." : "No changes yet. Copy again."));
    }
    render();
    host.appendChild(button("Copy again", "primary", function () {
      var prev = rows[rows.length - 1];
      var next = prev.map(function (letter) {
        if (Math.random() < 0.14) {
          var options = ["A", "T", "G", "C"].filter(function (candidate) { return candidate !== letter; });
          return options[Math.floor(Math.random() * options.length)];
        }
        return letter;
      });
      rows.push(next);
      if (rows.length > 7) rows.splice(1, 1);
      render();
    }));
  }

  function mountSelection(host) {
    var habitat = "leaf";
    var pecks = 6;
    var season = 1;
    var labels = false;
    var switched = false;
    var beetles = seed();
    host.appendChild(text("h2", "", "Beetle population"));
    host.appendChild(paragraph("You are a bird that eats beetles. Click a beetle to eat it. You can eat six beetles each season. The surviving beetles then reproduce, and each baby usually has the same color as its parent."));
    var view = el("div");
    host.appendChild(view);
    function seed() {
      var list = [];
      for (var i = 0; i < 16; i++) list.push({ id: "s" + i, color: i < 8 ? "green" : "brown", alive: true, mut: false });
      return shuffle(list);
    }
    function shuffle(list) {
      for (var i = list.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
      return list;
    }
    function counts() {
      var green = 0;
      var brown = 0;
      beetles.forEach(function (beetle) {
        if (!beetle.alive) return;
        if (beetle.color === "green") green += 1;
        else brown += 1;
      });
      return { green: green, brown: brown };
    }
    function render() {
      clear(view);
      var tally = counts();
      var ground = habitat === "leaf" ? "green leaves" : "dark soil";
      view.appendChild(text("p", "status", "Season " + season + " · " + ground + " · green " + tally.green + " · brown " + tally.brown + " · left to eat: " + pecks));
      var patch = el("div", "patch " + habitat);
      beetles.forEach(function (beetle) {
        var bug = el("button", "beetle " + beetle.color + (beetle.alive ? "" : " gone") + (beetle.mut ? " mut" : ""));
        bug.type = "button";
        bug.disabled = !beetle.alive || pecks <= 0;
        bug.setAttribute("aria-label", (beetle.color === "green" ? "Green" : "Brown") + " beetle" + (beetle.mut ? ", new color from a mutation" : ""));
        if (labels && beetle.alive) bug.textContent = beetle.color === "green" ? "G" : "B";
        var spotA = el("span", "spot a");
        var spotB = el("span", "spot b");
        bug.appendChild(spotA);
        bug.appendChild(spotB);
        bug.addEventListener("click", function () {
          if (!beetle.alive || pecks <= 0) return;
          beetle.alive = false;
          pecks -= 1;
          render();
        });
        patch.appendChild(bug);
      });
      view.appendChild(patch);
      var easier = habitat === "leaf" ? "brown" : "green";
      var line;
      if (pecks > 0) line = "On " + ground + ", " + easier + " beetles are easier to see. A ring around a beetle marks a baby with a new color from a mutation.";
      else line = "You have eaten six beetles. The survivors reproduce next. Each baby usually matches its parent, and about one baby in twelve has the other color.";
      if (switched) line += " The habitat changed, so a different color is now easier to see.";
      view.appendChild(paragraph(line));
      var row = el("div", "row");
      if (pecks <= 0) {
        row.appendChild(button("Survivors reproduce", "primary", function () {
          var survivors = beetles.filter(function (beetle) { return beetle.alive; });
          var next = [];
          var n = 0;
          if (!survivors.length) survivors = seed();
          while (next.length < 16) {
            var parent = survivors[Math.floor(Math.random() * survivors.length)];
            var color = parent.color;
            var mut = false;
            if (Math.random() < 0.08) {
              color = color === "green" ? "brown" : "green";
              mut = true;
            }
            next.push({ id: season + "-" + n, color: color, alive: true, mut: mut });
            n += 1;
          }
          beetles = shuffle(next);
          season += 1;
          pecks = 6;
          switched = false;
          render();
        }));
      }
      row.appendChild(button(habitat === "leaf" ? "Switch to dark soil" : "Switch to green leaves", "ghost", function () {
        habitat = habitat === "leaf" ? "soil" : "leaf";
        switched = true;
        render();
      }));
      row.appendChild(button(labels ? "Hide color letters" : "Show color letters", "ghost", function () {
        labels = !labels;
        render();
      }));
      row.appendChild(button("Start over", "ghost", function () {
        habitat = "leaf";
        pecks = 6;
        season = 1;
        switched = false;
        beetles = seed();
        render();
      }));
      view.appendChild(row);
    }
    render();
  }

  function mountTimeline(host) {
    var chapters = [
      { at: 0, when: "January 1", title: "Earth forms", body: "About 4.5 billion years ago. The surface is molten rock and there is no life." },
      { at: 0.229, when: "March 25", title: "Earliest life", body: "Fossils of microorganisms are at least 3.5 billion years old, and chemical evidence suggests life may be older. For most of Earth's history, living things are mostly single-celled." },
      { at: 0.471, when: "June 21", title: "Oxygen builds up", body: "Photosynthetic bacteria release oxygen. Starting about 2.4 billion years ago, oxygen builds up in the atmosphere." },
      { at: 0.67, when: "August", title: "Cells with nuclei", body: "About 1.5 billion years ago. Eukaryotic cells, which have a nucleus, have evolved. Animals have not yet appeared." },
      { at: 0.874, when: "November 15", title: "First animals", body: "About 575 million years ago, the first animal fossils appear. Most of the major groups of animals appear in the fossil record starting about 539 million years ago, at the start of the Cambrian period." },
      { at: 0.918, when: "December 1", title: "Tiktaalik", body: "About 375 million years ago. Tiktaalik is a fish with limb-like fins and a neck. Four-legged animals appear soon after." },
      { at: 0.949, when: "December 12", title: "First dinosaurs", body: "About 230 million years ago, the first dinosaurs appear." },
      { at: 0.985, when: "December 26", title: "Non-bird dinosaurs go extinct", body: "About 66 million years ago, an asteroid impact causes the extinction of the non-bird dinosaurs. Birds survive. Birds are dinosaurs." },
      { at: 0.9993, when: "December 31, about 6 p.m.", title: "Lucy", body: "Lucy is an Australopithecus afarensis who lived about 3.2 million years ago. She walked upright and had a small brain." },
      { at: 1, when: "December 31, last 35 minutes", title: "Homo sapiens", body: "Our species is about 300,000 years old, which is about the last 35 minutes of the year. Written history covers about the last 35 seconds." },
    ];
    var pos = 0;
    host.appendChild(text("h2", "", "Earth's history as one calendar year"));
    host.appendChild(paragraph("The 4.54 billion years of Earth's history are shown as one year. January 1 is when the Earth formed, and midnight on December 31 is the present. The bar is to scale. Move the slider or choose an event."));
    var bar = el("div", "yearbar");
    var marker = el("i");
    bar.appendChild(marker);
    host.appendChild(bar);
    var slider = el("input", "slider");
    slider.type = "range";
    slider.min = "0";
    slider.max = "1000";
    slider.value = "0";
    host.appendChild(slider);
    var card = el("div");
    host.appendChild(card);
    var jumps = el("div");
    host.appendChild(jumps);
    function nearest(value) {
      var best = 0;
      chapters.forEach(function (chapter, i) {
        if (Math.abs(chapter.at - value) < Math.abs(chapters[best].at - value)) best = i;
      });
      return best;
    }
    function render() {
      var year = pos / 1000;
      var current = nearest(year);
      marker.style.left = (year * 100) + "%";
      slider.value = String(pos);
      slider.setAttribute("aria-valuetext", chapters[current].when + ", " + chapters[current].title);
      clear(card);
      card.appendChild(text("p", "label", chapters[current].when));
      card.appendChild(text("h3", "", chapters[current].title));
      card.appendChild(paragraph(chapters[current].body));
      clear(jumps);
      chapters.forEach(function (chapter, i) {
        jumps.appendChild(button(chapter.when + ": " + chapter.title, "chapter" + (i === current ? " on" : ""), function () {
          pos = Math.round(chapter.at * 1000);
          render();
        }));
      });
    }
    slider.addEventListener("input", function () {
      pos = Number(slider.value);
      render();
    });
    render();
  }

  function mountHomology(host) {
    var bones = [
      { id: "humerus", label: "Upper arm bone" },
      { id: "pair", label: "Forearm bones" },
      { id: "wrist", label: "Wrist bones" },
      { id: "digits", label: "Digits" },
    ];
    var active = "humerus";
    var limbs = [
      { cls: "human", name: "Human arm", note: "Used for reaching and gripping." },
      { cls: "bat", name: "Bat wing", note: "The digits are very long, with skin stretched between them." },
      { cls: "whale", name: "Whale flipper", note: "Short and stiff, used for steering." },
      { cls: "horse", name: "Horse foreleg", note: "The horse stands on one long digit. The other digits are reduced to small splint bones." },
    ];
    host.appendChild(text("h2", "", "Limb bones compared"));
    host.appendChild(paragraph("Each limb has one upper bone, two forearm bones, a group of wrist bones, and digits. The diagram is simplified. Select a bone to highlight it in every limb."));
    var view = el("div");
    host.appendChild(view);
    function render() {
      clear(view);
      var row = el("div", "row");
      bones.forEach(function (bone) {
        row.appendChild(button(bone.label, bone.id === active ? "primary" : "ghost", function () {
          active = bone.id;
          render();
        }));
      });
      view.appendChild(row);
      var grid = el("div", "limbs");
      limbs.forEach(function (limb) {
        var card = el("div", "limb " + limb.cls);
        card.appendChild(text("h3", "", limb.name));
        card.appendChild(boneEl("humerus", "bone humerus"));
        card.appendChild(boneEl("pair", "bone pair", 2));
        card.appendChild(boneEl("wrist", "bone wrist"));
        card.appendChild(boneEl("digits", "bone digits", 5));
        card.appendChild(paragraph(limb.note));
        grid.appendChild(card);
      });
      view.appendChild(grid);
    }
    function boneEl(id, className, count) {
      var node = el("div", className + (id === active ? " on" : ""));
      node.setAttribute("data-bone", id);
      if (count) {
        for (var i = 0; i < count; i++) node.appendChild(el("i"));
      }
      return node;
    }
    render();
  }

  function mountBlindspot(host) {
    host.appendChild(text("h2", "", "Find your blind spot"));
    host.appendChild(paragraph("Cover your left eye and look at the dot with your right eye. Keep looking at the dot, and slowly move the screen closer to you and farther away. At some distance the cross disappears."));
    var row = el("div", "blind-row");
    row.appendChild(el("span", "dot"));
    row.appendChild(text("span", "cross", "+"));
    host.appendChild(row);
    host.appendChild(paragraph("The cross disappears when its image falls on the blind spot, the place where the optic nerve leaves the retina and there are no light-detecting cells. The brain fills in the gap using the surrounding image. Octopus eyes evolved separately and are wired differently, so they have no blind spot."));
    host.appendChild(paragraph("If the cross does not disappear, keep looking only at the dot and move more slowly. The distance that works depends on the screen: roughly 50 centimeters for a computer screen and 20 centimeters for a phone."));
  }

  function mountTree(host) {
    var tree = {
      id: "life",
      name: "All living things",
      you: true,
      text: "All living things share a common ancestor. The most recent one is called LUCA, the last universal common ancestor. It was already a cell with DNA and ribosomes, so it was not the first form of life.",
      kids: [
        { id: "bacteria", name: "Bacteria", text: "Single-celled organisms without a nucleus. They live almost everywhere. Mitochondria in the cells of animals, plants, and fungi descend from bacteria." },
        { id: "archaea", name: "Archaea", text: "Pronounced ar-KEE-uh. Single-celled organisms without a nucleus, like bacteria, but a separate group. Many live in extreme places such as hot springs, and many live in ordinary soil and oceans. Eukaryotes are more closely related to archaea than to bacteria." },
        {
          id: "eukarya",
          name: "Eukarya",
          you: true,
          text: "Organisms whose cells have a nucleus. This group includes animals, plants, fungi, and many single-celled organisms such as amoebas and algae.",
          kids: [
            { id: "plants", name: "Plants", text: "Plant cells have chloroplasts as well as mitochondria. Chloroplasts descend from photosynthetic bacteria." },
            { id: "fungi", name: "Fungi", text: "Mushrooms, molds, and yeasts. Fungi are more closely related to animals than to plants." },
            {
              id: "animals",
              name: "Animals",
              you: true,
              text: "Most animal species are invertebrates, which are animals without a backbone. Insects, mollusks, worms, and jellyfish make up most of the group.",
              kids: [
                { id: "others", name: "Invertebrates", text: "Animals without a backbone. They make up most animal species." },
                {
                  id: "verts",
                  name: "Vertebrates",
                  you: true,
                  text: "Animals with a backbone: fish, amphibians, reptiles, birds, and mammals. Land vertebrates descend from lobe-finned fishes. Lungfish are more closely related to humans than to goldfish.",
                  kids: [
                    {
                      id: "mammals",
                      name: "Mammals",
                      you: true,
                      text: "Animals with hair that nurse their young with milk. Birds, reptiles, and amphibians are separate vertebrate groups.",
                      kids: [
                        {
                          id: "primates",
                          name: "Primates",
                          you: true,
                          text: "Lemurs, monkeys, and apes. Primates have grasping hands and forward-facing eyes.",
                          kids: [
                            {
                              id: "apes",
                              name: "Apes",
                              you: true,
                              text: "Primates without a tail: gibbons, orangutans, gorillas, chimpanzees, bonobos, and humans.",
                              kids: [
                                { id: "humans", name: "Humans", you: true, text: "Homo sapiens is the only living species of human. Chimpanzees and bonobos are our closest living relatives. Humans are not more evolved than other living species, because every living species has been evolving for the same length of time since its lineage split from the others." },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
    var open = { life: true };
    host.appendChild(text("h2", "", "Tree of life"));
    host.appendChild(paragraph("Select a name to open that branch. The highlighted names are the path to humans. No branch is ahead of another, because every branch tip has had the same amount of time to evolve."));
    var controls = el("div", "row");
    controls.appendChild(button("Show path to humans", "primary", function () {
      expandYou(tree);
      render();
      var human = host.querySelector('[data-node="humans"]');
      if (human && human.scrollIntoView) human.scrollIntoView({ block: "nearest" });
    }));
    controls.appendChild(button("Collapse all", "ghost", function () {
      open = { life: true };
      render();
    }));
    host.appendChild(controls);
    var view = el("div");
    host.appendChild(view);
    function expandYou(node) {
      if (!node || !node.you) return;
      open[node.id] = true;
      (node.kids || []).forEach(expandYou);
    }
    function render() {
      clear(view);
      walk(tree, view);
    }
    function walk(node, container) {
      var item = el("div", "node");
      var btn = button(node.name, "node-btn" + (node.you ? " you" : ""), function () {
        open[node.id] = !open[node.id];
        render();
      });
      btn.setAttribute("data-node", node.id);
      btn.setAttribute("aria-expanded", open[node.id] ? "true" : "false");
      item.appendChild(btn);
      if (open[node.id]) {
        item.appendChild(paragraph(node.text));
        if (node.kids && node.kids.length) {
          var kids = el("div", "kids");
          node.kids.forEach(function (kid) { walk(kid, kids); });
          item.appendChild(kids);
        }
      }
      container.appendChild(item);
    }
    render();
  }

  function registerWorker() {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", function () {
      var script = document.querySelector('script[src$="app.js"]');
      var base = script && script.src ? new URL(".", script.src) : new URL(".", location.href);
      navigator.serviceWorker.register(new URL("sw.js", base).href, { scope: base.href }).catch(function () {});
    });
  }

  window.addEventListener("hashchange", draw);
  draw();
  registerWorker();
})();
