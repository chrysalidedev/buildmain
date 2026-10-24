import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-r from-[#0C1220] via-[#121A2D] to-[#0C1220] border border-amber-500/30 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(245,158,11,0.1)]">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collaboration & Devis Personnalisé</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Vous avez un besoin.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Construisons la solution.
            </span>
          </h2>

          {/* Body text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-9">
            Parlez-nous de votre projet, de vos difficultés ou d'une tâche que vous aimeriez simplifier. Nous chercherons avec vous une approche adaptée.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Parlons de votre projet
            </Button>
            
            <Button
              href="/solutions"
              variant="outline"
              size="lg"
            >
              Explorer nos solutions
            </Button>
          </div>

          {/* Reassurance */}
          <p className="mt-8 text-xs text-slate-400">
            Réponse rapide sous 24h à 48h ouvrées • Échange direct avec notre équipe technique
          </p>

        </div>

      </div>
    </section>
  );
};
