# ITT401 Data Analytics: Exam Study Hub

Offline study site for **KTU 2019-scheme ITT401 (Data Analytics)**. It is built from:
- the official ITT401 syllabus (course pattern and module structure),
- the six question papers in the `DA/` folder (five ITT401 papers, Dec 2022, May 2023, Dec 2023, May 2024 and Nov 2025, plus IT404 Jun 2022) together with the model QP from the official syllabus, and
- sources cited at the bottom of every Notes topic
  (r4ds.hadley.nz, Apache Hadoop/HBase/Pig/Hive/Spark docs, MongoDB docs,
  NIST/SEMATECH handbook, scikit-learn docs, Wikipedia, the Gomez-Uribe and Hunt
  Netflix paper, the Reddick et al. Facebook study, the Olaya et al. uplift study).

## Open it

Double-click **`index.html`**, which runs offline in any browser with no server, no install and no internet.

## What's inside

| Tab | What it gives you |
|---|---|
| **Notes** | Every syllabus topic by module, each with a definition, a plain-words explanation, an example, an exam tip, a diagram where the exam asks for one, the past papers that hit it, and fresh practice at the bottom. |
| **Practice Q&A** | About 80 new questions that do not overlap with the past papers, presented as reveal-answer cards with marks and difficulty filters. |
| **PYQ** | All 189 questions from the 7 sources (5 ITT401 exams, the Model QP and IT404 Jun 2022), grouped by module and topic and merged by theme with a **×N repeat counter**. That counter is your priority list, and you can filter by paper. |
| **Study Plan** | Exam pattern, marks-by-module and most-repeated-themes tables computed from the papers, plus a night-before plan, answer templates, memory hooks and hall tactics. |

## Files

```
index.html          the page
assets/style.css    layout and reading styles
assets/app.js       renderer (no framework)
data/pyq.js         papers, exam pattern, 189 tagged PYQ entries + repeat keys
data/diagrams.js    8 exam-sketch SVG diagrams
data/module1..5.js  per-module notes + fresh practice Q&A (sources listed inside)
data/tactics.js     study-tactic articles
```
