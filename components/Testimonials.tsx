
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star, ShieldCheck, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Hexagon Pattern */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-10 dark:opacity-20">
            <svg className="w-full h-full text-neutral-400 dark:text-neutral-700">
                <defs>
                    <pattern id="hexagons-logs" x="0" y="0" width="100" height="173" patternUnits="userSpaceOnUse" patternTransform="scale(0.4)">
                        <path d="M50 0 L100 28.8 L100 86.5 L50 115.4 L0 86.5 L0 28.8 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
                        <path d="M50 115.4 L50 173.2" fill="none" stroke="currentColor" strokeWidth="4"/>
                        <path d="M0 86.5 L-50 115.4" fill="none" stroke="currentColor" strokeWidth="4"/>
                        <path d="M100 86.5 L150 115.4" fill="none" stroke="currentColor" strokeWidth="4"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexagons-logs)" />
            </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-8">
           <div>
             <span className="font-mono text-primary text-xs mb-2 block">// SOCIAL_PROOF_DB</span>
             <h2 className="text-4xl md:text-5xl font-bold uppercase text-neutral-900 dark:text-white tracking-tight">Client <span className="text-neutral-400 dark:text-neutral-700">Logs</span></h2>
           </div>
           <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
              <div className="w-2 h-2 bg-green-500 rounded-none animate-pulse" />
              <span className="font-mono text-[10px] text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">Transmission_Verified</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 rounded-none backdrop-blur-sm h-full"
            >
              {/* Decorative Corner Markers */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neutral-300 dark:border-neutral-700 group-hover:border-primary transition-colors rounded-none" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neutral-300 dark:border-neutral-700 group-hover:border-primary transition-colors rounded-none" />

              <div>
                <div className="flex justify-between items-start mb-6">
                    <Quote size={32} className="text-neutral-300 dark:text-neutral-700 group-hover:text-primary transition-colors" />
                    <ShieldCheck size={16} className="text-neutral-400 dark:text-neutral-600 group-hover:text-green-500 transition-colors" />
                </div>
                
                <p className="text-neutral-700 dark:text-neutral-300 font-mono text-sm leading-relaxed mb-8 relative z-10 border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 group-hover:border-primary transition-colors">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 pt-6 mt-auto">
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white uppercase tracking-wider text-sm">{t.name}</h4>
                  <p className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 mt-1 uppercase">
                    {t.role} @ <span className="text-primary font-bold">{t.company}</span>
                  </p>
                </div>
                
                <div className="flex flex-col items-end gap-1">
                  <div className="flex text-primary">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-[8px] font-mono text-neutral-400">INDEX: 5.0</span>
                </div>
              </div>

              {/* Scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
