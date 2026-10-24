import React from 'react';
import { Home, Search } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Non Trouvée (404)"
        description="La page demandée est introuvable ou a été déplacée. Retrouvez l'ensemble des solutions et produits Build-Main sur notre page d'accueil."
        canonicalPath="/404"
      />

      <div className="min-h-[75vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-md mx-auto relative z-10">
          <span className="font-mono text-7xl sm:text-8xl font-black text-amber-400 block mb-4">
            404
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Page introuvable
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed mb-8">
            Le lien que vous avez suivi semble obsolète ou a été déplacé. Nous vous invitons à revenir vers notre page d'accueil ou à explorer nos solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/"
              variant="primary"
              size="md"
              icon={<Home className="w-4 h-4" />}
            >
              Retour à l'accueil
            </Button>

            <Button
              href="/solutions"
              variant="outline"
              size="md"
              icon={<Search className="w-4 h-4" />}
            >
              Voir les solutions
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
