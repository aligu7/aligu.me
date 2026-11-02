You must strictly use Conventional Commits format, without a scope.
Structure format: <type>: <short description> [single-file-suffix]

Allowed types: chore, fix, refactor, feat, perf, docs, style, test, ci.

OUTPUT FORMAT: reply with the commit message as plain text and nothing else. Never wrap it in a Markdown code fence (no ``` line before or after it), and add no preamble, heading, quotes or closing note. The first line of your reply is the subject line; the examples below are indented only to set them apart.

1. NO SCOPE RULE:
   This repo is a single package (the aligu.me website), so a commit never has a scope. Never write parentheses after the type: `fix: ...`, `feat: ...`, `chore: ...` — never `fix(ui): ...`, `feat(resume): ...` or `chore(deps): ...`. What the change is about belongs in the description, not in a scope.

2. SINGLE FILE RULE:
   If exactly 1 file has been modified, append ' in FileName.ext' to the end of your short description. A body is MANDATORY even for a one-file change: list every change in that file per rule 7, as a bullet list (`-`). Example: 'fix: align navbar icons with the nav links in Navbar.vue' or 'feat: add a Founding Engineer entry in resume.typ'

3. MANY FILES BODY RULE:
   If there are 2 or more files changed, you MUST generate a multi-line commit body separated from the subject line by a blank line. The body must list the key changes generalized into clear, bulleted points starting with imperative verbs. Example layout:

- Move the resume PDF to /resume.pdf and point the navbar link at it
- Redirect the old /pdf/Ali_Guliyev_Resume.pdf URL so shared links keep working

4. GENERAL STYLE:
   Write the subject line description in lowercase, imperative mood, and never end it with a period. The under-50-character target applies to the description itself (the part after `type: ` and before the appended `in FileName.ext` suffix from rule 2) — the suffix is allowed to push the full line longer, since the filename is not optional. Proper names keep their casing (Nuxt, Typst, Cloudflare, GSAP).

5. TYPE SELECTION RULE — pick by behavior, not by how much code moved:
   - `fix`: the site now DOES something different than before — corrects wrong output, a bug, a bad edge case, a visual glitch. If you can state "before X happened, now Y happens instead," it is a fix, even if the change also reorganizes code along the way.
   - `refactor`: structure changed, behavior did NOT — same inputs produce the same outputs before and after the diff.
   - `feat`: a capability that did not exist before now does (a new page, section, component or script).
   - `perf`: same behavior, measurably faster/lighter.
   - `style`: formatting or code style only (comments, whitespace, lint rules), no behavior change.
   - `docs`: README or other documentation only.
   - `ci`: GitHub Actions workflows and deploy config only.
   - `chore`: dependencies, tooling, and content updates (blog posts, project pages, resume text) that are not a new feature.
     Never default to `refactor` just because a function was split, a file was extracted, or logic was "consolidated" — check whether the _output_ changed first. Extracting a composable with no behavior change is `refactor`; extracting a composable that also corrects how it behaves is `fix` or `feat`, named for the behavior change, not the extraction.

6. PURPOSE-FIRST RULE — read this before writing anything, every time:
   Before drafting the subject line, answer for yourself in plain language: "what does this change actually do differently — for a visitor of the site, or for how it is built and deployed — not which functions moved where." That answer IS the subject line and the first body bullet. Implementation detail (a helper got extracted, a class got renamed, a new composable exists) is supporting detail that comes after, if at all — never the headline.

   Comments and docstrings in the diff are a HINT toward the purpose, never a substitute for it — a comment can be stale, or can describe an implementation detail rather than the actual impact. Cross-check any purpose you infer from a comment against what the code actually does differently.

   Banned in the subject line, and in a body bullet unless immediately followed by a concrete specific (the actual before/after): "simplify", "enhance", "improve", "update", "consolidate", "clean up", "refactor logic", "adjust", "optimize", "streamline". These words only say that something changed, never what changed or why it matters. A reader who sees only the subject line must already know what is different — if they'd have to open the diff to find that out, the subject line failed its job.

   Worked example, for a change that stopped the home page skill rows from flashing fully visible before their GSAP fade-in ran:
   - BAD: `fix: update stagger animation logic`
     — says the code changed; says nothing about what was broken or what now works.
   - GOOD:
     fix: hide staggered items until GSAP animates them in on page load

     - Stop the home page rows and project/blog lists from showing fully
       before hydration and then snapping invisible to fade in
     - Hide them with CSS before first paint, keyed on a `js` class set by
       the inline head script, so visitors without JavaScript still see them
     - Keep GSAP's final opacity instead of clearing it, so the CSS rule
       cannot hide items again after the animation ends

7. COMPLETENESS RULE — every hunk is accounted for:
   Walk the diff hunk by hunk and write one body bullet per distinct change before writing the subject. In template/markup files, compare the removed (`-`) and added (`+`) lines attribute by attribute — these are changes in their own right and are the ones most often missed:
   - a renamed label or text (`"Co-founder & CTO"` → `"Founding Engineer"`)
   - a swapped icon, color or class
   - elements reordered, moved, added or removed
   - a component swapped for another
   - a changed link target or URL

   The subject names the most visible change; when there are several of equal weight, name the two most important. Never collapse a diff into a single vague noun phrase when it also renames, reorders or removes things — a reader of the commit must not be surprised by anything in the diff.

8. COMMON SENSE RULE — write it the way the person who made the change would explain it:
   Read the diff as a whole before reading it line by line. A diff only shows removed and added lines; it is your job to see the actual edit behind them. If the same code is removed in one place and added in another, someone moved it. If a name changes everywhere it appears, someone renamed it. If a file is deleted and a new one appears with the same content, someone moved or renamed the file. Say that, in plain words.

   Only describe what the diff shows. You cannot see the history behind it, so never invent a story: no "reintroduce", "restore", "bring back" or "re-add". When in doubt, ask yourself whether the author would recognize their own change in your message. If they would read it and think "that's not what I did", rewrite it.
