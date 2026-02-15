
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  techStack?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  rotation: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  description: string[];
}
