# Brain Website — Cleanup + Mockups Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminar archivos obsoletos y assets sin uso, agregar mockups de producto en perspectiva 3D en service cards + steps + service-details, y escribir un README moderno para GitHub.

**Architecture:** Sitio estático HTML/CSS puro. Los mockups son HTML/CSS inline sin JS, usando `transform: rotateX/rotateY` con `perspective`. Las clases reutilizables van en `main.css`. Cada tarea produce cambios autocontenidos y commitables.

**Tech Stack:** HTML5, CSS3 (custom properties, 3D transforms), Bootstrap 5 (grid/utils), Bootstrap Icons, AOS (scroll animations)

---

## Archivos involucrados

| Acción | Archivo |
|--------|---------|
| Modificar | `assets/css/main.css` — agregar clases CSS de perspectiva |
| Modificar | `index.html` — mockups en service cards + steps 2 y 3 |
| Modificar | `service-details.html` — mockups en 6 service detail cards |
| Crear | `README.md` — reemplazar contenido existente |
| Eliminar | `portfolio-details.html` |
| Eliminar | `starter-page.html` |
| Eliminar | `assets/vendor/glightbox/` |
| Eliminar | `assets/vendor/swiper/` |
| Eliminar | `assets/vendor/isotope-layout/` |
| Eliminar | `assets/vendor/imagesloaded/` |
| Eliminar | `assets/img/services/` |
| Eliminar | `assets/img/misc/` |
| Eliminar | `assets/img/about/` |
| Eliminar | `assets/img/person/` |
| Eliminar | `assets/img/testimonials/` |
| Eliminar | `assets/img/logo.webp` |

---

## Task 1: Agregar CSS de perspectiva en main.css

**Files:**
- Modify: `assets/css/main.css` (append al final, después de línea 1229)
- Modify: `assets/css/main.css:503` — cambiar `overflow: hidden` a `overflow: visible` en `.service-card`

- [ ] **Step 1: Cambiar overflow en .service-card**

En `assets/css/main.css` línea 507, cambiar:
```css
.service-card {
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border-subtle);
  border-radius: 16px; padding: 28px;
  position: relative; overflow: hidden;
  transition: border-color .2s, background .2s;
  cursor: pointer;
}
```
por:
```css
.service-card {
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border-subtle);
  border-radius: 16px; padding: 28px;
  position: relative; overflow: visible;
  transition: border-color .2s, background .2s;
  cursor: pointer;
}
```

- [ ] **Step 2: Agregar clases de perspectiva al final de main.css**

Añadir después de la última línea (1229) de `assets/css/main.css`:

