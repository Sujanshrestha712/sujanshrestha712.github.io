// Single source of truth for all site content. Edit here, not in components.

export const profile = {
  name: "Sujan Shrestha",
  role: "QA Engineer",
  roles: ["QA Engineer", "API Tester", "Automation Enthusiast", "Bug Hunter"],
  tagline:
    "I break software before your users do. 2+ years testing web apps with manual, API and automated suites, turning vague requirements into reliable releases.",
  email: "shrestha712sujan@gmail.com",
  phone: "+977 9849249494",
  location: "Thimi, Bhaktapur, Nepal",
  github: "https://github.com/Sujanshrestha712",
  resume: "/Sujan_Shrestha_Resume.pdf",
};

export const stats = [
  { value: 2, suffix: "+", label: "Years in QA" },
  { value: 80, suffix: "+", label: "Test cases designed" },
  { value: 3, suffix: "", label: "Browsers covered" },
  { value: 2, suffix: "", label: "Companies" },
];

export const about = {
  paragraphs: [
    "I'm a QA Engineer who enjoys finding the edge cases nobody thought of. My work spans manual, functional, regression and API testing for web applications, with growing depth in test automation using Playwright and Selenium.",
    "I design clear test cases, track defects end to end in Jira, validate data with SQL, and work closely with developers in Agile/Scrum teams. I'm currently pursuing a Bachelor's in Computer Application and looking to deepen my craft through mentorship and real-world projects.",
  ],
  facts: [
    { label: "Based in", value: "Bhaktapur, Nepal" },
    { label: "Languages", value: "English, Nepali" },
    { label: "Studying", value: "BCA, Kathmandu College of Technology" },
    { label: "Method", value: "Agile / Scrum, SDLC, STLC" },
  ],
};

export const skills = [
  {
    title: "Testing",
    accent: "mint",
    items: [
      "Manual Testing",
      "Functional",
      "Regression",
      "Smoke & Sanity",
      "UI Testing",
      "Test Case Design",
      "Bug Life Cycle",
      "Defect Reporting",
    ],
  },
  {
    title: "Automation",
    accent: "violet",
    items: ["Playwright", "Selenium WebDriver", "Katalon Studio"],
  },
  {
    title: "API Testing",
    accent: "mint",
    items: ["Postman", "Swagger", "REST APIs", "Token Auth", "Status Codes"],
  },
  {
    title: "Databases",
    accent: "violet",
    items: ["SQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Process",
    accent: "mint",
    items: ["Jira", "Git", "GitHub", "Agile / Scrum", "SDLC / STLC"],
  },
  {
    title: "Code Fundamentals",
    accent: "violet",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Node.js"],
  },
];

export const experience = [
  {
    role: "Junior QA Engineer",
    company: "Zuvior Incorporation Private Limited",
    period: "Jan 2025 - Dec 2025",
    points: [
      "Analyzed requirements and wrote test cases, scripts and scenarios for web applications.",
      "Ran functional, regression and API testing across releases.",
      "Validated REST APIs with Postman and Swagger: responses, status codes and authentication.",
      "Verified data integrity against expected results using SQL.",
      "Logged, tracked and verified defects to closure in Jira within an Agile/Scrum team.",
    ],
  },
  {
    role: "QA Trainee",
    company: "Into The Tech",
    period: "2023 - 2024",
    points: [
      "Performed manual and automated testing with Katalon Studio to catch UI defects after updates.",
      "Executed UI, regression and usability tests on web apps and digital content.",
      "Reported bugs and checked layout, design tools and multimedia quality across platforms.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor's in Computer Application",
    place: "Kathmandu College of Technology",
    period: "Dec 2022 - Present",
    note: "C Programming, Microprocessor, Computer Architecture",
  },
  {
    title: "NEB, Management (Business Studies)",
    place: "Khwopa College",
    period: "Aug 2020 - Sept 2022",
    note: "",
  },
];

export const projects = [
  {
    title: "Visacampus Consultancy Platform",
    kind: "Manual + API testing",
    summary:
      "End-to-end testing of a study-abroad consultancy web platform: student inquiry forms, appointment booking, document upload and the admin dashboard.",
    highlights: [
      "80+ test cases across functional, regression, UI and cross-browser (Chrome, Firefox, Edge)",
      "Negative scenarios: invalid emails, empty required fields, file size/type limits",
      "Inquiry and booking APIs verified in Postman, records confirmed with SQL",
      "Defects triaged by severity and priority in Jira, then retested",
    ],
    tools: ["Postman", "Jira", "MySQL", "Chrome DevTools"],
    accent: "mint",
  },
  {
    title: "Goodwill Dry Cleaning",
    kind: "Playwright automation",
    summary:
      "Testing a service-booking website for a dry-cleaning business: ordering, pickup and delivery scheduling, pricing and order tracking.",
    highlights: [
      "Pricing logic and order totals verified against service rate rules",
      "Responsive checks across desktop and mobile viewports",
      "Automated registration, login, booking and cancellation journeys in Playwright",
      "HTML test reports cut regression time on repeat releases",
    ],
    tools: ["Playwright", "Postman", "Jira", "GitHub"],
    accent: "violet",
  },
  {
    title: "This Portfolio",
    kind: "MERN full stack",
    summary:
      "Built with React, Tailwind and Motion on the front end and an Express, MongoDB and Nodemailer API behind the contact form, hardened with rate limiting, validation and security headers.",
    highlights: [
      "Zod validation, honeypot spam trap and per-IP rate limits",
      "Helmet security headers and a strict CORS allow-list",
      "Messages stored in MongoDB and delivered to my inbox",
    ],
    tools: ["React", "Express", "MongoDB", "Node.js"],
    accent: "mint",
    link: "https://github.com/Sujanshrestha712/sujanshrestha712.github.io",
  },
];

// Lines animated in the hero "test run" terminal.
export const testRun = [
  { text: "$ npx playwright test", kind: "cmd" },
  { text: "Running 4 tests using 3 workers", kind: "info" },
  { text: "registration flow", kind: "pass", time: "1.2s" },
  { text: "login with valid credentials", kind: "pass", time: "0.8s" },
  { text: "book order and verify total", kind: "pass", time: "2.1s" },
  { text: "cancel order", kind: "pass", time: "1.0s" },
  { text: "4 passed (5.1s)", kind: "summary" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
