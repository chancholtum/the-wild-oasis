import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fkmwnrovryzucmoqrjmi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbXducm92cnl6dWNtb3Fyam1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1MTA5MDMsImV4cCI6MjAxMzA4NjkwM30.CxfUPt3llsvJRupSlhiAwuoK7av1barsO-ZuUWJO2iA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
