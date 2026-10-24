import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Layers, Bot, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { solutionsData } from '../../data/solutions';

export const ExpertiseSection: React.FC = () => {
  // Mapping of icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-emerald-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      default:
        return <Code className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Domaines d'Expertise"
          title="Des solutions numériques conçues pour"
          highlightedWord="résoudre de vrais défis."
          subtitle="Nous combinons génie logiciel, intelligence artificielle cadrée et automatisation pour concevoir des outils opérationnels immédiatement rentables."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutionsData.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between group">
              <div>
                {/* Icon & Eyebrow */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Expertise
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.shortDesc}
                </p>

                {/* Key Benefits pill snippet */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                  {item.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 mt-1.5 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link to detail page */}
              <div className="pt-4 border-t border-white/[0.06]">
                <Link
                  to={`/solutions#${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group/link"
                >
                  <span>Explorer les détails & cas d'usage</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Global link to solutions page */}
        <div className="mt-12 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] px-6 py-3 rounded-xl transition-all"
          >
            <span>Voir l'ensemble de notre catalogue de solutions & méthodologie</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
