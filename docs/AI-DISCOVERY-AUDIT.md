# M2M AI Discoverability + Entity Authority — Scope and Audit (v2)

Site: model2message.net (Model 2 Message / M2M~Inc.)
Audit v2 date: 2026-09-11
Status: RECONCILIATION REPORT + AUDIT v2. Implementation is on hold pending canonical source access.

---

## 0. Reconciliation report

| Item | Value |
|---|---|
| LOCAL REPO PATH | `/home/user/drivenbydesign1-tech` |
| LOCAL REMOTE | `https://github.com/drivenbydesign1-tech/drivenbydesign1-tech` (this is the repository the session was opened on) |
| CANONICAL REMOTE (per owner) | `https://github.com/Kali-Dedwen/drivenbydesign1-tech` — visible in the account's repo list (last push 2026-09-10), **not attached to this session and not readable from it** (cross-owner attach refused; session scope forbids reading it) |
| LOCAL BRANCH | `claude/determined-galileo-9ggt92` |
| LOCAL HEAD | `575b67e` — docs-only commit (audit v1) on top of `1b86fc3` |
| ORIGIN/MAIN HEAD | `1b86fc3` — "feat: full M2M site — 10 pages, router, infra", 2026-03-28, author Kali D. Remote last pushed 2026-03-29. |
| LOCAL STATUS | Clean. Only untracked files are Linux npm binaries under `node_modules/` from a local `npm install` (never to be committed). |
| AHEAD/BEHIND | 1 ahead / 0 behind `origin/main` of the attached (stale) remote |
| MISSING TRACKED FILES | None (`git ls-files --deleted` is empty). The checkout matches its remote exactly. |
| BROKEN IMPORT | `src/App.jsx:10` imports `./pages/crib-network`; no such file is tracked. Route `/crib-network` is declared at `src/App.jsx:25`. |
| BROKEN IMPORT PRESENT ON CANONICAL MAIN | On `drivenbydesign1-tech/drivenbydesign1-tech` main: **YES**. On `Kali-Dedwen/drivenbydesign1-tech` main: **UNVERIFIED** (not readable from this session). |

### 0.1 File-by-file comparison against `origin/main` of the attached remote

| File | Local | `origin/main` (attached remote) | Canonical `Kali-Dedwen` main | Classification |
|---|---|---|---|---|
| `index.html` | absent | absent | Present per owner (title, description, canonical `https://www.model2message.net/`, OG, Twitter, Organization JSON-LD, four systems) | LOCAL CHECKOUT ISSUE — stale repository, not a gap |
| `public/robots.txt` | absent | absent | Present per owner (allows crawling; blocks `/portal`, `/sovereign`, `/dashboard`, `/pivot-dashboard`, `/engine`, `/auth/`, `/api/`; declares sitemap) | LOCAL CHECKOUT ISSUE |
| Sitemap source / generator | absent | absent | Present per owner (existing tooling) | LOCAL CHECKOUT ISSUE |
| `llms.txt` or generator | absent | absent | Unknown | UNVERIFIED — check on canonical main |
| `scripts/prerender.mjs` | absent | absent | Present per owner | LOCAL CHECKOUT ISSUE |
| `scripts/canonicalize-public-metadata.mjs` | absent | absent | Present per owner | LOCAL CHECKOUT ISSUE |
| `package.json` | `dev` / `build` / `preview` only; react, react-dom, react-router-dom, vite | identical | Unknown (expected to carry prerender/canonicalize scripts) | LOCAL CHECKOUT ISSUE |
| `src/main.jsx` | `createRoot(...).render(...)`, no hydration | identical | Unknown (a prerender pipeline normally hydrates) | UNVERIFIED |
| Router (`src/App.jsx`) | `BrowserRouter`, 10 routes, imports missing `crib-network` | identical | Unknown | UNVERIFIED |
| `src/pages/crib-network.jsx` | absent | absent | Unknown | UNVERIFIED |

Conclusion: every "missing machine layer" finding in audit v1 (Part A5) is a **LOCAL CHECKOUT ISSUE**. The attached repository is a March snapshot that predates the canonical work. Nothing in v1's technical findings may be treated as a gap on canonical main until it is checked there.

### 0.2 What this session can and cannot do

