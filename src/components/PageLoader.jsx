import React from 'react';
import { Diamond } from 'lucide-react';

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
    <div className="relative flex items-center justify-center">
      <Diamond className="w-16 h-16 text-gold animate-ping absolute" />
      <Diamond className="w-12 h-12 text-gold" />
    </div>
  </div>
);

export default PageLoader;