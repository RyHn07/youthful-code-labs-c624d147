
DROP POLICY "Anyone can submit application" ON public.applications;
CREATE POLICY "Anyone can submit application" ON public.applications
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(role) BETWEEN 1 AND 200
    AND (message IS NULL OR length(message) <= 4000)
  );

DROP POLICY "Anyone can submit message" ON public.messages;
CREATE POLICY "Anyone can submit message" ON public.messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(body) BETWEEN 1 AND 4000
  );
