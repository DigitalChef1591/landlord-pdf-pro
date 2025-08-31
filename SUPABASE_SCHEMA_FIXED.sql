-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE inspection_type AS ENUM ('move_in','move_out');
CREATE TYPE sig_who AS ENUM ('tenant','landlord');

-- Users table (extends auth.users)
CREATE TABLE public.users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Entitlements table for tracking paid users
CREATE TABLE public.entitlements (
  user_id uuid PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  paid boolean NOT NULL DEFAULT false,
  source text CHECK (source IN ('stripe','revenuecat')) DEFAULT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Properties table
CREATE TABLE public.properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  address text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Inspections table
CREATE TABLE public.inspections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
  property_id uuid REFERENCES public.properties(id) ON DELETE CASCADE,
  type inspection_type NOT NULL,
  date date NOT NULL,
  notes text,
  payload jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Photos table
CREATE TABLE public.photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inspection_id uuid REFERENCES public.inspections(id) ON DELETE CASCADE,
  room text NOT NULL,
  item text NOT NULL,
  storage_path text NOT NULL,
  width int,
  height int,
  created_at timestamptz DEFAULT now()
);

-- Signatures table
CREATE TABLE public.signatures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inspection_id uuid REFERENCES public.inspections(id) ON DELETE CASCADE,
  who sig_who NOT NULL,
  storage_path text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Exports table
CREATE TABLE public.exports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inspection_id uuid REFERENCES public.inspections(id) ON DELETE CASCADE,
  storage_path text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Events table for telemetry
CREATE TABLE public.events (
  id bigserial PRIMARY KEY,
  user_id uuid,
  name text,
  meta jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.entitlements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inspections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.signatures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Users: can only see their own record
CREATE POLICY "users_select_own" ON public.users
  FOR SELECT USING (auth.uid() = id);

-- Entitlements: users can see and update their own entitlements
CREATE POLICY "entitlements_select_own" ON public.entitlements
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "entitlements_insert_own" ON public.entitlements
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "entitlements_update_own" ON public.entitlements
  FOR UPDATE USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Properties: users can manage their own properties
CREATE POLICY "properties_all_own" ON public.properties
  FOR ALL USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Inspections: users can manage their own inspections
CREATE POLICY "inspections_all_own" ON public.inspections
  FOR ALL USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Photos: users can manage photos for their own inspections
CREATE POLICY "photos_all_own" ON public.photos
  FOR ALL USING (
    auth.uid() IN (
      SELECT user_id FROM public.inspections WHERE id = inspection_id
    )
  )
  WITH CHECK (
    auth.uid() IN (
      SELECT user_id FROM public.inspections WHERE id = inspection_id
    )
  );

-- Signatures: users can manage signatures for their own inspections
CREATE POLICY "signatures_all_own" ON public.signatures
  FOR ALL USING (
    auth.uid() IN (
      SELECT user_id FROM public.inspections WHERE id = inspection_id
    )
  )
  WITH CHECK (
    auth.uid() IN (
      SELECT user_id FROM public.inspections WHERE id = inspection_id
    )
  );

-- Exports: users can manage exports for their own inspections
CREATE POLICY "exports_all_own" ON public.exports
  FOR ALL USING (
    auth.uid() IN (
      SELECT user_id FROM public.inspections WHERE id = inspection_id
    )
  )
  WITH CHECK (
    auth.uid() IN (
      SELECT user_id FROM public.inspections WHERE id = inspection_id
    )
  );

-- Events: users can only insert their own events
CREATE POLICY "events_insert_own" ON public.events
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Functions

-- Function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email)
  VALUES (new.id, new.email);
  
  INSERT INTO public.entitlements (user_id, paid, source)
  VALUES (new.id, false, null);
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user record on auth.users insert
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on inspections
CREATE TRIGGER update_inspections_updated_at
  BEFORE UPDATE ON public.inspections
  FOR EACH ROW EXECUTE PROCEDURE public.update_updated_at_column();

-- Trigger to update updated_at on entitlements
CREATE TRIGGER update_entitlements_updated_at
  BEFORE UPDATE ON public.entitlements
  FOR EACH ROW EXECUTE PROCEDURE public.update_updated_at_column();

-- Indexes for better performance
CREATE INDEX idx_properties_user_id ON public.properties(user_id);
CREATE INDEX idx_inspections_user_id ON public.inspections(user_id);
CREATE INDEX idx_inspections_property_id ON public.inspections(property_id);
CREATE INDEX idx_photos_inspection_id ON public.photos(inspection_id);
CREATE INDEX idx_signatures_inspection_id ON public.signatures(inspection_id);
CREATE INDEX idx_exports_inspection_id ON public.exports(inspection_id);
CREATE INDEX idx_events_user_id ON public.events(user_id);
CREATE INDEX idx_events_created_at ON public.events(created_at);
