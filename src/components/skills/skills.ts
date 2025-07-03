import { FaReact, FaNode, FaPython, FaDocker, FaFigma, FaJs } from 'react-icons/fa';
import { SiTypescript, SiAmazon, SiGithubcopilot, SiPostgresql, SiVercel } from 'react-icons/si';
import { PiCursorFill } from 'react-icons/pi';
import { MdOutlineAutoAwesome } from 'react-icons/md';
import { IconType } from 'react-icons';

export interface Skill {
  title: string;
  icon: IconType;
  description: string;
}

export const skills: Skill[] = [
  {
    title: 'React',
    icon: FaReact,
    description: 'Modern UI library for building fast, interactive web apps.',
  },
  {
    title: 'Node.js',
    icon: FaNode,
    description: 'JavaScript runtime for scalable server-side applications.',
  },
  {
    title: 'TypeScript',
    icon: SiTypescript,
    description: 'Typed superset of JavaScript for safer, scalable code.',
  },
  {
    title: 'Python',
    icon: FaPython,
    description: 'Versatile language for backend, data, and automation.',
  },
  {
    title: 'SQL',
    icon: SiPostgresql,
    description: 'Structured query language for relational databases.',
  },
  {
    title: 'AWS',
    icon: SiAmazon,
    description: 'Cloud platform for scalable infrastructure and services.',
  },
  {
    title: 'Docker',
    icon: FaDocker,
    description: 'Containerization for consistent, portable deployments.',
  },
  {
    title: 'GitHub Copilot',
    icon: SiGithubcopilot,
    description: 'AI-powered code completion and developer productivity.',
  },
  {
    title: 'GenAI',
    icon: MdOutlineAutoAwesome,
    description: 'Generative AI for code, content, and productivity.',
  },
  {
    title: 'Cursor',
    icon: PiCursorFill,
    description: 'AI-powered code editor and developer assistant.',
  },
  {
    title: 'JavaScript',
    icon: FaJs,
    description: 'Dynamic scripting language for interactive web development.',
  },
  {
    title: 'Vercel',
    icon: SiVercel,
    description: 'Cloud platform for frontend frameworks and static sites.',
  },
];
