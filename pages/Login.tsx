
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (authError) throw authError;

      // Check role and redirect
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();

      if (profile?.role === 'admin') navigate('/dashboard');
      else if (profile?.role === 'lawyer') navigate('/lawyer');
      else throw new Error("Unauthorized role");

    } catch (err: any) {
      setError(err.message || 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-dark-primary px-4">
      <div className="w-full max-w-md bg-dark-secondary border border-white/5 p-10 shadow-2xl">
        <div className="text-center mb-10">
          <div className="text-3xl font-serif font-bold text-gold tracking-widest mb-2">VERDICTA</div>
          <h1 className="text-xs uppercase tracking-widest text-white/40 font-bold">Secure Portal Access</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold">Professional Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-dark-primary border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors"
              placeholder="name@verdicta.legal"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold">Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-dark-primary border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-500/50 text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            disabled={loading}
            type="submit"
            className="w-full py-4 bg-gold hover:bg-gold-light text-black font-bold uppercase tracking-[0.2em] transition-all disabled:opacity-50 shadow-lg"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] text-white/30 uppercase tracking-widest">
          Restricted access. Unauthorised attempts are monitored.
        </p>
      </div>
    </div>
  );
};

export default Login;
