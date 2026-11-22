/* ============================================================
   Study tactics: strategy articles for the Study Plan tab.
   Exam-pattern facts come from the official ITT401 syllabus;
   frequency tables are computed live from DA_PYQ by app.js.
   ============================================================ */

window.DA_TACTICS = [
{
  id: "nightbefore",
  title: "Tonight's plan when the exam is tomorrow",
  html: `
  <p>Do not read the modules in order tonight. Study by frequency instead, because the tables above are built from your own papers: a theme the exam has asked five or six times is the one you must be able to write in your sleep. Work in short blocks with breaks, ending each one by recalling with the page closed instead of reading again.</p>
  <div class="tl">
    <div class="ts">Block 1 · 50 min · high-yield core</div>
    <p>Read the Notes pages for every theme marked ×4 or higher, then close the page and write the skeleton from memory: the phase names, the list items, the diagram boxes. Check what you missed, then do it once more.</p>
  </div>
  <div class="tl">
    <div class="ts">Block 2 · 40 min · the six diagrams</div>
    <p>Draw all six from memory: life cycle, MapReduce flow, HDFS, YARN anatomy, Hive architecture, Spark job. Each one appears as a 7 to 14 mark question somewhere in your papers, and a wrong diagram with labels still scores while a perfect paragraph without the asked diagram loses marks.</p>
  </div>
  <div class="tl">
    <div class="ts">Block 3 · 40 min · the code verbs</div>
    <p>Cover dplyr's five verbs, tidyr's pivot and gather pairs, MongoDB insert, update and delete, and the R basics, writing each function signature by hand once. Code questions are easy marks when you know the syntax, and you cannot improvise it in the hall.</p>
  </div>
  <div class="tl">
    <div class="ts">Block 4 · 30 min · Practice Q&amp;A sprint</div>
    <p>Open the Practice tab and answer 10 new questions in writing. They are built to <b>not</b> overlap with the past papers, so anything unfamiliar there is a fair surprise. Then read the PYQ tab once from top to bottom, because seeing every past question tonight is the best way to recognise one tomorrow.</p>
  </div>
  <div class="tl">
    <div class="ts">Before sleep</div>
    <p>Skim only the definition boxes across all five modules, since those lines are your Part A questions, then sleep 7 hours. Sleep locks in lists better than a 2 a.m. re-read. In the morning, re-skim the high-yield table and the six diagrams, and add nothing new.</p>
  </div>`
},
{
  id: "recall",
  title: "Study methods that work tonight",
  html: `
  <h4>Active recall, not re-reading</h4>
  <p>Re-reading feels like work, yet the exam rewards what you can pull out of your head. After every notes page, close it and write what you remember. The gap between your version and the real one is where the studying happens. Treat the Practice tab and every PYQ question as recall triggers, and reach for them instead of a highlighter.</p>
  <h4>Blurting</h4>
  <p>Use blurting for list-heavy topics such as the 3Vs, the five recommender techniques, the six churn models, NoSQL store types and the five dplyr verbs. Set a 3-minute timer and write everything you know with the page closed, then fill the gaps in a different colour pen. That gap list in the second colour is tonight's real syllabus.</p>
  <h4>The Feynman pass</h4>
  <p>Pick the two topics you understand worst, which for most students are YARN anatomy and uplift modelling. Explain each one out loud in plain words, as if you are talking to a classmate who missed the whole semester. Every place you stall marks a hole, so go back to that one paragraph and then explain it again until it comes out clean.</p>
  <h4>Spaced repetition, compressed</h4>
  <p>Real spacing takes weeks, so tonight you get the compressed version. Look at the high-yield table three times, after Block 1, after Block 4 and again in the morning, because three spaced looks beat six looks in a row.</p>
  <h4>Interleave the modules</h4>
  <p>Part B makes you switch module with every question, so practise that switch tonight. Never study two topics from the same module back to back. Try an M3 diagram, then M1 statistics, then an M5 case study, since that rotation prepares you far better than M3, M3, M3.</p>`
},
{
  id: "templates",
  title: "Answer templates that earn marks",
  html: `
  <h4>3-mark Part A answer: 4 or 5 sentences</h4>
  <ul>
    <li><b>Define</b> the term in one sentence. The definition boxes on each Notes page are written to be that sentence.</li>
    <li><b>Name the list</b>: the 3Vs, the modes, the components. Bullet fragments are fine.</li>
    <li><b>One small example or contrast</b> to show you get it.</li>
  </ul>
  <p>The grader spends under a minute on each of these, so underline key terms lightly and never leave a Part A blank. Even a bare list of the right items still scores 1 or 2 of the 3.</p>
  <h4>14-mark Part B answer: a structure you can repeat</h4>
  <ul>
    <li><b>Opening line</b> that frames the answer in one sentence.</li>
    <li><b>Diagram</b>: draw it if the topic has one (see the six diagrams). Make it big and label every part, because the diagram is often worth 3 or 4 marks on its own and it frames your prose.</li>
    <li><b>Explain in order</b>: walk the parts in the same order you drew them, using the real names (NameNode, ApplicationMaster, persuadables). The grader matches those names to the marking scheme.</li>
    <li><b>Concrete example</b>: reach for the weather dataset for MapReduce, telecom for churn and Netflix for recommenders. The Example boxes are chosen for this.</li>
    <li><b>Close with the comparison or the significance</b> if the question asks (Pig vs SQL, Hive vs RDBMS, advantages and disadvantages). A short table works well if time allows.</li>
  </ul>
  <p>Budget about 25 minutes for a 14-marker with the diagram included. When a question splits into (a) and (b), it is usually 7+7 or 8+6, so give the bigger half the diagram.</p>
  <h4>Time budget for the hall</h4>
  <ul>
    <li>0:00 to 0:40: Part A, all ten, with a hard cap of about 4 minutes each. If anything sticks, park it with a one-line skeleton and move on.</li>
    <li>0:40 to 2:55: Part B, about 26 minutes per module with the choice included. Read both options for a module first, then pick the one you can <b>draw</b> rather than the one you only recognise.</li>
    <li>2:55 to 3:00: go back over the parked Part A questions and fill the gaps.</li>
  </ul>`
},
{
  id: "memory",
  title: "Memory hooks for the hard lists",
  html: `
  <ul>
    <li><b>3Vs:</b> Volume, Velocity, Variety, which you can hear as "Big, fast, varied." The extended set adds Veracity and Value.</li>
    <li><b>Life cycle, in order:</b> <b>D</b>ogs <b>D</b>on't <b>P</b>refer <b>M</b>essy <b>B</b>ones, <b>C</b>ats <b>O</b>bserve, which stands for Discovery, Data preparation, Model planning, Model building, Communicate results, Operationalize.</li>
    <li><b>dplyr five verbs:</b> <b>FASMS</b>, meaning filter, arrange, select, mutate, summarize.</li>
    <li><b>NoSQL store types:</b> <b>KCDG</b>, meaning Key-value, Column, Document, Graph.</li>
    <li><b>Five recommender techniques:</b> <b>2C-DKH</b>, meaning Collaborative, Content, Demographic, Knowledge, Hybrid.</li>
    <li><b>YARN run, in order:</b> the client asks the <b>RM</b>, the RM starts the <b>AM</b>, the AM asks for <b>containers</b>, tasks run, and the AM <b>unregisters</b>. Say it to yourself as "the resource manager launches, the master asks, the nodes work".</li>
    <li><b>MapReduce:</b> splits, <b>map</b>, <b>shuffle and sort</b>, then <b>reduce</b>. Map stays local, while reduce crosses the network.</li>
    <li><b>Uplift segments:</b> <b>P</b>ersuadables, the ones you target, <b>S</b>ure things and <b>L</b>ost causes, where treatment makes no difference, and <b>S</b>leeping dogs, which you leave alone.</li>
    <li><b>Tidy data:</b> every variable gets a <b>column</b>, every observation gets a <b>row</b>, and every observational unit gets a <b>table</b>.</li>
    <li><b>Hypothesis errors:</b> a Type I error means you reject a true H0, which is a false alarm, α, while a Type II error means you keep a false H0, which is a missed detection, β.</li>
  </ul>`
},
{
  id: "hall",
  title: "In the hall: small choices worth marks",
  html: `
  <ul class="checklist">
    <li>Answer <b>all</b> of Part A first, since those 30 marks of short questions are the ones you can mostly bank. Part B choice feels easier once Part A is behind you.</li>
    <li>For each Part B module, read <b>both</b> questions to the end before you choose, because the exam pairs one diagram-heavy question with one list-heavy one. Pick the one that matches your best blurt from tonight.</li>
    <li>Label every part of every diagram, because an unlabelled box earns little while a name scores.</li>
    <li>For "compare X and Y" questions, use a two-column table (X | Y, 4 or 5 rows), since the grader reads it faster than paragraphs and it maps straight onto the marking scheme.</li>
    <li>For R code, write clean code that looks runnable, with a short comment per line. The grader checks function names and arguments, since the code itself is never executed.</li>
    <li>Never skip part (b) of a question you chose, because (b) is often the cheap half: 4 to 6 marks for a short definition like "significance of ANOVA".</li>
    <li>If you are short on time, a correct labelled diagram plus an itemised list beats an unfinished essay, since fragment answers still collect marking-scheme points.</li>
  </ul>`
}
];
