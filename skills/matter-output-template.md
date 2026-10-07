# Matter Output Template — Main Client Deliverable

READ /skills/brand-guidelines.md BEFORE USING THIS TEMPLATE.
This template defines the structure for Matter_[Client]_[YYYY-MM-DD].html —
the primary Matter output that fuels the client conversation.

---

## PURPOSE

Matter_[Client].html is the main deliverable. It combines:
- The diagnostic heatmap (visual, scored)
- Commercial exposure (value at risk per stage)
- Growth territories (where to act)
- The conversation (session design and next steps)

This file may be shared with the client's senior team before, during, or after a session.
It must meet the same standard as any premium Accenture Song client output.

---

## TAB STRUCTURE

Cover page (default — not a nav tab)
Tab 1 — [Heatmap tab label: derived from diagnostic headline]
Tab 2 — [Commercial tab label: derived from commercial headline]
Tab 3 — [Growth tab label: e.g. "Where to Act"]
Tab 4 — [Conversation tab label: e.g. "The Conversation"]

Tab labels must be narrative positioning titles, not section names. They must compel
the client to click. Derive them from the diagnostic's most compelling findings.

Good: "Where O2's Trust Is Eroding" (not "Diagnostic Heatmap")
Good: "£73M on the Line" (not "Commercial Exposure")
Good: "Three Moves That Matter" (not "Growth Territories")
Good: "Starting the Conversation" (not "Session Design")

---

## HTML DOCUMENT STRUCTURE

### Radio inputs (first children of `<body>`)

```html
<input type="radio" name="tabs" id="r-cover" class="tab-radio" checked>
<input type="radio" name="tabs" id="r-s1" class="tab-radio">
<input type="radio" name="tabs" id="r-s2" class="tab-radio">
<input type="radio" name="tabs" id="r-s3" class="tab-radio">
<input type="radio" name="tabs" id="r-s4" class="tab-radio">
```

CSS visibility rules (from brand-guidelines.md):
```css
#r-cover:checked ~ .page #cover { display: flex; flex-direction: column; justify-content: flex-end; }
#r-s1:checked ~ .page #s1 { display: block; }
#r-s2:checked ~ .page #s2 { display: block; }
#r-s3:checked ~ .page #s3 { display: block; }
#r-s4:checked ~ .page #s4 { display: block; }
#r-s1:checked ~ nav label[for="r-s1"] { border-bottom-color: #A100FF; color: #fff; }
#r-s2:checked ~ nav label[for="r-s2"] { border-bottom-color: #A100FF; color: #fff; }
#r-s3:checked ~ nav label[for="r-s3"] { border-bottom-color: #A100FF; color: #fff; }
#r-s4:checked ~ nav label[for="r-s4"] { border-bottom-color: #A100FF; color: #fff; }
```

---

## COVER PAGE

The cover is the first thing the client sees. It must stop them in their tracks.

### Requirements
- Background: `linear-gradient(135deg, #1A0040 0%, #0A0B14 100%)`
- The headline must be a provocation — a sharp, specific claim that names the client's
  biggest CX risk or the opportunity they are missing
  WRONG: "[Client] CX Diagnostic — Accenture Song"
  RIGHT: "O2's Strongest CX Risk Sits Where Its Identity Was Built — Trust and In-Life Experience"
  RIGHT: "The Price Rise Controversy and In-Life Failures Are Burning Real Money"
- The total value-at-risk range must be visible on the cover, as a large, prominent callout
- Client name clearly identified
- Date and "Accenture Song" attribution
- Accenture white logo (../../skills/Acc_Logo_All_White_RGB.png) at the top left

### Cover content structure
```html
<div id="cover" class="cover">
  <div style="padding: 20px 44px; margin-bottom: auto;">
    <img src="../../skills/Acc_Logo_All_White_RGB.png" alt="Accenture" height="22"
         onerror="this.outerHTML='<span style=\'color:#A100FF;font-weight:700;\'>Accenture</span>'">
  </div>
  <div style="padding: 0 44px 48px;">
    <div class="cover-eyebrow">Matter Diagnostic — [Client Name]</div>
    <h1 class="cover-headline">[The headline provocation — specific to this client's biggest finding]</h1>
    <div class="cover-value">£[X]–[Y]M total value at risk across [N] CX stages</div>
    <div style="height: 1px; background: #1E2040; margin: 24px 0;"></div>
    <div class="cover-meta">[Date] &nbsp;|&nbsp; Accenture Song</div>
  </div>
</div>
```

---

## TAB 1 — DIAGNOSTIC HEATMAP

### Section header
```html
<div class="section-header">
  <h2>[The heatmap headline — the primary diagnostic finding in one line]</h2>
  <p>[1-sentence context — what the heatmap reveals and why it matters]</p>
</div>
```

### Content
1. **Heatmap grid** (full stage × dimension table using `.heatmap` CSS class)
   - All risk badges colour-coded
   - Stage names in left column
   - Overall risk and value-at-risk in right columns
   - The heatmap is the centrepiece — give it maximum width
   
