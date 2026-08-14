# Paquete legal y contractual — Devifly

Plantillas listas para usar en la operación comercial de la agencia. Todas están redactadas bajo legislación mexicana, para persona física con actividad empresarial en RESICO y jurisdicción en el Estado de México.

> **Aviso:** estas plantillas son sólidas para la operación diaria de una agencia de desarrollo web, pero no sustituyen la revisión de un abogado. Antes de usarlas con un cliente corporativo grande o en un contrato de más de ~$150,000 MXN, conviene una revisión profesional. El costo de esa revisión única es menor que el de un solo conflicto.

---

## Los documentos

| # | Documento | Cuándo se firma | Frecuencia |
|---|---|---|---|
| 01 | [Contrato marco de servicios](01-contrato-marco-servicios.md) | Al cerrar el primer proyecto con un cliente | Una vez por cliente |
| 02 | [Anexo A — Alcance de trabajo (SOW)](02-anexo-a-alcance-sow.md) | Al iniciar cada proyecto | Uno por proyecto |
| 03 | [Acuerdo de confidencialidad (NDA)](03-acuerdo-confidencialidad-nda.md) | Antes del discovery, si hay info sensible | Cuando aplique |
| 04 | [Contrato de mantenimiento y hosting](04-contrato-mantenimiento-hosting.md) | El día de la entrega | Uno por cliente recurrente |
| 05 | [Convenio de cesión de derechos](05-convenio-cesion-derechos.md) | A solicitud del cliente, tras liquidar | Opcional |
| 06 | [Orden de cambio](06-orden-de-cambio.md) | Cada vez que se pide algo fuera de alcance | Las que hagan falta |
| 07 | [Acta de entrega y aceptación](07-acta-entrega-aceptacion.md) | El día que publicas y entregas | Una por proyecto |
| 08 | [Riesgo, seguros y responsabilidad](08-riesgo-seguros-y-responsabilidad.md) | No se firma — análisis interno | Revisar 1×/año |

### Contratos por servicio

Además del esquema marco + Anexo A, en [`servicios/`](servicios/README.md) hay un **contrato autónomo por cada producto del catálogo**, con sus planes y precios ya cargados. Se firma solo, sin marco y sin Anexo A, y es lo que conviene usar con un cliente que contrata un único proyecto.

| Servicio | Contrato |
|---|---|
| Invitaciones Digitales | [servicios/01](servicios/01-contrato-invitaciones-digitales.md) |
| Catálogos Digitales | [servicios/02](servicios/02-contrato-catalogos-digitales.md) |
| Menús Digitales | [servicios/03](servicios/03-contrato-menus-digitales.md) |
| Landing Pages | [servicios/04](servicios/04-contrato-landing-pages.md) |
| Salones de Eventos | [servicios/05](servicios/05-contrato-salones-eventos.md) |
| Software a Medida | [servicios/06](servicios/06-contrato-software-a-medida.md) |

Regla: **marco + Anexo A** para clientes recurrentes o de varios proyectos; **contrato por servicio** para venta puntual. Nunca ambos para el mismo proyecto.

---

## El flujo completo de un cliente

```
Prospecto entra por el sitio
        │
        ├─ ¿Info sensible? ──► 03 NDA
        │
        ▼
   Discovery (gratis)
        │
        ▼
   Propuesta comercial
        │
        ▼
   Cliente acepta ──────► 01 Contrato marco (solo la 1ª vez)
        │                 02 Anexo A (SOW) ← el documento más importante
        │
        ▼
   Anticipo 50% ──► arranca el plazo
        │
        ├─ ¿Piden algo extra? ──► 06 Orden de cambio ──► aprobada ──► se construye
        │                                             └─ rechazada ──► sigue el alcance original
        ▼
   Entregas iterativas + demo publicada
        │
        ▼
   Publicación ──► 07 Acta de entrega (activa garantía de 30 días)
        │
        ├─ Saldo 50% ──► opera la cesión de derechos ──► 05 Convenio (si lo piden)
        │
        ▼
   04 Contrato de mantenimiento ← aquí está el ingreso recurrente
```

---

## Reglas de operación

**1. El Anexo A es el documento que te salva.** El contrato marco protege lo legal; el Anexo A protege tu margen. Si algo no está escrito ahí, está fuera de alcance. Sé obsesivo con los límites cuantitativos (cuántas secciones, cuántas fotos, cuántos productos) — ahí es donde se fuga la rentabilidad.

**2. Nunca empieces sin anticipo.** El plazo se cuenta desde que hay dinero **y** material completo, no desde el "sí" por WhatsApp.

**3. Emite la orden de cambio el mismo día.** Si dejas pasar tres peticiones "chiquitas" sin documentar, ya regalaste una semana de trabajo y perdiste la autoridad para cobrar la cuarta.

