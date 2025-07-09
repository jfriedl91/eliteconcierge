import React from 'react';

const ConsentContext = React.createContext(null);

const COOKIE_CONSENT_KEY = 'cookie-consent-given';

export function ConsentProvider({ children }) {
  const [hasConsented, setHasConsented] = React.useState(null);

  // Lade beim ersten Rendern den Wert aus dem localStorage (als Boolean oder null)
  React.useEffect(() => {
    try {
      const item = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (item === "true") setHasConsented(true);
      else if (item === "false") setHasConsented(false);
      else setHasConsented(null);
    } catch (error) {
      console.error("Failed to load consent from localStorage", error);
      setHasConsented(null);
    }
  }, []);
  
  const value = React.useMemo(() => ({
    hasConsented,
    updateConsent: (consented) => {
        try {
            window.localStorage.setItem(COOKIE_CONSENT_KEY, consented ? "true" : "false");
            setHasConsented(consented);
        } catch(error) {
            console.error("Failed to save consent to localStorage", error);
        }
    }
  }), [hasConsented]);

  // WICHTIG: NICHT die ganze App blockieren, sondern nur Banner steuern!
  return React.createElement(ConsentContext.Provider, { value: value }, children);
};

export const useConsent = () => {
  const context = React.useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};