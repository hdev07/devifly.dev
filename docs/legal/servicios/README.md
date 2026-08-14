# Contratos por servicio — Devifly

Un contrato **autónomo** por cada servicio del catálogo. Se firman solos, sin contrato marco y sin Anexo A: cada uno incorpora sus propias declaraciones, cláusulas y anexo de alcance con los planes del catálogo ya cargados.

> **Aviso:** estas plantillas son sólidas para la operación diaria de una agencia de desarrollo web, pero no sustituyen la revisión de un abogado. Para clientes corporativos grandes o contratos de más de ~$150,000 MXN, conviene una revisión profesional antes de firmar.

---

## Los contratos

| # | Servicio | Contrato | Planes cubiertos | Rango de precio |
|---|---|---|---|---|
| 01 | Invitaciones Digitales | [Contrato](01-contrato-invitaciones-digitales.md) | Esencial · Pro · Premium | $499 – $1,599 |
| 02 | Catálogos Digitales | [Contrato](02-contrato-catalogos-digitales.md) | Esencial · Pro · Premium | $1,499 – $6,999 |
| 03 | Menús Digitales | [Contrato](03-contrato-menus-digitales.md) | Esencial · Pro · Premium | $2,499 – $14,999 |
| 04 | Landing Pages | [Contrato](04-contrato-landing-pages.md) | Esencial · Pro · Premium | $4,999 – $12,999 |
| 05 | Salones de Eventos | [Contrato](05-contrato-salones-eventos.md) | Esencial · Pro · Premium | $5,999 – $16,999 |
| 06 | Software a Medida | [Contrato](06-contrato-software-a-medida.md) | Por alcance | Desde $40,000 |

**Mantenimiento y hosting** no tiene contrato aquí: se cubre con el [contrato 04 de la carpeta padre](../04-contrato-mantenimiento-hosting.md), que se firma el día de la entrega y es el que genera el ingreso recurrente.

---

## Cuál usar

```
Cliente nuevo, un solo servicio del catálogo
        └─► Contrato por servicio de esta carpeta.   ← el caso común

Cliente que contratará varios proyectos en el tiempo
        └─► ../01-contrato-marco-servicios.md  +  ../02-anexo-a-alcance-sow.md
            (un solo marco, un Anexo A por proyecto)

Proyecto a medida, alcance no preconfigurado
        └─► 06-contrato-software-a-medida.md

Después de entregar cualquiera de los anteriores
        └─► ../04-contrato-mantenimiento-hosting.md
```

No firmes ambos esquemas con el mismo cliente para el mismo proyecto: se duplican las obligaciones y se contradicen los plazos.

---

## Qué cambia respecto del contrato marco

Cada contrato por servicio conserva el núcleo legal del marco —propiedad intelectual, confidencialidad, datos personales, cancelación, limitación de responsabilidad, jurisdicción— y agrega las cláusulas que solo tienen sentido en ese servicio:

| Servicio | Cláusula específica que lo protege |
|---|---|
| Invitaciones | Fecha del evento como plazo fatal · Vigencia de publicación 3/6/12 meses · Garantía de disponibilidad el día del evento · Datos personales de invitados · Control de acceso sin operación presencial |
| Catálogos | El catálogo no es e-commerce · Responsabilidad del cliente frente al consumidor · Botón de pago: la cuenta y los fondos son del cliente |
| Menús | Alérgenos, ingredientes y precios son responsabilidad exclusiva del cliente, con indemnización · Impresión del material con QR no incluida |
| Landing Pages | Obligación de medios, no de resultados · Sin garantía de conversión ni de posiciones en buscadores · Campañas publicitarias fuera de alcance |
| Salones | Las reservas no se perfeccionan en el sitio · Sin responsabilidad por sobreventa · Plantilla de contrato PDF sin asesoría jurídica · Botón de anticipos |
| Software a medida | Sprints con demo y conformidad tácita · Supuestos que sostienen la estimación · Infraestructura de terceros a cargo del cliente · No solicitación de personal |

