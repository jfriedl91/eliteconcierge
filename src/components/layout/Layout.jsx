import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';

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
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;