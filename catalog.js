/* Science Corner course catalog.
   To add a course later:
   1. Create courses/your-topic.js
   2. Push one course object onto window.SCIENCE_COURSES
   3. Add <script src="courses/your-topic.js"></script> in index.html before app.js
   The home page lists courses newest-first by the `added` date (YYYY-MM-DD).
   A course is { id, title, blurb, added, lessons: [...] }.
   Each lesson is {
     id, title, tease,
     reviewLabel, review: [paragraph strings],
     body: [{ type: "prose", paragraphs: [] } | { type: "aside", title, text } | { type: "ask", text }],
     activity: { widget?: "pairs"|"copies"|"selection"|"timeline"|"homology"|"blindspot"|"tree", links?: [], quiz?: [] },
     talk: [two questions],
     lights: "one sentence to land on"
   }
   Paragraphs may use **bold** and [label](https://...) — nothing else is parsed. */
window.SCIENCE_COURSES = window.SCIENCE_COURSES || [];
