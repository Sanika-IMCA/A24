import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbFile = path.join(__dirname, 'data', 'db.json');

const adapter = new JSONFile(dbFile);
const defaultData = { products: [], categories: [], orders: [], customers: [], admins: [ { id: 1, email: 'admin@a24.com', password: 'admin123', role: 'superadmin' } ] };
const db = new Low(adapter, defaultData);

await db.read();
if (!db.data) {
  db.data = defaultData;
  await db.write();
}

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Auth
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  await db.read();
  const admin = db.data.admins.find(a => a.email === email && a.password === password);
  if (!admin) return res.status(401).json({ message: 'Invalid credentials' });
  return res.json({ message: 'ok', role: admin.role });
});

// Products CRUD
app.get('/api/products', async (req, res) => {
  await db.read();
  const q = (req.query.q || '').toLowerCase();
  const page = parseInt(req.query.page || '1', 10);
  const per = parseInt(req.query.per || '20', 10);
  let items = db.data.products;
  if (q) items = items.filter(p => p.name.toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q));
  const total = items.length;
  const paged = items.slice((page-1)*per, page*per);
  res.json({ total, data: paged });
});

app.post('/api/products', async (req, res) => {
  await db.read();
  const product = { id: Date.now(), ...req.body };
  db.data.products.push(product);
  await db.write();
  res.json(product);
});

app.get('/api/products/:id', async (req, res) => {
  await db.read();
  const p = db.data.products.find(x => String(x.id) === req.params.id);
  if (!p) return res.status(404).json({ message: 'Not found' });
  res.json(p);
});

app.put('/api/products/:id', async (req, res) => {
  await db.read();
  const idx = db.data.products.findIndex(x => String(x.id) === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  db.data.products[idx] = { ...db.data.products[idx], ...req.body };
  await db.write();
  res.json(db.data.products[idx]);
});

app.delete('/api/products/:id', async (req, res) => {
  await db.read();
  const idx = db.data.products.findIndex(x => String(x.id) === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  const removed = db.data.products.splice(idx, 1)[0];
  await db.write();
  res.json(removed);
});

// Categories
app.get('/api/categories', async (req, res) => {
  await db.read();
  res.json(db.data.categories || []);
});
app.post('/api/categories', async (req, res) => {
  await db.read();
  const cat = { id: Date.now(), ...req.body };
  db.data.categories.push(cat);
  await db.write();
  res.json(cat);
});
app.put('/api/categories/:id', async (req, res) => {
  await db.read();
  const idx = db.data.categories.findIndex(x => String(x.id) === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  db.data.categories[idx] = { ...db.data.categories[idx], ...req.body };
  await db.write();
  res.json(db.data.categories[idx]);
});
app.delete('/api/categories/:id', async (req, res) => {
  await db.read();
  const idx = db.data.categories.findIndex(x => String(x.id) === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  const removed = db.data.categories.splice(idx, 1)[0];
  await db.write();
  res.json(removed);
});

// Dashboard overview
app.get('/api/dashboard/overview', async (req, res) => {
  await db.read();
  const products = db.data.products || [];
  const orders = db.data.orders || [];
  const customers = db.data.customers || [];

  const totalProducts = products.length;
  const totalOrders = orders.length;
  const totalCustomers = customers.length;

  const lowStock = products.filter(p => (p.stock || 0) <= (p.lowStockThreshold || 5));
  const outOfStock = products.filter(p => (p.stock || 0) === 0);

  const totalSales = orders.reduce((s, o) => s + (o.total || 0), 0);

  res.json({ totalProducts, totalOrders, totalCustomers, lowStockCount: lowStock.length, outOfStockCount: outOfStock.length, totalSales });
});

// Simple orders and customers endpoints (read-only placeholders)
app.get('/api/orders', async (req, res) => { await db.read(); res.json(db.data.orders || []); });
app.get('/api/customers', async (req, res) => { await db.read(); res.json(db.data.customers || []); });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend server running on http://localhost:${port}`));
