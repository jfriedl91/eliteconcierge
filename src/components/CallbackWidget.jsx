import React, { useEffect } from "react";

const CallbackWidget = () => {
  useEffect(() => {
    // Polyfills laden
    const polyfillsScript = document.createElement("script");
    polyfillsScript.src = "https://static.office-platform.net/web-components/callback-widget/polyfills.js";
    polyfillsScript.type = "module";
    document.body.appendChild(polyfillsScript);

    // Main Widget laden
    const mainScript = document.createElement("script");
    mainScript.src = "https://static.office-platform.net/web-components/callback-widget/main.js";
    mainScript.type = "module";
    document.body.appendChild(mainScript);

    // Styles laden
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://static.office-platform.net/web-components/callback-widget/styles.css";
    document.head.appendChild(link);

    // Cleanup beim Unmount
    return () => {
      document.body.removeChild(polyfillsScript);
      document.body.removeChild(mainScript);
      document.head.removeChild(link);
    };
  }, []);

  // Farbe für das Widget (dunkler Button, goldener Text/Icon)
  useEffect(() => {
    document.body.style.setProperty("--cb-widget-brand-theme-color", "#21130D");
    document.body.style.setProperty("--cb-widget-brand-color-display-on-brand-theme-color", "#E1C67A");
    return () => {
      document.body.style.removeProperty("--cb-widget-brand-theme-color");
      document.body.style.removeProperty("--cb-widget-brand-color-display-on-brand-theme-color");
    };
  }, []);

  return (
    <callback-widget
      lang="DE"
      position="bottom-right"
      button-style="icon-only"
      button-icon="secretary"
      callback-id="4b8b5642-62a5-4b60-ab7d-7e2b8440626b"
    />
  );
};

export default CallbackWidget;
