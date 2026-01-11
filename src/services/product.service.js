// Product service for Supabase operations
import { supabase } from '../supabaseClient';

/**
 * Fetch all products
 * @returns {Promise<{data, error}>}
 */
export const fetchProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
};

/**
 * Fetch a single product by ID
 * @param {string} id - Product ID
 * @returns {Promise<{data, error}>}
 */
export const fetchProduct = async (id) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
};

/**
 * Add a new product (admin only)
 * @param {Object} product - Product data
 * @returns {Promise<{data, error}>}
 */
export const addProduct = async (product) => {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select();
  return { data, error };
};

/**
 * Update a product (admin only)
 * @param {string} id - Product ID
 * @param {Object} updates - Updated product data
 * @returns {Promise<{data, error}>}
 */
export const updateProduct = async (id, updates) => {
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id)
    .select();
  return { data, error };
};

/**
 * Delete a product (admin only)
 * @param {string} id - Product ID
 * @returns {Promise<{error}>}
 */
export const deleteProduct = async (id) => {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);
  return { error };
};
