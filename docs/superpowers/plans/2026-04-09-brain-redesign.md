# Brain Website — Rediseño Completo: Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar el sitio Bootstrap genérico con un rediseño Dark Tech completo usando la paleta azul del logo (#2563EB), narrativa Problema→Solución→Prueba→Acción, y los planes de pricing reales.

**Architecture:** Reescritura completa de `index.html` y `assets/css/main.css`. El JS existente (chat-widget.js, contact-form.js) no se toca. El nuevo CSS mantiene las variables CSS que usa chat-widget.css (`--accent-color`, `--surface-color`, `--default-color`, `--contrast-color`, `--heading-font`, `--default-font`).

**Tech Stack:** HTML5, CSS3 (custom properties), Bootstrap 5 (grid/utilities solamente), Bootstrap Icons, AOS, Swiper (removido de las secciones pero mantenido el import por compatibilidad).

---

## Archivos

| Archivo | Acción | Responsabilidad |
|---|---|---|
| `assets/css/main.css` | **Reescritura completa** | Todos los estilos del sitio (paleta azul, dark tech) |
| `index.html` | **Reescritura completa** | Estructura HTML de las 9 secciones |
| `assets/js/main.js` | **Modificación menor** | Actualizar selector FAQ accordion |

**No tocar:**
- `assets/css/chat-widget.css` (usa variables de main.css — compatibles)
- `assets/js/chat-widget.js`
- `assets/js/contact-form.js`

---

## Task 1: Reescribir assets/css/main.css

**Files:**
- Modify: `assets/css/main.css` (reescritura completa)

- [ ] **Step 1: Reemplazar main.css completo**

Escribir el siguiente contenido completo en `assets/css/main.css`:

