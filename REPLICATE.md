# Study Hub Replication Prompt

> Paste this whole document into a new session, then fill in the section at
> the very bottom for your subject. Reference implementation:
> https://github.com/AFarHitman7/itt401-study-hub (ITT401 Data Analytics, KTU 2019 scheme)

---

You are building an offline-first exam study website for one university
subject. Everything below is a contract: the priorities, the pipeline, the
schema, the style specs, the UI end-state, the verification bar, and the
pitfalls already encountered in a prior successful build. Follow it exactly;
deviate only where the subject genuinely demands it.

## 0. What you are building

A pure static site (double-clickable index.html; no server, no build step, no
CDN, no frameworks, no external fonts) with four views:

1. Notes: every syllabus topic per module. definition, plain-words
   explanation, worked example, code where relevant, exam tip, hand-drawn SVG
   diagram where past papers demand one, a "past-paper spotlight" showing
   which papers hit the topic, and fresh practice at the bottom.
2. Practice Q&A: brand-new questions that appear in NO past paper,
   reveal-answer cards, module and difficulty filters.
3. PYQ: every previous-year question from every paper, grouped by module and
   topic, merged by theme with a xN repeat counter, filterable by paper.
4. Study Plan: official exam pattern, computed marks-per-module and
   most-repeated-themes tables, a night-before hour plan, answer templates
   per question format, memory hooks, exam-hall tactics.

Then a public GitHub repo with GitHub Pages hosting.

## 1. Non-negotiable priorities, in order

When anything conflicts, the higher priority wins.

1. Facts are scraped, never generated. Every Notes topic is grounded in
   official or educational sources actually fetched during the build
   (official docs first, then primary papers, then educational references).
   Each topic lists its source URLs at the bottom. If a topic cannot be
   grounded, say so in the final report; never fake it. Never invent
   statistics, dates, or precise figures; a fabricated number inside a
   memorizable example is worse than no example (this happened once and had
   to be surgically removed).
2. Past-paper text is sacred. The PYQ question strings are verbatim exam
   questions. Protect them with a SHA-256 checksum of all concatenated
   question texts, run before and after every editing pass; the hash must
   not move.
3. Structure is frozen across edits. Slugs, block types and their order,
   practice counts, marks, difficulty, sources arrays, code blocks: any
   content rewrite records the structural dump before editing and proves it
   identical after. node --check after every file change.
4. Readability is the product. A documentation page, but warmer, aimed at a
   tired student the night before. Every typography and layout decision
   serves scanning and comprehension (sections 3 and 4).
5. Frequency drives everything. Repeat counters, the priority table, the
   night-before plan: computed live from the PYQ data, never hardcoded in
   prose (a hardcoded "six papers" miscount slipped in once; counts in copy
   are derived or omitted).
6. Evidence before claims. Nothing is declared working without a command or
   assertion proving it, run independently by you, not only by a subagent.

## 2. Inputs the user supplies

- The official syllabus PDF (module list, hours, exam pattern, model
  question paper, textbooks).
- Question paper PDFs, as many past papers as available.
- University, scheme, course code, semester.
- Optionally: a GitHub account for hosting; a preferred rewrite model.

## 3. Pipeline

### Stage A - Extract and tag (do this first, personally, not via subagent)

1. Extract every PDF to text (pymupdf or pdftotext; if the model cannot read
   PDFs directly, extract with Python). Read the syllabus fully: module
   titles, hours, topics, exam pattern, assessment split, model QP.
2. Author the PYQ dataset personally: every question from every paper as
   {paper, no, part, marks, module, topic-slug, repeat-key, verbatim-text}.
   Hand-assign repeat keys and human-readable theme labels; do NOT rely on
   fuzzy matching. Within-paper repeats (the same theme asked twice in one
   paper) count as separate occurrences. Include the syllabus model QP as
   its own paper. If a predecessor-subject paper exists (older scheme),
   include it, tag its off-syllabus topics as a separate module and display
   them separately so the student does not waste time on them.
3. Design the topic slugs now (one slug per syllabus topic, per module).
   These are the contract between PYQ data and notes; every PYQ entry's topic
   must resolve to a slug.
4. Validate: every repeat key has a label, every slug resolves, per-paper
   counts match the papers, checksum recorded.

### Stage B - Site shell (build before content so integration is continuous)

    index.html
    assets/style.css        light theme + prefers-color-scheme dark theme
    assets/app.js           renderer: views, routing, filters, search, accordion
    data/pyq.js             exam pattern + papers + repeat labels + PYQ array
    data/diagrams.js        inline SVGs (unique marker ids per diagram)
    data/module1..N.js      per-module notes + practice (subagents write these)
    data/tactics.js         study-tactic articles
    README.md

