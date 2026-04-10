# Brain Website — Rediseño Completo
**Fecha:** 2026-04-09  
**Tipo:** Frontend redesign — HTML/CSS/JS estático (GitHub Pages)  
**Alcance:** Rediseño completo: visual + estructura + textos + micro-interacciones

---

## 1. Contexto y decisiones de diseño

### Problema
El sitio actual se siente genérico: usa colores y componentes Bootstrap por defecto sin identidad propia. Las secciones se repiten (About tiene slider de casos + CTA standalone que solapan contenido), el Hero usa una imagen abstracta que no comunica el producto, y no hay una narrativa clara que guíe al visitante desde el problema hasta la conversión.

### Audiencia objetivo
Mezcla de dos perfiles:
- **Dueños de PyME / emprendedores**: no técnicos, necesitan ver el beneficio concreto
- **Gerentes / tomadores de decisión**: entienden algo de tech, valoran ROI, KPIs, escalabilidad

### Dirección visual elegida: **Dark Tech**
Fondo oscuro (`#0a0a0f`), acentos violeta/índigo (`#6366f1`, `#8b5cf6`), tipografía bold. Estética de producto SaaS moderno (Linear, Vercel, Raycast). Transmite sofisticación y precisión técnica.

### Enfoque elegido: **Narrative-first**
La página sigue un arco narrativo: **Problema → Solución → Prueba social → Acción**. Cada sección lleva al visitante un paso más cerca de contactar.

---

## 2. Paleta de colores

| Token | Valor | Uso |
|---|---|---|
| `--bg-base` | `#0a0a0f` | Fondo principal |
| `--bg-elevated` | `#0d0d18` | Secciones alternadas |
| `--bg-footer` | `#050508` | Footer |
| `--accent-primary` | `#6366f1` | Color principal (indigo) |
| `--accent-secondary` | `#8b5cf6` | Violeta (gradientes) |
| `--accent-cyan` | `#06b6d4` | Tercer acento (Hero blob) |
| `--text-primary` | `#f9fafb` | Títulos principales |
| `--text-secondary` | `#9ca3af` | Texto de cuerpo |
| `--text-muted` | `#6b7280` | Texto secundario/subtítulos |
| `--text-disabled` | `#374151` | Features desactivados |
| `--border-subtle` | `rgba(255,255,255,0.06)` | Bordes de cards |
| `--border-accent` | `rgba(99,102,241,0.25)` | Bordes en hover |

---

## 3. Tipografía

- **Fuente principal**: Inter (system-ui como fallback)
- **Títulos de sección**: 40px, weight 900, letter-spacing -1.5px
- **Subtítulos de plan/card**: 20–22px, weight 800
- **Cuerpo**: 14–16px, weight 400–500
- **Labels/tags**: 10–11px, weight 700, letter-spacing 2–3px, UPPERCASE

---

## 4. Nueva estructura de secciones

| # | Sección | Estado vs actual |
|---|---|---|
| 1 | Hero rediseñado | Nuevo diseño completo |
| 2 | Problema → Solución | **Nueva sección** |
| 3 | Services rediseñados | Nuevo diseño |
| 4 | Cómo trabajamos (Steps) | Nuevo diseño |
| 5 | Social Proof unificado | **Fusión** de About slider + Testimonials |
| 6 | Pricing (planes reales) | Nuevo diseño + contenido real |
| 7 | FAQ rediseñado | Nuevo diseño |
| 8 | Contact simplificado | Nuevo diseño, sin mapa |
| 9 | Footer profesional | Nuevo diseño |

**Eliminado:**
- About section standalone → contenido integrado en Hero y Social Proof
- CTA banner standalone ("Modernizá tu negocio con soluciones cloud") → redundante con el flujo
- Google Maps → no aporta valor para una startup 100% digital

---

## 5. Diseño por sección

### 5.1 Navegación
- Glassmorphism: `background: rgba(10,10,15,0.7)`, `backdrop-filter: blur(16px)`, borde inferior sutil
- Logo: ícono cuadrado con gradient violeta + texto "Brain"
- Links: Inicio · Servicios · Cómo funciona · Planes · Contacto
- CTA nav: botón gradient "Iniciar sesión →" (link a `https://support.brain.com.ar`)
- Mobile: hamburger toggle existente, sin cambios funcionales

