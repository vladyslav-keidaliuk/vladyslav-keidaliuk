import { LinkedInIcon, GitHubIcon, GitLabIcon, EmailIcon } from "~/components/ui/icons";
import { SOCIAL_LINKS } from "~/constants";

const iconMap = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  GitLab: GitLabIcon,
  Email: EmailIcon
};

export const SocialLinksSection = () => {
  return (
    <div className="flex justify-center items-center gap-6 px-4">
      <div className="text-center">
        <p className="text-sm text-base-content/60 mb-4">Connect with me</p>
        <div className="flex justify-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const IconComponent = iconMap[link.name as keyof typeof iconMap];
            
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`btn btn-circle btn-outline ${link.hoverColor} transition-all duration-300 group`}
                aria-label={link.ariaLabel}
              >
                <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
