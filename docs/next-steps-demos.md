# Next steps — Demos por plan

Estado a **12 ago 2026**. Contexto: los demos por plan se sirven desde
`/producto/:plan` (`esencial|pro|premium`), resueltos por
`src/composables/useDemoPlan.js`, que lee `route.params.plan` y cae a
`route.query.plan` por compatibilidad.

---

## 1. Cerrado

| Qué | Dónde |
| --- | --- |
| Tarjetas de demo de Invitaciones enlazaban las tres al mismo plan | `LandingInvitaciones.vue:156,236,328` |
| Negocios no tenía `demo` en ningún paquete; los 3 botones abrían Premium | `landingNegocios.js` (es+en), `LandingNegocios.vue:520` |
| `LandingPageDemo.vue` seguía leyendo `route.query.plan` → `/landing-pages/esencial\|pro` caían en Premium | migrado a `useDemoPlan` |
| Premium mostraba Mariana & Diego; la tarjeta anunciaba Ana & Carlos | `InvitacionPremium.vue` |
| `t("triviaTitle", …)` renderizaba el nombre de la clave; `t()` ignoraba su 2º argumento en 7 llamadas | `InvitacionPremium.vue` |
| 10 textos en español fijo que no cambiaban con el toggle EN | `InvitacionPremium.vue` |
| QR parpadeaba (`Math.random()` dentro de un binding de estilo) | `InvitacionPremium.vue` |
| Basic y Pro decían "Sábado" sobre fechas en lunes; Pro mostraba 2025 con countdown a 2027 y agendaba sep-2025 | `InvitacionBasic.vue`, `InvitacionPro.vue` |
| Fechas límite de RSVP vencidas (may-2025, ago-2025) y hashtag `#BautizoSantiago2025` | ídem |
| Trivia se anunciaba en Pro pero solo existe en Premium | `landingInvitaciones.js` (es+en) |

**Fechas canónicas** — tarjeta, texto mostrado, día de la semana y countdown coinciden:

| Plan | Evento | Fecha |
| --- | --- | --- |
| esencial | Bautizo · Santiago | sábado 12 jun 2027, 12:00 |
| pro | XV · Valentina | sábado 18 sep 2027, 16:00 |
| premium | Boda · Ana & Carlos | viernes 10 dic 2027, 17:00 |

**Auditoría promesa-vs-demo de Invitaciones: limpia.** Esencial cubre sus 9
características y respeta sus 9 exclusiones; Pro y Premium también.

---

## 2. Cerrado el 12 ago 2026

| Qué | Cómo se resolvió |
| --- | --- |
| **QA mobile** (era P1) | Medido con Chrome headless vía CDP a 375 px sobre demos, landings y home: `scrollWidth == 375` en todas. Los únicos elementos que exceden el viewport son glows decorativos absolutos y el marquee de TrustBar, ambos dentro de `overflow-hidden`. Los sospechosos que listaba este documento (hero de Premium, padrinos `grid-cols-3`, tabla de invitados, countdown) no desbordan. |
| **i18n de Basic y Pro** (era P2) | Los dos componentes tienen `translations` con paridad es/en verificada por script (46 y 76 claves, 0 huérfanas) y toggle ES/EN en la barra superior, igual que Premium. |
| **Auditoría promesa-vs-demo** (era P3) | Hecha en los 4 productos restantes. Ver hallazgos abajo. |
| **Imágenes hotlinked** (era P5) | Las 158 referencias a `images.unsplash.com` se sirven desde `public/img/demos/` (98 archivos, 3.9 MB). De paso: 9 de esas URLs ya devolvían 404, es decir que había imágenes rotas en los demos. |
| **Música hotlinked** (parte de P4) | Fuera el enlace a `soundhelix.com`. El `<audio>` apunta a `/audio/invitacion-{pro,premium}.mp3` y el botón se oculta solo mientras el archivo no exista. |

### Hallazgos de la auditoría promesa-vs-demo

- **Salones — 2 promesas rotas, corregidas.** "Sección paquetes/servicios" y
  "Blog de eventos" son features de Pro y están excluidas de Esencial, pero
  ambas secciones se renderizaban en los tres planes. Ahora van con
  `v-if="isPro"`. Verificado: Esencial 5 secciones, Pro 9, Premium 10.
- **Menús — limpio.** `showSearch`, `showPromotions`, `showSubcategories`,
  `showItemModal` (donde viven alérgenos y porciones) y `showBranchPicker`
  coinciden con lo prometido en cada plan.
