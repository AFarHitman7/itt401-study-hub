window.DA_MODULES = window.DA_MODULES || {};
window.DA_MODULES[4] = {
  num: 4,
  title: "R Programming for Data Analytics",
  hours: 7,
  topics: [
    {
      slug: "m4-r-basics",
      title: "R Basics: Data Structures, Import/Export, Missing Values",
      sources: [
        "https://r4ds.hadley.nz/data-import.html",
        "https://cran.r-project.org/doc/manuals/r-release/R-intro.html",
        "https://stat.ethz.ch/R-manual/R-devel/library/utils/html/read.table.html",
        "https://stat.ethz.ch/R-manual/R-devel/library/base/html/factor.html",
        "https://stat.ethz.ch/R-manual/R-devel/library/base/html/matrix.html",
        "https://stat.ethz.ch/R-manual/R-devel/library/utils/html/write.table.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "R is a free language for statistics, data work and graphics in which every result is a named object built from vectors."
        },
        {
          type: "text",
          html: `<p><b>What R is.</b> R is a free language for statistics, data handling and graphics that runs on Windows, macOS and Linux, with thousands of add-on packages on CRAN. Every result lives in a named object and R prints only a short summary of it, so you inspect a fitted model with further functions instead of reading one long output dump.</p>
<p><b>The six core structures.</b> All six are objects that differ in only two ways: how many dimensions they hold and whether they can mix types.</p>
<table class="tbl">
<tr><th>Structure</th><th>Dimensions</th><th>Types allowed</th><th>One-line example</th></tr>
<tr><td>vector</td><td>1</td><td>one type</td><td><code>c(10, 20, 30)</code></td></tr>
<tr><td>list</td><td>1</td><td>mixed types</td><td><code>list(name = "Asha", marks = c(45, 50))</code></td></tr>
<tr><td>matrix</td><td>2</td><td>one type</td><td><code>matrix(1:6, nrow = 2)</code></td></tr>
<tr><td>array</td><td>n</td><td>one type</td><td><code>array(1:8, dim = c(2, 2, 2))</code></td></tr>
<tr><td>factor</td><td>1</td><td>categories</td><td><code>factor(c("small", "large"))</code></td></tr>
<tr><td>data frame</td><td>2</td><td>one type per column</td><td><code>data.frame(id = 1:3, score = c(88, 91, 79))</code></td></tr>
</table>
<p><b>Import and export.</b> <code>read.table()</code> reads a table split by whitespace and gives you a data frame, while <code>read.csv()</code> is the same function preset to <code>header = TRUE</code> and <code>sep = ","</code> and <code>read.delim()</code> uses a tab instead. To save, <code>write.csv(df, "out.csv")</code> writes the data frame back to disk.</p>
<p><b>Missing values.</b> R writes an unknown value as <code>NA</code>, and any calculation that touches <code>NA</code> comes back <code>NA</code>, so <code>mean(x)</code> fails until you add <code>na.rm = TRUE</code>. <code>is.na(x)</code> returns a TRUE/FALSE vector that marks the gaps, while readr functions such as <code>read_csv()</code> take <code>na = c("N/A", "")</code> so odd codes become real missing values on import.</p>`
        },
        {
          type: "code",
          lang: "r",
          html: `# one line per structure
v  <- c(10, 20, 30)                            # vector: all elements same type
l  <- list(name = "Asha", marks = c(45, 50))   # list: mixed types
m  <- matrix(1:6, nrow = 2, byrow = TRUE)      # matrix: 2 dimensions
a  <- array(1:8, dim = c(2, 2, 2))             # array: n dimensions
f  <- factor(c("small", "large", "small"))     # factor: categories
df <- data.frame(id = 1:3, score = c(88, 91, 79))  # data frame

mean(c(2, NA, 4))                 # NA
mean(c(2, NA, 4), na.rm = TRUE)   # 3`
        },
        {
          type: "example",
          html: `<p>A shop sends you <code>sales.csv</code> with date, product, size and qty, where size holds Small, Medium and Large and a few qty cells hold <code>N/A</code>. Load it with <code>sales &lt;- read.csv("sales.csv")</code>, then wrap size in <code>factor()</code> so R treats the words as categories with a fixed order. Summarise with <code>mean(sales$qty, na.rm = TRUE)</code> so the blanks are skipped instead of spoiling the average, and save the clean copy with <code>write.csv(sales, "clean.csv", row.names = FALSE)</code>. The manager keeps this clean file because next month starts from it.</p>`
        },
        {
          type: "tip",
          html: `<p>Learn one constructor per structure, then memorise the three import defaults because Part A often asks for them. Remember <code>read.table()</code> takes whitespace with header = FALSE, <code>read.csv()</code> takes commas with header = TRUE, and <code>read.delim()</code> takes tabs with header = TRUE. For missing values, state that any operation on <code>NA</code> returns <code>NA</code> and that <code>na.rm = TRUE</code> drops them first.</p>`
        }
      ],
      practice: [
        {
          q: `A store records T-shirt sizes as the text Small, Medium and Large. Explain the difference between storing this column as a character vector and as a factor, and give the R code for the factor version.`,
          a: `<p>A character vector treats every string as loose text, so R cannot tell that Medium sits between Small and Large and <code>table()</code> sorts the values alphabetically. A factor stores each value as an integer code plus a levels attribute, so R knows the allowed set and can count or order the values properly. Code: <code>size &lt;- factor(c("Small", "Medium", "Large", "Medium"), levels = c("Small", "Medium", "Large"))</code>. The <code>levels</code> argument fixes the display order, and leaving it out lets the levels sort alphabetically.</p>`,
          marks: 3,
          diff: "easy"
        },
        {
          q: `A matrix is created with m <- matrix(1:6, nrow = 2). State its dimensions and the value of m[2, 3]. Then give the one argument that would make m[1, 2] equal 2.`,
          a: `<p>It has 2 rows and 3 columns because <code>matrix()</code> fills column by column by default, so the columns are (1, 2), (3, 4) and (5, 6) and <code>m[2, 3]</code> equals 6. Add <code>byrow = TRUE</code> and it fills row by row instead, so the first row becomes 1, 2, 3 and <code>m[1, 2]</code> becomes 2.</p>`,
          marks: 3,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m4-ggplot2",
      title: "ggplot2: The Grammar of Graphics",
      sources: [
        "https://r4ds.hadley.nz/data-visualize.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "ggplot2 builds a plot layer by layer from data, aesthetic mappings, geoms and facets, following the grammar of graphics."
        },
        {
          type: "text",
          html: `<p><b>The layered grammar.</b> A ggplot2 graph works as a stack of parts because you supply the data plus an aesthetic mapping from <code>aes()</code> that ties columns to x, y, colour, size or shape, and then a geom draws the rows. Facets split the plot into panels, while a stat such as binning or smoothing can transform the data first, so you start with <code>ggplot(data, aes(...))</code> and add each layer with <code>+</code>.</p>
<p><b>Common geoms.</b></p>
<table class="tbl">
<tr><th>Geom</th><th>Use</th></tr>
<tr><td><code>geom_point()</code></td><td>scatterplot of two continuous variables</td></tr>
<tr><td><code>geom_line()</code></td><td>trend over an ordered variable; add group for several series</td></tr>
<tr><td><code>geom_bar()</code></td><td>counts of a categorical variable, no y needed</td></tr>
<tr><td><code>geom_col()</code></td><td>bars whose heights are already in a column</td></tr>
<tr><td><code>geom_histogram()</code></td><td>distribution of one continuous variable; set binwidth</td></tr>
<tr><td><code>geom_boxplot()</code></td><td>median, quartiles and outliers by group</td></tr>
<tr><td><code>geom_violin()</code></td><td>full density shape by group</td></tr>
<tr><td><code>geom_smooth()</code></td><td>fitted trend; method = "lm" for a straight line</td></tr>
</table>
<p><b>Facets.</b> <code>facet_wrap(~ cut)</code> gives each level of one variable its own panel and wraps the panels into rows, while <code>facet_grid(rows ~ cols)</code> builds a two-way grid from two variables. Both share scales by default, so the panels stay comparable.</p>
<p><b>Why it is popular.</b> Layers are reusable, legends appear on their own, and one syntax covers every plot type, so load the package with <code>library(ggplot2)</code> or <code>library(tidyverse)</code>. Two errors come up again and again, because people put <code>+</code> at the start of a line instead of the end and they write a constant inside <code>aes()</code> when they meant to set it outside.</p>`
        },
        {
          type: "code",
          lang: "r",
          html: `library(tidyverse)

# histogram: binwidth is measured in the units of carat
ggplot(diamonds, aes(x = carat)) +
  geom_histogram(binwidth = 0.1)

# faceted scatterplot: one panel per cut
ggplot(diamonds, aes(x = carat, y = price)) +
  geom_point(alpha = 0.2) +
  facet_wrap(~ cut)`
        },
        {
          type: "example",
          html: `<p>Suppose an exam task asks for price against carat from <code>diamonds</code>, with points coloured by cut plus a straight trend line, and you build it one layer at a time with <code>ggplot(diamonds, aes(x = carat, y = price, colour = cut)) + geom_point() + geom_smooth(method = "lm")</code>. The mapping sits in <code>ggplot()</code> so both layers inherit it without repeating the code. Then <code>geom_point()</code> draws the stones while <code>geom_smooth()</code> adds the fitted line with its confidence band, so the plot answers shape and trend together in one view.</p>`
        },
        {
          type: "tip",
          html: `<p>Memorise the skeleton <code>ggplot(data, aes(x, y)) + geom_()</code> because every plot starts from it. On a 7-mark code question, add <code>library(tidyverse)</code>, the geom, a colour or facet mapping, and <code>labs()</code> for titles, since each one earns a mark. Keep two pairs straight, because <code>geom_bar()</code> counts rows while <code>geom_col()</code> uses a y column. Remember <code>colour = "red"</code> outside <code>aes()</code> sets a colour, while <code>aes(colour = cut)</code> maps a variable.</p>`
        }
      ],
      practice: [
        {
          q: `When would you use geom_jitter() instead of geom_point()? Give the trade-off.`,
          a: `<p><code>geom_jitter()</code> nudges each point by a small random amount, so overlapping points separate when one axis is discrete or many rows share a value. Reach for it on small data where overplotting hides how many points sit at the same spot, because the spread reveals the count. The cost is that positions are no longer exact, so avoid it when the precise x value matters or when someone must read a trend off the plot, and use <code>geom_point()</code> to keep coordinates exact.</p>`,
          marks: 3,
          diff: "medium"
        },
        {
          q: `Explain how binwidth changes the shape of a histogram. What do you see with a binwidth far too small and far too large?`,
          a: `<p><code>binwidth</code> sets the width of each bin in the units of the x variable, so it controls the resolution of the plot. Too small gives a jagged row of spikes that hides the overall shape, while too large packs everything into a few tall bars that hide the modes and the skew. Try several widths and keep the one that shows the shape without the noise.</p>`,
          marks: 3,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m4-dplyr",
      title: "Data Transformation with dplyr: the Five Verbs",
      sources: [
        "https://r4ds.hadley.nz/data-transform.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "dplyr is a tidyverse package with five verbs: filter rows, arrange rows, select columns, mutate new columns and summarise groups."
        },
        {
          type: "text",
          html: `<p><b>One grammar for every verb.</b> Every dplyr verb takes a data frame first, then bare column names, and returns a new data frame, so the input never changes and you assign the result to keep it.</p>
<p><b>The five verbs.</b></p>
<table class="tbl">
<tr><th>Verb</th><th>What it does</th><th>Call</th></tr>
<tr><td><code>filter()</code></td><td>keeps rows that meet a condition</td><td><code>filter(flights, dep_delay &gt; 120)</code></td></tr>
<tr><td><code>arrange()</code></td><td>sorts rows by columns</td><td><code>arrange(flights, desc(dep_delay))</code></td></tr>
<tr><td><code>select()</code></td><td>keeps, drops or renames columns</td><td><code>select(flights, year:day, carrier)</code></td></tr>
<tr><td><code>mutate()</code></td><td>adds columns from old ones</td><td><code>mutate(flights, speed = distance / air_time * 60)</code></td></tr>
<tr><td><code>summarize()</code></td><td>turns rows into statistics</td><td><code>summarize(flights, avg = mean(dep_delay, na.rm = TRUE))</code></td></tr>
</table>
<p><b>Groups.</b> <code>group_by()</code> tags the data frame with groups and changes nothing else, so the next <code>summarize()</code> returns one row per group. <code>n()</code> counts the rows in each group, and you add <code>.groups = "drop"</code> to remove the grouping afterwards.</p>
<p><b>The pipe.</b> <code>x |&gt; f(y)</code> means <code>f(x, y)</code>, so <code>x |&gt; f(y) |&gt; g(z)</code> means <code>g(f(x, y), z)</code> and you read it as "then". The older <code>%&gt;%</code> from magrittr does the same job, and either one lets you chain verbs top to bottom with no nested calls and no throwaway objects.</p>`
        },
        {
          type: "code",
          lang: "r",
          html: `library(tidyverse)
library(nycflights13)

flights |>
  filter(dest == "IAH", dep_delay > 0) |>
  mutate(speed = distance / air_time * 60) |>
  group_by(carrier) |>
  summarize(avg_speed = mean(speed, na.rm = TRUE), n = n()) |>
  arrange(desc(avg_speed))`
        },
        {
          type: "example",
          html: `<p>The book's case study hunts the fastest flights to Houston, and it starts with <code>flights</code> before adding <code>filter(dest == "IAH")</code> to keep Houston arrivals, then <code>mutate(speed = distance / air_time * 60)</code> to add speed, then <code>select()</code> for a few columns, then <code>arrange(desc(speed))</code> to sort fastest first. Four verbs in one pipeline read like a sentence because each step feeds the next, so you can follow the logic from raw table to ranked answer in one pass.</p>`
        },
        {
          type: "tip",
          html: `<p>Write the signatures exactly: <code>filter(data, condition)</code>, <code>arrange(data, desc(column))</code>, <code>select(data, columns)</code>, <code>mutate(data, new = expression)</code>, <code>summarize(data, name = mean(column, na.rm = TRUE))</code>. Use <code>==</code> to compare, never <code>=</code>. In a code question, put one verb per line and start each line with the verb name. Shape the pipeline clearly because examiners give marks for that shape, not just the output.</p>`
        }
      ],
      practice: [
        {
          q: `Which dplyr verb keeps only the rows that meet a condition? Write the call that keeps flights with distance greater than 1000 miles.`,
          a: `<p><code>filter()</code> keeps the rows you ask for and drops the rest while leaving order unchanged. The call is <code>flights |&gt; filter(distance &gt; 1000)</code>, or <code>filter(flights, distance &gt; 1000)</code> without the pipe. Write the column name unquoted, and assign the result to a new data frame when you need to keep it.</p>`,
          marks: 3,
          diff: "easy"
        },
        {
          q: `Starting from flights, write one pipeline that keeps flights to IAH, adds a column speed = distance / air_time * 60, keeps only carrier, flight and speed, and sorts from fastest to slowest. Explain what the pipe contributes.`,
          a: `<p><code>flights |&gt; filter(dest == "IAH") |&gt; mutate(speed = distance / air_time * 60) |&gt; select(carrier, flight, speed) |&gt; arrange(desc(speed))</code></p>
<p><code>filter()</code> keeps the Houston rows and <code>mutate()</code> adds speed on the right-hand side, while <code>select()</code> keeps three columns and <code>arrange(desc(speed))</code> puts the largest speed first. The pipe passes the object on its left into the first argument on its right, so <code>x |&gt; f(y)</code> equals <code>f(x, y)</code>. Read left to right and you follow the order of operations with no nested calls and no temporary objects.</p>`,
          marks: 7,
          diff: "medium"
        },
        {
          q: `Write code that reports, for each carrier, the number of flights and the mean arrival delay, sorted by mean delay from worst to best. Why is na.rm = TRUE required?`,
          a: `<p><code>flights |&gt; group_by(carrier) |&gt; summarize(n = n(), avg_delay = mean(arr_delay, na.rm = TRUE)) |&gt; arrange(desc(avg_delay))</code></p>
<p><code>group_by()</code> splits the rows by carrier without changing them, so <code>summarize()</code> then returns one row per group and <code>n()</code> counts the rows in each. <code>na.rm = TRUE</code> matters because cancelled flights have no <code>arr_delay</code>, and <code>mean()</code> returns <code>NA</code> when any input is <code>NA</code>. The argument therefore drops those values before averaging.</p>`,
          marks: 7,
          diff: "medium"
        },
        {
          q: `What does select(flights, starts_with("dep")) return? Name two other select helpers and what they match.`,
          a: `<p>It keeps only the columns whose names start with dep, namely <code>dep_time</code> and <code>dep_delay</code>. Other helpers include <code>ends_with("time")</code> for names ending in time, <code>contains("delay")</code> for names with delay inside, and <code>num_range("x", 1:3)</code> for x1, x2 and x3. All of them use the same <code>select()</code> syntax and match case by default.</p>`,
          marks: 3,
          diff: "easy"
        }
      ]
    },
    {
      slug: "m4-eda",
      title: "Exploratory Data Analysis: Distributions, Covariation and Summary Stats",
      sources: [
        "https://r4ds.hadley.nz/eda.html",
        "https://stat.ethz.ch/R-manual/R-devel/library/graphics/html/pairs.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "Exploratory data analysis is a loop: ask a question, answer it with a plot, a change or a model, then ask a better question."
        },
        {
          type: "text",
          html: `<p><b>What EDA is.</b> EDA has no fixed procedure because it is a habit of curiosity plus a little scepticism, so the loop runs by asking a question, answering it by visualising, transforming or modelling, then letting the answer sharpen the next question. Two questions drive most of it, which are what variation lives inside one variable and what covariation links two variables. EDA also catches broken data, such as impossible or missing values.</p>
<p><b>One variable.</b> For a continuous variable use <code>geom_histogram()</code> and tune <code>binwidth</code> in the units of x, because too small gives a jagged shape while too large hides it. <code>geom_freqpoly()</code> and <code>geom_density()</code> are alternatives, and for a categorical variable use <code>geom_bar()</code>, which counts rows per level.</p>
<p><b>Covariation.</b></p>
<table class="tbl">
<tr><th>Variable pair</th><th>Plot</th><th>What you read</th></tr>
<tr><td>categorical × continuous</td><td><code>geom_boxplot()</code> or <code>geom_violin()</code></td><td>medians, spread and outliers across groups</td></tr>
<tr><td>categorical × categorical</td><td><code>geom_count()</code> or <code>geom_tile()</code> on counts</td><td>counts for each pair of levels</td></tr>
<tr><td>continuous × continuous</td><td><code>geom_point()</code>, <code>geom_bin2d()</code> when dense</td><td>direction and strength of the link</td></tr>
<tr><td>many variables at once</td><td><code>pairs()</code></td><td>scatterplot matrix, one panel per pair</td></tr>
</table>
<p><b>Descriptive statistics.</b> <code>mean()</code>, <code>median()</code>, <code>sd()</code>, <code>var()</code>, <code>min()</code>, <code>max()</code>, <code>range()</code>, <code>quantile()</code> and <code>IQR()</code> each return one number or a short vector, while <code>summary()</code> prints the minimum, first quartile, median, mean, third quartile and maximum in one call.</p>
<p><b>The scatterplot matrix.</b> <code>pairs(df)</code> draws every pair of numeric columns in a grid, so it is the quickest way to scan many variables for strong or curved relationships before you commit to one plot or one model.</p>`
        },
        {
          type: "code",
          lang: "r",
          html: `library(tidyverse)

ggplot(diamonds, aes(x = price)) +
  geom_histogram(binwidth = 500)

ggplot(diamonds, aes(x = cut, y = price)) +
  geom_boxplot()

pairs(diamonds[, c("price", "carat", "x")])
summary(diamonds$price)`
        },
        {
          type: "example",
          html: `<p>The diamonds data throws a surprise because Fair-cut stones show a higher median price than Ideal-cut ones, which feels backwards until EDA digs deeper. The first boxplot raises the question, and a plot of price against carat answers it, since cut and carat move together because big stones get cut for weight rather than quality. One plot found the pattern and the next plot explained it, so the surprise turns into an insight about how size confounds quality.</p>`
        },
        {
          type: "tip",
          html: `<p>Answer a three-mark question with the function name plus one short reason for why it fits the variable pair. In code questions, always set <code>binwidth</code> on a histogram and always add <code>na.rm = TRUE</code> to <code>mean()</code>. When asked for five descriptive functions, list <code>mean()</code>, <code>median()</code>, <code>sd()</code>, <code>var()</code> and <code>summary()</code> and say what each returns.</p>`
        }
      ],
      practice: [
        {
          q: `A scatterplot of price against carat for 54,000 diamonds is a solid black blob. Give two changes that reveal the density, and state what each one preserves.`,
          a: `<p>Set the <code>alpha</code> aesthetic to something small such as 0.1, so overlapping points build up darker areas while every observation stays at its exact position. Or bin the plane with <code>geom_bin2d()</code> or <code>geom_hex()</code>, which needs the hexbin package, because binning colours each bin by its count. Binning handles very large data but swaps single points for counts, yet both moves reveal where the points pack together.</p>`,
          marks: 3,
          diff: "medium"
        },
        {
          q: `A salary column is strongly right-skewed because of a few executives. Which single number describes a typical salary better, mean() or median()? Name two functions that describe the spread.`,
          a: `<p>The median is the better summary because it is the middle value, so a handful of executive salaries cannot drag it. The mean uses every value, so the long right tail pulls it above what most people earn. For spread, use <code>sd()</code> or <code>var()</code> when you want variance around the mean, and use <code>IQR()</code> or <code>range()</code> when the data are skewed and quartiles tell the truer story.</p>`,
          marks: 3,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m4-tidy",
      title: "Tidy Data with tidyr: gather/spread and pivot_longer/pivot_wider",
      sources: [
        "https://r4ds.hadley.nz/data-tidy.html",
        "https://r4ds.had.co.nz/tidy-data.html",
        "https://tidyr.tidyverse.org/reference/gather.html",
        "https://tidyr.tidyverse.org/reference/spread.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "Tidy data has one fixed shape: every variable is a column, every observation is a row, and every value sits in one cell."
        },
        {
          type: "text",
          html: `<p><b>The three rules.</b> Each variable is a column, each observation is a row, and each value sits in one cell. That one consistent shape lets vectorised functions, dplyr and ggplot2 work without special cases.</p>
<p><b>Four ways data goes wrong.</b></p>
<ul>
<li>Column headers are values, not names. Columns called 2019 and 2020 hold years.</li>
<li>One column holds several variables. A rate column reading 745/19987071 packs cases and population together.</li>
<li>Variables sit across rows. A type column holds cases and population as values.</li>
<li>One unit is split across tables. Cases live in one table and population in another.</li>
</ul>
<p><b>Making data longer.</b> <code>pivot_longer()</code> moves column names into one new column and cell values into another, and it takes three arguments. <code>cols</code> says which columns to pivot, while <code>names_to</code> names the column that receives the old headers and <code>values_to</code> names the column that receives the values.</p>
<table class="tbl">
<tr><th>country</th><th>y2019</th><th>y2020</th></tr>
<tr><td>India</td><td>10</td><td>12</td></tr>
<tr><td>Brazil</td><td>20</td><td>25</td></tr>
</table>
<p>After <code>pivot_longer(cols = y2019:y2020, names_to = "year", values_to = "sales")</code> the same values take three columns:</p>
<table class="tbl">
<tr><th>country</th><th>year</th><th>sales</th></tr>
<tr><td>India</td><td>y2019</td><td>10</td></tr>
<tr><td>India</td><td>y2020</td><td>12</td></tr>
</table>
<p><b>Making data wider.</b> <code>pivot_wider()</code> reverses the move, because <code>names_from</code> gives the column whose values become headers and <code>values_from</code> gives the column whose values fill the cells.</p>
<p><b>Old names.</b> Why do old exams say <code>gather()</code> when new ones say <code>pivot_longer()</code>? Because tidyr 1.0 renamed the job, so the older pair <code>gather(key, value, ...)</code> and <code>spread(key, value)</code> still runs but is superseded. <code>gather(data, "year", "cases", y2019, y2020)</code> equals <code>pivot_longer(data, c(y2019, y2020), names_to = "year", values_to = "cases")</code>.</p>`
        },
        {
          type: "code",
          lang: "r",
          html: `library(tidyverse)

wide <- tibble(country = c("India", "Brazil"),
               y2019 = c(10, 20),
               y2020 = c(12, 25))

long <- wide |>
  pivot_longer(cols = y2019:y2020,
               names_to = "year",
               values_to = "sales")

long |> pivot_wider(names_from = year, values_from = sales)`
        },
        {
          type: "example",
          html: `<p>The billboard data hides chart ranks in 76 columns named wk1 to wk76, and those headers are really values of a week variable so the table is untidy. Run <code>pivot_longer(cols = starts_with("wk"), names_to = "week", values_to = "rank")</code> to move the headers into one week column and the cells into one rank column. The 317 rows become a long table with one rank per row, so a line plot of rank over week finally works because each variable has its own column.</p>`
        },
        {
          type: "tip",
          html: `<p>Give both vocabularies in every answer, since <code>pivot_longer()</code> and <code>pivot_wider()</code> replaced <code>gather()</code> and <code>spread()</code> in tidyr 1.0. On a 3-mark definition, state the three rules word for word. In code, quote the names you give to <code>names_to</code> and <code>values_to</code> because those columns do not exist in the input yet.</p>`
        }
      ],
      practice: [
        {
          q: `State the three tidy-data rules. A sales table has columns country, y2019 and y2020 holding revenue. Which rule is broken, and why does it matter for plotting revenue over time?`,
          a: `<p>The rules are that each variable is a column, each observation is a row, and each value is a single cell. The year columns break the first rule because 2019 and 2020 are values of a year variable, not variable names, so each row packs two observations. A line plot needs one year column to map to x, so lengthen the data first with <code>sales |&gt; pivot_longer(cols = y2019:y2020, names_to = "year", values_to = "revenue")</code>.</p>`,
          marks: 7,
          diff: "medium"
        },
        {
          q: `In pivot_longer(), explain the roles of cols, names_to and values_to. Then rewrite gather(stocks, "stock", "price", -time) using pivot_longer().`,
          a: `<p><code>cols</code> picks the columns that are not variables and must be pivoted, and it uses the same syntax as <code>select()</code> so helpers and minus signs work. <code>names_to</code> names the new character column that takes the old headers, while <code>values_to</code> names the new column that takes the cell values. Both names are quoted because they do not exist in the input. The rewrite is <code>stocks |&gt; pivot_longer(cols = -time, names_to = "stock", values_to = "price")</code>, since <code>gather()</code> is the older spelling of the same move.</p>`,
          marks: 7,
          diff: "medium"
        }
      ]
    },
    {
      slug: "m4-model",
      title: "Modelling in R: lm(), Residuals and geom_ref_line()",
      sources: [
        "https://r4ds.had.co.nz/model-basics.html",
        "https://modelr.tidyverse.org/reference/geom_ref_line.html"
      ],
      blocks: [
        {
          type: "definition",
          text: "A linear model fits the line or plane that minimises the sum of squared residuals, showing how a response moves with its predictors."
        },
        {
          type: "text",
          html: `<p><b>Fitting the model.</b> <code>lm(y ~ x, data = df)</code> fits the straight line that minimises the sum of squared residuals. <code>summary(model)</code> reports the coefficients with their standard errors, t values and p values, and it also gives the residual standard error, R-squared and an F statistic.</p>
<p><b>Reading the output.</b> The intercept is the predicted y when x is 0, while the slope is the average change in y for a one-unit rise in x. R-squared is the share of variation in y the model explains, running from 0 to 1 so that closer to 1 means a tighter fit.</p>
<p><b>Residuals.</b> A residual is observed y minus predicted y, and for a model with an intercept the average residual is zero. Plot residuals against fitted values to check the model, because random scatter around zero says the pattern was caught while a curve or a funnel says structure is still in there.</p>
<p><b>geom_ref_line().</b> <code>geom_ref_line(h = 0)</code> draws a horizontal reference line at y = 0, and <code>geom_ref_line(v = ...)</code> draws a vertical one. It comes from the <b>modelr</b> package, not ggplot2. On a residual plot its job is simple because it makes it easy to judge how far points sit above or below zero, while the base ggplot2 equivalent is <code>geom_hline(yintercept = 0)</code>.</p>
<p><b>Prediction.</b> <code>predict(model, newdata = df)</code> needs a data frame with the same predictor column names, so it cannot predict a factor level that was missing from the training data.</p>`
        },
        {
          type: "code",
          lang: "r",
          html: `library(tidyverse)
library(modelr)
m <- lm(price ~ carat, data = diamonds)
summary(m)$r.squared

diamonds |>
  add_predictions(m) |>
  add_residuals(m) |>
  ggplot(aes(x = pred, y = resid)) +
  geom_ref_line(h = 0) +
  geom_point()
predict(m, data.frame(carat = 1.5))`
        },
        {
          type: "example",
          html: `<p>The book's simulated example fits <code>lm(y ~ x, data = sim1)</code> and gets an intercept near 4.2 with a slope near 2.05, so each extra unit of x adds about two units of y. The residual plot shows random noise around zero, which means the linear family was good enough for these data. A curve in that plot would have sent you back to the model to add a term or transform a variable, because the shape would prove that structure was left over.</p>`
        },
        {
          type: "tip",
          html: `<p>For a 7-mark answer, write the <code>lm()</code> call, quote the slope with its units, then quote R-squared as the percentage of variation explained. Finish by describing the residual plot with <code>geom_ref_line(h = 0)</code>. Name modelr when you mention <code>geom_ref_line()</code>, and remember <code>predict()</code> wants a data frame, not a bare number.</p>`
        }
      ],
      practice: [
        {
          q: `The diamonds data has price and carat. (a) Fit a linear model of price on carat and write the code. (b) State what the slope and R-squared in summary() mean. (c) Use predict() to estimate the price of a 1.5-carat diamond. (d) Explain what a residual is and why plotting residuals against fitted values is the standard check. (e) Give one reason the prediction may mislead.`,
          a: `<p><code>m &lt;- lm(price ~ carat, data = diamonds); summary(m); predict(m, data.frame(carat = 1.5))</code></p>
<p>(b) The slope is the average rise in price for each extra carat, while R-squared is the share of price variation that carat explains, so a value of 0.85 means 85 per cent is explained and 15 per cent is left to other variables. (c) <code>predict()</code> returns the height of the fitted line at carat = 1.5, which is a model estimate rather than an observed price. (d) A residual is observed minus predicted price, so plotting residuals against fitted values shows whether the straight line caught the pattern. Random scatter around zero is good, while a curve means a missed trend, and <code>geom_ref_line(h = 0)</code> from modelr draws the zero line so you can judge the gaps above and below it. (e) The price-carat link is exponential so a straight line underfits, and the prediction also ignores cut, colour and clarity, so it is only an average for stones of that size.</p>`,
          marks: 14,
          diff: "hard"
        },
        {
          q: `predict(m, new_data) fails with the message that a factor has a new level. Explain the cause and the fix.`,
          a: `<p>The model stored one coefficient per training level, so a level never seen during fitting has no coefficient and the design matrix cannot be built. Fix it by mapping the new value to an existing level, or refit with a factor whose <code>levels</code> argument lists every level you expect. This is why <code>predict()</code> needs the same column names and the same column types as the training data.</p>`,
          marks: 3,
          diff: "medium"
        }
      ]
    }
  ]
};
