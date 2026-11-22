/* ============================================================
   Exam-sketch diagrams (inline SVG, no external assets).
   Each entry: cap = caption · svg = drawing.
   app.js wraps these in a .diagram box.
   ============================================================ */

window.DA_DIAGRAMS = {
"lifecycle": {
  cap: "The Data Analytics Life Cycle — six phases in order (practise sketching this: it has appeared in 5 of 6 papers).",
  svg: `<svg viewBox="0 0 640 250" width="640" height="250">
  <defs><marker id="ar-lc" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill="#0b6e63"/></marker></defs>
  ${[ [20,30,"1","Discovery"], [220,30,"2","Data Preparation"], [420,30,"3","Model Planning"] ].map(b=>`
  <g><rect x="${b[0]}" y="${b[1]}" width="180" height="60" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="${b[0]+90}" y="${b[1]+27}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0a5c53">${b[2]}</text>
  <text x="${b[0]+90}" y="${b[1]+46}" text-anchor="middle" font-size="12.5" fill="#24292f">${b[3]}</text></g>`).join("")}
  <line x1="200" y1="60" x2="218" y2="60" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-lc)"/>
  <line x1="400" y1="60" x2="418" y2="60" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-lc)"/>
  ${[ [420,160,"4","Model Building"], [220,160,"5","Communicate Results"], [20,160,"6","Operationalize"] ].map(b=>`
  <g><rect x="${b[0]}" y="${b[1]}" width="180" height="60" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="${b[0]+90}" y="${b[1]+27}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0a5c53">${b[2]}</text>
  <text x="${b[0]+90}" y="${b[1]+46}" text-anchor="middle" font-size="12.5" fill="#24292f">${b[3]}</text></g>`).join("")}
  <line x1="510" y1="90" x2="510" y2="158" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-lc)"/>
  <line x1="420" y1="190" x2="402" y2="190" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-lc)"/>
  <line x1="220" y1="190" x2="202" y2="190" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-lc)"/>
  <text x="320" y="130" text-anchor="middle" font-size="11" fill="#8a8578">the loop feeds back: findings refine the next discovery</text>
  </svg>`},

"mapreduce-flow": {
  cap: "MapReduce data flow: input splits → map → shuffle & sort → reduce → output.",
  svg: `<svg viewBox="0 0 680 170" width="680" height="170">
  <defs><marker id="ar-mr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill="#0b6e63"/></marker></defs>
  ${[ [12,"Input splits","(HDFS blocks)","#fdf6e3","#b98a00"], [152,"Map","emit (key, value)","#eef6f4","#0b6e63"],
      [292,"Shuffle &amp; Sort","group by key","#eef6f4","#0b6e63"], [432,"Reduce","aggregate per key","#eef6f4","#0b6e63"],
      [572,"Output","(HDFS)","#fdf6e3","#b98a00"] ].map(b=>`
  <g><rect x="${b[0]}" y="45" width="96" height="80" rx="9" fill="${b[3]}" stroke="${b[4]}" stroke-width="1.4"/>
  <text x="${b[0]+48}" y="78" text-anchor="middle" font-size="12.5" font-weight="700" fill="#24292f">${b[1]}</text>
  <text x="${b[0]+48}" y="99" text-anchor="middle" font-size="10.5" fill="#5b616a">${b[2]}</text></g>`).join("")}
  <line x1="108" y1="85" x2="150" y2="85" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-mr)"/>
  <line x1="248" y1="85" x2="290" y2="85" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-mr)"/>
  <line x1="388" y1="85" x2="430" y2="85" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-mr)"/>
  <line x1="528" y1="85" x2="570" y2="85" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-mr)"/>
  <text x="340" y="150" text-anchor="middle" font-size="11" fill="#8a8578">map tasks read their split locally (data locality) — reduce tasks pull grouped data over the network</text>
  </svg>`},

"hdfs-arch": {
  cap: "HDFS architecture — one NameNode holds metadata; DataNodes hold and replicate blocks.",
  svg: `<svg viewBox="0 0 680 240" width="680" height="240">
  <defs><marker id="ar-hd" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill="#0b6e63"/></marker></defs>
  <rect x="270" y="12" width="150" height="52" rx="9" fill="#fdf6e3" stroke="#b98a00" stroke-width="1.5"/>
  <text x="345" y="33" text-anchor="middle" font-size="12.5" font-weight="700" fill="#24292f">NameNode</text>
  <text x="345" y="51" text-anchor="middle" font-size="10.5" fill="#5b616a">metadata: fsimage + edits</text>
  <rect x="20" y="95" width="96" height="58" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="68" y="119" text-anchor="middle" font-size="12.5" font-weight="700" fill="#24292f">Client</text>
  <text x="68" y="138" text-anchor="middle" font-size="10.5" fill="#5b616a">API / shell</text>
  <line x1="116" y1="105" x2="268" y2="45" stroke="#0b6e63" stroke-width="1.5" marker-end="url(#ar-hd)"/>
  <text x="175" y="62" font-size="10.5" fill="#5b616a">1 · ask for block locations</text>
  <line x1="116" y1="145" x2="180" y2="175" stroke="#0b6e63" stroke-width="1.5" marker-end="url(#ar-hd)"/>
  <text x="112" y="192" font-size="10.5" fill="#5b616a">2 · read / write blocks</text>
  ${[ [40],[250],[460] ].map(d=>`
  <g><rect x="${d[0]}" y="150" width="180" height="64" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="${d[0]+90}" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="#24292f">DataNode</text>
  <rect x="${d[0]+14}" y="180" width="44" height="22" rx="4" fill="#fff" stroke="#8a8578"/>
  <text x="${d[0]+36}" y="195" text-anchor="middle" font-size="9.5" fill="#5b616a">blk A</text>
  <rect x="${d[0]+68}" y="180" width="44" height="22" rx="4" fill="#fff" stroke="#8a8578"/>
  <text x="${d[0]+90}" y="195" text-anchor="middle" font-size="9.5" fill="#5b616a">blk B</text>
  <rect x="${d[0]+122}" y="180" width="44" height="22" rx="4" fill="#fff" stroke="#8a8578"/>
  <text x="${d[0]+144}" y="195" text-anchor="middle" font-size="9.5" fill="#5b616a">blk C</text></g>`).join("")}
  <line x1="120" y1="55" x2="220" y2="148" stroke="#8a8578" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#ar-hd)"/>
  <text x="150" y="98" font-size="10.5" fill="#8a8578">3 · heartbeat + block report</text>
  <line x1="430" y1="64" x2="510" y2="148" stroke="#8a8578" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#ar-hd)"/>
  <text x="340" y="130" font-size="10.5" fill="#8a8578">blocks are replicated (default 3) across DataNodes</text>
  </svg>`},

"yarn-anatomy": {
  cap: "Anatomy of a YARN application run — the numbered steps are the answer pattern the exam wants.",
  svg: `<svg viewBox="0 0 680 250" width="680" height="250">
  <defs><marker id="ar-yr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill="#0b6e63"/></marker></defs>
  <rect x="18" y="30" width="110" height="56" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="73" y="53" text-anchor="middle" font-size="12.5" font-weight="700" fill="#24292f">Client</text>
  <text x="73" y="72" text-anchor="middle" font-size="10.5" fill="#5b616a">submits application</text>
  <rect x="190" y="30" width="150" height="56" rx="9" fill="#fdf6e3" stroke="#b98a00" stroke-width="1.5"/>
  <text x="265" y="53" text-anchor="middle" font-size="12.5" font-weight="700" fill="#24292f">ResourceManager</text>
  <text x="265" y="72" text-anchor="middle" font-size="10.5" fill="#5b616a">global scheduler + AM launcher</text>
  <rect x="430" y="18" width="220" height="80" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="540" y="36" text-anchor="middle" font-size="11.5" font-weight="700" fill="#5b616a">NodeManager 1</text>
  <rect x="450" y="44" width="180" height="42" rx="7" fill="#fff" stroke="#0b6e63" stroke-width="1.2"/>
  <text x="540" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#24292f">ApplicationMaster</text>
  <text x="540" y="79" text-anchor="middle" font-size="10" fill="#5b616a">first container; negotiates the rest</text>
  <rect x="430" y="130" width="220" height="86" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="540" y="148" text-anchor="middle" font-size="11.5" font-weight="700" fill="#5b616a">NodeManager 2</text>
  <rect x="450" y="156" width="80" height="44" rx="7" fill="#fff" stroke="#0b6e63" stroke-width="1.2"/>
  <text x="490" y="182" text-anchor="middle" font-size="11" fill="#24292f">Container</text>
  <rect x="550" y="156" width="80" height="44" rx="7" fill="#fff" stroke="#0b6e63" stroke-width="1.2"/>
  <text x="590" y="182" text-anchor="middle" font-size="11" fill="#24292f">Container</text>
  <line x1="128" y1="50" x2="188" y2="50" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-yr)"/>
  <text x="132" y="42" font-size="11" font-weight="700" fill="#0a5c53">1</text>
  <line x1="340" y1="55" x2="428" y2="55" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-yr)"/>
  <text x="360" y="47" font-size="11" font-weight="700" fill="#0a5c53">2 · launch AM container</text>
  <path d="M430 90 Q 350 120 340 66" fill="none" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-yr)"/>
  <text x="342" y="112" font-size="11" font-weight="700" fill="#0a5c53">3 · request containers</text>
  <path d="M340 80 Q 380 130 448 100" fill="none" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-yr)"/>
  <text x="370" y="127" font-size="11" font-weight="700" fill="#0a5c53">4 · grant</text>
  <line x1="540" y1="98" x2="540" y2="128" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-yr)"/>
  <text x="548" y="117" font-size="11" font-weight="700" fill="#0a5c53">5 · launch tasks</text>
  <text x="540" y="238" text-anchor="middle" font-size="11" fill="#8a8578">6 · AM unregisters with RM when done · tasks read input from HDFS</text>
  </svg>`},

"hive-arch": {
  cap: "Hive architecture — query in, HiveQL compiled against the metastore, executed as a MapReduce/Tez/Spark job on HDFS.",
  svg: `<svg viewBox="0 0 680 210" width="680" height="210">
  <defs><marker id="ar-hv" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill="#0b6e63"/></marker></defs>
  <rect x="15" y="60" width="120" height="100" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="75" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#24292f">Clients</text>
  <text x="75" y="102" text-anchor="middle" font-size="10.5" fill="#5b616a">CLI · JDBC/ODBC</text>
  <text x="75" y="120" text-anchor="middle" font-size="10.5" fill="#5b616a">Thrift · Web UI</text>
  <rect x="300" y="15" width="120" height="46" rx="9" fill="#fdf6e3" stroke="#b98a00" stroke-width="1.5"/>
  <text x="360" y="35" text-anchor="middle" font-size="12" font-weight="700" fill="#24292f">Metastore</text>
  <text x="360" y="52" text-anchor="middle" font-size="10" fill="#5b616a">table schemas (RDBMS)</text>
  <rect x="165" y="85" width="100" height="52" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="215" y="107" text-anchor="middle" font-size="12" font-weight="700" fill="#24292f">HiveServer2</text>
  <text x="215" y="125" text-anchor="middle" font-size="10" fill="#5b616a">service layer</text>
  <rect x="310" y="85" width="100" height="52" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="360" y="107" text-anchor="middle" font-size="12" font-weight="700" fill="#24292f">Driver</text>
  <text x="360" y="125" text-anchor="middle" font-size="10" fill="#5b616a">compile · execute · fetch</text>
  <rect x="455" y="85" width="100" height="52" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="505" y="107" text-anchor="middle" font-size="12" font-weight="700" fill="#24292f">Execution Engine</text>
  <text x="505" y="125" text-anchor="middle" font-size="10" fill="#5b616a">MR / Tez / Spark</text>
  <rect x="592" y="70" width="76" height="40" rx="9" fill="#fdf6e3" stroke="#b98a00" stroke-width="1.4"/>
  <text x="630" y="86" text-anchor="middle" font-size="11" font-weight="700" fill="#24292f">YARN</text>
  <text x="630" y="101" text-anchor="middle" font-size="9.5" fill="#5b616a">cluster</text>
  <rect x="592" y="135" width="76" height="40" rx="9" fill="#fdf6e3" stroke="#b98a00" stroke-width="1.4"/>
  <text x="630" y="151" text-anchor="middle" font-size="11" font-weight="700" fill="#24292f">HDFS</text>
  <text x="630" y="166" text-anchor="middle" font-size="9.5" fill="#5b616a">storage</text>
  <line x1="135" y1="110" x2="163" y2="110" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-hv)"/>
  <line x1="265" y1="110" x2="308" y2="110" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-hv)"/>
  <line x1="360" y1="61" x2="360" y2="83" stroke="#0b6e63" stroke-width="1.5" marker-end="url(#ar-hv)"/>
  <line x1="410" y1="110" x2="453" y2="110" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-hv)"/>
  <line x1="555" y1="100" x2="590" y2="92" stroke="#0b6e63" stroke-width="1.5" marker-end="url(#ar-hv)"/>
  <line x1="555" y1="122" x2="590" y2="150" stroke="#0b6e63" stroke-width="1.5" marker-end="url(#ar-hv)"/>
  <text x="340" y="185" text-anchor="middle" font-size="11" fill="#8a8578">HiveQL in → compiled plan → distributed job out. Batch warehouse layer: schema-on-read, no OLTP.</text>
  </svg>`},

"spark-job": {
  cap: "Anatomy of a Spark application run — driver, cluster manager, executors.",
  svg: `<svg viewBox="0 0 680 220" width="680" height="220">
  <defs><marker id="ar-sp" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill="#0b6e63"/></marker></defs>
  <rect x="30" y="80" width="150" height="66" rx="9" fill="#fdf6e3" stroke="#b98a00" stroke-width="1.5"/>
  <text x="105" y="103" text-anchor="middle" font-size="12.5" font-weight="700" fill="#24292f">Driver program</text>
  <text x="105" y="123" text-anchor="middle" font-size="10.5" fill="#5b616a">SparkContext / SparkSession</text>
  <rect x="270" y="18" width="140" height="48" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="340" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#24292f">Cluster manager</text>
  <text x="340" y="55" text-anchor="middle" font-size="10" fill="#5b616a">YARN / Standalone / Mesos</text>
  ${[ [30],[108],[186] ].map(d=>`
  <g><rect x="470" y="${d[0]}" width="190" height="62" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="565" y="${d[0]+22}" text-anchor="middle" font-size="12" font-weight="700" fill="#24292f">Executor</text>
  <text x="565" y="${d[0]+40}" text-anchor="middle" font-size="10" fill="#5b616a">runs tasks · caches RDD blocks</text></g>`).join("")}
  <line x1="180" y1="95" x2="268" y2="55" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-sp)"/>
  <text x="185" y="62" font-size="10.5" fill="#5b616a">1 · request executors</text>
  <line x1="410" y1="45" x2="468" y2="55" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-sp)"/>
  <line x1="410" y1="60" x2="468" y2="135" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-sp)"/>
  <text x="418" y="105" font-size="10.5" fill="#5b616a">2 · launch</text>
  <line x1="180" y1="118" x2="468" y2="170" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-sp)"/>
  <text x="235" y="160" font-size="10.5" fill="#5b616a">3 · driver sends tasks to executors</text>
  <text x="340" y="205" text-anchor="middle" font-size="11" fill="#8a8578">executors keep results in memory between stages — that is why Spark beats MapReduce on iterative jobs</text>
  </svg>`},

"recommender-tree": {
  cap: "The five recommender-system techniques (memorise all five + one advantage/disadvantage each).",
  svg: `<svg viewBox="0 0 680 175" width="680" height="175">
  <rect x="265" y="12" width="150" height="42" rx="9" fill="#fdf6e3" stroke="#b98a00" stroke-width="1.5"/>
  <text x="340" y="38" text-anchor="middle" font-size="12.5" font-weight="700" fill="#24292f">Recommender Systems</text>
  ${[ [8,"Collaborative","users like you"], [144,"Content-based","items like this"], [280,"Demographic","by profile traits"],
      [416,"Knowledge-based","from your needs"], [552,"Hybrid","combines the rest"] ].map(b=>`
  <g><line x1="340" y1="54" x2="${b[0]+62}" y2="96" stroke="#8a8578" stroke-width="1.2"/>
  <rect x="${b[0]}" y="96" width="124" height="58" rx="9" fill="#eef6f4" stroke="#0b6e63" stroke-width="1.4"/>
  <text x="${b[0]+62}" y="120" text-anchor="middle" font-size="11.5" font-weight="700" fill="#24292f">${b[1]}</text>
  <text x="${b[0]+62}" y="139" text-anchor="middle" font-size="10" fill="#5b616a">${b[2]}</text></g>`).join("")}
  </svg>`},

"churn-steps": {
  cap: "The churn prediction process — six steps, in exam order.",
  svg: `<svg viewBox="0 0 680 95" width="680" height="95">
  <defs><marker id="ar-ch" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill="#0b6e63"/></marker></defs>
  ${[ [8,"Define","churn"], [120,"Gather","customer data"], [232,"Engineer","features + labels"],
      [344,"Train","classification model"], [456,"Score","current customers"], [568,"Target &amp;","track top-risk"] ].map((b,i)=>`
  <g><rect x="${b[0]}" y="18" width="100" height="56" rx="9" fill="${i%2 ? "#eef6f4" : "#fdf6e3"}" stroke="${i%2 ? "#0b6e63" : "#b98a00"}" stroke-width="1.4"/>
  <text x="${b[0]+50}" y="41" text-anchor="middle" font-size="11.5" font-weight="700" fill="#24292f">${b[1]}</text>
  <text x="${b[0]+50}" y="60" text-anchor="middle" font-size="10" fill="#5b616a">${b[2]}</text></g>${i<5 ? `<line x1="${b[0]+100}" y1="46" x2="${b[0]+112}" y2="46" stroke="#0b6e63" stroke-width="1.6" marker-end="url(#ar-ch)"/>` : ""}`).join("")}
  </svg>`}
};
