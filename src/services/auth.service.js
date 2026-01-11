// Auth service for Supabase authentication
import { supabase } from '../supabaseClient';

/**
 * Sign up a new user
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @param {string} name - User's name
 * @returns {Promise<{user, error}>}
 */
export const signUp = async (email, password, name) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name,
      },
    },
  });
  return { user: data.user, error };
};

/**
 * Sign in an existing user
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<{user, error}>}
 */
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { user: data.user, error };
};

/**
 * Sign out the current user
 * @returns {Promise<{error}>}
 */
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

/**
 * Get the current user session
 * @returns {Promise<{session, error}>}
 */
export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { session: data.session, error };
};

/**
 * Listen for auth state changes
 * @param {function} callback - Callback function to handle auth state changes
 * @returns {function} Unsubscribe function
 */
export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback);
};
