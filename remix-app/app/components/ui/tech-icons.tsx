// Technology icons component for displaying tech stack with logos

interface TechIconProps {
  className?: string;
}

// Individual technology icon components
export const SeleniumIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" 
    alt="Selenium" 
    className={className}
  />
);

export const CSharpIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" 
    alt="C#" 
    className={className}
  />
);

export const AzureIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" 
    alt="Azure" 
    className={className}
  />
);

export const SqlServerIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" 
    alt="SQL Server" 
    className={className}
  />
);

export const PostmanIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" 
    alt="Postman" 
    className={className}
  />
);

export const JavaScriptIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
    alt="JavaScript" 
    className={className}
  />
);

export const DockerIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" 
    alt="Docker" 
    className={className}
  />
);

export const JenkinsIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" 
    alt="Jenkins" 
    className={className}
  />
);

export const PythonIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
    alt="Python" 
    className={className}
  />
);

export const GitIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
    alt="Git" 
    className={className}
  />
);

export const KubernetesIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" 
    alt="Kubernetes" 
    className={className}
  />
);

export const GrafanaIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" 
    alt="Grafana" 
    className={className}
  />
);

export const AWSIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" 
    alt="AWS" 
    className={className}
  />
);

export const JiraIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" 
    alt="Jira" 
    className={className}
  />
);

// Technology icon mapping
const techIconMap: Record<string, React.ComponentType<TechIconProps>> = {
  "Selenium WebDriver": SeleniumIcon,
  "Selenium": SeleniumIcon,
  "C#": CSharpIcon,
  "NUnit": CSharpIcon, // Using C# icon for NUnit
  "Azure DevOps": AzureIcon,
  "Azure": AzureIcon,
  "SQL Server": SqlServerIcon,
  "SQL": SqlServerIcon,
  "Postman": PostmanIcon,
  "Newman": PostmanIcon, // Newman is Postman's CLI
  "JavaScript": JavaScriptIcon,
  "Docker": DockerIcon,
  "Jenkins": JenkinsIcon,
  "Appium": PythonIcon, // Using Python icon for Appium
  "Python": PythonIcon,
  "Pytest": PythonIcon,
  "Sauce Labs": SeleniumIcon, // Using Selenium icon for Sauce Labs
  "Git": GitIcon,
  "Apache JMeter": JavaScriptIcon, // Using generic icon for JMeter
  "JMeter": JavaScriptIcon,
  "Grafana": GrafanaIcon,
  "InfluxDB": GrafanaIcon, // Using Grafana icon for InfluxDB
  "AWS CloudWatch": AWSIcon,
  "AWS": AWSIcon,
  "Kubernetes": KubernetesIcon,
  "SonarQube": JavaScriptIcon, // Using generic icon for SonarQube
  "OWASP ZAP": SeleniumIcon, // Using generic icon for OWASP ZAP
  "Burp Suite": SeleniumIcon, // Using generic icon for Burp Suite
  "Nessus": SeleniumIcon, // Using generic icon for Nessus
  "Python Scripts": PythonIcon,
  "Jira": JiraIcon,
  "TypeScript": JavaScriptIcon, // Using JS icon for TypeScript
  "JavaScript/TypeScript": JavaScriptIcon
};

// Generic fallback icon for unknown technologies
export const GenericTechIcon = ({ className = "w-6 h-6" }: TechIconProps) => (
  <div className={`${className} bg-base-300 rounded flex items-center justify-center text-xs font-bold text-base-content`}>
    ?
  </div>
);

// Main component to get the appropriate icon for a technology
interface TechIconDisplayProps {
  technology: string;
  className?: string;
}

export const TechIcon = ({ technology, className = "w-6 h-6" }: TechIconDisplayProps) => {
  const IconComponent = techIconMap[technology] || GenericTechIcon;
  return <IconComponent className={className} />;
};
