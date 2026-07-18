import { motion } from 'motion/react';
import { Award, Trophy, Star, Shield, BookOpen, PenTool } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  year?: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: '1st Position in College Ideathon',
    description: 'Secured 1st Position in College Ideathon, Selected for State-Level Hackathon at Rajiv Gandhi Government Engineering College Nagrota Kangra, Himachal Pradesh.',
    icon: <Trophy size={24} className="text-brand-accent" />,
  },
  {
    id: '2',
    title: '85th Position in Matriculation',
    description: 'Secured 85th position in Matriculation Examination held in March 2019 by Himachal Board of School Education, Dharamshala.',
    year: '2019',
    icon: <Award size={24} className="text-brand-accent" />,
  },
  {
    id: '3',
    title: 'Diploma in ITES',
    description: 'Got four year diploma in ITES (Information Technology and Enabled Services) Vocational Education.',
    year: '2021',
    icon: <BookOpen size={24} className="text-brand-accent" />,
  },
  {
    id: '4',
    title: 'Brain of Himachal - 143rd Rank',
    description: 'Participated in talent hunt exam named as "Brain of Himachal" conducted by ASPIRE IIT/MEDICAL Khalini Shimla and secured 143rd rank in all over Himachal.',
    year: '2018',
    icon: <Star size={24} className="text-brand-accent" />,
  },
  
  {
    id: '5',
    title: '3rd Position in Poem Writing',
    description: 'Participated in district level Poem writing competition organized at Govt. model girls senior secondary school Portmore, Shimla Himachal Pradesh and secured 3rd position.',
    year: '2018',
    icon: <PenTool size={24} className="text-brand-accent" />,
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-charcoal mb-4">
            Achievements <span className="text-brand-primary">&</span> Awards
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-brand-charcoal/5 border border-brand-charcoal/5 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-6">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                {achievement.title}
              </h3>
              
              <p className="text-brand-charcoal/70 leading-relaxed mb-4">
                {achievement.description}
              </p>

              {achievement.year && (
                <div className="inline-block px-3 py-1 rounded-full bg-brand-charcoal/5 text-sm font-medium text-brand-charcoal/70">
                  {achievement.year}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