### 5.2 Hero
- **Fondo**: `#0a0a0f` + 3 blobs (filter: blur 80px, opacity 0.15) en posiciones fijas + grid overlay con líneas `rgba(99,102,241,0.04)` cada 60px
- **Badge animado**: punto pulsante + "Startup argentina · n8n · NocoDB · Metabase"
- **Título**: "Automatizá lo repetitivo. / Escalá lo importante." — con `.accent` gradient en última línea
- **Subtítulo**: propuesta de valor directa, max 2 líneas
- **CTAs**: "Solicitar demo gratuita →" (primario, gradient + glow) + "Ver cómo funciona ↓" (secundario, ghost)
- **Stats**: 3 métricas concretas — 3x velocidad · -70% tareas manuales · 48hs primer flujo
- **Visual derecho**: card mockup de dashboard (flujos activos con status badges) + 2 toast cards flotantes
- **Layout**: grid 2 columnas en desktop, stack en mobile

### 5.3 Problema → Solución (nueva)
- **Título**: "¿Cuánto le cuesta a tu negocio no automatizar?"
- **Layout**: 3 columnas — pain col (rojo) · divider con flechas · solution col (violeta)
- **Pain items** (3): clock-history · layout-split · chat-square-dots (íconos Bootstrap)
- **Solution items** (3): diagram-3 · bar-chart-line · robot
- **Divider**: línea vertical gradient + 3 nodos circulares con `bi-arrow-right`

### 5.4 Services
- **Header**: título izquierda + link "Ver todos los servicios →" derecha
- **Grid**: 3 columnas × 2 filas, 6 cards
- **Cada card**: ícono con color propio por categoría · tag de categoría · título · descripción · badge de herramienta (n8n/Metabase/NocoDB) · flecha `bi-arrow-up-right`
- **Hover**: border-color accent · background sutil · top glow line · flecha con fondo
- Los 6 servicios: Flujos automatizados (n8n) · Dashboards (Metabase) · Gestión de datos (NocoDB) · Integraciones (API/Webhooks) · Agentes inteligentes (LLM+n8n) · Reportes automáticos (Metabase+n8n)

### 5.5 Cómo trabajamos (Steps)
- **Layout**: track vertical con línea conectora izquierda (`::before` absoluto)
- **Cada paso**: nodo circular 56px con ícono BI · número tag · título · descripción · chips de herramientas/tiempos
- **Íconos**: lightbulb · gear · rocket-takeoff · graph-up-arrow
- **Chips por paso**: Paso 1: "1 reunión · 45 min · Gratis" / Paso 3: "48hs primer flujo · Zero downtime"

### 5.6 Social Proof (fusión)
- **Stats strip**: 4 celdas — +50 empresas · 3x velocidad · -70% tareas · 48hs primer flujo
- **Testimonials grid**: card featured (span 2 cols) + 3 cards normales
- **Cada card**: ícono `bi-quote` · texto en cursiva · avatar con iniciales · nombre/rol · tag del servicio usado

### 5.7 Pricing
Tres planes con nombres reales:

| Plan | Precio | Stack |
|---|---|---|
| **Bot Essential** | USD 100/mes | WhatsApp + Chatwoot + LLM |
| **Automation Suite** | USD 300/mes | Todo lo anterior + Metabase + n8n + NocoDB (hasta 3 bots) |
| **Full Stack** | USD 500/mes | Todo anterior + bots ilimitados + multi-canal + 24/7 + SLA + PM dedicado |

- Plan popular (Business) escalado con `transform: scale(1.04)` y badge "Más popular"
- Chips de stack visibles en cada plan (wa/ct/llm/mb/n8n/noco con colores propios)
- Toggle anual/mensual decorativo (implementación JS opcional)
- Nota inferior: infraestructura cloud + seguridad incluidos

### 5.8 FAQ
- **Layout**: 1/3 sticky (título + CTA a contacto) · 2/3 accordion
- Primer ítem abierto por defecto
- Toggle: nodo circular con `bi-plus` que rota 45° al abrir
- 6 preguntas existentes conservadas, textos ajustados

