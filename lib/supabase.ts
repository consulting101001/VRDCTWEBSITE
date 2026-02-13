
import { createClient } from '@supabase/supabase-js';

// These would normally be in .env
// For this SPA demo, we provide a placeholder or use the global process.env if available
const supabaseUrl = (window as any).process?.env?.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = (window as any).process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * SQL SCHEMA SETUP (Execute in Supabase SQL Editor):
 * 
 * -- Create roles enum
 * CREATE TYPE user_role AS ENUM ('admin', 'lawyer');
 * 
 * -- Profiles table
 * CREATE TABLE profiles (
 *   id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
 *   email TEXT NOT NULL,
 *   role user_role DEFAULT 'lawyer',
 *   full_name TEXT
 * );
 * 
 * -- Consultations table
 * CREATE TABLE consultations (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   created_at TIMESTAMPTZ DEFAULT NOW(),
 *   full_name TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   phone TEXT NOT NULL,
 *   practice_area TEXT NOT NULL,
 *   message TEXT NOT NULL,
 *   status TEXT DEFAULT 'new',
 *   assigned_to UUID REFERENCES auth.users(id),
 *   internal_notes TEXT,
 *   ai_summary TEXT
 * );
 * 
 * -- Row Level Security (RLS)
 * ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
 * ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
 * 
 * -- Policies
 * CREATE POLICY "Public can insert consultations" ON consultations FOR INSERT WITH CHECK (true);
 * CREATE POLICY "Admins can view all consultations" ON consultations FOR SELECT USING (
 *   EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
 * );
 * CREATE POLICY "Lawyers can view assigned consultations" ON consultations FOR SELECT USING (
 *   auth.uid() = assigned_to OR 
 *   EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
 * );
 * CREATE POLICY "Admins can update consultations" ON consultations FOR UPDATE USING (
 *   EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
 * );
 */
