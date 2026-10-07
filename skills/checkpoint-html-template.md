# Checkpoint HTML Template — Matter Internal Dashboard

READ /skills/brand-guidelines.md BEFORE USING THIS TEMPLATE.
This template defines the structure for Matter_Checkpoint_[Client]_[YYYY-MM-DD].html.
It is an internal team dashboard — not a client deliverable.

---

## PURPOSE

The checkpoint HTML surfaces the full diagnostic phase to the team in one place, before
growth territories are written and the main client deliverable is produced. Its purpose:

1. Give the team a single view of all diagnostic findings before proceeding
2. Enable quick review of the Go Digging task list (who has done what?)
3. Let the team sense-check the heatmap scores and commercial ranges
4. Identify any course corrections before the growth territories are locked in

This file is INTERNAL ONLY. Quality standards are high (it may be shared with a senior
partner), but it does not need to meet the visual standard of the client-facing output.

---

## TAB STRUCTURE

Tab 1 — Research Brief (content from research-brief.md)
Tab 2 — Go Digging (content from go-digging-tasks.md)
Tab 3 — Heatmap (full scoring table from diagnostic-heatmap.md)
Tab 4 — Commercial (content from commercial-exposure.md)

---

## HTML STRUCTURE

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Matter Checkpoint — [Client Name]</title>
<style>
/* PASTE FULL CSS FROM brand-guidelines.md HERE */
/* Add these checkpoint-specific overrides: */

