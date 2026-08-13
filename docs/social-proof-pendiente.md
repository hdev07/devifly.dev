# Social proof — qué falta y dónde va

Estado a **12 ago 2026**. El código ya está listo para recibir el material; nada
de lo de abajo requiere tocar componentes. Mientras no llegue, el sitio se
comporta como hoy (nombres en texto, casos sin cita).

Actualizado el **12 ago**: los logotipos de Timbra, Musion y Confecdotario ya
están puestos, y MoviBase y PoleGP ya tienen capturas. Lo que queda —
testimoniales, los 8 logotipos restantes y el origen de los KPIs — no depende de
desarrollo: depende de pedírselo a los clientes.

---

## 1. Logotipos para la barra de confianza

**Timbra, Musion y Confecdotario: hechos** (12 ago). Están en
`src/assets/img/brands/` y ya se ven en la home, con variante por tema donde
hacía falta:

| Marca | Archivo(s) | Nota |
| --- | --- | --- |
| Timbra | `timbra.svg` + `timbra-dark.svg` | Wordmark azul marino para claro, blanco para oscuro |
| Musion | `musion.svg` | El horizontal rosa se lee en los dos temas; no necesita variante |
| Confecdotario | `confecdotario.svg` + `confecdotario-dark.svg` | Negro para claro, blanco para oscuro |

**Faltan 8:** devifly, cruzbet, movibase, white-glove-naples, polegp,
linco-eventos, aurea, barberia-jafz. Mientras no existan, esas marcas siguen
mostrándose como texto, que es el comportamiento correcto.

Para agregar una: dejar el archivo como `<slug>.svg` (y `<slug>-dark.svg` si el
logotipo no se lee sobre fondo oscuro). No hay que tocar código. La tabla de
slugs y los requisitos están en `src/assets/img/brands/README.md`.

---

## 2. Testimoniales en los casos de estudio

**Dónde van:** `src/data/cases/{timbra,musion,confecdotario}.js`, campo
`testimonial` (hoy `null`, con el formato exacto comentado justo encima).

```js
testimonial: {
  quote: { es: 'Cita literal del cliente.', en: 'Client quote.' },
  author: 'Nombre Apellido',
  role: { es: 'Cargo · Empresa', en: 'Role · Company' },
  avatar: null, // opcional: import de una foto en assets/img/cases/<caso>/
},
```

Con `testimonial: null` la sección no se renderiza; en cuanto se llena aparece
entre la galería técnica y el CTA final.

**Qué pedir.** Una cita corta sirve más que un párrafo largo, y funciona mejor
si menciona un resultado concreto en vez de un adjetivo. "Bajamos el cierre
mensual de tres días a medio" convence; "excelente trabajo" no dice nada. Basta
con el correo de cierre del proyecto: nombre, cargo y una o dos frases.

---

## 3. Origen de los KPIs de la home

`TrustBar.vue` publica cuatro números sin fuente:

| KPI | Valor | Qué haría falta |
| --- | --- | --- |
| Productos en producción | +20 | Lista interna que respalde el conteo |
| Aumento de leads | +45% | De qué proyecto sale y en qué periodo |
| Uptime | 99.9% | De qué infraestructura y con qué medición |
| Demo | 21 días | Este sí es verificable: es la oferta publicada |

No hace falta publicar la fuente, pero sí tenerla: si un prospecto pregunta
"+45% ¿de qué?" en una llamada, la respuesta debe existir. Si alguno no se puede
sostener, es preferible cambiarlo por uno que sí (por ejemplo, número de casos
con página propia).

---

## 4. Capturas de MoviBase y PoleGP — hecho

Capturadas el 12 ago de sus **landings públicas**, no del sistema interno
(MoviBase y PoleGP solo tienen landing pública). Tres tomas móviles por
proyecto en `src/assets/img/cases/{movibase,polegp}/phone-{1,2,3}.jpg` más
`landing-hero.jpg`.

Los dos ya aparecen en la parrilla de resultados del home con el mismo
tratamiento de device frames que los tres casos con página propia, así que la
parrilla dejó de tener tres proyectos con evidencia y dos sin nada. La regla en
`CaseStudiesTeaser.vue` es automática: un proyecto entra a la parrilla en cuanto
tiene entrada en `mockups`.

Se regeneran con `scratchpad/ext-shots.mjs` (Chrome headless por CDP) si las
landings cambian.
