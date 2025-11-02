import { PERSONAL_INFO } from "~/constants";

export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content">
      <aside>
        <p className="font-bold">
          {PERSONAL_INFO.name} <br />{PERSONAL_INFO.title} Portfolio
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a 
            href="https://www.linkedin.com/in/vladyslav-keidaliuk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link link-hover"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/vladyslav-keidaliuk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link link-hover"
          >
            GitHub
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="link link-hover"
          >
            Email
          </a>
        </div>
      </nav>
    </footer>
  );
};
