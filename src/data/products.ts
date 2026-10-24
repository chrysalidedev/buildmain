import type { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    id: 'build-membres',
    name: 'Build-Membres',
    tagline: 'La solution moderne de gestion des membres pour associations, ONG et coopératives',
    status: 'disponible',
    badgeLabel: 'Produit phare disponible',
    isFlagship: true,
    shortDesc: 'Une plateforme intuitive pour centraliser vos adhérents, personnaliser leurs fiches, suivre les cotisations avec rigueur et coordonner vos activités communautaires.',
    fullDesc: 'Build-Membres a été spécialement conçue pour répondre aux difficultés concrètes rencontrées par les responsables d\'associations, d\'ONG, de coopératives et de groupements : pertes de listes d\'adhérents, retards dans le recouvrement des cotisations et manque de visibilité sur les participations aux événements.',
    features: [
      'Gestion centralisée des membres : répertoire sécurisé, fiches détaillées et recherche rapide',
      'Personnalisation des fiches membres selon les spécificités de votre structure (champs sur mesure, statuts)',
      'Suivi rigoureux des cotisations : historique des versements, états de solde et relances facilitées',
      'Organisation et suivi des activités : planification des réunions, assemblées et suivi de présence'
    ],
    targetAudience: [
      'Associations caritatives, culturelles et sportives',
      'Organisations non gouvernementales (ONG)',
      'Coopératives et groupements d\'intérêt économique',
      'Communautés professionnelles et religieuses'
    ],
    externalUrl: 'https://build-membres.netlify.app/',
    ctaText: 'Découvrir Build-Membres'
  },
  {
    id: 'build-coop',
    name: 'Build-Coop',
    tagline: 'Plateforme de gestion opérationnelle pour coopératives agricoles et artisanales',
    status: 'en_preparation',
    badgeLabel: 'En préparation',
    isFlagship: false,
    shortDesc: 'Outil dédié à la traçabilité des collectes, à la gestion des intrants et au suivi des paiements des producteurs affiliés.',
    fullDesc: 'Build-Coop vise à simplifier la gouvernance des coopératives agricoles et des filières locales en offrant un suivi transparent des apports, des pesées et de la rémunération équitable des sociétaires.',
    features: [
      'Enregistrement simplifié des sociétaires et de leurs parcelles',
      'Suivi des livraisons de récoltes et des bons de pesée',
      'Gestion des avances et règlements transparents',
      'Rapports d\'activité conformes aux normes professionnelles'
    ],
    targetAudience: [
      'Coopératives agricoles de cacao, café, anacarde, maraîchage',
      'Groupements d\'artisans et collectifs de producteurs locaux'
    ],
    ctaText: 'Être notifié du lancement'
  },
  {
    id: 'build-foundation',
    name: 'Build-Foundation',
    tagline: 'Pilotage d\'impact et suivi des projets pour fondations et donateurs',
    status: 'en_preparation',
    badgeLabel: 'En préparation',
    isFlagship: false,
    shortDesc: 'Solution de reporting, de suivi des bénéficiaires et de gouvernance des fonds pour les organisations philanthropiques.',
    fullDesc: 'Conçu pour renforcer la transparence et la crédibilité des fondations d\'entreprise et des bailleurs régionaux, Build-Foundation centralise les indicateurs d\'impact sur le terrain.',
    features: [
      'Cartographie et recensement des bénéficiaires directs',
      'Suivi budgétaire des programmes d\'aide et des subventions',
      'Génération de rapports d\'impact illustrés pour les donateurs',
      'Tableaux de bord d\'indicateurs clés de performance (KPI)'
    ],
    targetAudience: [
      'Fondations d\'entreprises et mécènes',
      'Organismes de développement et bailleurs de fonds régionaux'
    ],
    ctaText: 'Manifester un intérêt'
  },
  {
    id: 'build-store',
    name: 'Build-Store',
    tagline: 'Commerce de proximité et point de vente allégé pour PME locales',
    status: 'en_preparation',
    badgeLabel: 'En préparation',
    isFlagship: false,
    shortDesc: 'Système de caisse et de gestion d\'inventaire ultra-léger pensé pour tourner sur smartphones même avec connectivité intermittente.',
    fullDesc: 'Build-Store apportera aux commerçants et distributeurs un outil de gestion des ventes quotidien sans le coût ni la lourdeur des logiciels de caisse occidentaux inadaptés.',
    features: [
      'Encaissement rapide adapté aux paiements locaux (Mobile Money, espèces)',
      'Tenue d\'inventaire en temps réel et alertes de rupture de stock',
      'Fonctionnement résilient en mode hors-ligne avec synchronisation ultérieure',
      'Reçus électroniques par SMS ou messagerie instantanée'
    ],
    targetAudience: [
      'Boutiques, quincailleries, grossistes et distributeurs de proximité',
      'Entrepreneurs indépendants et commerces de détail'
    ],
    ctaText: 'En savoir plus'
  }
];
