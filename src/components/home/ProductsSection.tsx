import React from 'react';
import { ExternalLink, CheckCircle, Users, FileSpreadsheet, CreditCard, Calendar, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { productsData } from '../../data/products';

export const ProductsSection: React.FC = () => {
  const flagshipProduct = productsData.find((p) => p.isFlagship) || productsData[0];
  const upcomingProducts = productsData.filter((p) => !p.isFlagship);

  return (
    <section className="py-24 relative bg-[#060911]/80 border-y border-white/[0.04] overflow-hidden">
      
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Produits & Plateformes SaaS"
          title="Des outils numériques prêts à l'emploi pour"
          highlightedWord="vos organisations."
          subtitle="Découvrez Build-Membres, notre solution phare en production, ainsi que les solutions sectorielles en cours de conception."
        />

        {/* FLAGSHIP HERO CARD: BUILD-MEMBRES */}
        <div className="mb-14 rounded-3xl bg-gradient-to-b from-[#0E1524] to-[#0A0E18] border border-amber-500/30 p-8 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(245,158,11,0.12)] relative overflow-hidden">
          
          {/* Subtle badge on top right */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <Badge variant="emerald" size="md">
                PRODUIT PHARE DISPONIBLE
              </Badge>
            </div>
            <span className="text-xs font-mono text-slate-400">
              SaaS Métier Spécialisé • Déploiement Immédiat
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Flagship Description & Features */}
            <div className="lg:col-span-7">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
                {flagshipProduct.name}
              </h3>
              
              <p className="text-base sm:text-lg text-amber-300 font-medium mb-5">
                {flagshipProduct.tagline}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {flagshipProduct.shortDesc}
              </p>

              {/* Exact 4 confirmed features from prompt */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                  <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Gestion des membres</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Répertoire unifié, statuts et annuaire sécurisé</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                  <FileSpreadsheet className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Fiches personnalisées</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Champs sur mesure selon votre secteur d'activité</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Suivi des cotisations</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Historique des versements, états de soldes et reçus</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Organisation des activités</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Planification d'assemblées et suivi des présences</p>
                  </div>
                </div>
              </div>

              {/* Action Link to Live Product */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href={flagshipProduct.externalUrl}
                  external
                  variant="primary"
                  size="lg"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  {flagshipProduct.ctaText}
                </Button>

                <span className="text-xs text-slate-400 text-center sm:text-left">
                  Accessible en ligne sans installation • Essai disponible
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Mockup Simulation Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#080C16] border border-white/[0.1] p-5 shadow-2xl relative">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">app.build-membres</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">
                    EN LIGNE
                  </span>
                </div>

                {/* Simulated UI Cards inside Build-Membres */}
                <div className="space-y-3 text-left">
                  <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <div className="flex justify-between items-center text-xs text-slate-300 font-medium mb-1">
                      <span>Total Adhérents Enregistrés</span>
                      <span className="text-amber-400 font-bold">1 240 membres</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[82%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <div className="flex justify-between items-center text-xs text-slate-300 font-medium mb-1">
                      <span>Recouvrement des Cotisations (Mois)</span>
                      <span className="text-emerald-400 font-bold">94 % à jour</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[94%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-slate-300">Prochaine Assemblée Générale</span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">
                      Samedi 10:00
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.08] text-center">
                  <a
                    href={flagshipProduct.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1.5"
                  >
                    <span>Ouvrir l'application sur build-membres.netlify.app</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ECOSYSTEM ROADMAP: FUTURE MODULAR PRODUCTS */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
            <div>
              <h3 className="text-xl font-bold text-white">
                L'Écosystème Build-Main en préparation
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Des solutions sectorielles en cours d'ingénierie pour accélérer la digitalisation de l'Afrique.
              </p>
            </div>
            <Badge variant="subtle" size="sm">
              Feuille de route officielle
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingProducts.map((product) => (
              <Card key={product.id} className="flex flex-col justify-between" hoverEffect>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="neutral" size="sm" dot>
                      {product.badgeLabel}
                    </Badge>
                    <span className="text-[11px] font-mono text-slate-500">
                      R&D
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {product.name}
                  </h4>

                  <p className="text-xs font-medium text-amber-400/90 mb-3">
                    {product.tagline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {product.shortDesc}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <Button
                    href="/contact"
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-xs"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    <span>{product.ctaText}</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