2. **Stage summary cards** (one per CX stage, below the table)
   - Stage name, overall risk badge, headline finding, opportunity statement
   - HIGH risk stages first

3. **Diagnostic context** (brief section below stage cards)
   - 2–3 sentences from the Heatmap Notes in diagnostic-heatmap.md
   - The overall narrative of what the heatmap reveals

---

## TAB 2 — COMMERCIAL EXPOSURE

### Section header
```html
<div class="section-header">
  <h2>[Commercial headline — named around the primary exposure, e.g. "£73M on the Line"]</h2>
  <p>[1-sentence context]</p>
</div>
```

### Content
1. **Exposure stat bar** (top of section)
   - Total value at risk: large `stat-value` in #C084FC
   - Number of HIGH risk stages: stat block
   - Time horizon: "per year" or "over [N] years"

2. **Stage-level exposure cards** (`.commercial-card`, one per HIGH/MEDIUM stage)
   - Stage name, primary commercial mechanism, value range, confidence badge
   - Stage cards ordered HIGH → MEDIUM

3. **Upside opportunity block**
   - Distinct visual style — use `.quick-win-card` (green border) or a lighter purple surface
   - What the client could gain by acting
   - Same range format as exposure figures

4. **CFO-attack summary**
   - In a `.placeholder`-style block but styled amber/gold (not warning red)
   - "These figures have been stress-tested. The key assumptions that require validation are..."

5. **Assumptions register** (dark compact table at bottom of section)

---

## TAB 3 — GROWTH TERRITORIES

### Section header
```html
<div class="section-header">
  <h2>[Growth territory headline — e.g. "Three Moves That Change the Trajectory"]</h2>
  <p>[1-sentence framing of what this section contains]</p>
</div>
```

### Content
1. **Territory cards** (`.territory-card`, one per growth territory — 3 to 5)
   
   Each card must contain:
   - Territory number and name (eyebrow: "TERRITORY 01")
   - Headline provocation (bold, 1 line — this is the thing that should land in the room)
   - What we found (2–3 sentences from the diagnostic evidence)
   - Commercial opportunity (the upside, quantified with range)
   - Recommended first move (1 concrete action, 1 sentence)
   - CX stages this relates to (tags or chips)

   Order: highest commercial opportunity first.

2. **Quick wins** (`.quick-win-card`, 2–3 items)
   - Distinct section divider: "Quick Wins — What [Client] Can Do in the Next 30 Days"
   - One card per quick win: what it is, why it's quick, expected outcome, who owns it
   - Green left-border — visually separate from main territories

---

## TAB 4 — THE CONVERSATION

### Section header
```html
<div class="section-header">
  <h2>[Session headline — e.g. "How We Start the Conversation"]</h2>
  <p>[1-sentence framing]</p>
</div>
```

### Content
1. **Recommended session format**
   - Format (e.g. "2-hour executive workshop"), suggested attendees, setting
   - A single `.territory-card`-style block

2. **Agenda** (step-flow layout)
   - Each agenda item as a `.step` component (from brand-guidelines CSS)
   - Time, topic, facilitation intent (what the discussion should achieve)
   - Questions designed to provoke, not inform

3. **Key questions** (for each territory)
   - The 2–3 questions to leave the client with after each territory section
   - Styled as pull-quote blocks or highlighted cards

4. **Objection handling** (compact dark table)
   - Potential objection | How to handle it

5. **Pre-read recommendation**
   - Which tabs/sections to share with the client before the session (and which to hold back)

---

## FOOTER (on all tabs)

```html
<footer class="footer">
  <span>Matter — [Client Name] — [YYYY-MM-DD] — Accenture Song</span>
  <img src="../../skills/Acc_Logo_All_White_RGB.png" alt="Accenture" height="18"
       onerror="this.outerHTML='<span style=\'color:#555;\'>Accenture</span>'">
</footer>
```

---

## CONTENT QUALITY BAR

Before saving Matter_[Client].html, verify:

- [ ] Cover headline is a specific provocation — not a generic title
- [ ] Total value-at-risk range is visible on the cover
- [ ] Every heatmap cell has content — no empty cells
- [ ] Risk badges are colour-coded (red H, amber M, green L)
- [ ] Commercial figures are all ranges — no single point estimates
- [ ] CFO-attack section is present and substantive
- [ ] Territory headlines are provocations, not category names
- [ ] Quick wins section is present with ≥ 2 items
- [ ] Session agenda is structured around discussion, not presentation
- [ ] No placeholder text is present in client-facing sections (use ⚠️ PLACEHOLDER where needed)
- [ ] No JavaScript anywhere — pure CSS tab switching
- [ ] File opens as standalone HTML with no broken references
- [ ] Logo renders or fallback text is present

---

## PLACEHOLDER FORMAT

Where content is missing, use:
```html
<div class="placeholder">
  ⚠️ [PLACEHOLDER: description of what's needed and why it matters]
</div>
```

Do NOT leave sections empty. Every tab must have content or a clearly marked placeholder.
