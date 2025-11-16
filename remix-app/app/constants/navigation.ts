import type { NavItem } from "~/types";

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

// Social media links
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vladyslav-keidaliuk",
    hoverColor: "hover:btn-primary",
    ariaLabel: "LinkedIn Profile"
  },
  {
    name: "GitHub", 
    href: "https://github.com/vladyslav-keidaliuk",
    hoverColor: "hover:btn-secondary",
    ariaLabel: "GitHub Profile"
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/vladyslav-keidaliuk", 
    hoverColor: "hover:btn-accent",
    ariaLabel: "GitLab Profile"
  },
  {
    name: "Email",
    href: "mailto:vladyslav.keidaliuk@gmail.com",
    hoverColor: "hover:btn-info",
    ariaLabel: "Send Email"
  }
];
