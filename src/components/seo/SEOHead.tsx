import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { heroImage, siteSeo } from '@/data/bambu';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

function buildTitle(pageTitle?: string): string {
  if (!pageTitle || pageTitle === siteSeo.name) {
    return `${siteSeo.name} — ${siteSeo.tagline}`;
  }
  return `${pageTitle} | ${siteSeo.name}`;
}

/**
 * SEO component for managing page meta tags, Open Graph, Twitter Cards and JSON-LD.
 */
export function SEOHead({
  title,
  description,
  image = heroImage,
  imageAlt = `Paisagem do Sana — ${siteSeo.name}`,
  type = 'website',
  noindex = false,
}: SEOHeadProps) {
  const location = useLocation();

  const fullTitle = buildTitle(title);
  const fullDescription = description || siteSeo.description;
  const fullUrl = `${siteSeo.siteUrl}${location.pathname}`;
  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }

      element.setAttribute('href', href);
    };

    updateMetaTag('description', fullDescription);
    updateMetaTag('keywords', siteSeo.keywords.join(', '));
    updateMetaTag('author', siteSeo.name);
    updateMetaTag('robots', robotsContent);
    updateMetaTag('theme-color', siteSeo.themeColor);

    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', fullDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:alt', imageAlt, true);
    updateMetaTag('og:site_name', siteSeo.name, true);
    updateMetaTag('og:locale', siteSeo.locale, true);

    updateMetaTag('twitter:card', siteSeo.twitterCard);
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', fullDescription);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', imageAlt);

    updateLinkTag('canonical', fullUrl);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteSeo.siteUrl}/#website`,
          url: siteSeo.siteUrl,
          name: siteSeo.name,
          description: siteSeo.description,
          inLanguage: 'pt-BR',
        },
        {
          '@type': 'Organization',
          '@id': `${siteSeo.siteUrl}/#organization`,
          name: siteSeo.name,
          url: siteSeo.siteUrl,
          logo: `${siteSeo.siteUrl}/favicon.svg`,
          description: siteSeo.description,
          areaServed: {
            '@type': 'Place',
            name: 'Sana, Macaé, Rio de Janeiro, Brasil',
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${fullUrl}#webpage`,
          url: fullUrl,
          name: fullTitle,
          description: fullDescription,
          isPartOf: { '@id': `${siteSeo.siteUrl}/#website` },
          about: { '@id': `${siteSeo.siteUrl}/#organization` },
          inLanguage: 'pt-BR',
        },
      ],
    };

    const scriptId = 'bambu-json-ld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [fullTitle, fullDescription, fullUrl, image, imageAlt, type, robotsContent]);

  return null;
}
