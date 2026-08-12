/**
 * Resolve demo plan from URL path (/producto/pro) or legacy ?plan= query.
 */
export function useDemoPlan(route, { valid = ['esencial', 'pro', 'premium'], fallback = 'premium' } = {}) {
  const raw = route.params.plan || route.query.plan
  return valid.includes(raw) ? raw : fallback
}
