
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserRole } from '../types';
import { supabase } from '../lib/supabase';
import { Menu, X, LogOut, LayoutDashboard, Briefcase } from 'lucide-react';

interface NavbarProps {
  session: any;
  role: UserRole | null;
}

const Navbar: React.FC<NavbarProps> = ({ session, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
      <div className="max-w-full mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Section - Top-Left aligned */}
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="text-gold transition-transform duration-700 group-hover:rotate-[360deg]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path d="M12 2.5L14 5L12 7.5L10 5L12 2.5Z" />
              <path d="M11.5 7.5V19H12.5V7.5H11.5Z" />
              <path d="M3.5 10.5C3.5 10.5 7.5 7.5 12 8.5C16.5 7.5 20.5 10.5 20.5 10.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M3.5 10.5L1.5 17M3.5 10.5L5.5 17" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M1.5 17C1.5 18.5 2.5 19 3.5 19C4.5 19 5.5 18.5 5.5 17H1.5Z" />
              <path d="M20.5 10.5L18.5 17M20.5 10.5L22.5 17" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M18.5 17C18.5 18.5 19.5 19 20.5 19C21.5 19 22.5 18.5 22.5 17H18.5Z" />
              <path d="M8.5 21C8.5 20 9.5 19 12 19C14.5 19 15.5 20 15.5 21H8.5Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] leading-tight text-white transition-colors duration-500">
              VERDICTA
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-black group-hover:text-white transition-colors">
              Legal Consultants
            </span>
          </div>
        </Link>

        {/* Navigation */}
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
          
          {session ? (
            <div className="flex items-center space-x-8">
              {role === 'admin' && (
                <Link to="/dashboard" className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-gold font-black hover:text-white transition-colors">
                  <LayoutDashboard className="w-3 h-3" />
                  <span>ADMIN</span>
                </Link>
              )}
              {role === 'lawyer' && (
                <Link to="/lawyer" className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-gold font-black hover:text-white transition-colors">
                  <Briefcase className="w-3 h-3" />
                  <span>PORTAL</span>
                </Link>
              )}
              <button 
                onClick={() => supabase.auth.signOut()}
                className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-white/60 font-black hover:text-red-500 transition-colors"
              >
                <LogOut className="w-3 h-3" />
                <span>LOGOUT</span>
              </button>
            </div>
          ) : (
            <Link
              to="/consultation"
              className="px-8 py-3 border border-gold bg-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:bg-gold hover:text-black shadow-[0_0_20px_rgba(176,141,87,0.2)]"
            >
              CONSULTATION
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-3 rounded-full bg-gold/10 text-gold hover:bg-gold hover:text-black transition-all">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
          {session ? (
            <>
              {role === 'admin' && (
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-2xl font-serif tracking-[0.4em] font-bold uppercase text-gold">
                  ADMIN
                </Link>
              )}
              {role === 'lawyer' && (
                <Link to="/lawyer" onClick={() => setIsOpen(false)} className="text-2xl font-serif tracking-[0.4em] font-bold uppercase text-gold">
                  PORTAL
                </Link>
              )}
              <button 
                onClick={() => {
                  supabase.auth.signOut();
                  setIsOpen(false);
                }}
                className="text-2xl font-serif tracking-[0.4em] font-bold uppercase text-red-500"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link to="/consultation" onClick={() => setIsOpen(false)} className="px-14 py-5 border-2 border-gold bg-gold text-black font-black uppercase tracking-[0.5em] text-sm shadow-2xl">
              CONSULTATION
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
