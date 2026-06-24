export const profile = {
  name: 'Deepen Padwal',
  role: 'AI Full Stack Developer',
  tagline: 'Building intelligent applications with cutting-edge AI technologies.',
  location: 'Tampa, FL',
  email: 'padwaldeepen@gmail.com',
  phone: '',
  socials: {
    github: 'https://github.com/padwaldeepen',
    linkedin: 'https://www.linkedin.com/in/padwaldeepen/',
  },
  resume: 'https://drive.google.com/file/d/1vZUxc4DAgqsIchIEQ_zpv1m5PIFdN3UD/view?usp=drive_link',
  startYear: 2020,
};

export const experienceYears = new Date().getFullYear() - profile.startYear;

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const education = [
  {
    period: '2018 - 2020',
    degree: 'Master of Science in Management Information Systems',
    school: 'Auburn University at Montgomery, Alabama, USA',
    description: 'Specialized in data analytics and AI integration.',
    highlights: [
      'Python for Data Science',
      'Machine Learning Algorithms',
      'Database Management Systems',
    ],
  },
  {
    period: '2012 - 2016',
    degree: 'Bachelor of Engineering in Information Technology',
    school: 'University of Mumbai, Maharashtra, India',
    description: 'Focused on software development and system design.',
    highlights: ['Software Engineering', 'Data Structures and Algorithms', 'Web Development'],
  },
];

export const stats = [
  { label: 'Years of Experience', value: experienceYears },
  { label: 'Focus', value: 'AI' },
  { label: 'Degree', value: 'M.S. MIS' },
  { label: 'Cloud', value: 'AWS, Azure' },
];

export const experience = [
  {
    period: 'March 2021 - Present',
    role: 'Software Engineer',
    company: 'Tata Consultancy Services (Client: PwC)',
    location: 'Tampa, FL',
    summary:
      'Developing and maintaining production-grade web applications with React, TypeScript, and Material UI. Architecting AI agent solutions and driving full-stack feature delivery.',
    points: [
      'Drove 20% user engagement improvement and 30% faster load times through React/TypeScript optimizations.',
      'Architected Claude AI Agents with custom tool use to automate complex workflows, reducing manual effort.',
      'Reduced merge conflicts 40% via Git best practices and streamlined collaboration across teams.',
      'Mentored junior developers and collaborated with UX designers to ship accessible, polished interfaces.',
    ],
    stacks: [
      'React',
      'TypeScript',
      'JavaScript',
      'Material UI',
      'Node.js',
      'Python',
      'Git',
      'PowerBI',
      'Claude AI',
      'Figma',
    ],
  },
  {
    period: 'July 2020 - February 2021',
    role: 'Software Engineer',
    company: 'Strategic IT Experts',
    location: '',
    summary:
      'Developed and deployed web-based applications with a focus on responsive design and intuitive user interfaces.',
    points: [
      'Built responsive UIs with HTML/CSS/JS, collaborating with designers to validate technical feasibility.',
    ],
    stacks: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
  {
    period: 'September 2018 - May 2020',
    role: 'Graduate Research Assistant',
    company: 'Auburn University at Montgomery',
    location: 'Montgomery, AL',
    summary:
      'Conducted research in cryptocurrency analysis and data analytics, contributing to academic publications and presentations.',
    points: [
      'Built a Python app for Reddit crypto data retrieval with PyQt5/Oracle visualization, achieving 50% faster data collection.',
      'Designed ETL pipelines for sentiment analysis, ensuring data accuracy and generating market trend reports.',
    ],
    stacks: ['Python', 'PyQt5', 'Oracle', 'ETL', 'Sentiment Analysis'],
  },
];

export const toolkit = [
  'Python',
  'TypeScript',
  'JavaScript',
  'React',
  'Node.js',
  'PostgreSQL',
  'GraphQL',
  'Docker',
  'Azure',
  'AWS',
];

export const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'GraphQL', 'HTML5', 'CSS3'],
  frontend: ['React', 'Angular', 'Material UI', 'Bootstrap'],
  backend: ['Express.js', 'Node.js', 'REST APIs'],
  tools: ['Git', 'Docker', 'Postman', 'PowerBI', 'Tableau', 'Jira', 'Confluence', 'Figma'],
  databases: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'MongoDB'],
  cloud: ['AWS', 'Azure'],
  ai: ['GitHub Copilot', 'Cursor AI', 'Claude (Anthropic)', 'AI Agents', 'LLM Tool Use', 'GenAI'],
};

export const projects = [
  {
    title: 'AI Agent Workflow Automation',
    year: 2025,
    description:
      'Architected and deployed AI agents using Claude (Anthropic) with custom tool use to automate complex internal workflows, enabling intelligent task orchestration across enterprise systems.',
    tags: ['AI', 'Claude', 'Agent', 'Automation'],
    image: '/images/projects/ai-agent.png',
    liveLink: '',
    repoLink: '',
  },
  {
    title: 'Interactive Data Dashboard',
    year: 2024,
    description:
      'Built a real-time data visualization dashboard using React and PowerBI, providing stakeholders with actionable insights through interactive charts and reports.',
    tags: ['React', 'PowerBI', 'Data Viz', 'Dashboard'],
    image: '/images/projects/dashboard.png',
    liveLink: '',
    repoLink: '',
  },
  {
    title: 'Enterprise Web Platform',
    year: 2023,
    description:
      'Developed and maintained user-facing features for a production-grade web application serving thousands of users, with a focus on performance optimization and accessibility.',
    tags: ['React', 'TypeScript', 'Material UI', 'Enterprise'],
    image: '/images/projects/platform.png',
    liveLink: '',
    repoLink: '',
  },
];
