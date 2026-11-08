/* Bedtime Science reader. Content lives in courses/*.js. */
(function () {
  "use strict";

  var KEY = "bedtime-science-v1";
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
    return (window.BEDTIME_COURSES || []).slice().sort(function (a, b) {
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
      button.textContent = night ? "Warmer" : "Dimmer";
      button.setAttribute("aria-pressed", night ? "true" : "false");
      button.setAttribute("aria-label", night ? "Switch to the warmer lamp" : "Dim the lamp for bedtime");
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
    document.title = "Bedtime Science";
    var bar = el("header", "topbar");
    var heading = el("div");
    heading.appendChild(text("p", "eyebrow", "For bedtime"));
    heading.appendChild(text("h1", "", "Bedtime Science"));
    bar.appendChild(heading);
    bar.appendChild(themeButton());
    sheet.appendChild(bar);
    sheet.appendChild(el("div", "rule"));
    sheet.appendChild(paragraph("Short lessons to read together. Made for Brian and his daughter. One course so far — more can be added the same way, as a new file of nights."));
    var list = courses();
    if (!list.length) {
      sheet.appendChild(paragraph("No courses are loaded yet."));
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
      card.appendChild(text("span", "meta", total + " nights · about 10 minutes each"));
      card.appendChild(text("span", "blurb", course.blurb || ""));
      card.appendChild(text("span", "meta", done + " of " + total + " marked done on this device"));
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
    sheet.appendChild(text("p", "colophon", "Checkmarks stay on this phone or tablet only. Nothing is sent anywhere. Outside links go to Learn.Genetics at the University of Utah, HHMI BioInteractive, PBS Eons, Crash Course Kids, PhET, the Smithsonian Human Origins Program, and Understanding Evolution at Berkeley. They were checked in November 2026."));
  }

  function renderCourse(sheet, course) {
    document.title = course.title + " · Bedtime Science";
    var lessons = course.lessons || [];
    var next = continueLesson(course);
    var undone = firstUndone(course);
    sheet.appendChild(backLink("#/", "All courses"));
    var bar = el("header", "topbar");
    var heading = el("div");
    heading.appendChild(text("p", "eyebrow", lessons.length + " nights"));
    heading.appendChild(text("h1", "", course.title));
    bar.appendChild(heading);
    bar.appendChild(themeButton());
    sheet.appendChild(bar);
    sheet.appendChild(el("div", "rule"));
    sheet.appendChild(paragraph(course.blurb || ""));
    sheet.appendChild(paragraph("Read a night out loud, or take turns. Do the one activity, or watch the one short video. Mark it done when you stop — ten minutes is enough, even mid-sentence."));
    if (next) {
      var go = el("a", "go");
      var nightNo = 1;
      for (var i = 0; i < lessons.length; i++) if (lessons[i].id === next.id) nightNo = i + 1;
      var allDone = !undone;
      go.href = "#/" + course.id + "/" + next.id;
      go.textContent = allDone ? "Read again from night 1" : (doneCount(course) === 0 && (!state.last || state.last.course !== course.id) ? "Start night 1" : "Continue · night " + nightNo);
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
      mark.setAttribute("aria-label", isDone(course, lesson) ? "Done" : "Not done yet");
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
    document.title = "Bedtime Science";
    sheet.appendChild(text("h1", "", "That page isn't here"));
    sheet.appendChild(backLink("#/", "Back to the courses"));
  }

  function renderLesson(sheet, course, lesson, index) {
    document.title = lesson.title + " · Bedtime Science";
    state.last = { course: course.id, lesson: lesson.id };
    save();
    var lessons = course.lessons;
    sheet.appendChild(backLink("#/" + course.id, course.title));
    var bar = el("header", "topbar");
    var heading = el("div");
    heading.appendChild(text("p", "eyebrow", "Night " + (index + 1) + " of " + lessons.length));
    heading.appendChild(text("h1", "", lesson.title));
    bar.appendChild(heading);
    bar.appendChild(themeButton());
    sheet.appendChild(bar);
    sheet.appendChild(el("div", "rule"));

    if (lesson.review && lesson.review.length) {
      var review = el("section", "review");
      review.appendChild(text("p", "label", lesson.reviewLabel || "Yesterday"));
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
        ask.appendChild(text("p", "label", "Pause and ask"));
        ask.appendChild(paragraph(block.text || ""));
        sheet.appendChild(ask);
      } else if (block.type === "h") {
        sheet.appendChild(text("h2", "", block.text || ""));
      }
    });

    var activity = lesson.activity || {};
    if (activity.widget && WIDGETS[activity.widget]) {
      var widget = el("section", "widget");
      widget.setAttribute("aria-label", "Tonight's activity");
      WIDGETS[activity.widget](widget);
      sheet.appendChild(widget);
    }
    (activity.links || []).forEach(function (item) { sheet.appendChild(linkCard(item)); });
    if (activity.quiz && activity.quiz.length) sheet.appendChild(quizCard(activity.quiz));

    if (lesson.talk && lesson.talk.length) {
      var talk = el("section", "talk");
      talk.appendChild(text("h2", "", "If the lamp is still on"));
      var ol = el("ol");
      lesson.talk.forEach(function (line) {
        var li = el("li");
        appendRich(li, line);
        ol.appendChild(li);
      });
      talk.appendChild(ol);
      sheet.appendChild(talk);
    }

    if (lesson.lights) {
      var lights = el("section", "lights");
      lights.appendChild(text("p", "label", "Before lights out"));
      lights.appendChild(paragraph(lesson.lights));
      sheet.appendChild(lights);
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
    box.appendChild(text("h2", "", "A quick check"));
    box.appendChild(paragraph("No score is saved. Missing one just means it was a good question."));
    var cursor = 0;
    var stage = el("div");
    box.appendChild(stage);

    function show() {
      clear(stage);
      if (cursor >= questions.length) {
        stage.appendChild(paragraph("That's the check. You can leave it, or run it again tomorrow and see what stuck."));
        var again = el("button", "ghost");
        again.type = "button";
        again.textContent = "Try these again";
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
          next.textContent = cursor === questions.length - 1 ? "Finish check" : "Next question";
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
    bar.setAttribute("aria-label", "Night to night");
    var wrap = el("div", "wrap");
    var prev = el("a", "ghost");
    if (index > 0) {
      prev.href = "#/" + course.id + "/" + lessons[index - 1].id;
      prev.textContent = "Prev";
    } else {
      prev.href = "#/" + course.id;
      prev.textContent = "Nights";
    }
    var done = el("button", "primary" + (isDone(course, lesson) ? " done" : ""));
    done.type = "button";
    done.id = "done-btn";
    function paintDone() {
      var on = isDone(course, lesson);
      done.className = "primary" + (on ? " done" : "");
      done.textContent = on ? "Done" : "Mark done";
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
      next.textContent = "Nights";
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
    host.appendChild(text("h2", "", "Pair the bases"));
    host.appendChild(paragraph("A cell matches **A with T** and **C with G**. Those rungs are hydrogen bonds. Fill in the other strand."));
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
        view.appendChild(paragraph("That's the zipper. The backbone stays put, held by stronger covalent bonds. The hydrogen bonds are the part that can open."));
        view.appendChild(button("Pair another strand", "ghost", function () {
          index = 0;
          note = "";
          render();
        }));
        return;
      }
      view.appendChild(text("p", "status", note || "Letter " + (index + 1) + " of 8 — which base fits?"));
      var row = el("div", "row");
      ["A", "T", "C", "G"].forEach(function (letter) {
        row.appendChild(button(letter, "primary", function () {
          if (letter === match[template[index]]) {
            index += 1;
            note = index >= template.length ? "" : "Yes. " + template[index - 1] + " holds " + letter + ".";
          } else {
            note = letter + " doesn't hold " + template[index] + ". A holds T. C holds G.";
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
    host.appendChild(text("h2", "", "Copy the recipe"));
    host.appendChild(paragraph("Each row is a copy of the row above it. This toy mistypes on purpose, so you can see a typo. Real DNA copying is far more careful: a human baby has on the order of a hundred new letter changes, out of three billion letters."));
    var view = el("div");
    host.appendChild(view);
    function render() {
      clear(view);
      rows.forEach(function (row, rowIndex) {
        var line = el("p", "seq");
        line.appendChild(document.createTextNode(rowIndex === 0 ? "Start  " : "Copy " + rowIndex + " "));
        row.forEach(function (letter, i) {
          if (letter !== original[i]) line.appendChild(text("b", "", letter));
          else line.appendChild(document.createTextNode(letter));
          line.appendChild(document.createTextNode(" "));
        });
        view.appendChild(line);
      });
      var changed = rows[rows.length - 1].some(function (letter, i) { return letter !== original[i]; });
      view.appendChild(paragraph(changed ? "Gold letters differ from the start. Nothing chose them. Selection, later, can only work with whatever copying left behind." : "No gold letters yet. Copy again. A typo will show up."));
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
    host.appendChild(text("h2", "", "The beetle patch"));
    host.appendChild(paragraph("You are the bird. You get six pecks. Tap the beetles you notice. Then the survivors have babies, and a baby usually matches its parent."));
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
      view.appendChild(text("p", "status", "Season " + season + " · " + ground + " · green " + tally.green + " · brown " + tally.brown + " · pecks left " + pecks));
      var patch = el("div", "patch " + habitat);
      beetles.forEach(function (beetle) {
        var bug = el("button", "beetle " + beetle.color + (beetle.alive ? "" : " gone") + (beetle.mut ? " mut" : ""));
        bug.type = "button";
        bug.disabled = !beetle.alive || pecks <= 0;
        bug.setAttribute("aria-label", (beetle.color === "green" ? "Green" : "Brown") + " beetle" + (beetle.mut ? ", a new color from a mutation" : ""));
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
      if (pecks > 0) line = "The ones that stand out on " + ground + " are the " + easier + " beetles. A honey ring means that baby got a mutation.";
      else line = "Pecks used up. Survivors have the babies. Babies mostly match a parent. About one in twelve flips color.";
      if (switched) line += " Same beetles, new ground. Who is easy to see just changed.";
      view.appendChild(paragraph(line));
      var row = el("div", "row");
      if (pecks <= 0) {
        row.appendChild(button("Survivors have babies", "primary", function () {
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
      row.appendChild(button(labels ? "Hide letters" : "Label the colors", "ghost", function () {
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
      { at: 0, when: "January 1", title: "Earth forms", body: "About 4.5 billion years ago. Molten rock, a young atmosphere, no life." },
      { at: 0.229, when: "March 25", title: "Life is already here", body: "By about 3.5 billion years ago there are fossil clues of microbes. Maybe earlier. For a very long time, that is the whole living world." },
      { at: 0.471, when: "June 21", title: "Oxygen changes the air", body: "Bacteria that photosynthesize have been leaking oxygen. Around 2.4 billion years ago it starts to remake the atmosphere." },
      { at: 0.67, when: "August", title: "Still mostly microbes", body: "Drag slowly. Animals have not started. If the year is Earth's history, summer is still a microbial planet." },
      { at: 0.874, when: "November 15", title: "Animals", body: "Around 575 million years ago, the first animals. A few days later, in the Cambrian, many of the animal body plans show up in the rocks. Latecomers, all of them." },
      { at: 0.918, when: "December 1", title: "A fish with wrists", body: "Tiktaalik, about 375 million years ago. Fins, scales, and also a neck and wrist bones. Tomorrow's rocks, if you are on that night." },
      { at: 0.949, when: "December 12", title: "Dinosaurs begin", body: "Around 230 million years ago. They will own a lot of the land for a long time. They are still not the point of the year." },
      { at: 0.985, when: "December 26", title: "The non-bird dinosaurs end", body: "About 66 million years ago, an asteroid. Birds make it through. A bird is a dinosaur, the way a bat is a mammal." },
      { at: 0.9993, when: "December 31, about 6 p.m.", title: "Lucy", body: "Australopithecus, about 3.2 million years ago. Walking upright, small brain. On this calendar she arrives in the early evening of the last day." },
      { at: 1, when: "December 31, last minutes", title: "Us", body: "Homo sapiens is about 300,000 years old: roughly the last 35 minutes before midnight. Written history is the last couple of minutes. A childhood is shorter than a blink on this clock." },
    ];
    var pos = 0;
    host.appendChild(text("h2", "", "If Earth's history were one year"));
    host.appendChild(paragraph("January 1 is the planet forming. Midnight on December 31 is tonight. The bar is to scale. The buttons are there so you don't have to hunt for us in the last pixel."));
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
        jumps.appendChild(button(chapter.when + " — " + chapter.title, "chapter" + (i === current ? " on" : ""), function () {
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
      { id: "humerus", label: "One upper bone" },
      { id: "pair", label: "Two forearm bones" },
      { id: "wrist", label: "A cluster of wrist bones" },
      { id: "digits", label: "Digits" },
    ];
    var active = "humerus";
    var limbs = [
      { cls: "human", name: "Your arm", note: "For reaching and holding." },
      { cls: "bat", name: "A bat's wing", note: "The digits are long. Skin stretches between them." },
      { cls: "whale", name: "A whale's flipper", note: "Short and stiff, for steering a huge body." },
      { cls: "horse", name: "A horse's front leg", note: "The horse stands on one long digit. The other digits shrank." },
    ];
    host.appendChild(text("h2", "", "Same bones, four jobs"));
    host.appendChild(paragraph("Simplified on purpose. The real pattern is one bone, then two, then many little bones, then digits. Tap a bone and it lights up in every limb."));
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
    host.appendChild(text("h2", "", "Find the blind spot"));
    host.appendChild(paragraph("Cover your left eye. Look at the dot with your right eye only. Keep looking at the dot — don't glance at the cross — and move the phone slowly closer and farther."));
    var row = el("div", "blind-row");
    row.appendChild(el("span", "dot"));
    row.appendChild(text("span", "cross", "+"));
    host.appendChild(row);
    host.appendChild(paragraph("When the cross vanishes, that bit of the page is falling on the place where the nerve leaves the eye. The brain fills the hole in. An octopus eye, which evolved separately, is wired so it doesn't have this gap. Ours does, because of history, and it is good enough."));
    host.appendChild(paragraph("If you can't find it, try the phone a bit farther away, still looking only at the dot. It is a small trick, not a test."));
  }

  function mountTree(host) {
    var tree = {
      id: "life",
      name: "All life we know",
      you: true,
      text: "One connected family. The root we can infer is LUCA, the last universal common ancestor: already a cell with DNA and ribosomes, not the first living thing.",
      kids: [
        { id: "bacteria", name: "Bacteria", text: "One of the three great branches. Tiny cells, no nucleus, and an astonishing range of ways to make a living. Your mitochondria used to be bacteria." },
        { id: "archaea", name: "Archaea", text: "Say ar-KEE-uh. Not 'ancient bacteria' — their own branch. Eukaryotes, including you, are closer to archaea than to bacteria." },
        {
          id: "eukarya",
          name: "Eukarya",
          you: true,
          text: "Cells with a nucleus. Animals, plants, fungi, and a huge crowd of microbes that are neither.",
          kids: [
            { id: "plants", name: "Plants", text: "They have a second bacterial roommate besides mitochondria: the chloroplast, which does the photosynthesis." },
            { id: "fungi", name: "Fungi", text: "Mushrooms, yeast, mold. Closer cousins to animals than plants are. A mushroom is more like you than like a daisy." },
            {
              id: "animals",
              name: "Animals",
              you: true,
              text: "Most animals are not vertebrates. Insects, snails, jellyfish, and worms are the bulk of the branch.",
              kids: [
                { id: "others", name: "Most animals", text: "No backbone. This is the majority, not a leftover category." },
                {
                  id: "verts",
                  name: "Vertebrates",
                  you: true,
                  text: "A backbone. Fishes are relatives along and beside our line. We did not come from a salmon. Lungfish are closer cousins than a goldfish is.",
                  kids: [
                    {
                      id: "mammals",
                      name: "Mammals",
                      you: true,
                      text: "Hair or fur, and milk. Birds, reptiles, and amphibians are other vertebrate branches, not steps we passed through on a ladder.",
                      kids: [
                        {
                          id: "primates",
                          name: "Primates",
                          you: true,
                          text: "Grasping hands and forward-facing eyes. Lemurs, monkeys, and apes.",
                          kids: [
                            {
                              id: "apes",
                              name: "Apes",
                              you: true,
                              text: "No tail. Gibbons, orangutans, gorillas, chimpanzees, bonobos, and humans.",
                              kids: [
                                { id: "humans", name: "Humans", you: true, text: "One living species, Homo sapiens. A twig. Not the point of the tree, and not more evolved than the bacteria at the other side of the page." },
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
    host.appendChild(text("h2", "", "A tree, not a ladder"));
    host.appendChild(paragraph("Tap a name to open it. The honey edge marks the path that leads to you. Nothing on the tree is 'ahead' of anything else. Every tip has had the same amount of time."));
    var controls = el("div", "row");
    controls.appendChild(button("Where am I?", "primary", function () {
      expandYou(tree);
      render();
      var human = host.querySelector('[data-node="humans"]');
      if (human && human.scrollIntoView) human.scrollIntoView({ block: "nearest" });
    }));
    controls.appendChild(button("Close the branches", "ghost", function () {
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
      navigator.serviceWorker.register(new URL("sw.js", base).href).catch(function () {});
    });
  }

  window.addEventListener("hashchange", draw);
  draw();
  registerWorker();
})();
