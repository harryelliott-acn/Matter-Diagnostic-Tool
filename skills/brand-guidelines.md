# Matter — Accenture Song Dark Theme Brand Guidelines

This file defines the visual language for all HTML outputs produced by the Matter
diagnostic system. Read this file before writing any HTML.

---

## COLOUR PALETTE

### Backgrounds
| Role | Value | Usage |
|------|-------|-------|
| Page background | `#0A0B14` | `<body>` and full-bleed page background |
| Surface / card | `#0F1020` | All content cards, cells, panels |
| Surface elevated | `#12132B` | Stage label cells, selected/active elements |
| Cover gradient | `linear-gradient(135deg, #1A0040 0%, #0A0B14 100%)` | Cover panels only |
| Nav background | `#000000` | Fixed nav bar |

### Text
| Role | Value | Usage |
|------|-------|-------|
| Primary text | `#E8E8F0` | All body copy |
| Secondary text | `#A0A0BC` | Labels, metadata, secondary information |
| Muted text | `#6B6B8A` | Column headers, disabled states |
| White | `#FFFFFF` | Cover headlines only |

### Accents
| Role | Value | Usage |
|------|-------|-------|
| Core Purple | `#A100FF` | Primary accent: borders, active tabs, highlights |
| Light Purple | `#C084FC` | Commercial value figures, opportunity callouts |

### Risk Traffic Light
| Risk level | Badge background | Badge text | Cell border-left |
|------------|-----------------|------------|-----------------|
| HIGH | `#FF3B3B` | `#FFFFFF` | `#FF3B3B` |
| MEDIUM | `#FF9500` | `#000000` | `#FF9500` |
| LOW | `#00C076` | `#000000` | `#00C076` |

Risk traffic light colours are ONLY used for risk badges and cell border-left accents.
Never use them as large background fills for sections, cards, or panels.

---

## TYPOGRAPHY

Font stack (all elements): `'Graphik', 'Inter', 'Helvetica Neue', Arial, sans-serif`

| Element | Size | Weight | Colour |
|---------|------|--------|--------|
| Cover headline (H1) | 2.5rem–3.5rem | 700 | `#FFFFFF` |
| Section headline (H2) | 1.5rem | 600 | `#E8E8F0` |
| Sub-heading (H3) | 1.05rem | 600 | `#E8E8F0` |
| Body copy | 0.875rem | 400 | `#E8E8F0` |
| Cell content | 0.78rem | 400 | `#C8C8D8` |
| Labels / metadata | 0.65rem | 500 | `#6B6B8A` |
| Nav tabs | 0.68rem | 500 | `#AAAACC` |

Rules:
- All text is left-aligned — never centred (except cover headline which may be left or centred)
- No italic text in body copy
- Sentence case for all headings (proper nouns excepted)
- No rounded corners on any element (not cards, not badges, not anything)

---

## CORE CSS CLASSES

Include these in the `<style>` block of every HTML file:

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0A0B14; color: #E8E8F0; font-family: 'Graphik','Inter','Helvetica Neue',Arial,sans-serif; font-size: 0.875rem; line-height: 1.6; }

