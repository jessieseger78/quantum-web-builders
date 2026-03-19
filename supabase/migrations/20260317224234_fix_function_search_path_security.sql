/*
  # Fix Function Search Path Security

  ## Overview
  Addresses security vulnerability where the function `check_contact_rate_limit` 
  has a mutable search_path, which could allow malicious users to execute 
  arbitrary code by manipulating the schema search path.

  ## Changes Made
  
  ### Security Improvements
  1. Drop dependent policy temporarily
  2. Recreate the `check_contact_rate_limit` function with a fixed search_path
  3. Set `search_path` to empty string to prevent schema injection attacks
  4. Use fully qualified table names (public.contact_inquiries)
  5. Recreate the RLS policy
  
  ## Security Notes
  - Setting an empty search_path prevents potential privilege escalation
  - All object references must use fully qualified names (schema.object)
  - This is a critical security fix for SECURITY DEFINER functions
*/

-- Drop the policy that depends on the function
DROP POLICY IF EXISTS "Secure contact form submissions" ON public.contact_inquiries;

-- Drop and recreate the function with secure search_path
DROP FUNCTION IF EXISTS public.check_contact_rate_limit(text);

CREATE OR REPLACE FUNCTION public.check_contact_rate_limit(user_email text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  submission_count integer;
BEGIN
  -- Count submissions from this email in the last hour
  SELECT COUNT(*) INTO submission_count
  FROM public.contact_inquiries
  WHERE email = user_email
    AND created_at > NOW() - INTERVAL '1 hour';
  
  -- Allow if less than 3 submissions in the last hour
  RETURN submission_count < 3;
END;
$$;

-- Recreate the secure RLS policy
CREATE POLICY "Secure contact form submissions"
  ON public.contact_inquiries
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
    public.check_contact_rate_limit(email)
  );