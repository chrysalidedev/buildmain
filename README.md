# 🚀 Build-Main — Site Web Officiel

> **« Rendre la technologie accessible à tous »**  
> Site web officiel de **Build-Main**, entreprise technologique ivoirienne et panafricaine spécialisée dans le développement de logiciels, les plateformes SaaS, les agents d'intelligence artificielle et l'automatisation des processus métiers.

---

## 🌟 Présentation du Projet

Ce projet a été conçu selon les plus hauts standards de l'ingénierie logicielle frontend moderne :
- **Framework & Outils :** React 19, TypeScript, Vite.
- **Styling :** Tailwind CSS v3 avec un design system sur mesure (mode sombre technologique, accents ambrés et émeraudes, glassmorphisme élégant).
- **Navigation :** React Router (`react-router-dom`) avec gestion des routes SPA, scroll reset automatique et accessibilité clavier.
- **Icônes :** Lucide React.
- **SEO & Performances :** Composant SEO dynamique, balises Open Graph, balises Twitter Card, balises canoniques, Schema.org JSON-LD (Organization & WebSite), `sitemap.xml` et `robots.txt`.
- **Formulaire de contact :** Formulaire optimisé pour **Netlify Forms**, avec protection honeypot anti-spam (`bot-field`), validation des champs et compatibilité SPA.
- **Architecture modulaire :** Configuration centralisée (`src/config/site.ts`) permettant de personnaliser toutes les coordonnées de l'entreprise (e-mail, téléphone, WhatsApp, réseaux sociaux, logo) sans toucher au code des composants.

---

## 📁 Architecture des Fichiers

```
bm/
├── public/
│   ├── _redirects          # Règles de redirection SPA pour Netlify (/* /index.html 200)
│   ├── favicon.svg         # Emblème officiel circulaire Build-Main
│   ├── robots.txt          # Directives pour moteurs de recherche
│   └── sitemap.xml         # Plan de site XML public
├── src/
│   ├── assets/             # Ressources statiques
│   ├── components/
│   │   ├── home/           # Sections spécifiques à la page d'accueil (Hero, Intro, Expertise, Produits, etc.)
│   │   ├── layout/         # Navbar, Footer, ScrollToTop
│   │   └── ui/             # Composants atomiques réutilisables (Button, Badge, Card, Logo, SectionHeader, SEO)
│   ├── config/
│   │   └── site.ts         # Configuration centrale (coordonnées, WhatsApp, liens, navigation)
│   ├── data/
│   │   ├── products.ts     # Données du produit phare Build-Membres et des solutions en préparation
│   │   ├── resources.ts    # Articles pédagogiques didactiques sans jargon
│   │   ├── solutions.ts    # 5 domaines d'expertise détaillés (problème, solution, bénéfices, cas réels)
│   │   ├── vision.ts       # Trajectoire progressive panafricaine (logiciel -> SaaS -> agents -> robotique)
│   │   └── whyUs.ts        # Différenciateurs concrets et ancrage local
│   ├── pages/
│   │   ├── HomePage.tsx    # Accueil (/)
│   │   ├── SolutionsPage.tsx # Solutions détaillées (/solutions)
│   │   ├── ProductsPage.tsx  # Produits & Build-Membres (/produits)
│   │   ├── AboutPage.tsx     # À propos, mission & valeurs (/a-propos)
│   │   ├── ResourcesPage.tsx # Guides pédagogiques & vulgarisation (/ressources)
│   │   ├── ContactPage.tsx   # Formulaire de contact & devis (/contact)
│   │   └── NotFoundPage.tsx  # Page 404 personnalisée
│   ├── types/
│   │   └── index.ts        # Interfaces et typages TypeScript
│   ├── App.tsx             # Configuration du routeur et du layout global
│   ├── index.css           # Directives Tailwind, variables de design et utilitaires
│   └── main.tsx            # Point d'entrée React
├── netlify.toml            # Configuration de build et en-têtes de sécurité Netlify
├── tailwind.config.js      # Configuration Tailwind et palette de marque Build-Main
└── tsconfig.json           # Configuration TypeScript
```

---

## 🛠️ Démarrage Local

### 1. Prérequis
- **Node.js** v18+ (recommandé v20 ou supérieur)
- **npm** v9+

### 2. Installation des dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
Le site sera accessible localement sur `http://localhost:5173/`.

### 4. Compiler pour la production
```bash
npm run build
```
La compilation génère un dossier optimisé `dist/` prêt pour le déploiement statique.

### 5. Prévisualiser le build localement
```bash
npm run preview
```

---

## 🌐 Déploiement sur Netlify

Le site est 100% prêt pour un déploiement continu via Git sur Netlify.

