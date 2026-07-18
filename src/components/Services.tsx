import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Terminal, 
  LayoutTemplate 
} from 'lucide-react';

const services = [
  {
    title: 'Full Stack Dev',
    description: 'Building responsive, scalable web applications using the MERN stack and Next.js.',
    icon: <LayoutTemplate className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: 'Backend Engineering',
    description: 'Designing robust RESTful APIs, microservices, and optimizing database queries.',
    icon: <Database className="w-8 h-8 text-brand-accent" />,
  },
  {
    title: 'Problem Solving',
    description: 'Writing optimized algorithms and participating in competitive programming contests.',
    icon: <Terminal className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying applications using Docker containerization and AWS cloud services.',
    icon: <Cloud className="w-8 h-8 text-brand-accent" />,
  },
  {
    title: 'Machine Learning',
    description: 'Exploring data processing, predictive modeling, and AI integrations.',
    icon: <Cpu className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: 'Open Source',
    description: 'Actively contributing to open-source projects and collaborating with developers globally.',
    icon: <Code2 className="w-8 h-8 text-brand-accent" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-charcoal/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-brand-charcoal mb-4">What I Do</h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-brand-charcoal/5 border border-brand-charcoal/5 group transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-brand-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
