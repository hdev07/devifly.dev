// ─── Demo Invitation Data ───
// Each invitation follows the universal schema.
// In production, these come from DB/API. Here they power the demos.

export const invitations = {
  /* ────────── BASIC — Bautizo de Mateo ────────── */
  'bautizo-mateo': {
    id: 'inv-demo-basic',
    slug: 'bautizo-mateo',
    plan: 'basic',
    status: 'active',
    expiresAt: '2025-09-14',

    event: {
      type: 'bautizo',
      emoji: 'sparkles',
      labelAbove: 'Bautizo de',
      name: 'Mateo',
      subtitle: 'Con la bendición de Dios,\ncelebramos su llegada a la fe',
      parentsLabel: 'Hijos de',
      parents: 'Andrea & Carlos Mendoza',
      date: '2025-06-14T12:00:00',
      dateDisplay: 'Sábado, 14 de Junio · 12:00 PM',
    },

    theme: 'pastel', // preset key from themes.js

    features: {
      countdown: { enabled: true },
      music: {
        enabled: true,
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
        autoplay: false,
      },
      location: {
        enabled: true,
        venues: [
          { emoji: 'landmark', name: 'Ceremonia', place: 'Parroquia San José', time: '12:00 PM', city: 'Guadalajara, Jal.' },
          { emoji: 'sparkles', name: 'Celebración', place: 'Salón Los Arcos', time: '2:00 PM', city: 'Guadalajara, Jal.' },
        ],
        mapsEmbed: 'https://maps.google.com/maps?q=Parroquia+San+Jose+Guadalajara+Jalisco&t=&z=15&ie=UTF8&iwloc=&output=embed',
        mapsLink: 'https://maps.google.com/?q=Parroquia+San+Jose+Guadalajara+Jalisco',
      },
      whatsapp_rsvp: {
        enabled: true,
        phone: '5215551234567',
        message: '¡Hola! Confirmo mi asistencia al bautizo de Mateo. ¿Cuántos asistiremos?: ',
        deadline: '1 de mayo de 2025',
        altPhone: '55 5123 4567',
      },
      gallery_basic: { enabled: false },
    },

    calendar: {
      title: 'Bautizo de Mateo',
      details: 'Ceremonia en Parroquia San José a las 12:00 PM, seguida de celebración en Salón Los Arcos a las 2:00 PM. ¡Los esperamos!',
      location: 'Parroquia San José, Guadalajara, Jalisco',
      dates: '20250614T120000/20250614T180000',
    },

    footer: {
      emoji: 'sparkles',
      text: 'Con amor y fe, la familia Mendoza',
    },
  },

  /* ────────── ESENCIAL — XV Años de Valentina ────────── */
  'xv-valentina': {
    id: 'inv-demo-esencial',
    slug: 'xv-valentina',
    plan: 'esencial',
    status: 'active',
    expiresAt: '2026-03-20',

    event: {
      type: 'xv',
      emoji: 'gem',
      labelAbove: 'Mis XV Años',
      name: 'Valentina',
      subtitle: '"Hoy dejo atrás la niñez para comenzar\nun nuevo capítulo de mi vida"',
      parentsLabel: 'Con la bendición de mis padres',
      parents: 'Roberto & María Elena Guzmán',
      date: '2025-09-20T16:00:00',
      dateDisplay: 'Sábado, 20 de Septiembre',
      dateSubline: '2025 · 4:00 PM',
    },

    theme: 'elegant',

    features: {
      countdown: { enabled: true },
      music: {
        enabled: true,
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        autoplay: false,
      },
      message: {
        enabled: true,
        emoji: 'heart',
        title: 'Un Mensaje Especial',
        body: 'Queridos familia y amigos,\n\nHoy es un día muy especial para mí. Después de 15 años rodeada de su amor y cariño, quiero celebrar este momento tan importante con cada uno de ustedes.\nGracias por ser parte de mi vida y por acompañarme en este nuevo capítulo.',
        signature: 'Con todo mi amor, Valentina',
      },
      gallery_extended: {
        enabled: true,
        title: 'Mis Momentos',
        subtitle: 'Una mirada a los momentos más especiales',
        photos: [
          { emoji: 'camera', bg: 'linear-gradient(135deg, #FDF5F8, #F8E8EF)' },
          { emoji: 'gem', bg: 'linear-gradient(135deg, #FBF5E8, #F5EDDA)' },
          { emoji: 'sparkles', bg: 'linear-gradient(135deg, #FCF0F4, #F5E0EA)' },
          { emoji: 'sparkles', bg: 'linear-gradient(135deg, #F8F0FF, #F0E5FA)' },
          { emoji: 'music', bg: 'linear-gradient(135deg, #FFF5F6, #FCEAED)' },
          { emoji: 'gift', bg: 'linear-gradient(135deg, #FDF5F8, #F8E8EF)' },
        ],
      },
      location: {
        enabled: true,
        venues: [
          { emoji: 'landmark', name: 'Misa de Acción de Gracias', place: 'Parroquia de Guadalupe', time: '4:00 PM', city: 'Zapopan, Jalisco' },
          { emoji: 'music', name: 'Fiesta', place: 'Salón Rosa de Cristal', time: '7:00 PM', city: 'Zapopan, Jalisco' },
        ],
        mapsEmbed: 'https://maps.google.com/maps?q=Salon+de+eventos+Zapopan+Jalisco&t=&z=14&ie=UTF8&iwloc=&output=embed',
        mapsLink: 'https://maps.google.com/?q=Salon+Rosa+de+Cristal+Zapopan+Jalisco',
      },
      dresscode: {
        enabled: true,
        emoji: 'shirt',
        title: 'Código de Vestimenta',
        description: 'Formal / Elegante · Colores: Rosa, dorado, vino',
      },
      form_rsvp: {
        enabled: true,
        title: 'Confirma tu Asistencia',
        subtitle: 'Por favor confirma antes del',
        deadline: '1 de agosto de 2025',
        messagePlaceholder: 'Mensaje para Valentina (opcional)',
        fields: ['name', 'attending', 'guests', 'message'],
      },
      whatsapp_rsvp: {
        enabled: true,
        phone: '5215551234567',
        message: '¡Hola! Confirmo mi asistencia a los XV de Valentina',
        label: '¿Prefieres confirmar por WhatsApp?',
      },
    },

    calendar: {
      title: 'XV Años de Valentina',
      details: 'Misa de Acción de Gracias a las 4:00 PM en Parroquia de Guadalupe. Fiesta a las 7:00 PM en Salón Rosa de Cristal, Zapopan.',
      location: 'Salón Rosa de Cristal, Zapopan, Jalisco',
      dates: '20250920T160000/20250920T235900',
    },

    footer: {
      emoji: 'gem',
      text: 'Con amor, Valentina',
      useAccentFont: true,
    },
  },

  /* ────────── PRO — Boda Sofía & Daniel ────────── */
  'boda-sofia-daniel': {
    id: 'inv-demo-pro',
    slug: 'boda-sofia-daniel',
    plan: 'pro',
    status: 'active',
    expiresAt: null,

    event: {
      type: 'boda',
      emoji: '',
      labelAbove: 'Nuestra boda',
      name: 'Sofía & Daniel',
      subtitle: '"En cada paso del camino, siempre fuiste tú"',
      parentsLabel: '',
      parents: '',
      date: '2025-11-15T17:00:00',
      dateDisplay: 'Noviembre 15, 2025',
      dateSubline: 'San Miguel de Allende, Guanajuato',
    },

    theme: 'premium',

    features: {
      countdown: { enabled: true },
      music: {
        enabled: true,
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        autoplay: false,
      },
      video: {
        enabled: true,
        url: '',
        poster: '',
      },
      interactive_timeline: {
        enabled: true,
        title: 'Nuestra Historia',
        subtitle: 'Los momentos que nos trajeron hasta aquí',
        items: [
          { year: '2018', title: 'Primer Encuentro', desc: 'Nos conocimos en una cafetería del centro. Un café se convirtió en horas de conversación.', emoji: 'message-circle' },
          { year: '2019', title: 'Primera Cita Oficial', desc: 'Una cena bajo las estrellas que cambió todo. Supimos que esto era especial.', emoji: 'sparkles' },
          { year: '2021', title: 'Nuestro Primer Viaje', desc: 'Oaxaca fue testigo de nuestro amor. Cada lugar nuevo nos unió más.', emoji: 'rocket' },
          { year: '2023', title: 'Mudamos Juntos', desc: 'Construir un hogar juntos fue la mejor decisión. Cada día es una aventura.', emoji: 'building-2' },
          { year: '2024', title: 'La Propuesta', desc: 'En el mismo café donde todo comenzó, con un anillo y un "¿para siempre?"', emoji: 'gem' },
        ],
      },
      gallery_extended: {
        enabled: true,
        title: 'Nuestra Galería',
        subtitle: 'Momentos que atesoramos',
        photos: [
          { emoji: 'users', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
          { emoji: 'sparkles', bg: 'linear-gradient(135deg, #0f0f1a, #1a1a2e)' },
          { emoji: 'gem', bg: 'linear-gradient(135deg, #1a1a2e, #0f0f1a)' },
          { emoji: 'sparkles', bg: 'linear-gradient(135deg, #16213e, #1a1a2e)' },
          { emoji: 'sparkles', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
          { emoji: 'sparkles', bg: 'linear-gradient(135deg, #0f0f1a, #1a1a2e)' },
        ],
      },
      location: {
        enabled: true,
        venues: [
          { emoji: 'landmark', name: 'Ceremonia', place: 'Parroquia de San Miguel Arcángel', time: '5:00 PM', city: 'San Miguel de Allende' },
          { emoji: 'sparkles', name: 'Recepción', place: 'Hacienda Los Laureles', time: '7:30 PM', city: 'San Miguel de Allende' },
        ],
        mapsEmbed: 'https://maps.google.com/maps?q=San+Miguel+de+Allende+Guanajuato&t=&z=14&ie=UTF8&iwloc=&output=embed',
        mapsLink: 'https://maps.google.com/?q=Hacienda+Los+Laureles+San+Miguel+de+Allende',
      },
      dresscode: {
        enabled: true,
        emoji: 'shirt',
        title: 'Código de Vestimenta',
        description: 'Black Tie · Caballeros: Traje oscuro · Damas: Vestido largo',
      },
      gift_table: {
        enabled: true,
        title: 'Mesa de Regalos',
        subtitle: 'Su presencia es nuestro mejor regalo, pero si desean tener un detalle...',
        items: [
          { emoji: 'shopping-bag', name: 'Amazon', description: 'Lista de deseos curada', link: 'https://amazon.com.mx', color: '#FF9900' },
          { emoji: 'store', name: 'Liverpool', description: 'Mesa de regalos #12345', link: 'https://liverpool.com.mx', color: '#E91E8C' },
          { emoji: 'credit-card', name: 'Transferencia', description: 'CLABE: 0123 4567 8901 2345\nBanco: BBVA', link: '', color: '#004481' },
          { emoji: 'wallet', name: 'Sobre', description: 'Con cariño el día del evento', link: '', color: '#2E7D32' },
        ],
      },
      lodging: {
        enabled: true,
        title: 'Hospedaje',
        subtitle: 'Hoteles recomendados con tarifas especiales',
        hotels: [
          { name: 'Hotel Rosewood', stars: 5, price: 'Desde $4,500/noche', link: 'https://rosewood.com', note: 'Código: BODA-SD25' },
          { name: 'Hotel Casa de Sierra Nevada', stars: 4, price: 'Desde $2,800/noche', link: '#', note: 'Código: BODA-SD25' },
        ],
      },
      smart_rsvp: {
        enabled: true,
        title: 'Confirma tu Asistencia',
        subtitle: 'Queremos preparar todo perfecto para ti',
        fields: ['name', 'attending', 'guests', 'dietary', 'message'],
        dietaryOptions: ['Sin restricciones', 'Vegetariano', 'Vegano', 'Sin gluten', 'Kosher', 'Otro'],
      },
      whatsapp_rsvp: {
        enabled: true,
        phone: '5215559876543',
        message: '¡Hola! Confirmo mi asistencia a la boda de Sofía & Daniel',
      },
    },

    calendar: {
      title: 'Boda Sofía & Daniel',
      details: 'Ceremonia a las 5:00 PM en Parroquia de San Miguel Arcángel. Recepción a las 7:30 PM en Hacienda Los Laureles.',
      location: 'San Miguel de Allende, Guanajuato',
      dates: '20251115T170000/20251116T020000',
    },

    footer: {
      emoji: '',
      text: 'Sofía & Daniel',
      subtext: '15 · 11 · 2025',
      useAccentFont: true,
    },

    // Pro: Guest list (demo data)
    guests: [
      { id: 'g1', name: 'Juan Pérez', type: 'general', companions: 1, token: 'abc123', status: 'pending' },
      { id: 'g2', name: 'María García', type: 'vip', companions: 2, token: 'def456', status: 'confirmed' },
      { id: 'g3', name: 'Carlos López', type: 'general', companions: 0, token: 'ghi789', status: 'pending' },
    ],
  },
}

/**
 * Route slug to invitation slug mapping for demo routes.
 */
export const DEMO_ROUTE_MAP = {
  esencial: 'bautizo-mateo',
  basica: 'xv-valentina',
  pro: 'boda-sofia-daniel',
}

/**
 * Look up an invitation by slug.
 */
export function getInvitation(slug) {
  return invitations[slug] || null
}

/**
 * Look up a demo invitation by route name (esencial | basica | pro).
 */
export function getDemoInvitation(routeName) {
  const slug = DEMO_ROUTE_MAP[routeName]
  return slug ? invitations[slug] : null
}
