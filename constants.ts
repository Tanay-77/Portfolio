
import { Project, GalleryItem, ExperienceItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "DevBuilder",
    category: "EdTech SaaS",
    description: "A project based learning platform for students.",
    link: "#",
    liveLink: "https://devbuilder.netlify.app/",
    githubLink: "https://github.com/Tanay-77/DevBuilder",
    techStack: ["React", "TypeScript", "Node.js", "Tailwind"],
    image: "https://picsum.photos/seed/mcd/600/400"
  },
  {
    id: '2',
    title: "Rate My Team",
    category: "Web App",
    description: "A platform for rating and reviewing teams.",
    link: "#",
    liveLink: "https://ratemyteam.netlify.app/",
    githubLink: "https://github.com/Tanay-77/Team-Ratings",
    techStack: ["React", "TypeScript", "Node.js", "Tailwind"],
    image: "https://picsum.photos/seed/spotify/600/400"
  },
  {
    id: '3',
    title: "Bird",
    category: "Landing Page",
    description: "A landing page for a venture capital firm.",
    link: "#",
    liveLink: "https://bird-venture-capital.netlify.app/",
    githubLink: "https://github.com/Tanay-77/bird-venture-capital",
    techStack: ["React", "TypeScript", "Tailwind"],
    image: "https://picsum.photos/seed/ai/600/400"
  },
  {
    id: '4',
    title: "Noten",
    category: "Landing Page",
    description: "A landing page for a web3 and nft fashion brand.",
    link: "#",
    liveLink: "https://noten-nft.netlify.app/",
    githubLink: "https://github.com/Tanay-77/Noten",
    techStack: ["React", "TypeScript", "Tailwind"],
    image: "https://picsum.photos/seed/dev/600/400"
  },
  {
    id: '5',
    title: "ISRO Website Redesign",
    category: "Landing Page",
    description: "A Redesigned landing page for ISRO.",
    link: "#",
    liveLink: "https://isro-redesignedd.vercel.app/",
    githubLink: "https://github.com/Tanay-77/ISRO",
    techStack: ["React", "Tailwind", "GSAP"],
    image: "https://picsum.photos/seed/dev/600/400"
  },
  {
    id: '6',
    title: "Valorant ",
    category: "Landing Page",
    description: "A landing page for a Valorant.",
    link: "#",
    liveLink: "https://valorant-inspired.netlify.app/",
    githubLink: "https://github.com/Tanay-77/valorant-inspired",
    techStack: ["React", "Tailwind", "GSAP"],
    image: "https://picsum.photos/seed/dev/600/400"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: "Freelancing",
    period: "2024 – Present",
    description: [
      "UI/UX Designer + Full Stack Developer"
    ]
  }

];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'App UI Screen', image: 'https://pbs.twimg.com/media/HAaRgndXIAE__Uj?format=png&name=900x900', rotation: -2, link: 'https://x.com/TanayMahaj7/status/2022369639507124448' },
  { id: 'g2', title: 'Flyer Design', image: 'https://pbs.twimg.com/media/HAKek7YakAAWBhz?format=jpg&name=large', rotation: 3, link: 'https://x.com/TanayMahaj7/status/2018351283535778172' },
  { id: 'g3', title: 'Wireframe Mockup', image: './public/car.png', rotation: -1, link: 'https://ride-x-dashboard.vercel.app/' },
  { id: 'g4', title: 'Brand Identity', image: './public/land3.png', rotation: 2, link: 'https://x.com/TanayMahaj7/status/2000616085008359665' },
  { id: 'g5', title: 'Typography Study', image: './public/land1.png', rotation: -3, link: 'https://www.behance.net/gallery/240443265/Redesigned-Zudios-Hero-Page' },
  { id: 'g6', title: 'Web Concept', image: './public/land2.png', rotation: 1, link: 'https://www.behance.net/gallery/240207133/Hero-Page-Design' },
];
