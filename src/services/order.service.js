// Order service for Supabase operations
import { supabase } from '../supabaseClient';

/**
 * Fetch user's orders
 * @returns {Promise<{data, error}>}
 */
export const fetchUserOrders = async () => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        products (*)
      )
    `)
    .order('created_at', { ascending: false });
  return { data, error };
};

/**
 * Create a new order with items
 * @param {Array} cartItems - Array of cart items
 * @param {number} totalAmount - Total order amount
 * @returns {Promise<{data, error}>}
 */
export const createOrder = async (cartItems, totalAmount) => {
  // Start a transaction-like operation
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  // Create the order
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([{
      user_id: user.id,
      total_amount: totalAmount,
      status: 'pending'
    }])
    .select()
    .single();

  if (orderError) return { data: null, error: orderError };

  // Create order items
  const orderItems = cartItems.map(item => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.quantity,
    price: item.price
  }));

  const { data: items, error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItems)
    .select();

  if (itemsError) {
    // If items fail, we should ideally rollback the order, but Supabase doesn't support transactions easily
    // For now, we'll leave the order and handle it manually
    return { data: null, error: itemsError };
  }

  return { data: { order, items }, error: null };
};

/**
 * Fetch a single order with items
 * @param {string} orderId - Order ID
 * @returns {Promise<{data, error}>}
 */
export const fetchOrder = async (orderId) => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        products (*)
      )
    `)
    .eq('id', orderId)
    .single();
  return { data, error };
};
