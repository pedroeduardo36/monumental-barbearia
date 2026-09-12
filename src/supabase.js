import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const supabase = url && publishableKey ? createClient(url, publishableKey, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
}) : null;

export async function saveCustomerContact(contact) {
  if (!supabase) throw new Error('Supabase não configurado.');
  const { error } = await supabase.from('customer_contacts').insert(contact);
  if (error) throw error;
}