- Can: audit and rewrite the copy in the ten page files that exist here, and hand over the audit and voice standard.
- Cannot: read, diff, or push to `Kali-Dedwen/drivenbydesign1-tech`. The attach tool refuses cross-owner repositories in a session opened on another owner's repository. A new session started on `Kali-Dedwen/drivenbydesign1-tech` is required to reconcile and implement.
- Note: the page copy audited below is the March snapshot. Canonical page files may already differ. Each copy finding must be re-checked against the canonical page file before it is rewritten.

---

## Part A — Scope (unchanged from v1, restated for completeness)

### A1. Purpose

M2M must be highly discoverable by AI tools while still sounding unmistakably human. The human-facing prose is authoritative. The machine layer supports the human story and never replaces it.

### A2. Two tests that define done

HUMAN TEST: A person immediately understands what M2M does and feels that a real organization is speaking to them.

MACHINE TEST: An AI system can accurately identify, distinguish, summarize, and cite Model 2 Message, its founder, its category, and its core systems.

### A3. Architecture lock (closed, do not reopen)

Category: Work Redesign + Organizational Intelligence

Hero:
Redesign the Work.
Ready the People™.
Build What's Next.

Public architecture:
- PIVOT OS™ — Person
- BRIDGE OS™ — Workforce / Business
- Human OS™ — Institution
- M2M Intelligence — Learning + Evidence

Any public copy that presents Human OS™ as the umbrella is OUTDATED COPY and is corrected during the humanization pass.

Entities that must read the same way in visible copy, metadata, schema, prerendered text, and llms.txt:
Model 2 Message / M2M~Inc. · Work Redesign + Organizational Intelligence · Dr. Kevin A. Smith · PIVOT OS™ · BRIDGE OS™ · Human OS™ · M2M Intelligence · Ready the People™

### A4. Machine layer (AI discovery rule)

Machine-facing clarity comes through Schema.org JSON-LD, canonical metadata, clean semantic HTML, prerendered content, sitemap freshness, llms.txt, crawler policy, and clear entity relationships. Awkward search phrases are never forced into visible copy.

### A5. HUMANIZATION PASS (added to scope, mandatory)

Every indexable public page is audited and rewritten so that it states what M2M is, does, who it helps, how the work feels, what outcome it creates, and why the distinction matters; speaks in affirmative language; removes rhetorical "X, not Y" and correction-first constructions; preserves legal, compliance, security, and factual boundaries; and sounds clear, warm, intelligent, confident, grounded, conversational, executive-ready, emotionally recognizable, and distinctly M2M.

Answer-engine rule: for "What is M2M?", "What is Work Redesign?", "What is PIVOT OS?", "What is BRIDGE OS?", "What is Human OS?", and "How does M2M approach AI and workforce change?", the first sentence is a short affirmative answer. The method follows. No answer begins with what M2M is not.

---

## Part B — Audit v2 findings, classified

Classes: CONFIRMED ON CANONICAL MAIN · LOCAL CHECKOUT ISSUE · OUTDATED COPY · ACTUAL TECHNICAL GAP · HUMANIZATION GAP · NO CHANGE NEEDED · UNVERIFIED (must be checked on canonical main before it can be placed in one of the six classes)

### B1. Technical findings

