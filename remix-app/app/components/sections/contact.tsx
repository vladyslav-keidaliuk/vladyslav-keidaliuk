import { useState } from "react";
import { Button } from "~/components/ui/button";
import { LinkedInIcon, EmailIcon, GitHubIcon, GitLabIcon } from "~/components/ui/icons";
import { SOCIAL_LINKS, PERSONAL_INFO } from "~/constants";
import { useTranslation } from "react-i18next";

const iconMap = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  GitLab: GitLabIcon,
  Email: EmailIcon
};

export const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto card bg-base-100 shadow-xl p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">{t('contact.name')}</span>
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.placeholders.name')} 
                className="input input-bordered w-full" 
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">{t('contact.email')}</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.placeholders.email')} 
                className="input input-bordered w-full" 
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">{t('contact.message')}</span>
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered h-24" 
                placeholder={t('contact.placeholders.message')}
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <Button 
                type="submit" 
                variant="primary" 
                size="lg"
                ariaLabel="Send message"
              >
                {t('contact.send')}
              </Button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-lg mb-4">{t('contact.orConnect')}</p>
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
