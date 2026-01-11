import React, { useEffect, useState } from 'react';
import adminService from '../../../services/admin.service.js';

const styles = {
  page: { padding: 24 },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { textAlign: 'left', padding: 8, borderBottom: '1px solid #eee' },
  td: { padding: 8, borderBottom: '1px solid #fafafa' },
  button: { padding: '6px 10px', borderRadius: 6, border: 'none', cursor: 'pointer' }
};

function ProductList({ onEdit }) {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');

  const load = async () => {
    const res = await adminService.fetchProducts(q);
    setProducts(res.data || res);
  };

  useEffect(() => { load(); }, []);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2>Products</h2>
        <div>
          <input placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} style={{ padding: 8, marginRight: 8 }} />
          <button style={{ ...styles.button, background: '#90C695', color: '#fff' }} onClick={() => onEdit(null)}>Add Product</button>
          <button style={{ ...styles.button, marginLeft: 8 }} onClick={load}>Refresh</button>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Brand</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Stock</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td style={styles.td}>{p.name}</td>
              <td style={styles.td}>{p.brand}</td>
              <td style={styles.td}>${p.price}</td>
              <td style={styles.td}>{p.stock || 0}</td>
              <td style={styles.td}>
                <button style={{ ...styles.button, marginRight: 8 }} onClick={() => onEdit(p)}>Edit</button>
                <button style={{ ...styles.button }} onClick={async () => { await adminService.deleteProduct(p.id); load(); }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
