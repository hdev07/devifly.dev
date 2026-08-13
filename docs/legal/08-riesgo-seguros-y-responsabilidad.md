# Riesgo, seguros y responsabilidad patrimonial

> Este documento no es una plantilla para firmar con clientes. Es análisis interno: qué te puede pasar, quién paga, y qué hacer al respecto. Léelo completo una vez y revísalo cuando cambie tu facturación o tu tipo de cliente.
>
> No soy abogado ni agente de seguros. Las cifras de primas son órdenes de magnitud para que sepas qué esperar al pedir cotización, no precios verificados.

---

## 1. El problema estructural: responsabilidad ilimitada

Hoy operas como **persona física con actividad empresarial**. Eso significa que, jurídicamente, **tú y tu negocio son la misma persona**. No existe separación patrimonial.

Si un cliente te demanda y gana:

| Queda expuesto | Sí / No |
|---|---|
| Ingresos de la agencia | Sí |
| Equipo de cómputo y herramientas | Sí |
| Cuentas bancarias personales | Sí |
| Tu auto | Sí |
| Tu casa | Sí, salvo que aplique protección de patrimonio de familia |
| Ingresos futuros | Sí, vía embargo de percepciones |

No hay velo corporativo que te proteja. Un juicio perdido de $400,000 no se detiene en el borde de "lo del negocio": llega a lo tuyo.

Esta es la exposición más grande que tienes hoy, y es también la más barata de reducir.

---

## 2. Qué te puede demandar realmente un cliente

Ordenado por probabilidad real, no por dramatismo:

### Alta probabilidad · impacto bajo-medio

**Incumplimiento de contrato.** No entregaste, entregaste tarde, o entregaste algo distinto a lo pactado. Es el 90% de los conflictos reales de una agencia.
→ **Mitigado por:** Anexo A con alcance cerrado, criterios de aceptación verificables, acta de entrega firmada, y el tope de responsabilidad de la cláusula 16.

**Disputa por reembolso al cancelar.** El cliente cree que avanzaste 20% y tú dices 60%.
→ **Mitigado por:** los porcentajes por hito del Anexo A §8. Sin esa tabla, esta disputa la pierdes por desgaste aunque tengas razón.

### Probabilidad media · impacto alto

**Fuga de datos personales.** Manejas bases de prospectos de salones, clientes de catálogos, comensales. Si se filtran, el responsable frente al INAI es tu cliente, pero él te va a repercutir a ti como encargado, y con razón si la falla fue tuya.
→ **Mitigado parcialmente por:** cláusula 13 y el rol de encargado. **No mitigado por:** nada, si la negligencia fue real. Aquí es donde un seguro cibernético hace la diferencia.

**Infracción de propiedad intelectual.** Usaste una foto de stock sin licencia, una tipografía de pago, o un componente con licencia incompatible.
→ **Mitigado por:** cláusula 16 bis.1(a) cuando el material lo puso el cliente. **Tu exposición real:** cuando el material lo pusiste tú. Lleva inventario de licencias.

**Reclamación laboral de un colaborador.** Si subcontratas freelancers de forma recurrente y con instrucciones directas, un juez puede reconocer relación laboral con antigüedad, prestaciones y prima de antigüedad.
→ **Mitigado por:** cláusula 7. **Refuerzo necesario:** contrato de prestación de servicios firmado con cada freelance, que facture, y que no trabaje en exclusiva para ti.

### Probabilidad baja · impacto muy alto

**Daño económico por caída o error.** El sitio de reservaciones de un salón falla en temporada alta y el cliente reclama las reservas perdidas.
→ **Mitigado por:** la exclusión de lucro cesante y daños indirectos, más el tope al monto pagado. Es la razón por la que esas dos cláusulas existen.

**Demanda de un tercero, no de tu cliente.** El usuario final de un sitio que construiste reclama por un cobro mal procesado o por sus datos.
→ **Mitigado por:** cláusula 16 bis.1. Es exactamente para esto.

---

## 3. Qué tan sólido es tu escudo contractual

El límite de responsabilidad al monto pagado es la pieza central. Su fuerza real, en México:

**Sí es válido** entre comerciantes (B2B). El Código de Comercio permite pactar libremente las condiciones, y los tribunales respetan topes de responsabilidad negociados entre partes con capacidad económica comparable.

**No te salva** de:
- **Dolo o mala fe.** El artículo 2106 del Código Civil Federal declara nula toda renuncia anticipada a la responsabilidad por dolo. Si engañaste, el tope no existe.
- **Negligencia grave.** Zona gris, pero un juez puede asimilarla al dolo.
- **Cliente consumidor.** Si vendes a una persona física para uso no empresarial —una invitación de XV años, por ejemplo— aplica la Ley Federal de Protección al Consumidor, y la PROFECO puede declarar abusiva una cláusula que limite demasiado tus obligaciones. En ese segmento tu tope es más débil de lo que parece.
- **Materia laboral o fiscal.** Ahí no hay contrato que valga.

**Conclusión honesta:** el contrato te protege bien contra el conflicto típico —disputas de alcance y de dinero, que son casi todos— y te protege poco contra el evento catastrófico raro. Para eso sirve la estructura societaria y el seguro.

---

## 4. Seguros: qué existe y cuándo vale la pena

**Hoy no tienes ninguno.** No hay nada contratado y ninguna cláusula lo presume — por eso la cláusula 16 ter viene desactivada por defecto.

### Responsabilidad Civil Profesional (E&O)

Cubre reclamaciones por errores, omisiones o negligencia en el ejercicio profesional: entregaste algo defectuoso y causó un daño económico. Suele cubrir también los gastos de defensa, que muchas veces son el costo real aunque ganes.

