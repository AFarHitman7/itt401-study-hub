window.DA_MODULES = window.DA_MODULES || {};
window.DA_MODULES[2] = {
  num: 2,
  title: "Big Data, IoT, NoSQL Technologies",
  hours: 8,
  topics: [
    {
      slug: "m2-bigdata-intro",
      title: "Big Data: Definition, 3Vs, Features & Challenges",
      sources: [
        "https://en.wikipedia.org/wiki/Big_data",
        "https://www.ibm.com/topics/big-data"
      ],
      blocks: [
        {
          type: "definition",
          text: "Big data is data so large, fast or varied that normal tools cannot store and process it in time."
        },
        {
          type: "text",
          html: `<p>Doug Laney described the problem in 2001, and Gartner later popularised his three dimensions as the <b>3Vs</b>.</p>
<ul>
<li><b>Volume</b>: the amount, because companies now hold terabytes to petabytes and the line keeps moving as tools improve.</li>
<li><b>Velocity</b>: how fast data arrives and how fast you must handle it, since card authorisations and sensor feeds never stop.</li>
<li><b>Variety</b>: the mix of structured tables, semi-structured JSON or XML, and unstructured text, images, audio and video.</li>
</ul>
<p>Two more Vs usually join them. <b>Veracity</b> is how far you can trust the data, so noise, missing fields, duplicates and sensor drift all lower it. <b>Value</b> is the insight or money the analysis finally produces. Some authors also add <b>variability</b>, because formats and meanings change over time.</p>
<p><b>Features.</b> Data comes from many distributed sources and most of it is unstructured, so you process it in parallel on clusters of commodity servers rather than one big machine. Storage is cheap and scales out, and the schema is often read at query time rather than enforced on write.</p>
<p><b>Challenges.</b> First you must capture and store the flood, then search, share, transfer, query and visualise it. Privacy and security follow because personal data sits in huge pools, along with data-quality work when sources use different formats. Finally there is the cost of scaling and the shortage of people who can do the job.</p>
<p><b>Where the flood comes from.</b> Mobile phones, IoT sensors, RFID readers, cameras and microphones all feed it, along with satellite and remote-sensing images. Software logs, social media posts and ordinary business transactions add still more. One widely quoted figure says about 2.5 exabytes of data were generated every day in 2012, while world storage per person had roughly doubled every 40 months since the 1980s.</p>`
        },
        {
          type: "example",
          html: `<p>A district bus operator fits 200 sensors to each bus and keeps ten years of ticket sales, GPS traces, engine logs and driver radio recordings. One SQL server holds the tickets fine, then chokes on the recordings because audio and continuous GPS do not fit tables well. Volume forces a cluster that grows by adding cheap nodes, while variety forces a data lake that accepts raw files as they are. Live GPS forces streaming because the depot needs positions now, not tomorrow. Those three pressures together explain why this counts as big data.</p>`
        },
        {
          type: "tip",
          html: `<p>For 3 marks give the Gartner definition and name the 3Vs with one line each. For 7 or 14 marks add veracity and value, then list features and at least five challenges with an example each, naming Laney and Gartner once. Never answer with just "large amount of data" because the marks sit in velocity, variety and what they do to processing.</p>`
        }
      ],
      practice: [
        {
          q: "What is the difference between veracity and value? Give one example of each. Why does high volume make veracity worse?",
          a: `<p><b>Veracity</b> is how far you can trust the data: is it accurate, complete and consistent? <b>Value</b> is what the insight is worth once the analysis is done.</p><p>Example: a retail chain scrapes 2 million product pages, where duplicate listings and stale prices are veracity problems, while the pricing dashboard that lifts margin by 4% is the value.</p><p>Volume makes veracity worse because nobody can check billions of rows by hand. More sources bring more formats, more missing fields, more duplicates and more sensor drift, so an error that was rare at 10,000 rows becomes normal at 10 billion. Cleaning costs more as volume grows, which is why teams skip it and the analysis inherits the noise.</p>`,
          marks: 3,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m2-cloud",
      title: "Cloud Computing and Its Link to Big Data",
      sources: [
        "https://csrc.nist.gov/pubs/sp/800/145/final",
        "https://en.wikipedia.org/wiki/Cloud_computing"
      ],
      blocks: [
        {
          type: "definition",
          text: "Cloud computing rents shared computing resources over a network, on demand, with little provider interaction."
        },
        {
          type: "text",
          html: `<p><b>NIST definition (SP 800-145, 2011).</b> Cloud computing is a model for ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (networks, servers, storage, applications and services). You can provision and release them quickly, with little management effort or help from the provider.</p>
<p><b>Five essential characteristics.</b></p>
<ul>
<li><b>On-demand self-service</b>: you add server time or storage yourself instead of asking a person to do it.</li>
<li><b>Broad network access</b>: you reach it over the network from phones, laptops and workstations, so location hardly matters.</li>
<li><b>Resource pooling</b>: the provider serves many customers from one multi-tenant pool, assigning and reassigning resources as demand shifts.</li>
<li><b>Rapid elasticity</b>: capacity grows and shrinks fast, sometimes by itself, so it looks unlimited from your side.</li>
<li><b>Measured service</b>: storage, processing and bandwidth are metered, so both sides can see what was actually used.</li>
</ul>
<p><b>Three service models.</b> <b>IaaS</b> rents raw virtual machines, storage and network, while you manage the OS and everything above it. <b>PaaS</b> rents a managed runtime and database, so you deploy code and the provider patches the platform. <b>SaaS</b> rents a finished application such as webmail. <b>Deployment models</b> are private, public, hybrid and community.</p>
<p><b>Why the two need each other.</b> Big data workloads are spiky and hungry for storage, so buying servers for the peak wastes money. The cloud gives elastic storage and compute that bills by the hour, along with managed Hadoop, Spark and NoSQL services that let a small team skip building a cluster. In return, analytics is the workload that pays for large cloud data centres: the cloud supplies the infrastructure, and big data gives it something to carry.</p>`
        },
        {
          type: "example",
          html: `<p>A two-person startup runs a festival ticketing app that idles for most of the year. For eleven months it rents three servers, then scales to forty for the ten days before the festival before dropping back to three. Capital cost stays at zero because the bill follows demand instead of sitting in idle hardware. The same elasticity lets it spin up a Spark job over a year of logs for two hours and then delete the cluster, paying only for what it used.</p>`
        },
        {
          type: "tip",
          html: `<p>Write the NIST definition almost word for word, then list the five characteristics for the 3-mark version. For 7 or 14 marks add IaaS, PaaS and SaaS with one example each, followed by three links to big data: elasticity for spiky loads, pay-per-use instead of capex, and managed analytics services. Keep elasticity (automatic scale) apart from scalability (the ability to grow).</p>`
        }
      ],
      practice: [
        {
          q: "A five-person analytics team must run weekly Spark jobs and host a dashboard. Compare PaaS and SaaS for this team and recommend one, with two reasons.",
          a: `<p><b>SaaS</b> gives a finished application that the team logs in and uses. It suits the dashboard if an off-the-shelf BI tool covers the charts, but it cannot run custom Spark code and the vendor fixes the data model.</p><p><b>PaaS</b> gives a managed platform with runtime, database and often a managed Spark service. The team deploys its own jobs and code while the provider handles servers, patching and scaling.</p><p><b>Recommendation: PaaS.</b> Reason 1: the weekly Spark job is custom code, and SaaS cannot host it. Reason 2: the team is too small to patch an OS, so IaaS would add work while PaaS gives managed scaling and charges only for the hours used.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m2-iot",
      title: "IoT & Big Data",
      sources: [
        "https://en.wikipedia.org/wiki/Internet_of_things",
        "https://en.wikipedia.org/wiki/Big_data",
        "https://www.ibm.com/topics/big-data"
      ],
      blocks: [
        {
          type: "definition",
          text: "The Internet of Things is a network of physical objects with sensors and software that collect and swap data without people involved."
        },
        {
          type: "text",
          html: `<p>An IoT device senses the world, measuring temperature, motion, vibration or heart rate, then processes the reading locally and sends it over a network. Actuators let the same system respond by switching a pump off or raising an alarm. Consumer examples include smart thermostats and wearables, though the bigger market is industrial, with fleet tracking, smart metering, factory monitoring and connected healthcare.</p>
<p><b>Why IoT data is big data.</b> Each device sends only small records, but the count is enormous and it never stops. Thousands of sensors sampling every second produce <b>volume</b>, while the continuous stream produces <b>velocity</b> because the value fades within seconds. <b>Variety</b> follows from the mix of numbers, images and status strings, and <b>veracity</b> suffers because noise, dropped packets and uncalibrated sensors creep in.</p>
<p><b>Typical flow.</b></p>
<ul>
<li><b>Device</b>: the sensor samples the reading and stamps the time, so every value carries its moment.</li>
<li><b>Gateway</b>: it aggregates, filters, converts protocols and buffers when the link drops, while fog or edge computing analyses nearby data to cut bandwidth and latency.</li>
<li><b>Cloud storage</b>: a time-series or wide-column store holds readings, or a data lake keeps raw payloads for later use.</li>
<li><b>Analytics</b>: dashboards, anomaly detection and predictive maintenance run here, then a control message goes back to the device.</li>
</ul>`
        },
        {
          type: "example",
          html: `<p>A cold-chain operator runs 1,000 refrigerated trucks with 10 sensors each, which means 10,000 sensors reporting every 10 seconds. That works out to 1,000 readings per second, or about 86 million a day. At 100 bytes each, the raw feed is roughly 8.6 GB daily before indexes and replication. No spreadsheet and no single server survives that rate, so the data needs a streaming ingest layer and a distributed store that grows by adding nodes.</p>`
        },
        {
          type: "tip",
          html: `<p>For 3 marks define IoT and give two reasons its data is big data: volume from device count and velocity from constant sampling. For 7 or 14 marks draw the four-stage flow and label what the gateway does, naming aggregation, filtering, protocol conversion and edge analytics. A quick volume estimate earns easy marks because it shows sensors × readings per second × seconds per day × bytes per record.</p>`
        }
      ],
      practice: [
        {
          q: "A utility installs 5,000 smart meters. Each sends one reading every 15 minutes, and each reading is 120 bytes. Calculate the raw data per day and per 30-day month. Which V does this stress, and what storage would you choose?",
          a: `<p>Readings per meter per day = 24 hours × 4 = 96.</p><p>Total readings per day = 5,000 × 96 = <b>480,000</b>.</p><p>Raw volume per day = 480,000 × 120 bytes = 57,600,000 bytes ≈ <b>57.6 MB/day</b>.</p><p>Per 30-day month that is about 1.73 GB, or about 5.2 GB with three replicas.</p><p>This stresses <b>volume</b> over time, along with velocity at ingest because every meter reports on the quarter hour. Readings are append-only, time-stamped and never updated, so a <b>wide-column or time-series store</b> fits better than a relational table because it compresses by column, partitions by time and scales out. You can also land raw payloads in a data lake first.</p>`,
          marks: 7,
          diff: "hard"
        },
        {
          q: "Design an end-to-end big data pipeline for monitoring vaccine temperature in 2,000 cold-chain boxes. Cover the four stages, where you would process in batch versus stream, one storage choice with justification, and two challenges.",
          a: `<p><b>1. Device and gateway.</b> Each box gets a temperature sensor and a door sensor sampling every 30 seconds. A gateway in the truck aggregates readings, filters unchanged values, buffers during network loss and forwards over cellular.</p><p><b>2. Ingest and store.</b> A streaming platform such as Kafka buffers the feed. Raw payloads go to a data lake, while clean readings go to a time-series or wide-column store keyed by box id and timestamp. Writes are append-only and queries ask for "last 24 hours for box X", so that shape fits.</p><p><b>3. Stream processing.</b> Simple rules run in the stream, so a temperature above 8 °C for more than 10 minutes triggers an SMS and a ticket. That needs an answer in minutes, which is why batch is useless here.</p><p><b>4. Batch processing.</b> Nightly Spark jobs compute per-box excursion minutes, compressor duty cycles and failure risk for the fleet dashboard, and they also retrain the anomaly model on the full history.</p><p><b>Challenges.</b> (a) Data quality: sensor drift, duplicate retransmits and missing intervals must be caught before they fire false alarms. (b) Scale and cost: 2,000 boxes × 2,880 readings a day ≈ 5.76 million readings daily, so keeping years of raw data needs compression, tiering and a retention policy. Add security, because the feed reveals where shipments are.</p>`,
          marks: 14,
          diff: "hard"
        }
      ]
    },
    {
      slug: "m2-generation",
      title: "Big Data Generation & Acquisition",
      sources: [
        "https://link.springer.com/chapter/10.1007/978-3-319-06245-7_3",
        "https://en.wikipedia.org/wiki/Data_preprocessing",
        "https://www.ibm.com/topics/big-data"
      ],
      blocks: [
        {
          type: "definition",
          text: "Big data acquisition is the pipeline that collects raw data, extracts the fields you need, cleans them and loads them into storage."
        },
        {
          type: "text",
          html: `<p>Chen, Mao, Zhang and Leung describe the big data value chain in four phases: <b>generation → acquisition → storage → analysis</b>. Generation and acquisition make up the "exploitation" stage, where you get the raw material out of the ground.</p>
<p><b>Where data is generated.</b> People make some of it through posts, clicks, reviews, transactions and call records. Machines make the rest through sensors, RFID tags, GPS traces, cameras, satellites and software logs. Organisations add ERP, CRM, billing, medical and financial records.</p>
<p><b>Four acquisition stages.</b></p>
<ul>
<li><b>1. Collection or crawling.</b> Pull the raw payload, using web crawlers and scrapers for pages, APIs for partner systems, log collectors and agents for servers, gateways for sensors, and message queues such as Kafka for streams.</li>
<li><b>2. Extraction.</b> Parse the payload and keep only the fields you need, such as product name and price from an HTML page, text from a PDF, or fields from a JSON response, while fixing encoding and broken markup here.</li>
<li><b>3. Cleaning and preprocessing.</b> Remove duplicates, correct or drop invalid records, fill or flag missing values, normalise units and formats, and filter noise and check ranges.</li>
<li><b>4. Integration and transportation.</b> Map different sources onto one schema and resolve the same entity appearing twice (data fusion), then move the result into HDFS, a NoSQL store or a data lake by batch load or streaming pipeline.</li>
</ul>
<p><b>Steps of data pre-processing.</b> Data cleaning, data integration, data transformation (normalisation, aggregation, binning, encoding), data reduction (sampling, feature selection, dimensionality reduction), and discretisation.</p>`
        },
        {
          type: "example",
          html: `<p>A price-comparison site crawls 5,000 shop pages each night and saves the raw HTML for traceability. The extractor then pulls name, price and stock from each page, while the cleaner drops duplicate SKUs, converts dollars to rupees, and throws out pages with no price instead of guessing. The integrator maps every shop's field names to one schema before loading the result into MongoDB. When a selector breaks, it shows up next morning as a sudden drop in records, which is why raw saves matter.</p>`
        },
        {
          type: "code",
          lang: "python",
          html: `import pandas as pd

df = pd.read_csv("raw_orders.csv")
df = df.drop_duplicates()
df["amount"] = pd.to_numeric(df["amount"], errors="coerce")   # bad text becomes NaN
df["amount"] = df["amount"].fillna(df["amount"].median())
df["city"] = df["city"].str.strip().str.upper()
df.to_csv("clean_orders.csv", index=False)`
        },
        {
          type: "tip",
          html: `<p>Two different questions live here, so keep them apart. "Stages of acquisition" wants the four-stage flow with one tool per stage, so draw arrows and label them. "Steps of data pre-processing" wants the five-step list: cleaning, integration, transformation, reduction, discretisation. Mixing them loses marks, so for 14 marks wrap the answer in the value chain of generation, acquisition, storage and analysis.</p>`
        }
      ],
      practice: [
        {
          q: "A web server produces 40 million access-log lines a day. Describe how you would clean these logs before analysis, and name three defects you expect to find.",
          a: `<p><b>Goal:</b> turn raw lines into one row per valid request, ready for session and funnel analysis.</p><p><b>Steps.</b> (1) Parse each line into fields such as IP, timestamp, method, URL, status, bytes and user agent, dropping lines that do not match the format. (2) Deduplicate, because retries and mirrored servers write the same request twice, so key on timestamp + IP + URL. (3) Filter non-content requests such as images, CSS, robots.txt and monitoring pings that inflate page views. (4) Normalise by putting timestamps in one time zone and format, stripping query strings that carry session ids, and standardising URL case. (5) Handle missing values by flagging a missing user agent or byte count instead of guessing it. (6) Validate ranges, since status codes must be 100 to 599 and bytes must be non-negative. (7) Derive fields such as session id and is-bot before loading.</p><p><b>Expected defects:</b> duplicate lines from retries, truncated lines from interrupted writes, and bot or crawler traffic mixed with human traffic, along with different timestamps across servers.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m2-analysis",
      title: "Big Data Analysis: Traditional vs Big Data Methods",
      sources: [
        "https://en.wikipedia.org/wiki/Big_data",
        "https://en.wikipedia.org/wiki/Data_mining",
        "https://www.ibm.com/think/topics/stream-processing",
        "https://www.ibm.com/topics/big-data"
      ],
      blocks: [
        {
          type: "definition",
          text: "Big data analysis uses distributed, often parallel methods to find patterns and predictions in data too large for one machine."
        },
        {
          type: "text",
          html: `<p><b>Traditional analysis</b> runs on one machine over structured data in a relational database. You sample, state a hypothesis, test it and then report, with SQL and classical statistics doing the work. It stays cheap and precise while the data fits and the schema stays fixed.</p>
<p><b>Big data analysis</b> spreads data across a cluster and moves the code to the data. It works on the full set rather than a sample, reads the schema at query time, and explores first so that patterns come out before hypotheses follow. Iteration is normal, which is why in-memory engines beat disk-based ones.</p>
<p><b>Two processing methods.</b></p>
<ul>
<li><b>Batch processing</b>: bounded historical data run on a schedule, with high latency and high throughput, using Hadoop MapReduce and Spark.</li>
<li><b>Stream processing</b>: unbounded events handled as they arrive, with low latency plus windows and running aggregates, using Kafka plus Flink, Storm or Spark Structured Streaming.</li>
</ul>
<p><b>What the analysis actually does.</b> Data mining supplies the task types: classification, clustering, regression, association rules, anomaly detection and summarisation.</p>
<table class="tbl">
<tr><th>Tool</th><th>Application area</th></tr>
<tr><td>Hadoop (HDFS + MapReduce)</td><td>Cheap batch storage and processing of huge files, such as years of call records on commodity servers.</td></tr>
<tr><td>Apache Spark</td><td>In-memory batch and streaming analytics, iterative machine learning, live user-activity processing.</td></tr>
<tr><td>R</td><td>Statistical tests, modelling and publication-quality plots on prepared datasets.</td></tr>
<tr><td>Python + pandas</td><td>Cleaning, reshaping and feature engineering before model training.</td></tr>
<tr><td>MongoDB</td><td>Flexible storage and querying of product catalogues, reviews and user profiles.</td></tr>
</table>`
        },
        {
          type: "example",
          html: `<p>A card network scores every authorisation in under 100 ms with a stream job that checks each payment before the money moves. Each night a batch job runs over the last 90 days to tune those rules from fresh fraud patterns. The batch job finds the pattern across history, while the stream job applies it in real time. A single-server nightly report cannot do either job because it is too slow for the stream and too small for the history.</p>`
        },
        {
          type: "tip",
          html: `<p>Answer comparison questions in a table because they are marked row by row. Cover data size, schema, hardware, processing style, approach and latency, then name batch and stream with one tool each. For 7 marks five tools with one application line each is enough, so skip their internals.</p>`
        }
      ],
      practice: [
        {
          q: "Name four data mining tasks and give one concrete application of each in a big data setting.",
          a: `<p><b>Classification</b> puts a record into a known class, for example labelling each card transaction as genuine or fraudulent with a model trained on past chargebacks.</p><p><b>Clustering</b> groups similar records when you have no labels, for example splitting millions of subscribers by usage pattern for targeted tariff plans.</p><p><b>Association rule learning</b> finds items that turn up together, for example market-basket analysis on e-commerce orders that powers "customers also bought" and shelf layout.</p><p><b>Anomaly detection</b> finds records that do not fit the normal pattern, for example flagging a strange sensor reading or login for predictive maintenance or security alerts.</p><p>Regression (predicting a number) and summarisation (compact reports and dashboards) are the other two standard task types.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m2-applications",
      title: "Big Data Applications",
      sources: [
        "https://en.wikipedia.org/wiki/Big_data",
        "https://en.wikipedia.org/wiki/Fraud",
        "https://www.ibm.com/topics/big-data",
        "https://www.ibm.com/think/topics/stream-processing"
      ],
      blocks: [
        {
          type: "definition",
          text: "Big data applications use large, mixed datasets to find patterns that support decisions, predictions and automated action."
        },
        {
          type: "text",
          html: `<p>Five domains cover most exam answers, so for each one say what data goes in, what technique runs, and what the business gets.</p>
<table class="tbl">
<tr><th>Domain</th><th>Data and technique</th><th>Outcome</th></tr>
<tr><td>Fraud detection (banking)</td><td>Live transaction stream plus device, location and spending history; anomaly detection, correlation, time-series analysis.</td><td>Suspicious authorisations flagged or blocked before settlement.</td></tr>
<tr><td>Recommender systems (e-commerce)</td><td>Clickstream, baskets, ratings and purchase history; collaborative filtering and association rules.</td><td>Personalised "recommended for you" lists that raise basket size.</td></tr>
<tr><td>Social media analytics</td><td>Posts, likes, shares, impressions and click paths; text and sentiment analysis, audience segmentation.</td><td>Better ad targeting and content timing, plus early warning of a PR problem.</td></tr>
<tr><td>Healthcare</td><td>Electronic health records, imaging, wearable and ICU monitor data; predictive risk models, computer-aided diagnosis.</td><td>Earlier intervention, personalised treatment, fewer readmissions.</td></tr>
<tr><td>Telecom</td><td>Call detail records, network logs and app usage; churn prediction, anomaly detection, capacity planning.</td><td>Retention offers for likely leavers, faster fault detection.</td></tr>
</table>
<p>Fraud work also uses high-level tests such as Benford's law on accounting figures, with focused checks following on the small set of odd transactions. Banking, manufacturing and government are hit most often, which makes the investment easy to justify.</p>`
        },
        {
          type: "example",
          html: `<p>One card is used in Kochi, then Dubai, then Chennai within 90 minutes, which no traveller can do. A stream processor checks location, device id and the card's usual spending range, then scores the third transaction as high risk, blocks it and sends the customer an SMS. A genuine travel case moves to a review queue instead, so the bank stops the loss without losing the customer. That single story shows data, technique and action in one place.</p>`
        },
        {
          type: "tip",
          html: `<p>For a 14-mark question give five domains, each with data, technique and benefit in about three lines. Learn one named example per domain: card fraud for banking, Amazon-style recommendations for retail, churn for telecom, ICU monitoring for healthcare, and brand sentiment for social media. Avoid vague lines such as "helps business decide" because they earn nothing.</p>`
        }
      ],
      practice: [
        {
          q: "A telecom operator loses 2% of subscribers a month. Describe how big data analytics can reduce churn, naming the data, the technique and the action.",
          a: `<p><b>Data.</b> Call detail records showing who called whom, when and for how long, plus recharge and bill history, data-usage volume, app categories, complaints and support tickets. Add network quality per cell tower and the contract end date.</p><p><b>Feature building.</b> Aggregate per subscriber over rolling 30, 60 and 90-day windows, watching for a drop in outgoing calls, a fall in data use, more complaints, repeated dropped calls at the home tower, and days to contract expiry.</p><p><b>Technique.</b> Train a classification model on past churners versus stayers to output a churn probability per subscriber. Clustering can group subscribers into behaviour segments first, so each segment gets its own model.</p><p><b>Action.</b> The top-risk list feeds a retention campaign with a targeted data pack, a device upgrade or a call from the retention desk, chosen by segment. Track take-up and real churn to see whether the model saved revenue.</p><p><b>Why big data.</b> Billions of call records arrive daily from many sources and need weekly scoring, which a single relational server with manual analysis cannot keep up with.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m2-nosql",
      title: "NoSQL: Why It Exists, and the Four Store Types",
      sources: [
        "https://www.mongodb.com/nosql-explained",
        "https://en.wikipedia.org/wiki/NoSQL"
      ],
      blocks: [
        {
          type: "definition",
          text: "NoSQL databases store data in non-tabular models (key-value, document, wide-column or graph), with flexible schemas and horizontal scaling."
        },
        {
          type: "text",
          html: `<p><b>Why did NoSQL even happen?</b> Relational databases assume a fixed schema, normalised tables and joins, which hurts in three places at web scale. A schema change on a 500-million-row table becomes a migration project, while product catalogues need different fields per item. Joins across sharded tables turn into network traffic, and scaling means buying a bigger server until the cost ceiling arrives. NoSQL systems appeared in the late 2000s (Google's Bigtable paper, then MongoDB and CouchDB in 2009) because they trade some guarantees for flexibility and scale-out.</p>
<p><b>ACID vs BASE.</b> ACID means atomicity, consistency, isolation and durability, so a transaction happens completely or not at all. BASE means basically available, soft state and eventual consistency, so the system stays up, may be briefly inconsistent, and converges later. Most NoSQL stores are BASE, though some, including MongoDB, also offer multi-document ACID transactions. The CAP theorem says a distributed system can guarantee only two of consistency, availability and partition tolerance.</p>
<table class="tbl">
<tr><th>Type</th><th>Data model</th><th>Examples</th><th>Typical use</th></tr>
<tr><td>Key-value</td><td>Unique key mapped to one opaque value</td><td>Redis, Amazon DynamoDB</td><td>Caching, sessions, shopping carts</td></tr>
<tr><td>Document</td><td>JSON/BSON documents with nested fields and arrays</td><td>MongoDB, CouchDB</td><td>Product catalogues, user profiles, CMS</td></tr>
<tr><td>Column / wide-column</td><td>Rows with dynamic column families, sparse columns</td><td>Cassandra, HBase</td><td>Time-series, write-heavy logs, IoT readings</td></tr>
<tr><td>Graph</td><td>Nodes and edges with properties</td><td>Neo4j</td><td>Social networks, recommendations, fraud rings</td></tr>
</table>
<p><b>RDBMS still wins</b> when you need strong multi-row transactions, ad-hoc joins and reporting, or strict constraints, and also when the data is small and well structured.</p>`
        },
        {
          type: "example",
          html: `<p>A marketplace sells phones with 30 attributes and books with 6, so fixed columns never fit both. In SQL you either create 30 mostly empty columns or an attribute-value table joined three ways for every page view. In MongoDB each product is one document holding only its own fields, so the product page becomes a single read. That contrast is the whole schema-flexibility argument: strict tables force joins, while documents let each item carry what it needs.</p>`
        },
        {
          type: "tip",
          html: `<p>For 3 marks define NoSQL, expand "not only SQL" and name the four types. For 7 or 14 marks draw the four-row table with data model, two products and a use case, then add BASE versus ACID and when RDBMS still wins. Examiners reward the trade-off sentence that NoSQL buys scale and flexibility by giving up immediate consistency.</p>`
        }
      ],
      practice: [
        {
          q: "State what ACID and BASE each guarantee, in one line per letter, and explain which one a shopping-cart service should prefer.",
          a: `<p><b>ACID</b>: <b>A</b>tomicity, where a transaction completes fully or not at all. <b>C</b>onsistency, where the database moves from one valid state to another. <b>I</b>solation, where concurrent transactions do not see each other's partial work. <b>D</b>urability, where committed data survives a crash.</p><p><b>BASE</b>: <b>B</b>asically available, so the system answers even when a node fails. <b>S</b>oft state, so state may change without new input while replicas converge. <b>E</b>ventual consistency, so all replicas agree in the end, not at once.</p><p><b>Shopping cart: BASE.</b> The cart must stay writable during a peak sale even if one node is down, and a cart that shows up on a second device a second later is fine. Losing a write or refusing an add-to-cart is not. Checkout and payment still need ACID, which is why the order ledger often stays relational.</p>`,
          marks: 3,
          diff: "easy"
        },
        {
          q: 'Model a "friends of friends" recommendation feature for a social app. Which NoSQL type fits, what does the data look like, and why is a relational join a poor choice here?',
          a: `<p><b>Type: graph database</b> (Neo4j, or Amazon Neptune).</p><p><b>Model.</b> Each user is a node with properties such as id, name and city, while each friendship is an edge labelled FRIEND with properties such as since. A "likes" edge can join a user to a product node, so recommendations walk user → product → other users → products.</p><p><b>Query idea.</b> Start at user A, walk two FRIEND edges to reach friends of friends, then count products they liked and A has not. In Cypher this is a short pattern match because the engine follows pointers between records instead of computing joins.</p><p><b>Why not SQL.</b> A two-hop query needs two self-joins and three hops needs three, so each hop multiplies the rows to match and cost grows with the whole table rather than the small neighbourhood you need. Graph stores keep adjacency with the node, so traversal cost depends on the size of the neighbourhood, which is the "highly connected data" case.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m2-mongodb",
      title: "MongoDB: Features, Documents, Collections & Data Types",
      sources: [
        "https://www.mongodb.com/docs/manual/core/document/",
        "https://www.mongodb.com/docs/manual/core/databases-and-collections/"
      ],
      blocks: [
        {
          type: "definition",
          text: "MongoDB is a document-oriented NoSQL database that stores records as BSON documents in collections instead of table rows."
        },
        {
          type: "text",
          html: `<p><b>Hierarchy.</b> Server → database → collection → document → field. A collection is roughly a table and a document is roughly a row, except documents in one collection need not share fields. A database holds one or more collections, and a collection is created automatically on first insert.</p>
<p><b>Documents and BSON.</b> A document is a set of field-value pairs, where values can be strings, numbers, booleans, dates, arrays, embedded documents, ObjectId or null. MongoDB stores them as <b>BSON</b>, a binary form of JSON that adds types JSON lacks (Date, ObjectId, Long, Decimal128, BinData) and parses faster. The maximum BSON document size is 16 MiB, while larger objects go through GridFS.</p>
<p><b>The _id field.</b> Every document needs a unique, immutable <code>_id</code> that acts as the primary key and always sits first. If you omit it, the driver generates an <b>ObjectId</b> of 12 bytes: a 4-byte timestamp, a 5-byte random value per process, and a 3-byte counter. It stays unique without a central sequence and roughly ordered by creation time.</p>
<p><b>Features.</b> Flexible schema with optional JSON-schema validation, a rich query language with secondary and compound indexes, and the aggregation pipeline. Replica sets give high availability and failover, sharding gives horizontal scale, multi-document ACID transactions cover strict writes, and GridFS handles large files.</p>
<table class="tbl">
<tr><th>BSON type</th><th>Example</th></tr>
<tr><td>String</td><td>"Anu"</td></tr>
<tr><td>Number (int, long, double, decimal)</td><td>21, 8.75</td></tr>
<tr><td>Boolean</td><td>true</td></tr>
<tr><td>Date</td><td>ISODate("2026-07-01")</td></tr>
<tr><td>ObjectId</td><td>ObjectId("65f1c...")</td></tr>
<tr><td>Array</td><td>["SQL", "Python"]</td></tr>
<tr><td>Embedded document</td><td>{ city: "Kochi", pin: 682016 }</td></tr>
<tr><td>Null</td><td>null</td></tr>
</table>`
        },
        {
          type: "example",
          html: `<p>A learning app keeps one database, <code>academy</code>, with collections for <code>students</code>, <code>courses</code> and <code>orders</code>. One student document holds a name, an array of enrolled course codes, an address sub-document and a join date, so the profile page loads in one read with no join. Adding a <code>laptop</code> field to one student leaves the other 50,000 documents alone, which shows why flexible schemas suit fast-changing products that gain new fields every term.</p>`
        },
        {
          type: "code",
          lang: "js",
          html: `db.students.insertOne({
  _id: ObjectId(),
  name: "Anu",
  age: 21,
  cgpa: 8.75,
  active: true,
  joined: new Date("2026-07-01"),
  skills: ["SQL", "Python"],
  address: { city: "Kochi", pin: 682016 },
  mentor: null
})`
        },
        {
          type: "tip",
          html: `<p>For three marks define MongoDB, name BSON and give three features. For seven marks draw the database → collection → document hierarchy, then list data types with a value each. Always mention <code>_id</code> and ObjectId because a question on document structure expects it, and remember 16 MiB and GridFS since both are easy one-mark additions.</p>`
        }
      ],
      practice: [
        {
          q: "What is an ObjectId in MongoDB? What is it made of, and why does MongoDB generate it on the client instead of using an auto-increment counter?",
          a: `<p>An ObjectId is the default value type for the <code>_id</code> field: a 12-byte unique identifier.</p><p><b>Structure.</b> 4 bytes hold seconds since the Unix epoch, so ids sort roughly by creation time. 5 bytes hold a random value unique to the machine and process. 3 bytes hold an incrementing counter that starts from a random value.</p><p><b>Why not auto-increment.</b> A central counter is a single point of failure and a bottleneck across shards, since every insert would need a round trip to one authority. The driver makes the ObjectId before the write leaves the application, so any node can accept an insert on its own with no coordination. Ids also stay practically unique across machines, and the timestamp prefix gives free ordering by creation time.</p>`,
          marks: 3,
          diff: "easy"
        },
        {
          q: "Distinguish replication from sharding in MongoDB. Which problem does each solve, and can you use both?",
          a: `<p><b>Replication</b> keeps copies of the same data on several nodes in a replica set. One member is primary and takes writes, while the others apply the same operations. It solves <b>availability and durability</b> because if the primary dies a secondary is elected and service continues, and reads can also be served from secondaries.</p><p><b>Sharding</b> splits one collection across shards by a shard key, so each shard holds a subset of the data. It solves <b>scale</b> because storage and write throughput grow by adding shards rather than by buying a bigger server.</p><p>They work together, and normally do: each shard is itself a replica set, so the cluster gets failover and horizontal scale. Replication keeps every copy full size, while sharding alone would leave you exposed to node loss.</p>`,
          marks: 3,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m2-mongodb-crud",
      title: "MongoDB: Create, Update, Delete & Query (+ $slice)",
      sources: [
        "https://www.mongodb.com/docs/manual/crud/",
        "https://www.mongodb.com/docs/manual/tutorial/query-documents/",
        "https://www.mongodb.com/docs/manual/reference/operator/projection/slice/"
      ],
      blocks: [
        {
          type: "definition",
          text: "CRUD in MongoDB means inserting documents, querying them with filters, updating fields with operators, and deleting documents that match a filter."
        },
        {
          type: "text",
          html: `<p><b>Create.</b> <code>insertOne(doc)</code> adds one document while <code>insertMany([...])</code> adds several, and the collection is created on first insert. Every write is atomic at the level of one document. Schema rules are optional, so create the collection with a <code>validator</code> using <code>$jsonSchema</code> when you need to require fields or types.</p>
<p><b>Read.</b> <code>find(filter, projection)</code> selects documents, where an empty filter <code>{}</code> returns everything. Comparison operators sit inside the field (<code>$eq</code>, <code>$ne</code>, <code>$gt</code>, <code>$gte</code>, <code>$lt</code>, <code>$lte</code>, <code>$in</code>, <code>$nin</code>), while logical operators are <code>$and</code>, <code>$or</code> and <code>$not</code>. Use dot notation for nested fields, as in <code>"address.city"</code>, and write a projection such as <code>{ name: 1, _id: 0 }</code> to return only the name.</p>
<p><b>Update.</b> <code>updateOne(filter, update)</code> changes the first match while <code>updateMany</code> changes all of them. The update document needs an operator because <code>$set</code> assigns, <code>$inc</code> adds, <code>$unset</code> removes, and <code>$push</code> and <code>$pull</code> edit arrays. Add <code>{ upsert: true }</code> to insert when nothing matches.</p>
<p><b>Delete.</b> <code>deleteOne(filter)</code> removes the first match, while <code>deleteMany(filter)</code> removes every match.</p>
<p><b>$slice projection.</b> It returns only part of an array field, so a positive number gives the first n elements and a negative number gives the last n. <code>[skip, limit]</code> skips, then returns. It works only in a <code>find</code> projection, not inside a positional <code>$</code> projection.</p>`
        },
        {
          type: "example",
          html: `<p>A stationery shop stores each product as a document with a <code>tags</code> array and a <code>stock</code> count. The product page needs the first two tags only, while the stock report needs every item below 10 topped up by 20. One <code>find</code> with <code>$slice</code> handles the page and one <code>updateMany</code> with <code>$inc</code> handles the restock, so the documents never leave the database. That pair shows a projection doing display work and an update doing bulk work side by side.</p>`
        },
        {
          type: "code",
          lang: "js",
          html: `db.products.insertMany([
  { name: "Pen", price: 10, tags: ["office", "blue", "pack"], stock: 50 },
  { name: "Book", price: 250, tags: ["study", "paper"], stock: 8 }
])

db.products.find({ price: { $gt: 100 } }, { name: 1, _id: 0 })   // filter + projection
db.products.updateMany({ stock: { $lt: 10 } }, { $inc: { stock: 20 } })
db.products.find({ name: "Pen" }, { tags: { $slice: 2 } })       // first 2 tags
db.products.deleteOne({ name: "Book" })`
        },
        {
          type: "code",
          lang: "js",
          html: `// Validate on create: name and age required, age an integer >= 17
db.createCollection("students", {
  validator: { $jsonSchema: {
    bsonType: "object",
    required: ["name", "age"],
    properties: { age: { bsonType: "int", minimum: 17 } }
  } }
})`
        },
        {
          type: "code",
          lang: "js",
          html: `// tags: ["office", "blue", "pack"]
db.products.find({ name: "Pen" }, { tags: { $slice: 2 } })      // first 2
db.products.find({ name: "Pen" }, { tags: { $slice: -2 } })     // last 2
db.products.find({ name: "Pen" }, { tags: { $slice: [1, 2] } }) // skip 1, return 2`
        },
        {
          type: "tip",
          html: `<p>This is the most repeated hands-on area, so write the syntax exactly as <code>db.collection.method({ filter }, { update })</code>. A missing brace or a filter written as an update loses the mark even when the idea is right. Learn <code>$slice</code> in all three forms (2, -2 and [1,2]) and say it is a projection operator, then name the update operator (<code>$set</code>, <code>$inc</code>) and say whether you used <code>updateOne</code> or <code>updateMany</code>.</p>`
        }
      ],
      practice: [
        {
          q: 'Write a query that returns the name and price of products whose category is either "electronics" or "appliance" and whose price is above 5,000. Exclude _id.',
          a: `<p><code>db.products.find(</code><br><code>&nbsp;&nbsp;{ category: { $in: ["electronics", "appliance"] }, price: { $gt: 5000 } },</code><br><code>&nbsp;&nbsp;{ name: 1, price: 1, _id: 0 }</code><br><code>)</code></p><p><b>Why it works.</b> The first document is the filter, where <code>$in</code> matches a field against any value in a list so one condition replaces an <code>$or</code> on the same field. <code>$gt</code> is a comparison operator, so it must sit inside an object under the field name. Two conditions in one filter object join by an implicit AND. The second document is the projection where 1 includes and 0 excludes. Only <code>_id</code> may be mixed with inclusions, and it is included by default, so you must switch it off.</p>`,
          marks: 3,
          diff: "easy"
        },
        {
          q: "A warehouse collection has { item, qty }. Write an update that adds 50 units to every item with qty below 20 and inserts a new item if none matches, then explain the result document.",
          a: `<p><code>db.warehouse.updateMany(</code><br><code>&nbsp;&nbsp;{ qty: { $lt: 20 } },</code><br><code>&nbsp;&nbsp;{ $inc: { qty: 50 } },</code><br><code>&nbsp;&nbsp;{ upsert: true }</code><br><code>)</code></p><p><b>Explanation.</b> The first document selects documents, where <code>$lt: 20</code> is strict so an item with exactly 20 is untouched. <code>$inc</code> adds 50 to the existing value instead of replacing it, which avoids a read-modify-write race when several clients update at once.</p><p>The reply reports <code>matchedCount</code> and <code>modifiedCount</code>. With <code>upsert: true</code>, if nothing matches, MongoDB inserts one document built from the update. Here the filter uses a comparison operator, so it seeds no field, and <code>$inc</code> treats the missing <code>qty</code> as 0, giving <code>{ qty: 50 }</code>. An equality in the filter would be copied into the new document, so design the filter with the insert case in mind, and omit <code>upsert</code> when a missing match should change nothing.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    }
  ]
};
