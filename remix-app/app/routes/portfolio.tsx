import type { Route } from "./+types/portfolio";
import { Header, Footer } from "~/components/layout";
import { 
  PortfolioHeroSection, 
  AboutSection, 
  ExperienceSection,
  EducationSection,
  SkillsSection, 
  ProjectsSection, 
  ContactSection,
  CalendlySection
} from "~/components/sections";
import { PERSONAL_INFO } from "~/constants";
import i18n from "~/i18n";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${PERSONAL_INFO.name} - QA Engineer Portfolio` },
    { name: "description", content: i18n.t('hero.phero.description') || "QA Engineer portfolio showcasing testing expertise, automation projects, and quality assurance skills" },
  ];
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <PortfolioHeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CalendlySection />
      <ContactSection />
      <Footer />
    </div>
  );
}