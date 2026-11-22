window.DA_MODULES = window.DA_MODULES || {};
window.DA_MODULES[1] = {
  num: 1,
  title: "Introduction & Statistics for Data Analytics",
  hours: 7,
  topics: [
    {
      slug: "m1-evolution",
      title: "Data Analytics: Introduction, Evolution & BI vs Data Science",
      sources: [
        "https://en.wikipedia.org/wiki/Data_analysis",
        "https://en.wikipedia.org/wiki/Business_intelligence",
        "https://en.wikipedia.org/wiki/Analytics",
        "https://www.gartner.com/en/topics/data-and-analytics"
      ],
      blocks: [
        {
          type: "definition",
          text: "Data analytics is the use of data, statistics and models to find insights that help businesses make decisions."
        },
        {
          type: "text",
          html: `<p><b>Data analysis</b> is one pass through the data, in which you inspect it, clean it, transform it and model it, and the result is information you can use to make a decision. <b>Data analytics</b> is the wider practice, because it runs those same steps again and again, with statistics, programming and knowledge of the business, so it can explain why something happened and predict what comes next.</p>
<p>Why do businesses bother with analytics? Because decisions get faster when they rest on evidence instead of gut feel, and because problems show up early, while they are still cheap to fix. There is a third payoff too: once a plan is running, the data tells you whether it actually worked. Gartner puts it simply: data and analytics exist to improve decision outcomes.</p>
<p><b>How it evolved</b></p>
<ul>
<li><b>1950s–70s:</b> statistics and operations research supply the methods. Tukey makes data analysis a discipline in 1962.</li>
<li><b>1958–89:</b> Luhn uses the term "business intelligence" at IBM in 1958. Dresner turns it into an umbrella term for fact-based decision support in 1989.</li>
<li><b>1990s:</b> data warehouses, ETL and OLAP make large-scale reporting practical.</li>
<li><b>2000s onward:</b> big data platforms, machine learning and cloud computing push analytics from reporting into prediction.</li>
</ul>
<p><b>BI vs data science</b></p>
<table class="tbl">
<tr><th></th><th>Business intelligence</th><th>Data science</th></tr>
<tr><td>Question</td><td>What happened?</td><td>Why, and what will happen?</td></tr>
<tr><td>Data</td><td>Mostly internal, structured</td><td>Structured, text, images, logs</td></tr>
<tr><td>Methods</td><td>Reports, dashboards, OLAP, KPIs</td><td>Statistics, ML, experiments</td></tr>
<tr><td>Output</td><td>Monitor performance</td><td>Predictions, recommendations</td></tr>
</table>
<p>They are not rivals, because BI supplies clean, governed data and the reporting layer, and data science builds models on top of it. Davenport treats business analytics as the part of BI that leans on statistics, prediction and optimisation instead of reporting.</p>`
        },
        {
          type: "example",
          html: `<p>A textile retailer's BI dashboard shows that sales in Kerala fell 12% last month, which is descriptive reporting. The data science team then joins sales, stock and delivery logs, and finds that stock-outs of two fast-moving lines explain most of the fall. So they build a model that flags stores likely to run out next month, which the buying team uses to move stock around. BI told the company what happened, while the model changed what it did next.</p>`
        },
        {
          type: "tip",
          html: `<p>Keep a one-sentence definition ready, because Part A often asks for one. For 7 or 14 marks, draw the BI versus data science table and add two dated milestones. Finish by naming a decision the analysis would improve, because examiners reward that application.</p>`
        }
      ],
      practice: [
        {
          q: "Distinguish data analysis from data analytics. Give one example of each.",
          a: `Data analysis is one pass through the data, where you inspect, clean, transform and model it to answer a question, for example by computing last month's average order value. Data analytics is the wider practice, because it runs those steps again and again with statistics and models, so it can explain causes and predict outcomes, for example by forecasting next month's orders. Analysis produces a finding, while analytics builds a repeatable way to decide.`,
          marks: 3,
          diff: "easy"
        }
      ]
    },
    {
      slug: "m1-types",
      title: "Types of Data Analytics: Descriptive, Diagnostic, Predictive, Prescriptive",
      sources: [
        "https://www.gartner.com/en/topics/data-and-analytics",
        "https://en.wikipedia.org/wiki/Analytics"
      ],
      blocks: [
        {
          type: "definition",
          text: "Analytics comes in four types: descriptive, diagnostic, predictive and prescriptive, each answering a different question about the data."
        },
        {
          type: "text",
          html: `<p>Gartner groups analytics into four techniques, where each answers a different question and gives a different kind of result. So the type you need follows from the decision you face.</p>
<table class="tbl">
<tr><th>Type</th><th>Question</th><th>Result it produces</th><th>Example</th></tr>
<tr><td>Descriptive</td><td>What happened?</td><td>Summary of the past</td><td>Last quarter's sales by region</td></tr>
<tr><td>Diagnostic</td><td>Why did it happen?</td><td>A cause</td><td>Drill-down shows one product line caused the drop</td></tr>
<tr><td>Predictive</td><td>What is likely to happen?</td><td>Probability or forecast</td><td>Demand forecast for next quarter</td></tr>
<tr><td>Prescriptive</td><td>What should we do?</td><td>A recommended action</td><td>Reorder levels and prices that maximise margin</td></tr>
</table>
<p><b>Descriptive</b> uses BI tools, charts and dashboards, and it is the base. Without a trustworthy picture of the past, the other three have nothing to work from.</p>
<p><b>Diagnostic</b> adds drill-down, data mining and correlation analysis to find causes, so it moves from "sales fell" to "sales fell because one region ran out of stock".</p>
<p><b>Predictive</b> uses regression, forecasting, pattern matching and machine learning, and it reports probabilities, so it informs a decision without making one.</p>
<p><b>Prescriptive</b> adds rules and optimisation to recommend an action within limits. It is the most valuable and the hardest, because the model has to understand the business well enough to compare options.</p>
<p>Gartner's analytic ascendancy model ranks them by value and difficulty, with descriptive (hindsight) at the base. Diagnostic (insight), predictive (foresight) and prescriptive (optimisation) then rise toward the top.</p>`
        },
        {
          type: "example",
          html: `<p>A food-delivery app had 8% fewer orders in one city last month, which descriptive analytics found. Diagnostic analytics then traced it to two popular restaurants delisting and longer delivery times in the rain. Predictive analytics forecast Friday demand for each zone, so prescriptive analytics could move riders between zones and set a small surge fee. Each step used the result before it, and that is why the four types work as a chain.</p>`
        },
        {
          type: "tip",
          html: `<p>Expect a 3-mark definition and a 7- or 14-mark question on all four types. Give the question, one technique and one example per row, because a table earns marks fast. Do not call a forecast prescriptive, because prediction stops at probability while prescription recommends an action.</p>`
        }
      ],
      practice: [
        {
          q: "Define diagnostic analytics and give one business example.",
          a: `Diagnostic analytics looks at past data to explain why an outcome happened, using drill-down, data mining, segmentation and correlation to find the factors behind a result. For example, when sales fell 12% last quarter, a drill-down shows the fall is concentrated in one product line after a supplier delay. It explains the past but does not forecast the future.`,
          marks: 3,
          diff: "easy"
        },
        {
          q: "Which type of analytics answers 'what should we do'? Explain its inputs, techniques and one example.",
          a: `Prescriptive analytics answers "what should we do?" because it recommends an action instead of only reporting or predicting an outcome. It takes a prediction as input and adds rules or an optimisation model.
<ul><li><b>Inputs:</b> historical data, a predictive model, business limits such as budget, capacity or service level, and a goal such as profit or cost.</li><li><b>Techniques:</b> rule-based decision logic, simulation, scenario analysis, mathematical optimisation and recommendation engines.</li><li><b>Output:</b> a ranked set of actions or a plan you can run, not just a probability.</li></ul>
Example: a grocery chain forecasts weekend demand for 200 stores. An optimisation model then allocates stock and sets markdowns to maximise margin while limiting waste, so each store gets a suggested order. Prescriptive work is the hardest because the model must represent the business well. A wrong constraint gives confident but bad advice.`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m1-lifecycle",
      title: "Data Analytics Life Cycle (EMC/DAC)",
      sources: [
        "https://thinkandknowledgetank.home.blog/2019/07/14/stakeholders-involvement-in-big-data-analytics-lifecycle/",
        "https://doi.org/10.1002/9781119183686.ch2"
      ],
      blocks: [
        {
          type: "definition",
          text: "The data analytics life cycle is a six-phase process that moves an analytics project from a business problem to a deployed model."
        },
        {
          type: "text",
          html: `<p>The EMC life cycle runs a project through six phases, which go in order in an exam answer. Real teams loop back when data or results expose a gap.</p>
<ul>
<li><b>1. Discovery.</b> Learn the business and its history. Assess people, technology, time and data. Frame the problem as an analytics question. Form first hypotheses, list possible data sources and interview the sponsor.</li>
<li><b>2. Data preparation.</b> Build an analytic sandbox and run ETL or ELT (together "ETLT"). Learn the data, then condition it: clean, standardise, normalise and transform. Survey it with statistics and plots.</li>
<li><b>3. Model planning.</b> Explore variables and pick the key predictors. Choose the technique and agree the workflow for building and testing. Deliverables: variable shortlist, model choice, validation plan.</li>
<li><b>4. Model building.</b> Create training, test and production datasets. Build and run the model, tune it, and check it against the Phase 3 plan.</li>
<li><b>5. Communicate results.</b> Judge success or failure against the criteria set in Discovery. Quantify business value and present the findings as a story for stakeholders.</li>
<li><b>6. Operationalize.</b> Hand over final reports, code and technical documents. Pilot the model in production and monitor it.</li>
</ul>
<p><b>Seven roles.</b> The <b>business user</b> knows the domain and says how results will be used, while the <b>project sponsor</b> starts and funds the project, and the <b>project manager</b> keeps milestones, time and quality on track. The <b>BI analyst</b> owns KPIs, metrics and reporting, while the <b>database administrator</b> sets up the database, the <b>data engineer</b> handles ingestion, data management and SQL tuning, and the <b>data scientist</b> picks and builds the models.</p>`
        },
        {
          type: "example",
          html: `<p>A hospital wants to cut 30-day readmissions, so Discovery defines the problem with the sponsor and forms the hypothesis that discharge timing matters. Data preparation then loads two years of admission records into a sandbox and cleans them, after which model planning picks logistic regression and a validation split, and model building trains and tests it. Communicate results shows the projected saving and the patient groups most at risk, so Operationalize pilots the risk score on two wards and monitors it monthly.</p>`
        },
        {
          type: "tip",
          html: `<p>A 14-mark question usually asks for the six phases with a diagram, or for the key roles. Draw six labelled boxes with arrows, then one line each, and add roles only if asked. Keep model planning (choose the method) apart from model building (run it), and name the sandbox and ETLT somewhere.</p>`
        },
        {
          type: "diagram",
          id: "lifecycle"
        }
      ],
      practice: [
        {
          q: "What is an analytic sandbox and why does the data preparation phase need one?",
          a: `An analytic sandbox is a separate workspace for storage and compute, where the team can load, combine and transform project data without touching production systems. It holds raw and conditioned copies, so a failed transformation can be rerun safely. Phase 2 needs it because cleaning, joining and normalising are iterative and exploratory. Doing that work in a live reporting database would risk performance and data integrity.`,
          marks: 3,
          diff: "easy"
        },
        {
          q: "Explain the model planning phase. List its deliverables.",
          a: `Model planning decides how the question will be answered before any model is built. The team explores the conditioned data, studies distributions and relationships, and cuts a long list of fields down to the variables that carry signal.
<ul><li>Select variables and document why each one is in or out.</li><li>Choose the technique (regression, classification, clustering or time series) based on the problem type, data size and the output the sponsor needs.</li><li>Define the validation plan: train/test split or cross-validation, and the metric that decides success.</li><li>Agree the workflow, tools and rough timeline.</li></ul>
The deliverables are a variable shortlist, a documented model choice with alternatives, a validation plan and a workflow you can run. Model building then carries out this plan and does not reopen the choice without a reason.`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m1-hypothesis",
      title: "Hypothesis Testing: Null & Alternate Hypothesis, Type I/II Errors",
      sources: [
        "https://www.itl.nist.gov/div898/handbook/prc/section1/prc13.htm",
        "https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm",
        "https://en.wikipedia.org/wiki/Type_I_and_type_II_errors"
      ],
      blocks: [
        {
          type: "definition",
          text: "A hypothesis test uses sample data to decide whether there is enough evidence to reject a claim about a population."
        },
        {
          type: "text",
          html: `<p>A statistical test is a rule for making a decision with numbers. You state a claim, collect a sample, compute a test statistic, and ask how likely that statistic would be if the claim were true.</p>
<p><b>Null and alternate.</b> <code>H0</code> is the default of no difference, no effect, or a set value, while <code>H1</code> is what you want evidence for. NIST's photomask example sets <code>H0: mean linewidth = 500 µm</code> against a two-sided <code>H1: mean ≠ 500 µm</code>. A bulb test sets <code>H0: mean life ≥ 500 h</code> against <code>H1: mean &lt; 500 h</code>. So put the claim you hope to prove in <code>H1</code> whenever you can.</p>
<p><b>Four outcomes.</b> The decision and the truth give a 2×2 table.</p>
<table class="tbl">
<tr><th>Decision</th><th>H0 true</th><th>H0 false</th></tr>
<tr><td>Do not reject H0</td><td>Correct (1 − α)</td><td>Type II error (β)</td></tr>
<tr><td>Reject H0</td><td>Type I error (α)</td><td>Correct, power (1 − β)</td></tr>
</table>
<p><b>Type I</b> is rejecting a true null, which is a false alarm, while <b>Type II</b> is failing to reject a false null, which is a missed effect. The significance level α is the Type I risk you choose, usually 0.01, 0.05 or 0.10. You do not choose β, because it falls as the real difference and the sample size grow, and it rises when you make α smaller.</p>
<p><b>p-value.</b> It is the probability, assuming <code>H0</code> is true, of a result at least as extreme as the one you saw. Reject <code>H0</code> when p &lt; α, bearing in mind that a p-value is not the probability that <code>H0</code> is true.</p>`
        },
        {
          type: "example",
          html: `<p>A bottler claims each bottle holds 500 ml, so the quality team measures 40 bottles and tests <code>H0: μ = 500</code> against <code>H1: μ ≠ 500</code> at α = 0.05. The sample mean is 496 ml and the test gives p = 0.02, so they reject H0 and recalibrate the filler. If p had been 0.30, they would fail to reject, which would not prove the mean is exactly 500. Rejecting a true H0 here would mean stopping a line that was fine, and that is a Type I error.</p>`
        },
        {
          type: "tip",
          html: `<p>Part A asks for Type I/II definitions or a p-value interpretation. Part B asks for the four states, so draw the 2×2 table and label α, β and power. Write "fail to reject", never "accept H0", and attach a concrete false positive and false negative to the scenario to secure the application marks.</p>`
        }
      ],
      practice: [
        {
          q: "A test returns p = 0.03. At α = 0.05, what do you conclude? Would the conclusion change at α = 0.01?",
          a: `Since 0.03 &lt; 0.05, reject <code>H0</code>. The result is statistically significant at the 5% level. At α = 0.01 the threshold is stricter, and 0.03 &gt; 0.01, so you would fail to reject <code>H0</code>. The p-value itself does not change; only the decision does, so "significant" is always relative to the α you chose.`,
          marks: 3,
          diff: "medium"
        },
        {
          q: "Write H0 and H1 for two scenarios and state whether each test is one- or two-tailed.",
          a: `<b>(a) Courier.</b> The company claims average delivery time is at most 30 hours. The analyst suspects it is slower. <code>H0: μ ≤ 30</code>, <code>H1: μ &gt; 30</code>. One-tailed, right tail, because only a longer time matters.
<b>(b) School.</b> The school claims a mean score of 70. The analyst suspects it has changed in either direction. <code>H0: μ = 70</code>, <code>H1: μ ≠ 70</code>. Two-tailed, because both improvement and decline matter.
The alternative carries the claim to be proved. The null always contains equality. To decide, compare the test statistic with the critical value for your α and df, or compare p with α. Rejecting H0 supports H1, while failing to reject does not prove H0.`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m1-ttest",
      title: "Comparing Two Population Means: t-tests",
      sources: [
        "https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm",
        "https://www.itl.nist.gov/div898/handbook/prc/section3/prc31.htm"
      ],
      blocks: [
        {
          type: "definition",
          text: "A t-test compares a mean with a target, or two means with each other, allowing for sampling error when the population standard deviation is unknown."
        },
        {
          type: "text",
          html: `<p>A t-test asks whether a mean differs from a target, or whether two means differ, after allowing for noise in the samples. Use it when the population standard deviation is unknown and you estimate it from the data.</p>
<p>The test statistic compares the difference in means with its standard error:</p>
<p><code>t = (mean1 − mean2) / sqrt(s1²/n1 + s2²/n2)</code></p>
<p>A large |t| means the difference is big relative to the noise. Compare |t| with a critical value from the t table for your α and degrees of freedom, or compare the p-value with α.</p>
<p><b>Three forms.</b></p>
<ul>
<li><b>One-sample:</b> compare one sample mean with a hypothesised value μ0, with df = n − 1.</li>
<li><b>Two-sample independent:</b> compare two unrelated groups, with <code>H0: μ1 = μ2</code>. If variances are equal, pool them and use df = n1 + n2 − 2, and if not, use the Welch version with approximate df.</li>
<li><b>Paired:</b> the same subject measured twice, or matched pairs. Compute each difference d, then run a one-sample t-test on the d values, which removes person-to-person variation and is more powerful when it applies.</li>
</ul>
<p><b>Assumptions:</b> independent observations, roughly normal data (or large samples), and equal variances for the pooled form. Check with a histogram or a normal probability plot.</p>`
        },
        {
          type: "example",
          html: `<p>A factory trials a new assembly method, where the old method (11 readings) averages 36.09 minutes with SD 4.91 and the new method (9 readings) averages 32.22 minutes with SD 2.54. With <code>H0: μ1 = μ2</code> and a one-sided <code>H1: μ2 &lt; μ1</code>, the Welch statistic is t = 2.27 with about 15.5 df (16 for the table lookup), against a 5% critical value of 1.746. The team therefore rejects H0 and adopts the new method.</p>`
        },
        {
          type: "tip",
          html: `<p>For 7 marks, write H0 and H1, the test statistic, degrees of freedom, the critical value and the decision. For 14 marks, add the assumptions and the paired versus independent distinction. You rarely need to compute by hand, because a correct setup with the assembly-time example earns most of the marks.</p>`
        }
      ],
      practice: [
        {
          q: "When would you use a paired design instead of two independent samples? Explain with an example.",
          a: `Use a paired design when each observation in one sample is naturally matched to one in the other, as with the same patient before and after treatment, the same tyre on two road surfaces, or twins. Compute the difference for each pair and run a one-sample t-test on the differences. Pairing removes variation between subjects, so the standard error is smaller and the test is more powerful.
Use an independent two-sample t-test when the groups hold different units, such as treatment versus control patients or two production lines. The samples may differ in size, so if variances are similar pool them (df = n1 + n2 − 2), and otherwise use the Welch form. Choosing wrongly loses power or breaks independence.`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m1-anova",
      title: "ANOVA: Analysis of Variance",
      sources: [
        "https://www.itl.nist.gov/div898/handbook/eda/section3/eda354.htm",
        "https://www.itl.nist.gov/div898/handbook/eda/section3/eda355.htm"
      ],
      blocks: [
        {
          type: "definition",
          text: "ANOVA tests whether the means of three or more groups are equal by comparing variance between groups with variance within groups."
        },
        {
          type: "text",
          html: `<p>ANOVA compares the means of three or more groups. It generalises the two-sample t-test: one factor, k levels, and the question "are all the group means equal?"</p>
<p><b>Hypotheses.</b> <code>H0: μ1 = μ2 = … = μk</code>, while <code>H1: at least one mean differs</code>. The test does not say which one differs, so a post-hoc test such as Tukey's does that.</p>
<p><b>Between vs within.</b> ANOVA splits total variation into two parts. <b>Between-group</b> variation measures how far each group mean sits from the grand mean. It carries the factor effect. <b>Within-group</b> variation measures the scatter of observations around their own group mean. It is treated as random error. If the groups really differ, between-group variation dominates.</p>
<p><b>F statistic.</b> <code>F = MS_between / MS_within</code>, where <code>MS_between = SS_between/(k − 1)</code> and <code>MS_within = SS_within/(N − k)</code>. The F distribution has (k − 1, N − k) degrees of freedom. Reject <code>H0</code> when F exceeds the critical value, or when p &lt; α.</p>
<p><b>Why not repeated t-tests.</b> Every t-test carries a 5% chance of a false positive, so with 4 groups there are 6 pairwise tests. The chance of at least one false positive is about 1 − 0.95⁶ ≈ 26%. ANOVA tests all the means at once, keeps the overall Type I error at α, and pools the within-group error, which gives more power.</p>
<p><b>Assumptions:</b> independent samples, normal residuals and equal variances. Check by plotting the residuals.</p>`
        },
        {
          type: "example",
          html: `<p>Ten batches of gears are measured, 10 gears each, and the batch means range from 0.9919 to 1.0015 cm. One-way ANOVA gives F = 2.30 on 9 and 90 df, against a 5% critical value of 1.99, so the batch effect is significant. The team now knows at least one batch differs and runs Tukey's test to find which one, where replacing this with 45 pairwise t-tests would have inflated the false-positive rate badly.</p>`
        },
        {
          type: "tip",
          html: `<p>State H0 as "all means equal" and H1 as "at least one differs", never as a list of inequalities. The F ratio and its two degrees of freedom are compulsory. For 14 marks, reproduce the ANOVA table and explain why repeated t-tests inflate Type I error, because that comparison is usually where answers differ.</p>`
        }
      ],
      practice: [
        {
          q: "A researcher compares test scores of students taught by four methods. Why should she use ANOVA rather than six t-tests?",
          a: `Four methods give six pairwise comparisons, so six t-tests at α = 0.05 multiply the chance of at least one false positive to 1 − 0.95⁶ ≈ 0.26. A "significant" result therefore becomes likely even when all the methods are equal, which is the multiple-comparison problem.
ANOVA tests all four means in one step, with <code>H0: μ1 = μ2 = μ3 = μ4</code> against <code>H1: at least one differs</code>. It splits variation into between-method and within-method parts and compares them with <code>F = MS_between / MS_within</code> on (3, N − 4) df. One test keeps the overall Type I error at 5%. Pooling the within-group error also gives more power than separate small tests. If F is significant, a post-hoc test such as Tukey's shows which pairs differ.`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m1-chisquare",
      title: "Chi-square & Other Evaluation Methods",
      sources: [
        "https://www.itl.nist.gov/div898/handbook/prc/section4/prc45.htm",
        "https://en.wikipedia.org/wiki/Correlation",
        "https://en.wikipedia.org/wiki/Data_analysis"
      ],
      blocks: [
        {
          type: "definition",
          text: "The chi-square test compares observed counts with the counts you would expect if a hypothesis about categories were true."
        },
        {
          type: "text",
          html: `<p>The chi-square test works on counts, not means. It compares the frequencies you observed with the frequencies expected under a stated hypothesis.</p>
<p><b>Goodness of fit</b> checks one categorical variable against a claimed distribution. For example, it can test whether defects are equally likely across four types. <b>Independence</b> checks whether two categorical variables are related, using an r × c contingency table. <code>H0</code> says the two classifications are independent, while <code>H1</code> says they are dependent.</p>
<p><code>χ² = Σ (O − E)² / E</code></p>
<p>For independence, the expected count in a cell is <code>E = (row total × column total) / n</code>, and df = (r − 1)(c − 1). For goodness of fit, df = k − 1. A large χ² means the observed counts sit far from expected, so you reject <code>H0</code>.</p>
<p>NIST's wafer example classifies 309 defects by type (4 columns) and production shift (3 rows). The test gives χ² = 19.18 with df = 6, against a critical value of 12.59 at 5%, so the mix of defect types differs by shift.</p>
<p><b>Correlation and regression</b> complete the same evaluation chapter. Correlation measures the strength and direction of a linear association between two numeric variables, from −1 to +1, but it says nothing about cause. Regression fits an equation such as <code>y = a + bx</code>, which estimates how much y changes per unit of x and tests whether the slope is zero. Use correlation to screen for a relationship, and use regression to quantify it and predict.</p>`
        },
        {
          type: "example",
          html: `<p>A wafer plant records 309 defects, each classed by type (A–D) and by production shift (1–3). The chi-square test of independence gives χ² = 19.18 on 6 df, against a critical value of 12.59 at 5%, so defect type depends on shift. The plant investigates shift 3, where type D defects appear more often than expected (20 observed against 14.6 expected). That gives the plant a cause to chase, although the test shows association only, so the plant still has to find the cause.</p>`
        },
        {
          type: "tip",
          html: `<p>Decide first whether the question is goodness of fit (one variable) or independence (two variables). Give H0 in words, the χ² formula, the expected count formula, the df and the decision. For correlation and regression, one line each on strength/direction and prediction is enough.</p>`
        }
      ],
      practice: [
        {
          q: "A hospital cross-tabulates ward (3 wards) against recovery (recovered / not recovered). Which test applies? State H0, H1, the statistic, df and the decision rule.",
          a: `Ward is categorical with 3 levels and recovery is categorical with 2, so use the chi-square test of independence on a 3 × 2 contingency table.
<code>H0</code>: ward and recovery are independent, so the recovery proportion is the same in every ward. <code>H1</code>: they are dependent, so recovery varies by ward.
Statistic: <code>χ² = Σ (O − E)² / E</code>, with <code>E = (row total × column total) / n</code> for each cell. Degrees of freedom = (r − 1)(c − 1) = 2 × 1 = 2. Reject <code>H0</code> if χ² exceeds the critical value at your α, or if p &lt; α.
The test needs counts, not percentages, and expected counts should not be very small. A significant result shows association but does not say which ward is better, so inspect the cells to see where observed counts exceed expected.`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m1-resampling",
      title: "Resampling: Cross-Validation & Bootstrapping",
      sources: [
        "https://scikit-learn.org/stable/modules/cross_validation.html",
        "https://en.wikipedia.org/wiki/Bootstrapping_(statistics)"
      ],
      blocks: [
        {
          type: "definition",
          text: "Resampling reuses the data you have, by splitting it or sampling it with replacement, to estimate how well a result will generalise."
        },
        {
          type: "text",
          html: `<p>A model scored on the data it learned from will look better than it is. It can memorise noise, which is <b>overfitting</b>, and still fail on new cases. Resampling reuses the data you have to estimate performance on data you do not have.</p>
<p><b>Why one split is not enough.</b> Holding out a single test set wastes rows and gives a score that depends on which rows landed in the test set. With small datasets the estimate can swing by several points.</p>
<p><b>k-fold cross-validation.</b></p>
<ul>
<li>Shuffle the data and split it into k folds of roughly equal size.</li>
<li>For each fold: train on the other k − 1 folds, test on the held-out fold, record the score.</li>
<li>Average the k scores. Report the mean and the standard deviation. The spread shows how stable the model is.</li>
</ul>
<p>k = 5 or 10 is standard, where small k trains on less data and is pessimistic. Large k is expensive and the folds become similar, so the estimate has higher variance. For classification with rare classes, use <b>stratified</b> k-fold so each fold keeps the class proportions. <b>Leave-one-out</b> sets k = n, training n times on n − 1 rows. It uses almost all the data and is nearly unbiased, but it costs n model fits and gives a high-variance estimate, so it suits very small datasets only. In scikit-learn, <code>cross_val_score()</code> runs the loop and returns the k scores.</p>
<p><b>Bootstrapping.</b> Draw B samples of size n <i>with replacement</i> from the original data, where each resample leaves out about 37% of the rows. Compute the statistic on each resample, so the spread of the B values estimates the standard error, and their 2.5th and 97.5th percentiles give a 95% confidence interval. B is usually 1,000 to 10,000.</p>
<p><b>When to use which.</b> Cross-validation estimates and compares model performance, and tunes hyperparameters. Bootstrapping estimates the uncertainty of a statistic, such as a median, a ratio or a correlation, when the formula is hard or normality is doubtful. Neither creates information, and both assume the sample represents the population.</p>`
        },
        {
          type: "example",
          html: `<p>A lender has 1,000 labelled loan applications, so five-fold cross-validation trains on 800 and tests on 200, five times. The accuracies are 0.81, 0.79, 0.83, 0.80 and 0.82. The mean is 0.81 and the SD is 0.015. The team then draws 2,000 bootstrap resamples of the 1,000 rows, records the AUC of each, and takes the 2.5th and 97.5th percentiles as a 95% interval. The first number compares models, while the second says how much to trust the estimate.</p>`
        },
        {
          type: "tip",
          html: `<p>This is the most repeated theme. Prepare a 14-mark answer: overfitting, the k-fold procedure with a diagram, choice of k, leave-one-out, bootstrap steps, and when to use each. Say "with replacement" and "same size n" for the bootstrap, quote 5 or 10 folds, and add stratified folds for imbalanced classes.</p>`
        }
      ],
      practice: [
        {
          q: "Explain leave-one-out cross-validation, with one advantage and two drawbacks.",
          a: `Leave-one-out cross-validation is k-fold with k equal to the number of rows n. For each of the n rows, hold that row out as the test set, then train on the other n − 1 rows, predict the held-out row, and record whether the prediction is correct. The score is the average over all n runs.
<b>Advantage:</b> almost all the data is used for training each time, so the estimate is nearly unbiased and no rows are wasted, which helps when n is small.
<b>Drawbacks:</b> it needs n model fits, which is expensive for slow models. The n training sets differ by only one row, so the models are nearly identical and the score has high variance, and there is also no separate test set for final confirmation. For these reasons 5- or 10-fold is usually better.`,
          marks: 7,
          diff: "medium"
        },
        {
          q: "Explain how bootstrapping produces a 95% confidence interval for the median income of a city. Give the steps, the role of B, and two limitations.",
          a: `Bootstrapping builds a confidence interval from the data alone, without assuming a formula or a normal distribution.
<ul><li>Take the original sample of n incomes and compute the median, the statistic you care about.</li><li>Draw a resample of size n with replacement. Some rows appear twice or more. About 37% are left out.</li><li>Compute the median of the resample and store it.</li><li>Repeat B times, usually 1,000 to 10,000. You now have B bootstrap medians.</li><li>Sort them. For a 95% interval, take the 2.5th and 97.5th percentiles (the percentile method).</li></ul>
The spread of the B values also estimates the standard error. A larger B reduces simulation noise, but it cannot add information the original sample lacks.
<b>Limits:</b> the sample must represent the population, so a biased sample gives a confidently wrong interval. The method can fail for heavy-tailed data or extreme quantiles. Dependent observations need a block bootstrap, and it is not a substitute for a proper sampling design.`,
          marks: 14,
          diff: "hard"
        }
      ]
    },
    {
      slug: "m1-metrics",
      title: "Classification Metrics: Confusion Matrix, Accuracy, Precision, Recall",
      sources: [
        "https://scikit-learn.org/stable/modules/model_evaluation.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "A confusion matrix counts a classifier's right and wrong predictions, and accuracy, precision and recall come from it."
        },
        {
          type: "text",
          html: `<p>A confusion matrix is the 2×2 table behind most classification metrics. Rows are the actual class. Columns are the predicted class.</p>
<table class="tbl">
<tr><th></th><th>Predicted positive</th><th>Predicted negative</th></tr>
<tr><td>Actual positive</td><td>TP</td><td>FN</td></tr>
<tr><td>Actual negative</td><td>FP</td><td>TN</td></tr>
</table>
<p><b>Formulas.</b></p>
<ul>
<li><code>Accuracy = (TP + TN) / (TP + TN + FP + FN)</code>: the share of all predictions that are correct.</li>
<li><code>Precision = TP / (TP + FP)</code>: of the cases flagged positive, how many really are.</li>
<li><code>Recall = TP / (TP + FN)</code>: of the real positives, how many were caught. Also called sensitivity.</li>
<li><code>F1 = 2 × (precision × recall) / (precision + recall)</code>: the harmonic mean, high only when both are decent.</li>
</ul>
<p><b>Why accuracy misleads.</b> Take 10,000 card transactions with 100 frauds, where a model that predicts "not fraud" every time scores 99% accuracy and catches nothing. Accuracy hides the failure because the negative class dominates, so use precision, recall, F1, balanced accuracy or the precision-recall curve instead.</p>
<p><b>The trade-off.</b> Lower the decision threshold and you flag more cases, so recall rises and precision usually falls, while raising it does the reverse. Choose by cost, because a missed fraud is expensive whereas a false alarm costs a review call.</p>`
        },
        {
          type: "example",
          html: `<p>A bank scores 10,000 card transactions and flags 150. Of the 100 real frauds, 60 are caught (TP) and 40 are missed (FN), while another 90 flagged transactions are legitimate (FP) and the remaining 9,810 are correctly cleared (TN). Accuracy is 98.7%, which sounds excellent, but precision is 60/150 = 40% and recall is 60/100 = 60%, so F1 = 0.48. The headline number hid a detector that misses two frauds in five and annoys 90 customers.</p>`
        },
        {
          type: "tip",
          html: `<p>Draw the matrix and label TP, FP, FN, TN before you write any formula. For a computation question, show each substitution: accuracy, precision, recall, then F1. For 14 marks, add the imbalanced fraud argument and the threshold trade-off, because that is where most answers lose marks.</p>`
        }
      ],
      practice: [
        {
          q: "A fraud team reports 99% accuracy but the manager is unhappy. Explain why accuracy is a poor headline, define precision, recall and F1, and discuss the trade-off.",
          a: `Accuracy is the share of all predictions that are correct. With 10,000 transactions and 100 frauds, a model that never flags fraud scores 99% and catches nothing. The negative class dominates, so accuracy hides the failure, and balanced accuracy, precision, recall, F1 or a precision-recall curve give a truthful picture.
<ul><li><code>Precision = TP / (TP + FP)</code>: of the transactions flagged, how many were fraud. Low precision means many innocent customers are blocked.</li><li><code>Recall = TP / (TP + FN)</code>: of the real frauds, how many were caught. Low recall means losses continue.</li><li><code>F1 = 2PR / (P + R)</code>: the harmonic mean, high only when both are reasonable.</li></ul>
The two trade off through the decision threshold: lower it and you flag more cases, so recall rises and precision falls, while raising it does the reverse. The right balance follows cost, because a missed fraud may cost the full amount whereas a false alarm costs a review call and some goodwill. Report the matrix, the threshold and the cost assumption, because one headline number is not enough.`,
          marks: 14,
          diff: "hard"
        }
      ]
    }
  ]
};
