import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Pricing } from './components/Pricing';
import { Skills } from './components/Skills';
import { PersonalProjects } from './components/PersonalProjects';
import { LifeUpdates } from './components/LifeUpdates';
import { HireMe } from './components/HireMe';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Check system preference or default to dark
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
       // Optional: Auto-detect. For now defaulting to Dark as requested previously, but allowing toggle.
    }
    document.documentElement.classList.add('dark');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-white overflow-x-hidden relative selection:bg-primary selection:text-black transition-colors duration-300">
      
      {/* Sticky Sharp Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-neutral-200 dark:border-neutral-800' 
          : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
               <div className="w-8 h-8 bg-primary flex items-center justify-center text-black font-bold font-display text-lg group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">A</div>
               <span className="font-bold tracking-widest text-sm uppercase hidden sm:block text-neutral-900 dark:text-white">Peter.Dev</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Work', 'Skills', 'Experiments', 'Pricing'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white uppercase tracking-widest transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"/>
                </a>
              ))}
              <a 
                href="#contact"
                className="px-6 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-xs font-bold uppercase tracking-wider hover:bg-primary dark:hover:bg-primary transition-colors"
              >
                Let's Talk
              </a>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                  onClick={toggleTheme}
                  className="text-neutral-900 dark:text-white"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="text-neutral-900 dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 z-40 bg-neutral-50 dark:bg-neutral-950 pt-24 px-6 md:hidden"
        >
            <div className="flex flex-col gap-6">
                {['Work', 'Skills', 'Experiments', 'Pricing', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold uppercase text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4"
                >
                  {item}
                </a>
              ))}
            </div>
        </motion.div>
      )}

      <main className="relative z-10">
        <Hero />
        <div id="work"><FeaturedProjects /></div>
        <div id="skills"><Skills /></div>
        <div id="experiments"><PersonalProjects /></div>
        <Testimonials />
        <div id="pricing"><Pricing /></div>
        <FAQ />
        <LifeUpdates />
        <div id="contact"><HireMe /></div>
      </main>

      <Footer />
      <AIChat />
    </div>
  );
}

export default App;