```css

/* ── PERSPECTIVE MOCKUPS (service cards + steps + service details) ── */

/* Wrapper que establece el contexto de perspectiva */
.tilt-wrap {
  perspective: 700px;
  margin: 14px 0;
  height: 88px;
}

/* Variante más alta para service-details cards */
.tilt-wrap-lg {
  perspective: 700px;
  margin: 20px 0;
  height: 110px;
}

/* Variante compacta para steps */
.tilt-wrap-sm {
  perspective: 600px;
  margin: 14px 0;
  height: 72px;
}

/* Pantalla principal con transform 3D */
.tilt-screen {
  width: 100%;
  height: 100%;
  background: #070c14;
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 10px;
  transform: rotateX(14deg) rotateY(-5deg) scale(0.97);
  transform-origin: bottom center;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,99,235,0.08);
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Chrome bar superior con los dots */
.tilt-bar {
  background: #111827;
  height: 18px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 4px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  flex-shrink: 0;
}

.tilt-dots { display: flex; gap: 4px; }
.tilt-dot { width: 5px; height: 5px; border-radius: 50%; }
.tilt-dot-r { background: #ef4444; }
.tilt-dot-y { background: #f59e0b; }
.tilt-dot-g { background: #22c55e; }

.tilt-title {
  font-size: 8px;
  color: #374151;
  font-weight: 500;
  flex: 1;
  text-align: center;
  letter-spacing: 0.5px;
}

/* Área de contenido del mockup */
.tilt-body {
  padding: 8px 10px;
  flex: 1;
  overflow: hidden;
}

/* Overlay de glow — cada card le pone su color via style */
.tilt-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* ── Elementos internos reutilizables ── */

/* Nodos de n8n */
.tilt-nodes { display: flex; align-items: center; gap: 4px; margin-bottom: 6px; }
.tilt-node {
  font-size: 8px; font-weight: 700;
  padding: 4px 7px; border-radius: 5px;
  white-space: nowrap; flex-shrink: 0;
}
.tilt-node-blue  { background: rgba(37,99,235,.15);  color: #60a5fa; border: 1px solid rgba(37,99,235,.25); }
.tilt-node-green { background: rgba(16,185,129,.12); color: #34d399; border: 1px solid rgba(16,185,129,.2); }
.tilt-node-cyan  { background: rgba(6,182,212,.12);  color: #22d3ee; border: 1px solid rgba(6,182,212,.2); }
.tilt-node-amber { background: rgba(245,158,11,.12); color: #fbbf24; border: 1px solid rgba(245,158,11,.2); }
.tilt-edge {
  flex: 1; height: 1px; background: rgba(255,255,255,.08);
  position: relative; min-width: 6px;
}
.tilt-edge::after {
  content: '▶'; position: absolute; right: -3px; top: -6px;
  font-size: 7px; color: rgba(255,255,255,.15);
}

/* Mini bar chart */
.tilt-bars { display: flex; align-items: flex-end; gap: 2px; height: 26px; }
.tilt-bar-item { flex: 1; border-radius: 2px 2px 0 0; }

/* KPI row para Metabase */
.tilt-kpis { display: flex; gap: 5px; margin-bottom: 5px; }
.tilt-kpi {
  flex: 1; background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 5px; padding: 3px 5px;
}
.tilt-kpi-num { font-size: 10px; font-weight: 900; line-height: 1; }
.tilt-kpi-lbl { font-size: 7px; color: #4b5563; margin-top: 1px; }

/* SVG chart */
.tilt-chart { height: 22px; position: relative; overflow: hidden; }
.tilt-chart svg { width: 100%; height: 100%; display: block; }

/* Table rows para NocoDB */
.tilt-thead { display: flex; gap: 4px; margin-bottom: 2px; }
.tilt-th {
  flex: 1; font-size: 7px; font-weight: 700;
  color: #374151; text-transform: uppercase;
  letter-spacing: .5px; padding: 2px 3px;
  background: rgba(255,255,255,.03); border-radius: 3px;
}
.tilt-tr { display: flex; gap: 4px; margin-bottom: 2px; }
.tilt-td {
  flex: 1; font-size: 7px; color: #9ca3af;
  padding: 2px 3px;
  border-bottom: 1px solid rgba(255,255,255,.03);
  white-space: nowrap; overflow: hidden;
}
.tilt-badge {
  display: inline-block; font-size: 6px; font-weight: 700;
  padding: 1px 4px; border-radius: 3px;
}
.tilt-badge-green { background: rgba(74,222,128,.1);  color: #4ade80; }
.tilt-badge-blue  { background: rgba(37,99,235,.1);   color: #60a5fa; }

/* Terminal para API */
.tilt-term { display: flex; flex-direction: column; gap: 3px; }
.tilt-term-line { font-family: 'Courier New', monospace; font-size: 8px; line-height: 1.3; }
.tc-green { color: #4ade80; }
.tc-blue  { color: #60a5fa; }
.tc-amber { color: #fbbf24; }
.tc-gray  { color: #4b5563; }
.tc-white { color: #d1d5db; }

/* Chat bubbles para Chatwoot */
.tilt-chat { display: flex; flex-direction: column; gap: 4px; }
.tilt-msg { display: flex; gap: 4px; align-items: flex-end; }
.tilt-msg-user { flex-direction: row-reverse; }
.tilt-avatar {
  width: 12px; height: 12px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 6px; flex-shrink: 0;
}
.tilt-bubble { padding: 3px 6px; border-radius: 7px; font-size: 7px; line-height: 1.4; max-width: 85%; }
.tilt-bubble-bot  { background: rgba(37,99,235,.15);  color: #93c5fd; border-radius: 7px 7px 7px 2px; }
.tilt-bubble-user { background: rgba(37,99,235,.3);   color: #e0f2fe; border-radius: 7px 7px 2px 7px; }
.tilt-typing { display: flex; gap: 2px; align-items: center; padding: 3px 6px; }
.tilt-typing span {
  width: 4px; height: 4px; border-radius: 50%;
  background: #60a5fa; opacity: 0.6;
  animation: tiltTyping 1.2s infinite;
}
.tilt-typing span:nth-child(2) { animation-delay: 0.2s; }
.tilt-typing span:nth-child(3) { animation-delay: 0.4s; }
@keyframes tiltTyping {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.6; }
  30% { transform: translateY(-3px); opacity: 1; }
}

/* Report rows */
.tilt-report { display: flex; flex-direction: column; gap: 0; }
.tilt-report-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 4px;
}
.tilt-report-title { font-size: 8px; font-weight: 700; color: #d1d5db; }
.tilt-report-badge {
  font-size: 7px; background: rgba(74,222,128,.15);
  color: #4ade80; padding: 1px 5px; border-radius: 4px; font-weight: 700;
}
.tilt-report-row {
  display: flex; align-items: center; gap: 5px;
  padding: 2px 0; border-bottom: 1px solid rgba(255,255,255,.04);
}
.tilt-report-lbl { font-size: 7px; color: #6b7280; width: 28px; flex-shrink: 0; }
.tilt-report-bar-wrap { flex: 1; height: 3px; background: rgba(255,255,255,.06); border-radius: 2px; }
.tilt-report-bar { height: 100%; border-radius: 2px; }
.tilt-report-val { font-size: 7px; font-weight: 700; color: #f9fafb; width: 26px; text-align: right; flex-shrink: 0; }

/* Deploy terminal para step 03 */
.tilt-deploy { display: flex; flex-direction: column; gap: 3px; }
```

- [ ] **Step 3: Verificar que el CSS no tenga errores de sintaxis**

Abrir `assets/css/main.css` en el browser y confirmar que no hay errores en DevTools > Console. El sitio debe renderizar igual que antes (los nuevos estilos no aplican hasta que se agregue el HTML).

- [ ] **Step 4: Commit**

```bash
git add assets/css/main.css
git commit -m "feat: agregar CSS de perspectiva 3D para mockups de producto"
```

---

## Task 2: Mockups en service cards (index.html)

**Files:**
- Modify: `index.html` (sección `#services`, 6 `.service-card`)

