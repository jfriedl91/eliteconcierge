import React, { memo } from 'react';
import { Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-t-gold/20 py-12">
      <div className="container mx-auto text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Diamond className="w-6 h-6 text-gold" />
          <p className="font-serif text-xl text-platinum">Elite Concierge</p>
        </div>
        <p className="mb-4 text-sm">Ihr Leben. Unser Service. Ihre Zeit zählt.</p>
        <div className="flex justify-center gap-4 text-sm text-platinum/60 flex-wrap">
          <span>© 2025 Elite Concierge</span>
          <span>|</span>
          <Link to="/mitglieder/login" className="hover:text-gold transition-colors duration-300">
            Mitgliederbereich
          </Link>
          <span>|</span>
          <Link to="/widerruf" className="hover:text-gold transition-colors duration-300">
            Widerruf
          </Link>
          <span>|</span>
          <Link to="/fair-use-policy" className="hover:text-gold transition-colors duration-300">
            Fair Use Policy
          </Link>
          <span>|</span>
          <Link to="/datenschutz" className="hover:text-gold transition-colors duration-300">
            Datenschutz
          </Link>
          <span>|</span>
          <Link to="/agb" className="hover:text-gold transition-colors duration-300">
            AGB
          </Link>
          <span>|</span>
          <Link to="/impressum" className="hover:text-gold transition-colors duration-300">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);