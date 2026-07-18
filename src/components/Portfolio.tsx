import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Desktop Assistant',
    category: 'AI & Automation',
    description: 'A smart virtual assistant for desktop platforms that automates daily tasks, manages schedules, and provides intelligent contextual responses.',
    techStack: ['Python', 'PySide6', 'OpenAI API', 'SQLite'],
    image: 'https://i.pinimg.com/736x/85/e8/7b/85e87b72f7eb05fbe49ef473c3e50053.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Student Management System',
    category: 'Web Application',
    description: 'A comprehensive platform for managing student records, course enrollments, grades, and attendance tracking with role-based access control.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Smart Question Generator',
    category: 'Machine Learning',
    description: 'An AI-driven application that automatically generates academic questions from educational texts to assist teachers in creating assessments.',
    techStack: ['Next.js', 'FastAPI', 'NLP', 'Hugging Face'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    githubUrl: '#',
  }
];

export function Portfolio() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold font-heading text-brand-charcoal mb-4">Selected Works</h2>
            <div className="w-20 h-1.5 bg-brand-accent rounded-full" />
          </div>
          <p className="text-brand-charcoal/70 max-w-md">
            A showcase of my recent projects ranging from complex backend architectures to full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-brand-charcoal/5 border border-brand-charcoal/5"
            >
              {/* Image Container with 3D-ish lift effect */}
              <div className="relative h-[300px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute top-4 left-4">
                  <span className="glass-card px-3 py-1 rounded-full text-xs font-semibold text-brand-charcoal">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-brand-charcoal mb-3">
                  {project.title}
                </h3>
                <p className="text-brand-charcoal/70 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-brand-charcoal/5 text-brand-charcoal/80 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors">
                      <ExternalLink size={16} />
                      Visit Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal hover:text-brand-primary transition-colors">
                      <Github size={16} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
