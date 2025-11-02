import { Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { BriefcaseIcon, EmailIcon } from "~/components/ui/icons";
import { PERSONAL_INFO } from "~/constants";

export const PortfolioHeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="mb-8">
            <Avatar 
              initials={PERSONAL_INFO.avatar.initials}
              alt={PERSONAL_INFO.avatar.alt}
              src={PERSONAL_INFO.avatar.src}
              size="md"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-base-content leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          <div className="badge badge-primary badge-lg mb-6 text-white font-semibold px-4 py-2">
            {PERSONAL_INFO.title}
          </div>
          <p className="text-lg md:text-xl mb-8 text-base-content/80 leading-relaxed max-w-2xl mx-auto">
            Specializing in software testing, web and API testing with automation expertise. 
            Passionate about ensuring quality through comprehensive testing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              href="#projects" 
              variant="primary" 
              size="lg"
              className="w-full sm:w-auto"
              ariaLabel="View my projects"
            >
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button 
              href="#contact"
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto hover:btn-secondary"
              ariaLabel="Contact me"
            >
              <EmailIcon className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="stat bg-base-200/50 rounded-lg backdrop-blur-sm p-4 text-center">
              <div className="stat-value text-primary text-2xl md:text-3xl font-bold">3+</div>
              <div className="stat-desc text-sm md:text-base font-medium">Years Experience</div>
            </div>
            <div className="stat bg-base-200/50 rounded-lg backdrop-blur-sm p-4 text-center">
              <div className="stat-value text-secondary text-2xl md:text-3xl font-bold">50+</div>
              <div className="stat-desc text-sm md:text-base font-medium">Tests Automated</div>
            </div>
            <div className="stat bg-base-200/50 rounded-lg backdrop-blur-sm p-4 text-center">
              <div className="stat-value text-accent text-2xl md:text-3xl font-bold">15+</div>
              <div className="stat-desc text-sm md:text-base font-medium">Projects Tested</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
