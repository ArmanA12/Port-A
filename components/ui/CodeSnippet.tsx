
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Terminal, FileCode, FileJson, FileType } from 'lucide-react';

const FILES = [
  {
    name: 'Developer.tsx',
    icon: FileCode,
    lang: 'tsx',
    content: `const Peter = {
  role: "Software Engineer",
  stack: ["React", "Next.js", "Node"],
  passion: "Building digital experiences",
  status: "Available_for_Hire",
  
  code: () => {
    return "High Quality & Scalable";
  }
};

export default Peter;`
  },
  {
    name: 'Skills.ts',
    icon: FileType,
    lang: 'typescript',
    content: `interface TechStack {
  frontend: string[];
  backend: string[];
}

const Arsenal: TechStack = {
  frontend: ["React", "Tailwind", "Framer"],
  backend: ["Node", "Supabase", "AWS"],
};`
  },
  {
    name: 'System.config',
    icon: FileJson,
    lang: 'json',
    content: `{
  "theme": "Neo-Industrial",
  "performance": "Optimized",
  "security": "High",
  "uptime": "99.9%"
}`
  }
];

export const CodeSnippet: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [displayedContent, setDisplayedContent] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typing effect logic
  useEffect(() => {
    setIsTyping(true);
    setDisplayedContent('');
    let currentIndex = 0;
    const fullText = FILES[activeTab].content;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedContent(prev => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 15); // Typing speed

    return () => clearInterval(typingInterval);
  }, [activeTab]);

  // Syntax highlighting helper (simple version)
  const highlightSyntax = (code: string) => {
    return code.split(/(\s+)/).map((token, index) => {
      if (token.match(/const|interface|export|default|return|import|from/)) return <span key={index} className="text-primary font-bold">{token}</span>;
      if (token.match(/string|number|boolean|void|any/)) return <span key={index} className="text-blue-400">{token}</span>;
      if (token.match(/".*?"/)) return <span key={index} className="text-orange-300">{token}</span>;
      if (token.match(/{|}|\[|\]|\(|\)/)) return <span key={index} className="text-neutral-400">{token}</span>;
      if (token.match(/\/\/.*/)) return <span key={index} className="text-neutral-500 italic">{token}</span>;
      if (token.match(/[A-Z][a-zA-Z]*/)) return <span key={index} className="text-yellow-200">{token}</span>;
      return <span key={index} className="text-neutral-300">{token}</span>;
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-lg mx-auto bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-none overflow-hidden shadow-2xl group hover:border-primary/30 transition-colors"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-neutral-800">
        <div className="flex gap-2">
          {/* Square Window Controls */}
          <div className="w-3 h-3 rounded-none bg-red-500/80 hover:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-none bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-none bg-green-500/80 hover:bg-green-500 transition-colors" />
        </div>
        <div className="text-xs font-mono text-neutral-500 flex items-center gap-2">
          <Terminal size={12} />
          <span>root@Peter-dev:~</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-800 bg-neutral-950/50">
        {FILES.map((file, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono transition-colors border-r border-neutral-800 relative rounded-none ${
              activeTab === idx 
                ? 'text-primary bg-neutral-900' 
                : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/50'
            }`}
          >
            {activeTab === idx && (
              <motion.div 
                layoutId="activeTab"
                className="absolute top-0 left-0 right-0 h-0.5 bg-primary" 
              />
            )}
            <file.icon size={12} />
            {file.name}
          </button>
        ))}
      </div>

      {/* Editor Content */}
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[300px] bg-neutral-900/50">
        <div className="flex">
          {/* Line Numbers */}
          <div className="flex flex-col text-right pr-4 text-neutral-700 select-none border-r border-neutral-800 mr-4 font-mono text-xs leading-relaxed py-[2px]">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="hover:text-neutral-500 transition-colors">{i + 1}</span>
            ))}
          </div>

          {/* Code */}
          <div className="whitespace-pre">
            {highlightSyntax(displayedContent)}
            {isTyping && (
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
              />
            )}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-1 bg-neutral-950 border-t border-neutral-800 text-[10px] font-mono text-neutral-500">
        <div className="flex gap-4">
          <span>main*</span>
          <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-none bg-primary animate-pulse" /> Ready</span>
        </div>
        <div>
           {FILES[activeTab].lang.toUpperCase()}
        </div>
      </div>
    </motion.div>
  );
};
