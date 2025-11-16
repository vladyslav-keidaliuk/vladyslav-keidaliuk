import type { WorkExperience, Education } from "~/types";

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "qa-engineer-1",
    title: "QA Engineer",
    company: "Tech Company Inc.",
    location: "Remote",
    startDate: "January 2022",
    endDate: "Present",
    description: "Leading quality assurance initiatives for web and mobile applications, focusing on test automation and process improvement.",
    responsibilities: [
      "Developed and maintained automated test suites using Selenium and C# for web applications",
      "Performed comprehensive API testing using Postman and Python",
      "Collaborated with development teams to implement testing best practices",
      "Created and executed test plans, test cases, and test scripts",
      "Identified, documented, and tracked bugs using JIRA",
      "Conducted regression, functional, and integration testing",
    ],
    achievements: [
      "Reduced testing time by 40% through automation framework implementation",
      "Improved bug detection rate by 30% through systematic test coverage analysis",
      "Mentored 3 junior QA engineers in test automation techniques",
    ],
    technologies: ["C#", "Selenium", "Python", "Postman", "JIRA", "Git"],
  },
  {
    id: "qa-engineer-2",
    title: "Junior QA Engineer",
    company: "Software Solutions Ltd.",
    location: "Hybrid",
    startDate: "June 2020",
    endDate: "December 2021",
    description: "Responsible for manual and automated testing of enterprise software applications.",
    responsibilities: [
      "Executed manual test cases for web applications",
      "Developed automated UI tests using Selenium WebDriver",
      "Performed API testing and validation",
      "Participated in Agile ceremonies and sprint planning",
      "Documented test results and reported defects",
    ],
    achievements: [
      "Successfully automated 50+ test cases in the first 6 months",
      "Contributed to 95% test coverage for critical features",
    ],
    technologies: ["Selenium", "JavaScript", "Postman", "SQL", "TestRail"],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "University Name",
    location: "City, Country",
    startDate: "September 2016",
    endDate: "June 2020",
    gpa: "3.8/4.0",
    description: "Focused on software engineering, quality assurance methodologies, and software testing principles.",
    achievements: [
      "Dean's List for academic excellence (2018-2020)",
      "Completed senior project on automated testing frameworks",
      "Member of Computer Science Club",
    ],
    coursework: [
      "Software Testing and Quality Assurance",
      "Software Engineering",
      "Database Systems",
      "Web Development",
      "Algorithms and Data Structures",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: "cert-1",
    name: "ISTQB Certified Tester Foundation Level",
    issuer: "ISTQB",
    date: "2021",
    credentialId: "ISTQB-12345",
  },
  {
    id: "cert-2",
    name: "Selenium WebDriver with C#",
    issuer: "Udemy",
    date: "2022",
  },
];

