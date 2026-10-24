import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Build-Main',
  legalName: 'Build-Main Technologies',
  slogan: 'Rendre la technologie accessible à tous',
  mission: 'Rendre la technologie accessible à tous à travers des solutions innovantes et adaptées aux réalités locales.',
  vision: 'Contribuer à l\'émergence d\'un écosystème technologique africain autonome et créateur de solutions à fort impact.',
  establishedIn: 'Côte d\'Ivoire',
  location: {
    city: 'Abidjan',
    country: 'Côte d\'Ivoire',
    region: 'Afrique de l\'Ouest',
    addressPlaceholder: 'Abidjan, Côte d\'Ivoire (Coordonnées exactes à renseigner)',
  },
  contact: {
    // Renseignez votre adresse e-mail officielle ci-dessous
    emailPlaceholder: 'contact@buildmain.tech',
    // Renseignez votre numéro de téléphone officiel ci-dessous
    phonePlaceholder: '+225 (Numéro à renseigner)',
    // Numéro WhatsApp au format international sans espace ni '+' (ex: "2250700000000") ou null
    whatsappNumber: null,
    officeHours: 'Lun - Ven : 08h30 - 18h00 (GMT)',
  },
  socials: {
    // Renseignez vos liens officiels dès qu'ils sont créés
    linkedin: null,
    twitter: null,
    github: null,
    facebook: null,
  },
  siteUrl: 'https://buildmain.tech',
  logo: {
    // Si vous disposez du fichier logo PNG/SVG haute définition, placez-le dans /public/images/logo.png
    // et renseignez son chemin ici : '/images/logo.png'. Laissez null pour utiliser l'emblème SVG officiel intégré.
    customImageSrc: null,
    alt: 'Logo officiel Build-Main - Rendre la technologie accessible à tous',
  },
};

export const navigationLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Produits', href: '/produits' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Ressources', href: '/ressources' },
  { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks = [
  { label: 'Nos solutions', href: '/solutions' },
  { label: 'Build-Membres (Produit phare)', href: '/produits#build-membres' },
  { label: 'L\'écosystème Build-Main', href: '/produits' },
  { label: 'Notre vision & mission', href: '/a-propos' },
  { label: 'Guide & vulgarisation tech', href: '/ressources' },
  { label: 'Demander un devis / échange', href: '/contact' },
];
