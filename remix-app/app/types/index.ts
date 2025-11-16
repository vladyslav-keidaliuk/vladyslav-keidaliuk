// Common types for the application

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  hoverColor: string;
  ariaLabel: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
}

export interface NavItem {
  name: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  avatar: {
    initials: string;
    alt: string;
    src?: string;
  };
}

export interface ProjectInfo {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  duration: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  highlights: string[];
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string | 'Present';
  gpa?: string;
  description?: string;
  achievements?: string[];
  coursework?: string[];
}
