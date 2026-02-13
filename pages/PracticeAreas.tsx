
import React from 'react';
import { LEGAL_SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const PracticeAreas: React.FC = () => {
  // Categorize services for better organization
  const categories = [
    {
      title: 'Litigation & Disputes',
      subtitle: 'Resolute advocacy in civil and criminal tribunals.',
      ids: ['criminal-law', 'labour-cases', 'rental-disputes', 'civil-cases', 'commercial-partnership', 'real-estate-litigation', 'cheque-bounce']
    },
    {
      title: 'Family & Private Client',
      subtitle: 'Discreet counsel for domestic and personal legacy matters.',
      ids: ['family-mutual', 'family-dispute', 'inheritance-cases', 'will-drafting', 'poa-spa-drafting']
    },
    {
      title: 'Corporate & Arbitration',
      subtitle: 'Strategic support for international commerce and DIAC/DIFC proceedings.',
      ids: ['agreement-drafting', 'diac-arbitration', 'difc-cases', 'debt-collection', 'legal-opinion']
    },
    {
      title: 'Regulatory & Advisory',
      subtitle: 'Compliance, investigations, and administrative procedures.',
      ids: ['administrative-cases', 'immigration-due-diligence']
    }
  ];

  return (
    <div className="bg-[#fcfbf7] min-h-screen animate-in fade-in duration-1000">
      {/* Cinematic Professional Header */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-black">
        {/* Cinematic Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Legal Headquarters" 
            className="w-full h-full object-cover grayscale brightness-[0.4] contrast-[1.1] scale-110 animate-ken-burns"
          />
          {/* Subtle gold atmospheric flare */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 text-center animate-slide-up">
          <div className="flex flex-col items-center mb-10">
            <span className="text-gold text-[11px] md:text-[13px] uppercase tracking-[0.9em] font-black mb-6 block drop-shadow-2xl">
              THE PRACTICE REPERTOIRE
            </span>
            <div className="w-16 h-[1px] bg-gold shadow-[0_0_15px_rgba(176,141,87,0.6)]"></div>
          </div>

          <h1 className="text-6xl md:text-[8rem] font-serif font-bold text-white tracking-tighter leading-[0.85] mb-10">
            Authoritative <span className="italic text-gold block md:inline">Legal</span> <br className="hidden md:block" /> Counsel
          </h1>
          
          <div className="flex justify-center mt-12">
            <div className="h-20 w-[1px] bg-gradient-to-b from-gold/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Categorized Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-40">
        {categories.map((category, catIdx) => (
          <section key={catIdx} className="animate-slide-up [animation-delay:200ms]">
            <div className="mb-16 border-l-4 border-gold pl-10">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-3 tracking-tight">{category.title}</h3>
              <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-black">{category.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {LEGAL_SERVICES.filter(service => category.ids.includes(service.id)).map((area) => (
                <Link 
                  key={area.id} 
                  to={`/practice-areas/${area.id}`}
                  className="group relative bg-white border border-black/[0.03] transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col h-full overflow-hidden"
                >
                  {/* Service Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-dark-primary/20 z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
                    
                    {/* Floating Icon Seal */}
                    <div className="absolute -bottom-6 left-10 w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center z-30 border border-gold/10 group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                      <svg className="w-7 h-7 text-gold transition-transform duration-500 group-hover:rotate-[360deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.icon} />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-10 pt-12 flex flex-col flex-grow">
                    <h4 className="text-xl font-serif font-bold text-[#1a1a1a] mb-5 group-hover:text-gold transition-colors duration-300 uppercase tracking-widest leading-tight">
                      {area.title}
                    </h4>
                    
                    <p className="text-[#1a1a1a]/60 text-[13px] leading-[1.9] mb-10 flex-grow font-medium tracking-wide">
                      {area.description}
                    </p>

                    <div className="mt-auto border-t border-black/5 pt-6 flex items-center justify-between">
                      <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-black group-hover:tracking-[0.5em] transition-all duration-500">
                        ESTABLISH COUNSEL
                      </span>
                      <svg className="w-4 h-4 text-gold transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Trust Quote / Call to Action */}
      <section className="py-32 bg-white border-t border-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#fdfbf2] -skew-x-12 translate-x-1/2 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <div className="inline-block p-6 bg-gold/10 rounded-full mb-10 border border-gold/20 shadow-inner">
            <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L4 5V11C4 16.19 7.41 20.92 12 22C16.59 20.92 20 16.19 20 11V5L12 2Z"/>
            </svg>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-dark-primary mb-10 italic leading-tight">"Integrity is the bedrock of our advocacy."</h3>
          <p className="text-black/50 text-xl leading-relaxed mb-16 font-medium max-w-2xl mx-auto">
            Our firm is uniquely positioned to handle high-stakes legal challenges across the MENA region. Every client is a testament to our pursuit of excellence.
          </p>
          <Link 
            to="/consultation" 
            className="inline-block px-16 py-6 bg-dark-primary text-gold font-black uppercase tracking-[0.6em] text-[12px] hover:bg-gold hover:text-black transition-all shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 active:scale-95"
          >
            REQUEST PRIVILEGED BRIEFING
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
