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

#let project(title, url, stack) = {
  [#link(url, strong(title)) #bar~#emph(stack)]
  parbreak()
  v(project-gap)
}

// ---------- Document ----------
#v(4.34pt)
#align(center)[
  #text(font: name-font, weight: "bold", size: 20.66pt)[Ali Guliyev]
  #v(3pt)
  #link("https://aligu.me/")[Portfolio Website] #bar
  #link("mailto:ali.guliyevoo7@gmail.com")[ali.guliyevoo7\@gmail.com] #bar
  #link("https://github.com/aligu7")[Github] #bar
  #link("https://www.linkedin.com/in/aligu/")[LinkedIn]
]

#section("Education", above: 7pt, below: 5.7pt)[
  #entry[University of East London][Sep 2026 -- May 2027]
  _BSc (Hons) Applied Computing (Top-Up)_

  #entry[ABC Horizon Istanbul][Sep 2024 -- Jan 2026]
  _Higher National Diploma (HND) in Computing, Merit_

  #entry[Wimbledon School of English][12 Jun 2023 -- 07 Jul 2023]
  _Academic IELTS Express (20 hours/week, B2+ Level)_
]

#section("Technical Skills", below: 6.85pt)[
  #pad(left: 1pt, grid(
    columns: 2,
    column-gutter: 2pt,
    [*Frontend / Fullstack:*], [Nuxt 4, Vue 3, TypeScript, JavaScript, Nuxt UI, AG Grid, Dockview, Firebase],
    [*Programming:*], [Python, C++],
    [*Tools & Ecosystem:*], [Linux, Git, Pinia, Vite, Vitest, Cloudflare (Pages, Workers), NuxtHub, Netlify, Alpaca API],
  ))
]

#section("Experience", below: 5.7pt)[
  #entry[Founding Engineer, LamaTrader][June 2025 -- Present]
  #link("https://lamatrader.com")[lamatrader.com]
  - AI-native trading workspace on Alpaca, live on the Alpaca Connect Marketplace.
  - Lead the frontend: trading interface and order entry for stocks, options and crypto.
  - Built real-time AG Grid tables for positions, orders and market data, and a drag-and-drop Dockview widget workspace.
  - Built the UI for the AI Strategy Builder and backtesting. 2,600+ commits since joining.

  #entry[Web Developer, Optimax Software][June 2023 -- Present]
  #link("https://optimaxsoftware.com/")[optimaxsoftware.com]
  - Built multiple production websites and web apps using Vue 3, Nuxt 4, Pinia, and TypeScript.
  - Implemented responsive, component-based interfaces with SSR and efficient state management.
  - Integrated REST APIs and dynamic content for 5k+ monthly users.
  - Optimised performance, SEO, and accessibility across projects.

  #entry[Web Developer, 57Colleges][June 2022 -- August 2023]
  #link("https://57colleges.com")[57colleges.com]
  - Developed and optimised responsive web apps using WordPress, HTML, CSS, JavaScript, and Bootstrap.
  - Implemented full-stack solutions with ASP.NET Core MVC for secure dynamic content.
  - Collaborated with cross-functional teams to deliver projects on time and improve user engagement.
]

#section("Projects", below: 5.7pt)[
  #group[Built at Optimax Software:]

  #project(
    [Visual Quran — Data Visualisation Platform],
    "https://visual.koran.center",
    [Nuxt 4, Vue 3, TypeScript, UnoCSS, Chart.js, Unovis, anime.js],
  )
  - Interactive Quran visualisation platform presenting charts, maps, and network graphs.
  - Leveraged structured datasets and Quran Meta API for scalable data insights.
  - Implemented SEO optimisation, automated testing (Vitest), and type-safe schema validation (Zod).

  #project(
    [Cinoteka — Movie Library Platform],
    "https://cinoteka.com",
    [Nuxt 4, TypeScript, Pinia, Drizzle ORM, Cloudflare Pages],
  )
  - Full-stack movie collection web app with authentication.
  - Built metadata matching, duplicate detection, and privacy-first design for local media files.
  - Deployed to Cloudflare Pages with secure state management and persistent user data.

  #project(
    [Sozler.im — Quote Sharing Platform],
    "https://www.sozler.im",
    [Vue 3, TypeScript, UnoCSS],
  )
  - Responsive quote-sharing platform with scalable component architecture.
  - Collaborated on feature development and performance optimisation for enhanced UX.

  #v(9.3pt)
  #group[Other Projects:]

  #project(
    [Dr. Andrews Plastic Surgery — Simulation Tool],
    "https://github.com/aligu7/daps_simulation",
    [Nuxt 4, Vue 3, UnoCSS, Firebase],
  )
  - Freelance: full-stack website and patient simulation tool for a plastic surgery practice in Iowa, delivered remotely in two weeks.
  - Implemented real-time visualisations, improving patient engagement and workflow.

  #project(
    [Post-App — Social Networking Application],
    "https://postapp-v1.web.app/",
    [Vue 3, Firebase, UnoCSS],
  )
  - Full-stack social networking application with real-time updates and dynamic content.
  - Integrated secure user authentication and intuitive UI components for better engagement.

  #project(
    [Vagif Guliyev’s Website — Personal Portfolio],
    "https://guliyev.com",
    [Nuxt 4, Vue 3, Nuxt Content CMS],
  )
  - Dynamic personal portfolio website with responsive design and SEO optimisations.
  - Showcases projects and interactive features for personal branding.
]

#section("Testimonials", below: 4.2pt)[
  #link("https://www.linkedin.com/in/aligu/details/recommendations/")[My LinkedIn Recommendations:]
  - _”To work with Ali for our Iowa plastic surgery practice has been an absolute game-changer. We needed a robust full-stack website that would articulate all of our services and offer a safe and convenient way for our patients to engage with them. Ali did all this and much more within just two weeks!#"..."”_

    #align(right)[_— Aidan Andrews, MS Computer Science Candidate, Entrepreneur and Researcher at UIUC_#h(1.28pt)] // \textit's italic correction
]

#section("Certifications", below: 4.8pt)[
  *IELTS – Overall Band Score: 7.0 (Speaking 8.0)* #h(1fr) British Council, 2025
]

#section("Languages", below: 6.9pt, indent: 0.3cm)[
  #pad(left: 6pt, grid(
    columns: 2,
    column-gutter: 12pt,
    [#bullet~*English*: Fluent], [#bullet~*Russian*: Native],
    [#bullet~*Azerbaijani*: Native], [#bullet~*Turkish*: Native],
  ))
]

#section("Additional Information", below: 4.7pt)[
  Driving Licence – Categories B, B1 (Azerbaijan)
]
