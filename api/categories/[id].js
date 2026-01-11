import { supabase } from '../supabaseClient.js';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { data, error } = await supabase
      .from('categories')
      .update(req.body)
      .eq('id', id)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });

    return res.json(data);
  }

  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ message: 'Deleted' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}