<p align="center">
  <img src="assets/img/brain.ico" alt="Brain logo" width="64">
</p>

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