| # | Finding | Class |
|---|---|---|
| T1 | No `index.html`, no metadata, no canonical, no OG/Twitter, no JSON-LD in the attached checkout | LOCAL CHECKOUT ISSUE |
| T2 | No `public/robots.txt` in the attached checkout | LOCAL CHECKOUT ISSUE |
| T3 | No prerender, sitemap, or canonicalize tooling in the attached checkout | LOCAL CHECKOUT ISSUE |
| T4 | No `llms.txt` in the attached checkout | UNVERIFIED (owner did not list it among the confirmed canonical files) |
| T5 | `src/App.jsx` imports a `crib-network` page that does not exist; Vite build fails | CONFIRMED on the attached remote's main; UNVERIFIED on canonical main |
| T6 | `node_modules/` (2,304 files, Windows-only esbuild/rollup binaries) is committed | CONFIRMED on the attached remote's main; UNVERIFIED on canonical main |
| T7 | Host consistency: owner states canonical is `https://www.model2message.net/`; visible page copy, footer links, and `mailto`/contact text use the apex `model2message.net`. Sitemap `loc`, JSON-LD `url`/`@id`, OG `url`, and the canonical tag must all use one host, and the other host must 301 to it. | UNVERIFIED — check on canonical main and at the edge (Vercel domain redirect) |
| T8 | Per-route metadata: a single `index.html` title/description serves every SPA route unless the prerender/canonicalize step writes per-route `<title>`, description, canonical, and OG. Confirm `/pivot-os`, `/bridge-os`, `/human-os`, `/about`, `/speaking`, `/contact`, `/project-check`, `/fuse-network` each ship their own. | UNVERIFIED |
| T9 | Entity graph: confirm canonical JSON-LD links Organization → founder (Person with `@id`), Organization → the four systems (each a `Service`/`Product` node with `@id`), and the category as a defined term, rather than only a flat Organization node. | UNVERIFIED |
| T10 | Certification language: owner reports canonical `index.html` says SDVOSB / SDVBE / DOBE; the page copy audited here says SDVOSB · VBE (and the Human OS page spells out "VBE — Veteran Business Enterprise"). Metadata and visible copy must carry the same certifications in the same words. | OUTDATED COPY (visible pages) pending confirmation of the canonical list |
| T11 | `vercel.json` rewrites everything to `/index.html`. Prerendered route files and `robots.txt`/`sitemap.xml`/`llms.txt` must be served from the filesystem before that rewrite. | UNVERIFIED |
| T12 | `public/robots.txt` blocks `/portal`, `/sovereign`, `/dashboard`, `/pivot-dashboard`, `/engine`, `/auth/`, `/api/` per owner. Confirm the sitemap excludes those paths and that none of them is linked from public pages. | UNVERIFIED |

No finding can currently be placed in ACTUAL TECHNICAL GAP. T4 and T7–T12 are the candidates to verify first in a session opened on canonical main.

### B2. Copy findings — page by page (audited on the March snapshot; re-check each against the canonical page file before rewriting)

Classification key for copy: OUTDATED COPY (architecture or positioning superseded) · HUMANIZATION GAP (negation, correction-first, robotic, or over-technical prose) · NO CHANGE NEEDED

#### Homepage (`src/pages/index.jsx`)

| Location | Current copy | Class | Note |
|---|---|---|---|
| Hero eyebrow | "The Sovereign Architect Platform" | OUTDATED COPY | Category eyebrow: Work Redesign + Organizational Intelligence. |
| Hero h1 | Rotating "Built for VETERANS / … Who Refuse to Stay Stuck." | OUTDATED COPY | Closed hero: Redesign the Work. Ready the People™. Build What's Next. |
| Hero subhead | "…delivering the Human OS™ platform — a proven system that converts human potential into measurable organizational performance." | OUTDATED COPY + HUMANIZATION GAP | Human OS as umbrella; boilerplate phrasing. |
| Hero card | "Human OS™ Platform · Three Lanes. One System." | OUTDATED COPY | Four systems, one category. |
| Proof strip | "3 Platform Lanes", "12+ Sectors Served" | OUTDATED COPY | Four systems; "12+ sectors" unsupported on page. |
| Platform headline | "Three Operating Systems. One Human Architecture." | OUTDATED COPY | |
| PIVOT OS card | "A structured system, not a motivational speech." | HUMANIZATION GAP (X, not Y) | |
| BRIDGE OS card | "Built for retention, not replacement." | HUMANIZATION GAP (X, not Y) | |
| Human OS card | "The full M2M Composure Architecture™ deployed across teams, agencies, and institutions…" | OUTDATED COPY + HUMANIZATION GAP | Architecture-document tone; umbrella framing. |
| M2M Intelligence | absent | OUTDATED COPY | Fourth system missing. |
| Work Redesign | absent | OUTDATED COPY | Category and method missing. |
| Founder section | "Behavioral systems architect. Keynote speaker. The platform is built from lived experience…" | HUMANIZATION GAP (fragmented, label-style) | |
| Founder quote | "The Human OS™ doesn't create potential — it reveals what was already there." | HUMANIZATION GAP (rhetorical negation) | |
| CTA h2 | "The Ground Is Moving. Are You Pivoting With It?" | HUMANIZATION GAP (pressure framing) | |
| CTA sub | "…which lane of the Human OS™ platform…" | OUTDATED COPY | |
| Nav | `#speaking` anchor has no target on the page | HUMANIZATION GAP (broken path for the reader) | |
| Footer trademark line | "PIVOT OS™ · BRIDGE OS™ · Human OS™ · M2M Composure Architecture™ are pending trademarks." | NO CHANGE NEEDED (legal) — add Ready the People™ only if the owner confirms its status | |

