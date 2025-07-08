import React, { useState, useEffect, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useConsent } from '@/contexts/ConsentContext';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/ueber-uns', text: 'Über uns' },
  { to: '/leistungen', text: 'Leistungen' },
  { to: '/mitgliedschaften', text: 'Mitgliedschaften' },
  { to: '/blog', text: 'Blog' },
  { to: '/kontakt', text: 'Kontakt' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { hasConsented } = useConsent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const headerZIndex = hasConsented ? 30 : 10;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0"
        style={{
          backgroundColor: isScrolled || isMenuOpen ? 'rgba(17, 17, 17, 0.9)' : 'transparent',
          backdropFilter: isScrolled || isMenuOpen ? 'blur(10px)' : 'none',
          borderBottom: isScrolled || isMenuOpen ? '1px solid rgba(207, 174, 87, 0.2)' : '1px solid transparent',
          zIndex: headerZIndex,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 h-[80px]">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/96999a35-6dd1-45e4-b1bf-8f7d1dca9d2a/4668fea12c831ced09ef051baf378529.png" alt="Elite Concierge Logo" className="h-12" />
          </NavLink>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-platinum hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-gold after:scale-x-0 after:origin-left after:transition-transform ${
                    isActive ? 'text-gold after:scale-x-100' : ''
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-platinum hover:text-gold transition-colors z-50 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-background/95 backdrop-blur-lg"
            style={{ zIndex: headerZIndex - 1 }}
          >
            <motion.nav 
              className="flex flex-col items-center justify-center h-full gap-8 pt-[80px]"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  variants={{
                    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
                    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } }
                  }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl font-serif ${isActive ? 'text-gold' : 'text-platinum'} hover:text-gold transition-colors`
                    }
                  >
                    {link.text}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Header);