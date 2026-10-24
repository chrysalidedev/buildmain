import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Terminal, Bot, Cpu } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow & grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] hero-grid pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-left">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="amber" size="md" dot>
                Ingénierie Numérique & Intelligence Artificielle en Afrique
              </Badge>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Nous construisons les{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                technologies
              </span>{' '}
              qui font avancer l'Afrique.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              Logiciels, intelligence artificielle et automatisation : nous concevons des solutions utiles, accessibles et adaptées aux réalités africaines.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Button
                href="/solutions"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Découvrir nos solutions
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Parlons de votre projet
              </Button>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Outils 100% sur mesure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Adapté au contexte local</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Données sécurisées</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Technology Architecture Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Interactive Glass Console Card */}
              <div className="rounded-2xl bg-[#0B101C]/90 backdrop-blur-xl border border-white/[0.12] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
                
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400">buildmain-core :: architecture</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>SYSTÈME EN LIGNE</span>
                  </div>
                </div>

                {/* 3 Tech Stack Pillars inside the composition */}
                <div className="space-y-3.5">
                  
                  {/* Pillar 1: Logiciels & Web */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-400/30 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 text-white font-medium text-sm">
                        <Terminal className="w-4 h-4 text-amber-400" />
                        <span>Logiciels & Plateformes Web</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-300">
                        SUR-MESURE
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      Applications réactives conçues pour les débits locaux et tous types d'écrans.
                    </p>
                  </div>

                  {/* Pillar 2: Agent IA & Automatisation */}
                  <div className="p-3.5 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 shadow-[0_0_15px_-3px_rgba(245,158,11,0.1)]">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 text-white font-medium text-sm">
                        <Bot className="w-4 h-4 text-amber-400" />
                        <span>Agents IA & Automatisation</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold">
                        AGENTIQUE
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-normal">
                      Exécution de tâches répétitives avec règles de contrôle humain rigoureuses.
                    </p>
                  </div>

                  {/* Pillar 3: Produit Phare Build-Membres */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-400/30 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 text-white font-medium text-sm">
                        <Cpu className="w-4 h-4 text-emerald-400" />
                        <span>Produit Phare : Build-Membres</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        DISPONIBLE
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      Solution de gestion pour associations, ONG et coopératives.
                    </p>
                  </div>
                </div>

                {/* Console Footer Live Indicator */}
                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Vision : Écosystème autonome</span>
                  </span>
                  <span className="font-mono text-slate-500 text-[11px]">Côte d'Ivoire & Afrique</span>
                </div>
              </div>

              {/* Floating Decorative Badge 1 */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3 rounded-xl bg-[#090E1A]/95 border border-amber-500/30 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                  CI
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Ancrage local</p>
                  <p className="text-[11px] text-slate-400">Pensé pour nos réalités</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