#### PIVOT OS™ (`src/pages/pivot-os.jsx`)

| Location | Current copy | Class |
|---|---|---|
| Hero h1 | "You Didn't Come This Far to Stay Here." | HUMANIZATION GAP (negation headline) |
| Hero sub | "This is not career coaching. This is a behavioral operating system built for the pivot." | HUMANIZATION GAP (correction-first) |
| For-you list | "…it doesn't account for who you actually are" | HUMANIZATION GAP |
| For-you list | "You need a system — not a pep talk, not a resume refresh, not a LinkedIn audit" | HUMANIZATION GAP (X, not Y ×3) |
| Process h2 | "Four Phases. One System. No Shortcuts." | HUMANIZATION GAP |
| Process sub | "…built from real transition data, not motivational frameworks." | HUMANIZATION GAP (X, not Y) |
| C.A.L.M.™ | "…replaces reactive decision-making with sovereign execution." | HUMANIZATION GAP (contrast-first) |
| Sully Sequence™ | "…landing under pressure, not panic." | HUMANIZATION GAP (X, not Y) |
| CTA h2 | "The Pivot Isn't the Risk. Staying Is." | HUMANIZATION GAP (negation + pressure) |
| CTA sub | "Forty-five minutes. Structured. No pitch." | HUMANIZATION GAP |
| Nav back | "← All Platforms" | OUTDATED COPY |
| RPA™, Three Spaces™, Evangelist Shift™ descriptions | | NO CHANGE NEEDED beyond light polish (IP names) |
| Footer mark list | | NO CHANGE NEEDED (legal) |

#### BRIDGE OS™ (`src/pages/bridge-os.jsx`)

| Location | Current copy | Class |
|---|---|---|
| Hero sub | "Built for retention and performance — not paperwork and compliance." | HUMANIZATION GAP (X, not Y) |
| Metrics footnote | "…separates workforce transition from workforce transformation." | HUMANIZATION GAP (contrast-first) |
| Metrics panel | 70%, $1.5T, 2×, 60% | UNVERIFIED (unsourced statistics; owner decision, outside humanization) |
| Problem column (5) | "isn't communicated", "never trained", "nobody built the bridge", "skills but not behavior", "paperwork… but not the human cost" | HUMANIZATION GAP (contrast-first pain points; keep the problem/solution structure, rewrite affirmatively) |
| Solution column | "…reduce 90-day turnover by design, not accident" | HUMANIZATION GAP (X, not Y) |
| Solution column | "Human OS™ gives HR teams a systematic model…" | OUTDATED COPY (Human OS inside a BRIDGE OS list as umbrella) |
| SMB service | "Human OS™ Lite — the right-sized version of enterprise workforce strategy" | OUTDATED COPY |
| CTA h2 | "Your Workforce Is Going Through Change Either Way." | HUMANIZATION GAP (pressure framing) |
| CTA sub | "The only question is whether it's managed or absorbed." | HUMANIZATION GAP (contrast-first) |
| Cases | "HubSpot-tracked $325K pipeline in active development" | HUMANIZATION GAP (internal CRM language on a public page) |
| Cases | CRIB Network card references a route that does not exist in this checkout | UNVERIFIED |
| Services (6) | | NO CHANGE NEEDED beyond light polish |

#### Human OS™ (`src/pages/human-os.jsx`)

