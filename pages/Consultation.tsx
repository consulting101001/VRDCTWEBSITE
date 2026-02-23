import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { PRACTICE_AREAS, COUNTRY_CODES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search } from 'lucide-react';

const Consultation: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    country_code: '+971',
    phone: '',
    practice_area: '',
    message: ''
  });

  useEffect(() => {
    if (location.state) {
      const { practiceArea, feature } = location.state as { practiceArea?: string; feature?: string };
      if (practiceArea || feature) {
        setFormData(prev => ({
          ...prev,
          practice_area: practiceArea || prev.practice_area,
          message: feature ? `Inquiry regarding: ${feature}\n\n` : prev.message
        }));
      }
    }
  }, [location.state]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Custom Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = COUNTRY_CODES.find(c => c.code === formData.country_code) || COUNTRY_CODES[0];

  const filteredCountries = COUNTRY_CODES.filter(c => 
    c.country.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.code.includes(searchQuery)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const submissionData = {
        ...formData,
        phone: `${formData.country_code} ${formData.phone}`
      };
      // Remove country_code from the final object if it's not in the DB schema
      const { country_code, ...finalData } = submissionData;
      
      const { error } = await supabase.from('consultations').insert([finalData]);
      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f7f5f0] flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl text-center animate-in zoom-in duration-500 bg-white p-10 md:p-20 shadow-[0_30px_100px_-20px_rgba(176,141,87,0.4)] border-4 border-gold">
          <div className="bg-gold/10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10">
            <div className="text-gold text-4xl md:text-5xl">✓</div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-6">Request Logged</h2>
          <p className="text-[#444] text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-medium">
            Your inquiry is being prioritized by our senior partners. A legal associate will contact you within one business day for a confidential briefing.
          </p>
          <button onClick={() => setSubmitted(false)} className="bg-[#1a1a1a] text-gold w-full md:w-auto px-12 py-4 uppercase tracking-[0.5em] text-[11px] font-black hover:bg-gold hover:text-black transition-all shadow-xl">
            NEW SUBMISSION
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fdfbf2] via-[#f7f2e1] to-[#f2ebd4] py-16 md:py-32">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Office" 
          className="w-full h-full object-cover opacity-20 md:opacity-30 sepia-[0.3] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-white/50 to-white/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-gold text-[11px] md:text-[13px] uppercase tracking-[0.6em] md:tracking-[0.9em] font-black mb-4 md:mb-6 drop-shadow-sm">INITIAL ASSESSMENT</h1>
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-[#1a1a1a] mb-6 md:mb-8 leading-tight">Confidential Consultation</h2>
          <p className="text-[#2c2c2c] max-w-2xl mx-auto font-semibold text-base md:text-lg leading-relaxed italic border-x-0 md:border-x-2 border-gold/20 px-0 md:px-10">
            Provide the details of your situation. All information is handled with absolute professional discretion and attorney-client privilege.
          </p>
        </div>

        <div className="bg-white border border-gold/10 p-6 md:p-12 lg:p-20 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.1)] animate-slide-up rounded-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gold"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.4em] text-[#1a1a1a] mb-3 md:mb-4 font-black">Full Name</label>
                <input required type="text" value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                  className="w-full bg-[#f9f9f9] border-b-2 border-black/10 p-4 md:p-5 text-base text-black focus:border-gold outline-none transition-all placeholder:text-black/20 font-medium"
                  placeholder="Your full legal name"
                />
              </div>
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.4em] text-[#1a1a1a] mb-3 md:mb-4 font-black">Email Address</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#f9f9f9] border-b-2 border-black/10 p-4 md:p-5 text-base text-black focus:border-gold outline-none transition-all placeholder:text-black/20 font-medium"
                  placeholder="name@corporate.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.4em] text-[#1a1a1a] mb-3 md:mb-4 font-black">Phone Number</label>
                <div className="flex space-x-2">
                  {/* Custom Country Code Dropdown */}
                  <div className="relative w-24 md:w-28" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full h-full bg-[#f9f9f9] border-b-2 border-black/10 p-4 md:p-5 flex items-center justify-between hover:border-gold transition-all"
                    >
                      <span className="text-xl">{selectedCountry.flag}</span>
                      <ChevronDown className={`w-3 h-3 text-gold transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute left-0 top-full mt-2 w-64 md:w-72 bg-white shadow-2xl border border-black/5 z-[100] rounded-sm overflow-hidden"
                        >
                          <div className="p-3 border-b border-black/5 flex items-center bg-[#fcfbf7]">
                            <Search className="w-3 h-3 text-gold mr-2" />
                            <input
                              type="text"
                              placeholder="Search country..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full bg-transparent text-xs outline-none font-medium text-[#1a1a1a]"
                              autoFocus
                            />
                          </div>
                          <div className="max-h-60 overflow-y-auto custom-scrollbar">
                            {filteredCountries.map((c) => (
                              <button
                                key={`${c.country}-${c.code}`}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, country_code: c.code });
                                  setIsDropdownOpen(false);
                                  setSearchQuery('');
                                }}
                                className="w-full p-3 flex items-center hover:bg-gold/5 transition-colors text-left border-b border-black/[0.02] last:border-0"
                              >
                                <span className="text-lg mr-3">{c.flag}</span>
                                <span className="text-[11px] font-bold text-black flex-grow truncate">{c.country}</span>
                                <span className="text-[10px] font-black text-gold ml-2">{c.code}</span>
                              </button>
                            ))}
                            {filteredCountries.length === 0 && (
                              <div className="p-4 text-center text-[10px] text-black/40 uppercase tracking-widest">No results</div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="flex-1 bg-[#f9f9f9] border-b-2 border-black/10 p-4 md:p-5 text-base text-black focus:border-gold outline-none transition-all placeholder:text-black/20 font-medium"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.4em] text-[#1a1a1a] mb-3 md:mb-4 font-black">Practice Area</label>
                <div className="relative">
                  <select required value={formData.practice_area} onChange={(e) => setFormData({...formData, practice_area: e.target.value})}
                    className="w-full bg-[#f9f9f9] border-b-2 border-black/10 p-4 md:p-5 text-base text-black focus:border-gold outline-none appearance-none font-medium cursor-pointer"
                  >
                    <option value="">Select Domain...</option>
                    {PRACTICE_AREAS.map(area => (<option key={area.id} value={area.id}>{area.title}</option>))}
                    <option value="other">Other Legal Inquiry</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold text-xs">▼</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <label className="block text-[10px] uppercase tracking-[0.4em] text-[#1a1a1a] mb-3 md:mb-4 font-black">Nature of Inquiry</label>
              <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#f9f9f9] border-b-2 border-black/10 p-4 md:p-6 text-base text-black focus:border-gold outline-none resize-none placeholder:text-black/20 font-medium leading-relaxed"
                placeholder="Describe the core details of your legal requirements..."
              ></textarea>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-bold uppercase tracking-widest">
                {error}
              </div>
            )}

            <button disabled={loading} type="submit"
              className="w-full py-5 md:py-6 bg-gold text-[#1a1a1a] font-black uppercase tracking-[0.5em] md:tracking-[0.6em] text-[11px] md:text-[13px] hover:bg-[#1a1a1a] hover:text-gold transition-all duration-500 disabled:opacity-50 shadow-[0_20px_50px_-15px_rgba(176,141,87,0.4)] transform active:scale-[0.98]"
            >
              {loading ? 'PROCESSING...' : 'LOG CONFIDENTIAL REQUEST'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;