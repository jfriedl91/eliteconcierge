import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemberAuth } from '@/contexts/MemberAuthContext';
import PageLoader from '@/components/PageLoader';

const MemberProtectedRoute = ({ children }) => {
  const { memberIsAuthenticated, loading } = useMemberAuth();
  const location = useLocation();

  if (loading) {
    return <PageLoader />;
  }

  if (!memberIsAuthenticated) {
    return <Navigate to="/mitglieder/login" state={{ from: location }} replace />;
  }

  return children;
};

export default MemberProtectedRoute;