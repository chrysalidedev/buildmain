export type ServiceType =
  | 'logiciel'
  | 'saas'
  | 'agent-ia'
  | 'automatisation'
  | 'integration-ia'
  | 'autre';

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  iconName: string;
  problem: string;
  solution: string;
  benefits: string[];
  practicalExample: {
    context: string;
    action: string;
    impact: string;
  };
  suitableFor: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  status: 'disponible' | 'en_preparation' | 'recherche';
  badgeLabel: string;
  isFlagship?: boolean;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  targetAudience: string[];
  externalUrl?: string;
  ctaText?: string;
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Comprendre la Tech' | 'Intelligence Artificielle' | 'Automatisation' | 'Conseils PME';
  readingTime: string;
  publishDate: string;
  summary: string;
  targetAudience: string;
  isDemoNotice?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
    }[];
    conclusion: string;
  };
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface VisionStage {
  step: string;
  title: string;
  description: string;
  statusLabel: string;
  isLongTerm?: boolean;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  slogan: string;
  mission: string;
  vision: string;
  establishedIn: string;
  location: {
    city: string;
    country: string;
    region: string;
    addressPlaceholder: string;
  };
  contact: {
    emailPlaceholder: string;
    phonePlaceholder: string;
    whatsappNumber: string | null; // Ex "+2250700000000" or null if not yet defined
    officeHours: string;
  };
  socials: {
    linkedin: string | null;
    twitter: string | null;
    github: string | null;
    facebook: string | null;
  };
  siteUrl: string;
  logo: {
    customImageSrc: string | null; // slot to put an uploaded PNG/SVG if available
    alt: string;
  };
  bannerImageSrc?: string | null;
}
