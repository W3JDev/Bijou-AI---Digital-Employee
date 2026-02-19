import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, Zap } from 'lucide-react';
import { sendMessageToBijou } from '../services/gemini';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export const DemoChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hello Boss! Bijou here. I can help you manage appointments or answer queries while you relax. What business you running?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExcited, setIsExcited] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Filter history for API context
    const history = messages.map(m => ({ role: m.role, content: m.content }));
    
    // Call Gemini API
    const responseText = await sendMessageToBijou(history, userMsg.content);

    setMessages(prev => [...prev, { role: 'model', content: responseText }]);
    setIsLoading(false);

    // Check for Manglish keywords to trigger animation
    const manglishKeywords = /walao|boss|can|settle|aiyo|fuyoh|best|swee|on|roger/i;
    if (manglishKeywords.test(responseText)) {
        setIsExcited(true);
        setTimeout(() => setIsExcited(false), 2000); // Glow for 2 seconds
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-panel-3d border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            LIVE PREVIEW
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Talk to Bijou</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Experience the "Manglish" difference. Try asking about pricing, or try to book a slot.</p>
        </motion.div>

        <div className="glass-panel-3d rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[700px] border border-white/10 relative ring-1 ring-white/5">
          {/* Chat Header */}
          <div className="bg-white/5 border-b border-white/5 p-6 flex items-center gap-4 backdrop-blur-md">
             <div className="relative">
               <motion.div 
                 animate={isExcited ? { 
                     scale: [1, 1.3, 0.9, 1.1, 1],
                     boxShadow: [
                       "0 0 0px rgba(16,185,129,0)", 
                       "0 0 40px rgba(16,185,129,0.9)", 
                       "0 0 20px rgba(16,185,129,0.5)",
                       "0 0 50px rgba(16,185,129,1)",
                       "0 0 0px rgba(16,185,129,0)"
                     ],
                     backgroundColor: ["#059669", "#34d399", "#10b981", "#34d399", "#059669"],
                     rotate: [0, -10, 10, -5, 0]
                 } : {}}
                 transition={{ duration: 0.8, ease: "easeInOut" }}
                 className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold z-10 relative text-xl shadow-lg shadow-emerald-500/20 border-2 border-emerald-400/30"
               >
                  B
               </motion.div>
               <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-gray-800 z-20 shadow-md"></div>
             </div>
             <div>
               <div className="font-bold text-white text-lg">Bijou Digital Employee</div>
               <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium tracking-wide mt-0.5">
                 <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_5px_#34d399]"></span>
                 Online • Replies Instantly
               </div>
             </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-black/30 to-black/50 scroll-smooth">
            {messages.map((msg, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-gray-700' : 'bg-emerald-600'}`}>
                  {msg.role === 'user' ? <User className="w-5 h-5 text-gray-300" /> : <Bot className="w-5 h-5 text-white" />}
                </div>
                <div className={`rounded-2xl p-5 max-w-[80%] shadow-lg ${
                  msg.role === 'user' 
                    ? 'glossy-pill rounded-tr-none text-white' 
                    : 'glossy-pill-emerald rounded-tl-none text-emerald-50'
                }`}>
                  <p className="text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </motion.div>
            ))}
            {isLoading && (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="flex gap-4"
               >
                 <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Bot className="w-5 h-5 text-white" />
                 </div>
                 <div className="glossy-pill-emerald p-5 rounded-2xl rounded-tl-none flex items-center gap-3 shadow-lg">
                    <Loader2 className="w-5 h-5 text-emerald-400 animate-spin" />
                    <span className="text-sm text-emerald-400 font-medium">Bijou is typing...</span>
                 </div>
               </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white/5 border-t border-white/5 backdrop-blur-xl">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message (e.g. 'How much ah?', 'Can help with property?')"
                className="w-full bg-black/40 border border-white/10 rounded-xl pl-6 pr-14 py-5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all shadow-inner text-base"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2.5 top-2.5 p-2.5 bg-emerald-500 hover:bg-emerald-400 text-dark-900 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                <Zap className="w-3 h-3 text-emerald-500" />
                Powered by Gemini. Bijou may display inaccurate info about people or places.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};