```css
/* ============================================================
   Brain — Dark Tech Design System
   Paleta: Azul Royal (#2563EB) sobre fondo oscuro (#070c14)
   Compatibilidad: mantiene variables usadas por chat-widget.css
   ============================================================ */

/* ── FUENTES ─────────────────────────────────────────────── */
:root {
  --default-font: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --heading-font: "Inter", system-ui, sans-serif;
  --nav-font: "Inter", system-ui, sans-serif;
}

/* ── TOKENS DE COLOR ──────────────────────────────────────── */
:root {
  /* Fondos */
  --background-color: #070c14;
  --bg-elevated:      #0b1221;
  --bg-footer:        #050810;

  /* Marca azul (basada en logo) */
  --accent-color:     #2563EB;   /* usado por chat-widget.css */
  --accent-secondary: #1D4ED8;
  --accent-light:     #3B82F6;
  --accent-glow:      rgba(37, 99, 235, 0.35);
  --accent-border:    rgba(37, 99, 235, 0.25);
  --accent-bg:        rgba(37, 99, 235, 0.08);
  --accent-bg-hover:  rgba(37, 99, 235, 0.12);

  /* Superficies */
  --surface-color: #0f1929;    /* usado por chat-widget.css */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-hover:  rgba(37, 99, 235, 0.3);

  /* Texto */
  --default-color:  rgba(255, 255, 255, 0.80); /* chat-widget.css */
  --heading-color:  #f9fafb;
  --contrast-color: #ffffff;                   /* chat-widget.css */
  --text-secondary: #9ca3af;
  --text-muted:     #6b7280;
  --text-disabled:  #374151;

  /* Nav */
  --nav-color:                      rgba(255, 255, 255, 0.80);
  --nav-hover-color:                #3B82F6;
  --nav-mobile-background-color:    #0b1221;
  --nav-dropdown-background-color:  #0b1221;
  --nav-dropdown-color:             rgba(255, 255, 255, 0.80);
  --nav-dropdown-hover-color:       #3B82F6;
}

/* ── RESET / BASE ─────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

:root { scroll-behavior: smooth; }

body {
  font-family: var(--default-font);
  background-color: var(--background-color);
  color: var(--default-color);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: var(--accent-light); text-decoration: none; transition: color .2s; }
a:hover { color: var(--accent-color); }

h1, h2, h3, h4, h5, h6 {
  font-family: var(--heading-font);
  color: var(--heading-color);
  font-weight: 900;
}

img { max-width: 100%; }

section { padding: 100px 0; }

/* ── SHARED SECTION HEADER ────────────────────────────────── */
.section-label {
  display: block;
  font-size: 10px; font-weight: 700;
  letter-spacing: 3px; text-transform: uppercase;
  color: var(--accent-light);
  margin-bottom: 8px;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 900; letter-spacing: -1.5px;
  color: var(--heading-color); line-height: 1.1;
  margin-bottom: 14px;
}

.section-title .accent {
  background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-sub {
  font-size: 16px; color: var(--text-muted); line-height: 1.6;
}

/* ── PRELOADER ────────────────────────────────────────────── */
#preloader {
  position: fixed; inset: 0; z-index: 99999;
  background: var(--background-color);
  display: flex; align-items: center; justify-content: center;
}

#preloader:after {
  content: "";
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 3px solid var(--border-subtle);
  border-top-color: var(--accent-color);
  animation: spin .8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ── SCROLL TOP ───────────────────────────────────────────── */
.scroll-top {
  position: fixed; bottom: 90px; right: 20px; z-index: 99998;
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--accent-color);
  color: #fff; font-size: 20px;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none;
  transition: opacity .3s, box-shadow .2s;
  box-shadow: 0 0 20px var(--accent-glow);
}

.scroll-top.active { opacity: 1; pointer-events: auto; }
.scroll-top:hover { box-shadow: 0 0 30px var(--accent-glow); }

/* ── HEADER / NAV ─────────────────────────────────────────── */
#header {
  background: rgba(7, 12, 20, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
  padding: 14px 0;
  z-index: 9997;
  transition: background .3s;
}

#header .logo img {
  width: 38px; height: 38px;
  object-fit: contain;
}

#header .logo h1.sitename {
  font-size: 20px; font-weight: 900;
  color: var(--heading-color);
  margin: 0; letter-spacing: -0.5px;
}

.navmenu ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 32px; }

.navmenu a {
  font-size: 14px; font-weight: 500;
  color: var(--nav-color);
  transition: color .2s;
  padding: 4px 0;
  position: relative;
}

.navmenu a::after {
  content: '';
  position: absolute; bottom: -2px; left: 0; right: 0; height: 1px;
  background: var(--accent-color);
  transform: scaleX(0); transition: transform .2s;
}

.navmenu a:hover,
.navmenu a.active {
  color: var(--heading-color);
}

.navmenu a:hover::after,
.navmenu a.active::after { transform: scaleX(1); }

.btn-getstarted {
  background: linear-gradient(135deg, var(--accent-secondary), var(--accent-color));
  color: #fff !important; border: none; border-radius: 8px;
  padding: 9px 20px; font-size: 13px; font-weight: 600;
  transition: box-shadow .2s, opacity .2s;
  box-shadow: 0 0 20px var(--accent-glow);
}

.btn-getstarted:hover { opacity: .9; box-shadow: 0 0 30px var(--accent-glow); }

/* Mobile nav */
.mobile-nav-toggle {
  display: none;
  font-size: 24px; color: var(--heading-color);
  cursor: pointer; line-height: 1;
}

@media (max-width: 1200px) {
  .mobile-nav-toggle { display: block; }
  .navmenu { display: none; }
  .navmenu.mobile-nav-active { display: block; }

  .navmenu ul {
    flex-direction: column; gap: 0;
    background: var(--nav-mobile-background-color);
    border: 1px solid var(--border-subtle);
    border-radius: 12px; padding: 12px 0;
    position: absolute; top: 72px; right: 16px; left: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,.4);
  }

  .navmenu ul li a {
    display: block; padding: 12px 20px;
    border-bottom: 1px solid var(--border-subtle);
  }

  .navmenu ul li:last-child a { border-bottom: none; }
}

body.mobile-nav-active .mobile-nav-toggle .bi-list { display: none; }
body.mobile-nav-active .mobile-nav-toggle .bi-x { display: block; }
body:not(.mobile-nav-active) .mobile-nav-toggle .bi-x { display: none; }

/* ── HERO ─────────────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  background: var(--background-color);
  display: flex; align-items: center;
  position: relative; overflow: hidden;
  padding: 120px 0 80px;
}

/* Mesh gradient blobs */
.hero-blob {
  position: absolute; border-radius: 50%;
  filter: blur(80px); opacity: .14; pointer-events: none;
}
.hero-blob-1 { width: 600px; height: 600px; background: var(--accent-color); top: -200px; right: -100px; }
.hero-blob-2 { width: 400px; height: 400px; background: var(--accent-secondary); bottom: -100px; left: 200px; }
.hero-blob-3 { width: 300px; height: 300px; background: #0EA5E9; top: 200px; right: 300px; opacity: .07; }

/* Grid overlay */
.hero-grid-overlay {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(37,99,235,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero .container { position: relative; z-index: 2; }

/* Badge */
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent-bg); border: 1px solid var(--accent-border);
  border-radius: 20px; padding: 5px 14px 5px 8px; margin-bottom: 28px;
}

.hero-badge-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent-color); box-shadow: 0 0 8px var(--accent-color);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
}

.hero-badge span { font-size: 12px; font-weight: 600; color: var(--accent-light); letter-spacing: .5px; }

/* Title */
.hero-title {
  font-size: clamp(36px, 5.5vw, 58px);
  font-weight: 900; line-height: 1.05;
  letter-spacing: -2px; color: var(--heading-color);
  margin-bottom: 20px;
}

.hero-title .accent {
  background: linear-gradient(135deg, var(--accent-color), var(--accent-light), #0EA5E9);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 17px; color: var(--text-secondary);
  line-height: 1.6; margin-bottom: 36px; max-width: 460px;
}

/* CTAs */
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }

.btn-hero-primary {
  background: linear-gradient(135deg, var(--accent-secondary), var(--accent-color));
  color: #fff; border: none; border-radius: 10px;
  padding: 13px 26px; font-size: 15px; font-weight: 700;
  display: inline-flex; align-items: center; gap: 8px;
  box-shadow: 0 0 30px var(--accent-glow);
  transition: box-shadow .2s, transform .2s;
}

.btn-hero-primary:hover { color: #fff; box-shadow: 0 0 50px var(--accent-glow); transform: translateY(-1px); }

.btn-hero-secondary {
  background: transparent; border: 1px solid var(--border-subtle);
  color: var(--text-secondary); border-radius: 10px;
  padding: 13px 26px; font-size: 15px; font-weight: 600;
  display: inline-flex; align-items: center; gap: 8px;
  transition: border-color .2s, color .2s;
}

.btn-hero-secondary:hover { border-color: rgba(255,255,255,.3); color: var(--heading-color); }

/* Stats */
.hero-stats {
  display: flex; gap: 32px; flex-wrap: wrap;
  padding-top: 32px; border-top: 1px solid var(--border-subtle);
}

.hero-stat-value {
  font-size: 28px; font-weight: 800;
  color: var(--heading-color); letter-spacing: -1px;
}

.hero-stat-value span { color: var(--accent-light); }
.hero-stat-label { font-size: 12px; color: var(--text-muted); margin-top: 2px; font-weight: 500; }

/* Dashboard card (right column) */
.hero-card {
  background: rgba(255,255,255,.04);
  border: 1px solid var(--border-subtle);
  border-radius: 20px; padding: 24px;
  backdrop-filter: blur(10px);
  box-shadow: 0 25px 60px rgba(0,0,0,.4);
  position: relative;
}

.hero-card-title { font-size: 13px; font-weight: 600; color: var(--heading-color); }

.hero-status-badge {
  display: inline-flex; align-items: center; gap: 5px;
  background: rgba(34,197,94,.1); border: 1px solid rgba(34,197,94,.2);
  border-radius: 20px; padding: 3px 10px;
  font-size: 11px; font-weight: 600; color: #4ade80;
}

.hero-status-dot { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; }

.hero-flow-item {
  display: flex; align-items: center; gap: 12px;
  background: rgba(255,255,255,.03); border: 1px solid var(--border-subtle);
  border-radius: 10px; padding: 10px 14px; margin-bottom: 8px;
}

.hero-flow-icon {
  width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; flex-shrink: 0;
}

.hero-flow-name { font-size: 12px; font-weight: 600; color: var(--heading-color); }
.hero-flow-desc { font-size: 10px; color: var(--text-muted); margin-top: 1px; }

.hero-flow-status {
  font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 10px; margin-left: auto;
}
.s-active  { background: rgba(34,197,94,.1);  color: #4ade80; }
.s-running { background: var(--accent-bg);     color: var(--accent-light); }
.s-done    { background: rgba(156,163,175,.1); color: #9ca3af; }

.hero-metrics {
  display: grid; grid-template-columns: repeat(3,1fr); gap: 8px;
  margin-top: 16px; padding-top: 16px;
  border-top: 1px solid var(--border-subtle);
}

.hero-metric {
  background: var(--accent-bg); border: 1px solid var(--accent-border);
  border-radius: 10px; padding: 8px; text-align: center;
}

.hero-metric-num { font-size: 18px; font-weight: 800; color: var(--accent-light); }
.hero-metric-lbl { font-size: 10px; color: var(--text-muted); }

/* Toast cards flotantes */
.hero-toast {
  position: absolute;
  background: rgba(11,18,33,.9); border: 1px solid var(--border-subtle);
  border-radius: 12px; padding: 10px 14px;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0,0,0,.3);
  display: flex; align-items: center; gap: 10px;
  font-size: 12px; z-index: 3;
}

.hero-toast-top    { top: -20px; right: -20px; }
.hero-toast-bottom { bottom: -20px; left: -20px; }

.hero-toast-icon { font-size: 20px; color: var(--accent-light); }
.hero-toast-main { font-weight: 700; color: var(--heading-color); font-size: 13px; }
.hero-toast-sub  { color: var(--text-muted); font-size: 10px; }

/* ── PAIN / SOLUTION ─────────────────────────────────────── */
.pain-section { background: var(--background-color); }

.pain-grid {
  display: grid; grid-template-columns: 1fr 64px 1fr; gap: 0;
  align-items: stretch;
}

.pain-col { display: flex; flex-direction: column; gap: 16px; }

.pain-col-header {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 16px; border-radius: 10px; margin-bottom: 4px;
  font-size: 13px; font-weight: 700;
}

.pain-col-header.pain  { background: rgba(239,68,68,.08); border: 1px solid rgba(239,68,68,.15); color: #f87171; }
.pain-col-header.brain { background: var(--accent-bg);    border: 1px solid var(--accent-border); color: var(--accent-light); }

.pain-item {
  background: rgba(239,68,68,.04);
  border: 1px solid rgba(239,68,68,.10);
  border-radius: 12px; padding: 20px 22px;
}

.solution-item {
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  border-radius: 12px; padding: 20px 22px;
}

.pain-item-icon, .solution-item-icon {
  width: 36px; height: 36px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  font-size: 17px; margin-bottom: 12px;
}

.pain-item-icon { background: rgba(239,68,68,.12); color: #f87171; }
.solution-item-icon { background: rgba(37,99,235,.15); color: var(--accent-light); }

.pain-item-title, .solution-item-title {
  font-size: 14px; font-weight: 700; margin-bottom: 5px;
}

.pain-item-title     { color: #fca5a5; }
.solution-item-title { color: #93c5fd; }
.pain-item-desc, .solution-item-desc { font-size: 12px; color: var(--text-muted); line-height: 1.55; }

.pain-divider {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding-top: 52px;
}

.pain-divider-line {
  flex: 1; width: 1px;
  background: linear-gradient(to bottom, transparent, var(--accent-border), transparent);
}

.pain-divider-node {
  width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, var(--accent-secondary), var(--accent-color));
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; color: #fff;
  box-shadow: 0 0 16px var(--accent-glow);
}

@media (max-width: 768px) {
  .pain-grid { grid-template-columns: 1fr; }
  .pain-divider { display: none; }
}

/* ── SERVICES ─────────────────────────────────────────────── */
.services { background: linear-gradient(180deg, var(--background-color) 0%, var(--bg-elevated) 100%); }

.services-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 48px; flex-wrap: wrap; gap: 16px;
}

.services-link {
  display: inline-flex; align-items: center; gap: 6px;
  color: var(--accent-light); font-size: 13px; font-weight: 600;
  border-bottom: 1px solid rgba(59,130,246,.3); padding-bottom: 2px;
  transition: color .2s;
}
.services-link:hover { color: var(--accent-color); }

.services-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
}

@media (max-width: 992px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 576px) { .services-grid { grid-template-columns: 1fr; } }

.service-card {
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border-subtle);
  border-radius: 16px; padding: 28px;
  position: relative; overflow: hidden;
  transition: border-color .2s, background .2s;
  cursor: pointer;
}

.service-card::before {
  content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(37,99,235,.5), transparent);
  opacity: 0; transition: opacity .3s;
}

.service-card:hover { border-color: var(--border-hover); background: var(--accent-bg); }
.service-card:hover::before { opacity: 1; }

.service-card-icon {
  width: 44px; height: 44px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; margin-bottom: 16px;
}

.service-card-tag {
  font-size: 10px; font-weight: 700; letter-spacing: 2px;
  text-transform: uppercase; color: #374151; margin-bottom: 7px;
}

.service-card-title {
  font-size: 17px; font-weight: 800; color: var(--heading-color);
  letter-spacing: -.3px; margin-bottom: 10px; line-height: 1.2;
}

.service-card-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px; }

.service-card-footer { display: flex; align-items: center; justify-content: space-between; }

.service-card-tool {
  font-size: 11px; font-weight: 600; color: #4b5563;
  background: rgba(255,255,255,.04); border: 1px solid var(--border-subtle);
  border-radius: 6px; padding: 3px 9px;
}

.service-card-arrow {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1px solid var(--border-subtle);
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; color: var(--accent-light);
  transition: background .2s, border-color .2s;
}

.service-card:hover .service-card-arrow { background: var(--accent-bg); border-color: var(--accent-border); }

/* ── STEPS ────────────────────────────────────────────────── */
.steps { background: var(--bg-elevated); }

.steps-track {
  max-width: 840px; margin: 0 auto;
  position: relative;
}

.steps-track::before {
  content: '';
  position: absolute; left: 27px; top: 28px; bottom: 28px; width: 1px;
  background: linear-gradient(to bottom, var(--accent-color), rgba(37,99,235,.2), rgba(37,99,235,.05));
}

.step-row {
  display: grid; grid-template-columns: 56px 1fr; gap: 28px;
  padding: 28px 0; position: relative;
}

.step-row:not(:last-child) { border-bottom: 1px solid rgba(255,255,255,.03); }

.step-node {
  width: 56px; height: 56px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; position: relative; z-index: 2;
  border: 1px solid var(--accent-border); background: var(--accent-bg); color: var(--accent-light);
  transition: background .2s, box-shadow .2s;
}

.step-row:hover .step-node {
  background: rgba(37,99,235,.2);
  border-color: rgba(37,99,235,.5);
  box-shadow: 0 0 20px var(--accent-glow);
}

.step-body { padding-top: 10px; }

.step-num-tag {
  font-size: 10px; font-weight: 700; letter-spacing: 2px;
  color: #4b5563; text-transform: uppercase; margin-bottom: 6px;
}

.step-title {
  font-size: 20px; font-weight: 800; letter-spacing: -.5px;
  color: var(--heading-color); margin-bottom: 8px;
}

.step-desc { font-size: 14px; color: var(--text-muted); line-height: 1.6; max-width: 580px; }

.step-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }

.step-chip {
  font-size: 11px; font-weight: 600; color: var(--accent-light);
  background: var(--accent-bg); border: 1px solid var(--accent-border);
  border-radius: 20px; padding: 3px 10px;
}

/* ── SOCIAL PROOF ─────────────────────────────────────────── */
.social-proof { background: var(--background-color); }

.stats-strip {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 1px; background: var(--border-subtle);
  border-radius: 16px; overflow: hidden;
  border: 1px solid var(--border-subtle);
  margin-bottom: 56px;
}

@media (max-width: 768px) { .stats-strip { grid-template-columns: repeat(2, 1fr); } }

.stat-cell {
  background: rgba(255,255,255,.02); padding: 28px 24px; text-align: center;
  transition: background .2s;
}

.stat-cell:hover { background: var(--accent-bg); }

.stat-value {
  font-size: clamp(28px, 4vw, 36px); font-weight: 900; letter-spacing: -2px;
  background: linear-gradient(135deg, var(--heading-color), var(--accent-light));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  margin-bottom: 4px;
}

.stat-label { font-size: 12px; color: var(--text-muted); font-weight: 500; }

.testimonials-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
}

@media (max-width: 992px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 576px) { .testimonials-grid { grid-template-columns: 1fr; } }

.testimonial-card {
  background: rgba(255,255,255,.02); border: 1px solid var(--border-subtle);
  border-radius: 16px; padding: 28px;
  display: flex; flex-direction: column; gap: 16px;
  transition: border-color .2s, background .2s;
}

.testimonial-card:hover { border-color: var(--border-hover); background: var(--accent-bg); }
.testimonial-card.featured { grid-column: span 2; background: var(--accent-bg); border-color: var(--accent-border); }

@media (max-width: 992px) { .testimonial-card.featured { grid-column: span 1; } }

.testimonial-quote-icon {
  width: 32px; height: 32px; border-radius: 8px;
  background: var(--accent-bg); border: 1px solid var(--accent-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--accent-light); font-size: 15px; flex-shrink: 0;
}

.testimonial-text {
  font-size: 15px; color: var(--text-secondary);
  line-height: 1.65; font-style: italic; flex: 1;
}

.testimonial-card.featured .testimonial-text { font-size: 17px; }

.testimonial-meta {
  display: flex; align-items: center; gap: 12px;
  padding-top: 16px; border-top: 1px solid var(--border-subtle);
}

.testimonial-avatar {
  width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, var(--accent-secondary), var(--accent-color));
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 800; color: #fff;
}

.testimonial-name { font-size: 13px; font-weight: 700; color: var(--heading-color); }
.testimonial-role { font-size: 11px; color: var(--text-muted); margin-top: 1px; }

.testimonial-tag {
  margin-left: auto; font-size: 10px; font-weight: 700;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--accent-light); background: var(--accent-bg);
  border: 1px solid var(--accent-border); border-radius: 20px; padding: 3px 9px;
}

/* ── PRICING ──────────────────────────────────────────────── */
.pricing { background: var(--bg-elevated); }

.billing-toggle {
  display: inline-flex; align-items: center; gap: 12px;
  background: rgba(255,255,255,.03); border: 1px solid var(--border-subtle);
  border-radius: 30px; padding: 6px 16px; margin-top: 20px;
  font-size: 13px; color: var(--text-muted);
}

.billing-toggle .active { color: var(--accent-light); font-weight: 700; }

.toggle-pill {
  width: 36px; height: 20px; background: var(--accent-bg);
  border-radius: 20px; position: relative; cursor: pointer;
}

.toggle-pill::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 14px; height: 14px; border-radius: 50%; background: var(--accent-color);
}

.pricing-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  align-items: start; max-width: 1060px; margin: 0 auto;
}

@media (max-width: 992px) { .pricing-grid { grid-template-columns: 1fr; max-width: 480px; } }

.pricing-card {
  background: rgba(255,255,255,.02); border: 1px solid var(--border-subtle);
  border-radius: 20px; padding: 32px 28px;
  position: relative; overflow: hidden;
  display: flex; flex-direction: column;
  transition: border-color .2s;
}

.pricing-card::before {
  content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(37,99,235,.5), transparent);
  opacity: 0; transition: opacity .3s;
}

.pricing-card:hover { border-color: var(--border-hover); }
.pricing-card:hover::before { opacity: 1; }

.pricing-card.popular {
  background: var(--accent-bg); border-color: rgba(37,99,235,.4);
  transform: scale(1.04);
  box-shadow: 0 0 60px rgba(37,99,235,.18), 0 0 0 1px rgba(37,99,235,.25);
}
.pricing-card.popular::before { opacity: 1; }

.popular-badge {
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  background: linear-gradient(135deg, var(--accent-secondary), var(--accent-color));
  color: #fff; font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; padding: 5px 18px;
  border-radius: 0 0 12px 12px;
}

.plan-icon {
  width: 44px; height: 44px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; font-size: 20px;
  margin-bottom: 20px;
}

.plan-tier {
  font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
  color: #4b5563; background: rgba(255,255,255,.04);
  border: 1px solid var(--border-subtle); border-radius: 20px; padding: 3px 10px;
}

.plan-name { font-size: 22px; font-weight: 900; color: var(--heading-color); letter-spacing: -.5px; margin-bottom: 4px; }
.plan-tagline { font-size: 13px; color: var(--text-muted); line-height: 1.4; }

.plan-price-block {
  padding: 20px 0; margin: 20px 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.plan-price { display: flex; align-items: baseline; gap: 3px; }
.price-usd    { font-size: 15px; font-weight: 700; color: var(--text-muted); }
.price-num    { font-size: 52px; font-weight: 900; letter-spacing: -3px; color: var(--heading-color); line-height: 1; }
.price-per    { font-size: 13px; color: #4b5563; align-self: flex-end; padding-bottom: 5px; }
.price-note   { font-size: 11px; color: #374151; margin-top: 6px; }

.plan-section-label {
  font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
  color: #374151; margin: 20px 0 10px;
}

.stack-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }

.chip {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11px; font-weight: 600; border-radius: 6px; padding: 4px 9px;
}

.chip-wa   { background: rgba(37,211,102,.10); color: #4ade80; border: 1px solid rgba(37,211,102,.20); }
.chip-ct   { background: var(--accent-bg);     color: var(--accent-light); border: 1px solid var(--accent-border); }
.chip-mb   { background: rgba(6,182,212,.10);  color: #22d3ee; border: 1px solid rgba(6,182,212,.20); }
.chip-n8n  { background: rgba(245,158,11,.10); color: #fbbf24; border: 1px solid rgba(245,158,11,.20); }
.chip-noco { background: rgba(139,92,246,.10); color: #a78bfa; border: 1px solid rgba(139,92,246,.20); }
.chip-llm  { background: rgba(16,185,129,.10); color: #34d399; border: 1px solid rgba(16,185,129,.20); }

.plan-features { list-style: none; padding: 0; margin: 0 0 32px; display: flex; flex-direction: column; gap: 10px; }

.plan-features li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 13px; color: var(--text-secondary); line-height: 1.4;
}

.plan-features li i { font-size: 14px; margin-top: 1px; flex-shrink: 0; }
.feat-on   { color: var(--accent-color); }
.feat-off  { color: #1f2937; }
.plan-features li.feat-disabled { color: #2d3748; }
.feat-highlight { color: var(--heading-color); font-weight: 600; }

.plan-cta {
  display: block; width: 100%; padding: 14px;
  border-radius: 10px; font-size: 14px; font-weight: 700;
  text-align: center; cursor: pointer; text-decoration: none;
  margin-top: auto; transition: all .2s;
}

.cta-ghost {
  background: rgba(255,255,255,.04); border: 1px solid var(--border-subtle); color: var(--text-secondary);
}
.cta-ghost:hover { background: rgba(255,255,255,.08); color: var(--heading-color); border-color: rgba(255,255,255,.2); }

.cta-primary {
  background: linear-gradient(135deg, var(--accent-secondary), var(--accent-color));
  border: none; color: #fff;
  box-shadow: 0 0 30px var(--accent-glow);
}
.cta-primary:hover { color: #fff; box-shadow: 0 0 50px var(--accent-glow); transform: translateY(-1px); }

.pricing-note {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  font-size: 13px; color: #374151; margin-top: 32px;
}
.pricing-note i { color: var(--accent-color); }

/* ── FAQ ──────────────────────────────────────────────────── */
.faq { background: var(--background-color); }

.faq-layout {
  display: grid; grid-template-columns: 1fr 2fr; gap: 80px;
  align-items: start;
}

@media (max-width: 992px) { .faq-layout { grid-template-columns: 1fr; gap: 40px; } }

.faq-left { position: sticky; top: 100px; }

.faq-cta-box {
  margin-top: 32px; background: var(--accent-bg);
  border: 1px solid var(--accent-border); border-radius: 14px; padding: 20px;
}

.faq-cta-box p { font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 14px; }

.faq-cta-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(37,99,235,.15); border: 1px solid var(--accent-border);
  color: var(--accent-light); border-radius: 8px; padding: 9px 16px;
  font-size: 13px; font-weight: 600; transition: background .2s;
}
.faq-cta-btn:hover { background: rgba(37,99,235,.25); color: var(--accent-light); }

.faq-list { display: flex; flex-direction: column; gap: 2px; }

.faq-item {
  border: 1px solid var(--border-subtle);
  border-radius: 12px; overflow: hidden;
  transition: border-color .2s;
}

.faq-item:hover { border-color: var(--border-hover); }

.faq-item.faq-active {
  border-color: rgba(37,99,235,.25);
  background: var(--accent-bg);
}

.faq-question {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 20px; cursor: pointer; gap: 16px;
}

.faq-question h3 {
  font-size: 14px; font-weight: 600; color: var(--heading-color);
  margin: 0; flex: 1;
}

.faq-toggle {
  width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
  border: 1px solid var(--border-subtle);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; color: var(--text-muted);
  transition: all .2s;
}

.faq-item.faq-active .faq-toggle {
  background: var(--accent-bg);
  border-color: var(--accent-border);
  color: var(--accent-light);
  transform: rotate(45deg);
}

.faq-content { display: none; padding: 0 20px 18px; }
.faq-item.faq-active .faq-content { display: block; }
.faq-content p { font-size: 13px; color: var(--text-muted); line-height: 1.65; margin: 0; }

/* ── CONTACT ──────────────────────────────────────────────── */
.contact { background: var(--bg-elevated); }

.contact-layout {
  display: grid; grid-template-columns: 1fr 1.4fr; gap: 64px;
  align-items: start;
}

@media (max-width: 992px) { .contact-layout { grid-template-columns: 1fr; } }

.contact-info-list { display: flex; flex-direction: column; gap: 20px; margin-top: 36px; }

.contact-info-item { display: flex; align-items: flex-start; gap: 14px; }

.contact-info-icon {
  width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
  background: var(--accent-bg); border: 1px solid var(--accent-border);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; color: var(--accent-light);
}

.contact-info-label {
  font-size: 11px; font-weight: 700; color: #4b5563;
  text-transform: uppercase; letter-spacing: 1px; margin-bottom: 3px;
}

.contact-info-value { font-size: 14px; color: var(--text-secondary); font-weight: 500; }
.contact-info-value a { color: var(--accent-light); }
.contact-info-value a:hover { color: var(--accent-color); }

.contact-social { display: flex; gap: 10px; margin-top: 32px; }

.social-icon-btn {
  width: 38px; height: 38px; border-radius: 10px;
  border: 1px solid var(--border-subtle);
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; color: var(--text-muted); cursor: pointer;
  transition: border-color .2s, color .2s, background .2s;
}

.social-icon-btn:hover { border-color: var(--border-hover); color: var(--accent-light); background: var(--accent-bg); }

/* Contact form */
.contact-form-card {
  background: rgba(255,255,255,.02); border: 1px solid var(--border-subtle);
  border-radius: 20px; padding: 36px;
}

.contact-form-card h3 { font-size: 20px; font-weight: 800; margin-bottom: 6px; }
.contact-form-card .form-sub { font-size: 13px; color: var(--text-muted); margin-bottom: 28px; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }

@media (max-width: 576px) { .form-row { grid-template-columns: 1fr; } }

.form-field { display: flex; flex-direction: column; gap: 6px; }
.form-field.full { grid-column: span 2; }
@media (max-width: 576px) { .form-field.full { grid-column: span 1; } }

.form-field label {
  font-size: 11px; font-weight: 700; color: #4b5563;
  text-transform: uppercase; letter-spacing: 1px;
}

.form-field input,
.form-field textarea {
  background: rgba(255,255,255,.03); border: 1px solid var(--border-subtle);
  border-radius: 10px; padding: 12px 14px;
  font-size: 14px; color: var(--heading-color); outline: none;
  transition: border-color .2s; font-family: var(--default-font);
  width: 100%;
}

.form-field input:focus,
.form-field textarea:focus { border-color: rgba(37,99,235,.4); }

.form-field textarea { resize: vertical; min-height: 110px; }

/* Loading / error / success states (contact-form.js) */
.loading, .error-message, .sent-message { display: none; margin-top: 12px; font-size: 13px; border-radius: 8px; padding: 10px 14px; }
.loading { display: none; color: var(--text-muted); }
.loading.d-block { display: block; }
.error-message { background: rgba(239,68,68,.1); color: #f87171; border: 1px solid rgba(239,68,68,.2); }
.error-message.d-block { display: block; }
.sent-message { background: rgba(34,197,94,.1); color: #4ade80; border: 1px solid rgba(34,197,94,.2); }
.sent-message.d-block { display: block; }

.btn-submit {
  width: 100%; padding: 14px;
  background: linear-gradient(135deg, var(--accent-secondary), var(--accent-color));
  border: none; border-radius: 10px;
  color: #fff; font-size: 15px; font-weight: 700;
  cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
  box-shadow: 0 0 30px var(--accent-glow); margin-top: 4px;
  transition: box-shadow .2s, transform .2s;
}

.btn-submit:hover { box-shadow: 0 0 50px var(--accent-glow); transform: translateY(-1px); }

/* ── FOOTER ───────────────────────────────────────────────── */
.footer {
  background: var(--bg-footer);
  border-top: 1px solid var(--border-subtle);
  padding: 64px 0 32px;
}

.footer-grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 48px;
  margin-bottom: 48px;
}

@media (max-width: 992px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 576px) { .footer-grid { grid-template-columns: 1fr; } }

.footer-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.footer-logo img { width: 32px; height: 32px; object-fit: contain; }
.footer-logo .sitename { font-size: 18px; font-weight: 800; color: var(--heading-color); }

.footer-tagline { font-size: 13px; color: #4b5563; line-height: 1.6; max-width: 280px; margin-bottom: 20px; }

.footer-social { display: flex; gap: 8px; }

.footer-social-btn {
  width: 34px; height: 34px; border-radius: 8px;
  border: 1px solid var(--border-subtle);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; color: #4b5563; cursor: pointer;
  transition: all .2s;
}

.footer-social-btn:hover { color: var(--accent-light); border-color: var(--accent-border); background: var(--accent-bg); }

.footer-col h5 {
  font-size: 12px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 1.5px; color: var(--heading-color); margin-bottom: 16px;
}

.footer-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }

.footer-col ul a { font-size: 13px; color: #4b5563; transition: color .2s; }
.footer-col ul a:hover { color: var(--text-secondary); }

.footer-contact-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.footer-contact-row i { color: var(--accent-color); font-size: 14px; flex-shrink: 0; }
.footer-contact-row span { font-size: 13px; color: #4b5563; }

.footer-bottom {
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
  padding-top: 24px; border-top: 1px solid var(--border-subtle);
  font-size: 12px; color: #374151;
}

.footer-bottom-links { display: flex; gap: 24px; }
.footer-bottom-links a { color: #374151; transition: color .2s; }
.footer-bottom-links a:hover { color: var(--text-muted); }
```

