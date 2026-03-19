import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactInquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  service_type: string;
  budget_range?: string;
  message: string;
  status?: string;
  created_at?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  image_url: string;
  category: 'landing' | 'ecommerce' | 'portfolio' | 'seo';
  tech_stack: string[];
  live_url?: string;
  case_study?: {
    client: string;
    challenge: string;
    solution: string;
    results: string;
  };
  featured: boolean;
  display_order: number;
  created_at: string;
}

export interface ClientLogo {
  id: string;
  company_name: string;
  logo_url: string;
  display_order: number;
  active: boolean;
  created_at: string;
}
