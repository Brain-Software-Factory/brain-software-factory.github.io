# Sistema de Pricing — Brain Software Factory

> Fuente de verdad del modelo de precios. Fundamentado en las capacidades reales
> (las 6 que vendemos), el modelo de negocio (SaaS white-label single-tenant +
> implementación) y la economía de costos. Reconcilia el pricing público con
> cómo realmente cerramos los deals (Botulinic, Musecases).
>
> Estado: v1 — propuesta para ratificar. Reemplaza la ficción "todo incluido,
> sin setup" por un modelo de dos capas transparente.

---

## 1. Qué vendemos (el fundamento)

Brain **no vende herramientas** (n8n, Chatwoot, Metabase, NocoDB, Evolution).
Vende **el resultado operativo bajo la marca del cliente**: una sola plataforma
web donde el cliente gestiona su operación, con los bots y automatizaciones
corriendo por detrás. El cliente nunca toca n8n ni docker.

- **Arquitectura comercial:** SaaS white-label **single-tenant** → 1 instalación
  = 1 cliente, en VPS dedicada (Contabo). No somos multi-tenant.
- **Dos fuentes de ingreso:** suscripción mensual (plataforma) + implementación
  one-time (lo que excede el onboarding estándar). Esto ya pasa en la práctica;
  el sistema solo lo hace explícito y coherente.

---

## 2. Las capacidades — qué podemos entregar con cada tecnología

Los 6 servicios son las **capacidades** que se aplican según el plan. El cliente
no compra "n8n"; compra el caso de uso resuelto.

| # | Servicio | Tecnología | Qué resuelve (caso real) | Disponible en |
|---|----------|-----------|--------------------------|---------------|
| 1 | **Agentes inteligentes** | LLM + Chatwoot + n8n | Bot WhatsApp 24/7 que agenda, deriva y aprende (caso Botulinic «Dolores») | **Todos** (1 bot Starter · 3 Business · ∞ Scale) |
| 2 | **Flujos automatizados** | n8n | Conectar apps, sincronizar datos, disparar acciones sin intervención | Suite + Full Stack |
| 3 | **Dashboards interactivos** | Metabase | KPIs y métricas en tiempo real para decidir con datos | Suite + Full Stack |
| 4 | **Gestión visual de datos** | NocoDB | Bases tipo planilla sin SQL, editables por el cliente | Suite + Full Stack |
| 5 | **Integraciones** | API REST / Webhooks | Conectar ERP, CRM, legacy, Google Calendar, MercadoPago, AFIP | Suite (básico) · Full Stack (legacy/ERP) |
| 6 | **Reportes automáticos** | Metabase + n8n | Informes diarios/semanales que llegan solos al equipo correcto | Suite + Full Stack |

> **Lead magnet:** el servicio 1 (Agentes IA) entra en el plan más barato y es el
> que dispara el upgrade. Es el gancho.

---

## 3. La estructura de tres capas (el corazón del sistema)

### Capa 1 — Plataforma (recurrente, mensual)

El SaaS. Incluye infraestructura cloud gestionada, el stack OSS, **onboarding
estándar**, updates de seguridad y soporte. Facturación mensual o anual (−20%).

| Plan | Tier | Mensual | Anual (−20%) | Para quién |
|------|------|---------|--------------|------------|
| **Bot Essential** | Starter | USD 100 | USD 80/mes | 1 bot WhatsApp. Negocio chico que valida un bot. |
| **Automation Suite** ⭐ | Business | USD 300 | USD 240/mes | Stack completo (n8n + Metabase + NocoDB). PyME con stack disperso. **El más popular.** |
| **Full Stack** | Scale | USD 500 | USD 400/mes | Sistema completo con tu marca + SLA. Operación crítica (caso Botulinic). |

**Qué cubre el "onboarding estándar" incluido:** levantar el subdominio + TLS,
branding del template, configurar el bot con el protocolo del cliente, conectar
WhatsApp + Google Calendar, panel de indicadores base, 1 capacitación. (~5–15h.)

### Capa 2 — Implementación (one-time, según complejidad)

Todo lo que **excede** el onboarding estándar: integraciones custom (Tiendanube,
ERP, OCR, IMAP banco), migraciones de datos, lógica de negocio a medida. Se
cotiza por bloques de horas. **Tarifa interna real ~USD 70/h** (no se expone la
tarifa horaria al cliente; se cotiza como precio cerrado por bloque).

| Bloque | Horas | Precio USD | Vigencia | Ejemplo |
|--------|-------|-----------|----------|---------|
| **Single** | 10h | 700 | 60 días | Un workflow puntual, una integración simple |
| **Pack** | 30h | 1.800 | 120 días | Bot completo + handoff + panel |
| **Strategic** | 80h | 4.500 | 12 meses | Setup integral con OCR + integración externa + dashboards |

### Capa 3 — Add-ons / expansión de cuenta

Se venden por separado, en cualquier momento (motor de expansión post-venta):

