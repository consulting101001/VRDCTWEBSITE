
import React from 'react';
import { LAWYER_EXPERTISE } from '../constants';
import { Link } from 'react-router-dom';

const Expertise: React.FC = () => {
  return (
    <div className="bg-[#fcfbf7] min-h-screen animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-20 px-8 overflow-hidden bg-dark-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000" 
            alt="Background pattern" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-primary/60 to-dark-primary"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-gold text-[13px] uppercase tracking-[0.8em] font-black mb-8 animate-slide-up">
            PROFESSIONAL SPECIALISMS
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
            Expertise That <br/> Defines <span className="italic text-gold">Legacies.</span>
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-8"></div>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Our lawyers aren't just practitioners; they are masters of their specific domains. 
            We provide specialized advocacy across the most complex sectors of global law.
          </p>
        </div>
      </section>

      {/* Detailed Expertise Sections - Alternating Layout */}
      <section className="py-24 space-y-32">
        {LAWYER_EXPERTISE.map((area, idx) => (
          <div key={area.id} className="max-w-7xl mx-auto px-8 lg:px-12 overflow-hidden">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content Side */}
              <div className={`space-y-10 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center space-x-6">
                  <div className="text-gold text-4xl font-serif font-bold opacity-30">0{idx + 1}</div>
                  <div className="h-[1px] w-12 bg-gold/30"></div>
                  <div className="text-gold text-[10px] uppercase tracking-[0.4em] font-black">LEGAL DOMAIN</div>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] tracking-tight leading-tight">
                  {area.title}
                </h3>
                
                <p className="text-[#444] text-xl font-serif italic border-l-4 border-gold/20 pl-8 leading-relaxed">
                  "{area.description}"
                </p>
                
                <p className="text-[#666] text-lg leading-relaxed font-light">
                  {area.longDescription}
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  {area.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-3 group">
                      <svg className="w-5 h-5 text-gold mt-1 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-black uppercase tracking-widest text-[#1a1a1a]/80 group-hover:text-gold transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link 
                    to={`/practice-areas/${area.id}`}
                    className="inline-block px-10 py-4 bg-dark-primary text-gold text-[11px] uppercase tracking-[0.4em] font-black hover:bg-gold hover:text-black transition-all shadow-xl"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>

              {/* Visual Side */}
              <div className={`relative group ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700"></div>
                <div className="relative overflow-hidden shadow-2xl rounded-sm h-[600px]">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-transparent to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-8 left-8 p-4 bg-white/10 backdrop-blur-md border border-white/20">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.icon} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Closing Statement */}
      <section className="py-32 bg-[#fafafc] border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h4 className="text-gold text-[10px] uppercase tracking-[0.5em] font-black mb-6">ESTABLISHED TRADITION</h4>
          <h3 className="text-4xl font-serif font-bold text-[#1a1a1a] mb-8 leading-tight italic">"True expertise is found at the intersection of history and innovation."</h3>
          <p className="text-[#666] text-lg font-light leading-relaxed mb-12">
            Our firm represents a curated selection of the worlds finest legal minds. 
            We invite you to experience advocacy as it was meant to be—powerful, precise, and profoundly effective.
          </p>
          <div className="flex justify-center space-x-8">
            <Link to="/contact" className="px-12 py-4 border-2 border-dark-primary text-dark-primary font-black uppercase tracking-[0.4em] text-[11px] hover:bg-dark-primary hover:text-white transition-all">
              CONTACT OUR OFFICE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