Los mockups se insertan entre `.service-card-desc` y `.service-card-footer` en cada card. La desc pasa de `margin-bottom: 20px` a `margin-bottom: 0` para que el mockup provea el espacio (ya manejado por `.tilt-wrap` margin-top: 14px).

- [ ] **Step 1: Agregar mockup en card n8n (primera card)**

En `index.html`, localizar la primera `.service-card` (Flujos automatizados). Después de la línea:
```html
            <div class="service-card-desc">Conectamos tus apps y automatizamos tareas repetitivas. Desde emails hasta sincronización de datos entre sistemas.</div>
```
Insertar antes de `<div class="service-card-footer">`:
```html
            <div class="tilt-wrap">
              <div class="tilt-screen">
                <div class="tilt-bar">
                  <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                  <div class="tilt-title">n8n · workflow activo</div>
                </div>
                <div class="tilt-body">
                  <div class="tilt-nodes">
                    <div class="tilt-node tilt-node-blue">Webhook</div>
                    <div class="tilt-edge"></div>
                    <div class="tilt-node tilt-node-green">CRM</div>
                    <div class="tilt-edge"></div>
                    <div class="tilt-node tilt-node-cyan">NocoDB</div>
                    <div class="tilt-edge"></div>
                    <div class="tilt-node tilt-node-amber">Email</div>
                  </div>
                  <div class="tilt-bars">
                    <div class="tilt-bar-item" style="background:rgba(37,99,235,.35);height:35%"></div>
                    <div class="tilt-bar-item" style="background:rgba(37,99,235,.6);height:62%"></div>
                    <div class="tilt-bar-item" style="background:rgba(37,99,235,.35);height:38%"></div>
                    <div class="tilt-bar-item" style="background:rgba(37,99,235,.8);height:80%"></div>
                    <div class="tilt-bar-item" style="background:rgba(37,99,235,.5);height:52%"></div>
                    <div class="tilt-bar-item" style="background:rgba(37,99,235,.9);height:100%"></div>
                    <div class="tilt-bar-item" style="background:rgba(37,99,235,.6);height:65%"></div>
                    <div class="tilt-bar-item" style="background:rgba(37,99,235,.4);height:45%"></div>
                  </div>
                </div>
                <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(37,99,235,.05),transparent 60%)"></div>
              </div>
            </div>
```

- [ ] **Step 2: Agregar mockup en card Metabase (segunda card)**

Después de la desc de "Dashboards interactivos", insertar antes del footer:
```html
            <div class="tilt-wrap">
              <div class="tilt-screen" style="border-color:rgba(6,182,212,.15);">
                <div class="tilt-bar">
                  <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                  <div class="tilt-title">Metabase · KPIs live</div>
                </div>
                <div class="tilt-body">
                  <div class="tilt-kpis">
                    <div class="tilt-kpi"><div class="tilt-kpi-num" style="color:#22d3ee;">247</div><div class="tilt-kpi-lbl">Flujos hoy</div></div>
                    <div class="tilt-kpi"><div class="tilt-kpi-num" style="color:#4ade80;">99.8%</div><div class="tilt-kpi-lbl">Uptime</div></div>
                    <div class="tilt-kpi"><div class="tilt-kpi-num" style="color:#f9fafb;">0</div><div class="tilt-kpi-lbl">Errores</div></div>
                  </div>
                  <div class="tilt-chart">
                    <svg viewBox="0 0 200 22" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <defs><linearGradient id="mg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0891b2" stop-opacity=".3"/><stop offset="100%" stop-color="#0891b2" stop-opacity="0"/></linearGradient></defs>
                      <polygon points="0,22 0,16 25,12 50,14 75,7 100,10 125,4 150,6 175,2 200,3 200,22" fill="url(#mg1)"/>
                      <polyline points="0,16 25,12 50,14 75,7 100,10 125,4 150,6 175,2 200,3" fill="none" stroke="#22d3ee" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
                <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(6,182,212,.05),transparent 60%)"></div>
              </div>
            </div>
```

- [ ] **Step 3: Agregar mockup en card NocoDB (tercera card)**

Después de la desc de "Gestión visual de datos":
```html
            <div class="tilt-wrap">
              <div class="tilt-screen" style="border-color:rgba(139,92,246,.15);">
                <div class="tilt-bar">
                  <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                  <div class="tilt-title">NocoDB · tabla clientes</div>
                </div>
                <div class="tilt-body">
                  <div class="tilt-thead">
                    <div class="tilt-th">Nombre</div>
                    <div class="tilt-th">Estado</div>
                    <div class="tilt-th">Valor</div>
                  </div>
                  <div class="tilt-tr">
                    <div class="tilt-td">Empresa Alpha</div>
                    <div class="tilt-td"><span class="tilt-badge tilt-badge-green">Activo</span></div>
                    <div class="tilt-td" style="color:#a78bfa;">$4.200</div>
                  </div>
                  <div class="tilt-tr">
                    <div class="tilt-td">Beta Corp</div>
                    <div class="tilt-td"><span class="tilt-badge tilt-badge-blue">Trial</span></div>
                    <div class="tilt-td" style="color:#a78bfa;">$1.800</div>
                  </div>
                  <div class="tilt-tr">
                    <div class="tilt-td">Gamma SA</div>
                    <div class="tilt-td"><span class="tilt-badge tilt-badge-green">Activo</span></div>
                    <div class="tilt-td" style="color:#a78bfa;">$6.500</div>
                  </div>
                </div>
                <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(139,92,246,.05),transparent 60%)"></div>
              </div>
            </div>
```