| | |
|---|---|
| **Aseguradoras en México** | AXA, GNP, Chubb, Zurich, HDI, Qualitas empresarial |
| **Suma asegurada típica** | $1 a $5 millones MXN |
| **Prima aproximada** | del orden de $10,000 a $30,000 MXN/año para un despacho pequeño de TI |
| **Deducible típico** | 5–10% de la reclamación, con un mínimo |

### Ciber-riesgo

Cubre la filtración de datos: costos de notificación, análisis forense, defensa ante el INAI, multas cuando son asegurables, y extorsión por ransomware. Es el seguro que más sentido tiene en tu caso concreto, porque manejas bases de datos de terceros.

Muchas aseguradoras lo venden como endoso del E&O, lo cual sale bastante más barato que contratarlo suelto.

### Responsabilidad Civil General

Cubre daños físicos a personas o bienes. Poco relevante para trabajo remoto; solo tiene sentido si abres oficina y recibes clientes.

### Cuándo dejar de posponerlo

Contrata E&O + ciber cuando se cumpla **cualquiera** de estas condiciones:

- [ ] Facturas más de ~$600,000 MXN al año.
- [ ] Un solo contrato supera los ~$150,000 MXN.
- [ ] Manejas bases de datos con información personal de clientes finales.
- [ ] Un cliente corporativo te lo exige. Cada vez es más común: te piden acreditar póliza antes de darte de alta como proveedor, y no tenerla te descalifica.
- [ ] Empiezas a construir sistemas donde una falla detiene la operación del cliente.

Mientras nada de eso aplique, el contrato bien redactado es una relación costo-beneficio razonable. En cuanto aplique una sola, la prima se vuelve barata comparada con la exposición.

---

## 5. La medida que más reduce tu riesgo, y casi no cuesta

**Constituir una sociedad.**

Una **S.A.S. (Sociedad por Acciones Simplificada)** se constituye en línea, gratis, a través del portal de la Secretaría de Economía, admite un solo accionista y limita tu responsabilidad al capital que aportes. Es la figura pensada exactamente para un caso como el tuyo.

| | Persona física (hoy) | S.A.S. |
|---|---|---|
| Responsabilidad | Ilimitada, alcanza tu patrimonio personal | Limitada al capital aportado |
| Costo de constitución | — | Prácticamente cero, en línea |
| Percepción del cliente | Freelance | Empresa |
| Contabilidad | Simple | Más obligaciones, requiere contador |
| Límite de ingresos | Sin límite en RESICO PF hasta el tope del régimen | Tope anual de ingresos, actualizado cada año |

**Consideraciones antes de moverte:** la S.A.S. tiene un tope de ingresos anuales y no puede ser accionista de otra sociedad; si lo rebasas, debes migrar a S. de R.L. o S.A. Además, el tratamiento fiscal cambia y podrías perder las ventajas de RESICO como persona física.

**Esto se decide con tu contador, no conmigo.** Pero preguntárselo esta semana es probablemente la acción de mayor retorno de toda la lista: cuesta una llamada y elimina la exposición de tu patrimonio personal.

---

## 6. Higiene de riesgo, sin costo

Cosas que reducen exposición y no cuestan dinero:

- [ ] **Nunca empieces sin Anexo A firmado.** Es tu prueba del alcance, y el 90% de los conflictos son de alcance.
- [ ] **Firma siempre el acta de entrega.** Prueba qué entregaste y cuándo, y activa el plazo de reclamación.
- [ ] **Guarda todo por escrito.** Las aprobaciones por WhatsApp son válidas conforme al Código de Comercio, pero solo si las conservas. Exporta las conversaciones al cierre de cada proyecto.
- [ ] **Lleva inventario de licencias.** Cada fuente tipográfica, imagen de stock y dependencia, con su licencia. Ya lo pide el acta de entrega §3.1.
- [ ] **No guardes credenciales que no necesitas.** Después de entregar, borra los accesos de clientes sin mantenimiento. Lo que no tienes no se te puede filtrar.
- [ ] **Contrato firmado con cada freelance** que colabore, y que facture.
- [ ] **Separa cuentas bancarias.** Una para el negocio, otra personal. No te da protección jurídica por sí sola, pero es indispensable si algún día constituyes sociedad, y ayuda enormemente a demostrar qué es patrimonio del negocio.
- [ ] **Respaldos con retención de 60 días**, tal como ya lo prometen tus políticas.

---

## 7. Prioridades

| Prioridad | Acción | Costo | Reduce |
|---|---|---|---|
| 1 | Preguntar a tu contador por la S.A.S. | Una llamada | La exposición patrimonial completa |
| 2 | Anexo A con % por hito en **todos** los proyectos | Cero | Disputas de reembolso |
| 3 | Acta de entrega firmada siempre | Cero | Reclamaciones tardías |
| 4 | Separar cuentas bancarias | Cero | Confusión patrimonial |
| 5 | Cotizar E&O + ciber cuando se cumpla algún disparador del §4 | $10–30k/año | El evento catastrófico |
| 6 | Contrato con freelances antes de subcontratar | Cero | Reclamación laboral |

---

## Documentos relacionados

- [Contrato marco](01-contrato-marco-servicios.md) — cláusulas 7, 12, 13, 16, 16 bis y 16 ter
- [Anexo A](02-anexo-a-alcance-sow.md) — §8, porcentajes por hito
- [Acta de entrega](07-acta-entrega-aceptacion.md) — prueba de entrega y arranque del plazo de reclamación
