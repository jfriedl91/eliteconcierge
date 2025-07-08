import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import { Helmet } from 'react-helmet-async';

const MemberAutoLoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // This page is no longer used for auto-login.
    // It redirects to the "under review" page.
    navigate('/vertrag-wird-geprueft');
  }, [navigate]);

  return (
    <PageWrapper>
      <Helmet>
        <title>Weiterleitung... | ELCONCI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-platinum p-4">
        <p className="text-platinum/80 text-center">Sie werden weitergeleitet...</p>
      </div>
    </PageWrapper>
  );
};

export default MemberAutoLoginPage;