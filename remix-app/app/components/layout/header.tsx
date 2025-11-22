import { MenuIcon, CloseIcon } from "~/components/ui/icons";
import { Button } from "~/components/ui/button";
import { ThemeSwitcher } from "~/components/ui/theme-switcher";
import { PERSONAL_INFO, NAV_ITEMS } from "~/constants";

export const Header = () => {
  const handleLinkClick = () => {
    const collapseElement = document.getElementById('navbar-collapse');
    const toggleBtn = document.querySelector('[data-collapse="#navbar-collapse"]');
    
    if (collapseElement && !collapseElement.classList.contains('hidden') && toggleBtn instanceof HTMLElement) {
      toggleBtn.click();
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-base-100/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between gap-4">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a className="text-base-content flex items-center gap-2 text-lg lg:text-xl font-bold" href="/">
              <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1 shadow-lg overflow-hidden">
                {PERSONAL_INFO.avatar.src ? (
                  <img 
                    src={PERSONAL_INFO.avatar.src} 
                    alt={PERSONAL_INFO.avatar.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
                    {PERSONAL_INFO.avatar.initials}
                  </div>
                )}
              </div>
              <span className="hidden sm:inline">{PERSONAL_INFO.name}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-4 xl:gap-6 font-medium">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={`/portfolio${item.href}`}
                  className="link link-animated text-base-content hover:text-primary transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <ThemeSwitcher />
            <Button
              href="/portfolio#contact"
              variant="primary"
              size="sm"
              ariaLabel="Get in touch"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Switcher */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeSwitcher />
            <button
              type="button"
              className="collapse-toggle btn btn-outline btn-secondary btn-square btn-sm"
              data-collapse="#navbar-collapse"
              aria-controls="navbar-collapse"
              aria-label="Toggle navigation"
            >
              <MenuIcon className="collapse-open:hidden" />
              <CloseIcon className="collapse-open:block hidden" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="navbar-collapse"
          className="collapse hidden w-full overflow-hidden transition-[height] duration-300 lg:hidden absolute top-full left-0 right-0 shadow-xl"
        >
          <div className="flex flex-col gap-6 p-6 bg-base-100 border-t border-base-200 h-screen sm:h-auto">
            <div className="flex flex-col items-center gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={`/portfolio${item.href}`}
                  className="text-lg font-medium text-base-content/80 hover:text-primary transition-colors py-2"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 pt-4 border-t border-base-200/50">
              <p className="text-sm text-base-content/60">Ready to start a project?</p>
              <Button
                href="/portfolio#contact"
                variant="primary"
                size="lg"
                className="w-full max-w-xs shadow-lg"
                ariaLabel="Get in touch"
                onClick={handleLinkClick}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
