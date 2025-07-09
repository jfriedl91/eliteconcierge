// src/components/ChatbotWidget.jsx
import { useEffect } from "react";

export default function ChatbotWidget() {
  useEffect(() => {
    // CSS nur einmal laden
    if (!document.getElementById("webchat-widget-css")) {
      const link = document.createElement("link");
      link.id = "webchat-widget-css";
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://webchat.office-platform.net/static/css/web-chat-widget.css";
      document.head.appendChild(link);
    }

    // JS nur einmal laden
    if (!document.getElementById("webchat-widget-js")) {
      const script = document.createElement("script");
      script.id = "webchat-widget-js";
      script.src = "https://webchat.office-platform.net/static/js/web-chat-widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Widget-Konfiguration
    window.webChatWidgetTitle = "Elite Concierge";
    window.webChatWidgetSubtitle = "Ihr persönlicher 24/7 Chat-Service";
    window.webChatWidgetChannelId = "049e1b2e484f7c1f1c8f0714e4c9b148";
    window.webChatWidgetTheme = "#E1C67A"; // luxuriöses Gold
    window.webChatWidgetLanguageId = "1";
    window.webChatWidgetPopBehavior = "minimized";
  }, []);

  return <div id="web-chat-widget" />;
}
