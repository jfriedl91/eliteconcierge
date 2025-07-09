import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import { useConsent } from '@/contexts/ConsentContext';
import PageLoader from '@/components/PageLoader';
import AdminLayout from '@/components/layout/AdminLayout';
import MemberLayout from '@/components/layout/MemberLayout';
import ChatbotWidget from "@/components/ChatbotWidget";


const HomePage = lazy(() => import('@/pages/Home'));
const AboutPage = lazy(() => import('@/pages/About'));
const ServicesPage = lazy(() => import('@/pages/Services'));
const PricingPage = lazy(() => import('@/pages/Pricing'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const PrivacyPage = lazy(() => import('@/pages/Privacy'));
const ImprintPage = lazy(() => import('@/pages/Imprint'));
const AgbPage = lazy(() => import('@/pages/Agb'));
const FairUsePage = lazy(() => import('@/pages/FairUse'));
const WiderrufPage = lazy(() => import('@/pages/Widerruf'));
const BlogPage = lazy(() => import('@/pages/Blog'));
const BlogPostPage = lazy(() => import('@/pages/BlogPost'));
const DienstleistungsauftragPage = lazy(() => import('@/pages/Dienstleistungsauftrag'));
const AdminLoginPage = lazy(() => import('@/pages/admin/Login'));
const AdminDashboardPage = lazy(() => import('@/pages/admin/Dashboard'));
const BlogEditPage = lazy(() => import('@/pages/admin/BlogEdit'));
const MemberManagementPage = lazy(() => import('@/pages/admin/MemberManagement'));
const ProtectedRoute = lazy(() => import('@/components/admin/ProtectedRoute'));
const MemberProtectedRoute = lazy(() => import('@/components/member/MemberProtectedRoute'));
const BrandAssetsPage = lazy(() => import('@/pages/BrandAssets'));
const VisitenkartePage = lazy(() => import('@/pages/Visitenkarte'));
const MemberLoginPage = lazy(() => import('@/pages/member/Login'));
const MemberAutoLoginPage = lazy(() => import('@/pages/member/AutoLogin'));
const MemberDashboardPage = lazy(() => import('@/pages/member/Dashboard'));
const VertragWirdGeprueftPage = lazy(() => import('@/pages/VertragWirdGeprueft'));
const AdminMemberDetailPage = lazy(() => import('@/pages/admin/MemberDetail'));


function App() {
  const { hasConsented } = useConsent();
  const location = useLocation();

  return (
    <>
      <div className={`${!hasConsented ? 'pointer-events-none' : ''}`}>
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="ueber-uns" element={<AboutPage />} />
                <Route path="leistungen" element={<ServicesPage />} />
                <Route path="mitgliedschaften" element={<PricingPage />} />
                <Route path="kontakt" element={<ContactPage />} />
                <Route path="datenschutz" element={<PrivacyPage />} />
                <Route path="impressum" element={<ImprintPage />} />
                <Route path="agb" element={<AgbPage />} />
                <Route path="fair-use-policy" element={<FairUsePage />} />
                <Route path="widerruf" element={<WiderrufPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/:slug" element={<BlogPostPage />} />
                <Route path="dienstleistungsauftrag" element={<DienstleistungsauftragPage />} />
                <Route path="vertrag-wird-geprueft" element={<VertragWirdGeprueftPage />} />
                <Route path="brand-assets" element={<BrandAssetsPage />} />
                <Route path="visitenkarte" element={<VisitenkartePage />} />
              </Route>

              <Route path="mitglieder/login" element={<MemberLoginPage />} />
              <Route path="mitglieder/auto-login" element={<MemberAutoLoginPage />} />
              <Route path="admin/login" element={<AdminLoginPage />} />

              <Route 
                path="/mitglieder"
                element={
                  <MemberProtectedRoute>
                    <MemberLayout />
                  </MemberProtectedRoute>
                }
              >
                <Route path="dashboard" element={<MemberDashboardPage />} />
              </Route>

              <Route 
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<AdminDashboardPage />} />
                <Route path="blog/:slug" element={<BlogEditPage />} />
                <Route path="mitglieder" element={<MemberManagementPage />} />
                <Route path="mitglieder/:id" element={<AdminMemberDetailPage />} />
              </Route>
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
      <Toaster />
      <CookieConsentBanner />
      <ChatbotWidget />
    </>
  );
}

export default App;