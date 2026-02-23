import React from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS } from '../constants';

const Footer: React.FC = () => {
  // Display the first 4 practice areas in the footer for a clean layout
  const footerPracticeAreas = PRACTICE_AREAS.slice(0, 4);

  return (
    <footer className="bg-dark-secondary border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gold transition-transform duration-700 group-hover:rotate-[360deg]">
                <path d="M12 2.5L14 5L12 7.5L10 5L12 2.5Z" />
                <path d="M11.5 7.5V19H12.5V7.5H11.5Z" />
                <path d="M3.5 10.5C3.5 10.5 7.5 7.5 12 8.5C16.5 7.5 20.5 10.5 20.5 10.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M3.5 10.5L1.5 17M3.5 10.5L5.5 17" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M1.5 17C1.5 18.5 2.5 19 3.5 19C4.5 19 5.5 18.5 5.5 17H1.5Z" />
                <path d="M20.5 10.5L18.5 17M20.5 10.5L22.5 17" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M18.5 17C18.5 18.5 19.5 19 20.5 19C21.5 19 22.5 18.5 22.5 17H18.5Z" />
                <path d="M8.5 21C8.5 20 9.5 19 12 19C14.5 19 15.5 20 15.5 21H8.5Z" />
              </svg>
              <div className="text-2xl font-serif font-bold text-gold tracking-widest">VERDICTA</div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Providing premium legal services with integrity, excellence, and unwavering commitment to our clients in the UAE and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-gold uppercase text-xs tracking-widest font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Firm Services</Link></li>
              <li><Link to="/expertise" className="hover:text-gold transition-colors">Lawyer Expertise</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase text-xs tracking-widest font-bold mb-6">Practice Areas</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {footerPracticeAreas.map((area) => (
                <li key={area.id}>
                  <Link 
                    to={`/practice-areas/${area.id}`} 
                    className="hover:text-gold transition-colors block"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
              {PRACTICE_AREAS.length > 4 && (
                <li>
                  <Link to="/expertise" className="text-gold/50 hover:text-gold text-xs italic transition-colors">
                    View all areas →
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase text-xs tracking-widest font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="font-black uppercase tracking-widest">UNITED ARAB EMIRATES</li>
              <li>T: +971 XX XXX XXXX</li>
              <li>E: CONSULTING.101.001@GMAIL.COM</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-widest">
          <p>&copy; 2024 Verdicta Legal Consultant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;