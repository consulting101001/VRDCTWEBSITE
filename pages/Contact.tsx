import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#f4f7f9] to-[#e9edf2] min-h-screen animate-in fade-in duration-700">
      {/* Background Graphic Section with Cinematic Visual */}
      <section className="relative py-24 md:py-48 overflow-hidden border-b border-blue-900/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic Background" 
            className="w-full h-full object-cover opacity-30 contrast-[1.1] grayscale"
          />
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-gold text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-black mb-4 md:mb-6">Strategic Presence</h1>
          <h2 className="text-3xl md:text-7xl font-serif font-bold text-[#1a2b3c] tracking-tight uppercase leading-tight">UNITED ARAB EMIRATES</h2>
          <div className="mt-4 text-gold text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold">Global Operations Center</div>
        </div>
      </section>

      <section className="py-12 md:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-12 md:space-y-16">
            <div className="border-l-4 border-gold pl-6 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a2b3c] mb-4 md:mb-6">Connect With Our Experts</h3>
              <p className="text-[#1a2b3c]/70 text-base md:text-lg leading-relaxed font-light max-w-md">
                Whether you need clarity on a legal issue or ongoing legal support, Verdicta Legal Consultants is ready to assist you through our dedicated regional channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div className="space-y-10 md:space-y-12">
                {/* 01 Principal Office */}
                <div className="flex items-start space-x-5 md:space-x-6">
                  <div className="text-gold text-base md:text-lg font-serif font-bold pt-1">01</div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#1a2b3c] font-black mb-2 md:mb-3">Principal Office</h4>
                    <p className="text-[#1a2b3c]/60 text-xs md:text-sm leading-relaxed font-black uppercase tracking-widest">
                      UNITED ARAB EMIRATES
                    </p>
                  </div>
                </div>

                {/* 02 Email Channel */}
                <div className="flex items-start space-x-5 md:space-x-6">
                  <div className="text-gold text-base md:text-lg font-serif font-bold pt-1">02</div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#1a2b3c] font-black mb-2 md:mb-3">Professional Email</h4>
                    <div className="space-y-2">
                      <p className="text-[#1a2b3c]/60 text-xs md:text-sm leading-relaxed font-bold break-all">
                        CONSULTING.101.001@GMAIL.COM
                      </p>
                    </div>
                  </div>
                </div>

                {/* 03 High-Priority WhatsApp */}
                <div className="flex items-start space-x-5 md:space-x-6">
                  <div className="text-gold text-base md:text-lg font-serif font-bold pt-1">03</div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#25D366] font-black mb-2 md:mb-3">Priority WhatsApp</h4>
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-[#1a2b3c]/80 text-sm font-bold">+971 XX XXX XXXX</p>
                      <p className="text-[#1a2b3c]/40 text-[9px] uppercase tracking-widest leading-relaxed">
                        Secure messaging for corporate advisory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-10 md:space-y-12">
                {/* 04 Operation Hours */}
                <div className="flex items-start space-x-5 md:space-x-6">
                  <div className="text-gold text-base md:text-lg font-serif font-bold pt-1">04</div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#1a2b3c] font-black mb-2 md:mb-3">Operation Hours</h4>
                    <p className="text-[#1a2b3c]/60 text-xs md:text-sm leading-relaxed font-medium uppercase tracking-widest text-[10px]">
                      Sunday – Thursday<br />
                      9:00 AM – 6:00 PM GST
                    </p>
                  </div>
                </div>

                {/* Additional Info / Protocol Placeholder */}
                <div className="p-6 md:p-8 border-l border-gold/20 bg-white/40 text-[#1a2b3c]/50 text-[10px] uppercase tracking-widest leading-loose font-medium">
                  Confidentiality protocols apply to all incoming communications.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-blue-900/5 rounded-sm relative mt-8 lg:mt-0">
            <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-gold/5 rounded-bl-full"></div>
            <h3 className="text-lg md:text-xl font-serif font-bold text-gold mb-6 md:mb-8 uppercase tracking-widest">Inquiry Protocol</h3>
            <p className="text-[#1a2b3c]/60 text-sm leading-relaxed mb-8 md:mb-10 font-medium">
              Communications through our digital channels are monitored by our duty counsel for urgent legal matters. Verdicta provides privileged representation to corporate entities and private individuals across the MENA region.
            </p>
            <div className="p-6 md:p-8 border-l-4 border-gold bg-[#f8fbff] text-[#1a2b3c]/80 text-[10px] md:text-[11px] uppercase tracking-[0.3em] leading-loose font-black italic">
              "Excellence is not an act, but a habit. Our regional desk ensures that every inquiry is met with the highest standard of international legal advocacy."
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;