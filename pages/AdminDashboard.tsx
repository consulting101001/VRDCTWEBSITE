
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Consultation, ConsultationStatus, Profile } from '../types';
import { summarizeConsultation } from '../services/geminiService';

const AdminDashboard: React.FC = () => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [lawyers, setLawyers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { data: cons } = await supabase.from('consultations').select('*').order('created_at', { ascending: false });
    const { data: laws } = await supabase.from('profiles').select('*').eq('role', 'lawyer');
    
    if (cons) setConsultations(cons);
    if (laws) setLawyers(laws);
    setLoading(false);
  };

  const handleUpdateStatus = async (id: string, status: ConsultationStatus) => {
    const { error } = await supabase.from('consultations').update({ status }).eq('id', id);
    if (!error) fetchData();
  };

  const handleAssign = async (id: string, lawyerId: string) => {
    const { error } = await supabase.from('consultations').update({ 
      assigned_to: lawyerId,
      status: ConsultationStatus.ASSIGNED 
    }).eq('id', id);
    if (!error) fetchData();
  };

  const handleAIAnalyze = async (consultation: Consultation) => {
    setProcessingId(consultation.id);
    const summary = await summarizeConsultation(consultation.message);
    const { error } = await supabase.from('consultations').update({ 
      ai_summary: summary 
    }).eq('id', consultation.id);
    
    if (!error) {
      setProcessingId(null);
      fetchData();
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-2">Management</h1>
          <h2 className="text-4xl font-serif font-bold">Admin Dashboard</h2>
        </div>
        <div className="text-right">
          <div className="text-sm text-white/40">Active Consultation Requests</div>
          <div className="text-3xl font-serif text-gold font-bold">{consultations.length}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* List */}
        <div className="lg:col-span-2 space-y-4">
          {loading ? (
            <div className="py-20 text-center text-white/40">Loading inquiries...</div>
          ) : consultations.length === 0 ? (
            <div className="py-20 text-center text-white/40 border border-white/5 bg-dark-secondary">No consultation requests found.</div>
          ) : (
            consultations.map((c) => (
              <div 
                key={c.id} 
                className={`p-6 bg-dark-secondary border border-white/5 hover:border-gold/30 cursor-pointer transition-all ${selectedConsultation?.id === c.id ? 'border-gold shadow-lg' : ''}`}
                onClick={() => setSelectedConsultation(c)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{c.full_name}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{new Date(c.created_at).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${
                    c.status === 'new' ? 'bg-blue-900/40 text-blue-400' :
                    c.status === 'reviewing' ? 'bg-yellow-900/40 text-yellow-400' :
                    c.status === 'assigned' ? 'bg-green-900/40 text-green-400' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {c.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-white/60">
                  <div>Practice Area: <span className="text-white capitalize">{c.practice_area}</span></div>
                  <div>Lawyer: <span className="text-gold">{lawyers.find(l => l.id === c.assigned_to)?.full_name || 'Unassigned'}</span></div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-1">
          {selectedConsultation ? (
            <div className="sticky top-28 bg-dark-secondary border border-gold/20 p-8 shadow-2xl animate-in slide-in-from-right duration-300">
              <h3 className="text-xl font-serif font-bold text-gold mb-6 border-b border-white/5 pb-4">Inquiry Details</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Client Contact</label>
                  <p className="text-sm font-medium">{selectedConsultation.email}</p>
                  <p className="text-sm text-white/60">{selectedConsultation.phone}</p>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Message</label>
                  <div className="text-sm leading-relaxed text-white/80 bg-dark-primary p-4 rounded italic border border-white/5">
                    "{selectedConsultation.message}"
                  </div>
                </div>

                {selectedConsultation.ai_summary && (
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold mb-1 font-bold">AI Case Summary</label>
                    <div className="text-sm leading-relaxed text-white/80 bg-gold/5 p-4 rounded border border-gold/20">
                      {selectedConsultation.ai_summary}
                    </div>
                  </div>
                )}

                <div className="pt-4 space-y-4">
                  <button 
                    onClick={() => handleAIAnalyze(selectedConsultation)}
                    disabled={processingId === selectedConsultation.id}
                    className="w-full py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all text-xs font-bold uppercase tracking-widest disabled:opacity-50"
                  >
                    {processingId === selectedConsultation.id ? 'Analyzing...' : 'Generate AI Summary'}
                  </button>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Manage Status</label>
                    <select 
                      value={selectedConsultation.status}
                      onChange={(e) => handleUpdateStatus(selectedConsultation.id, e.target.value as ConsultationStatus)}
                      className="w-full bg-dark-primary border border-white/10 p-3 text-sm text-white focus:border-gold outline-none"
                    >
                      <option value="new">New</option>
                      <option value="reviewing">Reviewing</option>
                      <option value="assigned">Assigned</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Assign to Lawyer</label>
                    <select 
                      value={selectedConsultation.assigned_to || ""}
                      onChange={(e) => handleAssign(selectedConsultation.id, e.target.value)}
                      className="w-full bg-dark-primary border border-white/10 p-3 text-sm text-white focus:border-gold outline-none"
                    >
                      <option value="">Choose Lawyer...</option>
                      {lawyers.map(l => (
                        <option key={l.id} value={l.id}>{l.full_name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-12 border border-dashed border-white/10 text-white/20 text-center">
              Select a consultation to view details and assign lawyers.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
