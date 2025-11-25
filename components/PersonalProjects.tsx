import React from 'react';
import { PERSONAL_PROJECTS } from '../constants';
import { Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const PersonalProjects: React.FC = () => {
  return (
    <section className="py-24 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
            <div>
                <span className="font-mono text-neutral-500 text-xs mb-2 block">// R&D_LAB</span>
                <h2 className="text-4xl font-bold uppercase text-neutral-900 dark:text-white">Experiments</h2>
            </div>
            <a href="#" className="font-mono text-xs text-primary hover:text-black dark:hover:text-white border-b border-primary pb-1">VIEW_ALL_REPOS</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAL_PROJECTS.map((project, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/20 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300 shadow-sm dark:shadow-none"
                >
                    <div className="relative aspect-video overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        
                        {/* Technical Overlay */}
                        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <a href={project.github} className="p-1.5 bg-black text-white hover:text-primary"><Github size={16}/></a>
                             <a href={project.link} className="p-1.5 bg-primary text-black hover:bg-white"><ArrowUpRight size={16}/></a>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase">{project.title}</h3>
                            <span className="text-[10px] font-mono text-neutral-500 pt-1">v1.0.{idx}</span>
                        </div>
                        
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4 font-mono">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/50">
                            {project.tags.slice(0,3).map(tag => (
                                <span key={tag} className="text-[10px] uppercase font-bold text-neutral-500 group-hover:text-primary transition-colors">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};