import { useLocation } from "react-router";
import { useEffect } from "react";

import type { IStaticMethods } from "flyonui/flyonui";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export function useFlyonUI() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonUI = async () => {
      await import("flyonui/flyonui");
      
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };

    loadFlyonUI();
  }, [location.pathname]);
}

