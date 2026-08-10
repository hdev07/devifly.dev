import phone1 from '../../assets/img/cases/timbra/phone-1.png'
import phone2 from '../../assets/img/cases/timbra/phone-2.png'
import phone3 from '../../assets/img/cases/timbra/phone-3.png'
import landingHero from '../../assets/img/cases/timbra/landing-hero.png'
import ogImage from '../../assets/img/cases/timbra/og-image.png'
import featureDownload from '../../assets/img/cases/timbra/feature-download.svg'
import featureEfirma from '../../assets/img/cases/timbra/feature-efirma.svg'
import featurePortal from '../../assets/img/cases/timbra/feature-portal.svg'
import featureReports from '../../assets/img/cases/timbra/feature-reports.svg'
import logo from '../../assets/img/cases/timbra/logo-horizontal.svg'
import icon from '../../assets/img/cases/timbra/icon.svg'

/**
 * Full case study for Timbra — cloud fiscal ops panel for Mexican accounting firms.
 * Product truth from timbra.one positioning (multi-RFC, SAT download, EFOS, month-end).
 */
export const timbraCase = {
  key: 'timbra',
  slug: 'timbra',
  path: '/casos/timbra',
  liveUrl: 'https://timbra.one/',
  appUrl: 'https://app.timbra.one/',
  brand: {
    name: 'timbra.one',
    color: '#2563EB',
    logo,
    icon,
  },
  cover: phone1,
  tag: { es: 'Fintech · Fiscal', en: 'Fintech · Tax ops' },
  title: { es: 'Timbra', en: 'Timbra' },
  headline: {
    es: 'De descargadores locales y Excel a un panel fiscal multi-RFC en la nube.',
    en: 'From local downloaders and Excel to a multi-RFC cloud fiscal panel.',
  },
  hook: {
    es: 'Panel fiscal en la nube para despachos: descarga masiva SAT, EFOS/EDOS, DIOT y cierre mensual multi-RFC.',
    en: 'Cloud fiscal ops for accounting firms: SAT bulk CFDI download, EFOS/EDOS checks, DIOT, and multi-RFC month-end close.',
  },
  problem: {
    es: 'Los despachos mezclan descargadores locales, Excel manual y revisiones a ojo: horas perdidas, errores y cero visibilidad del titular.',
    en: 'Firms juggle local downloaders, manual Excel, and eyeball reviews—wasted hours, errors, and no owner-level visibility.',
  },
  solution: {
    es: 'Un solo panel multi-cliente: e.firma cifrada con KMS, descarga programada, validación 69-B, obligaciones automáticas y portal del cliente.',
    en: 'One multi-client panel: KMS-encrypted e.firma, scheduled downloads, 69-B validation, automated filings, and a client portal.',
  },
  result: {
    es: 'Operación fiscal centralizada: XML resguardados, alertas de cancelaciones/EFOS y cierres con roles, auditoría y evidencia.',
    en: 'Centralized tax ops: archived XML, cancellation/EFOS alerts, and closes with roles, audit trail, and evidence.',
  },
  highlight: {
    value: '5 años',
    label: { es: 'conservación fiscal', en: 'fiscal retention' },
  },
  metrics: [
    {
      value: '5 años',
      label: { es: 'Conservación de XML', en: 'XML retention' },
      note: { es: 'Originales fiscales en la nube', en: 'Fiscal originals in the cloud' },
    },
    {
      value: '52',
      label: { es: 'Sync EFOS al año', en: 'EFOS syncs / year' },
      note: { es: 'Listas SAT automáticas', en: 'Automatic SAT lists' },
    },
    {
      value: '30',
      label: { es: 'Días de prueba', en: 'Trial days' },
      note: { es: 'Sin tarjeta de crédito', en: 'No credit card' },
    },
    {
      value: '100%',
      label: { es: 'Nube', en: 'Cloud' },
      note: { es: 'Sin instalar software', en: 'No software install' },
    },
  ],
  stack: ['Vue 3', 'Node.js', 'KMS', 'SAT', 'Multi-RFC'],
  process: [
    {
      step: '01',
      title: { es: 'Dolor del despacho', en: 'Firm pain' },
      body: {
        es: 'La fricción no era “tener facturas”: era operar muchos RFC sin un panel, con e.firmas sueltas y cierres armados a mano.',
        en: 'The friction wasn’t “having invoices”—it was running many RFCs without a panel, loose e.firmas, and month-ends built by hand.',
      },
    },
    {
      step: '02',
      title: { es: 'Nube + seguridad', en: 'Cloud + security' },
      body: {
        es: 'e.firma cifrada con KMS, roles por equipo y auditoría de acciones. El despacho deja de depender de una PC con Windows.',
        en: 'KMS-encrypted e.firma, team roles, and action audit trails. The firm no longer depends on one Windows PC.',
      },
    },
    {
      step: '03',
      title: { es: 'Automatizar el ciclo', en: 'Automate the cycle' },
      body: {
        es: 'Descarga masiva programada, detección de cancelaciones, cruce EFOS/EDOS y generación de DIOT / papeles de trabajo desde los XML.',
        en: 'Scheduled bulk download, cancellation detection, EFOS/EDOS matching, and DIOT / workpapers generated from the XML.',
      },
    },
    {
      step: '04',
      title: { es: 'Cierre con evidencia', en: 'Close with evidence' },
      body: {
        es: 'Expediente por periodo, portal del cliente con aprobaciones (fecha, IP, hash) y reaperturas auditadas. Operación visible para el titular.',
        en: 'Per-period file, client portal with approvals (date, IP, hash), and audited reopenings. Visible ops for the firm owner.',
      },
    },
  ],
  gallery: [
    {
      src: phone1,
      alt: { es: 'Landing móvil de timbra.one', en: 'timbra.one mobile landing' },
      caption: { es: 'Hero móvil', en: 'Mobile hero' },
    },
    {
      src: phone2,
      alt: { es: 'Sección problema en móvil', en: 'Problem section on mobile' },
      caption: { es: 'El problema', en: 'The problem' },
    },
    {
      src: phone3,
      alt: { es: 'Landing móvil — funcionalidades', en: 'Mobile landing — features' },
      caption: { es: 'Funcionalidades', en: 'Features' },
    },
  ],
  visuals: [
    {
      src: featureDownload,
      alt: { es: 'Descarga masiva SAT', en: 'SAT bulk download' },
      caption: { es: 'Descarga SAT', en: 'SAT download' },
    },
    {
      src: featureEfirma,
      alt: { es: 'e.firma cifrada', en: 'Encrypted e.firma' },
      caption: { es: 'e.firma + KMS', en: 'e.firma + KMS' },
    },
    {
      src: featureReports,
      alt: { es: 'Reportes fiscales', en: 'Tax reports' },
      caption: { es: 'DIOT y reportes', en: 'DIOT & reports' },
    },
    {
      src: featurePortal,
      alt: { es: 'Portal del cliente', en: 'Client portal' },
      caption: { es: 'Portal cliente', en: 'Client portal' },
    },
  ],
  demo: {
    thumb: ogImage,
    preview: landingHero,
    href: '/casos/timbra',
    external: 'https://app.timbra.one/',
    title: { es: 'Timbra', en: 'Timbra' },
    subtitle: {
      es: 'Panel fiscal · Multi-RFC',
      en: 'Fiscal panel · Multi-RFC',
    },
  },
}
