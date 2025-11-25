
import React, { useState, useRef, useEffect } from 'react';
    import { X, Send, Loader2, Terminal } from 'lucide-react';
    import { sendMessageToGemini } from '../services/geminiService';
    
    interface Message {
      role: 'user' | 'model';
      text: string;
    }
    
    export const AIChat: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: "System Online. How can I assist you?" }
      ]);
      const [input, setInput] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const messagesEndRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);
    
      const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        const userMessage = input.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setInput('');
        setIsLoading(true);
        const response = await sendMessageToGemini(userMessage);
        setMessages(prev => [...prev, { role: 'model', text: response }]);
        setIsLoading(false);
      };
    
      return (
        <>
          <button
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-8 right-8 z-50 p-4 bg-primary text-black shadow-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors rounded-none ${isOpen ? 'hidden' : 'flex'}`}
          >
            <Terminal size={24} />
          </button>
    
          {isOpen && (
            <div className="fixed bottom-8 right-8 w-[350px] h-[500px] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 flex flex-col z-50 shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-200 rounded-none">
              <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary animate-pulse rounded-none" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">AI_TERMINAL</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-black dark:hover:text-white"><X size={18} /></button>
              </div>
    
              <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[90%] p-3 border rounded-none ${
                      msg.role === 'user' ? 'border-primary text-primary bg-primary/10' : 'border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900'
                    }`}>
                      <span className="block mb-1 text-[10px] opacity-50">{msg.role === 'user' ? '> USER' : '> SYSTEM'}</span>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && <div className="text-primary animate-pulse">Processing...</div>}
                <div ref={messagesEndRef} />
              </div>
    
              <div className="p-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="ENTER COMMAND..."
                    className="flex-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary font-mono rounded-none"
                  />
                  <button onClick={handleSend} disabled={isLoading} className="text-primary hover:text-black dark:hover:text-white transition-colors p-2">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      );
    };
