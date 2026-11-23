/*
 * Ali Guliyev's resume. Build with `pnpm resume` (or `pnpm resume:watch`) into public/resume.pdf.
 *
 * The layout reproduces the original LaTeX version: Latin Modern optical
 * sizes stand in for Computer Modern, and every line sits on a fixed 12.6pt
 * baseline grid, with the extra gaps below added on top of it.
 */

// ---------- Fonts ----------
#let body-font = "Latin Modern Roman 9"
#let subtitle-font = "Latin Modern Roman" // 10pt bold cut
#let name-font = "Latin Modern Roman 12"
#let heading-font = "Latin Modern Roman Caps"
#let symbol-font = "New Computer Modern Math" // CMSY equivalent, ships with Typst

#let link-color = rgb("#0000ff")

// ---------- Spacing (on top of the 12.6pt baseline grid) ----------
#let section-gap = 8.95pt // last line of a section -> next heading
#let rule-offset = 5pt // heading -> rule below it
#let entry-gap = 2.72pt // before each entry title
#let project-gap = 1.8pt // project line -> its bullets

// ---------- Page ----------
#set document(title: "Ali Guliyev - Resume", author: "Ali Guliyev")
#set page(
  paper: "a4",
  margin: 0.6in,
  // Page number baseline 30pt below the text area, like LaTeX's \footskip
  footer-descent: 19.93pt,
  footer: context align(center, counter(page).display()),
)
#set text(
  font: body-font,
  size: 8.97pt,
  lang: "en",
  // A fixed line box, so baselines land on the grid regardless of font size
  top-edge: 9.96pt,
  bottom-edge: -2.645pt,
  // LaTeX doesn't hang punctuation into the margin
  overhang: false,
)
#set par(justify: true, leading: 0pt, spacing: 0pt)
#set block(spacing: 0pt)
#let bullet = text(font: symbol-font, sym.bullet.op)
#set list(
  marker: bullet,
  indent: 12.33pt,
  body-indent: 5.11pt,
  spacing: 0pt,
)
#show link: set text(fill: link-color)
// TeX's extra space after sentence-ending punctuation
#show regex("[.?!:] "): it => [#it.text.trim()#h(0.111em) ]

// ---------- Components ----------
#let bar = text(font: symbol-font, "|")

#let section(title, above: section-gap, below: 0pt, indent: 0.4cm, body) = {
  v(above)
  text(font: heading-font, size: 11.96pt, title)
  place(dy: rule-offset, line(length: 100%, stroke: 0.4pt))
  v(below)
  pad(left: indent, body)
}

/// Bold entry title with a right-aligned date, e.g. a job or a school.
#let entry(title, date) = {
  v(entry-gap)
  [#text(font: subtitle-font, weight: "bold", size: 10.91pt, title) #h(1fr) #date]
  parbreak()
}

/// Bold group label inside a section, e.g. "Built at Optimax Software:".
#let group(title) = {
  v(entry-gap)
  text(font: subtitle-font, weight: "bold", size: 10.91pt, title)
  v(entry-gap)
}

/// `url: none` for a project with no public link yet.
#let project(title, url, stack) = {
  let name = if url == none { strong(title) } else { link(url, strong(title)) }
  [#name #bar~#emph(stack)]
  parbreak()
  v(project-gap)
}

// ---------- Document ----------
#v(4.34pt)
#align(center)[
  #text(font: name-font, weight: "bold", size: 20.66pt)[Ali Guliyev]
  #v(3pt)
  #link("https://aligu.me/")[aligu.me] #bar
  #link("mailto:ali.guliyevoo7@gmail.com")[ali.guliyevoo7\@gmail.com] #bar
  #link("https://github.com/aligu7")[github.com/aligu7] #bar
  #link("https://www.linkedin.com/in/aligu/")[linkedin.com/in/aligu]
]

#section("Summary", above: 7pt, below: 5.7pt)[
  Software engineer with 3+ years of production experience in TypeScript, Vue and Nuxt, including founding-engineer work on a live trading platform. Final-year BSc Applied Computing student at the University of East London (graduating 2027), seeking graduate software engineering roles.
]

