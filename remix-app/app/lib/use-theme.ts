import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  
  // Default to dark theme since the site was designed for dark
  // But still respect system preference if user hasn't set a preference
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  
  return "dark";
}

function applyTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  
  const root = document.documentElement;
  
  // Apply dark class for Tailwind dark mode
  if (theme === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
  }
  
  // Debug log
  console.log("Theme applied:", theme, "Has dark class:", root.classList.contains("dark"));
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get initial theme from storage or system preference
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      applyTheme(theme);
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      // Apply immediately for instant feedback
      if (typeof window !== "undefined") {
        applyTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      }
      return newTheme;
    });
  };

  return { theme, toggleTheme, mounted };
}