**4. Firma el acta de entrega siempre.** Aunque el cliente sea conocido. Es lo que activa la garantía y lo que prueba que entregaste.

**5. Vende el mantenimiento el día de la entrega.** Es el único momento en que el cliente está viendo el resultado y valorándolo al máximo. Un mes después ya lo da por hecho.

**6. Ofrece el NDA antes de que lo pidan.** Cuesta cero y comunica seriedad. Los clientes grandes lo notan.

---

## Placeholders a rellenar

Todos los documentos usan `[CORCHETES]`. Antes de enviar cualquiera, busca `[` y verifica que no quede ninguno.

**Datos fijos de Devifly, ya incorporados:**

| Campo | Valor |
|---|---|
| Titular | Héctor Alejandro Cruz Solís |
| Marca | Devifly · devifly.dev |
| RFC | CUSH011107NH8 |
| Régimen | Persona física · RESICO |
| Domicilio fiscal | Prolongación Morelos 189, Valle Dorado, C.P. 53690, Naucalpan de Juárez, Estado de México |
| Jurisdicción | Tribunales competentes del Estado de México |
| Correo | devifly.dev@gmail.com |
| Teléfono | +52 56 3592 6679 |

**Tarifas ya definidas:**

| Concepto | Tarifa | Dónde |
|---|---|---|
| Excedente de mantenimiento | $700 MXN/hora + IVA, mínimo 30 min | Contrato 04, cláusula tercera |
| Orden de cambio | Precio cerrado. Estimar internamente a $800 MXN/hora, mínimo $1,200 por orden | Documento 06 |

Ambas están muy por encima de la tarifa implícita del plan más caro (**$175/hora en VIP**: $3,499 entre 20 horas), que es lo que hace que subir de plan siempre convenga más que pagar excedentes. Si bajas el excedente por debajo de $500, rompes ese incentivo y nadie sube de plan.

**Contrapartida del VIP a 20 horas:** a $175/hora es el plan con menor margen por hora de toda la línea, y solo es rentable si el cliente no agota la bolsa. Por eso el contrato 04 limita a **3 solicitudes activas en paralelo** y obliga a reencuadrar como proyecto de evolución al cliente que agote sus 20 horas dos meses seguidos. Sin esos dos frenos, un solo cliente demandante se come el margen del plan entero.

**Pendiente de decidir:**

- Si constituir una S.A.S. Ver [documento 08](08-riesgo-seguros-y-responsabilidad.md) §5. Es la acción de mayor retorno pendiente y se resuelve con una llamada a tu contador.
- La cláusula 16 ter (seguros) del contrato marco viene **desactivada**. No la actives hasta tener póliza vigente: incluirla sin tenerla es declarar algo falso en un contrato.

---

## Correspondencia con las políticas públicas del sitio

Los documentos de esta carpeta son el respaldo contractual de las políticas publicadas en devifly.dev. Si cambias una, cambia la otra: un cliente que detecte que el contrato contradice lo publicado tiene razón, y la tiene por escrito.

| Contrato (privado) | Política publicada (`src/data/legal.js`) |
|---|---|
| 01 — Cláusulas 3, 4, 8, 9, 10 | `/legal/terminos` |
| 01 — Cláusula 13 · LFPDPPP | `/legal/privacidad` |
| 01 — Cláusula 15 | `/legal/cancelaciones` |
| 01 — Cláusula 11 · 05 completo | `/legal/propiedad-del-codigo` |

---

## Cómo generarlos en Word con membrete

```bash
pip install python-docx           # una sola vez

# Todos los contratos por servicio
python docs/legal/generar-docx.py "docs/legal/servicios/*.md"

# Un documento suelto
python docs/legal/generar-docx.py docs/legal/01-contrato-marco-servicios.md
```

El script [`generar-docx.py`](generar-docx.py) toma `~/Downloads/membrete.docx` como plantilla, conserva su encabezado y pie de página, y escribe los `.docx` en una subcarpeta `docx/` junto al Markdown. Opciones útiles:

| Opción | Para qué |
|---|---|
| `--con-notas` | Conserva las cajas "Cómo usar esta plantilla". Por omisión se omiten, porque el `.docx` es el documento que ve el cliente. |
| `--membrete <ruta>` | Usar otro membrete. |
| `--salida <carpeta>` | Cambiar la carpeta de destino. |

Para PDF: abre el `.docx` en Word y exporta, o usa pandoc si lo tienes instalado.

Para firma electrónica con validez en México, cualquier plataforma que genere constancia de conservación (NOM-151) funciona. La firma autógrafa digitalizada intercambiada por correo también es válida conforme a los artículos 89-114 del Código de Comercio, y es lo que usan la mayoría de las agencias.
