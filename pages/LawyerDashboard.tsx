
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Consultation } from '../types';

const LawyerDashboard: React.FC = () => {
  const [cases, setCases] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCase, setSelectedCase] = useState<Consultation | null>(null);

  useEffect(() => {
    fetchMyCases();
  }, []);

  const fetchMyCases = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from('consultations')
      .select('*')
      .eq('assigned_to', user.id)
      .order('created_at', { ascending: false });

    if (data) setCases(data);
    setLoading(false);
  };

  const handleUpdateNotes = async (id: string, notes: string) => {
    const { error } = await supabase.from('consultations').update({ 
      internal_notes: notes 
    }).eq('id', id);
    
    if (!error) {
      setSelectedCase(prev => prev ? {...prev, internal_notes: notes} : null);
      fetchMyCases();
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-2">Lawyer Portal</h1>
        <h2 className="text-4xl font-serif font-bold">My Assigned Cases</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Case List */}
        <div className="lg:col-span-1 space-y-4">
          {loading ? (
            <div className="text-white/40">Loading cases...</div>
          ) : cases.length === 0 ? (
            <div className="text-white/40 p-4 border border-dashed border-white/10">No cases currently assigned.</div>
          ) : (
            cases.map((c) => (
              <div 
                key={c.id} 
                onClick={() => setSelectedCase(c)}
                className={`p-4 bg-dark-secondary border border-white/5 cursor-pointer hover:border-gold/30 transition-all ${selectedCase?.id === c.id ? 'border-gold' : ''}`}
              >
                <div className="font-bold text-sm">{c.full_name}</div>
                <div className="text-[10px] text-white/40 uppercase mt-1 capitalize">{c.practice_area}</div>
              </div>
            ))
          )}
        </div>

        {/* Case Workspace */}
        <div className="lg:col-span-3">
          {selectedCase ? (
            <div className="bg-dark-secondary border border-white/5 p-8 shadow-xl animate-in fade-in duration-300">
              <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6">
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-2">{selectedCase.full_name}</h3>
                  <div className="flex space-x-4 text-sm text-gold">
                    <span>{selectedCase.email}</span>
                    <span>•</span>
                    <span>{selectedCase.phone}</span>
                  </div>
                </div>
                <div className="text-right text-[10px] uppercase tracking-widest text-white/30">
                  Assigned On: {new Date(selectedCase.created_at).toLocaleDateString()}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <section>
                    <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Original Inquiry</h4>
                    <div className="p-6 bg-dark-primary/50 text-white/80 text-sm leading-relaxed border-l-2 border-gold italic">
                      "{selectedCase.message}"
                    </div>
                  </section>

                  {selectedCase.ai_summary && (
                    <section>
                      <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">AI Analysis</h4>
                      <div className="p-6 bg-gold/5 text-white/80 text-sm leading-relaxed border border-gold/20 rounded">
                        {selectedCase.ai_summary}
                      </div>
                    </section>
                  )}
                </div>

                <section>
                  <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Internal Lawyer Notes</h4>
                  <textarea
                    rows={12}
                    value={selectedCase.internal_notes || ""}
                    onChange={(e) => handleUpdateNotes(selectedCase.id, e.target.value)}
                    className="w-full bg-dark-primary border border-white/10 p-6 text-sm text-white focus:border-gold outline-none transition-colors resize-none font-mono"
                    placeholder="Document your strategy, phone call logs, or research here..."
                  ></textarea>
                  <p className="mt-4 text-[10px] text-white/30 uppercase tracking-widest text-right italic">
                    Changes are automatically saved to the secure vault.
                  </p>
                </section>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-20 border border-dashed border-white/10 text-white/20 rounded-xl">
              <div className="text-center">
                <div className="text-4xl mb-4 opacity-10">⚖️</div>
                Select a client from the left to access the case management file.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;
