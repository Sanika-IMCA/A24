import React, { useState } from 'react';
import Dashboard from '../pages/admin/dashboard/Dashboard.jsx';
import ProductList from '../pages/admin/products/ProductList.jsx';
import ProductForm from '../pages/admin/products/ProductForm.jsx';
import ProductsPage from '../pages/admin/products/ProductsPage.jsx';

const styles = {
  container: { display: 'flex', minHeight: '80vh' },
  sidebar: { width: 220, background: '#fff', borderRight: '1px solid #eee', padding: 20 },
  content: { flex: 1, background: '#F8FBF9' },
  link: { display: 'block', padding: '10px 8px', cursor: 'pointer', color: '#333' },
  active: { fontWeight: 700, color: '#90C695' }
};

function AdminLayout() {
  const [sub, setSub] = useState('dashboard');
  const [editing, setEditing] = useState(null);

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={{ fontWeight: 800, marginBottom: 12 }}>Admin</div>
        <div style={{ marginTop: 8 }}>
          <div onClick={() => setSub('dashboard')} style={{ ...styles.link, ...(sub === 'dashboard' ? styles.active : {}) }}>Dashboard</div>
          <div onClick={() => setSub('products-page')} style={{ ...styles.link, ...(sub === 'products-page' ? styles.active : {}) }}>Products</div>
          <div onClick={() => setSub('categories')} style={{ ...styles.link, ...(sub === 'categories' ? styles.active : {}) }}>Categories</div>
          <div onClick={() => setSub('orders')} style={{ ...styles.link, ...(sub === 'orders' ? styles.active : {}) }}>Orders</div>
          <div onClick={() => setSub('customers')} style={{ ...styles.link, ...(sub === 'customers' ? styles.active : {}) }}>Customers</div>
          <div onClick={() => setSub('settings')} style={{ ...styles.link, ...(sub === 'settings' ? styles.active : {}) }}>Settings</div>
        </div>
      </aside>

      <div style={styles.content}>
        {sub === 'dashboard' && <Dashboard />}
        {sub === 'products' && <ProductList onEdit={(p) => { setEditing(p); setSub('productForm'); }} />}
        {sub === 'productForm' && <ProductForm product={editing} onSaved={() => { setEditing(null); setSub('products'); }} />}
        {sub === 'products-page' && <ProductsPage />}
        {/* placeholders for other sections */}
        {sub === 'categories' && <div style={{ padding: 24 }}>Categories - coming soon</div>}
        {sub === 'orders' && <div style={{ padding: 24 }}>Orders - coming soon</div>}
        {sub === 'customers' && <div style={{ padding: 24 }}>Customers - coming soon</div>}
        {sub === 'settings' && <div style={{ padding: 24 }}>Settings - coming soon</div>}
      </div>
    </div>
  );
}

export default AdminLayout;
