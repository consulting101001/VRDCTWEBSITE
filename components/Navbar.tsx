
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserRole } from '../types';
import { supabase } from '../lib/supabase';

interface NavbarProps {
  session: any;
  role: UserRole | null;
}

const Navbar: React.FC<NavbarProps> = ({ session, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isDarkPage = location.pathname === '/' || location.pathname === '/login';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/practice-areas' },
    { name: 'ABOUT', path: '/about' },
    { name: 'EXPERTISE', path: '/expertise' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
      scrolled 
        ? 'glass py-3 border-b border-white/10 shadow-2xl backdrop-blur-2xl' 
        : 'bg-transparent py-6'
    }`}>
      {/* Pinned to the Left Corner with small padding */}
      <div className="max-w-full mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Section - Strictly Top-Left aligned */}
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="text-gold transition-transform duration-700 group-hover:rotate-[360deg]">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 5V11C4 16.19 7.41 20.92 12 22C16.59 20.92 20 16.19 20 11V5L12 2ZM12 4.14L18 6.39V11C18 15.03 15.44 18.72 12 19.86C8.56 18.72 6 15.03 6 11V6.39L12 4.14Z"/>
              <path d="M12 7V17M10 9H14M10 13H14" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`text-[17px] font-serif font-black tracking-[0.4em] leading-tight transition-colors duration-500 text-white`}>
              VERDICTA
            </span>
            <span className="text-[8px] uppercase tracking-[0.6em] text-white/50 font-black group-hover:text-gold transition-colors">Legal Consultants</span>
          </div>
        </Link>

        {/* Navigation - Centered or Pushed Right */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-500 relative group ${
                location.pathname === link.path 
                  ? 'text-gold' 
                  : 'text-white hover:text-gold'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-gold transition-all duration-500 ${
                location.pathname === link.path ? 'w-full shadow-[0_0_10px_rgba(176,141,87,0.5)]' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <Link
            to="/consultation"
            className="px-8 py-3 border-2 border-gold bg-gold text-black text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:bg-transparent hover:text-gold"
          >
            CONSULTATION
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-3 rounded-full bg-gold/10 text-gold hover:bg-gold hover:text-black transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[-1] glass transition-all duration-700 backdrop-blur-3xl ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-screen space-y-12">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-2xl font-serif tracking-[0.4em] font-bold uppercase transition-colors ${location.pathname === link.path ? 'text-gold' : 'text-white'}`}>
              {link.name}
            </Link>
          ))}
          <Link to="/consultation" onClick={() => setIsOpen(false)} className="px-14 py-5 border-2 border-gold bg-gold text-black font-black uppercase tracking-[0.5em] text-sm shadow-2xl">
            CONSULTATION
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
