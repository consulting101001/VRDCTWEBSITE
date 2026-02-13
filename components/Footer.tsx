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
            <div className="text-2xl font-serif font-bold text-gold tracking-widest mb-4">VERDICTA</div>
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