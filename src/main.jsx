import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';

import '@/index.css';
import { ConsentProvider } from '@/contexts/ConsentContext';
import { HelmetProvider } from 'react-helmet-async';
import { MemberAuthProvider } from '@/contexts/MemberAuthContext';
import { AuthProvider } from '@/contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ConsentProvider>
          <AuthProvider>
            <MemberAuthProvider>
              <App />
            </MemberAuthProvider>
          </AuthProvider>
        </ConsentProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);