- [ ] **Step 4: Agregar mockup en card API/Webhooks (cuarta card)**

Después de la desc de "Integraciones personalizadas":
```html
            <div class="tilt-wrap">
              <div class="tilt-screen" style="border-color:rgba(245,158,11,.15);">
                <div class="tilt-bar">
                  <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                  <div class="tilt-title">API · webhook listener</div>
                </div>
                <div class="tilt-body">
                  <div class="tilt-term">
                    <div class="tilt-term-line"><span class="tc-green">POST</span> <span class="tc-blue">/webhook/crm</span></div>
                    <div class="tilt-term-line"><span class="tc-gray">▶</span> <span class="tc-white">payload:</span> <span class="tc-amber">{ "event": "lead.created" }</span></div>
                    <div class="tilt-term-line"><span class="tc-green">✓</span> <span class="tc-white">200 OK</span> <span class="tc-gray">· 43ms</span></div>
                    <div class="tilt-term-line"><span class="tc-gray">→</span> <span class="tc-blue">trigger:</span> <span class="tc-white">sync_nocodb</span></div>
                  </div>
                </div>
                <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(245,158,11,.04),transparent 60%)"></div>
              </div>
            </div>
```

- [ ] **Step 5: Agregar mockup en card Agentes IA (quinta card)**

Después de la desc de "Agentes inteligentes":
```html
            <div class="tilt-wrap">
              <div class="tilt-screen" style="border-color:rgba(16,185,129,.15);">
                <div class="tilt-bar">
                  <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                  <div class="tilt-title">Chatwoot · agente IA · online</div>
                </div>
                <div class="tilt-body" style="padding:5px 8px;">
                  <div class="tilt-chat">
                    <div class="tilt-msg">
                      <div class="tilt-avatar" style="background:rgba(16,185,129,.2);color:#34d399;">🤖</div>
                      <div class="tilt-bubble tilt-bubble-bot">¡Hola! ¿En qué puedo ayudarte?</div>
                    </div>
                    <div class="tilt-msg tilt-msg-user">
                      <div class="tilt-bubble tilt-bubble-user">Estado de mi pedido #4821</div>
                    </div>
                    <div class="tilt-msg">
                      <div class="tilt-avatar" style="background:rgba(16,185,129,.2);color:#34d399;">🤖</div>
                      <div class="tilt-bubble tilt-bubble-bot">En camino · llega mañana 🚚</div>
                    </div>
                  </div>
                </div>
                <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(16,185,129,.04),transparent 60%)"></div>
              </div>
            </div>
```

- [ ] **Step 6: Agregar mockup en card Reportes (sexta card)**

Después de la desc de "Reportes automáticos":
```html
            <div class="tilt-wrap">
              <div class="tilt-screen" style="border-color:rgba(239,68,68,.15);">
                <div class="tilt-bar">
                  <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                  <div class="tilt-title">Reporte semanal · enviado</div>
                </div>
                <div class="tilt-body">
                  <div class="tilt-report">
                    <div class="tilt-report-header">
                      <div class="tilt-report-title">Métricas · semana 15</div>
                      <div class="tilt-report-badge">✓ Enviado</div>
                    </div>
                    <div class="tilt-report-row">
                      <div class="tilt-report-lbl">Ventas</div>
                      <div class="tilt-report-bar-wrap"><div class="tilt-report-bar" style="width:78%;background:rgba(239,68,68,.6);"></div></div>
                      <div class="tilt-report-val">$48.2k</div>
                    </div>
                    <div class="tilt-report-row">
                      <div class="tilt-report-lbl">Leads</div>
                      <div class="tilt-report-bar-wrap"><div class="tilt-report-bar" style="width:55%;background:rgba(239,68,68,.4);"></div></div>
                      <div class="tilt-report-val">124</div>
                    </div>
                    <div class="tilt-report-row">
                      <div class="tilt-report-lbl">NPS</div>
                      <div class="tilt-report-bar-wrap"><div class="tilt-report-bar" style="width:90%;background:rgba(239,68,68,.7);"></div></div>
                      <div class="tilt-report-val">9.1</div>
                    </div>
                  </div>
                </div>
                <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(239,68,68,.04),transparent 60%)"></div>
              </div>
            </div>
```

- [ ] **Step 7: Verificar en browser**

Abrir `index.html` en el browser, ir a la sección #services. Los 6 cards deben mostrar su mockup en perspectiva. Verificar que las cards no muestren overflow clips. Si algún mockup se corta, confirmar que `.service-card` tiene `overflow: visible`.

- [ ] **Step 8: Commit**

```bash
git add index.html
git commit -m "feat: agregar mockups perspectiva 3D en service cards"
```

---

## Task 3: Mockups en steps section (index.html)

**Files:**
- Modify: `index.html` (sección `#steps`, pasos 02 y 03)

Solo los pasos 02 (Diseño del flujo) y 03 (Implementación) reciben mockup — son los más técnicos. Los pasos 01 y 04 quedan sin mockup para no saturar el layout.

- [ ] **Step 1: Agregar mockup en Paso 02 — Diseño del flujo**

