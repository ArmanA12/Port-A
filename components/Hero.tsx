
import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';
import { CodeSnippet } from './ui/CodeSnippet';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern bg-grid opacity-30 dark:opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start w-full">
            
            {/* Status Line */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-4 border-l-2 border-primary pl-4"
            >
                <span className="text-xs font-mono text-primary tracking-widest uppercase animate-pulse">
                  System Status: {HERO_DATA.availability}
                </span>
                <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-800" />
            </motion.div>

            {/* Main Title */}
            <div className="w-full relative">
              <motion.h1 
                initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
                className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-neutral-900 dark:text-white uppercase font-display mb-6"
              >
                Peter<br />
                <span className="text-transparent text-outline hover:text-neutral-900 dark:hover:text-neutral-800 transition-colors duration-500">Parker</span>
              </motion.h1>
              
              {/* Decorative Element */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-2 bg-primary mb-8"
              />
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-lg mb-10"
            >
              <span className="text-neutral-900 dark:text-white font-mono text-sm block mb-2">// ROLE_DEFINITION</span>
              {HERO_DATA.tagline} Crafting digital infrastructure with precision engineering and modern aesthetics.
            </motion.p>
            
            {/* CTA & Socials */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full">
                <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact" 
                    className="group px-8 py-4 bg-primary text-black font-bold text-center uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-3"
                >
                    Initiate Protocol <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </motion.a>

                <div className="flex gap-6 items-center">
                    <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-800 hidden sm:block" />
                    {[
                    { Icon: Github, href: SOCIAL_LINKS.github },
                    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                    { Icon: Twitter, href: SOCIAL_LINKS.twitter }
                    ].map(({ Icon, href }, idx) => (
                    <motion.a 
                        key={idx} 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + (idx * 0.1) }}
                        href={href} 
                        target="_blank" 
                        className="text-neutral-400 dark:text-neutral-500 hover:text-primary dark:hover:text-primary transition-colors p-2 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
                    >
                        <Icon size={20} />
                    </motion.a>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Column: Code Snippet */}
        <div className="hidden lg:block w-full h-full flex items-center justify-center relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] opacity-20 pointer-events-none rounded-full" />
            <CodeSnippet />
        </div>

      </div>
    </section>
  );
};