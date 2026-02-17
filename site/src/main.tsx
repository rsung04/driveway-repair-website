import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

function loadTrackingScripts() {
  // Google Tag Manager
  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-W9P2QLFN";
  document.head.appendChild(gtmScript);
  window.dataLayer?.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  // Facebook Pixel
  setTimeout(() => {
    const fbScript = document.createElement("script");
    fbScript.async = true;
    fbScript.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(fbScript);
    fbScript.onload = () => {
      if (typeof window.fbq === "function") {
        window.fbq("init", "FACEBOOK_PIXEL_ID");
        window.fbq("track", "PageView");
      }
    };
  }, 100);
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// Load tracking scripts after React hydration
loadTrackingScripts();