Localizar en `index.html` el `step-body` del Paso 02 (línea ~385). Después de `</div>` que cierra `.step-chips`, antes del `</div>` que cierra `.step-body`:
```html
              <div class="tilt-wrap-sm" style="margin-top:16px;">
                <div class="tilt-screen">
                  <div class="tilt-bar">
                    <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                    <div class="tilt-title">n8n · diseño de flujo</div>
                  </div>
                  <div class="tilt-body">
                    <div class="tilt-nodes">
                      <div class="tilt-node tilt-node-blue">Trigger</div>
                      <div class="tilt-edge"></div>
                      <div class="tilt-node tilt-node-green">Filtrar</div>
                      <div class="tilt-edge"></div>
                      <div class="tilt-node tilt-node-cyan">NocoDB</div>
                      <div class="tilt-edge"></div>
                      <div class="tilt-node tilt-node-amber">Notificar</div>
                    </div>
                  </div>
                  <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(37,99,235,.05),transparent 60%)"></div>
                </div>
              </div>
```

- [ ] **Step 2: Agregar mockup en Paso 03 — Implementación**

Localizar el `step-body` del Paso 03. Después de `</div>` que cierra `.step-chips`, antes del `</div>` que cierra `.step-body`:
```html
              <div class="tilt-wrap-sm" style="margin-top:16px;">
                <div class="tilt-screen" style="border-color:rgba(74,222,128,.15);">
                  <div class="tilt-bar">
                    <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                    <div class="tilt-title">deploy · en progreso</div>
                  </div>
                  <div class="tilt-body">
                    <div class="tilt-deploy">
                      <div class="tilt-term-line"><span class="tc-green">✓</span> <span class="tc-white">workflow deployed</span></div>
                      <div class="tilt-term-line"><span class="tc-green">✓</span> <span class="tc-white">3 flows active</span> <span class="tc-gray">· 0 errors</span></div>
                      <div class="tilt-term-line"><span class="tc-blue">▶</span> <span class="tc-white">monitoring</span> <span class="tc-green">live</span></div>
                    </div>
                  </div>
                  <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(74,222,128,.04),transparent 60%)"></div>
                </div>
              </div>
```

- [ ] **Step 3: Verificar en browser**

Ir a sección #steps. Los pasos 02 y 03 deben mostrar su mini mockup debajo de los chips. Los pasos 01 y 04 no tienen mockup. El layout vertical del timeline no debe romperse.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: agregar mockups perspectiva en steps 02 y 03"
```

---

## Task 4: Mockups en service-details.html

**Files:**
- Modify: `service-details.html` (6 `.service-detail-card`)

Los mockups se insertan entre `<p class="sdc-desc">...</p>` y `<div class="sdc-features">` en cada card. Usar `.tilt-wrap-lg` (height: 110px) para aprovechar el layout más amplio.

- [ ] **Step 1: Agregar mockup en card n8n**

Después de `<p class="sdc-desc">Conectamos todas tus herramientas...</p>`, antes de `<div class="sdc-features">`:
```html
          <div class="tilt-wrap-lg">
            <div class="tilt-screen">
              <div class="tilt-bar">
                <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                <div class="tilt-title">n8n · flujo de automatización</div>
              </div>
              <div class="tilt-body">
                <div class="tilt-nodes" style="margin-bottom:8px;">
                  <div class="tilt-node tilt-node-blue">Webhook</div>
                  <div class="tilt-edge"></div>
                  <div class="tilt-node tilt-node-green">CRM</div>
                  <div class="tilt-edge"></div>
                  <div class="tilt-node tilt-node-cyan">NocoDB</div>
                  <div class="tilt-edge"></div>
                  <div class="tilt-node tilt-node-amber">Email</div>
                </div>
                <div class="tilt-nodes">
                  <div class="tilt-node" style="background:rgba(139,92,246,.12);color:#a78bfa;border:1px solid rgba(139,92,246,.2);">Slack</div>
                  <div class="tilt-edge"></div>
                  <div class="tilt-node tilt-node-blue">Filter</div>
                  <div class="tilt-edge"></div>
                  <div class="tilt-node tilt-node-green">Sheet</div>
                </div>
              </div>
              <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(37,99,235,.05),transparent 60%)"></div>
            </div>
          </div>
```

- [ ] **Step 2: Agregar mockup en card Metabase**

Después de `<p class="sdc-desc">Convertimos tus datos dispersos...</p>`:
```html
          <div class="tilt-wrap-lg">
            <div class="tilt-screen" style="border-color:rgba(6,182,212,.15);">
              <div class="tilt-bar">
                <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                <div class="tilt-title">Metabase · dashboard empresa</div>
              </div>
              <div class="tilt-body">
                <div class="tilt-kpis" style="margin-bottom:6px;">
                  <div class="tilt-kpi"><div class="tilt-kpi-num" style="color:#22d3ee;">247</div><div class="tilt-kpi-lbl">Flujos hoy</div></div>
                  <div class="tilt-kpi"><div class="tilt-kpi-num" style="color:#4ade80;">99.8%</div><div class="tilt-kpi-lbl">Uptime</div></div>
                  <div class="tilt-kpi"><div class="tilt-kpi-num" style="color:#f9fafb;">0</div><div class="tilt-kpi-lbl">Errores</div></div>
                  <div class="tilt-kpi"><div class="tilt-kpi-num" style="color:#fbbf24;">$48k</div><div class="tilt-kpi-lbl">Ventas</div></div>
                </div>
                <div class="tilt-chart">
                  <svg viewBox="0 0 200 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="mg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0891b2" stop-opacity=".3"/><stop offset="100%" stop-color="#0891b2" stop-opacity="0"/></linearGradient></defs>
                    <polygon points="0,28 0,20 25,16 50,18 75,9 100,13 125,5 150,8 175,3 200,4 200,28" fill="url(#mg2)"/>
                    <polyline points="0,20 25,16 50,18 75,9 100,13 125,5 150,8 175,3 200,4" fill="none" stroke="#22d3ee" stroke-width="1.5"/>
                  </svg>
                </div>
              </div>
              <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(6,182,212,.05),transparent 60%)"></div>
            </div>
          </div>
