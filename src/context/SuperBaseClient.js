// src/supabaseClient.js or supabase.js
import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseUrl ="https://gxzujiinmhqfnysuqszt.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4enVqaWlubWhxZm55c3Vxc3p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjg1NTgsImV4cCI6MjA2NTY0NDU1OH0.laNyDdlZnAJ1nnGTO4xn7igNQeH2wVUQXVUiC1SLVlI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
