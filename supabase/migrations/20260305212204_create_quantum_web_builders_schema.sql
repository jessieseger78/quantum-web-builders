/*
  # Quantum Web Builders Database Schema

  ## Overview
  Creates the complete database schema for the Quantum Web Builders website,
  including tables for contact inquiries, portfolio projects, and client logos.

  ## New Tables

  ### 1. contact_inquiries
  Stores all contact form submissions from potential clients
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text, required) - Client's full name
  - `email` (text, required) - Client's email address
  - `phone` (text, optional) - Client's phone number
  - `service_type` (text, required) - Type of service interested in
  - `budget_range` (text, optional) - Project budget range
  - `message` (text, required) - Project description/message
  - `status` (text, default 'new') - Inquiry status (new, contacted, converted, archived)
  - `created_at` (timestamp) - When inquiry was submitted

  ### 2. portfolio_projects
  Stores portfolio project showcases with case study information
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text, required) - Project name
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text) - Brief project description
  - `image_url` (text) - Mockup/screenshot URL
  - `category` (text) - Project type (landing, ecommerce, portfolio, seo)
  - `tech_stack` (text array) - Technologies used
  - `live_url` (text, optional) - Live website URL
  - `case_study` (jsonb) - Detailed case study data
  - `featured` (boolean, default false) - Show in featured carousel
  - `display_order` (integer) - Sort order
  - `created_at` (timestamp) - When project was added

  ### 3. client_logos
  Stores client company logos for footer display
  - `id` (uuid, primary key) - Unique identifier
  - `company_name` (text, required) - Client company name
  - `logo_url` (text, required) - Logo image URL
  - `display_order` (integer) - Sort order for display
  - `active` (boolean, default true) - Show/hide logo
  - `created_at` (timestamp) - When logo was added

  ## Security
  - RLS enabled on all tables
  - Public read access for portfolio_projects and client_logos
  - No public write access on any table
  - contact_inquiries is write-only for anonymous users
*/

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service_type text NOT NULL,
  budget_range text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create portfolio_projects table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  image_url text,
  category text NOT NULL,
  tech_stack text[],
  live_url text,
  case_study jsonb,
  featured boolean DEFAULT false,
  display_order integer,
  created_at timestamptz DEFAULT now()
);

-- Create client_logos table
CREATE TABLE IF NOT EXISTS client_logos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  logo_url text NOT NULL,
  display_order integer,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_logos ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_inquiries (write-only for public)
CREATE POLICY "Anyone can submit contact inquiry"
  ON contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- RLS Policies for portfolio_projects (public read)
CREATE POLICY "Anyone can view portfolio projects"
  ON portfolio_projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for client_logos (public read active logos)
CREATE POLICY "Anyone can view active client logos"
  ON client_logos
  FOR SELECT
  TO anon, authenticated
  USING (active = true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_projects(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_projects(featured);
CREATE INDEX IF NOT EXISTS idx_portfolio_display_order ON portfolio_projects(display_order);
CREATE INDEX IF NOT EXISTS idx_client_logos_display_order ON client_logos(display_order);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at DESC);