```

- [ ] **Step 3: Agregar mockup en card NocoDB**

Después de `<p class="sdc-desc">Gestioná bases de datos complejas...</p>`:
```html
          <div class="tilt-wrap-lg">
            <div class="tilt-screen" style="border-color:rgba(139,92,246,.15);">
              <div class="tilt-bar">
                <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                <div class="tilt-title">NocoDB · tabla clientes</div>
              </div>
              <div class="tilt-body">
                <div class="tilt-thead">
                  <div class="tilt-th">Empresa</div>
                  <div class="tilt-th">Estado</div>
                  <div class="tilt-th">Plan</div>
                  <div class="tilt-th">Fecha</div>
                </div>
                <div class="tilt-tr">
                  <div class="tilt-td">Alpha SA</div>
                  <div class="tilt-td"><span class="tilt-badge tilt-badge-green">Activo</span></div>
                  <div class="tilt-td" style="color:#a78bfa;">Business</div>
                  <div class="tilt-td" style="color:#4b5563;">01/04</div>
                </div>
                <div class="tilt-tr">
                  <div class="tilt-td">Beta Corp</div>
                  <div class="tilt-td"><span class="tilt-badge tilt-badge-blue">Trial</span></div>
                  <div class="tilt-td" style="color:#a78bfa;">Starter</div>
                  <div class="tilt-td" style="color:#4b5563;">05/04</div>
                </div>
                <div class="tilt-tr">
                  <div class="tilt-td">Gamma SA</div>
                  <div class="tilt-td"><span class="tilt-badge tilt-badge-green">Activo</span></div>
                  <div class="tilt-td" style="color:#a78bfa;">Scale</div>
                  <div class="tilt-td" style="color:#4b5563;">10/04</div>
                </div>
              </div>
              <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(139,92,246,.05),transparent 60%)"></div>
            </div>
          </div>
```

- [ ] **Step 4: Agregar mockup en card Chatwoot + LLM**

Después de `<p class="sdc-desc">Desplegamos bots conversacionales...</p>`:
```html
          <div class="tilt-wrap-lg">
            <div class="tilt-screen" style="border-color:rgba(16,185,129,.15);">
              <div class="tilt-bar">
                <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                <div class="tilt-title">Chatwoot · agente IA · online</div>
              </div>
              <div class="tilt-body" style="padding:5px 8px;">
                <div class="tilt-chat">
                  <div class="tilt-msg">
                    <div class="tilt-avatar" style="background:rgba(16,185,129,.2);color:#34d399;">🤖</div>
                    <div class="tilt-bubble tilt-bubble-bot">¡Hola! ¿En qué puedo ayudarte?</div>
                  </div>
                  <div class="tilt-msg tilt-msg-user">
                    <div class="tilt-bubble tilt-bubble-user">Quiero agendar un turno</div>
                  </div>
                  <div class="tilt-msg">
                    <div class="tilt-avatar" style="background:rgba(16,185,129,.2);color:#34d399;">🤖</div>
                    <div class="tilt-bubble tilt-bubble-bot">¿Qué día preferís: lunes o martes?</div>
                  </div>
                  <div class="tilt-typing"><span></span><span></span><span></span></div>
                </div>
              </div>
              <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(16,185,129,.04),transparent 60%)"></div>
            </div>
          </div>
```

- [ ] **Step 5: Agregar mockup en card API/Webhooks**

Después de `<p class="sdc-desc">Si tus sistemas no hablan entre sí...</p>`:
```html
          <div class="tilt-wrap-lg">
            <div class="tilt-screen" style="border-color:rgba(245,158,11,.15);">
              <div class="tilt-bar">
                <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                <div class="tilt-title">API · webhook listener</div>
              </div>
              <div class="tilt-body">
                <div class="tilt-term">
                  <div class="tilt-term-line"><span class="tc-green">POST</span> <span class="tc-blue">/webhook/crm</span> <span class="tc-gray">· 200 OK · 43ms</span></div>
                  <div class="tilt-term-line"><span class="tc-gray">▶</span> <span class="tc-amber">{ "event": "lead.created", "id": 4821 }</span></div>
                  <div class="tilt-term-line"><span class="tc-green">✓</span> <span class="tc-white">sync_nocodb</span> <span class="tc-gray">triggered</span></div>
                  <div class="tilt-term-line"><span class="tc-green">✓</span> <span class="tc-white">notify_slack</span> <span class="tc-gray">triggered</span></div>
                  <div class="tilt-term-line"><span class="tc-blue">→</span> <span class="tc-white">2 workflows</span> <span class="tc-green">running</span></div>
                </div>
              </div>
              <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(245,158,11,.04),transparent 60%)"></div>
            </div>
          </div>