/* Navigation */
.nav { position: fixed; top: 0; left: 0; right: 0; background: #000; z-index: 1000; display: flex; align-items: stretch; height: 52px; }
.nav-logo { display: flex; align-items: center; padding: 0 20px; border-right: 1px solid #222; cursor: pointer; }
.nav-logo img { height: 20px; }
.nav-tabs { display: flex; align-items: stretch; flex: 1; overflow-x: auto; }
.nav-tab { display: flex; align-items: center; padding: 0 16px; color: #AAAACC; font-size: 0.68rem; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; border-bottom: 3px solid transparent; white-space: nowrap; }
.nav-tab:hover { color: #C084FC; }
.tab-radio { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }

/* Page layout */
.page { margin-top: 52px; }
.tab-panel { display: none; }
#cover { display: none; }

/* Cover */
.cover { background: linear-gradient(135deg, #1A0040 0%, #0A0B14 100%); color: #fff; padding: 64px 44px 48px; min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; }
.cover-eyebrow { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: #A100FF; margin-bottom: 16px; }
.cover-headline { font-size: 2.8rem; font-weight: 700; line-height: 1.15; color: #fff; margin-bottom: 24px; max-width: 800px; }
.cover-value { font-size: 1.1rem; color: #C084FC; font-weight: 600; margin-bottom: 8px; }
.cover-meta { font-size: 0.72rem; color: #6B6B8A; margin-top: 32px; }

/* Sections */
.section-header { background: #12132B; border-left: 4px solid #A100FF; padding: 20px 28px; margin-bottom: 0; }
.section-header h2 { font-size: 1.1rem; font-weight: 600; color: #E8E8F0; }
.section-header p { font-size: 0.78rem; color: #6B6B8A; margin-top: 4px; }
.content { padding: 28px 44px; max-width: 1400px; }

/* Heatmap */
.heatmap-wrap { overflow-x: auto; padding: 24px 44px; }
.heatmap { width: 100%; border-collapse: separate; border-spacing: 2px; }
.heatmap thead th { background: #0D0E1A; color: #6B6B8A; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 10px 14px; text-align: left; white-space: nowrap; }
.heatmap tbody .stage-cell { background: #12132B; color: #A100FF; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 16px 14px; width: 120px; vertical-align: top; }
.heatmap .finding-cell { background: #0F1020; padding: 12px 14px; vertical-align: top; min-width: 160px; max-width: 220px; position: relative; }
.heatmap .finding-cell.risk-h { border-left: 3px solid #FF3B3B; }
.heatmap .finding-cell.risk-m { border-left: 3px solid #FF9500; }
.heatmap .finding-cell.risk-l { border-left: 3px solid #00C076; }
.finding-text { font-size: 0.75rem; color: #C8C8D8; line-height: 1.5; margin-bottom: 8px; }
.risk-badge { display: inline-block; font-size: 0.6rem; font-weight: 700; padding: 2px 7px; letter-spacing: 0.08em; }
.risk-badge.risk-h { background: #FF3B3B; color: #fff; }
.risk-badge.risk-m { background: #FF9500; color: #000; }
.risk-badge.risk-l { background: #00C076; color: #000; }
.overall-cell { background: #0D0E1A; padding: 12px 14px; vertical-align: middle; text-align: center; }
.value-cell { background: #12132B; padding: 12px 20px; vertical-align: middle; text-align: right; color: #C084FC; font-size: 1rem; font-weight: 700; white-space: nowrap; }

/* Stat blocks */
.stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-bottom: 28px; }
.stat-block { background: #0F1020; border-left: 4px solid #A100FF; padding: 18px 20px; }
.stat-value { font-size: 2rem; font-weight: 700; color: #C084FC; line-height: 1; margin-bottom: 4px; }
.stat-label { font-size: 0.7rem; color: #6B6B8A; }
.stat-block.risk-h .stat-value { color: #FF3B3B; }
.stat-block.risk-m .stat-value { color: #FF9500; }
.stat-block.risk-l .stat-value { color: #00C076; }

/* Territory cards */
.territory-card { background: #0F1020; border-left: 4px solid #A100FF; padding: 24px; margin-bottom: 16px; }
.territory-eyebrow { font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; color: #A100FF; margin-bottom: 8px; }
.territory-headline { font-size: 1.1rem; font-weight: 600; color: #E8E8F0; margin-bottom: 10px; line-height: 1.4; }
.territory-body { font-size: 0.81rem; color: #A0A0BC; line-height: 1.6; }
.quick-win-card { background: #0D1A1A; border-left: 4px solid #00C076; padding: 18px 20px; margin-bottom: 10px; }

/* Commercial cards */
.commercial-card { background: #0F1020; border: 1px solid #1E2040; padding: 20px; margin-bottom: 14px; }
.commercial-stage { font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: #6B6B8A; margin-bottom: 4px; }
.commercial-headline { font-size: 0.9rem; font-weight: 600; color: #E8E8F0; margin-bottom: 8px; }
.commercial-value { font-size: 1.4rem; font-weight: 700; color: #C084FC; margin-bottom: 6px; }
.confidence-badge { display: inline-block; font-size: 0.6rem; font-weight: 700; padding: 2px 8px; letter-spacing: 0.08em; }
.confidence-h { background: #00C076; color: #000; }
.confidence-m { background: #FF9500; color: #000; }
.confidence-l { background: #FF3B3B; color: #fff; }

/* Tables */
table { width: 100%; border-collapse: collapse; background: #0F1020; font-size: 0.8rem; margin-bottom: 24px; }
th { background: #0D0E1A; color: #6B6B8A; padding: 10px 14px; text-align: left; font-size: 0.65rem; letter-spacing: 0.08em; text-transform: uppercase; }
td { padding: 10px 14px; border-bottom: 1px solid #1E2040; vertical-align: top; color: #C8C8D8; }
tr:last-child td { border-bottom: none; }

/* Placeholder */
.placeholder { background: #1A1200; border-left: 4px solid #FF9500; padding: 14px 20px; margin: 16px 0; font-size: 0.82rem; color: #C8A000; }

/* Footer */
.footer { background: #000; color: #444466; padding: 20px 44px; font-size: 0.68rem; display: flex; justify-content: space-between; align-items: center; margin-top: 48px; }
.footer img { height: 18px; }
```

---

## CSS RADIO TAB SWITCHING (mandatory — no JavaScript)

All HTML files MUST use pure CSS radio-button tab switching. No `<script>` tags.

### Step 1 — Radio inputs (FIRST children of `<body>`)
```html
<input type="radio" name="tabs" id="r-cover" class="tab-radio" checked>
<input type="radio" name="tabs" id="r-s1" class="tab-radio">
<input type="radio" name="tabs" id="r-s2" class="tab-radio">
<!-- one per section tab -->
```

### Step 2 — CSS visibility rules (add after core classes)
```css
/* Panel visibility */
#r-cover:checked ~ .page #cover { display: flex; flex-direction: column; justify-content: flex-end; }
#r-s1:checked ~ .page #s1 { display: block; }
#r-s2:checked ~ .page #s2 { display: block; }

/* Active tab highlight */
#r-s1:checked ~ nav label[for="r-s1"] { border-bottom-color: #A100FF; color: #fff; }
#r-s2:checked ~ nav label[for="r-s2"] { border-bottom-color: #A100FF; color: #fff; }

/* Mobile scroll */
@media (max-width: 768px) {
  .nav-tabs::after { content: ''; position: sticky; right: 0; width: 40px; flex-shrink: 0;
    align-self: stretch; background: linear-gradient(to right, transparent, #000); pointer-events: none; }
}
```

### Step 3 — Nav and tab links MUST be `<label>` elements
```html
<label class="nav-logo" for="r-cover" title="Return to cover">
  <img src="../../skills/Acc_Logo_All_White_RGB.png" alt="Accenture" height="20"
       onerror="this.outerHTML='<span style=\'color:#A100FF;font-weight:700;\'>Accenture</span>'">
</label>

<label class="nav-tab" for="r-s1">01 [Tab Label]</label>
<label class="nav-tab" for="r-s2">02 [Tab Label]</label>
```

The radio inputs MUST be siblings of — and come before — both the `<nav>` and the `.page` div.
The CSS `~` sibling combinator requires this ordering to work.

---

## LOGO ASSETS

All HTML files produced by this system must use the official PNG files from /skills/:

| Asset | Path from output folder | Usage |
|-------|------------------------|-------|
| White logo | `../../skills/Acc_Logo_All_White_RGB.png` | Dark backgrounds (nav, cover, footer) |
| Black logo | `../../skills/Acc_Logo_All_Black_RGB.png` | Light backgrounds (not typically used in Matter) |
| GT Purple | `../../skills/Acc_GT_Solid_P1_RGB.png` | Standalone Greater Than symbol |

Always include `onerror` fallback:
```html
onerror="this.outerHTML='<span style=\'color:#A100FF;font-weight:700;\'>Accenture</span>'"
```

---

## QUALITY CHECKLIST (run before saving any HTML file)

- [ ] Background is #0A0B14 — not pure black, not white
- [ ] All risk badges colour-coded correctly (red H, amber M, green L)
- [ ] No rounded corners anywhere
- [ ] No JavaScript anywhere — pure CSS tab switching only
- [ ] All figures presented as ranges (£8–12M, not £10M)
- [ ] Logo uses PNG asset with onerror fallback
- [ ] No empty heatmap cells
- [ ] Cover headline is specific to this client — not generic
- [ ] File is self-contained — no external CDN, fonts, or imports