Data files set window.* globals, loaded via plain script tags (works from
file://). Renderer is vanilla JS. Exact topic schema:

    window.DA_MODULES = window.DA_MODULES || {};
    window.DA_MODULES[1] = {
      num: 1, title: "...", hours: 7,
      topics: [
        { slug: "m1-lifecycle", title: "...", sources: ["https://..."],
          blocks: [
            { type: "definition", text: "one sentence, 25 words max" },
            { type: "text", html: "<p>...</p>" },
            { type: "code", lang: "r", html: "..." },
            { type: "diagram", id: "lifecycle" },
            { type: "example", html: "<p>...</p>" },
            { type: "tip", html: "<p>...</p>" }
          ],
          practice: [ { q: "...", a: "<p>...</p>", marks: 3, diff: "easy" } ] }
      ]
    };

### Stage C - Module content via parallel subagents (one per module)

Each subagent gets: the file path, the exact slug list for its module, the
schema, topic-by-topic source URLs to fetch, the style spec below, the PYQ
avoid-list for its module (so fresh practice never duplicates past-paper
themes), and these hard protections:

- Slugs, block types and their order, sources arrays, marks and difficulty,
  practice counts, code blocks, facts, numbers, and technical terms are
  untouchable. Grader-matching keywords stay verbatim; plain language wraps
  around them.
- SCRAPE FIRST, WRITE SECOND: fetch the listed URLs (websearch for
  alternatives on failure), rewrite in own words, list what was actually read
  in sources, report anything ungrounded.
- Practice: 10-14 questions per module, mixed 3/7/14 marks, difficulty
  spread, each with a model answer a grader would accept.
- Verify before reporting: node --check, structural dump identical to
  baseline, banned-tell scan, and 3 before/after examples.

Content style: TWO passes (the first pass alone overcorrects into telegraph
rhythm; the second pass is what makes it good).

Pass 1 - simple, stupid-clear:
- Short sentences, one idea each, everyday words, point-first paragraphs.
- Definitions: one sentence, 25 words max, plain enough to memorize.
- Examples: concrete stories. Tips: 2-5 imperative sentences with marks
  mechanics ("Draw the diagram first.").
- Banned: em-dashes, delve, landscape, leverage, notably, comprehensive,
  crucial, seamless, Moreover/Furthermore/Additionally, "It's not X, it's Y",
  "In today's world".

Pass 2 - natural teaching voice:
- The problem to fix: pass-1 text reads like bullet points wearing a sentence
  costume ("Three reasons. Decisions get faster. Problems show up early.").
- Read-aloud test: every paragraph sounds like a real person explaining.
- Vary sentence length; three or more consecutive ultra-short fragments is a
  flaw. Build flow with real connective logic (because, so, while, which).
- No padding: total prose stays within about 15 percent of current length.
- Everything factual and structural stays frozen; code stays byte-identical.

Reference transformation (include in every agent brief):

  BEFORE (pass 1): "Why do businesses bother? Three reasons. Decisions get
  faster because they rest on evidence, not gut feel. Problems show up early,
  while they are still cheap to fix."
  AFTER (pass 2): "Why do businesses bother with analytics? Because decisions
  get faster when they rest on evidence instead of gut feel, and because
  problems show up early, while they are still cheap to fix. There is a third
  payoff too: once a plan is running, the data tells you whether it actually
  worked."

Skills each content subagent must load: writing-skills, copywriting,
copy-editing, stop-slop. If the user names a specific rewrite model, look up
its exact ID first and use a hosting their account's credits cover (a
pay-as-you-go hosting with an empty balance kills six agents at once).

### Stage D - Study tactics content

Pattern facts from the syllabus (marks split, duration, Bloom weights,
continuous-assessment numbers), memory hooks (mnemonics for every
unavoidable list), a night-before hour-blocked plan, answer templates per
question format (short: define, list, tiny example; long: definition,
labelled diagram, ordered explanation, concrete example, comparison), hall
tactics, and the computed frequency tables rendered live from the data.

### Stage E - UI end-state (the final design after all fixes)

Skills the UI subagent(s) must load: anti-ui-slop, design-taste-frontend,
frontend-design (they are landing-page biased; apply the contrast,
typography, hierarchy and state-coverage parts; ignore heroes and marquees).

Sidebar - accordion, not a flat list:
- Collapsible module sections: numbered badge, title, topic count, chevron.
  First open by default; explicit toggles persist in memory; the active
  topic's module auto-opens; sticky module headers inside the scrollable
  sidebar; quiet per-topic PYQ count chips; ARIA (expanded, pressed,
  current); search hides non-matching modules, auto-opens matching ones,
  shows a "no topics match" hint, works from every view.

PYQ view - cards with rails, never a text stream:
- Every repeat-group is a bordered, tinted card.
- Card header: one-line compact theme label (truncates with ellipsis, full
  title on hover) + xN badge right-aligned.