#section("Technical Skills", below: 6.85pt)[
  #pad(left: 1pt, grid(
    columns: 2,
    column-gutter: 2pt,
    [*Languages:*], [TypeScript, JavaScript, Python],
    [*Frontend:*], [Vue 3, Nuxt 4, Pinia, Nuxt UI, UnoCSS, AG Grid, Dockview],
    [*Backend & Data:*], [Nuxt server routes, Drizzle ORM, Firebase, REST APIs, Alpaca API],
    [*Cloud & Tools:*], [Cloudflare (Pages, Workers), NuxtHub, Netlify, Git, Linux, Vite, Vitest],
  ))
]

#section("Experience", below: 5.7pt)[
  #entry[Founding Engineer, LamaTrader][June 2025 -- Present]
  #link("https://lamatrader.com")[lamatrader.com] — AI-native trading workspace on Alpaca (Alpaca Connect Marketplace), in beta with 300 active users.
  - Own the entire frontend layer: architecture, UI and UX of the trading app, marketing site and admin panel.
  - Built the full trading interface: order entry for stocks, options and crypto, advanced orders and option exercise.
  - Designed a customizable workspace of Dockview dashboards and real-time AG Grid tables with saved layouts.
  - Delivered the UI for the platform's AI features: AI Strategy Builder, Widget Builder and backtesting.
  - Created the product's design system.

  #entry[Web Developer, Optimax Software][June 2023 -- Present]
  #link("https://optimaxsoftware.com/")[optimaxsoftware.com]
  - Develop production websites and web apps with Vue 3, Nuxt 4, Pinia and TypeScript, from design to deployment.
  - Build responsive, server-rendered interfaces with REST API integrations for 5k+ monthly users.
  - Optimize performance, SEO and accessibility across client projects.
]

#section("Projects", below: 5.7pt)[
  #project(
    [AI Market Prediction Dashboard — Final-Year Project (2026–27)],
    none,
    [Python, FinBERT, Nuxt],
  )
  - Researching whether stock-specific news sentiment, news volume and earnings features improve price-only prediction.
  - Planned evaluation with walk-forward validation and cost-aware backtesting, measured by Sharpe ratio and drawdown.
  - Implementation from January 2027: a Python data pipeline and a Nuxt dashboard for predictions and strategy results.

  #project(
    [Visual Quran — Data Visualization Platform],
    "https://visual.koran.center",
    [Nuxt 4, TypeScript, Nuxt UI, Chart.js, Unovis, vue-data-ui],
  )
  - Main contributor: built 11 interactive visualizations, including word-count heatmaps and surah and juz analyses.
  - Built a paginated data explorer across every division of the Quran (surah, juz, ruku, page, ayah).

  #project(
    [Cinoteka — Movie Library Platform],
    "https://cinoteka.com",
    [Nuxt 4, TypeScript, Nuxt UI],
  )
  - Designed and built the collections feature: custom and smart collections, duplicate-safe multi-select adding.
  - Migrated the interface to Nuxt UI and resolved race conditions in the async movie lookup flow.

  #project(
    [Dr. Andrews Plastic Surgery — Simulation Tool (Freelance)],
    "https://github.com/aligu7/daps_simulation",
    [Nuxt 3, Vue 3, UnoCSS, Firebase],
  )
  - Delivered a full-stack website and patient simulation tool for a US surgery practice for Iowa in two weeks, remotely.
]

#section("Education", below: 5.7pt)[
  #entry[University of East London][Sep 2026 -- May 2027]
  _BSc (Hons) Applied Computing (Top-Up)_ \
  Relevant modules: Computer Network and Security, Project Management.

  #entry[ABC Horizon Istanbul][Sep 2024 -- Jan 2026]
  _Higher National Diploma (HND) in Computing, Merit_
]

#section("Certifications & Languages", below: 4.8pt)[
  *IELTS – Overall Band Score: 7.0 (Speaking 8.0)* #h(1fr) British Council, 2025 \
  *English*: Fluent #bar *Azerbaijani*, *Russian*, *Turkish*: Native
]
