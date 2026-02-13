
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-[#fcfbf7] min-h-screen animate-in fade-in duration-1000">
      {/* Hero Section: Professional Identity */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1589210339058-df3750047f28?auto=format&fit=crop&q=80&w=2000" 
            alt="Background pattern" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-gold text-[13px] uppercase tracking-[0.6em] font-black mb-12 animate-slide-up">
            OUR PROFESSIONAL IDENTITY
          </h1>
          
          <div className="mb-16 animate-fade-in [animation-delay:0.3s]">
            <h2 className="text-6xl md:text-[8rem] font-serif font-bold text-[#1a1a1a] leading-[0.9] tracking-tight mb-2">
              ADVOCACY
            </h2>
            <h2 className="text-6xl md:text-[8rem] font-serif font-bold text-[#1a1a1a] leading-[0.9] tracking-tight mb-2">
              THROUGH
            </h2>
            <h2 className="text-6xl md:text-[8rem] font-serif font-bold text-[#8b5e3c] leading-[0.9] tracking-tight">
              INTEGRITY
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-10 animate-slide-up [animation-delay:0.6s]">
            <p className="text-[#444] text-2xl font-serif italic leading-relaxed border-l-2 border-gold/30 pl-8 text-left mx-auto">
              "Justice is not just an outcome, but a process built on absolute clarity and trust."
            </p>
          </div>
        </div>
      </section>

      {/* Founding Narrative & Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Legal Team" 
                  className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-gold text-[12px] uppercase tracking-[0.5em] font-black">OUR ORIGIN</h3>
              <h4 className="text-4xl font-serif font-bold text-[#1a1a1a] leading-tight">Bridging the complexity gap.</h4>
              <p className="text-[#666] text-lg leading-relaxed font-light">
                Verdicta Legal Consultants was founded to bridge the gap between legal complexity and real-world decision-making. We believe legal advice should be understandable, strategic, and empowering — not intimidating.
              </p>
              <div className="flex space-x-12 pt-8">
                <div className="group cursor-pointer">
                  <Link to="/consultation">
                    <h4 className="text-sm font-serif font-bold text-[#1a1a1a] tracking-widest mb-2 uppercase">CONSULTATION</h4>
                    <div className="w-10 h-[1px] bg-gold mb-3 transition-all group-hover:w-full"></div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#999] font-black group-hover:text-gold transition-colors">INQUIRE NOW</span>
                  </Link>
                </div>
                <div className="group cursor-pointer">
                  <Link to="/practice-areas">
                    <h4 className="text-sm font-serif font-bold text-[#1a1a1a] tracking-widest mb-2 uppercase">EXPERTISE</h4>
                    <div className="w-10 h-[1px] bg-gold mb-3 transition-all group-hover:w-full"></div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#999] font-black group-hover:text-gold transition-colors">VIEW SPECIALISMS</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Visual Cards */}
      <section className="py-32 bg-[#fcfbf7] border-y border-gold/5">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="group relative h-[400px] overflow-hidden rounded-sm shadow-xl flex flex-col justify-end p-12">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                alt="Mission background" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] transition-all duration-1000 group-hover:scale-110 group-hover:brightness-[0.4]"
              />
              <div className="relative z-10">
                <div className="text-gold text-[10px] uppercase tracking-[0.5em] font-black mb-4">OUR MISSION</div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">Empowering Informed Decisions</h3>
                <p className="text-white/70 text-base leading-relaxed font-light">
                  To provide clear, authoritative, and results-oriented legal consultancy that enables our clients to make informed decisions with confidence.
                </p>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="group relative h-[400px] overflow-hidden rounded-sm shadow-xl flex flex-col justify-end p-12">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Vision background" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] transition-all duration-1000 group-hover:scale-110 group-hover:brightness-[0.4]"
              />
              <div className="relative z-10">
                <div className="text-gold text-[10px] uppercase tracking-[0.5em] font-black mb-4">OUR VISION</div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">Excellence & Strategic Impact</h3>
                <p className="text-white/70 text-base leading-relaxed font-light">
                  To be a trusted legal consultancy recognized for integrity, excellence, and strategic impact across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - 4 Core Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center mb-20">
          <h2 className="text-gold text-[11px] uppercase tracking-[0.6em] font-black mb-4">OUR PHILOSOPHY</h2>
          <h3 className="text-5xl font-serif font-bold text-[#1a1a1a]">Core Professional Values</h3>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                id: '01', 
                title: 'Unwavering Integrity', 
                desc: 'Adhering to the highest ethical standards in every engagement, ensuring our reputation is as solid as our legal advice.' 
              },
              { 
                id: '02', 
                title: 'Strategic Precision', 
                desc: 'Analytical depth that transforms complex legal issues into clear, actionable opportunities for our clients.' 
              },
              { 
                id: '03', 
                title: 'Absolute Discretion', 
                desc: 'Protecting client interests through rigorous confidentiality protocols and high-level security measures.' 
              },
              { 
                id: '04', 
                title: 'Resolute Advocacy', 
                desc: 'Passionate and tireless pursuit of our clients legal and commercial goals with unwavering commitment.' 
              }
            ].map((val) => (
              <div key={val.id} className="group flex flex-col items-center text-center">
                <div className="text-5xl font-serif text-gold/20 group-hover:text-gold transition-all duration-700 mb-6 font-bold transform group-hover:-translate-y-2">
                  {val.id}
                </div>
                <h4 className="text-sm uppercase tracking-[0.3em] font-black text-[#1a1a1a] mb-4 border-b-2 border-gold/10 pb-2 group-hover:border-gold transition-colors">
                  {val.title}
                </h4>
                <p className="text-[#666] text-sm leading-relaxed font-medium px-4">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Context / Office Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Our Office Environment" 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8 italic">A culture of excellence.</h3>
          <p className="text-gold text-[10px] uppercase tracking-[0.8em] font-black">ESTABLISHED IN NEW YORK</p>
        </div>
      </section>
    </div>
  );
};

export default About;
