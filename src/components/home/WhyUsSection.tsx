import React from 'react';
import { Target, Globe, Lightbulb, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { whyUsData } from '../../data/whyUs';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-amber-300" />;
      case 'Users':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      default:
        return <Target className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Nos Engagements"
          title="Pourquoi choisir"
          highlightedWord="Build-Main ?"
          subtitle="Notre différence repose sur notre pragmatisme : nous construisons des outils utiles, pensés avec et pour ceux qui les utilisent au quotidien."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUsData.map((item) => (
            <Card key={item.id} hoverEffect className="p-6">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                {getIcon(item.iconName)}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2.5">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
