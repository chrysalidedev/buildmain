import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Shield, FileText, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { siteConfig, navigationLinks, footerQuickLinks } from '../../config/site';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'mentions' | 'confidentialite' | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05070D] border-t border-white/[0.08] text-slate-400 text-sm overflow-hidden pt-16 pb-12">
      {/* Decorative background grid highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Column 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4 focus-visible:outline-amber-400">
              <Logo size="md" />
            </Link>
            
            <p className="text-purple-300 font-medium text-sm mb-3">
              « {siteConfig.slogan} »
            </p>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
              Build-Main est une entreprise technologique ivoirienne à vocation panafricaine. 
              Nous concevons des logiciels utiles, des plateformes SaaS, des agents d'intelligence artificielle et des automatisations adaptés aux réalités économiques et sociales locales.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Conception & Ingénierie • {siteConfig.location.city}, {siteConfig.location.country}</span>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Produits & Solutions */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Écosystème
            </h3>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Coordonnées */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Contact & Échanges
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{siteConfig.location.city}, {siteConfig.location.country}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${siteConfig.contact.emailPlaceholder}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.emailPlaceholder}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.phonePlaceholder}</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/[0.08]">
              <Link
                to="/contact"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 group"
              >
                <span>Envoyer une demande de projet</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.legalName}. {siteConfig.slogan}. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveModal('mentions')}
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Mentions légales</span>
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveModal('confidentialite')}
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Politique de confidentialité</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Mentions Légales & Confidentialité */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-[#0D131F] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                {activeModal === 'mentions' ? 'Mentions Légales' : 'Politique de Confidentialité'}
              </h2>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                aria-label="Fermer la fenêtre"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {activeModal === 'mentions' ? (
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-white mb-1">Éditeur du site</h4>
                  <p>Nom : {siteConfig.legalName}</p>
                  <p>Siège : {siteConfig.location.city}, {siteConfig.location.country}</p>
                  <p>Contact : {siteConfig.contact.emailPlaceholder}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Hébergement</h4>
                  <p>Ce site est hébergé sur l'infrastructure sécurisée de Netlify Inc. (San Francisco, CA, USA).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Propriété intellectuelle</h4>
                  <p>L'ensemble des contenus (textes, graphismes, logos, logiciels) est la propriété exclusive de Build-Main Technologies, sauf mentions contraires.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-white mb-1">Collecte minimale et raisonnée</h4>
                  <p>Build-Main ne collecte que les données strictement indispensables au traitement de vos demandes de contact ou de devis (nom, e-mail, téléphone, description du projet).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Finalité du traitement</h4>
                  <p>Ces données sont uniquement destinées à l'équipe commerciale et technique de Build-Main pour vous apporter une réponse personnalisée. Elles ne sont ni vendues ni cédées à des tiers.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Vos droits</h4>
                  <p>Vous disposez d'un droit permanent d'accès, de rectification et de suppression de vos données en adressant un e-mail à : {siteConfig.contact.emailPlaceholder}.</p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
