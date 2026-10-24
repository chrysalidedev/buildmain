import React from 'react';
import { Sparkles } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { visionStages } from '../../data/vision';

export const VisionSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#060911]/80 border-y border-white/[0.04] overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Vision Panafricaine"
          title="Une trajectoire structurée vers"
          highlightedWord="l'autonomie technologique."
          subtitle="Build-Main poursuit une feuille de route lucide et ambitieuse : commencer par les logiciels du quotidien pour bâtir, pas à pas, les technologies de pointe de demain."
        />

        {/* Timeline Progression */}
        <div className="relative mt-12">
          
          {/* Vertical Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-cyan-500/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {visionStages.map((stage, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                  stage.isLongTerm
                    ? 'bg-[#0E1524]/90 border border-amber-500/40 shadow-[0_0_25px_-5px_rgba(245,158,11,0.2)]'
                    : 'bg-[#0B101C]/80 border border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-amber-400 px-2 py-1 rounded bg-amber-400/10">
                      {stage.step}
                    </span>
                    <Badge 
                      variant={stage.isLongTerm ? 'amber' : 'neutral'} 
                      size="sm"
                      dot
                    >
                      {stage.statusLabel}
                    </Badge>
                  </div>

                  <h3 className="text-base font-bold text-white mb-3 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {stage.description}
                  </p>
                </div>

                {stage.isLongTerm && (
                  <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center gap-1.5 text-[11px] text-amber-300/90 italic">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Recherche & exploration progressive, sans promesse prématurée</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Note on ethical & realistic tech */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 text-center">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Notre engagement d'honnêteté :</strong> Nous ne vendons pas d'illusions. 
            Les robots et technologies autonomes avancées constituent un cap à long terme nécessitant recherche, capitaux et maturité industrielle. 
            Aujourd'hui, nous livrons des logiciels et agents IA rigoureusement éprouvés pour vos opérations immédiates.
          </p>
        </div>

      </div>
    </section>
  );
};