### 5.9 Contact
- **Sin mapa** (eliminado)
- **Layout 2 columnas**: info izquierda · formulario card derecha
- Info: 3 items con ícono en card (geo-alt · envelope · clock)
- Social: LinkedIn · Instagram · Twitter-X · WhatsApp
- Formulario: 2+2+1+1 grid, inputs dark con focus ring accent, submit gradient con glow

### 5.10 Footer
- **4 columnas**: Brand (2fr) · Producto (1fr) · Empresa (1fr) · Contacto (1.5fr)
- Logo con ícono gradient + tagline
- Social icons con hover glow
- Footer bottom: "© 2025 Brain. Todos los derechos reservados." + links legales (Términos · Privacidad)

---

## 6. Micro-interacciones y animaciones

| Elemento | Comportamiento |
|---|---|
| Blobs del Hero | `animation: pulse` en el badge dot — opacity 1↔0.4, 2s ease-in-out infinite |
| Cards (services, pricing, testimonials) | `transition: border-color 0.2s, background 0.2s` + top glow line en hover |
| Botón CTA primario | `transition: box-shadow 0.2s, transform 0.2s` — glow y translateY(-1px) en hover |
| Nav scroll | `.scrolled` class en body al pasar 100px (ya existe en main.js) |
| FAQ accordion | Toggle de clase `.open` + rotación del ícono 45° |
| AOS | Mantener: `duration: 600, easing: ease-in-out, once: true` |
| Step nodes | `box-shadow: 0 0 20px rgba(99,102,241,0.25)` en hover |

---

## 7. Iconografía

**Librería**: Bootstrap Icons (`bi bi-*`) — ya cargada en el sitio  
**No usar** emojis Unicode como iconos

Mapeo de secciones:
- Pain points: `bi-clock-history` · `bi-layout-split` · `bi-chat-square-dots`
- Solutions: `bi-diagram-3` · `bi-bar-chart-line` · `bi-robot`
- Steps: `bi-lightbulb` · `bi-gear` · `bi-rocket-takeoff` · `bi-graph-up-arrow`
- Contact: `bi-geo-alt` · `bi-envelope` · `bi-clock`
- Social: `bi-linkedin` · `bi-instagram` · `bi-twitter-x` · `bi-whatsapp` · `bi-github`

---

## 8. CSS — estrategia de implementación

- **Archivo existente**: `assets/css/main.css` — se reescribe completamente
- **No agregar** frameworks CSS adicionales (Bootstrap ya está, no agregar Tailwind)
- Usar CSS custom properties para colores (definir en `:root`)
- Mantener `assets/css/chat-widget.css` sin cambios
- El chat widget HTML y JS no se toca

---

## 9. JS — cambios mínimos

- `assets/js/main.js`: sin cambios funcionales. Solo verificar que el selector `.scroll-top` siga siendo válido
- `assets/js/contact-form.js`: sin cambios (webhook n8n funcional)
- `assets/js/chat-widget.js`: sin cambios
- **Actualizar en main.js**: el selector de FAQ existente (`'.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header'`) se reemplaza por `.faq-question` — toggle de clase `.open` en el `.faq-item` padre al hacer click
- **Nuevo opcional**: toggle anual/mensual en pricing (JS simple para cambiar precios)

---

## 10. Archivos a modificar

| Archivo | Cambio |
|---|---|
| `index.html` | Reescritura completa del HTML (estructura, secciones, textos) |
| `assets/css/main.css` | Reescritura completa de estilos |
| `assets/js/main.js` | Ajuste menor: selector FAQ accordion |

**No modificar:**
- `assets/js/chat-widget.js`
- `assets/js/contact-form.js`
- `assets/css/chat-widget.css`
- `service-details.html`, `portfolio-details.html`

---

## 11. Out of scope

- Internacionalización (solo español)
- Dark/light mode toggle
- Animaciones con GSAP o librerías adicionales
- Cambios al chat widget o formulario de contacto
- Backend / webhooks n8n
- `service-details.html` y `portfolio-details.html`
