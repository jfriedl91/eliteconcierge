import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { LogOut, LayoutDashboard, Users, ArrowLeft, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast({
      title: 'Abgemeldet',
      description: 'Sie wurden erfolgreich abgemeldet.',
    });
    navigate('/admin/login');
  };

  const navLinks = (
    <>
      <NavLink
        to="/admin/dashboard"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center gap-2 text-platinum hover:text-gold transition-colors ${isActive ? 'text-gold' : ''}`
        }
      >
        <LayoutDashboard className="h-4 w-4" />
        Dashboard
      </NavLink>
      <NavLink
        to="/admin/mitglieder"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center gap-2 text-platinum hover:text-gold transition-colors ${isActive ? 'text-gold' : ''}`
        }
      >
        <Users className="h-4 w-4" />
        Mitglieder
      </NavLink>
    </>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 left-0 right-0 bg-secondary/80 backdrop-blur-lg border-b border-gold/20 z-40">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 sm:px-6 h-[70px]">
          <div className="flex items-center gap-6">
            <NavLink to="/admin/dashboard" className="flex items-center gap-2">
              <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/96999a35-6dd1-45e4-b1bf-8f7d1dca9d2a/4668fea12c831ced09ef051baf378529.png" alt="Elite Concierge Logo" className="h-8 sm:h-10" />
              <span className="hidden sm:inline text-sm font-bold text-gold uppercase tracking-wider">Admin</span>
            </NavLink>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={handleLogout} className="text-gold border-gold/50 hover:bg-gold hover:text-background">
              <LogOut className="mr-0 sm:mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Abmelden</span>
            </Button>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-secondary border-b border-gold/20"
            >
              <nav className="flex flex-col items-center gap-4 p-4">
                {navLinks}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <main className="flex-grow pt-[70px]">
        <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex items-center gap-2 mb-6">
                <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => navigate(1)}>
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
            <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;