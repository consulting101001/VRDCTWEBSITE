
import React from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS } from '../constants';

const Home: React.FC = () => {
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
          <div className="flex flex-col items-center mb-6 space-y-2">
            <div className="w-12 h-[1px] bg-gold mb-4 shadow-[0_0_10px_rgba(176,141,87,0.5)]"></div>
            <span className="text-gold text-[10px] md:text-[12px] uppercase tracking-[0.7em] font-black animate-slide-up">
              PROFESSIONAL LEGAL COUNSEL
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-serif font-bold text-white tracking-[0.2em] mb-4 animate-fade-in [animation-delay:0.3s] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            VERDICTA
          </h1>

          <div className="mb-14 overflow-hidden">
             <div className="h-[1px] w-48 bg-white/20 mx-auto mb-6"></div>
             <p className="text-white/80 text-[11px] md:text-[13px] uppercase tracking-[0.6em] font-bold animate-slide-up [animation-delay:0.6s]">
               ADVOCACY. INTEGRITY. EXCELLENCE.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in [animation-delay:0.9s]">
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
          </div>
        </div>

        {/* Scroll Explorer Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 animate-float">
          <div className="w-[1px] h-14 bg-gradient-to-b from-gold to-transparent"></div>
          <span className="text-[8px] uppercase tracking-[0.4em] text-white mt-4 font-black">EXPLORE</span>
        </div>
      </section>

      {/* Professional Stats Section */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Years Experience', value: '25+' },
              { label: 'Cases Managed', value: '1.2k+' },
              { label: 'Awarded Amount', value: '$500m+' },
              { label: 'Client Success', value: '98%' },
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="text-4xl md:text-5xl font-serif text-white group-hover:text-gold transition-colors duration-700 mb-2 font-bold">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black">{stat.label}</div>
              </div>
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
             {PRACTICE_AREAS.slice(0, 3).map((area) => (
                <div key={area.id} className="bg-[#0f0f0f] p-12 hover:bg-[#151515] transition-colors group cursor-pointer border border-transparent hover:border-gold/20">
                   <div className="text-3xl mb-8 opacity-40 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-2">
                     <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.icon} />
                     </svg>
                   </div>
                   <h4 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors uppercase tracking-widest">{area.title}</h4>
                   <p className="text-white/50 text-[12px] leading-[1.8] mb-8 font-medium tracking-wide">{area.description}</p>
                   <Link to={`/practice-areas/${area.id}`} className="text-[10px] uppercase tracking-[0.3em] text-white/60 group-hover:text-gold font-black inline-block border-b border-white/10 group-hover:border-gold pb-1 transition-all">
                     DISCOVER
                   </Link>
                </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