- [ ] **Step 2: Verificar que el CSS se guardó correctamente**

```bash
wc -l assets/css/main.css
# Esperado: ~500+ líneas
```

- [ ] **Step 3: Commit**

```bash
git add assets/css/main.css
git commit -m "style: reescribir main.css con design system dark tech azul"
```

---

## Task 2: Reescribir index.html

**Files:**
- Modify: `index.html` (reescritura completa)

- [ ] **Step 1: Reemplazar index.html completo**

Escribir el siguiente contenido completo en `index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Brain — Automatización Inteligente</title>
  <meta name="description" content="Brain - Startup argentina de automatización inteligente. Soluciones con IA, n8n, NocoDB y Metabase para automatizar flujos, dashboards y gestión de datos.">
  <meta name="keywords" content="automatización, inteligencia artificial, n8n, NocoDB, Metabase, dashboards, Argentina, startup, WhatsApp bot, Chatwoot">

  <link href="assets/img/brain.ico" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <link href="assets/css/main.css" rel="stylesheet">
  <link href="assets/css/chat-widget.css" rel="stylesheet">
</head>

<body class="index-page">

  <!-- ═══════════════════ HEADER ═══════════════════ -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <img src="assets/img/logo.webp" alt="Brain Logo" class="me-2">
        <h1 class="sitename">Brain</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#steps">Cómo funciona</a></li>
          <li><a href="#pricing">Planes</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a class="btn-getstarted" href="https://support.brain.com.ar">Iniciar sesión</a>

    </div>
  </header>

  <main class="main">

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section id="hero" class="hero">
      <div class="hero-blob hero-blob-1"></div>
      <div class="hero-blob hero-blob-2"></div>
      <div class="hero-blob hero-blob-3"></div>
      <div class="hero-grid-overlay"></div>

      <div class="container">
        <div class="row align-items-center g-5">

          <div class="col-lg-7" data-aos="fade-up">
            <div class="hero-badge">
              <div class="hero-badge-dot"></div>
              <span>Startup argentina · n8n · NocoDB · Metabase</span>
            </div>

            <h1 class="hero-title">
              Automatizá lo<br>
              repetitivo.<br>
              <span class="accent">Escalá lo importante.</span>
            </h1>

            <p class="hero-sub">
              Brain conecta tus herramientas, automatiza tus flujos y pone tus datos en tiempo real. Sin código. Sin fricciones. Con resultados desde la primera semana.
            </p>

            <div class="hero-ctas">
              <a href="#contact" class="btn-hero-primary">
                Solicitar demo gratuita <i class="bi bi-arrow-right"></i>
              </a>
              <a href="#steps" class="btn-hero-secondary">
                Ver cómo funciona <i class="bi bi-arrow-down"></i>
              </a>
            </div>

            <div class="hero-stats">
              <div>
                <div class="hero-stat-value">3<span>x</span></div>
                <div class="hero-stat-label">Velocidad operativa</div>
              </div>
              <div>
                <div class="hero-stat-value">-<span>70</span>%</div>
                <div class="hero-stat-label">Tareas manuales</div>
              </div>
              <div>
                <div class="hero-stat-value">48<span>hs</span></div>
                <div class="hero-stat-label">Primer flujo live</div>
              </div>
            </div>
          </div>

          <div class="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
            <div class="hero-card" style="position: relative;">

              <div class="hero-toast hero-toast-top">
                <i class="bi bi-lightning-charge hero-toast-icon"></i>
                <div>
                  <div class="hero-toast-main">Flujo activado</div>
                  <div class="hero-toast-sub">CRM → Email → Slack · hace 2s</div>
                </div>
              </div>

              <div class="d-flex align-items-center justify-content-between mb-3">
                <span class="hero-card-title">Automatizaciones activas</span>
                <span class="hero-status-badge">
                  <span class="hero-status-dot"></span> Live
                </span>
              </div>

              <div class="hero-flow-item">
                <div class="hero-flow-icon" style="background: rgba(37,99,235,.15); color: #60a5fa;">
                  <i class="bi bi-arrow-repeat"></i>
                </div>
                <div class="flex-grow-1">
                  <div class="hero-flow-name">Sync CRM → NocoDB</div>
                  <div class="hero-flow-desc">Cada 15 min · 1.240 registros</div>
                </div>
                <span class="hero-flow-status s-active">Activo</span>
              </div>

              <div class="hero-flow-item">
                <div class="hero-flow-icon" style="background: rgba(16,185,129,.15); color: #34d399;">
                  <i class="bi bi-robot"></i>
                </div>
                <div class="flex-grow-1">
                  <div class="hero-flow-name">Agente WhatsApp</div>
                  <div class="hero-flow-desc">IA + Chatwoot · 24/7</div>
                </div>
                <span class="hero-flow-status s-running">Ejecutando</span>
              </div>

              <div class="hero-flow-item">
                <div class="hero-flow-icon" style="background: rgba(6,182,212,.15); color: #22d3ee;">
                  <i class="bi bi-bar-chart-line"></i>
                </div>
                <div class="flex-grow-1">
                  <div class="hero-flow-name">Reporte semanal</div>
                  <div class="hero-flow-desc">Metabase → Email equipo</div>
                </div>
                <span class="hero-flow-status s-done">Completado</span>
              </div>

              <div class="hero-metrics">
                <div class="hero-metric">
                  <div class="hero-metric-num">247</div>
                  <div class="hero-metric-lbl">Ejecuciones hoy</div>
                </div>
                <div class="hero-metric">
                  <div class="hero-metric-num">0</div>
                  <div class="hero-metric-lbl">Errores</div>
                </div>
                <div class="hero-metric">
                  <div class="hero-metric-num">99.8%</div>
                  <div class="hero-metric-lbl">Uptime</div>
                </div>
              </div>

              <div class="hero-toast hero-toast-bottom">
                <i class="bi bi-graph-up-arrow hero-toast-icon"></i>
                <div>
                  <div class="hero-toast-main">+340 tareas automáticas</div>
                  <div class="hero-toast-sub">Esta semana · sin intervención manual</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════ PROBLEMA / SOLUCIÓN ═══════════════════ -->
    <section id="pain" class="pain-section section">
      <div class="container">

        <div class="text-center mb-5" data-aos="fade-up">
          <span class="section-label">El problema real</span>
          <h2 class="section-title">¿Cuánto le cuesta a tu negocio<br><span class="accent">no automatizar?</span></h2>
          <p class="section-sub mx-auto" style="max-width:520px;">Cada tarea manual es tiempo perdido. Cada dato disperso, una decisión mal tomada.</p>
        </div>

        <div class="pain-grid" data-aos="fade-up" data-aos-delay="100">

          <div class="pain-col">
            <div class="pain-col-header pain">
              <i class="bi bi-x-circle"></i> Sin Brain
            </div>
            <div class="pain-item">
              <div class="pain-item-icon"><i class="bi bi-clock-history"></i></div>
              <div class="pain-item-title">Tareas repetitivas que consumen horas</div>
              <div class="pain-item-desc">Tu equipo copia datos entre sistemas, manda emails manualmente y genera reportes desde cero cada semana.</div>
            </div>
            <div class="pain-item">
              <div class="pain-item-icon"><i class="bi bi-layout-split"></i></div>
              <div class="pain-item-title">Datos dispersos, decisiones a ciegas</div>
              <div class="pain-item-desc">La información vive en hojas de cálculo, emails y herramientas separadas. Nadie tiene el panorama completo.</div>
            </div>
            <div class="pain-item">
              <div class="pain-item-icon"><i class="bi bi-chat-square-dots"></i></div>
              <div class="pain-item-title">Atención al cliente lenta y despareja</div>
              <div class="pain-item-desc">Los mensajes se pierden, las respuestas tardan horas y la experiencia depende de quién esté disponible.</div>
            </div>
          </div>

          <div class="pain-divider">
            <div class="pain-divider-line"></div>
            <div class="pain-divider-node"><i class="bi bi-arrow-right"></i></div>
            <div class="pain-divider-line"></div>
            <div class="pain-divider-node"><i class="bi bi-arrow-right"></i></div>
            <div class="pain-divider-line"></div>
            <div class="pain-divider-node"><i class="bi bi-arrow-right"></i></div>
            <div class="pain-divider-line"></div>
          </div>

          <div class="pain-col">
            <div class="pain-col-header brain">
              <i class="bi bi-check-circle"></i> Con Brain
            </div>
            <div class="solution-item">
              <div class="solution-item-icon"><i class="bi bi-diagram-3"></i></div>
              <div class="solution-item-title">Flujos automáticos que trabajan solos</div>
              <div class="solution-item-desc">Diseñamos flujos en n8n que conectan tus herramientas y ejecutan tareas sin intervención humana, 24/7.</div>
            </div>
            <div class="solution-item">
              <div class="solution-item-icon"><i class="bi bi-bar-chart-line"></i></div>
              <div class="solution-item-title">Dashboard unificado en tiempo real</div>
              <div class="solution-item-desc">Centralizamos tus datos en Metabase y NocoDB para que cada área tenga visibilidad total al instante.</div>
            </div>
            <div class="solution-item">
              <div class="solution-item-icon"><i class="bi bi-robot"></i></div>
              <div class="solution-item-title">Agente de IA que responde por vos</div>
              <div class="solution-item-desc">Desplegamos agentes inteligentes en WhatsApp con Chatwoot que atienden, derivan y aprenden 24/7.</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════ SERVICES ═══════════════════ -->
    <section id="services" class="services section">
      <div class="container">

        <div class="services-header" data-aos="fade-up">
          <div>
            <span class="section-label">Servicios</span>
            <h2 class="section-title">Soluciones que<br><span class="accent">ya funcionan</span></h2>
            <p class="section-sub">Tecnología open source, configurada por expertos, lista para escalar.</p>
          </div>
          <a href="service-details.html" class="services-link">
            Ver todos los servicios <i class="bi bi-arrow-right"></i>
          </a>
        </div>

        <div class="services-grid">

          <div class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="service-card-icon" style="background: rgba(37,99,235,.12); color: #60a5fa;">
              <i class="bi bi-diagram-3"></i>
            </div>
            <div class="service-card-tag">Automatización</div>
            <div class="service-card-title">Flujos automatizados</div>
            <div class="service-card-desc">Conectamos tus apps y automatizamos tareas repetitivas. Desde emails hasta sincronización de datos entre sistemas.</div>
            <div class="service-card-footer">
              <span class="service-card-tool">n8n</span>
              <div class="service-card-arrow"><i class="bi bi-arrow-up-right"></i></div>
            </div>
          </div>

          <div class="service-card" data-aos="fade-up" data-aos-delay="150">
            <div class="service-card-icon" style="background: rgba(6,182,212,.12); color: #22d3ee;">
              <i class="bi bi-bar-chart-line"></i>
            </div>
            <div class="service-card-tag">Business Intelligence</div>
            <div class="service-card-title">Dashboards interactivos</div>
            <div class="service-card-desc">KPIs y métricas en tiempo real. Reportes automáticos para que cada área tome decisiones con datos confiables.</div>
            <div class="service-card-footer">
              <span class="service-card-tool">Metabase</span>
              <div class="service-card-arrow"><i class="bi bi-arrow-up-right"></i></div>
            </div>
          </div>

          <div class="service-card" data-aos="fade-up" data-aos-delay="200">
            <div class="service-card-icon" style="background: rgba(139,92,246,.12); color: #a78bfa;">
              <i class="bi bi-table"></i>
            </div>
            <div class="service-card-tag">Datos</div>
            <div class="service-card-title">Gestión visual de datos</div>
            <div class="service-card-desc">Administrá bases de datos como hojas de cálculo. Sin SQL, sin fricción, con toda la potencia de una base relacional.</div>
            <div class="service-card-footer">
              <span class="service-card-tool">NocoDB</span>
              <div class="service-card-arrow"><i class="bi bi-arrow-up-right"></i></div>
            </div>
          </div>

          <div class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="service-card-icon" style="background: rgba(245,158,11,.12); color: #fbbf24;">
              <i class="bi bi-plug"></i>
            </div>
            <div class="service-card-tag">Integración</div>
            <div class="service-card-title">Integraciones personalizadas</div>
            <div class="service-card-desc">Conectamos tus sistemas actuales con APIs, bases de datos y herramientas externas. Todo funciona junto.</div>
            <div class="service-card-footer">
              <span class="service-card-tool">API / Webhooks</span>
              <div class="service-card-arrow"><i class="bi bi-arrow-up-right"></i></div>
            </div>
          </div>

          <div class="service-card" data-aos="fade-up" data-aos-delay="150">
            <div class="service-card-icon" style="background: rgba(16,185,129,.12); color: #34d399;">
              <i class="bi bi-robot"></i>
            </div>
            <div class="service-card-tag">Inteligencia Artificial</div>
            <div class="service-card-title">Agentes inteligentes</div>
            <div class="service-card-desc">IA que atiende, deriva y aprende en WhatsApp con Chatwoot. Disponible 24/7. Sin código de tu parte.</div>
            <div class="service-card-footer">
              <span class="service-card-tool">LLM + n8n</span>
              <div class="service-card-arrow"><i class="bi bi-arrow-up-right"></i></div>
            </div>
          </div>

          <div class="service-card" data-aos="fade-up" data-aos-delay="200">
            <div class="service-card-icon" style="background: rgba(239,68,68,.12); color: #f87171;">
              <i class="bi bi-file-earmark-bar-graph"></i>
            </div>
            <div class="service-card-tag">Reporting</div>
            <div class="service-card-title">Reportes automáticos</div>
            <div class="service-card-desc">Generá informes diarios, semanales o a demanda. Tus métricas llegan solas, al equipo correcto, en el momento justo.</div>
            <div class="service-card-footer">
              <span class="service-card-tool">Metabase + n8n</span>
              <div class="service-card-arrow"><i class="bi bi-arrow-up-right"></i></div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════ STEPS ═══════════════════ -->
    <section id="steps" class="steps section">
      <div class="container">

        <div class="text-center mb-5" data-aos="fade-up">
          <span class="section-label">Proceso</span>
          <h2 class="section-title">De cero a automatizado<br><span class="accent">en 4 pasos</span></h2>
          <p class="section-sub mx-auto" style="max-width:480px;">Sin reuniones interminables. Sin implementaciones que duran meses.</p>
        </div>

        <div class="steps-track" data-aos="fade-up" data-aos-delay="100">

          <div class="step-row">
            <div class="step-node"><i class="bi bi-lightbulb"></i></div>
            <div class="step-body">
              <div class="step-num-tag">Paso 01</div>
              <div class="step-title">Diagnóstico inicial</div>
              <div class="step-desc">Escuchamos tu operación, mapeamos los procesos que más tiempo consumen e identificamos dónde la automatización genera mayor impacto. Sin compromiso.</div>
              <div class="step-chips">
                <span class="step-chip"><i class="bi bi-calendar-check"></i> 1 reunión</span>
                <span class="step-chip"><i class="bi bi-clock"></i> 45 min</span>
                <span class="step-chip"><i class="bi bi-gift"></i> Gratis</span>
              </div>
            </div>
          </div>

          <div class="step-row">
            <div class="step-node"><i class="bi bi-gear"></i></div>
            <div class="step-body">
              <div class="step-num-tag">Paso 02</div>
              <div class="step-title">Diseño del flujo</div>
              <div class="step-desc">Modelamos los procesos con las herramientas adecuadas: n8n para automatizaciones, NocoDB para datos, Metabase para dashboards. Todo enfocado en resultados medibles.</div>
              <div class="step-chips">
                <span class="step-chip"><i class="bi bi-diagram-3"></i> n8n</span>
                <span class="step-chip"><i class="bi bi-table"></i> NocoDB</span>
                <span class="step-chip"><i class="bi bi-bar-chart-line"></i> Metabase</span>
              </div>
            </div>
          </div>

          <div class="step-row">
            <div class="step-node"><i class="bi bi-rocket-takeoff"></i></div>
            <div class="step-body">
              <div class="step-num-tag">Paso 03</div>
              <div class="step-title">Implementación</div>
              <div class="step-desc">Desplegamos la solución, conectamos tus sistemas y activamos los flujos. El primer resultado live puede estar en menos de 48 horas.</div>
              <div class="step-chips">
                <span class="step-chip"><i class="bi bi-lightning-charge"></i> 48hs primer flujo</span>
                <span class="step-chip"><i class="bi bi-shield-check"></i> Zero downtime</span>
              </div>
            </div>
          </div>

          <div class="step-row">
            <div class="step-node"><i class="bi bi-graph-up-arrow"></i></div>
            <div class="step-body">
              <div class="step-num-tag">Paso 04</div>
              <div class="step-title">Soporte y mejora continua</div>
              <div class="step-desc">Monitoreamos el funcionamiento, analizamos métricas y ajustamos los flujos para que tu operación siga evolucionando con el negocio.</div>
              <div class="step-chips">
                <span class="step-chip"><i class="bi bi-headset"></i> Soporte incluido</span>
                <span class="step-chip"><i class="bi bi-arrow-repeat"></i> Mejoras iterativas</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════ SOCIAL PROOF ═══════════════════ -->
    <section id="testimonials" class="social-proof section">
      <div class="container">

        <div class="text-center mb-5" data-aos="fade-up">
          <span class="section-label">Resultados reales</span>
          <h2 class="section-title">Lo que dicen<br><span class="accent">quienes confiaron</span></h2>
          <p class="section-sub mx-auto" style="max-width:480px;">Empresas que automatizaron con Brain y midieron el impacto.</p>
        </div>

        <div class="stats-strip" data-aos="fade-up" data-aos-delay="100">
          <div class="stat-cell">
            <div class="stat-value">+50</div>
            <div class="stat-label">Empresas automatizadas</div>
          </div>
          <div class="stat-cell">
            <div class="stat-value">3x</div>
            <div class="stat-label">Velocidad operativa promedio</div>
          </div>
          <div class="stat-cell">
            <div class="stat-value">-70%</div>
            <div class="stat-label">Tareas manuales eliminadas</div>
          </div>
          <div class="stat-cell">
            <div class="stat-value">48hs</div>
            <div class="stat-label">Primer resultado live</div>
          </div>
        </div>

        <div class="testimonials-grid" data-aos="fade-up" data-aos-delay="200">

          <div class="testimonial-card featured">
            <div class="testimonial-quote-icon"><i class="bi bi-quote"></i></div>
            <p class="testimonial-text">"Con Brain conectamos todas nuestras herramientas internas sin escribir una sola línea de código. Los flujos quedaron orquestados desde una interfaz visual y los resultados se notaron en menos de una semana. Automatizamos procesos críticos que antes hacíamos a mano todos los días."</p>
            <div class="testimonial-meta">
              <div class="testimonial-avatar">MG</div>
              <div>
                <div class="testimonial-name">Martín González</div>
                <div class="testimonial-role">COO · Empresa de logística</div>
              </div>
              <span class="testimonial-tag"><i class="bi bi-diagram-3"></i> n8n</span>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-quote-icon"><i class="bi bi-quote"></i></div>
            <p class="testimonial-text">"Antes dependíamos de reportes manuales. Ahora cada área tiene visibilidad total con dashboards automáticos en Metabase."</p>
            <div class="testimonial-meta">
              <div class="testimonial-avatar">LC</div>
              <div>
                <div class="testimonial-name">Laura Castillo</div>
                <div class="testimonial-role">Gerente de datos · Retail</div>
              </div>
              <span class="testimonial-tag"><i class="bi bi-bar-chart-line"></i> Metabase</span>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-quote-icon"><i class="bi bi-quote"></i></div>
            <p class="testimonial-text">"El equipo técnico entendió lo que necesitábamos desde el primer momento. Implementaron módulos que se adaptaron perfecto a nuestra infraestructura."</p>
            <div class="testimonial-meta">
              <div class="testimonial-avatar">PR</div>
              <div>
                <div class="testimonial-name">Pablo Rivas</div>
                <div class="testimonial-role">CTO · Startup fintech</div>
              </div>
              <span class="testimonial-tag"><i class="bi bi-plug"></i> API</span>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-quote-icon"><i class="bi bi-quote"></i></div>
            <p class="testimonial-text">"Concentramos la información de cuatro sistemas en un solo panel. Ahora todo el equipo accede a los datos que necesita, cuando los necesita."</p>
            <div class="testimonial-meta">
              <div class="testimonial-avatar">AF</div>
              <div>
                <div class="testimonial-name">Ana Fernández</div>
                <div class="testimonial-role">Directora · Consultora B2B</div>
              </div>
              <span class="testimonial-tag"><i class="bi bi-table"></i> NocoDB</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════ PRICING ═══════════════════ -->
    <section id="pricing" class="pricing section">
      <div class="container">

        <div class="text-center mb-5" data-aos="fade-up">
          <span class="section-label">Planes</span>
          <h2 class="section-title">Elegí el plan que<br><span class="accent">escala con tu negocio</span></h2>
          <p class="section-sub mx-auto" style="max-width:520px;">Todos los planes incluyen onboarding, configuración inicial y soporte técnico. Sin costos ocultos.</p>
          <div class="billing-toggle">
            <span class="active">Mensual</span>
            <div class="toggle-pill"></div>
            <span>Anual <span style="color:#4ade80;font-size:11px;font-weight:700;">−20%</span></span>
          </div>
        </div>

        <div class="pricing-grid" data-aos="fade-up" data-aos-delay="100">

          <!-- Starter -->
          <div class="pricing-card">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="plan-icon" style="background: rgba(37,99,235,.10); color: var(--accent-light);">
                <i class="bi bi-whatsapp" style="color:#4ade80;"></i>
              </div>
              <span class="plan-tier">Starter</span>
            </div>
            <div class="plan-name">Bot Essential</div>
            <div class="plan-tagline">Para negocios que quieren automatizar su atención al cliente en WhatsApp desde el día uno.</div>

            <div class="plan-price-block">
              <div class="plan-price">
                <span class="price-usd">USD</span>
                <span class="price-num">100</span>
                <span class="price-per">/mes</span>
              </div>
              <div class="price-note">Facturación mensual · Cancelación en cualquier momento</div>
            </div>

            <div class="plan-section-label">Stack incluido</div>
            <div class="stack-chips">
              <span class="chip chip-wa"><i class="bi bi-whatsapp"></i> WhatsApp</span>
              <span class="chip chip-ct"><i class="bi bi-headset"></i> Chatwoot</span>
              <span class="chip chip-llm"><i class="bi bi-robot"></i> LLM</span>
            </div>

            <div class="plan-section-label">Funcionalidades</div>
            <ul class="plan-features">
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span><span class="feat-highlight">1 bot de WhatsApp</span> con IA conversacional</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Agendamiento de turnos automático</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span><span class="feat-highlight">Chatwoot</span> — bandeja unificada de conversaciones</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Panel de administración completo</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Transferencia a agente humano</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Historial y etiquetado de conversaciones</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Soporte técnico por email</span></li>
              <li class="feat-disabled"><i class="bi bi-x-circle feat-off"></i> Dashboards Metabase</li>
              <li class="feat-disabled"><i class="bi bi-x-circle feat-off"></i> Flujos n8n personalizados</li>
              <li class="feat-disabled"><i class="bi bi-x-circle feat-off"></i> Múltiples bots</li>
            </ul>

            <a href="#contact" class="plan-cta cta-ghost">Empezar con Starter</a>
          </div>

          <!-- Business -->
          <div class="pricing-card popular">
            <div class="popular-badge">Más popular</div>
            <div class="d-flex align-items-center justify-content-between mb-4 mt-3">
              <div class="plan-icon" style="background: rgba(37,99,235,.15); color: var(--accent-light);">
                <i class="bi bi-diagram-3"></i>
              </div>
              <span class="plan-tier">Business</span>
            </div>
            <div class="plan-name">Automation Suite</div>
            <div class="plan-tagline">Para equipos que necesitan múltiples bots, datos centralizados y automatizaciones que conectan todo.</div>

            <div class="plan-price-block">
              <div class="plan-price">
                <span class="price-usd">USD</span>
                <span class="price-num">300</span>
                <span class="price-per">/mes</span>
              </div>
              <div class="price-note">Todo lo de Starter · Escala sin límites</div>
            </div>

            <div class="plan-section-label">Stack incluido</div>
            <div class="stack-chips">
              <span class="chip chip-wa"><i class="bi bi-whatsapp"></i> WhatsApp</span>
              <span class="chip chip-ct"><i class="bi bi-headset"></i> Chatwoot</span>
              <span class="chip chip-llm"><i class="bi bi-robot"></i> LLM</span>
              <span class="chip chip-mb"><i class="bi bi-bar-chart-line"></i> Metabase</span>
              <span class="chip chip-n8n"><i class="bi bi-diagram-3"></i> n8n</span>
              <span class="chip chip-noco"><i class="bi bi-table"></i> NocoDB</span>
            </div>

            <div class="plan-section-label">Funcionalidades</div>
            <ul class="plan-features">
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span><span class="feat-highlight">Hasta 3 bots de WhatsApp</span> con IA</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Agendamiento + CRM integrado</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Chatwoot multi-bandeja para todo el equipo</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span><span class="feat-highlight">Dashboards Metabase</span> — KPIs y reportes automáticos</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span><span class="feat-highlight">Flujos n8n</span> ilimitados</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span><span class="feat-highlight">NocoDB</span> — gestión visual de datos sin SQL</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Integraciones personalizadas</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Soporte prioritario · respuesta en 4 hs</span></li>
              <li class="feat-disabled"><i class="bi bi-x-circle feat-off"></i> Bots ilimitados</li>
              <li class="feat-disabled"><i class="bi bi-x-circle feat-off"></i> Soporte dedicado 24/7</li>
            </ul>

            <a href="#contact" class="plan-cta cta-primary">Empezar con Business</a>
          </div>

          <!-- Scale -->
          <div class="pricing-card">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="plan-icon" style="background: rgba(139,92,246,.12); color: #a78bfa;">
                <i class="bi bi-building"></i>
              </div>
              <span class="plan-tier">Scale</span>
            </div>
            <div class="plan-name">Full Stack</div>
            <div class="plan-tagline">Para organizaciones que necesitan automatización completa, múltiples canales y soporte enterprise.</div>

            <div class="plan-price-block">
              <div class="plan-price">
                <span class="price-usd">USD</span>
                <span class="price-num">500</span>
                <span class="price-per">/mes</span>
              </div>
              <div class="price-note">Todo lo de Business · SLA garantizado</div>
            </div>

            <div class="plan-section-label">Stack incluido</div>
            <div class="stack-chips">
              <span class="chip chip-wa"><i class="bi bi-whatsapp"></i> WhatsApp</span>
              <span class="chip chip-ct"><i class="bi bi-headset"></i> Chatwoot</span>
              <span class="chip chip-llm"><i class="bi bi-robot"></i> LLM</span>
              <span class="chip chip-mb"><i class="bi bi-bar-chart-line"></i> Metabase</span>
              <span class="chip chip-n8n"><i class="bi bi-diagram-3"></i> n8n</span>
              <span class="chip chip-noco"><i class="bi bi-table"></i> NocoDB</span>
            </div>

            <div class="plan-section-label">Funcionalidades</div>
            <ul class="plan-features">
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span><span class="feat-highlight">Bots ilimitados</span> — WhatsApp, email, web</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Agentes de IA por departamento</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Chatwoot enterprise — equipos ilimitados</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Dashboards multi-área en Metabase</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Automatizaciones n8n con flujos críticos</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Integraciones con ERP, CRM y sistemas legacy</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span><span class="feat-highlight">Soporte dedicado 24/7</span></span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>SLA de respuesta garantizado</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Capacitación del equipo incluida</span></li>
              <li><i class="bi bi-check-circle-fill feat-on"></i> <span>Onboarding con PM dedicado</span></li>
            </ul>

            <a href="#contact" class="plan-cta cta-ghost">Contactar ventas</a>
          </div>

        </div>

        <p class="pricing-note" data-aos="fade-up">
          <i class="bi bi-shield-check"></i>
          Todos los planes incluyen configuración inicial, infraestructura en la nube y actualizaciones de seguridad sin costo adicional.
        </p>

      </div>
    </section>

    <!-- ═══════════════════ FAQ ═══════════════════ -->
    <section id="faq" class="faq section">
      <div class="container">
        <div class="faq-layout">

          <div class="faq-left" data-aos="fade-right">
            <span class="section-label">FAQ</span>
            <h2 class="section-title">Preguntas<br><span class="accent">frecuentes</span></h2>
            <p class="section-sub" style="font-size:14px;">¿No encontrás lo que buscás? Escribinos directamente.</p>
            <div class="faq-cta-box">
              <p>¿Tenés una pregunta más específica sobre tu caso de uso?</p>
              <a href="#contact" class="faq-cta-btn">
                <i class="bi bi-chat-dots"></i> Hablar con el equipo
              </a>
            </div>
          </div>

          <div class="faq-list" data-aos="fade-left" data-aos-delay="100">

            <div class="faq-item faq-active">
              <div class="faq-question">
                <h3>¿Qué es la automatización con n8n?</h3>
                <span class="faq-toggle"><i class="bi bi-plus"></i></span>
              </div>
              <div class="faq-content">
                <p>n8n es una herramienta de automatización visual que conecta tus aplicaciones sin código. Con Brain diseñamos flujos personalizados que automatizan tareas repetitivas y reducen errores en tu operación.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <h3>¿Qué herramientas utilizan?</h3>
                <span class="faq-toggle"><i class="bi bi-plus"></i></span>
              </div>
              <div class="faq-content">
                <p>Trabajamos con tecnologías open source: n8n para automatización, NocoDB para gestión de datos, Metabase para dashboards y Chatwoot para gestión de conversaciones. Todas flexibles, seguras y escalables.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <h3>¿Qué tipo de procesos puedo automatizar?</h3>
                <span class="faq-toggle"><i class="bi bi-plus"></i></span>
              </div>
              <div class="faq-content">
                <p>Desde envío de emails y reportes automáticos hasta integración de sistemas, atención al cliente con IA en WhatsApp y sincronización de datos. Todo depende de tu necesidad específica.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <h3>¿Cuánto tarda el proceso de implementación?</h3>
                <span class="faq-toggle"><i class="bi bi-plus"></i></span>
              </div>
              <div class="faq-content">
                <p>Un flujo simple puede estar live en 48 horas. Un proyecto integral puede llevar semanas. Hacemos un diagnóstico sin compromiso para darte un estimado preciso.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <h3>¿Ofrecen soporte post-implementación?</h3>
                <span class="faq-toggle"><i class="bi bi-plus"></i></span>
              </div>
              <div class="faq-content">
                <p>Sí. Monitoreamos el funcionamiento, analizamos métricas y hacemos ajustes continuos. El soporte está incluido según el plan elegido.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <h3>¿Trabajan con empresas argentinas?</h3>
                <span class="faq-toggle"><i class="bi bi-plus"></i></span>
              </div>
              <div class="faq-content">
                <p>Absolutamente. Somos una startup argentina y trabajamos con clientes de todo el país. Conocemos el contexto local, las regulaciones y las necesidades de tu negocio.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ CONTACT ═══════════════════ -->
    <section id="contact" class="contact section">
      <div class="container">

        <div class="text-center mb-5" data-aos="fade-up">
          <span class="section-label">Contacto</span>
          <h2 class="section-title">Hablemos de<br><span class="accent">tu proyecto</span></h2>
          <p class="section-sub mx-auto" style="max-width:480px;">Contanos qué necesitás y te respondemos en menos de 24 horas.</p>
        </div>

        <div class="contact-layout" data-aos="fade-up" data-aos-delay="100">

          <div>
            <div class="contact-info-list">
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="bi bi-geo-alt"></i></div>
                <div>
                  <div class="contact-info-label">Ubicación</div>
                  <div class="contact-info-value">Buenos Aires, Argentina</div>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="bi bi-envelope"></i></div>
                <div>
                  <div class="contact-info-label">Email</div>
                  <div class="contact-info-value">
                    <a href="mailto:info@brain.com.ar">info@brain.com.ar</a>
                  </div>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="bi bi-clock"></i></div>
                <div>
                  <div class="contact-info-label">Horarios</div>
                  <div class="contact-info-value">Lun–Vie: 9 a 18 hs · Sáb: 9 a 16 hs</div>
                </div>
              </div>
            </div>

            <div class="contact-social mt-4">
              <a href="#" class="social-icon-btn"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="social-icon-btn"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-icon-btn"><i class="bi bi-twitter-x"></i></a>
              <a href="#" class="social-icon-btn"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>

          <div class="contact-form-card">
            <h3>Enviá tu consulta</h3>
            <p class="form-sub">Te respondemos en menos de 24 horas hábiles.</p>

            <form id="contact-form" action="#" method="post">
              <div class="form-row">
                <div class="form-field">
                  <label for="nameInput">Nombre</label>
                  <input type="text" id="nameInput" name="name" placeholder="Tu nombre completo" required>
                </div>
                <div class="form-field">
                  <label for="emailInput">Email</label>
                  <input type="email" id="emailInput" name="email" placeholder="tu@empresa.com" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field full">
                  <label for="subjectInput">Asunto</label>
                  <input type="text" id="subjectInput" name="subject" placeholder="¿En qué podemos ayudarte?" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field full">
                  <label for="messageInput">Mensaje</label>
                  <textarea id="messageInput" name="message" placeholder="Contanos sobre tu proyecto o proceso..." required></textarea>
                </div>
              </div>

              <div id="form-status">
                <div class="loading">Enviando...</div>
                <div class="error-message"></div>
                <div class="sent-message">Tu mensaje fue enviado. ¡Gracias!</div>
              </div>

              <button type="submit" class="btn-submit">
                Enviar mensaje <i class="bi bi-send"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- ═══════════════════ FOOTER ═══════════════════ -->
  <footer id="footer" class="footer">
    <div class="container">

      <div class="footer-grid">
        <div>
          <div class="footer-logo">
            <img src="assets/img/logo.webp" alt="Brain Logo">
            <span class="sitename">Brain</span>
          </div>
          <p class="footer-tagline">Startup argentina de automatización inteligente. Desarrollamos soluciones con IA, n8n, NocoDB y Metabase para que tu negocio crezca de forma ágil y escalable.</p>
          <div class="footer-social">
            <a href="#" class="footer-social-btn"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="footer-social-btn"><i class="bi bi-instagram"></i></a>
            <a href="#" class="footer-social-btn"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="footer-social-btn"><i class="bi bi-github"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h5>Producto</h5>
          <ul>
            <li><a href="service-details.html">Flujos automatizados</a></li>
            <li><a href="service-details.html">Dashboards</a></li>
            <li><a href="service-details.html">Gestión de datos</a></li>
            <li><a href="service-details.html">Agentes de IA</a></li>
            <li><a href="service-details.html">Integraciones</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Empresa</h5>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#pricing">Planes</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#">Términos de uso</a></li>
            <li><a href="#">Privacidad</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Contacto</h5>
          <div class="footer-contact-row"><i class="bi bi-geo-alt"></i><span>Buenos Aires, Argentina</span></div>
          <div class="footer-contact-row"><i class="bi bi-envelope"></i><span>info@brain.com.ar</span></div>
          <div class="footer-contact-row"><i class="bi bi-clock"></i><span>Lun–Vie: 9 a 18 hs</span></div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2025 Brain. Todos los derechos reservados.</span>
        <div class="footer-bottom-links">
          <a href="#">Términos de uso</a>
          <a href="#">Política de privacidad</a>
        </div>
      </div>

    </div>
  </footer>

  <!-- ═══════════════════ SCROLL TOP ═══════════════════ -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
    <i class="bi bi-arrow-up-short"></i>
  </a>

  <!-- ═══════════════════ PRELOADER ═══════════════════ -->
  <div id="preloader"></div>

  <!-- ═══════════════════ CHAT WIDGET ═══════════════════ -->
  <button id="chat-widget-button" class="chat-widget-button" aria-label="Abrir chat">
    <i class="bi bi-chat-dots-fill"></i>
  </button>

  <div id="chat-widget-container" class="chat-widget-container">
    <div id="chat-widget-header" class="chat-widget-header">
      <span><i class="bi bi-chat-dots me-2"></i>Chat Brain</span>
      <button type="button" id="chat-widget-close" aria-label="Cerrar chat">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div id="chat-widget-body" class="chat-widget-body">
      <p class="chat-widget-welcome">¡Hola! Soy el asistente de Brain. ¿En qué puedo ayudarte?</p>
    </div>
    <div class="chat-widget-footer">
      <input
        type="text"
        id="chat-widget-input"
        class="chat-widget-input"
        placeholder="Escribí tu consulta..."
        autocomplete="off"
      >
      <button id="chat-widget-send" class="chat-widget-send" aria-label="Enviar">
        <i class="bi bi-send-fill"></i>
      </button>
    </div>
  </div>

  <!-- ═══════════════════ SCRIPTS ═══════════════════ -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>

  <script src="assets/js/main.js"></script>
  <script src="assets/js/contact-form.js"></script>
  <script src="assets/js/chat-widget.js"></script>

</body>
</html>
```

