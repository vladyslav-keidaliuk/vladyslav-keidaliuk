import { MenuIcon, CloseIcon } from "~/components/ui/icons";
import { Button } from "~/components/ui/button";
import { PERSONAL_INFO, NAV_ITEMS } from "~/constants";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-base-100/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a className="text-base-content flex items-center gap-3 text-xl font-bold" href="/">
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
              {PERSONAL_INFO.name}
            </a>
            <div className="flex items-center gap-5 md:hidden">
              <Button
                href="/portfolio#contact"
                variant="primary"
                size="sm"
                className="rounded-full"
                ariaLabel="Get in touch"
              >
                Get In Touch
              </Button>
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
          <div
            id="navbar-collapse"
            className="collapse hidden w-full grow overflow-hidden transition-[height] duration-300 md:flex md:w-fit md:basis-auto"
          >
            <div className="text-base-content flex shrink-0 gap-x-6 gap-y-1 font-medium max-md:flex-col md:items-center md:justify-center md:flex-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={`/portfolio${item.href}`}
                  className="link link-animated text-base-content h-9.5 w-fit py-1.75 hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex grow items-center justify-end gap-4 max-md:hidden">
            <Button
              href="/portfolio#contact"
              variant="primary"
              ariaLabel="Get in touch"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
