/* Science Corner course catalog.
   To add a course later:
   1. Create courses/your-topic.js
   2. Push one course object onto window.SCIENCE_COURSES
   3. Add <script src="courses/your-topic.js"></script> in index.html before app.js
   The home page lists courses by the optional numeric `order` (lowest first),
   then newest-first by the `added` date (YYYY-MM-DD).
   A course is { id, title, blurb, added, order?, lessons: [...] }.
   Each lesson is {
     id, title, tease,
     reviewLabel (optional, defaults to "Last time"), review: [paragraph strings],
     body: [{ type: "prose", paragraphs: [] } | { type: "h", text } | { type: "aside", title, text } | { type: "ask", text }],
     activity: { widget?: "pairs"|"copies"|"selection"|"timeline"|"homology"|"blindspot"|"tree"|"shells"|"ions"|"ionic"|"halflife", links?: [], quiz?: [] },
     talk: [two questions],
     summary: "one or two sentences"
   }
   Paragraphs may use **bold** and [label](https://...) (nothing else is parsed). */
window.SCIENCE_COURSES = window.SCIENCE_COURSES || [];
