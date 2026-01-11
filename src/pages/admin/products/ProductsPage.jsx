import React, { useEffect, useState } from 'react';
import adminService from '../../../services/admin.service.js';
import ProductForm from './ProductForm.jsx';

const styles = {
  page: { padding: 24 },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  controls: { display: 'flex', gap: 8, alignItems: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: 12 },
  th: { textAlign: 'left', padding: 8, borderBottom: '1px solid #eee' },
  td: { padding: 8, borderBottom: '1px solid #fafafa' },
  button: { padding: '6px 10px', borderRadius: 6, border: 'none', cursor: 'pointer' },
  preview: { position: 'fixed', right: 20, top: 80, width: 320, background: '#fff', border: '1px solid #eee', padding: 12, boxShadow: '0 6px 24px rgba(0,0,0,0.08)' }
};

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');
  const [selected, setSelected] = useState(new Set());
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [preview, setPreview] = useState(null);

  const load = async () => {
    const res = await adminService.fetchProducts(q);
    const data = res.data || res;
    setProducts(data);
  };

  useEffect(() => { load(); }, []);

  const onSearch = async () => { await load(); };

  const toggleSelect = (id) => {
    const s = new Set(selected);
    if (s.has(id)) s.delete(id); else s.add(id);
    setSelected(s);
  };

  const deleteOne = async (id) => {
    if (!confirm('Delete product?')) return;
    await adminService.deleteProduct(id);
    await load();
  };

  const duplicate = async (p) => {
    const copy = { ...p, name: p.name + ' (copy)', id: undefined };
    delete copy.id;
    await adminService.createProduct(copy);
    await load();
  };

  const bulkUpdate = async (patch) => {
    if (selected.size === 0) { alert('No products selected'); return; }
    const ids = Array.from(selected);
    for (const id of ids) {
      try {
        await adminService.updateProduct(id, patch);
      } catch (e) {
        console.error(e);
      }
    }
    setSelected(new Set());
    await load();
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2>Products</h2>
        <div style={styles.controls}>
          <input placeholder="Search by name or brand" value={q} onChange={e => setQ(e.target.value)} style={{ padding: 8 }} />
          <button style={{ ...styles.button, background: '#90C695', color: '#fff' }} onClick={() => { setEditing(null); setShowForm(true); }}>Add Product</button>
          <button style={{ ...styles.button }} onClick={onSearch}>Search</button>
          <button style={{ ...styles.button }} onClick={() => { setSelected(new Set(products.map(p=>p.id))); }}>Select All</button>
          <button style={{ ...styles.button }} onClick={() => setSelected(new Set())}>Clear</button>
          <button style={{ ...styles.button }} onClick={() => bulkUpdate({ active: false })}>Set Inactive</button>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}></th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Brand</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Stock</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td style={styles.td}><input type="checkbox" checked={selected.has(p.id)} onChange={() => toggleSelect(p.id)} /></td>
              <td style={styles.td}>{p.name}</td>
              <td style={styles.td}>{p.brand}</td>
              <td style={styles.td}>${p.price}</td>
              <td style={styles.td}>{p.stock || 0}</td>
              <td style={styles.td}>{p.active ? 'Active' : 'Inactive'}</td>
              <td style={styles.td}>
                <button style={{ ...styles.button, marginRight: 8 }} onClick={() => { setEditing(p); setShowForm(true); }}>Edit</button>
                <button style={{ ...styles.button, marginRight: 8 }} onClick={() => duplicate(p)}>Duplicate</button>
                <button style={{ ...styles.button, marginRight: 8 }} onClick={() => deleteOne(p.id)}>Delete</button>
                <button style={{ ...styles.button }} onClick={() => setPreview(p)}>Preview</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && <div style={{ marginTop: 16 }}>
        <ProductForm product={editing} onSaved={async () => { setShowForm(false); setEditing(null); await load(); }} />
        <div style={{ marginTop: 8 }}><button onClick={() => setShowForm(false)}>Close</button></div>
      </div>}

      {preview && (
        <div style={styles.preview}>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800 }}>{preview.name}</div>
              <div style={{ color: '#666', fontSize: 13 }}>{preview.brand}</div>
              <div style={{ marginTop: 8 }}>${preview.price} <span style={{ color: '#999' }}>{preview.discountPrice ? `(${preview.discountPrice})` : ''}</span></div>
              <div style={{ marginTop: 8, fontSize: 13 }}>{preview.description}</div>
            </div>
            <div style={{ width: 80 }}>
              {preview.images && preview.images[0] ? <img src={preview.images[0]} alt="thumb" style={{ width: '100%', borderRadius: 6 }} /> : <div style={{ width: '100%', height: 64, background: '#f4f4f4' }} />}
            </div>
          </div>
          <div style={{ marginTop: 12, textAlign: 'right' }}><button onClick={() => setPreview(null)}>Close</button></div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
