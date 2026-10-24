import React from 'react';
import { SEO } from '../components/ui/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { ExpertiseSection } from '../components/home/ExpertiseSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { WhyUsSection } from '../components/home/WhyUsSection';
import { VisionSection } from '../components/home/VisionSection';
import { CTASection } from '../components/home/CTASection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Rendre la technologie accessible à tous"
        description="Build-Main est une entreprise technologique basée en Côte d'Ivoire. Développement de logiciels, solutions SaaS, agents d'IA et automatisation adaptés aux réalités africaines."
        canonicalPath="/"
      />

      <div className="flex flex-col">
        {/* Section 1 & 2: Hero & Value Proposition */}
        <HeroSection />

        {/* Section 3: Intro to Build-Main mission & approach */}
        <IntroSection />

        {/* Section 4: 5 Domains of expertise */}
        <ExpertiseSection />

        {/* Section 5: Products & Build-Membres flagship */}
        <ProductsSection />

        {/* Section 6: Why Build-Main */}
        <WhyUsSection />

        {/* Section 7: Long term Vision */}
        <VisionSection />

        {/* Section 8: Call to Action */}
        <CTASection />
      </div>
    </>
  );
};
