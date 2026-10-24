import React, { useState } from 'react';
import { Search, Clock, ArrowRight, X, AlertCircle, Share2, Check, Sparkles } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { resourcesData } from '../data/resources';
import type { ResourceArticle } from '../types';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    'Tous',
    'Comprendre la Tech',
    'Intelligence Artificielle',
    'Automatisation',
    'Conseils PME'
  ];

  const filteredArticles = resourcesData.filter((article) => {
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = (article: ResourceArticle) => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${url}#${article.slug}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <>
      <SEO
        title="Ressources & Guides Pédagogiques Numériques"
        description="Guides clairs et accessibles pour comprendre les logiciels, le cloud, les agents d'intelligence artificielle et l'automatisation sans jargon technique."
        canonicalPath="/ressources"
      />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 hero-grid pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Vulgarisation & Pédagogie"
            title="Comprendre la technologie avec des"
            highlightedWord="mots simples."
            subtitle="Guides pratiques et articles didactiques destinés aux dirigeants, responsables associatifs et collaborateurs pour maîtriser les concepts clés du numérique."
          />

          {/* Transparent Editorial Validation Notice as requested */}
          <div className="mb-12 max-w-3xl mx-auto rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 p-4 sm:p-5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300">
              <strong className="text-amber-300">Espace pédagogique Build-Main :</strong> Les fiches ci-dessous constituent des guides didactiques structurés pour expliquer simplement le numérique à un public non-technique. Les contenus sont des versions de référence prêtes à être enrichies par l'équipe éditoriale.
            </div>
          </div>

          {/* Search & Filters */}
          <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-brand-950 font-semibold shadow-lg shadow-amber-500/20'
                      : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Rechercher un sujet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-slate-400 text-sm">
                Aucun article ne correspond à votre recherche. Essayez d'autres mots-clés ou sélectionnez une autre catégorie.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card 
                  key={article.id} 
                  hoverEffect 
                  className="flex flex-col justify-between cursor-pointer group"
                  onClick={() => setActiveArticle(article)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="amber" size="sm">
                        {article.category}
                      </Badge>
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readingTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 inline-flex items-center gap-1">
                      <span>Lire le guide complet</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {article.publishDate}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Quick Newsletter / Topic Suggestion Box */}
          <div className="mt-20 rounded-3xl bg-[#090E1B] border border-white/[0.08] p-8 text-center max-w-3xl mx-auto">
            <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">
              Un sujet technique que vous aimeriez voir expliqué ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Posez-nous vos questions. Notre équipe technique prépare régulièrement de nouveaux guides vulgarisés pour accompagner vos réflexions.
            </p>
            <Button
              href="/contact?subject=Question-pedagogique"
              variant="outline"
              size="sm"
            >
              Proposer une thématique
            </Button>
          </div>

        </div>
      </div>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="bg-[#0B101D] border border-white/10 rounded-3xl max-w-3xl w-full p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="amber" size="sm">
                    {activeArticle.category}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Lecture {activeArticle.readingTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                  {activeArticle.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                aria-label="Fermer l'article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Target Audience Pill */}
            <div className="mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300">
              <strong className="text-white">Public visé : </strong>
              {activeArticle.targetAudience}
            </div>

            {/* Article Body */}
            <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p className="text-base text-slate-200 font-medium">
                {activeArticle.content.intro}
              </p>

              {activeArticle.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-3 pt-2">
                  <h3 className="text-lg font-bold text-white">
                    {section.heading}
                  </h3>
                  {section.body.map((p, pIdx) => (
                    <p key={pIdx}>
                      {p}
                    </p>
                  ))}
                  {section.tip && (
                    <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 text-xs sm:text-sm text-amber-300 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-400 block mb-0.5">Le conseil pratique Build-Main :</strong>
                        <span>{section.tip}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-6 border-t border-white/10">
                <h4 className="font-semibold text-white mb-1">En conclusion</h4>
                <p className="text-sm text-slate-300">
                  {activeArticle.content.conclusion}
                </p>
              </div>
            </div>

            {/* Footer Modal Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => handleShare(activeArticle)}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Lien copié dans le presse-papier !</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-amber-400" />
                    <span>Partager ce guide</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-3">
                <Button
                  href="/contact"
                  variant="primary"
                  size="sm"
                >
                  Discuter de ce sujet avec nous
                </Button>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
