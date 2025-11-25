import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1 mb-4">
                <AlertCircle size={14} className="text-primary" />
                <span className="font-mono text-primary text-[10px] tracking-widest uppercase">System_Support</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-neutral-900 dark:text-white mb-4">Troubleshooting</h2>
            <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">Common Protocols & Procedures</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className={`group border transition-all duration-300 ${
                openIndex === idx 
                  ? 'bg-white dark:bg-neutral-900 border-primary shadow-lg' 
                  : 'bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs ${openIndex === idx ? 'text-primary' : 'text-neutral-400'}`}>0{idx + 1} //</span>
                    <span className={`font-bold uppercase text-sm md:text-base ${openIndex === idx ? 'text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'}`}>
                        {faq.question}
                    </span>
                </div>
                <div className={`p-1 border ${openIndex === idx ? 'border-primary text-primary bg-primary/10' : 'border-neutral-300 dark:border-neutral-700 text-neutral-400'}`}>
                    {openIndex === idx ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 pl-16 pr-8">
                       <p className="font-mono text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 border-l-2 border-primary/50 pl-4">
                         {faq.answer}
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};