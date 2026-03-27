// ─── Plan Definitions & Feature Flags ───
// Sistema modular de invitaciones digitales — Devifly

export const PLANS = {
  esencial: {
    key: 'esencial',
    label: 'Esencial',
    expiresMonths: 3,
    maxGuests: null,
    maxPhotos: 5,
    maxInvitations: 1, // 1 link compartible
    customDomain: false,
    price: 499,
    currency: 'MXN',
  },
  premium: {
    key: 'premium',
    label: 'Premium',
    expiresMonths: 6,
    maxGuests: null,
    maxPhotos: 20,
    maxInvitations: 10, // 10 invitaciones con pase único
    customDomain: false,
    price: 1499,
    currency: 'MXN',
  },
  platinum: {
    key: 'platinum',
    label: 'Platinum QR',
    expiresMonths: null, // ilimitada
    maxGuests: null,
    maxPhotos: null,
    maxInvitations: null, // ilimitadas personalizadas
    customDomain: true,
    price: 2999,
    currency: 'MXN',
  },
}

export const FEATURES = {
  // ─── Incluidos en TODOS los planes ───
  countdown: { key: 'countdown', label: 'Cuenta regresiva', plans: ['esencial', 'premium', 'platinum'] },
  location: { key: 'location', label: 'Ubicación GPS + Maps', plans: ['esencial', 'premium', 'platinum'] },
  whatsapp_rsvp: { key: 'whatsapp_rsvp', label: 'Confirmación WhatsApp', plans: ['esencial', 'premium', 'platinum'] },
  music: { key: 'music', label: 'Música de fondo', plans: ['esencial', 'premium', 'platinum'] },
  gallery_basic: { key: 'gallery_basic', label: 'Galería de fotos', plans: ['esencial', 'premium', 'platinum'] },
  dresscode: { key: 'dresscode', label: 'Código de vestimenta', plans: ['esencial', 'premium', 'platinum'] },
  hashtag: { key: 'hashtag', label: 'Hashtag del evento', plans: ['esencial', 'premium', 'platinum'] },
  gift_table: { key: 'gift_table', label: 'Mesa de regalos', plans: ['esencial', 'premium', 'platinum'] },
  parents_mention: { key: 'parents_mention', label: 'Mención padres/padrinos', plans: ['esencial', 'premium', 'platinum'] },
  lodging: { key: 'lodging', label: 'Sugerencia de hospedaje', plans: ['esencial', 'premium', 'platinum'] },
  itinerary: { key: 'itinerary', label: 'Itinerario del evento', plans: ['esencial', 'premium', 'platinum'] },
  calendar_button: { key: 'calendar_button', label: 'Agregar al calendario', plans: ['esencial', 'premium', 'platinum'] },
  unlimited_sends: { key: 'unlimited_sends', label: 'Envíos ilimitados', plans: ['esencial', 'premium', 'platinum'] },

  // ─── Premium + Platinum ───
  gallery_extended: { key: 'gallery_extended', label: 'Galería extendida + video', plans: ['premium', 'platinum'] },
  form_rsvp: { key: 'form_rsvp', label: 'RSVP Formulario completo', plans: ['premium', 'platinum'] },
  custom_passes: { key: 'custom_passes', label: 'Pases personalizados', plans: ['premium', 'platinum'] },
  guest_list: { key: 'guest_list', label: 'Listado de asistencia', plans: ['premium', 'platinum'] },
  message: { key: 'message', label: 'Mensaje / Votos de los novios', plans: ['premium', 'platinum'] },
  nominations: { key: 'nominations', label: 'Nombramientos (padrinos, testigos, familia)', plans: ['premium', 'platinum'] },
  collaborative_playlist: { key: 'collaborative_playlist', label: 'Playlist colaborativa', plans: ['premium', 'platinum'] },
  cinematic_animations: { key: 'cinematic_animations', label: 'Animaciones cinematográficas', plans: ['premium', 'platinum'] },

  // ─── Solo Platinum QR ───
  qr_access: { key: 'qr_access', label: 'Control de acceso QR', plans: ['platinum'] },
  dashboard: { key: 'dashboard', label: 'Dashboard organizador CRM', plans: ['platinum'] },
  smart_rsvp: { key: 'smart_rsvp', label: 'RSVP inteligente (+acompañantes, restricciones)', plans: ['platinum'] },
  personalized_invites: { key: 'personalized_invites', label: 'Invitaciones personalizadas (nombre/familia)', plans: ['platinum'] },
  video: { key: 'video', label: 'Video portada', plans: ['platinum'] },
  interactive_timeline: { key: 'interactive_timeline', label: 'Timeline interactivo', plans: ['platinum'] },
  trivia: { key: 'trivia', label: 'Trivia "Pregúntame"', plans: ['platinum'] },
  custom_design: { key: 'custom_design', label: 'Diseño personalizado temático', plans: ['platinum'] },
  multi_lang: { key: 'multi_lang', label: 'Multi-idioma (ES/EN)', plans: ['platinum'] },
  whatsapp_photos: { key: 'whatsapp_photos', label: 'Grupo WhatsApp para fotos', plans: ['platinum'] },
  menu_dishes: { key: 'menu_dishes', label: 'Platillos y menús', plans: ['platinum'] },
  privacy: { key: 'privacy', label: 'Privacidad / Token', plans: ['platinum'] },
}

/**
 * Returns the list of feature keys available for a given plan.
 */
export function getFeaturesForPlan(plan) {
  return Object.values(FEATURES)
    .filter(f => f.plans.includes(plan))
    .map(f => f.key)
}

/**
 * Checks if a specific feature is enabled for a given plan.
 */
export function isFeatureEnabled(featureKey, plan) {
  const feature = FEATURES[featureKey]
  return feature ? feature.plans.includes(plan) : false
}

/**
 * Validates that an invitation object only uses features allowed by its plan.
 * Returns { valid: boolean, errors: string[] }
 */
export function validateInvitation(invitation) {
  const errors = []
  const plan = invitation.plan
  if (!PLANS[plan]) {
    errors.push(`Plan desconocido: ${plan}`)
    return { valid: false, errors }
  }
  const allowedFeatures = getFeaturesForPlan(plan)
  const enabledFeatures = Object.entries(invitation.features || {})
    .filter(([, cfg]) => cfg?.enabled)
    .map(([key]) => key)

  for (const fk of enabledFeatures) {
    if (!allowedFeatures.includes(fk)) {
      errors.push(`Feature "${fk}" no disponible en plan "${plan}"`)
    }
  }
  return { valid: errors.length === 0, errors }
}

/**
 * Default section render order. Invitations can override via `sectionOrder`.
 */
export const DEFAULT_SECTION_ORDER = [
  'topbar',
  'hero',
  'video',
  'message',
  'nominations',
  'itinerary',
  'interactive_timeline',
  'gallery',
  'location',
  'dresscode',
  'menu_dishes',
  'hashtag',
  'gift_table',
  'lodging',
  'collaborative_playlist',
  'trivia',
  'whatsapp_photos',
  'rsvp',
  'footer',
]
