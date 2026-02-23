
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Award, Users, Gavel, ShieldCheck, Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What should I prepare for my first consultation?",
    answer: "To maximize the efficiency of our first session, please bring all relevant documentation, including contracts, official correspondence, or court notices. A brief chronological timeline of events is also highly beneficial for our initial assessment."
  },
  {
    question: "Does Verdicta handle international legal matters?",
    answer: "Yes. While we are specialists in UAE law, our firm maintains a robust network of global partners and deep expertise in cross-border litigation, DIFC common law, and international arbitration proceedings."
  },
  {
    question: "Are discovery calls and consultations confidential?",
    answer: "Absolutely. Attorney-client privilege is a cornerstone of our practice and applies from your very first point of contact with our concierge desk. Your privacy and data security are protected by rigorous confidentiality protocols."
  },
  {
    question: "How are legal fees structured at Verdicta?",
    answer: "We provide transparent fee structures tailored to the complexity of the matter. This includes fixed-fee advisory for standard procedures, hourly rates for complex litigation, and bespoke retainer models for our corporate clients."
  },
  {
    question: "What is the typical timeline for a debt recovery case?",
    answer: "Timelines depend heavily on the debtor's response and the nature of the claim. However, our expedited Performance Order procedures often yield results significantly faster than traditional litigation routes."
  }
];

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative">
      <style>
        {`
          @keyframes ken-burns {
            0% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.1) translate(-1%, -1%); }
            100% { transform: scale(1) translate(0, 0); }
          }
          @keyframes ambient-shift {
            0%, 100% { opacity: 0.4; transform: translateX(-50%) translateY(0); }
            50% { opacity: 0.6; transform: translateX(-48%) translateY(-2%); }
          }
          .animate-ken-burns {
            animation: ken-burns 30s ease-in-out infinite;
          }
          .animate-ambient {
            animation: ambient-shift 15s ease-in-out infinite;
          }
        `}
      </style>

      {/* Cinematic Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background Layer with Cinematic Lighting */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80" 
            alt="Law Firm" 
            className="w-full h-full object-cover grayscale brightness-[0.6] contrast-[1.2] animate-ken-burns"
          />
          {/* Animated Gold Ambient Light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-full bg-gradient-to-b from-gold/10 via-transparent to-transparent z-10 blur-3xl pointer-events-none opacity-50 animate-ambient"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 flex flex-col items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-6 space-y-2"
          >
            <div className="w-12 h-[1px] bg-gold mb-4 shadow-[0_0_10px_rgba(176,141,87,0.5)]"></div>
            <span className="text-gold text-[10px] md:text-[12px] uppercase tracking-[0.7em] font-black">
              PROFESSIONAL LEGAL COUNSEL
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[9rem] font-serif font-bold text-white tracking-[0.1em] md:tracking-[0.2em] mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            VERDICTA
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-14 overflow-hidden"
          >
             <div className="h-[1px] w-48 bg-white/20 mx-auto mb-6"></div>
             <p className="text-white/80 text-[11px] md:text-[13px] uppercase tracking-[0.6em] font-bold">
               ADVOCACY. INTEGRITY. EXCELLENCE.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/practice-areas"
              className="btn-ghost-gold px-14 py-4 text-white text-[10px] font-bold uppercase tracking-[0.4em] transition-all bg-gold/5"
            >
              VIEW EXPERTISE
            </Link>
            <Link
              to="/consultation"
              className="btn-ghost-gold px-14 py-4 text-white text-[10px] font-bold uppercase tracking-[0.4em] transition-all bg-gold/5"
            >
              CONSULTATION
            </Link>
          </motion.div>
        </div>

        {/* Scroll Explorer Indicator */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60"
        >
          <div className="w-[1px] h-14 bg-gradient-to-b from-gold to-transparent"></div>
          <span className="text-[8px] uppercase tracking-[0.4em] text-white mt-4 font-black">EXPLORE</span>
        </motion.div>
      </section>

      {/* Professional Stats Section */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Years Experience', value: '25+', icon: Award },
              { label: 'Cases Managed', value: '1.2k+', icon: Gavel },
              { label: 'Awarded Amount', value: '$500m+', icon: ShieldCheck },
              { label: 'Client Success', value: '98%', icon: Users },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="group"
              >
                <stat.icon className="w-6 h-6 text-gold/40 mx-auto mb-4 group-hover:text-gold transition-colors duration-500" />
                <div className="text-4xl md:text-5xl font-serif text-white group-hover:text-gold transition-colors duration-700 mb-2 font-bold">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Preview of Services */}
      <section className="py-32 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-8">
           <div className="mb-20">
              <h2 className="text-gold text-[10px] uppercase tracking-[0.4em] font-black mb-4">Elite Defense</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white max-w-2xl leading-tight">Masters of <span className="italic">Litigation & Counsel.</span></h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
             {PRACTICE_AREAS.slice(0, 3).map((area, idx) => (
                <motion.div 
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-[#0f0f0f] p-12 hover:bg-[#151515] transition-colors group cursor-pointer border border-transparent hover:border-gold/20"
                >
                   <div className="text-3xl mb-8 opacity-40 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-2">
                     <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.icon} />
                     </svg>
                   </div>
                   <h4 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors uppercase tracking-widest">{area.title}</h4>
                   <p className="text-white/50 text-[12px] leading-[1.8] mb-8 font-medium tracking-wide">{area.description}</p>
                   <Link to={`/practice-areas/${area.id}`} className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-white/60 group-hover:text-gold font-black inline-block border-b border-white/10 group-hover:border-gold pb-1 transition-all">
                     <span>DISCOVER</span>
                     <ArrowRight className="w-3 h-3" />
                   </Link>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <HelpCircle className="w-8 h-8 text-gold mb-6 opacity-50" />
              <h2 className="text-gold text-[10px] uppercase tracking-[0.5em] font-black mb-4">Common Inquiries</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Frequently Asked <span className="italic">Questions.</span></h3>
              <div className="w-16 h-[1px] bg-gold/30"></div>
            </motion.div>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-white/5 bg-white/[0.02] overflow-hidden rounded-lg transition-all hover:border-gold/20"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                >
                  <span className="text-sm md:text-base font-serif font-bold text-white/90 group-hover:text-gold transition-colors tracking-wide">
                    {item.question}
                  </span>
                  <div className={`shrink-0 ml-4 transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : 'rotate-0'}`}>
                    {openFaq === idx ? (
                      <Minus className="w-4 h-4 text-gold" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/20 group-hover:text-gold" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8">
                        <div className="h-[1px] w-full bg-white/5 mb-6"></div>
                        <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed font-light tracking-wide">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions? */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center p-10 border border-gold/10 bg-gold/[0.02] rounded-2xl"
          >
            <h4 className="text-white text-lg font-serif mb-4 italic">Still have unanswered questions?</h4>
            <p className="text-white/40 text-[12px] uppercase tracking-widest mb-8">Our concierge desk is available for immediate assistance.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-3 text-gold text-[10px] font-black uppercase tracking-[0.4em] border-b border-gold/30 pb-1 hover:border-gold hover:text-white transition-all"
            >
              <span>CONTACT OUR OFFICE</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