.checkpoint-banner { background: #1A0D2E; border-left: 4px solid #A100FF; padding: 14px 28px;
  font-size: 0.75rem; color: #A0A0BC; display: flex; align-items: center; justify-content: space-between; }
.checkpoint-banner strong { color: #C084FC; }

.go-digging-table { width: 100%; border-collapse: collapse; font-size: 0.78rem; }
.go-digging-table th { background: #0D0E1A; color: #6B6B8A; padding: 8px 12px; text-align: left;
  font-size: 0.63rem; letter-spacing: 0.08em; text-transform: uppercase; }
.go-digging-table td { padding: 10px 12px; border-bottom: 1px solid #1E2040; vertical-align: top; color: #C8C8D8; }
.go-digging-table .priority-h td:first-child { border-left: 3px solid #FF3B3B; }
.go-digging-table .priority-m td:first-child { border-left: 3px solid #FF9500; }
.go-digging-table .priority-l td:first-child { border-left: 3px solid #00C076; }

.status-chip { display: inline-block; font-size: 0.6rem; font-weight: 700; padding: 2px 8px;
  letter-spacing: 0.06em; }
.status-done { background: #00C076; color: #000; }
.status-pending { background: #1E2040; color: #8888AA; }

.summary-card { background: #0F1020; border: 1px solid #1E2040; padding: 16px 20px; margin-bottom: 12px; }
.summary-label { font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: #6B6B8A; margin-bottom: 4px; }
.summary-value { font-size: 0.9rem; color: #E8E8F0; }

.in-progress-panel { background: #0F1020; border-left: 4px solid #1E2040; padding: 28px;
  color: #6B6B8A; font-size: 0.82rem; text-align: center; margin: 28px 0; }
.in-progress-panel strong { color: #A0A0BC; display: block; margin-bottom: 8px; }
</style>
</head>
<body>
```

---

## RADIO INPUTS (first children of body)

```html
<input type="radio" name="tabs" id="r-research" class="tab-radio" checked>
<input type="radio" name="tabs" id="r-digging" class="tab-radio">
<input type="radio" name="tabs" id="r-heatmap" class="tab-radio">
<input type="radio" name="tabs" id="r-commercial" class="tab-radio">
```

Add CSS visibility rules (see brand-guidelines.md pattern):
```css
#r-research:checked ~ .page #research { display: block; }
#r-digging:checked ~ .page #digging { display: block; }
#r-heatmap:checked ~ .page #heatmap { display: block; }
#r-commercial:checked ~ .page #commercial { display: block; }
#r-research:checked ~ nav label[for="r-research"] { border-bottom-color: #A100FF; color: #fff; }
/* repeat for all tabs */
```

---

## NAV BAR

```html
<nav class="nav">
  <label class="nav-logo" for="r-research">
    <img src="../../skills/Acc_Logo_All_White_RGB.png" alt="Accenture" height="20"
         onerror="this.outerHTML='<span style=\'color:#A100FF;font-weight:700;\'>Accenture</span>'">
  </label>
  <div class="nav-tabs">
    <label class="nav-tab" for="r-research">01 Research</label>
    <label class="nav-tab" for="r-digging">02 Go Digging</label>
    <label class="nav-tab" for="r-heatmap">03 Heatmap</label>
    <label class="nav-tab" for="r-commercial">04 Commercial</label>
  </div>
</nav>
```

---

## CHECKPOINT BANNER (immediately after nav, before page div)

```html
<div class="checkpoint-banner">
  <span>MATTER CHECKPOINT — <strong>[Client Name]</strong> — Internal Use Only</span>
  <span>[Date] — [N] stages scored, £[X]–[Y]M total exposure</span>
</div>
```

---

## TAB CONTENT GUIDELINES

### Tab 1 — Research Brief
Render research-brief.md content as:
- **Client Overview**: a 2-row summary card (client, sector, brief context)
- **As-Is CX Assessment**: one `summary-card` per CX stage — stage name, headline finding, risk indicator
- **Competitor Signals**: a compact dark table (competitor, finding, evidenced/inferred)
- **Key Research Findings**: a numbered list with EVIDENCED/INFERRED/HYPOTHESIS labels
- **Recommended CX Stages**: a row of stage name chips, styled with #A100FF border
- **Evidence Gaps**: highlighted in amber `.placeholder` blocks

### Tab 2 — Go Digging
Render go-digging-tasks.md as:
- Intro paragraph
- The full task table as a dark `go-digging-table`
- Each row has a STATUS column — default all tasks to `status-pending` chip
- HIGH priority rows get red left-border, MEDIUM amber, LOW green
- Include total task count and total estimated time at the top

### Tab 3 — Heatmap
Render the full heatmap grid from diagnostic-heatmap.md:
- Full stage × dimension table using the `.heatmap` CSS class
- Stage summary cards below the table (one per stage): overall risk, headline, opportunity
- Heatmap Notes section below stage summaries

### Tab 4 — Commercial
Render commercial-exposure.md as:
- Stat block row at top: total exposure range (large), number of HIGH stages, confidence rating
- Stage-level cards using `.commercial-card` (one per HIGH/MEDIUM stage)
- Upside opportunity section
- CFO-attack summary in a highlighted block
- Assumptions register as a dark table

---

## FOOTER

```html
<footer class="footer">
  <span>Matter Checkpoint — [Client Name] — [YYYY-MM-DD]</span>
  <img src="../../skills/Acc_Logo_All_White_RGB.png" alt="Accenture" height="18"
       onerror="this.outerHTML='<span style=\'color:#555;\'>Accenture</span>'">
</footer>
```

---

## IN-PROGRESS PANEL (for any tab whose source file is not yet available)

If a source file does not exist at the time of HTML generation, show:

```html
<div class="in-progress-panel">
  <strong>IN PROGRESS</strong>
  This section will be populated once [filename] is complete.
</div>
```

---

## QUALITY CHECKLIST (before saving)

- [ ] All four tabs render without error
- [ ] Go Digging tasks all show `status-pending` chip (status update is manual)
- [ ] Heatmap table is readable — no cell overflow, no horizontal scroll at 1440px
- [ ] Commercial figures shown as ranges (£X–YM)
- [ ] Evidence gap placeholders visible in Tab 1
- [ ] No JavaScript — pure CSS tab switching
- [ ] Banner shows correct client name, date, and summary figures