```

- [ ] **Step 6: Agregar mockup en card Reportes**

Después de `<p class="sdc-desc">Tus reportes se generan y distribuyen solos...</p>`:
```html
          <div class="tilt-wrap-lg">
            <div class="tilt-screen" style="border-color:rgba(239,68,68,.15);">
              <div class="tilt-bar">
                <div class="tilt-dots"><span class="tilt-dot tilt-dot-r"></span><span class="tilt-dot tilt-dot-y"></span><span class="tilt-dot tilt-dot-g"></span></div>
                <div class="tilt-title">Reporte semanal · distribuido</div>
              </div>
              <div class="tilt-body">
                <div class="tilt-report">
                  <div class="tilt-report-header">
                    <div class="tilt-report-title">Semana 15 · ventas@empresa.com</div>
                    <div class="tilt-report-badge">✓ Enviado</div>
                  </div>
                  <div class="tilt-report-row">
                    <div class="tilt-report-lbl">Ventas</div>
                    <div class="tilt-report-bar-wrap"><div class="tilt-report-bar" style="width:78%;background:rgba(239,68,68,.6);"></div></div>
                    <div class="tilt-report-val">$48.2k</div>
                  </div>
                  <div class="tilt-report-row">
                    <div class="tilt-report-lbl">Leads</div>
                    <div class="tilt-report-bar-wrap"><div class="tilt-report-bar" style="width:55%;background:rgba(239,68,68,.4);"></div></div>
                    <div class="tilt-report-val">124</div>
                  </div>
                  <div class="tilt-report-row">
                    <div class="tilt-report-lbl">NPS</div>
                    <div class="tilt-report-bar-wrap"><div class="tilt-report-bar" style="width:90%;background:rgba(239,68,68,.7);"></div></div>
                    <div class="tilt-report-val">9.1</div>
                  </div>
                </div>
              </div>
              <div class="tilt-glow" style="background:linear-gradient(135deg,rgba(239,68,68,.04),transparent 60%)"></div>
            </div>
          </div>
```

- [ ] **Step 7: Verificar en browser**

Abrir `service-details.html` en el browser. Los 6 cards deben mostrar su mockup entre la descripción y el grid de features. Confirmar que la tarjeta con overflow del card no corta los mockups (la clase `.service-detail-card` ya tiene `overflow: hidden` definida en el `<style>` inline de service-details.html — si los mockups se cortan, agregar `overflow: visible` a `.service-detail-card` en ese mismo `<style>`).

- [ ] **Step 8: Commit**

```bash
git add service-details.html
git commit -m "feat: agregar mockups perspectiva 3D en service-details cards"
```

---

## Task 5: Limpieza de archivos obsoletos

**Files:**
- Delete: `portfolio-details.html`, `starter-page.html`
- Delete: `assets/vendor/glightbox/`, `assets/vendor/swiper/`, `assets/vendor/isotope-layout/`, `assets/vendor/imagesloaded/`
- Delete: `assets/img/services/`, `assets/img/misc/`, `assets/img/about/`, `assets/img/person/`, `assets/img/testimonials/`, `assets/img/logo.webp`

- [ ] **Step 1: Eliminar páginas obsoletas**

```bash
rm portfolio-details.html starter-page.html
```

Verificar que `index.html` y `service-details.html` no tengan links a esas páginas:
```bash
grep -n "portfolio-details\|starter-page" index.html service-details.html
```
Salida esperada: vacía (ningún resultado).

- [ ] **Step 2: Eliminar vendors sin uso**

```bash
rm -rf assets/vendor/glightbox assets/vendor/swiper assets/vendor/isotope-layout assets/vendor/imagesloaded
```

Verificar que `index.html` y `service-details.html` no los referencian:
```bash
grep -n "glightbox\|swiper\|isotope\|imagesloaded" index.html service-details.html
```
Salida esperada: vacía.

- [ ] **Step 3: Eliminar imágenes y assets sin uso**

```bash
rm -rf assets/img/services assets/img/misc assets/img/about assets/img/person assets/img/testimonials assets/img/logo.webp
```

Verificar que ningún archivo HTML los referencia:
```bash
grep -rn "img/services\|img/misc\|img/about\|img/person\|img/testimonials\|logo\.webp" index.html service-details.html
```
Salida esperada: vacía.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: eliminar páginas obsoletas, vendors sin uso e imágenes sin referencias"
```

---

## Task 6: README moderno para GitHub

**Files:**
- Modify: `README.md` (reemplazar contenido completo)

- [ ] **Step 1: Reemplazar README.md con versión moderna**

Reemplazar el contenido completo de `README.md` con:

```markdown
# Brain — Automatización Inteligente

> Startup argentina de automatización inteligente. Conectamos tus herramientas, automatizamos tus flujos y ponemos tus datos en tiempo real.

[![Live](https://img.shields.io/badge/sitio-live-brightgreen?style=flat-square)](https://brain-software-factory.github.io)
[![Stack](https://img.shields.io/badge/stack-open_source-blue?style=flat-square)](#stack)
[![License](https://img.shields.io/badge/license-privado-gray?style=flat-square)](#)

---

## Stack

| Herramienta | Rol |
|-------------|-----|
| ![n8n](https://img.shields.io/badge/n8n-automatización-EA4B71?style=flat-square&logo=n8n&logoColor=white) | Flujos de automatización visual |
| ![NocoDB](https://img.shields.io/badge/NocoDB-datos-7C3AED?style=flat-square) | Gestión visual de bases de datos |
| ![Metabase](https://img.shields.io/badge/Metabase-dashboards-509EE3?style=flat-square) | BI y reportes interactivos |
| ![Chatwoot](https://img.shields.io/badge/Chatwoot-soporte-1F93FF?style=flat-square) | Gestión de conversaciones + IA |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap_5-UI-7952B3?style=flat-square&logo=bootstrap&logoColor=white) | Grid y utilidades CSS |
| ![AOS](https://img.shields.io/badge/AOS-animaciones-222?style=flat-square) | Animaciones on scroll |

---

## Páginas

| Página | Descripción |
|--------|-------------|
| `index.html` | Landing principal — Hero, Servicios, Proceso, Testimonios, Precios, FAQ, Contacto |
| `service-details.html` | Detalle técnico de cada servicio con mockups de producto |

---

## Estructura

```
brain-software-factory.github.io/
├── index.html              # Landing principal
├── service-details.html    # Detalle de servicios
├── assets/
│   ├── css/
│   │   ├── main.css        # Design system completo
│   │   └── chat-widget.css # Estilos del widget de chat
│   ├── js/
│   │   ├── main.js         # Navegación, scroll, FAQ accordion
│   │   ├── contact-form.js # Validación y envío del formulario
│   │   └── chat-widget.js  # Widget de chat flotante
│   ├── img/
│   │   └── brain.ico       # Logo / favicon
│   └── vendor/
│       ├── bootstrap/      # Bootstrap 5
│       ├── bootstrap-icons/
│       └── aos/            # Animate On Scroll
└── docs/
    └── superpowers/        # Specs y planes de implementación
```

---

## Design System

**Fondo base:** `#070c14`  
**Acento principal:** `#2563EB` (azul royal)  
**Tipografía:** Inter (300–900)  
**Elevación:** `#0b1221` para superficies secundarias  

```css
--background-color: #070c14;
--accent-color:     #2563EB;
--accent-light:     #3B82F6;
--heading-color:    #f9fafb;
--text-muted:       #6b7280;
--border-subtle:    rgba(255,255,255,0.06);
```

---

## Servicios

- **Flujos automatizados** — n8n: conecta apps, sincroniza datos, dispara acciones
- **Dashboards interactivos** — Metabase: KPIs en tiempo real, reportes automáticos
- **Gestión visual de datos** — NocoDB: bases de datos sin SQL
- **Integraciones personalizadas** — APIs REST, webhooks, sistemas legacy
- **Agentes inteligentes** — LLM + Chatwoot: bots en WhatsApp 24/7
- **Reportes automáticos** — Metabase + n8n: métricas distribuidas al equipo

---

© 2025 Brain. Buenos Aires, Argentina — [info@brain.com.ar](mailto:info@brain.com.ar)
```

- [ ] **Step 2: Verificar que el README renderiza bien en GitHub**

Abrir `README.md` localmente y confirmar que:
- Los badges de shields.io tienen URLs correctas
- Las tablas tienen formato Markdown válido
- Los bloques de código están cerrados correctamente

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: agregar README moderno con stack, estructura y design system"
```

---

## Self-Review

**Spec coverage:**
- ✅ Cleanup páginas obsoletas → Task 5
- ✅ Cleanup vendors → Task 5
- ✅ Cleanup imágenes → Task 5
- ✅ CSS perspectiva en main.css → Task 1
- ✅ Mockups service cards index.html × 6 → Task 2
- ✅ Mockups steps 02 y 03 → Task 3
- ✅ Mockups service-details × 6 → Task 4
- ✅ README moderno → Task 6

**Placeholder scan:** Sin TBDs, todos los steps tienen código completo.

**Type consistency:** Las clases CSS definidas en Task 1 (`.tilt-wrap`, `.tilt-wrap-lg`, `.tilt-wrap-sm`, `.tilt-screen`, `.tilt-bar`, `.tilt-dots`, `.tilt-dot`, `.tilt-dot-r/.y/.g`, `.tilt-title`, `.tilt-body`, `.tilt-glow`, `.tilt-nodes`, `.tilt-node`, `.tilt-node-blue/green/cyan/amber`, `.tilt-edge`, `.tilt-bars`, `.tilt-bar-item`, `.tilt-kpis`, `.tilt-kpi`, `.tilt-kpi-num`, `.tilt-kpi-lbl`, `.tilt-chart`, `.tilt-thead`, `.tilt-th`, `.tilt-tr`, `.tilt-td`, `.tilt-badge`, `.tilt-badge-green/.blue`, `.tilt-term`, `.tilt-term-line`, `.tc-green/.blue/.amber/.gray/.white`, `.tilt-chat`, `.tilt-msg`, `.tilt-msg-user`, `.tilt-avatar`, `.tilt-bubble`, `.tilt-bubble-bot/.user`, `.tilt-typing`, `.tilt-report`, `.tilt-report-header`, `.tilt-report-title`, `.tilt-report-badge`, `.tilt-report-row`, `.tilt-report-lbl`, `.tilt-report-bar-wrap`, `.tilt-report-bar`, `.tilt-report-val`, `.tilt-deploy`) son exactamente las usadas en Tasks 2, 3 y 4.
