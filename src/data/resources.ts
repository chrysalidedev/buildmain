import type { ResourceArticle } from '../types';

export const resourcesData: ResourceArticle[] = [
  {
    id: 'comprendre-les-logiciels',
    slug: 'quest-ce-qu-un-logiciel',
    title: 'Qu\'est-ce qu\'un logiciel et pourquoi votre organisation en a-t-elle besoin ?',
    category: 'Comprendre la Tech',
    readingTime: '4 min',
    publishDate: 'Contenu pédagogique indicatif (à valider)',
    isDemoNotice: true,
    summary: 'Démystifier le mot « logiciel » : bien plus qu\'une ligne de code, c\'est un assistant structuré qui supprime les erreurs manuelles et sécurise la mémoire de votre activité.',
    targetAudience: 'Dirigeants de PME, responsables associatifs, personnes non techniques',
    content: {
      intro: 'Dans la vie quotidienne d\'une structure en Côte d\'Ivoire ou en Afrique de l\'Ouest, beaucoup d\'opérations reposent encore sur des carnets physiques, des messages WhatsApp éparpillés ou des fichiers Excel non partagés.',
      sections: [
        {
          heading: 'La définition simple : un ensemble d\'instructions pour exécuter une tâche',
          body: [
            'Un logiciel est simplement un programme conçu pour automatiser des calculs, stocker des renseignements et appliquer des règles précises sans jamais se fatiguer ni oublier.',
            'Quand vous utilisez une application de Mobile Money pour envoyer un transfert, vous utilisez un logiciel qui vérifie votre solde, applique les frais et crédite le destinataire en quelques secondes.'
          ],
          tip: 'Un bon logiciel ne doit jamais vous compliquer la vie : s\'il demande des heures de formation pour une opération simple, il est mal conçu.'
        },
        {
          heading: 'Pourquoi passer du cahier papier ou d\'Excel au logiciel dédié ?',
          body: [
            'La centralisation : vos données ne dépendent plus d\'un seul téléphone portable qui peut être égaré.',
            'La sécurité : vous décidez qui a le droit de voir ou de modifier telle ou telle information (droits d\'accès).',
            'La rapidité : un état financier ou une liste de membres se génère en un clic au lieu de prendre deux journées entières.'
          ]
        }
      ],
      conclusion: 'Investir dans un logiciel adapté à votre taille est le premier pas vers la sérénité opérationnelle et la croissance.'
    }
  },
  {
    id: 'comprendre-le-cloud',
    slug: 'quest-ce-que-le-cloud',
    title: 'Qu\'est-ce que le « Cloud » et est-il adapté à nos réalités locales ?',
    category: 'Comprendre la Tech',
    readingTime: '5 min',
    publishDate: 'Contenu pédagogique indicatif (à valider)',
    isDemoNotice: true,
    summary: 'Comprendre ce qu\'on appelle le « nuage informatique », comment il protège vos données en cas de panne matérielle et comment l\'utiliser avec une connexion variable.',
    targetAudience: 'Gestionnaires de structures, trésoriers, entrepreneurs',
    content: {
      intro: 'On entend partout parler du « Cloud » comme d\'une solution miracle. Mais que signifie concrètement cette notion pour une structure basée à Abidjan, Bouaké ou San-Pédro ?',
      sections: [
        {
          heading: 'Le Cloud : un ordinateur sécurisé accessible par Internet',
          body: [
            'Le Cloud ne flotte pas dans le ciel : ce sont des serveurs informatiques ultra-sécurisés, hébergés dans des centres de données climatisés, surveillés 24h/24 et dotés d\'alimentations électriques de secours.',
            'Lorsque votre logiciel est dans le Cloud, vous n\'avez pas besoin d\'acheter un serveur physique coûteux pour votre bureau. Vous vous connectez simplement depuis votre navigateur ou votre smartphone.'
          ]
        },
        {
          heading: 'Et si la connexion Internet coupe ?',
          body: [
            'C\'est une préoccupation légitime en Afrique. C\'est pourquoi les solutions modernes conçues par Build-Main intègrent des mécanismes de mise en cache locale : vous continuez à consulter vos fiches, et vos actions sont synchronisées dès que le réseau redevient stable.'
          ],
          tip: 'Le Cloud vous protège surtout du pire scénario : le vol ou la panne subite de l\'ordinateur du bureau contenant toute votre comptabilité.'
        }
      ],
      conclusion: 'Le Cloud permet aux petites structures de bénéficier du même niveau de sécurité que les grandes banques, sans investissement lourd.'
    }
  },
  {
    id: 'agents-ia-vs-ia-classique',
    slug: 'difference-ia-classique-et-agent-ia',
    title: 'Quelle différence entre une IA classique et un Agent Intelligent ?',
    category: 'Intelligence Artificielle',
    readingTime: '6 min',
    publishDate: 'Contenu pédagogique indicatif (à valider)',
    isDemoNotice: true,
    summary: 'Comprendre le saut technologique entre poser une question à un robot conversationnel et confier une mission cadrée à un agent autonome.',
    targetAudience: 'Dirigeants, directeurs des opérations, professionnels de l\'innovation',
    content: {
      intro: 'Tout le monde connaît désormais les IA génératives capables de rédiger des textes ou de répondre à des questions. Mais chez Build-Main, nous développons des agents d\'IA : de quoi s\'agit-il exactement ?',
      sections: [
        {
          heading: 'L\'IA classique : elle discute et répond',
          body: [
            'Une IA conversationnelle attend votre question, analyse son savoir et vous propose un texte. Si vous lui demandez « Peux-tu envoyer un e-mail à mon client ? », elle rédigera le texte, mais elle s\'arrêtera là. C\'est à vous de copier, coller et cliquer sur « Envoyer ».'
          ]
        },
        {
          heading: 'L\'Agent d\'IA : il réfléchit, consulte et agit selon des règles',
          body: [
            'Un agent est un programme doté d\'une mission, d\'outils autorisés et de limites strictes.',
            'Face à la même situation, l\'agent intelligent va : vérifier le statut du client dans votre base, rédiger le message avec les montants exacts, préparer l\'envoi et solliciter une validation humaine ou exécuter l\'envoi selon le protocole convenu.'
          ],
          tip: 'Un bon agent IA n\'est jamais en « roue libre ». Il dispose toujours de règles de contrôle définies par les responsables de l\'entreprise.'
        }
      ],
      conclusion: 'L\'agent IA transforme l\'intelligence artificielle d\'une simple curiosité de discussion en un véritable collaborateur numérique opérationnel.'
    }
  },
  {
    id: 'automatisation-pme-associations',
    slug: 'comment-automatisation-aide-pme-associations',
    title: 'Comment l\'automatisation aide concrètement une association ou une PME ?',
    category: 'Automatisation',
    readingTime: '5 min',
    publishDate: 'Contenu pédagogique indicatif (à valider)',
    isDemoNotice: true,
    summary: 'Des exemples concrets et chiffrés de tâches répétitives que vous pouvez automatiser dès aujourd\'hui pour libérer du temps utile.',
    targetAudience: 'Responsables administratifs, chefs d\'entreprises, coordinateurs d\'ONG',
    content: {
      intro: 'Vous arrive-t-il d\'avoir l\'impression de passer plus de temps à faire de la paperasse ou des copier-coller qu\'à faire grandir votre projet ou aider vos bénéficiaires ?',
      sections: [
        {
          heading: '3 exemples d\'automatisations courantes très rentables',
          body: [
            '1. La confirmation et le reçu automatique : dès qu\'une cotisation ou un paiement est validé, un reçu PDF est généré et envoyé au contact sans qu\'aucun humain n\'ait à ouvrir Word.',
            '2. Le rappel des échéances : votre système repère automatiquement les retards de paiement ou les dossiers incomplets et envoie une relance polie par e-mail ou SMS.',
            '3. La synchronisation des listes : une personne qui s\'inscrit sur votre site web est immédiatement ajoutée dans votre carnet de contacts et dans la liste de distribution de votre lettre d\'information.'
          ]
        },
        {
          heading: 'Combien de temps gagne-t-on réellement ?',
          body: [
            'Une organisation économise couramment entre 5 et 15 heures par collaborateur et par semaine simplement en supprimant les doubles saisies et les relances manuelles.'
          ]
        }
      ],
      conclusion: 'L\'automatisation ne remplace pas l\'humain : elle lui retire les tâches de robot pour lui permettre d\'être pleinement humain.'
    }
  },
  {
    id: 'choisir-outil-numerique',
    slug: 'comment-choisir-un-outil-numerique',
    title: 'Comment bien choisir un outil numérique sans gaspiller son budget ?',
    category: 'Conseils PME',
    readingTime: '5 min',
    publishDate: 'Contenu pédagogique indicatif (à valider)',
    isDemoNotice: true,
    summary: 'Les 5 questions indispensables à se poser avant d\'acheter un logiciel ou de commander un développement sur mesure.',
    targetAudience: 'Tout décideur envisageant une transition numérique',
    content: {
      intro: 'Le plus grand piège dans la technologie est de payer pour des fonctionnalités dont personne n\'aura jamais besoin dans votre équipe.',
      sections: [
        {
          heading: 'La grille de lecture Build-Main en 5 questions',
          body: [
            '1. Quel problème précis cherchons-nous à résoudre en priorité ?',
            '2. Mes collaborateurs pourront-ils s\'en servir sur leurs téléphones actuels ?',
            '3. Qui sera propriétaire de nos données si nous voulons changer d\'outil plus tard ?',
            '4. Existe-t-il une solution prête à l\'emploi (comme Build-Membres) avant d\'envisager un développement sur mesure ?',
            '5. Le prestataire comprend-il mes réalités économiques et opérationnelles quotidiennes ?'
          ],
          tip: 'Ne signez jamais un devis avant d\'avoir testé une démonstration ou d\'avoir validé les écrans clés.'
        }
      ],
      conclusion: 'Un outil réussi est un outil que vos équipes prennent plaisir à ouvrir chaque matin.'
    }
  }
];
