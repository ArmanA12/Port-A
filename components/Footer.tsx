import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 text-center bg-neutral-100 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-2xl font-bold tracking-tighter uppercase text-neutral-900 dark:text-white">Peter.Dev</div>
             <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
                System Online. © 2024. All Rights Reserved.
            </p>
        </div>
    </footer>
  );
};