import React from 'react';

const ConsentContext = React.createContext(null);

const COOKIE_CONSENT_KEY = 'cookie-consent-given';

export function ConsentProvider({ children }) {
  const [hasConsented, setHasConsented] = React.useState(null);

  React.useEffect(() => {
    try {
      const item = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      setHasConsented(!!item);
    } catch (error) {
      console.error("Failed to load consent from localStorage", error);
      setHasConsented(false);
    }
  }, []);
  
  const value = React.useMemo(() => ({
    hasConsented,
    updateConsent: (consented) => {
        try {
            if(consented) {
                window.localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
            } else {
                window.localStorage.removeItem(COOKIE_CONSENT_KEY);
            }
            setHasConsented(consented);
        } catch(error) {
            console.error("Failed to save consent to localStorage", error);
        }
    }
  }), [hasConsented]);
  
  if (hasConsented === null) {
      return null;
  }

  return React.createElement(ConsentContext.Provider, { value: value }, children);
};

export const useConsent = () => {
  const context = React.useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};