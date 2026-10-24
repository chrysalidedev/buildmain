import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Code, Layers, Bot, Zap, Sparkles, ArrowRight, CheckCircle2, 
  HelpCircle, Lightbulb, TrendingUp, ShieldCheck 
} from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { solutionsData } from '../data/solutions';

export const SolutionsPage: React.FC = () => {
  const location = useLocation();

  // Scroll to hash if user came with anchor (e.g. /solutions#agents-ia)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-7 h-7 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-7 h-7 text-emerald-400" />;
      case 'Bot':
        return <Bot className="w-7 h-7 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-amber-400" />;
      default:
        return <Code className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <>
      <SEO
        title="Solutions & Expertises Technologiques"
        description="Découvrez nos expertises : développement logiciel sur mesure, SaaS, agents IA cadrés, automatisation des processus et intégration pragmatique de l'IA."
        canonicalPath="/solutions"
      />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background grids */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 hero-grid pointer-events-none" />
        <div className="absolute top-24 left-1/3 w-96 h-96 bg-amber-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <SectionHeader
            badge="Notre Savoir-Faire"
            title="Des solutions technologiques claires,"
            highlightedWord="pensées pour vos résultats."
            subtitle="Nous expliquons la technologie avec des mots simples. Chaque solution ci-dessous est conçue pour résoudre un problème opérationnel précis, sans gaspillage de budget ni jargon inutile."
          />

          {/* Quick Sub-Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {solutionsData.map((s) => (
              <a
                key={s.id}
                href={`#${s.slug}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>

          {/* Detailed Solutions Cards */}
          <div className="space-y-16">
            {solutionsData.map((item, index) => (
              <div
                key={item.id}
                id={item.slug}
                className="scroll-mt-28 rounded-3xl bg-[#0B101C]/85 backdrop-blur-md border border-white/[0.08] p-8 sm:p-10 lg:p-12 shadow-xl hover:border-amber-500/30 transition-all duration-300"
              >
                {/* Solution Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shrink-0">
                      {getIcon(item.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-amber-400 font-semibold">
                          0{index + 1} //
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-300/90 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
                    {item.suitableFor.map((audience, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-400"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grid breakdown: Problem vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* The Problem */}
                  <div className="p-6 rounded-2xl bg-red-500/[0.03] border border-red-500/15">
                    <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-3">
                      <HelpCircle className="w-4 h-4" />
                      <span>Le problème fréquent que vous rencontrez</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  {/* Build-Main Solution */}
                  <div className="p-6 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/15">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-3">
                      <Lightbulb className="w-4 h-4" />
                      <span>Ce que Build-Main conçoit pour vous</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Les bénéfices concrets pour votre structure</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.benefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Realistic Example Box */}
                <div className="p-6 rounded-2xl bg-[#070A12] border border-white/[0.08] mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" />
                      Exemple d'application réaliste
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">Cas pratique</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <p>
                      <strong className="text-white">Situation initiale : </strong>
                      {item.practicalExample.context}
                    </p>
                    <p>
                      <strong className="text-white">Intervention Build-Main : </strong>
                      {item.practicalExample.action}
                    </p>
                    <p className="text-amber-300">
                      <strong className="text-amber-400">Impact mesuré : </strong>
                      {item.practicalExample.impact}
                    </p>
                  </div>
                </div>

                {/* How to request assistance */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                  <p className="text-xs text-slate-400 text-center sm:text-left">
                    Vous avez un besoin similaire dans ce domaine ? Discutons-en sans engagement technique.
                  </p>

                  <Button
                    href={`/contact?service=${item.id}`}
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Demander un accompagnement
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Reassurance Banner */}
          <div className="mt-20 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2">
              Vous avez un projet spécifique non listé ci-dessus ?
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              Nos ingénieurs étudient vos processus métiers sur mesure pour vous proposer une solution adaptée à votre budget et à vos ambitions.
            </p>
            <Button
              href="/contact"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Échanger avec notre équipe
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};
