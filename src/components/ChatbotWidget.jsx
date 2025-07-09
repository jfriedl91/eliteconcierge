// src/components/ChatbotWidget.jsx
import { useEffect } from "react";

export default function ChatbotWidget() {
  useEffect(() => {
    // CSS nur einmal laden
   

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
