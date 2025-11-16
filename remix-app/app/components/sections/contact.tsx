import { Button } from "~/components/ui/button";
import { LinkedInIcon, EmailIcon, GitHubIcon, GitLabIcon } from "~/components/ui/icons";
import { SOCIAL_LINKS } from "~/constants";

const iconMap = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  GitLab: GitLabIcon,
  Email: EmailIcon
};

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto card bg-base-100 shadow-xl p-8">
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
            </div>
            <div className="form-control mt-6">
              <Button 
                type="submit" 
                variant="primary" 
                size="lg"
                ariaLabel="Send message"
              >
                Send Message
              </Button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-lg mb-4">Or connect with me directly:</p>
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
                    <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