- WhatsApp Cloud API oficial (upsell sobre Evolution API)
- Dashboards ejecutivos avanzados · Reviews/social proof
- Integraciones extra (MercadoLibre, AFIP/facturación, etc.)
- Rediseño de tienda / landing (proyecto llave en mano standalone)
- Encuestas de satisfacción, reportes por email al dueño

---

## 4. La economía — qué cubre el precio

Cada peso de la mensualidad cubre, en este orden:

1. **Infraestructura:** VPS Contabo dedicada por cliente productivo (cliente
   crítico = VPS propia; aislamiento total). *(Costo exacto: ver Confluence
   `DDS / 5. Cuentas y servicios`.)*
2. **Consumo de IA (tokens LLM):** OpenAI GPT-4 + transcripción de audio.
   **Decisión pendiente** → ver §6.
3. **Operación:** tiempo del equipo (monitoreo, ajustes menores, soporte, backups).
4. **Margen.**

> Deuda operativa que afecta el costo: hoy OpenAI se factura a la cuenta personal
> de Javier. **Migrar a cuenta corporativa antes del segundo cliente** para
> costear limpio. (Confluence `Clientes1 / 8. Deuda técnica`.)

---

## 5. La inconsistencia que este sistema resuelve

**Hoy:** la web dice *"sin costos ocultos · onboarding incluido"*. Pero los deals
reales cobran setup fuerte (Botulinic 600, Musecases ~5.200). El prospecto que
ve "USD 100/mes, sin sorpresas" y después recibe una cotización de 5 mil dólares
**siente exactamente el costo oculto que le prometimos que no existía.**

**Recomendación:** comunicar las dos capas con transparencia. El mensaje no es
"sin setup"; es **"sin sorpresas"**:

> *Plataforma desde USD 100/mes. La implementación depende de tu caso — te la
> cotizamos cerrada en el diagnóstico, antes de empezar. Lo que ves es lo que pagás.*

Esto es más honesto, escala mejor (cada cliente tiene setup distinto) y no quema
la promesa de marca. El onboarding **estándar** sigue incluido; la implementación
**compleja** se cotiza aparte y a la vista.

---

## 6. Decisión clave: tokens LLM — passthrough vs fijo

Dos modelos posibles (Confluence `Clientes1 / 3. Integraciones`):

- **Passthrough +20%:** Brain cobra lo que se gasta en OpenAI + 20% de margen.
  Justo y escalable, pero variable e impredecible para el cliente.
- **Fijo incluido:** un monto fijo en el mensual cubre un tope de consumo.
  Predecible para el cliente; Brain absorbe el riesgo de picos.

**Recomendación:** fijo incluido con tope razonable por plan (predecible vende
mejor en PyME), y passthrough explícito solo por encima del tope. Define el tope
con el volumen real (Botulinic mide tokens/mes hoy).

---

## 7. Validación con clientes reales (el modelo cierra)

| Cliente | Plataforma (mensual) | Implementación (one-time) | Notas |
|---------|---------------------|---------------------------|-------|
| **Botulinic** | Full Stack — USD 500 público (400 piloto histórico) | Llave en mano (600 piloto · 2.500 para futuros médicos) | Sistema completo: pacientes, turnos, calendario, bot «Dolores», 2 sedes, Chatwoot, Metabase |
| **Musecases** (prospecto) | Automation Suite — USD 300 (+ ~50 tokens) | Strategic 80h + Single 10h = ~USD 5.200 | Tiendanube + OCR comprobantes + conciliación pagos. Año 1 ≈ USD 9.400 |

El modelo de dos capas **describe lo que ya hacés**. Solo faltaba nombrarlo y
hacerlo coherente de cara al cliente.

---

## 8. Descuentos y reglas de negociación

| Tipo | Condición | Descuento |
|------|-----------|-----------|
| Pago anual | 12 meses al firmar | **−20%** (publicado) |
| Referido cerrado | Cliente refiere y el otro firma | 1 mensualidad bonificada |
| Caso testimonial público | Acepta video + logo en web | −10% permanente |
| Vertical pilot | Primer cliente de una vertical nueva | hasta −25% primer año a cambio de testimonial |

**No negociable:** bajar precio sin sacar scope · regalar el setup · regalar meses
para cerrar · dar SLA 24/7 fuera de Full Stack.

---

## 9. Pendientes de ratificación (decisiones de Javier)

- [ ] Ratificar precios de Custom Workflows (Single 700 / Pack 1.800 / Strategic 4.500)
- [ ] Decidir tokens LLM: fijo incluido vs passthrough (§6)
- [ ] Decidir si la web expone la capa de implementación (§5) — **recomendado: sí, como "cotizada en el diagnóstico"**
- [ ] Política de facturación AR/internacional (tipo de cambio, factura A/B/C, cripto)
- [ ] ¿Free trial 14 días en Bot Essential? ¿Add-on WhatsApp Cloud API oficial?
