## Lovable Integration

_This chapter shows how to feed the Connected Health design‑system into_ **_Lovable.dev_** _so both humans and the AI assistant can ship UI and copy changes confidently and consistently._

---

### Knowledge File
Lovable’s **Knowledge File** is the “project brain” that is automatically supplied with every AI prompt. Keeping it short, current, and source‑controlled prevents outdated guidance and duplicate work.

```
.lovable/
├── knowledge.md   # ← single source of truth for Lovable
└── changelog.md   # optional – track updates separately
```

**Recommended headings (in order)**

|#|Heading|What to include|Where it lives today|
|---|---|---|---|
|1|Product Vision|One‑sentence “why” + business goal|Strategy deck / README|
|2|Personas & Journeys|Audience snapshot (§ 1.2) + key flows|Style Guide|
|3|Design System|Tokens (§ 2), Components (§ 4), Patterns (§ 5)|Style Guide|
|4|Tech Stack|Tailwind config & repo links (§ 6)|Style Guide|
|5|Open Questions|Running list for team + AI|Backlog / Slack|

> **Tip — automate sync**: a small Git pre‑commit hook can rebuild `knowledge.md` from Figma or Markdown sources so it never drifts.

---

### Prompt Conventions
Lovable works best with clear, role‑scoped prompts that tackle **one task at a time**.

#### Feature‑breakdown template

```
**Role:** Front‑End Engineer working on Connected Health
**Goal:** Implement the “Progress Ring” component using existing design tokens
**Files to edit:** components/ProgressRing.js, styles/globals.css
**Acceptance:** Pass ESLint; animate on scroll; colours from `ch‑blue` scale
**Context:** Knowledge File › Design System › Component Patterns › Progress Indicators
```

#### Guard‑rail examples
- Do **not** change the public API of existing components.
- Keep bundle‑size delta under **2 KB**.
- The top bar must use <header class="site-header bg-white"> containing one <nav>.  
  Do **not** apply gradients or additional background utilities to either element.
- Section backgrounds may use **only** these utilities: 
  `bg-gradient-warm-x`, `bg-white`, `bg-warm-10`, or `bg-warm-50`.
- **Never** combine `bg-gradient-warm-x` with `bg-gradient-to-*`, `from-*`, or `to-*`.

Place guard‑rails at the end of the prompt so they are top‑of‑mind when the AI plans the diff.

---

### Visual Edit vs Dev Mode
Lovable offers two editing surfaces:

|   |   |   |
|---|---|---|
|Task type|Visual Edit|Dev Mode|
|Adjust spacing, colours, or text|✅|—|
|Refactor logic / add props|—|✅|
|Fix a small typo|✅|—|
|Rename or move files|—|✅|

_Visual Edit_ writes class‑level diffs back to JSX automatically. For structural or stateful changes, switch to **Dev Mode** so you can stage, test, and commit using the normal Git workflow.

> **Accessibility check**: after any Visual Edit, run the built‑in contrast checker and verify keyboard focus order.

---

### Versioning & GitHub Workflow

1. **Connect the repo** – Lovable › Settings › Integrations › GitHub.
2. **Branch naming** – `feat/{ticket}` for features, `fix/{ticket}` for hot‑fixes.
3. **Semantic tags** – tag releases `v1.4.0`, `v1.4.1` so Lovable rollbacks are deterministic.
4. **Lock tokens** – treat `/tokens/*.json` as protected; PRs touching them require design‑lead review.
5. **Environment vars** – keep `.env.example` updated; Lovable propagates secrets on deploy but _not_ on forks.
6. **CI previews** – use a GitHub Action such as `lovable-preview.yml` to spin up preview URLs per PR.

---

### Quick‑Reference Cheat Sheet

|   |   |   |
|---|---|---|
|Goal|Best Tool|One‑liner Prompt|
|Change primary button colour|Visual Edit|“Select primary button → change background to `ch‑green‑600`.”|
|Generate new FAQ page|Dev Mode|“Scaffold `pages/faq.js` using Next.js; pull questions from Knowledge File › FAQ.”|
|Sync design tokens|CLI / Git|`npm run export:tokens`|

---

### Maintenance Checklist

> **Next step**: add this file to `docs/lovable-integration.md` (or `.lovable/knowledge.md`) and link it from the main Style Guide table of contents.
