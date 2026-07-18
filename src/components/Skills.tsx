import { motion } from 'motion/react';

const skills = [
  { name: 'C++', category: 'Languages', level: 90 },
  { name: 'Java', category: 'Languages', level: 85 },
  { name: 'JavaScript/TS', category: 'Languages', level: 92 },
  { name: 'Python', category: 'Languages', level: 80 },
  { name: 'React.js', category: 'Frontend', level: 88 },
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'SQL/PostgreSQL', category: 'Database', level: 82 },
  { name: 'MongoDB', category: 'Database', level: 80 },
  { name: 'Docker', category: 'DevOps', level: 75 },
  { name: 'AWS', category: 'Cloud', level: 70 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-brand-charcoal mb-4">Core Skills</h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="glass-card px-6 py-4 rounded-2xl flex flex-col gap-2 min-w-[140px] md:min-w-[160px] cursor-default border border-white/60"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-brand-charcoal">{skill.name}</span>
                <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded-full">
                  {skill.category}
                </span>
              </div>
              <div className="w-full h-1.5 bg-brand-charcoal/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
