# Logotipos de la barra de confianza

`TrustBar.vue` recorre `brandList` y, para cada marca, busca aquí un archivo que
se llame igual que su `slug`. Si existe, muestra el logotipo; si no, muestra el
nombre en texto. **No hay que tocar código**: basta con dejar el archivo con el
nombre correcto.

## Variantes por tema

| Archivo | Cuándo se usa |
| --- | --- |
| `<slug>.svg` | Siempre, salvo que exista la variante oscura |
| `<slug>-dark.svg` | Solo en modo oscuro (la clara pasa a `dark:hidden`) |

Si el logotipo se lee bien sobre los dos fondos —como el rosa de Musion— basta
con `<slug>.svg` y no hace falta la variante.

## Estado

| slug | Marca | Logotipo |
| --- | --- | --- |
| `timbra` | Timbra One | ✅ claro + oscuro |
| `musion` | Musion Day | ✅ rosa, sirve en ambos temas |
| `confecdotario` | Confecdotario | ✅ claro + oscuro |
| `devifly` | Devifly Dev | pendiente |
| `cruzbet` | CruzBet | pendiente |
| `movibase` | MoviBase | pendiente |
| `white-glove-naples` | White Glove Naples | pendiente |
| `polegp` | PoleGP | pendiente |
| `linco-eventos` | Linco Eventos | pendiente |
| `aurea` | Aurea | pendiente |
| `barberia-jafz` | Barberia JAFZ | pendiente |

Formatos aceptados: `.svg` (preferido), `.png`, `.webp`.

## Requisitos

- **Legible en el tema donde se muestra.** Un lockup blanco sin variante clara
  desaparece en light mode. Por eso Timbra y Confecdotario llevan las dos.
- **Horizontal**, con el alto normalizado. Se renderiza a `h-9` con
  `max-w-[170px]`, así que un lockup vertical o un icono cuadrado se ve diminuto
  al lado de uno alargado. Para Musion se usó el horizontal, no el vertical.
- **Sin fondo propio** (transparente). El marquee aplica `grayscale` y lo quita
  al hacer hover, así que el color solo se ve al pasar el cursor.
- **Con permiso del cliente.** La cláusula de portafolio del contrato marco
  cubre mostrar el proyecto; el uso del logotipo conviene confirmarlo aparte.
