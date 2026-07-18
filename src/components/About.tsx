import { motion } from 'motion/react';

const stats = [
  { label: 'DSA Problems', value: '100+' },
  { label: 'Projects Built', value: '5+' },
  { label: 'Hackathons', value: '5' },
  { label: 'CGPA', value: '8.5' },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-brand-charcoal mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Character secondary instance */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[280px] h-[380px] lg:w-[350px] lg:h-[480px] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://i.ibb.co/m5gV195p/fda6b54f-0a0e-421a-9dd4-f1d47c56d0fa.jpg"
                alt="About 3D Character"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-4 top-20 glass-card p-4 rounded-2xl max-w-[150px]"
            >
              <h3 className="text-2xl font-bold text-brand-primary">5+</h3>
              <p className="text-xs font-medium text-brand-charcoal/70">Projects Built</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -left-8 bottom-20 glass-card p-4 rounded-2xl max-w-[150px]"
            >
              <h3 className="text-2xl font-bold text-brand-accent">100+</h3>
              <p className="text-xs font-medium text-brand-charcoal/70">DSA Problems</p>
            </motion.div>
          </motion.div>

          {/* Right: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4 text-lg text-brand-charcoal/80 leading-relaxed">
              <p>
                I am a pre-final year B.Tech student in Computer Science and Engineering with a strong foundation in Data Structures, Algorithms, and Full-Stack Development. I thrive on solving logical puzzles and translating them into optimized code.
              </p>
              <p>
                Throughout my academic journey, I've developed a deep interest in distributed systems, web technologies, and cloud infrastructure. I'm actively looking for opportunities to apply my knowledge to real-world software engineering challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-4xl font-bold font-heading text-brand-charcoal">{stat.value}</span>
                  <span className="text-sm font-medium text-brand-charcoal/60 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
