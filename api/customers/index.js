import { supabase } from '../supabaseClient.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('role', 'user');

  if (error) return res.status(500).json({ error: error.message });

  return res.json(data);
}