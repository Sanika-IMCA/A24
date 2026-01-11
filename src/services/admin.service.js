// Admin service using API calls
const API_BASE = '/api';

export async function loginAdmin(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) throw new Error('Invalid credentials');
  return await res.json();
}

export async function fetchProducts(q = '', page = 1, per = 20) {
  const params = new URLSearchParams({ q, page: page.toString(), per: per.toString() });
  const res = await fetch(`${API_BASE}/products?${params}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return await res.json();
}

export async function createProduct(payload) {
  const res = await fetch(`${API_BASE}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to create product');
  return await res.json();
}

export async function updateProduct(id, payload) {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to update product');
  return await res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Failed to delete product');
  return await res.json();
}

export async function dashboardOverview() {
  const res = await fetch(`${API_BASE}/dashboard/overview`);
  if (!res.ok) throw new Error('Failed to fetch overview');
  return await res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${API_BASE}/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return await res.json();
}

export async function createCategory(payload) {
  const res = await fetch(`${API_BASE}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to create category');
  return await res.json();
}

export async function updateCategory(id, payload) {
  const res = await fetch(`${API_BASE}/categories/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to update category');
  return await res.json();
}

export async function deleteCategory(id) {
  const res = await fetch(`${API_BASE}/categories/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Failed to delete category');
  return await res.json();
}

export async function fetchOrders() {
  const res = await fetch(`${API_BASE}/orders`);
  if (!res.ok) throw new Error('Failed to fetch orders');
  return await res.json();
}

export async function fetchCustomers() {
  const res = await fetch(`${API_BASE}/customers`);
  if (!res.ok) throw new Error('Failed to fetch customers');
  return await res.json();
}
