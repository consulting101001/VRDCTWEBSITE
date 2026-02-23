
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Minus, Sparkles, ShieldCheck } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Greetings. I am your legal concierge. How may I assist your inquiry today?", sender: 'ai', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      const userMsg: Message = { id: Date.now(), text: inputValue, sender: 'user', timestamp: new Date() };
      setMessages(prev => [...prev, userMsg]);
      setInputValue('');
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "AI is temporarily unavailable (missing API key).",
        sender: 'ai',
        timestamp: new Date()
      }]);
      return;
    }

    const userMsg: Message = { id: Date.now(), text: inputValue, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    const promptInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: promptInput,
        config: {
          systemInstruction: "You are the premium legal concierge for Verdicta, a high-end law firm. You are professional, authoritative, and helpful. Guide users to the consultation page for specific case analysis. Do not provide specific legal advice. If users ask about fees, mention discovery calls are complimentary.",
          temperature: 0.7,
        },
      });

      const aiMsg: Message = { 
        id: Date.now() + 1, 
        text: response.text || "I apologize, but I am unable to process your request at this time. Please contact our main office directly.", 
        sender: 'ai', 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Concierge AI error:", error);
      const errorMsg: Message = { 
        id: Date.now() + 1, 
        text: "My apologies, I am experiencing a temporary connection issue. Please feel free to use our contact form.", 
        sender: 'ai', 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[200]">
      {/* Floating Toggle Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-gold rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(176,141,87,0.5)] text-black group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Premium Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20, originX: 1, originY: 1 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="absolute bottom-20 md:bottom-24 right-0 w-[85vw] sm:w-[380px] md:w-[400px] h-[70vh] max-h-[600px] glass rounded-2xl border border-white/10 shadow-3xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 md:p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center space-x-4 md:space-x-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/40 flex items-center justify-center bg-gold/10 shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-gold">
                    <path d="M12 2.5L14 5L12 7.5L10 5L12 2.5Z" />
                    <path d="M11.5 7.5V19H12.5V7.5H11.5Z" />
                    <path d="M3.5 10.5C3.5 10.5 7.5 7.5 12 8.5C16.5 7.5 20.5 10.5 20.5 10.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M3.5 10.5L1.5 17M3.5 10.5L5.5 17" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M1.5 17C1.5 18.5 2.5 19 3.5 19C4.5 19 5.5 18.5 5.5 17H1.5Z" />
                    <path d="M20.5 10.5L18.5 17M20.5 10.5L22.5 17" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M18.5 17C18.5 18.5 19.5 19 20.5 19C21.5 19 22.5 18.5 22.5 17H18.5Z" />
                    <path d="M8.5 21C8.5 20 9.5 19 12 19C14.5 19 15.5 20 15.5 21H8.5Z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white truncate">Concierge Desk</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0"></span>
                    <span className="text-[8px] md:text-[9px] text-white/40 uppercase tracking-widest font-medium">Encrypted Channel</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
                <Minus className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-5 md:p-8 flex-grow overflow-y-auto space-y-6 scrollbar-hide">
              {messages.map((m) => (
                <motion.div 
                  key={m.id} 
                  initial={{ opacity: 0, x: m.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 md:p-5 rounded-lg text-[10px] md:text-[11px] leading-[1.8] tracking-wide font-light ${
                    m.sender === 'user' 
                    ? 'bg-gold text-black font-semibold' 
                    : 'bg-white/[0.03] text-white/80 border border-white/5'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.03] p-4 md:p-5 rounded-lg border border-white/5 flex space-x-1.5 items-center">
                    <span className="w-1 h-1 bg-gold rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-gold rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 h-1 bg-gold rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 md:p-6 border-t border-white/5 bg-black/20">
              <div className="relative group">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquiry details..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 md:py-4 px-4 md:px-6 pr-12 md:pr-14 text-[10px] tracking-[0.1em] text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/20"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-md bg-gold/10 hover:bg-gold text-gold hover:text-black transition-all flex items-center justify-center"
                >
                  <Send className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2 opacity-20">
                <ShieldCheck className="w-3 h-3" />
                <span className="text-[7px] uppercase tracking-[0.3em] font-bold">Attorney-Client Privilege Protected</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBox;
