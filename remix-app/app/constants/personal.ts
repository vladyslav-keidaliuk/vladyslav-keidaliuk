import type { PersonalInfo, StatItem } from "~/types";

// Personal information
export const PERSONAL_INFO: PersonalInfo = {
  name: "Vladyslav Keidaliuk",
  title: "QA Engineer",
  description: "Passionate about ensuring software quality through comprehensive testing, automation frameworks, and continuous improvement processes",
  email: "vladyslav.keidaliuk@gmail.com",
  calendlyUrl: "https://calendly.com/vladyslav-keidaliuk/30min",
  avatar: {
    initials: "VK",
    alt: "Vladyslav Keidaliuk",
    src: "https://media.licdn.com/dms/image/v2/D4E03AQFDiRtOVvql2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712087131262?e=1765411200&v=beta&t=e7qS6Y-7mPfZQRaQfssqI--dqzlyiSU5flnXGmX5S4Q"
  }
};

// Statistics for home page
export const STATS: StatItem[] = [
  {
    value: "3+",
    label: "Years Experience",
    description: "Years in QA",
    color: "primary"
  },
  {
    value: "50+",
    label: "Tests Automated",
    description: "Automated Tests",
    color: "secondary"
  },
  {
    value: "15+",
    label: "Projects Tested",
    description: "Projects Completed",
    color: "accent"
  }
];