### Option A : Déploiement via Git (Recommandé)
1. Poussez ce dépôt sur votre compte GitHub, GitLab ou Bitbucket.
2. Connectez-vous à votre tableau de bord **[Netlify](https://app.netlify.com/)**.
3. Cliquez sur **"Add new site"** > **"Import an existing project"**.
4. Sélectionnez votre dépôt Git.
5. Netlify détecte automatiquement le fichier `netlify.toml` :
   - **Build command :** `npm run build`
   - **Publish directory :** `dist`
6. Cliquez sur **"Deploy site"**. En moins d'une minute, votre site est en ligne avec un certificat HTTPS Let's Encrypt automatique.

### Option B : Déploiement direct via Netlify CLI
```bash
npx netlify deploy --prod --dir=dist
```

---

## 🔗 Configuration du Nom de Domaine Personnalisé

Une fois le site déployé sur Netlify :

1. Dans Netlify, rendez-vous dans **Site configuration** > **Domain management** > **Domains**.
2. Cliquez sur **"Add a domain"** et saisissez votre nom de domaine officiel (par exemple `buildmain.tech` ou `buildmain.ci`).
3. Choisissez l'une des deux méthodes de configuration DNS :
   - **Méthode 1 : Netlify DNS (Recommandé)**
     - Netlify vous fournit 4 serveurs de noms (ex: `dns1.p01.nsone.net`).
     - Rendez-vous chez votre registrar (Namecheap, GoDaddy, OVH, etc.) et remplacez les serveurs DNS par ceux de Netlify.
   - **Méthode 2 : Enregistrements DNS manuels**
     - Créez un enregistrement **A** pour le domaine racine (`@`) pointant vers l'IP de Netlify : `75.2.60.5`.
     - Créez un enregistrement **CNAME** pour le sous-domaine (`www`) pointant vers votre sous-domaine Netlify (`nom-du-site.netlify.app`).
4. **HTTPS / SSL :** Netlify génère automatiquement un certificat SSL gratuit Let's Encrypt dès que la propagation DNS est active (généralement en 10 à 30 minutes).

---

## 📝 Personnalisation des Coordonnées & Données

Toutes les coordonnées de Build-Main sont regroupées dans un unique fichier centralisé :
👉 **`src/config/site.ts`**

### Éléments à renseigner :
- **E-mail officiel :** modifiez la propriété `contact.emailPlaceholder`.
- **Téléphone officiel :** modifiez `contact.phonePlaceholder`.
- **Numéro WhatsApp :** renseignez `contact.whatsappNumber` au format international (ex: `"2250700000000"`). Dès que ce numéro est présent, le bouton d'échange direct WhatsApp s'active instantanément sur la page `/contact`.
- **Logo officiel HD :** si vous disposez du fichier logo PNG/SVG haute résolution, déposez-le dans `public/images/logo.png` et configurez `logo.customImageSrc: '/images/logo.png'`. Par défaut, l'emblème SVG vectoriel officiel intégré est utilisé.
- **Réseaux sociaux :** renseignez les URLs LinkedIn, Twitter, GitHub ou Facebook dans `socials`.

---

## 📩 Fonctionnement du Formulaire de Contact (Netlify Forms)

Le formulaire de la page `/contact` utilise **Netlify Forms** sans nécessiter aucun serveur backend :
1. Une balise statique est intégrée dans `index.html` pour que les robots de Netlify détectent le formulaire lors de la commande de build.
2. Le composant React soumet les données en format `x-www-form-urlencoded` vers `/`.
3. Une protection anti-spam invisible (**honeypot** via le champ `bot-field`) est active pour filtrer les robots malveillants.
4. Dès la mise en production, vous recevrez les soumissions directement dans l'onglet **"Forms"** de votre tableau de bord Netlify, et vous pourrez configurer des notifications par e-mail ou Slack.

---

## 🎯 Validation des Fonctionnalités

- [x] **Accueil (`/`) :** Header fixe au scroll, Hero avec slogan et composition technologique abstraite, 5 cartes d'expertise, vitrine produit Build-Membres, pourquoi nous, vision évolutive, appel à l'action et footer complet.
- [x] **Solutions (`/solutions`) :** 5 domaines détaillés (Dév logiciel, SaaS, Agents IA, Automatisation, Intégration IA) rédigés pour des dirigeants non techniques avec cas concrets.
- [x] **Produits (`/produits`) :** Présentation complète de Build-Membres avec lien direct vers `https://build-membres.netlify.app/` et feuille de route des solutions en préparation (Build-Coop, Build-Foundation, Build-Store).
- [x] **À propos (`/a-propos`) :** Histoire, mission, double objectif rentabilité/impact, 5 valeurs cardinales et méthode en 4 étapes.
- [x] **Ressources (`/ressources`) :** Guides de vulgarisation didactiques (logiciel, cloud, agents IA vs IA classique, automatisation pour PME/associations, choix d'outils), recherche par mot-clé, filtres et lecteur modal.
- [x] **Contact (`/contact`) :** Formulaire complet validé, compatible Netlify Forms, protection anti-spam honeypot, lien direct WhatsApp configurable.
- [x] **SEO & Social :** Balises OpenGraph, Twitter Cards, balises canoniques, Schema.org JSON-LD, `robots.txt` et `sitemap.xml`.
- [x] **Responsive & Accessibilité :** Menu tiroir mobile, contrastes de couleurs WCAG, focus visibles, support `prefers-reduced-motion`.
- [x] **Déploiement :** `_redirects` pour le routage SPA, `netlify.toml` avec en-têtes de sécurité HTTP.