- **Catálogos — limpio.** El dataset por tier respeta el escalón: `basico`
  1 categoría / 2 fotos / sin stock / sin variantes; `pro` añade stock y
  variantes; `premium` añade vendedoras, cupones y pago en línea.
- **Landing Pages — limpio.** Las secciones sin gate son hero, precios,
  contacto y ubicación, que es justo lo que incluye Esencial.
- **Nota común:** los paneles de administración que prometen Pro y Premium
  (editar platillos, productos, contenido) no aparecen en los demos porque el
  demo es la vista pública. No es promesa rota, pero conviene tener capturas del
  panel para la llamada de venta.

---

## 3. Pendiente

### P1 · Pistas de audio con licencia — *bloqueado, necesita archivos*

El hotlink ya no está, pero el reproductor sigue mudo hasta que existan
`public/audio/invitacion-pro.mp3` e `invitacion-premium.mp3`. Requisitos y
comportamiento del fallback en `public/audio/README.md`.

### P2 · Fotos de stock del demo de XV — *revisión humana*

Las imágenes ya son locales, pero conviene revisar con ojo humano las del demo
de XV antes de enseñarlo: una quinceañera tiene 15 años y en la ronda anterior
uno de los candidatos de stock era una foto en ropa interior. Comprobar que el
enlace responde 200 no basta.

## 4. Comprobaciones útiles

```bash
# Paridad de claves es/en y claves usadas sin definir (ajustar el archivo)
python - <<'PY'
import io, re
s = io.open('src/views/demos/InvitacionPremium.vue', encoding='utf-8').read()
block = s[s.index('const translations = {'):s.index('const t = (key')]
es, en = block[block.index('es: {'):block.index('en: {')], block[block.index('en: {'):]
k = lambda b: set(re.findall(r'^\s{4}([a-zA-Z]+):', b, re.M))
a, b = k(es), k(en)
used = set(re.findall(r't\("([a-zA-Z]+)"', s))
print('solo ES:', sorted(a - b) or '-')
print('solo EN:', sorted(b - a) or '-')
print('usadas sin definir:', sorted(used - a) or '-')
PY

# Coherencia tarjeta / componente / día de la semana / countdown
python - <<'PY'
import io, re, datetime
comp = {'esencial': 'InvitacionBasic', 'pro': 'InvitacionPro', 'premium': 'InvitacionPremium'}
ES = {'Monday':'Lunes','Tuesday':'Martes','Wednesday':'Miércoles','Thursday':'Jueves',
      'Friday':'Viernes','Saturday':'Sábado','Sunday':'Domingo'}
for plan, f in comp.items():
    s = io.open(f'src/views/demos/{f}.vue', encoding='utf-8').read()
    tgt = re.findall(r'new Date\("([0-9-]+)T', s)[0]
    real = ES[datetime.date.fromisoformat(tgt).strftime('%A')]
    shown = re.findall(r'(Lunes|Martes|Miércoles|Jueves|Viernes|Sábado|Domingo)', s)
    print(f'{plan:9} {tgt}  muestra={shown[0] if shown else "-":9} real={real:9} '
          f'{"OK" if shown and shown[0] == real else "MAL"}')
PY

# Links por plan que se hayan quedado sin el plan en la URL
grep -rn 'to="/[a-z-]*/demo"' src/views/landings/   # 3 esperados: CTAs genéricos de hero/cierre

# Demos que aún no usen useDemoPlan
grep -rln "route.query.plan" src/views/demos/       # debe salir vacío
```

---

## 5. Notas de arquitectura

- Invitaciones usa **tres componentes independientes** (`InvitacionesDemo.vue`
  despacha a `InvitacionBasic` / `InvitacionPro` / `InvitacionPremium`). Se eligió
  sobre un componente único parametrizado porque cada evento diverge en
  estructura, no solo en textos: un bautizo no tiene cortejo nupcial ni sección
  de "cómo nos conocimos".
- Los otros productos usan **un componente con gating por `tier`**. Las dos formas
  conviven; no hace falta unificarlas.
- `/producto/demo` redirige a `/producto/premium`. Los 3 CTAs genéricos de
  hero y cierre lo usan a propósito: abren la demo estrella.
- Los links por plan viven en los datos (`path` en `demoCards`, `demo` en
  `packages`), nunca hardcodeados en el template. Es lo que falló originalmente.
