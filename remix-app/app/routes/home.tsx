import type { Route } from "./+types/home";
import { HeroSection, StatsSection, SocialLinksSection } from "~/components/sections";
import { PERSONAL_INFO } from "~/constants";
import i18n from "~/i18n";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}` },
    { name: "description", content: i18n.t('hero.description') || "QA Engineer portfolio showcasing testing expertise and automation projects" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <HeroSection />
          <StatsSection />
          <SocialLinksSection />
        </div>
      </div>
    </div>
  );
}
