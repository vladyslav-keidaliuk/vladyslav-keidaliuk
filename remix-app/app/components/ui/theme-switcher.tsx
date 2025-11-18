import { SunIcon, MoonIcon } from "./icons";
import { useTheme } from "~/lib/use-theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        className="btn btn-ghost btn-square btn-sm"
        aria-label="Toggle theme"
        disabled
      >
        <SunIcon className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Theme switcher clicked, current theme:", theme);
        toggleTheme();
      }}
      className="btn btn-ghost btn-square btn-sm hover:bg-base-200 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
};

