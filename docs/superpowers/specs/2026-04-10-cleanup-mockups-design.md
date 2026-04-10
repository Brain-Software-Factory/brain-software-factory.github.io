# Brain Website — Cleanup + Mockups Design
**Fecha:** 2026-04-10  
**Estado:** Aprobado

---

## Objetivo

Limpiar el sitio de archivos y assets sin uso, y agregar mockups de producto con estilo "pantalla en perspectiva 3D" en tres zonas clave del sitio, basándose en el design system dark tech existente.

---

## 1. Limpieza de archivos

### Páginas a eliminar
- `portfolio-details.html` — usa diseño viejo (Roboto/Raleway/Nunito, `favicon.png`, nav obsoleto con "Nosotros" y "Portfolio"). No está linkeada desde el sitio actual.
- `starter-page.html` — plantilla de ejemplo sin contenido real, no linkeada.

### Vendors a eliminar (solo usados en páginas eliminadas)
- `assets/vendor/glightbox/`
- `assets/vendor/swiper/`
- `assets/vendor/isotope-layout/`
- `assets/vendor/imagesloaded/`

### Imágenes/assets sin referencias
- `assets/img/services/` (4 archivos .webp)
- `assets/img/misc/` (cloud-infra.png, misc-1.webp)
- `assets/img/about/` (about-portrait-1.webp, programador.jpg)
- `assets/img/person/` (directorio completo)
- `assets/img/testimonials/` (directorio completo)
- `assets/img/logo.webp`

---

## 2. Mockups — Estilo aprobado: Perspectiva 3D

### Principio de diseño
Ventana de aplicación en miniatura con leve inclinación 3D (`rotateX(14deg) rotateY(-5deg)`). Chrome bar superior con dots rojo/amarillo/verde y título del tool. Sombra profunda. Glow sutil con el color del tool. Consistente con las pricing cards existentes pero con perspectiva más pronunciada.

### CSS base reutilizable
```css
.tilt-wrap { perspective: 700px; margin: 14px 0; height: 88px; }
.tilt-screen {
  width: 100%; height: 88px;
  background: #070c14;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  transform: rotateX(14deg) rotateY(-5deg) scale(0.97);
  transform-origin: bottom center;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,99,235,0.08);
}
.tilt-bar {
  background: #111827; height: 18px;
  display: flex; align-items: center; padding: 0 8px; gap: 4px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.tilt-glow { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(37,99,235,0.04), transparent 60%); pointer-events: none; }
```

---

## 3. Zona A — Service Cards (index.html)

**Ubicación:** Sección `#services`, dentro de cada `.service-card`, entre el `.service-card-desc` y el `.service-card-footer`.

**6 mockups a agregar:**

| Card | Tool | Contenido del mockup |
|------|------|----------------------|
| Flujos automatizados | n8n | Canvas con nodos: Webhook → CRM → NocoDB → Email + mini bar chart de ejecuciones |
| Dashboards interactivos | Metabase | KPIs (247 flujos, 99.8% uptime, 0 errores) + gráfico de área SVG |
| Gestión visual de datos | NocoDB | Tabla con 3 filas: nombre, estado (badge), valor |
| Integraciones personalizadas | API/Webhooks | Terminal: POST /webhook/crm, payload JSON, 200 OK, trigger |
| Agentes inteligentes | Chatwoot | Conversación: bot saluda, usuario pregunta por pedido, bot responde |
| Reportes automáticos | Metabase+n8n | Reporte semanal con 3 métricas (Ventas, Leads, NPS) + barras + badge "Enviado" |

**Altura del mockup:** 88px (`.tilt-wrap`). Las cards ya tienen overflow:hidden, agregar `overflow: visible` o ajustar para que no se corte.

---

## 4. Zona B — Steps Section (index.html)

**Ubicación:** Sección `#steps`, dentro de cada `.step-body`, después de `.step-chips`.

**Enfoque:** Versión más pequeña y horizontal del mockup (height: 70px), para no romper el ritmo vertical del timeline. Solo el step 2 (Diseño del flujo) y step 3 (Implementación) reciben mockup visual ya que son los más técnicos. Los steps 1 y 4 (diagnóstico y soporte) quedan sin mockup para no saturar.

| Step | Contenido |
|------|-----------|
| Paso 02 — Diseño del flujo | n8n canvas miniatura con 3 nodos conectados |
| Paso 03 — Implementación | Terminal con líneas de deploy: "✓ workflow deployed", "✓ 3 flows active", "▶ monitoring" |

---

## 5. Zona C — Service Detail Cards (service-details.html)

**Ubicación:** Dentro de cada `.service-detail-card`, entre `.sdc-desc` y `.sdc-features`.

**Altura:** 100px (más espacio disponible en layout de una columna).

**6 mockups (mismos conceptos que Zona A, versión ligeramente más alta):**

| Servicio | Contenido adicional vs Zona A |
|----------|-------------------------------|
| n8n | Agregar segunda fila de nodos secundarios (branching) |
| Metabase | Agregar mini tabla de datos debajo del gráfico |
| NocoDB | Agregar 4 filas en lugar de 3, columna adicional de fecha |
| API/Webhooks | Agregar línea de response body |
| Chatwoot | Agregar indicador "typing..." en el bot |
| Reportes | Agregar sección "Destinatarios: ventas@empresa.com" |

---

## 6. README moderno para GitHub

**Archivo:** `README.md` (reemplazar el existente)

**Contenido:**
- Badge de estado (live), tecnologías usadas (n8n, NocoDB, Metabase, Chatwoot, Bootstrap, AOS)
- Descripción breve del proyecto con logo/nombre
- Sección "Stack" con iconos/badges de cada tecnología
- Sección "Páginas" con descripción de index y service-details
- Sección "Estructura del proyecto" con árbol de directorios relevantes
- Sección "Design system" — colores clave, fuente (Inter), tokens CSS principales
- Link al sitio live (brain.com.ar o GitHub Pages)
- Sin instrucciones de instalación (es un sitio estático)

**Estilo:** dark, minimal, con badges de shields.io para las tecnologías. Sin emojis excesivos. Profesional para un repo de agencia/startup.

---

## 7. Archivos a modificar/crear

| Archivo | Cambios |
|---------|---------|
| `index.html` | Agregar mockups en service cards + steps |
| `service-details.html` | Agregar mockups en cada service detail card |
| `assets/css/main.css` | Agregar clases `.tilt-wrap`, `.tilt-screen`, `.tilt-bar`, `.tilt-glow` + helpers internos |
| `README.md` | Reescribir con diseño moderno para GitHub |

---

## 8. Lo que NO se toca

- Hero section (ya tiene mockup excelente)
- Pricing cards (ya tienen mockups)
- FAQ, Contact, Footer, Testimonials
- Lógica de JS (main.js, contact-form.js, chat-widget.js)
- Estructura de navegación
