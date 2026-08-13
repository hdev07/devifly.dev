# Pistas de audio de los demos

Los demos de invitación reproducen música desde aquí. **No hay archivos en el repo
todavía**: hasta que existan, el botón de música se oculta solo (el `<audio>` dispara
`error`, `musicAvailable` pasa a `false` y el botón desaparece en lugar de fallar
delante de un cliente).

Para activarlo, deja los archivos con estos nombres exactos:

| Archivo | Demo | Ruta del componente |
| --- | --- | --- |
| `invitacion-pro.mp3` | XV · Valentina | `src/views/demos/InvitacionPro.vue` |
| `invitacion-premium.mp3` | Boda · Ana & Carlos | `src/views/demos/InvitacionPremium.vue` |

No hace falta tocar código: en cuanto el archivo responde 200, el botón vuelve a
aparecer.

## Requisitos de la pista

- **Licencia comercial** que permita uso en material de venta (Epidemic Sound,
  Artlist, Uppbeat o similar). No sirve música de YouTube ni hotlinks a terceros:
  antes apuntábamos a `soundhelix.com`, que además de ser un dominio ajeno servía
  rock algorítmico sobre una boda.
- **Tono acorde al evento**: piano o cuerdas suaves para la boda; algo más festivo
  pero instrumental para los XV.
- **Peso**: comprimir a ~128 kbps mono/estéreo. Objetivo por archivo: menos de 3 MB.
  La mayoría del tráfico es móvil.
- **Loop limpio**: el `<audio>` va con `loop`, así que el corte no debe notarse.

`InvitacionBasic.vue` no lleva reproductor a propósito — el plan Esencial excluye
música.