- [ ] **Step 2: Verificar que el HTML se guardó correctamente**

```bash
wc -l index.html
# Esperado: ~400+ líneas
grep -c "section" index.html
# Esperado: 9+ coincidencias (una por sección)
```

- [ ] **Step 3: Verificar IDs del formulario (compatibilidad con contact-form.js)**

Los IDs que usa `contact-form.js` deben estar presentes en el HTML:
```bash
grep -E "id=\"(contact-form|nameInput|emailInput|subjectInput|messageInput|form-status)\"" index.html
# Esperado: 6 líneas, una por cada ID
```

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: reescribir index.html con diseño dark tech narrativo"
```

---

## Task 3: Actualizar selector FAQ en main.js

**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Localizar el selector FAQ actual**

```bash
grep -n "faq" assets/js/main.js
```

Resultado esperado (línea ~169):
```
169:  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
170:    faqItem.addEventListener('click', () => {
171:      faqItem.parentNode.classList.toggle('faq-active');
```

- [ ] **Step 2: Reemplazar el bloque FAQ**

Reemplazar el bloque completo de FAQ toggle (líneas ~169-173) con:

```js
  /**
   * FAQ Toggle
   */
  document.querySelectorAll('.faq-item .faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      question.closest('.faq-item').classList.toggle('faq-active');
    });
  });
```

- [ ] **Step 3: Verificar que el scroll-top selector sigue funcionando**

```bash
grep -n "scroll-top\|scroll_top" assets/js/main.js
```

Resultado esperado: referencias a `.scroll-top` — el elemento en index.html tiene la clase `scroll-top`, compatible.

- [ ] **Step 4: Commit final**

```bash
git add assets/js/main.js
git commit -m "fix: actualizar selector FAQ accordion para nueva estructura HTML"
```

---

## Verificación final

Después de los 3 tasks, abrir `index.html` en el browser y verificar:

- [ ] Header glassmorphism visible con logo `logo.webp`
- [ ] Hero con blobs azules y grid overlay
- [ ] Sección Problema/Solución con columnas rojo/azul
- [ ] 6 service cards con hover glow
- [ ] Steps con track vertical y line connector
- [ ] Stats strip + 4 testimonials (card featured 2 cols)
- [ ] 3 pricing cards (Business escalado con badge)
- [ ] FAQ accordion funcional (click en `.faq-question`)
- [ ] Contact form con IDs correctos (probar envío)
- [ ] Chat widget abre/cierra correctamente
- [ ] Footer con logo y links legales
- [ ] Scroll-top aparece al bajar 100px
- [ ] Preloader desaparece al cargar
