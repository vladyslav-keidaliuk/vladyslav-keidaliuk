import { Button } from "~/components/ui/button";
import { LinkedInIcon, EmailIcon, GitHubIcon } from "~/components/ui/icons";

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
              <a 
                href="https://www.linkedin.com/in/vladyslav-keidaliuk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-circle text-info"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-8 h-8" />
              </a>
              <a 
                href="mailto:vladyslav.keidaliuk@gmail.com" 
                className="btn btn-ghost btn-circle text-error"
                aria-label="Send Email"
              >
                <EmailIcon className="w-8 h-8" />
              </a>
              <a 
                href="https://github.com/vladyslav-keidaliuk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-circle text-base-content"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