---

## Tarifario ya incorporado

Los contratos vienen con estos números cargados. Si cambias uno, cámbialo en los seis.

| Concepto | Tarifa | Dónde |
|---|---|---|
| Orden de cambio | $800 M.N./hora + IVA · mínimo $1,200 por orden | Cláusula de cambios de alcance, contratos 02–06 |
| Producto o platillo adicional cargado por Devifly | $25 M.N. c/u · mínimo 20 productos / 10 platillos | 02 y 03 |
| Fotografía adicional procesada | $20 M.N. c/u ($25 en invitaciones) | 01, 02, 04, 05 |
| Sección adicional en landing | $1,500 M.N. | 04 |
| Variante completa para prueba A/B | $2,500 M.N. | 04 |
| Sucursal o ubicación adicional | $2,500 M.N. | 03 y 05 |
| Vendedora adicional en catálogo | $1,200 M.N. | 02 |
| Segundo idioma | $2,500 – $3,500 M.N. según producto | 03, 04, 05 |
| Cargo por urgencia en invitaciones (menos de 10 días) | $499 M.N. · borrador en 48 h hábiles | 01 |
| Renovación de la invitación por 6 meses más | $399 M.N. | 01 |
| Renovación anual de hosting y dominio | $199 M.N./mes o $1,999 M.N./año | 02–05 |

Todas están por encima de la tarifa implícita del plan de mantenimiento más caro ($350/hora en VIP), que es lo que hace que subir de plan siempre convenga más que pagar excedentes.

**Límites de carga inicial incluidos** (lo que Devifly captura; la capacidad del sistema es la del plan y el cliente sigue dando de alta sin costo):

| Producto | Esencial | Pro | Premium |
|---|---|---|---|
| Catálogos — productos | 50 | 150 | 300 |
| Menús — platillos | 30 | 100 | 250 |
| Landing — secciones | 5 | 9 | 14 |
| Salones — fotografías | 20 | 60 | 120 |
| Invitaciones — fotografías | 15 | 30 | 50 |

---

## Antes de enviar cualquiera

1. **Busca `[` en el documento.** Lo que queda entre corchetes es solo información del cliente: nombre, RFC, domicilio, dominio, precio del plan elegido y fecha del evento. Si queda uno sin llenar, no lo mandes.
2. **Borra la caja "Cómo usar esta plantilla"** del inicio. El script de DOCX ya la omite por omisión.
3. **Deja solo el plan contratado** en el Anexo Único y borra los otros dos, junto con las columnas de los planes que no aplican en las tablas de límites.
4. **Revisa los límites cuantitativos** contra lo que realmente vendiste. Vienen con valores por plan, pero si prometiste más en la llamada, cámbialos aquí antes de firmar, no después.
5. **Verifica el precio contra `src/data/salesCatalog.js`.** Si cambiaste precios en el sitio, cámbialos aquí.
6. **El lugar de firma viene fijo** en Naucalpan de Juárez, Estado de México. La fecha se llena a mano al firmar.

---

## Generar los DOCX con membrete

```bash
# Todos los contratos de esta carpeta
python docs/legal/generar-docx.py docs/legal/servicios/*.md

# Uno solo
python docs/legal/generar-docx.py docs/legal/servicios/01-contrato-invitaciones-digitales.md
```

Los archivos se escriben en `docs/legal/servicios/docx/`, con el encabezado y pie de página del membrete de Devifly. Requiere `python-docx` (`pip install python-docx`).

---

## Correspondencia con las políticas públicas del sitio

Estos contratos son el respaldo privado de lo publicado en devifly.dev. Si cambias uno, revisa el otro.

| Cláusula del contrato por servicio | Política publicada (`src/data/legal.js`) |
|---|---|
| Precio, plazos, garantía, entrega | `/legal/terminos` |
| Datos personales | `/legal/privacidad` |
| Terminación y cancelación · Demo de 21 días | `/legal/cancelaciones` |
| Propiedad intelectual | `/legal/propiedad-del-codigo` |
