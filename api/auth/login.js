import { supabase } from '../supabaseClient.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const { data, error } = await supabase
    .from('users')
    .select('id, email, role')
    .eq('email', email)
    .eq('password', password)
    .single();

  if (error || !data) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.json({ message: 'ok', role: data.role });
}