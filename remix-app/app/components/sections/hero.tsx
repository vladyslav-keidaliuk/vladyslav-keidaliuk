import { Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { BriefcaseIcon, EmailIcon } from "~/components/ui/icons";
import { PERSONAL_INFO } from "~/constants";

export const HeroSection = () => {
  return (
    <>
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
      
      <p className="text-lg md:text-xl mb-8 text-base-content/80 leading-relaxed max-w-2xl mx-auto px-4">
        {PERSONAL_INFO.description}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button 
          to="/portfolio" 
          variant="primary" 
          size="lg"
          className="w-full sm:w-auto"
          ariaLabel="View my portfolio"
        >
          <BriefcaseIcon className="w-5 h-5 mr-2" />
          View My Work
        </Button>
        <Button 
          href={`mailto:${PERSONAL_INFO.email}`}
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto hover:btn-secondary"
          ariaLabel="Send me an email"
        >
          <EmailIcon className="w-5 h-5 mr-2" />
          Get In Touch
        </Button>
      </div>
    </>
  );
};
