import React, { useEffect, useState } from 'react';
import adminService from '../../../services/admin.service.js';

const styles = { form: { padding: 24, maxWidth: 800 }, field: { marginBottom: 12 } };

function ProductForm({ product, onSaved }) {
  const [form, setForm] = useState({ name: '', brand: '', category: '', type: '', notes: '', size: '50ml', price: 0, discountPrice: 0, stock: 0, sku: '', description: '', ingredients: '', images: [], featured: false, active: true });

  useEffect(() => { if (product) setForm({ ...form, ...product }); }, [product]);

  const handleChange = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const save = async () => {
    if (product && product.id) {
      await adminService.updateProduct(product.id, form);
    } else {
      await adminService.createProduct(form);
    }
    if (onSaved) onSaved();
  };

  return (
    <div style={styles.form}>
      <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
      <div style={styles.field}><label>Name</label><br /><input value={form.name} onChange={e => handleChange('name', e.target.value)} /></div>
      <div style={styles.field}><label>Brand</label><br /><input value={form.brand} onChange={e => handleChange('brand', e.target.value)} /></div>
      <div style={styles.field}><label>Category</label><br /><input value={form.category} onChange={e => handleChange('category', e.target.value)} /></div>
      <div style={styles.field}><label>Fragrance Type</label><br /><input value={form.type} onChange={e => handleChange('type', e.target.value)} /></div>
      <div style={styles.field}><label>Notes (Top/Middle/Base)</label><br /><input value={form.notes} onChange={e => handleChange('notes', e.target.value)} /></div>
      <div style={styles.field}><label>Size</label><br /><input value={form.size} onChange={e => handleChange('size', e.target.value)} /></div>
      <div style={styles.field}><label>Price</label><br /><input type="number" value={form.price} onChange={e => handleChange('price', Number(e.target.value))} /></div>
      <div style={styles.field}><label>Discount Price</label><br /><input type="number" value={form.discountPrice} onChange={e => handleChange('discountPrice', Number(e.target.value))} /></div>
      <div style={styles.field}><label>Stock</label><br /><input type="number" value={form.stock} onChange={e => handleChange('stock', Number(e.target.value))} /></div>
      <div style={styles.field}><label>SKU</label><br /><input value={form.sku} onChange={e => handleChange('sku', e.target.value)} /></div>
      <div style={styles.field}><label>Description</label><br /><textarea value={form.description} onChange={e => handleChange('description', e.target.value)} /></div>
      <div style={styles.field}><label>Ingredients</label><br /><textarea value={form.ingredients} onChange={e => handleChange('ingredients', e.target.value)} /></div>
      <div style={styles.field}><label>Images (comma separated URLs)</label><br /><input value={(form.images || []).join(',')} onChange={e => handleChange('images', e.target.value.split(',').map(s => s.trim()))} /></div>
      <div style={styles.field}><label><input type="checkbox" checked={form.featured} onChange={e => handleChange('featured', e.target.checked)} /> Featured</label></div>
      <div style={styles.field}><label><input type="checkbox" checked={form.active} onChange={e => handleChange('active', e.target.checked)} /> Active</label></div>
      <div><button onClick={save} style={{ padding: '8px 14px', background: '#90C695', color: '#fff', border: 'none', borderRadius: 6 }}>{product ? 'Save' : 'Create'}</button></div>
    </div>
  );
}

export default ProductForm;
