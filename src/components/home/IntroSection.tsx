import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#060911]/60 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Notre Raison d'Être"
          title="La technologie doit répondre à nos réalités,"
          highlightedWord="nos besoins et nos ambitions."
          subtitle="Build-Main ne cherche pas à vendre la technologie pour l'effet de mode, mais pour son utilité immédiate et tangible dans le quotidien des organisations africaines."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: La Mission */}
          <div className="p-7 rounded-2xl bg-[#0B101D]/70 border border-white/[0.08] relative overflow-hidden group hover:border-amber-400/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Notre Mission
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Rendre la technologie accessible à tous à travers des solutions innovantes, robustes et adaptées aux réalités économiques et sociales locales.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Démocratisation numérique</span>
            </div>
          </div>

          {/* Card 2: L'Approche */}
          <div className="p-7 rounded-2xl bg-[#0B101D]/70 border border-white/[0.08] relative overflow-hidden group hover:border-emerald-400/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              L'Approche Pragmatique
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Créer des outils simples et élégants, utilisables par des personnes non-techniciennes, sans jargon inutile ni complexité superflue.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Zéro barrière d'adoption</span>
            </div>
          </div>

          {/* Card 3: La Vision */}
          <div className="p-7 rounded-2xl bg-[#0B101D]/70 border border-white/[0.08] relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              L'Ambition Panafricaine
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Contribuer activement à un écosystème technologique africain autonome, capable de concevoir, développer et maîtriser ses propres solutions numériques.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Souveraineté & durabilité</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
