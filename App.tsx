import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Expertise from './pages/Expertise';
import ServiceDetail from './pages/ServiceDetail';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import LawyerDashboard from './pages/LawyerDashboard';
import { supabase } from './lib/supabase';
import { UserRole } from './types';

const App: React.FC = () => {
  const [session, setSession] = useState<any>(null);
  const [role, setRole] = useState<UserRole | null>(null);

  const fetchRole = async (userId: string) => {
    try {
      const { data } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();
      if (data) setRole(data.role as UserRole);
    } catch (err) {
      console.error('Role fetch skipped');
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchRole(session.user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchRole(session.user.id);
      else setRole(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-gold selection:text-black">
        <Navbar session={session} role={role} />
        <main className="flex-grow pt-20 lg:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/practice-areas/:id" element={<ServiceDetail />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/expertise/:id" element={<ServiceDetail />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            
            <Route 
              path="/dashboard/*" 
              element={role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/lawyer/*" 
              element={role === 'lawyer' ? <LawyerDashboard /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>
        <Footer />
        <ChatBox />
      </div>
    </Router>
  );
};

export default App;