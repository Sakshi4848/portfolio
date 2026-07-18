import { motion } from 'motion/react';
import type { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: '1',
    company: 'Atal Bihari Vajpayee Government Institute of Engineering & Technology',
    position: 'B.Tech in Computer Science and Engineering',
    duration: 'Pursuing',
    achievements: [
      'Pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering from ABVGIET, Pragatinagar district Shimla Himachal Pradesh.'
    ]
  },
  {
    id: '2',
    company: 'Government Polytechnic for Women Kandaghat',
    position: 'Diploma in Computer Engineering',
    duration: '2024',
    achievements: [
      'Completed three years diploma in Computer Engineering from Government Polytechnic for Women Kandaghat (NBA Accredited) District Solan Himachal Pradesh.',
      'Graduated with 80.10% marks.'
    ]
  },
  {
    id: '3',
    company: 'Government Senior Secondary School Bhattakuffer',
    position: '10+2 (Senior Secondary)',
    duration: '2021',
    achievements: [
      'Completed 10+2 from Government Senior Secondary School Bhattakuffer District Shimla Himachal Pradesh.',
      'Secured 85% marks.'
    ]
  },
  {
    id: '4',
    company: 'Government Senior Secondary School Bhattakuffer',
    position: 'Matriculation (10th)',
    duration: '2019',
    achievements: [
      'Completed Matriculation from Government Senior Secondary School Bhattakuffer District Shimla Himachal Pradesh.',
      'Secured 86% marks.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-brand-charcoal/[0.02]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-brand-charcoal mb-4">My Journey</h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-brand-charcoal/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0 md:flex items-start justify-between group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 bg-brand-accent rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-150 group-hover:bg-brand-primary transition-all duration-300" />
              
              {/* Left Side (Desktop) / Top Side (Mobile) */}
              <div className="md:w-[45%] md:text-right pr-8 mb-2 md:mb-0">
                <h3 className="text-xl font-bold font-heading text-brand-charcoal">{exp.position}</h3>
                <p className="text-brand-primary font-medium">{exp.company}</p>
                <p className="text-sm text-brand-charcoal/50 mt-1">{exp.duration}</p>
              </div>

              {/* Right Side (Desktop) / Bottom Side (Mobile) */}
              <div className="md:w-[45%] pl-0 md:pl-8">
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-brand-charcoal/70 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-primary/40 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop Center Line (handled by parent border, we just need a line for desktop if we want centered timeline. The current implementation is left-aligned on mobile, staggered or split on desktop. Actually, we should make the line strictly centered on desktop) */}
            </motion.div>
          ))}

          {/* Desktop Center Line Fix */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l border-brand-charcoal/10" />
        </div>
      </div>
    </section>
  );
}
