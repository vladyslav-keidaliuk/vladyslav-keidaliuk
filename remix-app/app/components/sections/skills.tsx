import { useTranslation } from "react-i18next";

interface SkillCategory {
  key: string;
  color: string;
  skills: Array<{
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient' | 'Familiar';
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    key: "testing",
    color: "text-primary",
    skills: [
      { name: "Test Automation", level: "Expert" },
      { name: "Web Testing", level: "Expert" },
      { name: "API Testing", level: "Expert" },
      { name: "UI Automation", level: "Advanced" },
    ]
  },
  {
    key: "tools",
    color: "text-secondary",
    skills: [
      { name: "Selenium WebDriver", level: "Expert" },
      { name: "Cypress", level: "Advanced" },
      { name: "Postman", level: "Expert" },
      { name: "Jira", level: "Proficient" },
    ]
  },
  {
    key: "languages",
    color: "text-accent",
    skills: [
      { name: "C#", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "JavaScript/TypeScript", level: "Proficient" },
    ]
  },
  {
    key: "databases",
    color: "text-info",
    skills: [
      { name: "SQL", level: "Expert" },
      { name: "Azure DevOps", level: "Advanced" },
      { name: "AWS", level: "Familiar" },
    ]
  },
  {
    key: "methodologies",
    color: "text-warning",
    skills: [
      { name: "Agile/Scrum", level: "Expert" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Git", level: "Expert" },
    ]
  }
];

const getBadgeColor = (level: string) => {
  switch (level) {
    case 'Expert': return 'badge-primary';
    case 'Advanced': return 'badge-secondary';
    case 'Proficient': return 'badge-accent';
    case 'Familiar': return 'badge-info';
    default: return 'badge-neutral';
  }
};

export const SkillsSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className={`card-title ${category.color}`}>{t(`skills.categories.${category.key}`)}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      <div className={`badge ${getBadgeColor(skill.level)}`}>
                        {skill.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
