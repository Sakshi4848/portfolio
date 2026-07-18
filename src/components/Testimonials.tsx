import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Robert Chen',
    company: 'Professor of Computer Science',
    feedback: 'Sakshi is one of the most dedicated students I have taught. Her ability to grasp complex algorithmic concepts and apply them practically is outstanding. Her final year project on distributed systems was exceptional.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    company: 'Engineering Manager, Global Tech',
    feedback: 'During her internship, Sakshi consistently delivered high-quality code. She learns new technologies rapidly and isn\'t afraid to tackle challenging backend tasks. She would be an asset to any engineering team.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Chang',
    company: 'Mentor, Open Source Org',
    feedback: 'An excellent contributor. Sakshi\'s pull requests were always well-documented, thoroughly tested, and solved the root causes of issues. Her communication skills make her a great team player.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop',
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-brand-charcoal mb-4">Recommendations</h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <div className="flex items-center gap-1 mb-6 text-brand-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-brand-charcoal/80 mb-8 italic leading-relaxed">
                "{testimonial.feedback}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" 
                />
                <div>
                  <h4 className="font-bold text-brand-charcoal">{testimonial.name}</h4>
                  <p className="text-xs text-brand-charcoal/60">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
