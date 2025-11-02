import type { ProjectInfo } from "~/types";

// Project data
export const PROJECTS: ProjectInfo[] = [
  {
    id: "ecommerce-automation",
    title: "E-commerce Test Automation Suite",
    description: "Comprehensive end-to-end test automation framework for a major e-commerce platform, covering user journeys from product browsing to checkout completion.",
    technologies: ["Selenium WebDriver", "C#", "NUnit", "Azure DevOps", "SQL Server"],
    category: "Web Automation",
    duration: "6 months",
    status: "Completed",
    highlights: [
      "Reduced manual testing time by 70%",
      "Achieved 95% test coverage",
      "Integrated with CI/CD pipeline"
    ],
    fullDescription: "This comprehensive test automation project transformed the quality assurance process for a major e-commerce platform. The framework covers complete user journeys from product discovery to purchase completion, ensuring robust testing across all critical business flows.",
    challenges: [
      "Complex user workflows with multiple payment methods",
      "Dynamic content and real-time inventory updates",
      "Cross-browser compatibility requirements",
      "Integration with existing CI/CD pipeline"
    ],
    solutions: [
      "Implemented Page Object Model for maintainable test structure",
      "Created custom wait strategies for dynamic content",
      "Developed cross-browser testing matrix",
      "Built custom reporting dashboard for stakeholders"
    ],
    results: [
      "70% reduction in manual testing effort",
      "95% automated test coverage achieved",
      "50% faster release cycles",
      "Zero critical bugs in production post-implementation"
    ]
  },
  {
    id: "api-testing-framework",
    title: "Microservices API Testing Framework",
    description: "Robust API testing framework designed for microservices architecture, featuring automated contract testing and performance validation.",
    technologies: ["Postman", "Newman", "JavaScript", "Docker", "Jenkins"],
    category: "API Testing",
    duration: "4 months",
    status: "Completed",
    highlights: [
      "Automated 200+ API endpoints",
      "Contract testing implementation",
      "Performance benchmarking"
    ],
    fullDescription: "Developed a comprehensive API testing framework specifically designed for microservices architecture. The framework ensures API reliability, performance, and contract compliance across all service interactions.",
    challenges: [
      "Testing complex microservices dependencies",
      "Ensuring contract compliance between services",
      "Managing test data across multiple environments",
      "Performance testing under various load conditions"
    ],
    solutions: [
      "Implemented contract-first testing approach",
      "Created automated test data management system",
      "Built performance benchmarking suite",
      "Developed service virtualization for isolated testing"
    ],
    results: [
      "200+ API endpoints fully automated",
      "Contract testing prevented 15+ integration issues",
      "Performance benchmarks established for all services",
      "40% reduction in API-related production incidents"
    ]
  },
  {
    id: "mobile-ui-automation",
    title: "Mobile App UI Automation",
    description: "Cross-platform mobile application testing framework supporting both iOS and Android platforms with comprehensive UI validation.",
    technologies: ["Appium", "Python", "Pytest", "Sauce Labs", "Git"],
    category: "Mobile Testing",
    duration: "5 months",
    status: "Completed",
    highlights: [
      "Cross-platform compatibility",
      "Device farm integration",
      "Parallel test execution"
    ],
    fullDescription: "Built a robust mobile testing framework supporting both iOS and Android platforms. The framework provides comprehensive UI validation, gesture testing, and device-specific functionality verification.",
    challenges: [
      "Cross-platform test maintenance",
      "Device fragmentation and OS versions",
      "Network condition simulation",
      "App store compliance testing"
    ],
    solutions: [
      "Developed unified test architecture for both platforms",
      "Implemented device farm integration for broad coverage",
      "Created network simulation capabilities",
      "Built automated compliance checking"
    ],
    results: [
      "Support for 20+ device configurations",
      "90% test code reusability between platforms",
      "Parallel execution reduced test time by 60%",
      "Zero app store rejections due to quality issues"
    ]
  },
  {
    id: "performance-testing",
    title: "Performance Testing & Optimization",
    description: "Comprehensive performance testing strategy including load, stress, and endurance testing for high-traffic web applications.",
    technologies: ["Apache JMeter", "Grafana", "InfluxDB", "AWS CloudWatch"],
    category: "Performance Testing",
    duration: "3 months",
    status: "Completed",
    highlights: [
      "Identified 40% performance improvement",
      "Load testing up to 10K users",
      "Real-time monitoring setup"
    ],
    fullDescription: "Implemented comprehensive performance testing strategy for high-traffic web applications. The project included load testing, stress testing, endurance testing, and real-time performance monitoring.",
    challenges: [
      "Simulating realistic user behavior patterns",
      "Testing under various network conditions",
      "Identifying performance bottlenecks",
      "Establishing performance baselines"
    ],
    solutions: [
      "Created realistic user journey scenarios",
      "Implemented network throttling simulation",
      "Built comprehensive monitoring dashboard",
      "Established automated performance regression testing"
    ],
    results: [
      "40% improvement in application response times",
      "Successfully tested up to 10,000 concurrent users",
      "Identified and resolved 12 performance bottlenecks",
      "Established continuous performance monitoring"
    ]
  },
  {
    id: "cicd-integration",
    title: "CI/CD Pipeline Test Integration",
    description: "Seamless integration of automated testing into continuous integration and deployment pipelines, ensuring quality gates at every stage.",
    technologies: ["Azure DevOps", "Docker", "Kubernetes", "SonarQube"],
    category: "DevOps & CI/CD",
    duration: "4 months",
    status: "Completed",
    highlights: [
      "Zero-downtime deployments",
      "Automated quality gates",
      "Rollback mechanisms"
    ],
    fullDescription: "Designed and implemented comprehensive CI/CD pipeline integration with automated testing at every stage. The solution ensures quality gates, automated deployments, and rollback capabilities.",
    challenges: [
      "Integrating diverse testing tools into pipeline",
      "Ensuring fast feedback loops",
      "Managing test environments",
      "Implementing automated rollback strategies"
    ],
    solutions: [
      "Created unified testing orchestration layer",
      "Implemented parallel test execution",
      "Built automated environment provisioning",
      "Developed intelligent rollback mechanisms"
    ],
    results: [
      "Achieved zero-downtime deployments",
      "Reduced deployment time by 75%",
      "Automated quality gates prevented 25+ faulty releases",
      "Implemented successful rollback procedures"
    ]
  },
  {
    id: "security-testing",
    title: "Security Vulnerability Assessment",
    description: "Comprehensive security testing implementation using industry-standard tools to identify and mitigate potential vulnerabilities.",
    technologies: ["OWASP ZAP", "Burp Suite", "Nessus", "Python Scripts"],
    category: "Security Testing",
    duration: "3 months",
    status: "Completed",
    highlights: [
      "Identified 15+ vulnerabilities",
      "OWASP Top 10 compliance",
      "Automated security scans"
    ],
    fullDescription: "Implemented comprehensive security testing framework using industry-standard tools and methodologies. The project focused on identifying vulnerabilities, ensuring OWASP compliance, and establishing automated security scanning.",
    challenges: [
      "Comprehensive vulnerability assessment",
      "OWASP Top 10 compliance verification",
      "Automated security scan integration",
      "Security reporting and remediation tracking"
    ],
    solutions: [
      "Implemented multi-tool security scanning approach",
      "Created OWASP compliance verification framework",
      "Built automated security scan pipeline",
      "Developed security reporting dashboard"
    ],
    results: [
      "Identified and resolved 15+ security vulnerabilities",
      "Achieved full OWASP Top 10 compliance",
      "Implemented automated daily security scans",
      "Established security metrics and reporting"
    ]
  }
];
