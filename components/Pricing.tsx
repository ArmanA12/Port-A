import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Square } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
           <span className="font-mono text-primary text-xs mb-2 block">// INVESTMENT_PLANS</span>
           <h2 className="text-4xl md:text-5xl font-bold uppercase text-neutral-900 dark:text-white">Service <span className="text-neutral-400 dark:text-neutral-700">Catalog</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 border ${idx === 1 ? 'border-primary bg-white dark:bg-neutral-900 shadow-xl' : 'border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950'} flex flex-col group hover:border-primary/50 transition-colors`}
            >
              {idx === 1 && (
                <div className="absolute -top-3 left-8 px-2 py-0.5 bg-primary text-black text-[10px] font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 uppercase">{plan.title}</h3>
              <div className="text-3xl font-mono font-bold text-neutral-700 dark:text-neutral-200 mb-6">{plan.price}</div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-8 leading-relaxed font-mono border-l-2 border-neutral-300 dark:border-neutral-800 pl-4">
                {plan.description}
              </p>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <Square size={6} className={`rotate-45 ${idx===1 ? 'fill-primary text-primary' : 'fill-neutral-400 text-neutral-400 dark:fill-neutral-600 dark:text-neutral-600'}`} />
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                idx === 1 
                  ? 'bg-primary text-black border-primary hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white' 
                  : 'bg-transparent text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white'
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};