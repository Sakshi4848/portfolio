export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  feedback: string;
  image: string;
  rating: number;
}
