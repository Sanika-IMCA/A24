import { supabase } from '../supabaseClient.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { count: totalProducts } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true });

  const { count: totalOrders } = await supabase
    .from('orders')
    .select('*', { count: 'exact', head: true });

  const { count: totalCustomers } = await supabase
    .from('users')
    .select('*', { count: 'exact', head: true })
    .eq('role', 'user');

  const { data: lowStockProducts } = await supabase
    .from('products')
    .select('stock, low_stock_threshold')
    .lte('stock', 'low_stock_threshold');

  const lowStockCount = lowStockProducts.filter(p => p.stock <= (p.low_stock_threshold || 5)).length;

  const outOfStockCount = lowStockProducts.filter(p => p.stock === 0).length;

  const { data: orders } = await supabase
    .from('orders')
    .select('total_amount');

  const totalSales = orders.reduce((s, o) => s + parseFloat(o.total_amount || 0), 0);

  res.json({
    totalProducts,
    totalOrders,
    totalCustomers,
    lowStockCount,
    outOfStockCount,
    totalSales
  });
}