import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { Phone } from 'lucide-react';

const Layout = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Elite Concierge',
    alternateName: 'ELCONCI',
    url: 'https://elconci.de/',
    logo: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/96999a35-6dd1-45e4-b1bf-8f7d1dca9d2a/4668fea12c831ced09ef051baf378529.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@elconci.de'
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <Header />
          {/* HINWEIS-BANNER KOMMT HIER */}
      <div className="w-full bg-gold/90 text-background flex items-center justify-center py-2 px-4 shadow-lg z-30">
        <Phone className="w-5 h-5 mr-2" />
        <span className="font-semibold tracking-wide">
          Unsere neue Servicerufnummer:&nbsp;
          <a
            href="tel:0800123456789"
            className="underline hover:text-platinum transition-colors duration-200"
          >
            0800 123456789
          </a>
        </span>
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;