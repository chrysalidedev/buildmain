import React from 'react';
import { Target, Compass, Sparkles, Shield, HeartHandshake, Zap, ArrowRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../config/site';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Accessibilité',
      desc: 'La technologie ne doit pas être réservée à une élite d\'ingénieurs. Nous concevons des interfaces claires, utilisables immédiatement par tous les collaborateurs.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Innovation utile',
      desc: 'Nous rejetons l\'effet de mode technologique. Chaque outil, chaque modèle d\'IA et chaque automatisation doivent prouver un gain tangible en temps ou en rentabilité.',
      icon: <Zap className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Adaptation locale',
      desc: 'Nos solutions s\'adaptent à l\'Afrique : tolérance aux connexions instables, ergonomie sur smartphones répandus et intégration aux modes de travail régionaux.',
      icon: <Target className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Responsabilité',
      desc: 'Protection rigoureuse des données de nos clients, transparence des algorithmes et garde-fous humains stricts pour l\'ensemble de nos agents d\'IA.',
      icon: <Shield className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Ambition industrielle',
      desc: 'Croire en la capacité de l\'Afrique à concevoir, bâtir et posséder ses propres technologies critiques, sans dépendance perpétuelle aux logiciels importés.',
      icon: <Compass className="w-5 h-5 text-emerald-400" />
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Écoute & Analyse terrain',
      desc: 'Nous analysons vos flux réels, vos blocages quotidiens et vos contraintes matérielles sans imposer de modèle préconçu.'
    },
    {
      step: '02',
      title: 'Architecture & Prototypage sobre',
      desc: 'Nous concevons une solution épurée, centrée sur les fonctions indispensables, pour valider rapidement l\'usage avec vos équipes.'
    },
    {
      step: '03',
      title: 'Développement & Tests rigoureux',
      desc: 'Développement selon les standards modernes (sécurité, rapidité de chargement, réactivité mobile) et tests en conditions réelles.'
    },
    {
      step: '04',
      title: 'Accompagnement & Évolution continue',
      desc: 'Formation humaine des utilisateurs, suivi post-déploiement et améliorations continues selon vos retours opérationnels.'
    }
  ];

  return (
    <>
      <SEO
        title="À Propos de Build-Main | Notre Mission & Vision"
        description="Découvrez l'histoire, la mission et les valeurs de Build-Main : bâtir les technologies utiles et accessibles qui font avancer l'Afrique."
        canonicalPath="/a-propos"
      />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background grids */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 hero-grid pointer-events-none" />
        <div className="absolute top-36 left-1/4 w-96 h-96 bg-amber-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Identité & Convictions"
            title="L'Histoire & la Raison d'Être de"
            highlightedWord="Build-Main"
            subtitle="Une entreprise technologique ivoirienne née d'un constat simple : l'Afrique regorge de potentiel, mais ses organisations manquent d'outils numériques fidèles à leurs réalités."
          />

          {/* Core Story & Philosophy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
            <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-white">Build-Main</strong> est née à Abidjan avec une conviction ferme : la technologie ne doit pas être un luxe lointain ni un gadget réservé aux multinationales occidentales.
              </p>
              
              <p>
                Trop souvent, les entreprises, associations, coopératives et institutions locales sont contraintes de choisir entre des logiciels importés extrêmement onéreux, rigides et inadaptés à leurs méthodes, ou des fichiers tableurs artisanaux qui freinent leur croissance.
              </p>

              <p>
                Notre rôle est de combler ce fossé. Nous concevons des logiciels utiles, ergonomiques et robustes, des plateformes SaaS sectorielles (comme notre produit <strong className="text-amber-400">Build-Membres</strong>), ainsi que des agents d'intelligence artificielle qui épaulent concrètement les équipes sur les tâches répétitives.
              </p>

              <div className="p-6 rounded-2xl bg-[#0F1626] border border-amber-500/30">
                <p className="text-amber-300 font-semibold text-lg italic mb-2">
                  « {siteConfig.mission} »
                </p>
                <span className="text-xs text-slate-400">— La mission fondatrice de Build-Main</span>
              </div>
            </div>

            {/* Strategic Pillars Info Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#0A0F1D] border border-white/[0.1] p-8 shadow-2xl space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-amber-400" />
                  <span>Nos 2 Objectifs Indissociables</span>
                </h3>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <h4 className="text-sm font-bold text-amber-400 mb-1">
                    1. Viabilité & Rigueur Économique
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Construire une entreprise solide, rentable et pérenne, capable de financer sa propre recherche technologique sans dépendre de subventions aléatoires.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <h4 className="text-sm font-bold text-emerald-400 mb-1">
                    2. Impact Positif & Utilité Sociale
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Résoudre de vraies difficultés du tissu économique local, soutenir les associations et coopératives, et hisser le niveau numérique de nos communautés.
                  </p>
                </div>

                <div className="pt-2 text-xs text-slate-500 font-mono">
                  Siège : {siteConfig.location.city}, {siteConfig.location.country} • Rayonnement régional
                </div>
              </div>
            </div>
          </div>

          {/* VALUES SECTION */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="amber" size="sm" dot>
                Principes Directeurs
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                Nos 5 Valeurs Fondamentales
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val, idx) => (
                <Card key={idx} hoverEffect className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                    {val.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* METHODOLOGY SECTION */}
          <div className="mb-24 rounded-3xl bg-[#090E1B]/90 border border-white/[0.08] p-8 sm:p-12">
            <div className="max-w-2xl mb-12">
              <Badge variant="cyan" size="sm" dot>
                Processus de Conception
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                Notre Méthode de Travail
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Comment nous transformons un besoin opérationnel flou en un logiciel robuste et adopté par vos équipes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] relative">
                  <span className="font-mono text-2xl font-black text-amber-400/40 mb-3 block">
                    {m.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* LONG TERM VISION & CALL TO ACTION */}
          <div className="text-center max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#0B101D] to-amber-500/10 border border-amber-500/30 p-8 sm:p-12">
            <Badge variant="amber" size="md" dot>
              Cap Long Terme
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 mb-4">
              Bâtir un écosystème technologique africain autonome
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Nous avançons avec humilité et persévérance. Depuis les lignes de code de nos logiciels jusqu'aux agents d'IA, et à terme, vers des technologies matérielles et robotiques adaptées aux réalités africaines.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Rejoindre ou collaborer avec Build-Main
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};
