import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    
    const name = target.name.value;
    const email = target.email.value;
    const message = target.message.value;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.open(`mailto:sakshimehta263@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Decorative background for contact section */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-charcoal/10 rounded-l-[100px] transform translate-x-20 -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[40px] shadow-2xl"
          >
            <div className="mb-8">
              <h2 className="text-4xl font-bold font-heading text-white mb-2">Let's Talk</h2>
              <p className="text-white/70">Have a project in mind? Drop me a message.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  placeholder="sakshi...."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  placeholder="exampl@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-accent text-brand-charcoal font-bold py-4 rounded-2xl hover:bg-[#ffc233] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Right: Waving Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center relative"
          >
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative w-[300px] h-[450px] lg:w-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                 {/* Substitute image for waving 3D character */}
                 <img 
                   src="https://i.ibb.co/m5gV195p/fda6b54f-0a0e-421a-9dd4-f1d47c56d0fa.jpg"
                   alt="Sakshi Waving"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay" />
              </div>
            </motion.div>
            
            {/* Abstract floating shapes for decoration */}
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
               className="absolute top-10 right-10 text-brand-accent"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
