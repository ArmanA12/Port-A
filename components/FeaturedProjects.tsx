import React from 'react';
import { FEATURED_PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BentoCard } from './ui/BentoCard';

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-24 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-8">
           <div>
             <span className="font-mono text-primary text-xs mb-2 block">// SELECTED_WORKS</span>
             <h2 className="text-5xl font-bold uppercase tracking-tight text-neutral-900 dark:text-white">Project <span className="text-neutral-400 dark:text-neutral-700">Index</span></h2>
           </div>
           <div className="hidden md:block text-right font-mono text-xs text-neutral-500">
             [ DISPLAYING {FEATURED_PROJECTS.length} ENTRIES ]
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[400px]">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div 
                key={project.id}
                className={`relative group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden ${index === 0 || index === 3 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                {/* Image Mask Reveal */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/10 transition-colors duration-500" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-neutral-950/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none lg:bg-gradient-to-t lg:from-black/90 lg:to-transparent">
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1 bg-black/50 lg:bg-black/50 text-white dark:text-primary">
                            0{index + 1}
                        </span>
                        <a href={project.link} className="p-2 bg-primary text-black hover:bg-white transition-colors">
                            <ArrowUpRight size={20} />
                        </a>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-bold text-neutral-900 lg:text-white dark:text-white mb-2 uppercase">{project.title}</h3>
                        <p className="text-sm text-neutral-600 lg:text-neutral-300 dark:text-neutral-300 line-clamp-2 mb-4 font-mono">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-wider text-neutral-500 lg:text-neutral-400 dark:text-neutral-400 border-b border-neutral-400 lg:border-neutral-600 dark:border-neutral-600 pb-0.5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Initial View Label (Visible before hover) */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">{project.title}</h3>
                    <p className="text-xs font-mono text-primary mt-1">{project.type}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};