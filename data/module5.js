window.DA_MODULES = window.DA_MODULES || {};
window.DA_MODULES[5] = {
  num: 5,
  title: "Popular Data Analytics Case Studies",
  hours: 5,
  topics: [
    {
      slug: "m5-recommender",
      title: "Recommender Systems: Five Techniques and the Cold Start Problem",
      sources: [
        "https://en.wikipedia.org/wiki/Recommender_system",
        "https://en.wikipedia.org/wiki/Knowledge-based_recommender_system",
        "https://arxiv.org/html/1811.11866v1"
      ],
      blocks: [
        {
          type: "definition",
          text: "A recommender system predicts which items a user will like, then ranks them using past behaviour, item content, user profiles or domain knowledge."
        },
        {
          type: "text",
          html: `<p><b>Why they exist.</b> A catalogue with 50,000 titles is unusable on its own because nobody scrolls that far, so a recommender scores items for one user and shows only the top few. Five technique families do this job, and each one fails somewhere different, which is why the table below compares them side by side.</p>
<table class="tbl">
<thead><tr><th>Technique</th><th>How it works</th><th>Advantage</th><th>Disadvantage</th></tr></thead>
<tbody>
<tr><td>Collaborative (user-based)</td><td>Find users whose ratings match yours. Recommend what they liked.</td><td>No item content needed. Captures taste.</td><td>Cold start, sparsity, slow at scale.</td></tr>
<tr><td>Collaborative (item-based)</td><td>Score item-to-item similarity from co-rating: "liked this, also liked that".</td><td>Similarities precomputed. Stable and scalable.</td><td>Still needs a rating history.</td></tr>
<tr><td>Content-based</td><td>Match item features (genre, keywords, cast) to the user profile.</td><td>Works for one user. Explainable.</td><td>Over-specialises. Needs rich metadata.</td></tr>
<tr><td>Demographic</td><td>Group users by age, gender, location. Recommend what the group liked. Grundy (1979) used "stereotypes".</td><td>No rating history. Cheap and fast.</td><td>Crude. Stereotypes. Weak for niche taste.</td></tr>
<tr><td>Knowledge-based</td><td>Apply explicit rules. Constraint-based filters on hard requirements (budget, seats). Case-based retrieves a similar past case and adapts it.</td><td>No cold start. Suits cars, flats, loans.</td><td>Knowledge-acquisition bottleneck. Expert effort.</td></tr>
<tr><td>Hybrid</td><td>Combine two: weighted (add scores), switching (pick one by context), mixed (show both).</td><td>Covers each method's weakness. More accurate.</td><td>More complexity and tuning.</td></tr>
</tbody></table>
<p><b>Cold start.</b> There are two cases to handle. For a <i>new user</i> with no history yet, the system asks for a few favourite genres at signup, uses demographics, or falls back to popularity. For a <i>new item</i> with no ratings yet, it uses content similarity such as the same genre, cast or brand, and gives the item some exploratory exposure.</p>
<p>Netflix and Amazon combine all three fixes. Popularity rows cover the first session while an onboarding preference picker collects taste, and metadata similarity lets a brand-new title appear in "Because you watched…".</p>`
        },
        { type: "diagram", id: "recommender-tree" },
        {
          type: "example",
          html: `<p>Amazon's "Customers who bought this also bought" is <b>item-based collaborative filtering</b> because it runs on co-purchase counts rather than product descriptions. A phone released last week has no co-purchase data yet, so Amazon shows it under "Similar to items you viewed" using brand and specs as a content fallback. The phone also keeps a new-arrivals slot until real sales data arrives, which means you can see the whole cold-start workaround on one screen.</p>`
        },
        {
          type: "tip",
          html: `<p>Expect 7 or 14 marks, so build your answer around a table of the five techniques with one advantage and one disadvantage each. Name user-based and item-based separately because examiners reward the split. For cold start, cover both sides with one fix for a new user and one for a new item, and add the recommender-tree diagram for presentation marks.</p>`
        }
      ],
      practice: [
        {
          q: "What is the difference between user-based and item-based collaborative filtering? Which one scales better?",
          a: `<p><b>User-based</b> works across the rows of the user-item matrix, since it finds the k users whose ratings sit closest to the active user and then combines their ratings on the target item. <b>Item-based</b> works down the columns instead, because it computes similarity between items and recommends items close to the ones the user already rated.</p><p>Item-based scales better because item-item similarities are precomputed offline and change slowly, so serving becomes a lookup. User-based must recompute neighbours as users and ratings keep arriving, while item-based also gives stable and explainable "because you liked X" reasons, which is why Amazon uses it.</p><p>Both share the same weaknesses, namely cold start for new users and new items plus sparsity when the matrix stays mostly empty.</p>`,
          marks: 3,
          diff: "easy"
        },
        {
          q: "Why do content-based recommenders over-specialise, and how would you reduce it?",
          a: `<p>A content-based filter only scores items that look like the user's existing profile, so every positive click tightens the profile and the next recommendation becomes even more of the same. The user therefore never sees anything outside current taste, which kills serendipity and discovery in the classic "more of the same" failure. The method also depends on item metadata, so thin or wrong tags produce confidently wrong recommendations.</p><p>Fix it by hybridising with collaborative signals, adding an explicit diversity term to the ranking, and reserving slots for exploration. Decay old profile evidence as well so tastes can move over time.</p>`,
          marks: 3,
          diff: "medium"
        },
        {
          q: "A car portal asks for budget, fuel type and seating capacity, then lists matching cars. A second portal lets the user critique the current suggestion ('cheaper', 'automatic'). Name the two knowledge-based styles and explain how each is built.",
          a: `<p><b>Constraint-based</b> (first portal). Requirements and the catalogue are modelled as constraints, and the engine runs a constraint-satisfaction search. It keeps only cars at or below the budget, with the chosen fuel and with at least the required seats. If nothing satisfies every constraint, it finds the failing one and offers a minimal relaxation ("no automatic under Rs 8 lakh; nearest match is manual").</p><p><b>Case-based</b> (second portal). Each past session is stored as a case holding requirements, recommended item and the user's critique. For a new user it retrieves the most similar past case, then adapts that solution to the new requirements and retains the outcome as a new case. Critiques drive the next retrieval round.</p><p>Both avoid the cold-start problem because neither needs ratings. The cost is the knowledge-acquisition bottleneck, since someone must encode the constraints or enough good cases must exist. Constraint-based suits well-understood catalogues, while case-based suits sparse ones where experience substitutes for rules.</p>`,
          marks: 7,
          diff: "hard"
        }
      ]
    },
    {
      slug: "m5-netflix",
      title: "Case Study: The Netflix Recommender System",
      sources: [
        "http://pzs.dstu.dp.ua/DataMining/recom/bibl/a13-gomez-uribe.pdf",
        "https://ailab-ua.github.io/courses/resources/netflix_recommender_system_tmis_2015.pdf",
        "https://arxiv.org/html/1908.08328v3",
        "https://illumin.usc.edu/netflixs-recommendation-systems-entertainment-made-for-you"
      ],
      blocks: [
        {
          type: "definition",
          text: "Netflix's recommender is a set of algorithms that rank videos and rows on each member's homepage to raise engagement and cut cancellations."
        },
        {
          type: "text",
          html: `<p><b>What it recommends.</b> A homepage holds about 40 rows of up to 75 videos, where each row carries a theme such as genre rows, Top Picks, Trending Now, Continue Watching, Popular, and Because You Watched (BYW). The same genre row holds different videos for different members.</p>
<p><b>The algorithm families.</b></p>
<ul>
<li><b>Personalized Video Ranker (PVR)</b> orders the whole catalogue for each profile and fills genre rows. It must rank everything, so it blends personal signals with a healthy dose of popularity.</li>
<li><b>Top-N ranker</b> optimises only the head of the list, and that head feeds Top Picks.</li>
<li><b>Trending Now</b> uses short-term trends over minutes to days, which is why a hurricane drives interest in disaster documentaries.</li>
<li><b>Continue Watching</b> predicts resume versus abandon from time since viewing, where the member stopped, and device.</li>
<li><b>Video-video similarity ("sims")</b> precomputes similar titles for every video, which keeps BYW working when ratings are sparse. It is item-based and unpersonalised, although which BYW rows appear stays personalised.</li>
<li><b>Page generation</b> selects and orders rows for relevance and diversity.</li>
</ul>
<p><b>Implicit feedback beats stars.</b> Netflix records what was played, for how long, on which device, and at what hour, and it also records what was shown but skipped. Because ratings are too sparse, these signals drive ranking. Recommendations influence about 80% of hours streamed, while search supplies the rest.</p>
<p><b>Offline, then online.</b> Offline replay ranks historical plays and computes mean reciprocal rank, precision and recall to prune candidates. Promising variants then go to an A/B test, where members are split into cells, 5 to 10 variants run for 2 to 6 months, and the judge is engagement plus retention. The authors admit offline tests are "not as highly predictive of A/B test outcomes as we would like".</p>
<p><b>Business value.</b> Churn sits in low single digits because it fell by several percentage points over years of personalisation. Gomez-Uribe and Hunt (2015) estimate that personalisation and recommendations together save Netflix more than $1 billion a year.</p>
<p><b>Open problems.</b> New members remain a cold start, while presentation bias forms a feedback loop that over-rewards already popular titles. Page construction is still being worked on and experiment protocols need to improve, alongside global language-aware models. Per-title cold start and explaining "why this was recommended" stay hard as well.</p>`
        },
        {
          type: "example",
          html: `<p>A new member signs up and picks three comedies, but with almost no history PVR cannot personalise much, so the homepage leans on Popular and Trending Now. After a week of steady plays, Top Picks and BYW rows take over as personal signals accumulate, and the Popular row drops down the page. The system is therefore managing two cold starts at once, namely the member with little history and every new title that still has no play data.</p>`
        },
        {
          type: "tip",
          html: `<p>For 14 marks, name PVR, Top-N, Trending Now, Continue Watching, sims and page generation, and say what each row looks like on screen. Keep offline work (replay, rank metrics, fast pruning) separate from online tests (randomised cells, engagement plus retention). Quote the $1 billion with attribution to Gomez-Uribe and Hunt (2015), and use presentation bias plus member cold start as your open problems.</p>`
        }
      ],
      practice: [
        {
          q: "Netflix has very few explicit star ratings. Which signals does it use instead, and how does that change algorithm design?",
          a: `<p>It uses <b>implicit feedback</b>: what was played, hours streamed, where the member stopped, device, time of day and day of week, the surface where the title was discovered, and impressions shown but never played.</p><p>Design consequences:</p><ul><li>Rankers optimise engagement (take-rate, hours) rather than rating accuracy, so RMSE on stars is no longer the objective.</li><li>Similarity is computed from co-play rather than co-rating, which is why "sims" can produce a list for every title.</li><li>Non-plays stay ambiguous because the member may not have seen the row, so presentation bias must be modelled.</li><li>Personal signals stay thin for new members, so popularity is deliberately blended into PVR and a Popular row is kept.</li></ul><p>Evaluation moves to A/B tests on engagement and retention, because offline rating metrics do not predict them well.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m5-social",
      title: "Social Media Analytics: Tools, Sentiment Analysis, A/B Testing and Networks",
      sources: [
        "https://en.wikipedia.org/wiki/Social_media_analytics",
        "https://en.wikipedia.org/wiki/Sentiment_analysis",
        "https://en.wikipedia.org/wiki/A/B_testing",
        "https://en.wikipedia.org/wiki/Social_network_analysis"
      ],
      blocks: [
        {
          type: "definition",
          text: "Social media analytics collects data from social platforms and measures sentiment, engagement and network structure to guide marketing and service decisions."
        },
        {
          type: "text",
          html: `<p><b>The loop.</b> Define the question with the five Ws, then identify the data by platform, language, region and time window before you analyse it. Interpret and visualise the results for decision-makers afterwards. Current practice adds real-time listening, cross-platform dashboards, aspect-based sentiment, and API-driven analysis in R or Python.</p>
<p><b>Tools.</b> Google Analytics covers traffic and referrals, while Hootsuite handles scheduling plus monitoring. Sprout Social covers engagement and reporting, whereas Brandwatch and Talkwalker cover listening, sentiment and share of voice. Reach for R or Python with platform APIs when you need custom models.</p>
<p><b>Sentiment analysis in five steps.</b></p>
<ul>
<li><b>Collect</b> posts and comments that mention the brand or topic.</li>
<li><b>Preprocess</b>: drop links and duplicates, tokenise, handle emojis, negation and sarcasm.</li>
<li><b>Classify</b> polarity with a lexicon (scored word lists) or a classifier trained on labelled examples. Aspect-based models label each feature separately.</li>
<li><b>Aggregate</b> into positive, neutral and negative shares by day, product or region.</li>
<li><b>Visualise and act</b>: trend lines, word clouds, alerts to the support team.</li>
</ul>
<p><b>Worked tweet.</b> "Loved the new update, battery still drains though" cannot take one label, because aspect <code>new update</code> is positive while aspect <code>battery</code> is negative. A document-level model outputs "mixed" and loses the actionable part, whereas aspect-based output tells the product team exactly what to fix.</p>
<p><b>A/B testing a campaign.</b> Split the audience at random and change one element such as image, headline or CTA. Show A to half and B to the other half for the same period, then compare engagement rate, test significance, and keep the winner. Keep to one change at a time, or you cannot attribute the result.</p>
<p><b>Network analytics.</b> Four relationship types are mined, namely follower and friendship links, interaction ties (likes, comments, replies), shared content (retweets, mentions), and community membership. Centrality then finds influencers, while clustering finds communities.</p>
<p><b>Acquisition vs retention.</b> Acquisition uses targeted ads, lookalike audiences and influencer reach, while retention uses listening, fast replies to complaints, and churn signals buried in negative posts.</p>`
        },
        {
          type: "example",
          html: `<p>A phone brand ships an update and monitors 10,000 mentions, where aspect sentiment shows 62% positive on camera quality but 41% negative on battery life. The battery complaints cluster in the first three days after release, so the support team A/B tests two reply templates, namely an apology plus a fix timeline versus a generic acknowledgement. The first lifts reply-to-resolution rate. Network analysis then shows five tech reviewers drive a third of total reach, so they get the fix briefing first.</p>`
        },
        {
          type: "tip",
          html: `<p>Memorise six tool names with one use each, because tools is a repeat 3-mark question. For 7 or 14 marks, lead with the five-step sentiment pipeline plus the worked tweet, and never label that tweet simply "positive". Give the four relationship types with the centrality-versus-clustering split for network analytics. In A/B answers, always mention random split, one variable, significance, and duration.</p>`
        }
      ],
      practice: [
        {
          q: "Distinguish reach from engagement rate, and say which one you would report for a campaign.",
          a: `<p><b>Reach</b> is the number of unique accounts that saw a post, so it measures distribution and how much audience the budget bought. <b>Engagement rate</b> is interactions (likes, comments, shares, saves, clicks) divided by reach or impressions, times 100, so it measures resonance per person reached.</p><p>Report engagement rate for creative quality and reach for distribution. A post with 2,000 reach and 200 interactions (10%) beat one with 50,000 reach and 500 interactions (1%) on engagement, even though the second reached far more people. Reporting only reach hides weak creative, while reporting only engagement rate hides a collapsed audience.</p>`,
          marks: 3,
          diff: "easy"
        },
        {
          q: "Which type of relationship in network analytics reveals communities, and which metric identifies the influential account inside one?",
          a: `<p><b>Community or cluster membership</b> reveals communities because it is built from interaction and shared-content ties. Accounts that repeatedly reply to, mention or share the same content form a dense cluster. Friendship links give the skeleton of the graph but carry a weaker signal of shared interest, and follower links are often one-directional.</p><p>Once clusters exist, <b>centrality</b> ranks accounts inside them: degree centrality for raw popularity, betweenness for the bridge that connects two clusters, and eigenvector for influence among influential accounts. Community detection finds the group while centrality finds the leader.</p>`,
          marks: 3,
          diff: "medium"
        },
        {
          q: "Your A/B test shows variant B with a higher engagement rate after two days on 400 followers. Your manager wants to roll it out. What is wrong, and what would you do instead?",
          a: `<p><b>Problems.</b> The sample is small, so the difference is likely noise, and two days covers only one weekend pattern while early responders stay atypical. No significance test was reported, a novelty effect can inflate a new creative, and if more than one element changed the result cannot be attributed.</p><p><b>Do this instead.</b> State the metric and the minimum effect worth detecting, then compute the sample size needed for that effect. Randomise the audience and run for at least one full week (two is safer), so day-of-week effects average out. Apply a two-proportion test (or a t-test for a mean metric) and read the confidence interval, not just the point estimate. Check guardrail metrics such as unfollows, hides and complaints, and confirm the lift repeats before a full rollout.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m5-facebook",
      title: "Case Study: Facebook for Citizen-Centric Public Services",
      sources: [
        "https://research.universityofgalway.ie/en/publications/a-social-media-text-analytics-framework-for-double-loop-learning-/",
        "https://mural.maynoothuniversity.ie/id/eprint/15779"
      ],
      blocks: [
        {
          type: "definition",
          text: "A text-analytics framework that mines a local government's Facebook posts and citizen comments so services can be redesigned around citizens."
        },
        {
          type: "text",
          html: `<p><b>Setting.</b> Reddick, Chatfield and Ojo (2017, <i>Government Information Quarterly</i>) studied one local government department's Facebook page, which ran a recycling campaign. They combined double-loop learning theory with existing models of e-participation and then applied the framework to real citizen-to-government interactions.</p>
<p><b>What the framework does.</b> It treats posts and comments as text data that moves through capture, storage, text mining for sentiment and topics, visualisation, and decision. Findings feed straight back into what the government posts, and also into the assumptions behind the service itself, instead of sitting in a report.</p>
<p><b>Double-loop learning in one line.</b> Single-loop learning fixes the action inside existing assumptions ("post more often"), whereas double-loop learning questions the assumptions and goals themselves ("should citizens co-design the recycling policy?").</p>
<p><b>What they found.</b> They found two linked failures. Government posts mostly pushed the government agenda of educating citizens to change recycling behaviour, with no effort to learn citizens' needs or questions. That single-loop stance kept citizen comments single-loop too, so citizens never entered recycling governance and the double-loop opportunity was missed.</p>
<p><b>Benefits when the loop closes.</b> When citizens see that comments change something, engagement improves and response gets faster. Decisions and their reasons become transparent, so service design rests on stated needs rather than assumed ones.</p>`
        },
        {
          type: "example",
          html: `<p>A city waste department posts "Recycle right!" every week, while comments keep saying "bin not collected in Ward 7" and "no e-waste drop-off nearby". A single-loop response replies with the collection schedule and simply posts more often. A double-loop response questions the assumption that awareness is the problem, so it adds e-waste drop-off points, publishes a collection service-level commitment, and invites residents' associations into the ward-level plan to close the loop.</p>`
        },
        {
          type: "tip",
          html: `<p>Win case-retelling marks through specifics, so name Reddick, Chatfield and Ojo, 2017, <i>Government Information Quarterly</i>, and the local government recycling page. Define double-loop learning in one sentence and contrast it with single-loop, since that contrast is the whole case. Give both findings, then sketch the pipeline from capture and storage through text mining and visualisation to decision.</p>`
        }
      ],
      practice: [
        {
          q: "Apply Reddick et al.'s framework to a city corporation's flood-alert Facebook page. Describe the pipeline, contrast a single-loop and a double-loop response, and give two risks.",
          a: `<p><b>Pipeline.</b> Capture the page's posts and citizen comments during monsoon, store them with timestamp and ward, text-mine for sentiment and topics (drainage, waterlogging, rescue, relief), visualise by ward and day, and then decide and act.</p><p><b>Single-loop.</b> The page broadcasts alerts more often, adds Malayalam captions, and replies to each complaint with the control-room number, while the assumption that "citizens need information" stays untouched.</p><p><b>Double-loop.</b> The comments show citizens already know it is raining, while what they lack is drain maintenance and a response commitment. So the corporation questions its assumption, publishes ward-wise drain-clearing status before the season, sets a response time for waterlogging complaints, and brings residents' associations into drain mapping.</p><p><b>Risks.</b> (1) The sentiment model misreads sarcasm and Malayalam-English code-mixing, so it reports calm when the ward is angry. (2) Facebook-only data excludes non-users, the elderly and slum residents, so the service is redesigned for the loudest online group. A third risk is that alert posts crowd out two-way dialogue, which recreates the single-loop trap.</p>`,
          marks: 14,
          diff: "hard"
        }
      ]
    },
    {
      slug: "m5-churn",
      title: "Churn Prediction: Process, Steps and Models",
      sources: [
        "https://en.wikipedia.org/wiki/Churn_rate",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC12426120",
        "https://releva.ai/customer-retention-vs-acquisition-cost"
      ],
      blocks: [
        {
          type: "definition",
          text: "Churn is the share of customers who leave in a period; churn prediction scores each customer's probability of leaving to target retention offers."
        },
        {
          type: "text",
          html: `<p><b>Why it matters.</b> Churn rate = customers lost ÷ total customers × 100, so a 25% annual churn implies a four-year average customer life. Retention stays far cheaper than acquisition because Harvard Business Review (2014) puts acquisition at 5 to 25 times the cost of retention. Telecom, SaaS and streaming feel this most, since revenue there is contractual and recurring.</p>
<p><b>The process.</b></p>
<ol>
<li>Define churn and the time window. For example, no renewal within 90 days.</li>
<li>Gather historical customer data: billing, usage, contracts, complaints, network quality.</li>
<li>Engineer features: tenure, usage trend, drop in spend, complaint count, contract type, payment method, competitor offers.</li>
<li>Label past customers churned or not churned.</li>
<li>Split train and test, train the model, evaluate with AUC, lift and precision in the top decile. Do not use accuracy alone, because churners are a minority.</li>
<li>Score the current base.</li>
<li>Target the highest-risk customers with a retention offer.</li>
<li>Track whether the campaign actually saved them, using uplift rather than response.</li>
</ol>
<p><b>Six models.</b></p>
<ul>
<li><b>Logistic regression</b>: a sigmoid turns a weighted sum of features into a churn probability, and coefficients give direction and size ("month-to-month contract raises the log-odds of churn"), so it serves as the interpretable baseline.</li>
<li><b>Decision tree</b>: recursive splits such as <code>tenure under 6 months?</code> then <code>contract = monthly?</code> produce readable rules and segments, but the tree is unstable on its own.</li>
<li><b>Random forest</b>: many trees averaged for better accuracy, handling non-linearity and interactions while reporting feature importance.</li>
<li><b>Gradient boosting</b>: trees added in sequence to fix residual errors, usually giving the top accuracy on tabular churn data.</li>
<li><b>Neural network</b>: captures complex patterns but needs more data and tuning.</li>
<li><b>SVM</b>: strong with many features and clear margins but weaker on interpretability. Naive Bayes and k-NN are also used.</li>
</ul>`
        },
        { type: "diagram", id: "churn-steps" },
        {
          type: "example",
          html: `<p>A telecom holds 2,00,000 postpaid customers with 2% monthly churn, so about 4,000 leave every month. The model scores all customers and ranks the top 5,000 by risk. A Rs 300 retention offer goes to that group and saves 30% of them at a cost of Rs 15 lakh. Because the 1,500 saved customers are worth Rs 10,000 lifetime margin each, Rs 1.5 crore of value stays protected in total.</p>`
        },
        {
          type: "tip",
          html: `<p>For the 14-mark version, draw the churn-steps diagram, list the eight steps in order, then give one line per model. For "logistic regression and decision trees for churn", write the sigmoid with its probability interpretation for regression and an actual split rule for the tree. Mention class imbalance and explain why AUC or lift beats accuracy.</p>`
        }
      ],
      practice: [
        {
          q: "A telecom has ARPU Rs 500, contribution margin 40%, monthly churn 2%. A retention offer costs Rs 300 per customer targeted and saves 25% of those targeted. Is targeting worthwhile? Show the calculation.",
          a: `<p><b>Value of one retained customer</b> = ARPU × margin ÷ monthly churn = 500 × 0.40 ÷ 0.02 = <b>Rs 10,000</b> of expected lifetime contribution.</p><p><b>Cost per saved customer</b> = offer cost ÷ save rate = 300 ÷ 0.25 = <b>Rs 1,200</b>.</p><p><b>Net gain</b> = 10,000 − 1,200 = <b>Rs 8,800</b> per saved customer, so targeting pays.</p><p><b>Break-even save rate</b> = 300 ÷ 10,000 = <b>3%</b>. Any campaign that saves more than 3% of the customers it targets stays profitable, before counting customers who would have stayed anyway. That last point is why uplift modelling matters, because the Rs 8,800 assumes the saved customers are genuinely incremental.</p>`,
          marks: 7,
          diff: "medium"
        },
        {
          q: "List the features you would engineer for telecom churn, and explain why a random forest usually beats a single decision tree on this data.",
          a: `<p><b>Features.</b> Tenure; contract type (monthly versus annual); monthly charge and any recent increase; usage trend in minutes and data; number of dropped calls; complaint tickets and resolution time; payment method and late payments; number of services subscribed; customer-service call count; competitor promotion exposure; network quality at the customer's address.</p><p><b>Why a forest wins.</b> A single tree makes greedy splits and runs high-variance, so a small change in the training sample can produce a very different tree that overfits deep interactions. A random forest bags many trees and averages that variance away, while capturing interactions such as short tenure combined with a monthly contract. It tolerates irrelevant and unscaled features, and it gives out-of-bag error plus feature importance. Recover interpretability with feature importance or SHAP values, since that is the trade-off.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m5-uplift",
      title: "Uplift Modelling and the Student Dropout Case Study",
      sources: [
        "https://en.wikipedia.org/wiki/Uplift_modelling",
        "https://researchportal.vub.be/en/publications/uplift-modeling-for-preventing-student-dropout-in-higher-educatio",
        "https://doi.org/10.1016/j.dss.2020.113320"
      ],
      blocks: [
        {
          type: "definition",
          text: "Uplift modelling predicts how much a treatment changes one person's behaviour, so you target only the people it persuades."
        },
        {
          type: "text",
          html: `<p><b>Why response modelling wastes money.</b> A response model predicts who will stay or convert, but its top scorers are often the sure things who would have stayed anyway. The offer therefore pays off only by accident. Uplift predicts the difference instead: uplift = P(outcome | treated) − P(outcome | control).</p>
<table class="tbl">
<thead><tr><th>Segment</th><th>Behaviour</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Persuadables</td><td>Respond only because they were treated</td><td>Target. The only incremental group</td></tr>
<tr><td>Sure things</td><td>Would respond anyway</td><td>Skip. Pure waste</td></tr>
<tr><td>Lost causes</td><td>Never respond</td><td>Skip</td></tr>
<tr><td>Sleeping dogs</td><td>Less likely to respond because they were treated</td><td>Exclude. The offer can trigger cancellation</td></tr>
</tbody></table>
<p><b>How it works.</b> You need a randomised control group first. In the two-model approach, train one model on treated customers and one on control, then subtract the predicted probabilities. In the single-model approach, add treatment as a feature with interactions, so the model learns different effects for different people. Uplift trees split directly on the difference in response rates. For evaluation, use an uplift or Qini curve, which plots cumulative incremental response as you target more people, because AUC is the wrong metric.</p>
<p><b>Student dropout case.</b> Olaya et al. (2020, <i>Decision Support Systems</i>) applied uplift modelling to retention in higher education, using data from three bachelor programmes at a Chilean university. Treatment was tutorial support and the outcome was dropout versus persistence. Uplift models showed which student groups actually benefited from tutoring, so support went to persuadable students instead of every student flagged at risk by a conventional model.</p>`
        },
        {
          type: "example",
          html: `<p>A university flags 2,000 students as at risk, which a response model would tutor in full. Uplift scoring splits them into four groups, namely 600 persuadables and 800 sure things who would pass anyway. The rest are 400 lost causes and 200 sleeping dogs who disengage faster once labelled "at risk". Tutoring only the 600 persuadables costs a third of the original budget and still produces most of the retained students.</p>`
        },
        {
          type: "tip",
          html: `<p>Write the definition as the subtraction, since examiners look for "incremental effect". List the four-segments table as the core, and stress sleeping dogs because that separates a good answer. For the case, give author, year, journal, Chile, tutorials as treatment, dropout as outcome, and the conclusion that resources went only to persuadable students. Add Qini when the question asks how you evaluate.</p>`
        }
      ],
      practice: [
        {
          q: "Why are sleeping dogs dangerous in a retention campaign, and how does an uplift model handle them?",
          a: `<p>Sleeping dogs are customers whose probability of staying <b>falls</b> because they were targeted. The contact reminds them to compare tariffs, or the discount signals that the current price was too high, so a customer who would have quietly renewed cancels instead.</p><p>A response model scores them high because they look like churners and some respond, so a normal campaign keeps targeting them and destroys value. An uplift model estimates a negative treatment effect for this segment and excludes it, which is often the single largest source of gain in telecom and financial-services retention campaigns.</p>`,
          marks: 3,
          diff: "medium"
        },
        {
          q: "Explain the Qini curve in one line, and describe what a good uplift model's curve looks like.",
          a: `<p>The Qini curve plots <b>cumulative incremental responders</b> against the fraction of the population targeted, where incremental responders are treated responses minus control responses, scaled to the targeted group size. People are ordered by predicted uplift.</p><p>A good model's curve climbs steeply at the left because the highest-uplift people are targeted first, then flattens as it reaches the sure things and lost causes. It stays above the random-targeting diagonal, and the area between curve and diagonal (the Qini coefficient) measures the gain over random targeting. A model whose curve sits on the diagonal has learned nothing.</p>`,
          marks: 3,
          diff: "hard"
        }
      ]
    }
  ]
};
