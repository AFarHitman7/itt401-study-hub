window.DA_MODULES = window.DA_MODULES || {};
window.DA_MODULES[3] = {
  num: 3,
  title: "Big Data Processing: Hadoop, Spark, Hive, Pig",
  hours: 8,
  topics: [
    {
      slug: "m3-hadoop",
      title: "What is Hadoop: history and comparisons",
      sources: [
        "https://hadoop.apache.org/docs/stable/",
        "https://en.wikipedia.org/wiki/Apache_Hadoop"
      ],
      blocks: [
        {
          type: "definition",
          text: "Hadoop is an open-source framework that stores huge files across many cheap machines and processes them in parallel using MapReduce."
        },
        {
          type: "text",
          html: `<p>Hadoop is a set of open-source tools for storing and processing data across many machines. It cuts each file into big blocks and spreads them over cheap hardware, then sends the code to where the data already lives. Machines break all the time, so Hadoop is built to work around failure without stopping the job.</p>
<p>The idea came from Google, which published the GFS paper in 2003 and the MapReduce paper in 2004. Doug Cutting and Mike Cafarella then built open-source versions of both inside Apache Nutch. In January 2006 that code became the Hadoop subproject while Cutting was at Yahoo!, and he named it after his son's toy elephant. Hadoop 0.1.0 followed in April 2006.</p>
<p>Hadoop has four modules that work together.</p>
<ul>
<li><b>Hadoop Common</b>: libraries, scripts and file-system code the other modules need.</li>
<li><b>HDFS</b>: distributed storage with very high total bandwidth.</li>
<li><b>YARN</b>: cluster resource management and scheduling (added in Hadoop 2).</li>
<li><b>MapReduce</b>: the batch processing model.</li>
</ul>
<p>People also use the word Hadoop for the wider ecosystem around it, which includes Hive, Pig, HBase, Spark, Sqoop and Oozie.</p>
<table class="tbl">
<tr><th></th><th>RDBMS</th><th>Hadoop</th></tr>
<tr><td>Schema</td><td>on write: bad rows rejected at insert</td><td>on read: applied when a job reads</td></tr>
<tr><td>Workload</td><td>OLTP, millisecond lookups</td><td>batch scans, minutes to hours</td></tr>
<tr><td>Scaling</td><td>scale-up: a bigger server</td><td>scale-out: more cheap nodes</td></tr>
<tr><td>Data</td><td>typed rows, structured only</td><td>logs, text, JSON, anything</td></tr>
</table>`
        },
        {
          type: "example",
          html: `<p>A telecom keeps three years of call records, which comes to about 60 TB of plain text with one line per call. Loading all of that into an RDBMS would mean paying for a huge server and waiting hours for each bulk insert, even though analysts only need monthly totals. So the records go into HDFS as 128 MB blocks instead, and a nightly MapReduce job counts calls per tower per hour. Since nothing is ever updated in place, the write-once storage fits this workload well.</p>`
        },
        {
          type: "tip",
          html: `<p>Part A gives 3 marks for the definition plus the four modules, so memorise them in order as Common, HDFS, YARN and MapReduce. A 7-mark question usually wants the history and the comparison too, so draw the four-row table instead of writing it out. No diagram is required here, so save your sketching time for HDFS and YARN.</p>`
        }
      ],
      practice: [
        {
          q: "Hadoop does not replace a relational database. Discuss this using schema handling, scaling model and workload type, and give one case where an RDBMS is still the better choice.",
          a: `<p>An RDBMS enforces the schema at write time, so a malformed row is rejected at insert, which is what a transaction system needs. Hadoop stores files as they arrive and applies structure only when a job reads them, so messy or unknown fields never block ingestion. That is schema-on-read.</p>
<p>An RDBMS scales up by adding more CPU, RAM and faster disks to one server, yet past that point cost grows faster than capacity. Hadoop scales out instead, because adding cheap nodes grows storage and compute roughly together, with HDFS spreading the blocks and MapReduce running each task on the node that holds its block.</p>
<p>The workloads differ as well. An RDBMS answers millisecond point queries and multi-row transactions with ACID guarantees and joins, while Hadoop scans terabytes in a batch job that runs for minutes and never updates a row in place.</p>
<p>Stay with the RDBMS when the data fits on one server and the app needs joins, secondary indexes and immediate consistency, as payroll, bookings and inventory do. Use Hadoop for append-only logs, clickstreams and sensor archives, where the question is "add up everything" rather than "fetch this row".</p>`,
          marks: 14,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m3-mapreduce",
      title: "MapReduce: data flow and the weather example",
      sources: [
        "https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html",
        "https://www.geeksforgeeks.org/data-analysis/mapreduce-program-weather-data-analysis-for-analyzing-hot-and-cold-days/"
      ],
      blocks: [
        {
          type: "definition",
          text: "MapReduce is a programming model that splits input into independent chunks, processes them in parallel with map tasks, then groups and reduces the results."
        },
        {
          type: "text",
          html: `<p>A job runs by reading its input as key–value pairs and creating one map task per input split. Each map task emits intermediate pairs, which the framework then sorts and partitions by key, so each reducer receives one key together with all of its values.</p>
<ul>
<li><b>Input split</b>: a logical chunk of the file, usually one HDFS block.</li>
<li><b>Map</b>: a per-record transformation that emits zero or more pairs.</li>
<li><b>Shuffle &amp; sort</b>: map output is partitioned by key, fetched over HTTP by reducers, then merged and sorted.</li>
<li><b>Reduce</b>: called once per key with the full list of values; output goes to HDFS.</li>
<li><b>Output</b>: one <code>part-r-00000</code> file per reducer.</li>
</ul>
<p>A map task runs on a node that already holds its block, so the record never crosses the network, which is why moving computation is cheaper than moving data. Reduce tasks get no such luck because each reducer needs its partition from <i>every</i> mapper, so its input always arrives over the network.</p>
<p>In the weather example, NCDC records are line-oriented ASCII with the year in one fixed column and the air temperature in another. The mapper emits <code>(year, temperature)</code>, and the shuffle gathers every temperature under its year no matter which file or block it came from. The reducer then scans that list and writes the maximum, all in one fully parallel pass without ever sorting the whole dataset.</p>`
        },
        {
          type: "diagram",
          id: "mapreduce-flow"
        },
        {
          type: "example",
          html: `<p>You need the hottest day per year across 100 years of NCDC files at about 1 GB each. Each file splits into 128 MB blocks, so roughly 800 map tasks run and mappers print pairs like <code>(1930, 42)</code>. The shuffle sends every 1930 pair to the same reducer, which keeps the largest value. Add a combiner and each mapper forwards only its own maximum per year, which cuts the bytes crossing the network.</p>`
        },
        {
          type: "code",
          lang: "java",
          html: `// mapper: one NCDC line -> (year, temperature)
public void map(LongWritable key, Text value, Context ctx) {
  String line = value.toString(), year = line.substring(15, 19);
  int temp = Integer.parseInt(line.substring(87, 92).trim());
  if (temp != -9999) ctx.write(new Text(year), new IntWritable(temp));
}
// reducer: keep the largest temperature for that year
public void reduce(Text year, Iterable&lt;IntWritable&gt; vals, Context ctx) {
  int max = Integer.MIN_VALUE;
  for (IntWritable v : vals) max = Math.max(max, v.get());
  ctx.write(year, new IntWritable(max));
}`
        },
        {
          type: "tip",
          html: `<p>Practise the five-stage pipeline of input split, map, shuffle &amp; sort, reduce and output, and put <code>(k,v)</code> labels on every arrow. Part A asks 3 marks for the combiner or for "what is an input split", while Part B asks 7 or 14 and wants the weather example written out with the emitted pairs. Always add the line "reduce tasks do not enjoy data locality" because examiners look for it.</p>`
        }
      ],
      practice: [
        {
          q: "A job reads 1 TB of input with a 128 MB block size. How many map tasks run, and why is the number of reduce tasks not derived the same way?",
          a: `<p>You get one map task per input split, and because a split defaults to one HDFS block, 1 TB ÷ 128 MB gives 8192 map tasks. The map count therefore follows the data size directly.</p>
<p>The reduce count is a separate choice set with <code>setNumReduceTasks</code>, since it decides how many output files you get and how much parallelism the shuffle has. It does not follow the data size, and a common rule of thumb is 0.95 or 1.75 × (number of nodes × maximum containers per node).</p>`,
          marks: 3,
          diff: "medium"
        },
        {
          q: "Explain the role of a combiner in MapReduce, and why it cannot replace the reducer.",
          a: `<p>A combiner is a mini-reducer that runs on the map output <i>before</i> it leaves the node. In WordCount the mapper emits <code>(the,1)</code> many times, and the combiner turns that into <code>(the,57)</code> locally, so far fewer bytes cross the network.</p>
<p>It cannot replace the reducer because it only sees the pairs from one map task on one node. Its output is a <i>partial</i> aggregate, so the reducer still has to merge the partials from every mapper.</p>
<p>It stays safe only when the operation is commutative and associative, as sum, max, min and count are. Average is unsafe because the mean of means is not the mean, unless the mapper emits a (sum, count) pair. Since the framework may run a combiner zero, one or several times, it must never change the final result.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m3-hdfs",
      title: "HDFS: concepts, architecture, read/write flow and commands",
      sources: [
        "https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html",
        "https://en.wikipedia.org/wiki/Apache_Hadoop"
      ],
      blocks: [
        {
          type: "definition",
          text: "HDFS is a distributed file system that stores large files as replicated blocks on cheap machines, tuned for streaming batch reads over random access."
        },
        {
          type: "text",
          html: `<p>Hardware fails all the time, so HDFS builds in fault detection and automatic recovery from the start. Files run from gigabytes to terabytes and are written once, then read sequentially many times with appends only. Throughput therefore matters more than latency, so HDFS relaxes POSIX, and the cheapest way to process data is to run the code where the block already sits.</p>
<p>One <b>NameNode</b> owns the namespace, which means the directory tree, the file-to-block map, the block-to-DataNode map and the replication factor, yet user data never flows through it. Many <b>DataNodes</b> store the blocks of 128 MB by default with replication 3, and they report in with a heartbeat and a block report. Metadata is saved as <b>FsImage</b> plus an <b>EditLog</b>, with a checkpoint applying the log to the image. The <b>Secondary NameNode</b> only performs that checkpoint, so it is not a standby and cannot take over.</p>
<p>With replication 3, rack awareness places one replica on the writer's node, or on a random node in its rack, with a second replica on a node in a different rack and the third on another node in that remote rack. A whole rack can therefore fail without losing data, while a write crosses racks once instead of twice.</p>
<p>On the write path the client asks the NameNode to create the file, and the NameNode returns an ordered pipeline of DataNodes. The client streams packets to the first DataNode, which writes locally and forwards to the second, which forwards to the third, while acknowledgements travel back up the pipeline. The NameNode commits the metadata only when the client closes the file.</p>
<p>On the read path the client asks the NameNode for the block locations and picks the closest replica, trying the same node first and then the same rack. It reads the block and checks the checksum before repeating the same steps for the next block.</p>`
        },
        {
          type: "diagram",
          id: "hdfs-arch"
        },
        {
          type: "example",
          html: `<p>A 1 GB log file is uploaded and the NameNode splits it into eight 128 MB blocks, handing back three DataNodes for each block. The client writes block 1 through a pipeline from A to B to C, then block 2 through a different pipeline, and so on. Later one DataNode stops heartbeating, so after the timeout the NameNode marks it dead and copies its blocks elsewhere. The replication factor is back to three and the client did nothing.</p>`
        },
        {
          type: "code",
          lang: "txt",
          html: `# basic HDFS shell commands
hdfs dfs -ls /data
hdfs dfs -mkdir -p /data/weather
hdfs dfs -put local.txt /data/weather
hdfs dfs -cat /data/weather/local.txt
hdfs dfs -cp /data/weather/local.txt /data/backup.txt
hdfs dfs -du -h /data/weather
hdfs dfs -get /data/weather/local.txt .
hdfs dfs -rm -r /data/weather`
        },
        {
          type: "tip",
          html: `<p>Two drawings are examinable: the NameNode and DataNode architecture and the write pipeline. On the first, label NameNode, metadata, three DataNodes, block and replication factor. For the write path, list the steps in order as create request, pipeline returned, packet to the first DataNode, forwarded along the chain, ack back up, then close and commit. Never call the Secondary NameNode a backup, since that one sentence loses marks every year.</p>`
        }
      ],
      practice: [
        {
          q: "Why does HDFS use 128 MB blocks instead of the 4 KB blocks of a normal disk file system?",
          a: `<p>A block is the unit of a map task and of a network transfer, so bigger blocks mean fewer tasks, less seek and setup overhead per stream, and far less metadata per byte of data. HDFS is built for throughput rather than latency.</p>
<p>The NameNode keeps about one object per block in memory, so a 1 TB file at 4 KB would need about 268 million entries, while at 128 MB it needs only 8192. That is also why many small files hurt HDFS.</p>`,
          marks: 3,
          diff: "easy"
        },
        {
          q: "What is rack awareness in HDFS? State the replica placement policy for a replication factor of three and one benefit it gives.",
          a: `<p>Rack awareness means the NameNode knows which rack each DataNode sits in, so it can place replicas with both failure domains and network cost in mind. Bandwidth inside a rack is much higher than across racks, while a rack switch or power feed is a single point of failure for every node in it.</p>
<p>For replication 3 the policy is this: one replica on the writer's node if the writer is a DataNode, otherwise a random node in the writer's rack, with a second replica on a node in a <i>different</i> rack and a third on a different node in that same remote rack.</p>
<p>That gives three benefits. A complete rack failure still leaves two copies, so no data is lost, while reads are served from the nearest replica. Write traffic also crosses the rack boundary once instead of twice, which keeps write performance acceptable.</p>`,
          marks: 7,
          diff: "medium"
        },
        {
          q: "What is the Secondary NameNode, and what actually happens when the NameNode fails?",
          a: `<p>The name misleads because the Secondary NameNode is not a standby. It holds no live namespace and never serves client requests, and every so often it downloads the FsImage and EditLog, merges them into a new compacted FsImage, and returns it. That is a <b>checkpoint</b>, which keeps restart time short because the NameNode does not have to replay a huge edit log.</p>
<p>If the NameNode dies, the Secondary cannot take over, so you restore the namespace from the last checkpoint and lose every edit made after it. That is why the Secondary is a recovery aid rather than high availability.</p>
<p>Real protection is NameNode HA, where an active and a standby NameNode share an edit journal through a set of JournalNodes (QJM). A failover controller with ZooKeeper promotes the standby, and Hadoop 3 also allows more than one NameNode.</p>`,
          marks: 7,
          diff: "hard"
        }
      ]
    },
    {
      slug: "m3-hbase",
      title: "HBase: data model, regions and comparison with RDBMS",
      sources: [
        "https://hbase.apache.org/book.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "HBase is a distributed, column-oriented NoSQL store on HDFS with fast random reads and writes over billions of rows, sorted by row key."
        },
        {
          type: "text",
          html: `<p>HBase is a sparse, distributed, sorted multi-dimensional map. It keeps its data in HDFS but adds indexed StoreFiles, so it can find a single row in milliseconds, which plain HDFS cannot do because it has no fast per-record lookup.</p>
<p>In the data model, a <b>table</b> is a sorted map of rows keyed by an uninterpreted byte string called the <b>row key</b>. Rows are held in lexicographic order, so the key design decides which rows sit together. A row holds <b>column families</b> that are declared when the table is created and stored together on disk, while inside a family <b>column qualifiers</b> appear on demand, such as <code>info:name</code> and <code>info:email</code>. A <b>cell</b> is (row, family:qualifier, version) and carries a value plus a timestamp, and cells you never wrote take no space, which keeps the table sparse.</p>
<p><b>HMaster</b> handles DDL, region assignment, load balancing and failover, while <b>RegionServers</b> serve reads and writes for the regions they host, each keeping a MemStore in memory and StoreFiles on HDFS. <b>ZooKeeper</b> holds the location of <code>hbase:meta</code> and elects the active Master. A client reads <code>hbase:meta</code> to find the region and then talks to that RegionServer directly rather than through the Master.</p>
<p>A table is split by row-key range into regions, with one Store per column family in each region. When a region grows past the split threshold it divides into two daughters, and the Master moves them around to even out the cluster.</p>
<table class="tbl">
<tr><th></th><th>RDBMS</th><th>HBase</th></tr>
<tr><td>Schema</td><td>fixed typed columns</td><td>families fixed, qualifiers free</td></tr>
<tr><td>Index</td><td>any column, secondary indexes</td><td>row key only</td></tr>
<tr><td>Query</td><td>SQL, joins, aggregates</td><td>get / put / scan, no joins</td></tr>
<tr><td>Scale</td><td>scale-up</td><td>add RegionServers</td></tr>
</table>`
        },
        {
          type: "example",
          html: `<p>A power utility stores meter readings with a row key of <code>meterID#reverseTimestamp</code>, a column family <code>r</code>, and the reading type as qualifier. Because keys sort, every reading from one meter sits next to its neighbours, so a scan with a start row and a stop row returns the last day in one seek. The same data in a relational table would need a composite index on (meter, time) and a much bigger server.</p>`
        },
        {
          type: "code",
          lang: "sql",
          html: `create 'sensor', 'r'                       -- table + one column family
put 'sensor', 'm1#20240301', 'r:temp', '31.5'
get 'sensor', 'm1#20240301'
scan 'sensor', {STARTROW => 'm1#', STOPROW => 'm1$'}`
        },
        {
          type: "tip",
          html: `<p>Data model and architecture are the 14-mark core, so draw three boxes for ZooKeeper, HMaster and RegionServers, with <code>hbase:meta</code> written under ZooKeeper. The easiest mark in the topic is the contrast that column families are fixed at creation while qualifiers are not. Regions split on their own, so never write "manual sharding". For the RDBMS comparison, four rows are enough: schema, index, query and scale.</p>`
        }
      ],
      practice: [
        {
          q: "Explain the role of ZooKeeper in an HBase cluster.",
          a: `<p>ZooKeeper is the coordination service, and it stores no user table data.</p>
<p>It holds the location of the <code>hbase:meta</code> table, so a client's first lookup can find which RegionServer owns a row range. It elects the active HMaster when several masters start, because they compete for a lease and the losers wait as backups. It also tracks RegionServer liveness through ephemeral session nodes, so when a server dies its session expires and the Master knows to reassign its regions.</p>`,
          marks: 3,
          diff: "medium"
        },
        {
          q: "A RegionServer dies while clients are reading and writing. Describe what happens, step by step, and say why no committed write is lost.",
          a: `<p>1. Every region on that server goes offline at once, so clients talking to it start getting errors.</p>
<p>2. Its ZooKeeper session then expires, which lets the Master detect the failure.</p>
<p>3. The Master marks those assignments invalid in <code>hbase:meta</code> and reassigns each region to another RegionServer through the AssignmentManager and load balancer.</p>
<p>4. Each region reopens by replaying its write-ahead log from HDFS, which recovers writes still sitting in the MemStore.</p>
<p>5. In-flight queries are retried rather than lost, because the client caches region locations and on failure it re-queries <code>hbase:meta</code> and retries against the new server.</p>
<p>6. The outage lasts roughly ZooKeeper session timeout + split time + assignment and replay time.</p>`,
          marks: 7,
          diff: "hard"
        }
      ]
    },
    {
      slug: "m3-yarn",
      title: "YARN: anatomy of an application, benefits and schedulers",
      sources: [
        "https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/YARN.html",
        "https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/WritingYarnApplications.html",
        "https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/CapacityScheduler.html",
        "https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/FairScheduler.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "YARN is Hadoop's resource manager: a global ResourceManager allocates containers, and one ApplicationMaster per application schedules and monitors its tasks."
        },
        {
          type: "text",
          html: `<p>In Hadoop 1 the JobTracker both managed cluster resources and ran MapReduce, so the cluster could host only one engine. YARN splits those two jobs apart: the ResourceManager hands out resources for the whole cluster while each application brings its own ApplicationMaster. MapReduce, Spark, Tez and Flink can then share one cluster.</p>
<p>Anatomy of a run:</p>
<ol>
<li>The client submits the application to the ResourceManager.</li>
<li>The ApplicationsManager allocates a container on a NodeManager and starts the ApplicationMaster there.</li>
<li>The AM registers with the ResourceManager and asks for containers for its tasks.</li>
<li>The Scheduler grants containers, and the AM asks the NodeManagers to start tasks in them.</li>
<li>The AM monitors tasks, retries failures and reports progress on each heartbeat.</li>
<li>When all tasks finish, the AM unregisters and its container is released.</li>
</ol>
<p><b>FIFO</b> runs jobs in submission order, which is simple but lets one long job block everything behind it. <b>Capacity</b> gives each queue a guaranteed percentage of the cluster and lets a queue borrow idle capacity when neighbours are quiet. <b>Fair</b> gives every app an equal share over time, so a short job submitted later still gets resources without waiting.</p>
<p>That brings three benefits: multi-tenancy with per-queue guarantees, higher use because idle capacity is reused, and one cluster for many engines instead of one cluster per engine.</p>`
        },
        {
          type: "diagram",
          id: "yarn-anatomy"
        },
        {
          type: "example",
          html: `<p>Two teams share a 100-node cluster, with Team A on nightly MapReduce ETL and Team B on interactive Spark SQL. With the Capacity Scheduler, queue <code>etl</code> holds 60% and <code>analytics</code> holds 40%. At 2 a.m. the Spark queue is idle, so ETL borrows its capacity and finishes early, while at 9 a.m. ETL is idle and Spark gets the cluster back. Neither team waits for the other's jobs to end.</p>`
        },
        {
          type: "code",
          lang: "txt",
          html: `yarn application -list                      # running applications
yarn application -status application_1234_0001
yarn application -kill application_1234_0001
yarn logs -applicationId application_1234_0001
yarn node -list                            # NodeManagers and containers`
        },
        {
          type: "tip",
          html: `<p>Anatomy is a 14-mark question, so draw client to ResourceManager to the container holding the AM to NodeManagers to tasks, and number the six steps beside it. Name ResourceManager, ApplicationsManager, Scheduler, NodeManager, container and ApplicationMaster explicitly. The three schedulers need one line each plus one contrast, and a small table is fastest for that. A 3-mark part usually asks only for the benefits or a scheduler definition.</p>`
        }
      ],
      practice: [
        {
          q: "Distinguish what the ResourceManager does from what the ApplicationMaster does.",
          a: `<p>The ResourceManager is one per cluster and is the final authority over resources, with two parts inside it. The <b>Scheduler</b> allocates containers according to queue capacities and priorities, yet it does no monitoring and never restarts failed tasks. The <b>ApplicationsManager</b> accepts submissions, negotiates the first container for the ApplicationMaster, and restarts the AM if it dies.</p>
<p>The ApplicationMaster is one per application and is a framework-specific library. It registers with the ResourceManager and heartbeats, then requests containers with resource and locality requirements and launches tasks through the NodeManagers. It monitors progress, retries failed tasks, reports status, and unregisters when the work is done.</p>
<p>Short form: the ResourceManager decides <i>who gets resources</i>, while the ApplicationMaster decides <i>what the application does with them</i>.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m3-pig",
      title: "Pig: Pig Latin, execution modes and comparison with databases",
      sources: [
        "https://pig.apache.org/",
        "https://pig.apache.org/docs/r0.16.0/basic.html",
        "https://pig.apache.org/docs/r0.16.0/start.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "Pig is a platform whose dataflow language, Pig Latin, compiles into MapReduce jobs for analysing large datasets on Hadoop."
        },
        {
          type: "text",
          html: `<p>A raw MapReduce job needs a driver, a mapper class, a reducer class and a jar, while Pig writes the same ETL as a short pipeline of operators. The optimizer then decides how many MapReduce jobs to run and where to place them.</p>
<p>A <b>relation</b> is an outer bag, a <b>bag</b> is a collection of tuples, a <b>tuple</b> is an ordered set of fields, and a <b>field</b> is one value. You address fields by position (<code>$0</code>) or by name from a schema. Schemas are optional, and an untyped field defaults to <code>bytearray</code>.</p>
<p><code>LOAD</code> reads, <code>FILTER</code> drops rows, <code>FOREACH … GENERATE</code> projects and computes columns, <code>GROUP … BY</code> collects rows with the same key into a bag, and <code>STORE</code> writes. Execution is lazy, so nothing runs until a <code>DUMP</code> or <code>STORE</code> forces the pipeline.</p>
<p>Pig runs in three modes. <b>Script</b> runs a file in batch with <code>pig script.pig</code>, <b>Grunt</b> is the interactive shell that runs one statement at a time and is good for exploring data, and <b>Embedded</b> lets a Java program drive Pig through <code>PigServer</code> so Pig sits inside a larger application.</p>
<table class="tbl">
<tr><th></th><th>Pig Latin</th><th>SQL</th></tr>
<tr><td>Style</td><td>procedural dataflow</td><td>declarative</td></tr>
<tr><td>Execution</td><td>lazy, compiled to MapReduce</td><td>optimizer plans, runs at once</td></tr>
<tr><td>Schema</td><td>optional</td><td>required</td></tr>
<tr><td>Features</td><td>no transactions, indexes, constraints</td><td>ACID, indexes, joins, constraints</td></tr>
<tr><td>Built for</td><td>batch ETL</td><td>OLTP and analytics</td></tr>
</table>`
        },
        {
          type: "example",
          html: `<p>An ad network holds 2 TB of impression logs, and the analyst writes five Pig lines to load, filter out bots, group by ad id, count and store. Pig turns that into two MapReduce jobs. In the Grunt shell she runs the same lines one at a time against a 1 GB sample, which checks the schema and the counts step by step before she submits the full script with confidence.</p>`
        },
        {
          type: "code",
          lang: "txt",
          html: `-- top pages by views from weblog rows (user, url, ts)
logs   = LOAD '/data/weblog' USING PigStorage(',') AS (user:chararray, url:chararray, ts:long);
humans = FILTER logs BY url IS NOT NULL;
byUrl  = GROUP humans BY url;
counts = FOREACH byUrl GENERATE group AS url, COUNT(humans) AS views;
top    = ORDER counts BY views DESC;
STORE top INTO '/data/top_urls';`
        },
        {
          type: "tip",
          html: `<p>Execution modes are a guaranteed 3-mark question, so name Script, Grunt and Embedded and give one use for each. For the structure question, draw relation to bag to tuple to field as nested boxes, since that sketch earns the marks faster than prose. In the comparison, the phrases to use are procedural dataflow, lazy evaluation and schema-optional.</p>`
        }
      ],
      practice: [
        {
          q: "Differentiate FOREACH … GENERATE from GROUP … BY in Pig Latin, with a one-line example of each.",
          a: `<p><code>FOREACH … GENERATE</code> works row by row, projecting and computing one output tuple for each input tuple like a SELECT list. It never changes the number of records unless you use FLATTEN.</p>
<p><code>GROUP … BY</code> collects every tuple that shares a key into a single tuple whose second field is a <i>bag</i> of those tuples. It changes the shape of the relation and cuts the record count to one per key.</p>
<p>Example: <code>B = FOREACH A GENERATE name, gpa * 10;</code> keeps one row per student, while <code>G = GROUP A BY gpa;</code> gives one row per grade, each holding a bag of students.</p>
<p>Aggregations need both, so group first to build the bag and then use FOREACH with COUNT, SUM or MAX over that bag.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m3-hive",
      title: "Hive: data warehousing, architecture and comparison with databases",
      sources: [
        "https://hive.apache.org/",
        "https://hive.apache.org/development/designdocs/design"
      ],
      blocks: [
        {
          type: "definition",
          text: "Hive is a data-warehouse layer on Hadoop that keeps metadata in a metastore and compiles SQL-like HiveQL into MapReduce or Tez jobs over HDFS files."
        },
        {
          type: "text",
          html: `<p>Hive gives a table abstraction over files in HDFS while the data stays where it is. The table definition lives in the metastore with columns, types, SerDe and location. Nothing is converted on insert, so the schema is applied when a query reads the file.</p>
<p><b>Clients</b> (CLI, Beeline, JDBC/ODBC, Thrift) submit HiveQL, and the <b>Driver</b> creates a session handle that exposes execute and fetch. The <b>Compiler</b> parses the query, type-checks it against the <b>Metastore</b>, prunes partitions, and produces a DAG of stages. The <b>Execution Engine</b> then runs those stages as MapReduce or Tez jobs on HDFS and returns rows through the Driver.</p>
<p>A partition is a directory per key value (<code>ds=2024-01-01</code>), so a filtered query skips whole directories. Bucketing hashes a column into a fixed number of files inside each partition, which makes sampling and map-side joins cheap.</p>
<table class="tbl">
<tr><th></th><th>Hive</th><th>RDBMS</th></tr>
<tr><td>Latency</td><td>seconds to minutes</td><td>milliseconds</td></tr>
<tr><td>Schema</td><td>on read</td><td>on write</td></tr>
<tr><td>Updates</td><td>append; ACID only on newer ORC tables</td><td>full UPDATE and DELETE</td></tr>
<tr><td>Indexes</td><td>none, partition pruning instead</td><td>B-tree / bitmap</td></tr>
<tr><td>Built for</td><td>analytics over petabytes</td><td>OLTP</td></tr>
</table>`
        },
        {
          type: "diagram",
          id: "hive-arch"
        },
        {
          type: "example",
          html: `<p>A bank lands 4 TB of transaction files in HDFS every night under <code>/txn/dt=YYYY-MM-DD/</code>. With an external table partitioned by <code>dt</code>, yesterday's report scans about 1/365 of the data, which keeps the morning report fast because most of the archive is never touched. Analysts query it with the SQL they already know while Hive compiles the query into MapReduce jobs, so the nightly load stays a file copy rather than an insert.</p>`
        },
        {
          type: "code",
          lang: "sql",
          html: `CREATE EXTERNAL TABLE txn (
  acct STRING, amount DOUBLE, merchant STRING
)
PARTITIONED BY (dt STRING)
STORED AS ORC
LOCATION '/data/txn';
-- one directory per day, so this filter skips all other days
SELECT merchant, SUM(amount) FROM txn WHERE dt = '2024-03-01' GROUP BY merchant;`
        },
        {
          type: "tip",
          html: `<p>Architecture is the 14-mark question, so draw Clients to Driver to Compiler to Metastore. Put the Execution Engine under the compiler and HDFS beneath everything, then number the query flow 1 to 6. For Hive vs RDBMS, four rows are enough: latency, schema timing, updates and workload. Mention partition pruning as Hive's substitute for indexes and you have covered the follow-up.</p>`
        }
      ],
      practice: [
        {
          q: "What is the Hive metastore and why is it essential to Hive?",
          a: `<p>The metastore is Hive's catalogue, a relational database accessed through DataNucleus. It stores databases, tables, column names and types, partition keys, SerDe classes and the HDFS location of every table.</p>
<p>It is essential because the data files carry no schema, so the compiler reads the metastore to type-check a query, to find which directories to scan, and to prune partitions using the query's predicates. Without it, Hive would not know what a table's columns mean.</p>
<p>It is exposed as a Thrift service, so Spark, Impala and other engines can share the same table definitions, which is why it is also a building block of data-lake architectures.</p>`,
          marks: 3,
          diff: "easy"
        },
        {
          q: "Differentiate partitioning from bucketing in Hive.",
          a: `<p>Partitioning splits a table into directories by the value of a column, for example <code>dt=2024-03-01</code>, so a query with <code>WHERE dt = '...'</code> reads only that directory and ignores the rest. It is coarse, directory-level pruning, and it is Hive's main performance feature.</p>
<p>Bucketing hashes a column into a fixed number of files inside each partition (<code>CLUSTERED BY (acct) INTO 16 BUCKETS</code>), which gives evenly sized files, cheap sampling, and map-side joins when both tables are bucketed on the join key.</p>
<p>One line to remember: partitioning prunes directories while bucketing arranges files.</p>`,
          marks: 3,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m3-spark",
      title: "Spark: framework, RDDs and anatomy of a job run",
      sources: [
        "https://spark.apache.org/docs/latest/cluster-overview.html",
        "https://spark.apache.org/docs/latest/rdd-programming-guide.html",
        "https://spark.apache.org/docs/latest/running-on-yarn.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "Spark is a cluster computing engine that runs DAG-based jobs over in-memory resilient distributed datasets, so iterative and interactive workloads run much faster than MapReduce."
        },
        {
          type: "text",
          html: `<p>MapReduce writes every stage's output to HDFS, so a five-stage job pays five writes and five reads. Spark keeps intermediate data in memory across stages and spills only when it must. A shuffle still costs network and disk, and that is the part Spark cannot remove.</p>
<p>A resilient distributed dataset is an immutable, partitioned collection spread over the cluster. <b>Transformations</b> (<code>map</code>, <code>filter</code>, <code>groupByKey</code>, <code>reduceByKey</code>) build a new RDD lazily, while <b>Actions</b> (<code>count</code>, <code>collect</code>, <code>take</code>, <code>saveAsTextFile</code>) trigger a job. Spark records the lineage of every RDD, so a lost partition is recomputed from its parents instead of being replicated.</p>
<p>The <b>driver</b> runs <code>main()</code> and creates a <b>SparkContext</b>, which connects to a cluster manager (YARN, Kubernetes or standalone). The cluster manager starts <b>executors</b> on worker nodes. The driver builds a DAG, cuts it into stages, and sends tasks to executors, which run them in threads and keep data for later stages.</p>
<p>In YARN client mode the driver stays in the client process while the ApplicationMaster only requests containers. The client submits the application, the AM asks the ResourceManager for containers and starts one executor in each, and those executors register back with the driver, which then schedules tasks on them.</p>`
        },
        {
          type: "diagram",
          id: "spark-job"
        },
        {
          type: "example",
          html: `<p>A recommender trains the same model ten times on one ratings matrix. In MapReduce each iteration re-reads the matrix from HDFS, which means ten passes over 200 GB. In Spark the matrix is cached once as an RDD so all ten iterations read it from memory, and the job finishes in minutes instead of hours while the cluster does useful work instead of waiting on disk. The shuffle inside each iteration is still the slow part.</p>`
        },
        {
          type: "code",
          lang: "txt",
          html: `lines  = sc.textFile("hdfs:///data/words")
counts = (lines.flatMap(lambda l: l.split())
               .map(lambda w: (w, 1))
               .reduceByKey(lambda a, b: a + b))
counts.saveAsTextFile("hdfs:///data/out")
# reduceByKey is a transformation; saveAsTextFile is the action that runs the job`
        },
        {
          type: "tip",
          html: `<p>Draw the job anatomy with driver and SparkContext, then cluster manager, then executor and executor, showing tasks going out and results coming back. For the client-mode question, the sentence that earns marks is "the ApplicationMaster requests containers; the driver, which runs in the client process, schedules tasks on the executors". RDD properties are a 3-mark list: immutable, partitioned, distributed, lazy, and recovered by lineage.</p>`
        }
      ],
      practice: [
        {
          q: "Why is Spark faster than MapReduce, and what cost remains even in Spark?",
          a: `<p>MapReduce writes each job's output to HDFS, so a pipeline of N jobs reads and writes N times. Spark can cache an RDD in memory with <code>persist()</code> or <code>cache()</code> and reuse it across actions and loop iterations, so a ten-iteration model reads the input once instead of ten times.</p>
<p>Spark also builds a DAG and pipelines narrow transformations such as map and filter into one stage, so no intermediate dataset is written at all.</p>
<p>The remaining cost is the <b>shuffle</b>. A wide transformation (groupByKey, join, repartition) must redistribute data by key, which is written to disk and pulled across the network and dominates the runtime of most jobs. If the data does not fit in memory, Spark spills to disk and the advantage over MapReduce shrinks.</p>`,
          marks: 7,
          diff: "medium"
        },
        {
          q: "Classify these Spark operations as transformation or action, and state what laziness means: map, count, reduceByKey, collect, saveAsTextFile.",
          a: `<p>Transformations: <code>map</code>, <code>reduceByKey</code>. Actions: <code>count</code>, <code>collect</code>, <code>saveAsTextFile</code>.</p>
<p>Laziness means a transformation does not compute anything but only records the lineage of the new RDD. Nothing runs until an action needs a result for the driver or has to write output. The benefit is that Spark sees the whole chain, so it can pipeline it into one stage and skip intermediate materialisation.</p>`,
          marks: 3,
          diff: "easy"
        }
      ]
    }
  ]
};
