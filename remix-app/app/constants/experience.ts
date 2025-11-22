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
    degree: "Bachelor",
    field: "Computer Science (exchange student)",
    institution: "OTH Regensburg",
    url: "https://www.oth-regensburg.de/", // Replace with actual university URL
    location: "Regensburg, Germany",
    startDate: "September 2024",
    endDate: "March 2025",
    status: "Completed",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYkCDOoXqcSzOmFNU9lKmYzstM1sZWKJ-5g&s", // Replace with actual logo URL
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
  {
    id: "edu-2",
    degree: "Bachelor",
    field: "Computer Science",
    institution: "Odessa National Polytechnic University",
    url: "https://op.edu.ua/", // Replace with actual university URL
    location: "Odesa, Ukraine",
    startDate: "September 2021",
    endDate: "June 2025",
    status: "Finished 7 of 8 semesters",
    logo: "https://upload.wikimedia.org/wikipedia/ru/3/33/ONPU.gif", // Replace with actual logo URL
    gpa: undefined,
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
  }
];

export const CERTIFICATIONS = [
  {
    id: "cert-1",
    name: "ISTQB Certified Tester Foundation Level",
    issuer: "ISTQB",
    date: "2021",
    credentialId: "ISTQB-12345",
    url: "https://www.istqb.org/verify-certification",
  },
  {
    id: "cert-2",
    name: "Selenium WebDriver with C#",
    issuer: "Udemy",
    date: "2022",
    url: "https://www.udemy.com/certificate/UC-1234567890/",
  },
];