- Each occurrence row is a two-column grid: left rail (paper, question
  number, marks - small and quiet, fixed width) beside the question text
  (14.5-15px, full ink color, about 62 characters wide - the dominant
  element on the page). Hairlines between rows.
- "Study this topic in Notes" as a quiet card footer link.
- Module and topic headings are quiet small-caps markers BETWEEN cards,
  never louder than the cards.
- The high-yield frequency table sits behind a collapsed details element so
  the page opens straight into the first module's cards.
- The Notes-view "past-paper spotlight" uses the same card+rail treatment.

Contrast is measured, never guessed: WCAG AA in BOTH themes (body 4.5:1,
large text 3:1), every new pair sampled from computed styles and reported.
Dark mode via prefers-color-scheme as a full theme: all surfaces, code,
tables; diagram boxes keep a light background so the SVGs stay legible.

States: hover, active and focus on every control; visible focus rings;
details reveal cards; chips with clear on/off; prefers-reduced-motion
respected (transform/opacity only, 200ms max).

Mobile: hamburger, overlay with scrim, Escape closes, every navigation
action closes the overlay (the accordion toggle itself may keep the overlay
open, otherwise expanding modules inside the overlay is unusable), no
horizontal overflow from 320px to 1920px.

Overall: quiet documentation-style surface, ONE locked accent color, one
corner-radius system, no decorative gradients, no glows.

### Stage F - Review and regression

1. An independent reviewer subagent (reports only, never edits) over the
   finished site: functional bugs, innerHTML safety of code blocks (see
   pitfalls), data integrity, factual spot-checks, UX blockers. Fix every
   finding; re-verify each fix with an assertion.
2. Your own final regression suite, run personally:
   - node --check on every JS file; zero console errors on every view,
     mobile, and both themes
   - all topic pages render; definitions appear exactly once per page
   - practice count, module filter, difficulty filter, reveal toggles
   - PYQ: group count, badge distribution, paper-chip filtering round-trip,
     off-syllabus section, "study this topic" links navigate
   - search: filters, persists across re-render, no-match hint, clear
     restores
   - routing: hash links, back and forward restore
   - code blocks: assignment arrows and pipe operators intact, generic
     type parameters escaped (see pitfalls)
   - diagrams render; contrast sampled numerically; dark theme applies

### Stage G - Repo and Pages

git init on a clean tree: no temp or verification files; inspect the
tracked file list for junk before pushing (mangled-name temp files slipped
in once and had to be removed before the push). One commit, then:

    gh repo create <subject-study-hub> --public --source=. --push

    gh api -X POST repos/<owner>/<repo>/pages \
      -f "source[branch]=main" -f "source[path]=/"

Wait for the build, then verify the LIVE site: every asset returns 200, the
PYQ view renders its cards, one notes page renders, zero console errors.
Only then hand over the Pages link.

## 4. Pitfalls already hit (do not repeat them)

1. Fabricated precision: an agent invented a "40,000 transactions per
   second" figure while improving flow. Ban invented numbers in every brief,
   and grep newly edited examples for suspiciously precise figures.
2. innerHTML code safety: raw generic type parameters in Java-style code
   (Iterable<IntWritable>) get parsed as HTML tags and silently swallowed.
   R's assignment arrow (<-) and pipe (|>) are HTML5-safe; an angle bracket
   before a letter is not. Escape angle-bracket generics as entity codes
   and assert the rendered code block still contains the original token.
3. Duplicated definition: rendering the definition both as a lead paragraph
   and as the styled box duplicated it on every page. Render it once.
4. Hardcoded counts in prose: compute from data or say nothing.
5. Mid-write races: when several agents edit data files while you run
   browser smoke tests, a data script can transiently fail to load. Never
   trust a failure you cannot reproduce twice; re-run before concluding.
6. Pass-1 overcorrection: simplification produces staccato fragments. The
   second pass exists to restore natural rhythm without adding bulk.
7. Model and billing: confirm the account's credits cover the requested
   model's hosting before dispatching parallel agents to it.
8. Em-dashes slip into visible strings during edits; keep the em-dash scan
   in every verification pass.
9. Mobile overlay regression: adding new sidebar actions silently broke
   "every action closes the overlay" once. The regression list includes
   every action type for this reason.
10. Cancelled-agent residue: a backgrounded or cancelled UI agent can
    leave half-finished edits in shell files. Audit the current state and
    finish from wherever it is; distinguish real breakage from transient
    races before re-dispatching.

## 5. Handoff report format

End with: what was built, per-stage verification evidence (commands and
results), the measured contrast summary, anything not grounded in a source,
anything deliberately not done, and the repo + Pages links.

---

## Fill this in for your subject

- University / scheme:
- Course code and name:
- Semester:
- Syllabus PDF: (path)
- Question paper PDFs: (paths, with exam session names if known)
- Optional: preferred rewrite model:
- Optional: repo name:
