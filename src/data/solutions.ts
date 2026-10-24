import type { SolutionItem } from '../types';

export const solutionsData: SolutionItem[] = [
  {
    id: 'logiciel',
    slug: 'developpement-logiciel',
    title: 'Développement Logiciel & Web',
    subtitle: 'Des outils sur mesure conçus pour vos réalités opérationnelles',
    shortDesc: 'Applications web, outils métiers et plateformes numériques conçus autour des besoins réels de vos utilisateurs.',
    iconName: 'Code',
    problem: 'De nombreuses organisations utilisent des outils génériques inadaptés ou perdent un temps précieux sur des fichiers Excel dispersés, provoquant erreurs de saisie et lenteurs.',
    solution: 'Build-Main conçoit et développe des applications web et logiciels métiers sur mesure. Chaque fonctionnalité répond à une exigence précise de vos opérations quotidiennes.',
    benefits: [
      'Interface intuitive, utilisable sans formation technique complexe',
      'Fonctionnement optimisé même avec des connexions internet à débit variable',
      'Données sécurisées, centralisées et accessibles selon des rôles définis',
      'Code propre, évolutif et prêt à grandir avec votre organisation'
    ],
    practicalExample: {
      context: 'Une PME commerciale gérant ses stocks et ses bons de commande sur de multiples feuilles de calcul non synchronisées.',
      action: 'Mise en place d\'une application web sécurisée regroupant gestion des stocks, alertes de réapprovisionnement et validation des commandes.',
      impact: 'Suppression des doublons, visibilité en temps réel sur les stocks et gain de plusieurs heures de travail par semaine pour l\'équipe.'
    },
    suitableFor: ['PME & Entreprises de services', 'Associations & ONG', 'Commerces & Distributeurs', 'Institutions régionales']
  },
  {
    id: 'saas',
    slug: 'solutions-saas',
    title: 'Conception de Plateformes SaaS',
    subtitle: 'Des logiciels accessibles en ligne, prêts à l\'emploi pour votre secteur',
    shortDesc: 'Des logiciels disponibles via un simple navigateur pour aider les organisations à piloter leurs activités en continu.',
    iconName: 'Layers',
    problem: 'Développer un logiciel de zéro coûte parfois trop cher pour une petite organisation qui a pourtant besoin d\'un outil professionnel immédiatement.',
    solution: 'Nous concevons des produits SaaS (Software as a Service) mutualisés et verticaux, répondant aux défis communs d\'un secteur (gestion de membres, coopératives, associations).',
    benefits: [
      'Accessible instantanément depuis un téléphone, une tablette ou un ordinateur',
      'Aucune installation locale complexe ni maintenance serveur à votre charge',
      'Mises à jour automatiques et sauvegarde continue de vos données',
      'Modèle économique transparent et accessible par abonnement adapté'
    ],
    practicalExample: {
      context: 'Une fédération d\'associations cherchant à uniformiser le suivi de ses 5 000 adhérents répartis dans plusieurs villes.',
      action: 'Adoption de notre solution Build-Membres pour centraliser les inscriptions, générer les fiches et suivre les cotisations en temps réel.',
      impact: 'Traçabilité financière transparente et communication directe avec chaque membre.'
    },
    suitableFor: ['Fédérations & Réseaux', 'Associations professionnelles', 'Coopératives agricoles', 'Collectifs et communautés']
  },
  {
    id: 'agents-ia',
    slug: 'agents-ia',
    title: 'Agents d\'Intelligence Artificielle',
    subtitle: 'Des assistants autonomes sous contrôle strict pour épauler vos collaborateurs',
    shortDesc: 'Des agents capables d\'assister les équipes, de traiter des tâches définies et de participer à vos processus métiers avec des règles de contrôle rigoureuses.',
    iconName: 'Bot',
    problem: 'Vos équipes sont submergées par le traitement répétitif de messages, le tri de pièces jointes ou la recherche d\'informations dans des classeurs denses.',
    solution: 'Build-Main programme des agents IA spécialisés. Contrairement à un simple chatbot conversationnel, un agent intelligent sait analyser une demande, consulter une base de connaissances autorisée et préparer ou exécuter une action précise selon des garde-fous stricts.',
    benefits: [
      'Gains de productivité substantiels sur les tâches fastidieuses',
      'Disponibilité 24h/24 pour assister clients et équipes',
      'Contrôle humain permanent : l\'agent propose ou exécute uniquement ce qui est autorisé',
      'Respect scrupuleux de la confidentialité de vos données internes'
    ],
    practicalExample: {
      context: 'Un service d\'assistance client recevant chaque jour des centaines de demandes répétitives concernant les statuts de dossier et les démarches.',
      action: 'Déploiement d\'un agent IA capable de vérifier l\'état d\'un dossier dans la base sécurisée et de rédiger une réponse contextualisée prête à validation.',
      impact: 'Temps de réponse divisé par trois et recentrage des agents humains sur les dossiers complexes.'
    },
    suitableFor: ['Services clients & support', 'Équipes administratives & RH', 'Cabinets de conseil', 'Organisations gérant du volume']
  },
  {
    id: 'automatisation',
    slug: 'automatisation-processus',
    title: 'Automatisation des Processus Métiers',
    subtitle: 'Reliez vos outils et éliminez les saisies manuelles chronophages',
    shortDesc: 'Connexion de vos outils, automatisation des transferts de données et amélioration continue de vos flux de travail.',
    iconName: 'Zap',
    problem: 'Vos collaborateurs passent des heures à recopier les mêmes informations d\'un e-mail vers un tableur, puis vers un logiciel de facturation.',
    solution: 'Nous créons des ponts et des flux automatisés fiables entre vos différents canaux (formulaires, e-mails, SMS, tableurs, ERP, CRM).',
    benefits: [
      'Suppression quasi-totale des fautes de frappe et des oublis humains',
      'Circulation instantanée de l\'information entre services',
      'Gain de temps immédiat réinvesti dans l\'accompagnement de vos clients',
      'Alertes proactives en cas d\'anomalie ou d\'échéance critique'
    ],
    practicalExample: {
      context: 'Un organisme de formation recevant des inscriptions par formulaire web, devant envoyer manuellement une convention et notifier le trésorier.',
      action: 'Création d\'un flux automatisé déclenchant la génération du document PDF, l\'envoi au candidat et la création de la ligne de suivi comptable.',
      impact: 'Délai d\'inscription réduit de 48 heures à 30 secondes, sans intervention manuelle.'
    },
    suitableFor: ['Centres de formation', 'PME en croissance', 'Cabinets comptables', 'Organismes de logistique']
  },
  {
    id: 'integration-ia',
    slug: 'integration-ia',
    title: 'Intégration Pragmatique de l\'IA',
    subtitle: 'Exploiter l\'intelligence artificielle pour un retour sur investissement tangible',
    shortDesc: 'Utilisation pragmatique et réfléchie de l\'IA pour améliorer vos produits, vos services et votre productivité sans gadgets superflus.',
    iconName: 'Sparkles',
    problem: 'L\'engouement autour de l\'IA pousse de nombreuses structures à dépenser dans des solutions coûteuses, déconnectées de leurs priorités réelles.',
    solution: 'Build-Main vous aide à identifier les cas d\'usage pertinents (analyse documentaire, extraction automatique de texte, classification, aide à la décision) et intègre l\'IA dans vos logiciels existants.',
    benefits: [
      'Approche axée sur le retour sur investissement (ROI) mesurable',
      'Intégration transparente dans les logiciels déjà utilisés par vos équipes',
      'Modèles légers et sobres en consommation énergétique et financière',
      'Formation claire de vos équipes pour une adoption en confiance'
    ],
    practicalExample: {
      context: 'Une structure recevant des bordereaux et reçus physiques scannés devant être catalogués manuellement.',
      action: 'Intégration d\'un module de reconnaissance optique et d\'analyse sémantique extrayant les montants, dates et expéditeurs directement.',
      impact: 'Traitement accéléré de 80% des documents sans ressaisie manuelle.'
    },
    suitableFor: ['Direction générale', 'Directions financières', 'Gestionnaires documentaires', 'Organisations innovantes']
  }
];
