import { Github, Linkedin, Dribbble, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold font-heading text-white mb-2 block">
            Sakshi<span className="text-brand-accent">.</span>
          </a>
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Sakshi. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-white/60 hover:text-brand-accent transition-colors" aria-label="Github">
            <Github size={20} />
          </a>
          <a href="https://github.com/Sakshi4848" className="text-white/60 hover:text-brand-accent transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sakshi-mehta-ai/" className="text-white/60 hover:text-brand-accent transition-colors" aria-label="Dribbble">
            <Dribbble size={20} />
          </a>
          <a href="https://www.instagram.com/mehtaaa._____/" className="text-white/60 hover:text-brand-accent transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
