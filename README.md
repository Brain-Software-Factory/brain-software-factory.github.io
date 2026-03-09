# Brain - Automatización Inteligente

Sitio web corporativo de **Brain**, startup argentina especializada en automatización con IA, flujos de trabajo con n8n, dashboards con Metabase y gestión de datos con NocoDB.

## Características

- **Landing page** con secciones: Hero, Sobre nosotros, Servicios, Proceso, CTA, Testimonios, Planes, FAQ y Contacto
- **Formulario de contacto** profesional con validación (configurable con Formspree, FormSubmit o webhook n8n)
- **Chatbot** integrado conectado a webhook n8n para atención al cliente
- **Diseño responsive** con tema oscuro
- **Páginas adicionales:** portfolio, detalle de servicios, página de inicio

## Tecnologías

| Componente | Tecnología |
|------------|------------|
| Frontend | HTML5, CSS3, JavaScript (vanilla) |
| Framework CSS | Bootstrap 5.3 |
| Estilos | Variables CSS, tema oscuro personalizado |
| Animaciones | AOS (Animate On Scroll) |
| Carruseles | Swiper |
| Galería | GLightbox |
| Layout | Isotope |

## Estructura del proyecto

```
brain/
├── index.html              # Página principal
├── portfolio-details.html  # Detalle de portfolio
├── service-details.html    # Detalle de servicios
├── starter-page.html       # Página de inicio alternativa
├── forms/
│   └── contact.php         # Backend formulario (PHP)
├── assets/
│   ├── css/
│   │   ├── main.css        # Estilos principales
│   │   └── chat-widget.css # Estilos del chatbot
│   ├── js/
│   │   ├── main.js         # Lógica principal
│   │   └── chat-widget.js  # Lógica del chatbot
│   ├── img/                # Imágenes
│   └── vendor/             # Bootstrap, AOS, Swiper, etc.
└── README.md
```

## Desarrollo local

### Requisitos

- Navegador web moderno
- Servidor HTTP local (opcional, para probar formularios PHP)

### Ejecución

```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Con servidor local (Python)
python -m http.server 8000

# Opción 3: Con Node.js (npx)
npx serve .
```

Luego acceder a `http://localhost:8000` (o el puerto que uses).

## Despliegue

El sitio está configurado para **GitHub Pages**. Al hacer push a la rama `main`, el repositorio `brain-software-factory.github.io` se publica automáticamente.

**URL:** [https://brain-software-factory.github.io](https://brain-software-factory.github.io)

## Configuración

### Chatbot

El webhook del chatbot se configura en `assets/js/chat-widget.js`:

```javascript
const CONFIG = {
  webhook: {
    url: "https://webhookdev.brain.com.ar/webhook/.../chat",
    route: "general",
  },
};
```

### Formulario de contacto

El formulario usa `validate.js` y envía a la URL configurada en el atributo `action` del formulario. Para que funcione en GitHub Pages (solo HTML estático), configurar uno de estos servicios:

- **Formspree:** `action="https://formspree.io/f/TU_ID"`
- **FormSubmit:** `action="https://formsubmit.co/tu@email.com"`
- **n8n:** `action="https://tu-webhook.com/webhook/form"`

## Variables de diseño

El tema oscuro se controla en `assets/css/main.css`:

```css
:root {
  --background-color: #031119;
  --default-color: rgba(255, 255, 255, 0.8);
  --accent-color: #294ef5;
  --surface-color: #1b262c;
  --contrast-color: #ffffff;
}
```

## Licencia

Proyecto privado de Brain. Todos los derechos reservados.

---

**Brain** · [brain.com.ar](https://brain.com.ar) · Buenos Aires, Argentina