| Location | Current copy | Class |
|---|---|---|
| Hero sub | "…the full M2M Composure Architecture™ deployed at scale across teams, agencies, and institutions navigating disruption and demanding measurable human performance outcomes." | HUMANIZATION GAP (over-technical) |
| Architecture h2 | "Human OS™ Is the Roof. PIVOT and BRIDGE Are the Floors." | OUTDATED COPY (umbrella) |
| Architecture sub | "…integrates all three operating lanes into a single coherent workforce intelligence system." | OUTDATED COPY |
| Architecture grid | Human OS column labeled "Composure Architecture™ · Organizational behavioral intelligence baseline" | HUMANIZATION GAP (architecture-document tone) |
| Enterprise services (4) | | NO CHANGE NEEDED beyond light polish |
| Certification tiers | Prices, features | NO CHANGE NEEDED (factual offer) |
| GovCon strip | SDVOSB, VBE, SAM.gov, NAICS | NO CHANGE NEEDED (compliance) — align certification list with canonical (see T10) |
| CTA | | NO CHANGE NEEDED |
| Nav back | "← All Platforms" | OUTDATED COPY |

#### About / Founder (`src/pages/about.jsx`)

| Location | Current copy | Class |
|---|---|---|
| Eyebrow | "The Sovereign Architect" | HUMANIZATION GAP (persona label; the entity is Dr. Kevin A. Smith, Founder) |
| Hero sub | "Built the Human OS™ platform from lived experience — not theory." | OUTDATED COPY + HUMANIZATION GAP |
| Story p1 | "…didn't design the Human OS™ platform from a conference room. He built it from the gap…" | OUTDATED COPY + HUMANIZATION GAP (correction-first) |
| Story p2 | "…because the frameworks he built didn't exist anywhere else." | HUMANIZATION GAP |
| Story p3 | "…leads a three-lane workforce intelligence platform…" | OUTDATED COPY |
| Timeline | "Human OS™ Architecture Complete · Full three-lane platform" | OUTDATED COPY |
| Timeline | "Jupiter Return Window · 12-year expansion cycle begins" | HUMANIZATION GAP (fails the human test for an executive reader; owner may keep) |
| Quote | "The Sovereign Architect doesn't wait for permission to build…" | HUMANIZATION GAP (rhetorical negation) |
| Credentials | | NO CHANGE NEEDED (factual) |

#### Speaking (`src/pages/speaking.jsx`)

| Location | Current copy | Class |
|---|---|---|
| Hero sub | "…the audience leaves with a system, not just a story." | HUMANIZATION GAP ("not just") |
| Topic 02 | "…break out without losing what made them great." | HUMANIZATION GAP ("without") |
| Topic 03 | "Human OS™ — Your People Are the Platform" | OUTDATED COPY |
| Topics sub | "Each talk is built on M2M proprietary IP…" | HUMANIZATION GAP (institutional) |
| Topic 01 / signature title | "…in an Age That Won't Stand Still" | NO CHANGE NEEDED (title of a delivered keynote) |
| Formats, inquiry, contact card | | NO CHANGE NEEDED |

#### Contact (`src/pages/contact.jsx`)

| Location | Current copy | Class |
|---|---|---|
| Hero sub | "…no intake coordinators, no holding queues." | HUMANIZATION GAP |
| Lane selector | "Select the platform lane…" (three) | OUTDATED COPY (four systems) |
| Form note | "Responses within 24–48 business hours. Direct to Dr. Smith." | NO CHANGE NEEDED |

#### Project CHECK (`src/pages/project-check.jsx`)

| Location | Current copy | Class |
|---|---|---|
| Badge | "A Human OS™ Initiative" | OUTDATED COPY |
| Grant facts, stakeholders, OJJDP status | | NO CHANGE NEEDED (factual; application pending) |
| Pillars | | NO CHANGE NEEDED beyond light polish |

#### FUSE Network (`src/pages/fuse-network.jsx`)

| Location | Current copy | Class |
|---|---|---|
| Pillar 01 | "…built on Lumbee cultural sovereignty — not external dependency frameworks." | HUMANIZATION GAP (X, not Y) |
| Section sub | "FUSE doesn't impose an outside model on Robeson County." | HUMANIZATION GAP (correction-first) |
| Badge | "A Human OS™ Initiative" | OUTDATED COPY |

### B3. HUMANIZATION FINDINGS

