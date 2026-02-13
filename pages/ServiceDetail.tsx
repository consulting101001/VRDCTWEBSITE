
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRACTICE_AREAS } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const area = PRACTICE_AREAS.find((a) => a.id === id);

  if (!area) return <Navigate to="/practice-areas" />;

  return (
    <div className="min-h-screen bg-[#fafafc] animate-in fade-in duration-1000 pb-20">
      {/* Header Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={area.image} 
            alt={area.title} 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c1a2b]/40 to-[#0c1a2b]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <Link to="/practice-areas" className="text-gold text-[10px] uppercase tracking-[0.5em] font-black mb-8 inline-block hover:translate-x-[-10px] transition-transform">
            ← BACK TO ALL SERVICES
          </Link>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 tracking-wide drop-shadow-2xl">
            {area.title}
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-2 bg-white p-12 md:p-20 shadow-2xl rounded-sm border-t-8 border-gold">
            <h2 className="text-xs uppercase tracking-[0.6em] text-gold font-black mb-8">Strategic Overview</h2>
            <p className="text-2xl font-serif text-[#1a1a1a] leading-relaxed mb-10 italic">
              "{area.description}"
            </p>
            <div className="prose prose-lg text-[#333] leading-[2] font-medium space-y-8">
              <p>{area.longDescription}</p>
              <p>
                Our approach to {area.title} is built on a foundation of rigorous research and a deep understanding of the global landscape. We don't just provide legal advice; we offer strategic business intelligence designed to protect your interests at every turn.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
              {area.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-6 p-6 bg-[#f8fbff] border-l-4 border-gold group hover:bg-gold hover:text-black transition-all">
                  <span className="text-gold group-hover:text-black font-serif text-xl font-bold">0{idx + 1}</span>
                  <span className="text-sm uppercase tracking-widest font-black">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-[#0c1a2b] p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold opacity-10 rounded-bl-full group-hover:scale-110 transition-transform"></div>
              <h3 className="text-xl font-serif font-bold mb-8 text-gold border-b border-gold/20 pb-4">Schedule a Briefing</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-10 font-medium">
                Our partners are available for a confidential discovery call to evaluate the specifics of your requirements in {area.title}.
              </p>
              <Link 
                to="/consultation" 
                className="block w-full text-center py-5 bg-gold text-[#0c1a2b] font-black uppercase tracking-[0.4em] text-[11px] hover:bg-white transition-all shadow-xl"
              >
                REQUEST BRIEFING
              </Link>
            </div>

            <div className="bg-white p-12 shadow-xl border border-black/5">
              <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#1a1a1a] font-black mb-8">Why Verdicta</h4>
              <ul className="space-y-8">
                {[
                  { t: 'Decisive Action', d: 'Swift resolution through superior strategic positioning.' },
                  { t: 'Global Access', d: 'Network of expert counsel across 50+ jurisdictions.' },
                  { t: 'Absolute Privacy', d: 'Uncompromising attorney-client privilege protocols.' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <div className="text-[11px] uppercase tracking-widest font-black text-gold mb-2">{item.t}</div>
                    <p className="text-[13px] text-black/50 leading-relaxed font-medium">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
