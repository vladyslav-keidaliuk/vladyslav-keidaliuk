import { STATS } from "~/constants";
import { useTranslation } from "react-i18next";

export const StatsSection = () => {
  const { t } = useTranslation();
  
  // Map keys for translation
  const getTranslationKey = (label: string) => {
    if (label.includes("Experience")) return "experience";
    if (label.includes("Tests")) return "tests";
    if (label.includes("Projects")) return "projects";
    return label.toLowerCase();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto px-4 mb-12">
      {STATS.map((stat, index) => {
        const key = getTranslationKey(stat.label);
        return (
          <div 
            key={index}
            className="stat bg-base-200/50 rounded-lg backdrop-blur-sm p-4 text-center"
          >
            <div className={`stat-value text-${stat.color} text-2xl md:text-3xl font-bold`}>
              {stat.value}
            </div>
            <div className="stat-desc text-sm md:text-base font-medium">
              {t(`stats.${key}.label`)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