1. The site speaks in correction-first language on every major page. Readers learn what M2M is not (coaching, a pep talk, paperwork, theory, a motivational speech) before they learn what it is.
2. Human OS™ is presented as the umbrella platform on the homepage, the Human OS page, the About page, the Contact page, the Speaking topics, and both community microsites. Classified OUTDATED COPY under the architecture lock.
3. The closed hero and category appear nowhere in the page files audited. The hero is a rotating audience word; the eyebrow is "The Sovereign Architect Platform."
4. M2M Intelligence and Work Redesign appear nowhere in the page files audited.
5. The founder is introduced through a persona label rather than as Dr. Kevin A. Smith, Founder.
6. Several passages read as architecture-document or consulting boilerplate ("converts human potential into measurable organizational performance," "deployed at scale," "behavioral intelligence baseline").
7. There is no answer-engine content on any page.
8. Internal operating language leaks onto public pages ("HubSpot-tracked $325K pipeline," "Jupiter Return Window").

### B4. RHETORICAL NEGATION COUNT (March snapshot pages)

| Category | Count |
|---|---|
| Rhetorical "X, not Y" / "not just" / "isn't" / "doesn't" / "no …" / "without" / contrast-first constructions about M2M or its work | 27 |
| Contrast-first pain-point items (BRIDGE OS problem column) | 5 |
| Total to rewrite | 32 |
| Negations kept on purpose (keynote title "an Age That Won't Stand Still", two occurrences) | 2 |

Pattern tally: "not X" / "X, not Y" 13 · "doesn't/didn't/isn't" 8 · "no …" 4 · "without" 1 · "not just" 1 · contrast-first ("replaces … with", "separates … from", "managed or absorbed", "either way") 4 · pain-point contrasts 5. (Two items carry two patterns.)

### B5. X-NOT-Y EXAMPLES (with the direction of the rewrite)

| Page | Current | Direction |
|---|---|---|
| Home | "A structured system, not a motivational speech." | "A structured system for the next chapter of your career." |
| Home | "Built for retention, not replacement." | "Built so people stay, grow, and perform through change." |
| Home | "The Human OS™ doesn't create potential — it reveals what was already there." | "Every person carries more capacity than they've been given credit for. Our work is to reveal it and give it somewhere to go." |
| PIVOT OS | "This is not career coaching. This is a behavioral operating system built for the pivot." | "PIVOT OS™ is a structured system for redesigning your own work and career." |
| PIVOT OS | "You need a system — not a pep talk, not a resume refresh, not a LinkedIn audit" | "You want a system that changes what you do on Monday morning." |
| PIVOT OS | "The Pivot Isn't the Risk. Staying Is." | "The Next Chapter Is Yours to Build." |
| PIVOT OS | "…built from real transition data, not motivational frameworks." | "…built from real transitions and refined in practice." |
| BRIDGE OS | "Built for retention and performance — not paperwork and compliance." | "Built for retention and performance through change." |
| BRIDGE OS | "…reduce 90-day turnover by design, not accident." | "…are designed to reduce 90-day turnover." |
| BRIDGE OS | "The only question is whether it's managed or absorbed." | "Change is coming to your workforce. We help you lead it with a plan." |
| Human OS | "Human OS™ Is the Roof. PIVOT and BRIDGE Are the Floors." | "Work Redesign + Organizational Intelligence is the category. Human OS™ operates at the institutional level." |
| About | "Built the Human OS™ platform from lived experience — not theory." | "Built M2M from lived experience." |
| About | "…didn't design the Human OS™ platform from a conference room. He built it from the gap…" | "…built M2M from the gap between military service and civilian identity…" |
| About | "The Sovereign Architect doesn't wait for permission to build." | "Assess the terrain. Design the structure. Execute with composure." |
| Contact | "no intake coordinators, no holding queues" | "Every message goes straight to Dr. Smith." |
| FUSE | "FUSE doesn't impose an outside model on Robeson County." | "FUSE builds from community sovereignty outward." |
| Speaking | "…the audience leaves with a system, not just a story." | "…the audience leaves with a story they remember and a system they can use." |

### B6. PAGES NEEDING VOICE WORK (ranked)

1. Homepage — hero, category, four systems, founder, CTA; add Work Redesign explainer, M2M Intelligence, answer-engine FAQ.
2. PIVOT OS™ — ten negations; hero and CTA.
3. Human OS™ — umbrella section; hero.
4. About / Founder — persona label, three negations, timeline cleanup.
5. BRIDGE OS™ — hero, problem column, CTA, two umbrella references.
6. Speaking — two negations, one topic title.
7. Contact — one negation, lane language.
8. FUSE Network — two negations, badge.
9. Project CHECK — badge only.
10. Work Redesign — no page exists in this checkout; verify on canonical whether the category has a canonical page.

