import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kainuyptfluelwolskqc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthaW51eXB0Zmx1ZWx3b2xza3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0ODY4MzAsImV4cCI6MjA2NzA2MjgzMH0.zc_MEG-bxEYgguF-2WEa1UGXrrr8fgxX-z5DnHkK1nE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);