import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export function SocialSidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
    >
      <a 
        href="https://linkedin.com/in/sakshi-mehta-ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0077b5] text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} className="fill-current" />
      </a>
      <a 
        href="https://github.com/Sakshi4848" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#333333] text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="GitHub"
      >
        <Github size={20} className="fill-current" />
      </a>
      <a 
        href="https://instagram.com/mehtaaa._____" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
    </motion.div>
  );
}
