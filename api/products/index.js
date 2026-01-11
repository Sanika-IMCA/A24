import { supabase } from '../supabaseClient.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { q = '', page = '1', per = '20' } = req.query;
    let query = supabase.from('products').select('*');

    if (q) {
      query = query.or(`name.ilike.%${q}%,description.ilike.%${q}%`);
    }

    const { data, error, count } = await query
      .range((page - 1) * per, page * per - 1);

    if (error) return res.status(500).json({ error: error.message });

    return res.json({ total: count, data });
  }

  if (req.method === 'POST') {
    const { data, error } = await supabase
      .from('products')
      .insert(req.body)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });

    return res.json(data);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}