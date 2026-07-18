/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SocialSidebar } from './components/SocialSidebar';

export default function App() {
  return (
    <div className="relative w-full">
      <SocialSidebar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

