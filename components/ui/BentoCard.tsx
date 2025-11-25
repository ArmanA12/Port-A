import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  colSpan?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", title, subtitle, colSpan = "col-span-1" }) => {
  return (
    <div className={`relative group bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 overflow-hidden transition-all duration-300 hover:border-primary/50 ${colSpan} ${className}`}>
      
      {/* Technical Corner Markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-400 dark:border-neutral-600 group-hover:border-primary transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-400 dark:border-neutral-600 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-400 dark:border-neutral-600 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-400 dark:border-neutral-600 group-hover:border-primary transition-colors" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {(title || subtitle) && (
          <div className="mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-4 flex justify-between items-end">
            <div>
                {title && <h3 className="text-xl font-bold font-display tracking-tight text-neutral-900 dark:text-white uppercase">{title}</h3>}
                {subtitle && <p className="text-xs font-mono text-primary/80 mt-1 uppercase tracking-wider">[ {subtitle} ]</p>}
            </div>
            <div className="w-2 h-2 bg-neutral-300 dark:bg-neutral-800 group-hover:bg-primary transition-colors" />
          </div>
        )}
        {children}
      </div>

      {/* Scanline Effect on Hover */}
      <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
    </div>
  );
};