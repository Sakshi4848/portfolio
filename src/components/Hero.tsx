import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight text-brand-charcoal">
            I'm <span className="text-gradient">Sakshi</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-brand-charcoal/80">
            Full Stack Developer
          </h2>
          <p className="text-lg text-brand-charcoal/70 max-w-lg leading-relaxed">
            B.Tech CSE student passionate about building scalable web applications, solving complex algorithmic problems, and exploring modern cloud technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 group"
            >
              View Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="resume linkkk"
              className="px-8 py-3.5 rounded-full glass-card text-brand-charcoal font-semibold hover:bg-white/80 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center gap-2 border border-brand-charcoal/10"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right 3D Character Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="relative lg:h-[600px] flex justify-center items-center"
        >
          {/* Abstract floating circles behind the character */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[400px] h-[400px] border border-brand-primary/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[300px] h-[300px] border border-brand-accent/30 rounded-full"
          />

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            {/* 3D Character Image with Background Removal Effect */}
            <div className="relative w-[320px] h-[480px] lg:w-[400px] lg:h-[550px] flex items-center justify-center overflow-visible">
               <img 
                 src="https://i.ibb.co/YSSHbxg/Whats-App-Image-2026-07-16-at-5-32-15-PM.jpg"
                 alt="Sakshi 3D Avatar"
                 className="w-full h-full object-cover mix-blend-multiply rounded-3xl"
                 style={{ filter: "drop-shadow(0px 25px 35px rgba(24, 77, 71, 0.2))" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80 mix-blend-screen" />
            </div>
            {/* Soft shadow cast by the floating element */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 blur-xl rounded-full" />
          </motion.div>
          
          {/* Decorative floating shapes */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-10 w-16 h-16 bg-brand-accent/20 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg z-20 flex items-center justify-center text-3xl"
          >
            🚀
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-32 -left-4 w-20 h-20 bg-brand-primary/20 backdrop-blur-xl rounded-full border border-white/50 shadow-lg z-20 flex items-center justify-center text-4xl"
          >
            💻
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
