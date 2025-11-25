import React from 'react';
import { ArrowRight, Send } from 'lucide-react';

export const HireMe: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-primary animate-pulse" />
                <span className="font-mono text-primary text-xs tracking-widest uppercase">System_Status: Online // Ready_to_Connect</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-neutral-900 dark:text-white">
                Start A <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #FF6A3D' }}>New Project</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30">
            
            {/* Sidebar / Contact Info (Width 4/12) */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between bg-neutral-100 dark:bg-neutral-950">
                
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xs font-mono text-neutral-500 uppercase mb-6 tracking-wider">// Communication_Channels</h3>
                        
                        <a href="mailto:hello@peter.dev" className="group block mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-neutral-900 dark:text-white font-bold text-lg group-hover:text-primary transition-colors">hello@peter.dev</span>
                                <ArrowRight className="text-neutral-400 dark:text-neutral-600 group-hover:text-primary -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" size={18} />
                            </div>
                            <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800 group-hover:bg-primary/50 transition-colors" />
                            <span className="text-[10px] font-mono text-neutral-500 mt-1 block">RESPONSE_TIME: &lt; 24 HRS</span>
                        </a>

                        <a href="#" className="group block">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-neutral-900 dark:text-white font-bold text-lg group-hover:text-primary transition-colors">+1 (234) 567 890</span>
                                <ArrowRight className="text-neutral-400 dark:text-neutral-600 group-hover:text-primary -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" size={18} />
                            </div>
                            <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800 group-hover:bg-primary/50 transition-colors" />
                            <span className="text-[10px] font-mono text-neutral-500 mt-1 block">AVAILABLE: MON - FRI</span>
                        </a>
                    </div>
                </div>

                <div className="mt-12 lg:mt-0">
                     <div className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono leading-relaxed">
                            Looking for a custom solution? Fill out the transmission form to initialize a secure connection.
                        </p>
                     </div>
                </div>

            </div>

            {/* Form Section (Width 8/12) */}
            <div className="lg:col-span-8 bg-white/50 dark:bg-neutral-950/50 p-8 md:p-12 relative group">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neutral-300 dark:border-neutral-600 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neutral-300 dark:border-neutral-600 group-hover:border-primary transition-colors" />

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group/input">
                            <label className="block text-xs font-mono text-primary mb-2 uppercase group-focus-within/input:text-black dark:group-focus-within/input:text-white transition-colors">01 // Identity</label>
                            <input 
                                type="text" 
                                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-3 text-neutral-900 dark:text-white focus:outline-none focus:border-primary transition-all rounded-none placeholder:text-neutral-400 dark:placeholder:text-neutral-800 font-bold text-lg" 
                                placeholder="YOUR NAME" 
                            />
                        </div>
                        <div className="group/input">
                            <label className="block text-xs font-mono text-primary mb-2 uppercase group-focus-within/input:text-black dark:group-focus-within/input:text-white transition-colors">02 // Coordinates</label>
                            <input 
                                type="email" 
                                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-3 text-neutral-900 dark:text-white focus:outline-none focus:border-primary transition-all rounded-none placeholder:text-neutral-400 dark:placeholder:text-neutral-800 font-bold text-lg" 
                                placeholder="YOUR EMAIL" 
                            />
                        </div>
                    </div>

                    <div className="group/input">
                        <label className="block text-xs font-mono text-primary mb-2 uppercase group-focus-within/input:text-black dark:group-focus-within/input:text-white transition-colors">03 // Payload</label>
                        <textarea 
                            rows={5} 
                            className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-3 text-neutral-900 dark:text-white focus:outline-none focus:border-primary transition-all rounded-none placeholder:text-neutral-400 dark:placeholder:text-neutral-800 font-bold text-lg resize-none" 
                            placeholder="PROJECT DETAILS..." 
                        />
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button className="relative px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider hover:bg-primary dark:hover:bg-primary transition-all flex items-center gap-4 group/btn overflow-hidden border border-neutral-900 dark:border-white hover:border-primary dark:hover:border-primary">
                            <span className="relative z-10">Send Transmission</span>
                            <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                        </button>
                    </div>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};