
import { Project, GalleryItem, ExperienceItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "McDonald's App Redesign",
    category: "App Design / Case Study",
    description: "Streamlining the mobile ordering experience for 10M+ daily users with a focus on intuitive rewards tracking.",
    link: "#",
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/seed/mcd/600/400"
  },
  {
    id: '2',
    title: "Spotify Social Concept",
    category: "UX Research / Web Design",
    description: "Enhancing the desktop experience by integrating real-time collaborative listening parties and group chats.",
    link: "#",
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/seed/spotify/600/400"
  },
  {
    id: '3',
    title: "AI Resume Builder",
    category: "Product Design",
    description: "A smart platform that uses LLMs to optimize resume content for specific job descriptions.",
    link: "#",
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/seed/ai/600/400"
  },
  {
    id: '4',
    title: "DevBuilder Platform",
    category: "UI Design",
    description: "A comprehensive design system and component library for rapid React application development.",
    link: "#",
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/seed/dev/600/400"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: "Freelance UI Designer",
    period: "2024 – Present",
    description: [
      "Designed social media creatives & event flyers for major campus events.",
      "Developed high-fidelity mobile app concepts in Figma for local startups.",
      "Collaborated with small local businesses to establish digital brand identities."
    ]
  },
  {
    id: 'exp2',
    role: "UX Design Intern",
    period: "Summer 2023",
    description: [
      "Assisted in user research and wireframing for an e-commerce platform.",
      "Created design system documentation used by the development team."
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'App UI Screen', image: 'https://picsum.photos/seed/ui1/400/500', rotation: -2 },
  { id: 'g2', title: 'Flyer Design', image: 'https://picsum.photos/seed/flyer1/400/400', rotation: 3 },
  { id: 'g3', title: 'Wireframe Mockup', image: 'https://picsum.photos/seed/wire1/500/400', rotation: -1 },
  { id: 'g4', title: 'Brand Identity', image: 'https://picsum.photos/seed/brand1/400/600', rotation: 2 },
  { id: 'g5', title: 'Typography Study', image: 'https://picsum.photos/seed/typo1/500/500', rotation: -3 },
  { id: 'g6', title: 'Web Concept', image: 'https://picsum.photos/seed/web1/400/400', rotation: 1 },
];
