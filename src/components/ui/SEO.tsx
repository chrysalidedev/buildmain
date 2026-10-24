import React, { useEffect } from 'react';
import { siteConfig } from '../../config/site';

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.mission,
  canonicalPath = '',
  type = 'website',
}) => {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonicalUrl = `${siteConfig.siteUrl}${canonicalPath}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to safely set meta tags
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow');

    // 3. Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', siteConfig.name);

    // 4. Twitter
    setMetaTag('property', 'twitter:title', fullTitle);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:url', canonicalUrl);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Schema.org JSON-LD
    let scriptTag = document.getElementById('schema-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteConfig.siteUrl}/#organization`,
          name: siteConfig.name,
          legalName: siteConfig.legalName,
          url: siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}/favicon.svg`,
          slogan: siteConfig.slogan,
          description: siteConfig.mission,
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.location.city,
            addressCountry: siteConfig.location.country,
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: siteConfig.contact.emailPlaceholder,
            availableLanguage: ['French', 'English'],
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${siteConfig.siteUrl}/#website`,
          url: siteConfig.siteUrl,
          name: siteConfig.name,
          description: siteConfig.slogan,
          publisher: {
            '@id': `${siteConfig.siteUrl}/#organization`,
          },
          inLanguage: 'fr-FR',
        },
      ],
    };

    scriptTag.text = JSON.stringify(schemaData);
  }, [fullTitle, description, canonicalUrl, type]);

  return null;
};
