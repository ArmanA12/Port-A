
import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Briefcase, GraduationCap, Trophy, ArrowUpRight, Radio, Hexagon } from 'lucide-react';

const EVENTS = [
  { 
    year: "2024", 
    title: "Team Lead", 
    role: "Senior Engineer",
    desc: "Architecting scalable solutions and leading a squad of 4 developers. Implemented agile workflows and reduced deployment time by 40%.",
    type: "CURRENT_STATE",
    icon: Briefcase
  },
  { 
    year: "2022", 
    title: "TechCorp Inc.", 
    role: "Junior Developer",
    desc: "Initiated professional journey. Optimized legacy codebases, integrated CI/CD pipelines, and collaborated on high-traffic B2B platforms.",
    type: "CAREER_INIT",
    icon: GitCommit
  },
  { 
    year: "2022", 
    title: "University", 
    role: "CS Degree",
    desc: "Graduated with Honors. Specialized in Distributed Systems and AI Algorithms. Capstone project focused on Neural Networks.",
    type: "EDUCATION",
    icon: GraduationCap
  },
  { 
    year: "2021", 
    title: "LeetCode Star", 
    role: "Algorithm Specialist",
    desc: "Achieved top global ranking. Solved 500+ complex algorithmic challenges across Dynamic Programming and Graph Theory.",
    type: "ACHIEVEMENT",
    icon: Trophy
  }
];

export const LifeUpdates: React.FC = () => {
  return (
    <section className="py-24 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden transition-colors duration-300" id="updates">
        {/* Background Hexagon Pattern */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-10 dark:opacity-20">
            <svg className="w-full h-full text-neutral-400 dark:text-neutral-700">
                <defs>
                    <pattern id="hexagons" x="0" y="0" width="100" height="173" patternUnits="userSpaceOnUse" patternTransform="scale(0.4)">
                        <path d="M50 0 L100 28.8 L100 86.5 L50 115.4 L0 86.5 L0 28.8 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
                        <path d="M50 115.4 L50 173.2" fill="none" stroke="currentColor" strokeWidth="4"/>
                        <path d="M0 86.5 L-50 115.4" fill="none" stroke="currentColor" strokeWidth="4"/>
                        <path d="M100 86.5 L150 115.4" fill="none" stroke="currentColor" strokeWidth="4"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
            {/* Header - Removed 'Execution History' Text */}
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 dark:border-neutral-800 pb-8">
                 <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Radio size={14} className="text-primary animate-pulse" />
                        <span className="font-mono text-primary text-xs tracking-widest uppercase">System_Logs // V.2.0.4</span>
                    </div>
                 </div>
                 <div className="hidden md:block text-right">
                    <p className="text-neutral-500 font-mono text-xs">LOG_ENTRIES: {EVENTS.length}</p>
                    <p className="text-neutral-500 font-mono text-xs">LAST_UPDATE: TODAY</p>
                 </div>
            </div>

            {/* Timeline Layout */}
            <div className="relative space-y-4">
                {/* Central Trace Line (Desktop) */}
                <div className="absolute left-[27px] md:left-[50%] top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-800 border-l border-dashed border-neutral-300 dark:border-neutral-700 md:-translate-x-1/2" />

                {EVENTS.map((event, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Empty Space for Grid alignment */}
                        <div className="md:w-[50%]" />

                        {/* Central Node - Hexagon Shape */}
                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                             {/* Hexagon Background */}
                             <Hexagon 
                                className="w-16 h-16 text-neutral-200 dark:text-neutral-800 fill-white dark:fill-neutral-950 group-hover:text-primary transition-colors" 
                                strokeWidth={1} 
                             />
                             {/* Icon */}
                            <event.icon size={20} className="absolute text-neutral-500 group-hover:text-primary transition-colors" />
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-[50%] pl-20 md:pl-0 md:px-16">
                            <div className="group relative bg-white/40 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 p-8 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 hover:border-primary/50">
                                
                                {/* Technical Decor - Hexagon Corners */}
                                <div className="absolute top-[-6px] right-[-6px] group-hover:rotate-90 transition-transform">
                                     <Hexagon size={12} className="text-neutral-300 dark:text-neutral-600 fill-white dark:fill-neutral-950 group-hover:text-primary transition-colors" strokeWidth={1} />
                                </div>
                                <div className="absolute bottom-[-6px] left-[-6px] group-hover:rotate-90 transition-transform">
                                     <Hexagon size={12} className="text-neutral-300 dark:text-neutral-600 fill-white dark:fill-neutral-950 group-hover:text-primary transition-colors" strokeWidth={1} />
                                </div>
                                
                                {/* Year Label */}
                                <div className="absolute -top-6 left-8 bg-neutral-50 dark:bg-neutral-950 px-2 py-1 border border-neutral-200 dark:border-neutral-800 text-neutral-500 font-mono text-sm font-bold group-hover:text-primary group-hover:border-primary transition-colors">
                                    {event.year}
                                </div>

                                {/* Content */}
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white uppercase tracking-wide">{event.title}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            <span className="text-xs font-mono text-primary/80 uppercase">{event.role}</span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono border border-neutral-200 dark:border-neutral-800 px-1.5 py-0.5 text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                                        [{event.type}]
                                    </span>
                                </div>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-mono leading-relaxed mb-4 border-t border-neutral-200 dark:border-neutral-800/50 pt-4">
                                    {event.desc}
                                </p>

                                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="text-[10px] text-neutral-500 dark:text-neutral-600 font-mono">HASH: 0x{Math.random().toString(16).substr(2, 6).toUpperCase()}</span>
                                    <ArrowUpRight size={16} className="text-primary" />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};