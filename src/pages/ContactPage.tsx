import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, 
  MessageCircle, Clock, ShieldCheck 
} from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../config/site';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  service: string;
  message: string;
  consent: boolean;
  'bot-field': string; // Honeypot
}

export const ContactPage: React.FC = () => {
  const location = useLocation();

  // Parse URL search params if preselected (e.g. ?service=saas&subject=...)
  const queryParams = new URLSearchParams(location.search);
  const preselectedService = queryParams.get('service') || '';
  const preselectedSubject = queryParams.get('subject') || '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: preselectedService || 'logiciel',
    message: preselectedSubject ? `Bonjour, je vous contacte au sujet de : ${preselectedSubject}.\n\n` : '',
    consent: false,
    'bot-field': '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Veuillez renseigner votre nom complet (au moins 2 caractères).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Veuillez saisir une adresse e-mail valide (ex: contact@exemple.com).';
    }

    if (!formData.service) {
      newErrors.service = 'Veuillez choisir un domaine de besoin.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Veuillez décrire brièvement votre besoin ou projet (au moins 15 caractères).';
    }

    if (!formData.consent) {
      newErrors.consent = 'Veuillez accepter le traitement des données pour nous permettre de vous répondre.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData['bot-field']) {
      // Silently pretend success to trick bots
      setSubmitStatus('success');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload: Record<string, string> = {
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Non renseigné',
        organization: formData.organization || 'Particulier / Non renseigné',
        service: formData.service,
        message: formData.message,
        consent: formData.consent ? 'yes' : 'no',
      };

      // In production deployed on Netlify, this sends directly to Netlify Forms endpoint.
      // In local dev, fetch('/', { method: 'POST' }) might return a 404 or local html.
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      });

      // Netlify will return OK or redirect on success
      if (response.ok || response.status === 200 || response.type === 'opaque' || window.location.hostname === 'localhost') {
        setSubmitStatus('success');
        setStatusMessage('Votre message a bien été envoyé à l\'équipe Build-Main. Nous vous répondrons sous 24h à 48h ouvrées.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          service: 'logiciel',
          message: '',
          consent: false,
          'bot-field': '',
        });
        setErrors({});
      } else {
        throw new Error(`Code serveur: ${response.status}`);
      }
    } catch (err) {
      // In local development, explain cleanly
      if (window.location.hostname === 'localhost') {
        setSubmitStatus('success');
        setStatusMessage('Formulaire validé avec succès en environnement local ! Lors du déploiement sur Netlify, les données seront directement réceptionnées via Netlify Forms.');
      } else {
        setSubmitStatus('error');
        setStatusMessage('Une difficulté technique est survenue lors de l\'envoi. Vous pouvez également nous écrire directement à : ' + siteConfig.contact.emailPlaceholder);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact & Demande de Projet"
        description="Contactez l'équipe de Build-Main en Côte d'Ivoire. Discutons de vos besoins en logiciels, solutions SaaS, agents d'IA et automatisation de processus."
        canonicalPath="/contact"
      />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 hero-grid pointer-events-none" />
        <div className="absolute top-36 right-1/4 w-96 h-96 bg-amber-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Contact & Devis"
            title="Vous avez un projet ?"
            highlightedWord="Parlons-en concrètement."
            subtitle="Remplissez le formulaire ci-dessous ou échangez directement avec nous. Nous prenons le temps d'étudier chaque situation pour proposer une approche pragmatique et adaptée à votre budget."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Coords & WhatsApp & Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Coords Card */}
              <div className="rounded-3xl bg-[#0B101C]/90 border border-white/[0.08] p-7 sm:p-8 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6">
                  Nos Coordonnées
                </h3>

                <div className="space-y-6 text-sm text-slate-300">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Localisation</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{siteConfig.location.city}, {siteConfig.location.country}</p>
                      <p className="text-[11px] text-slate-500 mt-1">Rayonnement : Côte d'Ivoire & Afrique de l'Ouest</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Courrier électronique</h4>
                      <a 
                        href={`mailto:${siteConfig.contact.emailPlaceholder}`} 
                        className="text-xs text-amber-400 hover:underline block mt-0.5"
                      >
                        {siteConfig.contact.emailPlaceholder}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Téléphone professionnel</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{siteConfig.contact.phonePlaceholder}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Disponibilité</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{siteConfig.contact.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Configurable Card */}
              <div className="rounded-3xl bg-[#0B101C]/90 border border-white/[0.08] p-7 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Échange WhatsApp</h4>
                </div>

                {siteConfig.contact.whatsappNumber ? (
                  <div>
                    <p className="text-xs text-slate-300 mb-4">
                      Discutez directement en messagerie instantanée avec notre équipe pour une première orientation.
                    </p>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Bonjour%20Build-Main,%20je%20souhaite%20%C3%A9changer%20sur%20un%20projet.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shadow-lg shadow-emerald-500/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ouvrir WhatsApp officiel</span>
                    </a>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-400">
                    <p className="font-medium text-slate-300 mb-1">
                      Lien direct WhatsApp en cours de configuration
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Le bouton direct s'activera automatiquement dès l'ajout du numéro WhatsApp officiel dans la configuration du site.
                    </p>
                  </div>
                )}
              </div>

              {/* Reassurance Box */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-white block mb-0.5">Confidentialité garantie :</strong> 
                  Vos coordonnées et descriptions de projet ne font l'objet d'aucun partage commercial et restent strictement réservées à notre équipe.
                </p>
              </div>

            </div>

            {/* Right Column: Complete Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#0B101C]/90 border border-white/[0.1] p-8 sm:p-10 shadow-2xl relative">
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Formulaire de contact & devis
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-8">
                  Les champs marqués d'une astérisque (<span className="text-amber-400">*</span>) sont obligatoires.
                </p>

                {/* Status Banners */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <strong className="block text-emerald-400 mb-0.5">Message transmis avec succès !</strong>
                      <span>{statusMessage}</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-3 animate-in fade-in">
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                    <div>
                      <strong className="block text-red-400 mb-0.5">Erreur de transmission</strong>
                      <span>{statusMessage}</span>
                    </div>
                  </div>
                )}

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  {/* Hidden inputs required for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Anti-spam Honeypot field (hidden from humans) */}
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Ne pas renseigner si vous êtes humain :
                      <input
                        type="text"
                        name="bot-field"
                        value={formData['bot-field']}
                        onChange={(e) => setFormData({ ...formData, 'bot-field': e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nom complet ou Civilité <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Ex: Kouamé Jean-Marc"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-white/[0.1] focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Adresse e-mail <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="jean.kouame@entreprise.ci"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-white/[0.1] focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Téléphone / WhatsApp <span className="text-slate-500">(optionnel)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="+225 07..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Organization & Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-org" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Organisation ou Entreprise <span className="text-slate-500">(optionnel)</span>
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        name="organization"
                        placeholder="Ex: Coopérative, Association, PME..."
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Type de besoin <span className="text-amber-400">*</span>
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1526] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      >
                        <option value="logiciel">Développement Logiciel / Web sur mesure</option>
                        <option value="saas">Plateforme SaaS (ex: Build-Membres)</option>
                        <option value="agent-ia">Agents d'Intelligence Artificielle</option>
                        <option value="automatisation">Automatisation des processus métiers</option>
                        <option value="integration-ia">Intégration pragmatique de l'IA</option>
                        <option value="autre">Conseil technologique & Autre besoin</option>
                      </select>
                      {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Description de votre projet ou difficulté à résoudre <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Expliquez-nous brièvement votre activité, ce qui vous prend trop de temps, ou l'outil que vous aimeriez mettre en place..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-white/[0.1] focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Consent checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-400 focus:ring-offset-0"
                      />
                      <span className="text-xs text-slate-400 leading-normal">
                        J'accepte que les données saisies soient utilisées par Build-Main pour me recontacter dans le cadre de ma demande. <span className="text-amber-400">*</span>
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs text-red-400 mt-1">{errors.consent}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                      isLoading={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande'}
                    </Button>
                  </div>

                  <p className="text-center text-[11px] text-slate-500 mt-3">
                    Traitement confidentiel • Aucune sollicitation commerciale abusive
                  </p>
                </form>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
