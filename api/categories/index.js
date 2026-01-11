import { supabase } from '../supabaseClient.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('categories')
      .select('*');

    if (error) return res.status(500).json({ error: error.message });

    return res.json(data);
  }

  if (req.method === 'POST') {
    const { data, error } = await supabase
      .from('categories')
      .insert(req.body)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });

    return res.json(data);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}