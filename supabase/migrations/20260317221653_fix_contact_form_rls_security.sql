/*
  # Fix Contact Form RLS Security

  ## Overview
  Addresses security vulnerability in contact_inquiries table where the RLS policy
  allowed unrestricted inserts (WITH CHECK true), which could enable spam attacks.

  ## Changes Made
  
  ### Security Improvements
  1. Drop the overly permissive policy "Anyone can submit contact inquiry"
  2. Add rate limiting protection via stored function
  3. Create new RLS policy with proper validation:
     - Email format validation
     - Required field validation (name, email, service_type, message must not be empty)
     - Reasonable length limits to prevent abuse
     - Rate limiting: max 3 submissions per email per hour
  
  ### Performance Optimization
  4. Drop unused indexes that were flagged by security scan:
     - idx_portfolio_category
     - idx_portfolio_featured  
     - idx_contact_inquiries_created_at
  
  ## Important Notes
  - Contact forms remain accessible to anonymous users (essential for lead generation)
  - Rate limiting prevents spam while allowing legitimate inquiries
  - Email validation ensures data quality
  - Length limits prevent database bloat from malicious payloads
*/

-- Drop the insecure policy
DROP POLICY IF EXISTS "Anyone can submit contact inquiry" ON contact_inquiries;

-- Create rate limiting function
CREATE OR REPLACE FUNCTION check_contact_rate_limit(user_email text)
RETURNS boolean AS $$
DECLARE
  submission_count integer;
BEGIN
  -- Count submissions from this email in the last hour
  SELECT COUNT(*) INTO submission_count
  FROM contact_inquiries
  WHERE email = user_email
    AND created_at > NOW() - INTERVAL '1 hour';
  
  -- Allow if less than 3 submissions in the last hour
  RETURN submission_count < 3;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create secure RLS policy with proper validation
CREATE POLICY "Secure contact form submissions"
  ON contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    -- Validate required fields are not empty
    length(trim(name)) > 0 AND
    length(trim(email)) > 0 AND
    length(trim(service_type)) > 0 AND
    length(trim(message)) > 0 AND
    -- Validate email format
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    -- Reasonable length limits
    length(name) <= 100 AND
    length(email) <= 255 AND
    length(phone) <= 20 AND
    length(service_type) <= 50 AND
    length(budget_range) <= 50 AND
    length(message) <= 5000 AND
    -- Rate limiting
    check_contact_rate_limit(email)
  );

-- Drop unused indexes to improve write performance
DROP INDEX IF EXISTS idx_portfolio_category;
DROP INDEX IF EXISTS idx_portfolio_featured;
DROP INDEX IF EXISTS idx_contact_inquiries_created_at;
