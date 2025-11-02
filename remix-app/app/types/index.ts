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
