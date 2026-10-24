import React from 'react';
import { ExternalLink, CheckCircle2, ArrowRight, Shield, Clock } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { productsData } from '../data/products';

export const ProductsPage: React.FC = () => {
  const flagship = productsData.find((p) => p.isFlagship) || productsData[0];
  const upcoming = productsData.filter((p) => !p.isFlagship);

  return (
    <>
      <SEO
        title="Nos Produits & Plateformes Numériques"
        description="Découvrez Build-Membres, la plateforme de gestion pour associations et coopératives, ainsi que l'écosystème de solutions en préparation de Build-Main."
        canonicalPath="/produits"
      />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Subtle decorative background aura */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 hero-grid pointer-events-none" />
        <div className="absolute top-36 right-1/4 w-96 h-96 bg-amber-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Catalogue Produits"
            title="L'Écosystème de produits logiciels"
            highlightedWord="Build-Main"
            subtitle="Des logiciels SaaS clés en main conçus pour éliminer les complexités administratives et accélérer l'organisation des structures en Afrique."
          />

          {/* MAIN SPOTLIGHT: BUILD-MEMBRES */}
          <div id="build-membres" className="mb-20 scroll-mt-28">
            <div className="rounded-3xl bg-gradient-to-b from-[#0E1526] via-[#0A0E1A] to-[#070A12] border border-amber-500/40 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <Badge variant="emerald" size="md">
                    {flagship.badgeLabel}
                  </Badge>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Version officielle en production
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                    {flagship.name}
                  </h2>

                  <p className="text-lg text-amber-300 font-medium mb-6">
                    {flagship.tagline}
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                    {flagship.fullDesc}
                  </p>

                  {/* Confirmed features from prompt */}
                  <div className="space-y-4 mb-9">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Shield className="w-4 h-4 text-amber-400" />
                      <span>Fonctionnalités réelles disponibles :</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {flagship.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Public Target Audiences */}
                  <div className="mb-10">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                      Idéal pour :
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {flagship.targetAudience.map((target, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 font-medium"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Link CTA */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Button
                      href={flagship.externalUrl}
                      external
                      variant="primary"
                      size="lg"
                      icon={<ExternalLink className="w-5 h-5" />}
                    >
                      {flagship.ctaText}
                    </Button>

                    <Button
                      href="/contact?service=saas&subject=Demonstration-Build-Membres"
                      variant="outline"
                      size="lg"
                    >
                      Demander une démonstration guidée
                    </Button>
                  </div>
                </div>

                {/* Right Interactive Visual Simulation */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#080B14] border border-white/[0.1] p-6 shadow-2xl relative">
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <span className="text-xs font-mono text-slate-400 ml-2">build-membres.netlify.app</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        DIRECT LINK
                      </span>
                    </div>

                    <div className="space-y-4 text-xs text-slate-300">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <p className="text-slate-400 text-[11px] mb-1">Module Cotisations & Trésorerie</p>
                        <p className="font-semibold text-white text-sm">Génération automatique des états de compte et reçus individuels</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <p className="text-slate-400 text-[11px] mb-1">Module Assemblées & Activités</p>
                        <p className="font-semibold text-white text-sm">Planning partagé et pointage des présences en temps réel</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <p className="text-slate-400 text-[11px] mb-1">Sécurité & Confidentialité</p>
                        <p className="font-semibold text-white text-sm">Accès sécurisé pour chaque membre du bureau selon son rôle</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.08] text-center">
                      <a
                        href={flagship.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <span>Visiter l'application en ligne</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ROADMAP / UPCOMING PRODUCTS (STRICTLY LABELED EN PRÉPARATION) */}
          <div>
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <Badge variant="neutral" size="md" dot>
                Feuille de Route Panafricaine
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
                Produits en cours de préparation
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Ces solutions sont actuellement en phase d'étude et d'ingénierie. Aucun faux produit n'est présenté comme disponible. Vous pouvez manifester votre intérêt pour participer aux phases pilotes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcoming.map((product) => (
                <Card key={product.id} className="flex flex-col justify-between" hoverEffect>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="amber" size="sm" dot>
                        {product.badgeLabel}
                      </Badge>
                      <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>R&D</span>
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">
                      {product.name}
                    </h4>

                    <p className="text-xs font-medium text-amber-400/90 mb-4">
                      {product.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {product.fullDesc}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Objectifs clés :
                      </span>
                      {product.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <Button
                      href={`/contact?subject=Interet-${product.name}`}
                      variant="outline"
                      size="sm"
                      className="w-full justify-center text-xs"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      {product.ctaText}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