### B7. METADATA NEEDING HUMANIZATION

Canonical `index.html` metadata could not be read from this session. Rule to apply when it is: one shared source for entity descriptions, so title, description, OG, JSON-LD, prerendered text, and llms.txt tell the same story in the same tone as the visible page. Draft per-route titles and one-sentence descriptions, in the page voice:

| Route | Title | Description (draft) |
|---|---|---|
| `/` | Model 2 Message · Work Redesign + Organizational Intelligence | Model 2 Message helps organizations redesign how work gets done and prepare people to succeed as technology and organizational needs change. |
| `/work-redesign` (if present) | Work Redesign · Model 2 Message | Work Redesign examines the work itself: what should disappear, become simpler, be automated, be augmented, remain human-led, or be created. |
| `/pivot-os` | PIVOT OS™ · Model 2 Message | PIVOT OS™ helps a person redesign their own work and career, with a structured path from where they are to where they're going. |
| `/bridge-os` | BRIDGE OS™ · Model 2 Message | BRIDGE OS™ helps employers, municipalities, and small businesses redesign work across a workforce and ready their people for the change. |
| `/human-os` | Human OS™ · Model 2 Message | Human OS™ operates at the institutional level, helping enterprises and government agencies redesign work and prepare people at scale. |
| `/about` | Dr. Kevin A. Smith · Founder, Model 2 Message | Dr. Kevin A. Smith is the founder of Model 2 Message, a U.S. Navy veteran, and the architect of PIVOT OS™, BRIDGE OS™, and Human OS™. |
| `/speaking` | Speaking · Dr. Kevin A. Smith | Keynotes and workshops on work redesign, transition, and leading people through change. |
| `/contact` | Contact · Model 2 Message | Start a conversation with Model 2 Message. Every message goes straight to Dr. Kevin A. Smith. |
| `/project-check` | Project CHECK · Model 2 Message | A coordinated reintegration and workforce-readiness model for justice-involved youth in Forsyth County, NC. |
| `/fuse-network` | FUSE Network · Model 2 Message | A government-to-government workforce and economic partnership with the Lumbee Tribe in Robeson County, NC. |

### B8. PRERENDER COPY NEEDING HUMANIZATION

Canonical prerender output could not be read from this session. When it can: the prerendered HTML should be the rendered page itself (one text, one tone). Any prerender-only text (JSON-LD descriptions, llms.txt, canonicalize-script defaults) must be generated from the same entity source as the page metadata, and must carry no umbrella framing of Human OS™ and no correction-first phrasing.

### B9. PROPOSED VOICE STANDARD

M2M speaks like a founder who has done the work and respects the reader's time. Sentences are short and concrete. The subject of the sentence is usually the reader, the work, or the people doing it. M2M says what it does, who it helps, and what changes. Confidence comes from specificity. Warmth comes from noticing what the reader is carrying.

Rules:
1. Affirmative first. Say what M2M is, does, and creates. Comparisons and boundaries come after, and only when they help the reader decide.
2. Start with the work, the people performing it, and the outcome the organization needs.
3. One idea per sentence. A verb in every sentence.
4. Plain nouns over abstractions: "people," "work," "managers," "a plan" over "human capital," "capability uplift," "behavioral layer."
5. Name the four systems consistently: PIVOT OS™ (person), BRIDGE OS™ (workforce / business), Human OS™ (institution), M2M Intelligence (learning + evidence). The category is Work Redesign + Organizational Intelligence.
6. Keep every legal, compliance, certification, and security statement exactly as fact requires. Boundaries are allowed to say "no."
7. Headlines invite. They never threaten or shame.
8. Answer-engine content: the first sentence answers the question; the method follows.
9. Internal language stays internal (CRM pipeline values, planning cycles, persona names).
10. One shared source for entity descriptions, so visible copy, metadata, schema, prerendered text, and llms.txt tell the same story in the same tone.

---

## Part C — Post-implementation report

Not started. Implementation is on hold until a session is opened on `Kali-Dedwen/drivenbydesign1-tech` and the UNVERIFIED items in B1 are resolved against canonical main.
