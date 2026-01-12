import React, { useState, useEffect } from 'react';
import img1 from './assets/images/img1.jpeg';
import img2 from './assets/images/img2.jpeg';
import img3 from './assets/images/img3.jpeg';
import img4 from './assets/images/img4.jpeg';
import Shop from './pages/website/Shop.jsx';
import Collection from './pages/website/Collection.jsx';
import About from './pages/website/About.jsx';
import Contact from './pages/website/Contact.jsx';
import Cart from './pages/website/Cart.jsx';
import Checkout from './pages/website/Checkout.jsx';
import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';
import AdminDashboard from './pages/admin/dashboard/Dashboard.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import { supabase } from './supabaseClient';
import { signOut, getSession, onAuthStateChange } from './services/auth.service';
import useCartStore from './store/cart.store';

const colors = {
  primary: '#0A0A0A',
  royalGreen: '#90C695',
  text: '#1F1F1F',
  textMuted: '#8B8885',
  background: '#F8FBF9',
  white: '#FFFFFF',
  shadow: 'rgba(144, 198, 149, 0.15)',
};

const styles = {
  page: { fontFamily: "'Inter', sans-serif", backgroundColor: colors.background, minHeight: '100vh', color: colors.text },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 60px', backgroundColor: 'rgba(255,255,255,0.95)', position: 'sticky', top: 0, zIndex: 1000 },
  logo: { fontSize: 22, fontWeight: 700, color: colors.primary, letterSpacing: 4 },
  nav: { display: 'flex', gap: 30, fontSize: 12, fontWeight: 500, textTransform: 'uppercase' },
  navItem: { color: colors.text, cursor: 'pointer', transition: 'all 0.2s' },
  footer: { padding: '40px 60px', borderTop: `1px solid #eee`, marginTop: 40, background: 'transparent' },
  footerContent: { maxWidth: 1100, margin: '0 auto' },
  footerTitle: { fontWeight: 700 },
  footerText: { color: colors.textMuted },
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  // Use Zustand cart store
  const cart = useCartStore(state => state.cart);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const updateCartQuantity = useCartStore(state => state.updateCartQuantity);
  const clearCart = useCartStore(state => state.clearCart);
  const getCartItemCount = useCartStore(state => state.getCartItemCount);

  useEffect(() => {
    // Get initial session
    getSession().then(({ session }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from('products').select('*');
      console.log("Supabase Data:", data);
      console.log("Supabase Error:", error);
    };
    testConnection();
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (user) => {
    setUser(user);
    setCurrentPage('home');
  };

  const handleSignup = (user) => {
    setUser(user);
    setCurrentPage('home');
  };

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    setCurrentPage('home');
  };

  const NavItem = ({ label, page }) => (
    <span
      style={{ ...styles.navItem, color: currentPage === page ? colors.royalGreen : colors.text }}
      onMouseEnter={(e) => { e.target.style.color = colors.royalGreen; e.target.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.target.style.color = currentPage === page ? colors.royalGreen : colors.text; e.target.style.transform = 'translateY(0)'; }}
      onClick={() => handleNavClick(page)}
    >
      {label}
    </span>
  );

  const renderContent = () => {
    if (currentPage === 'shop') return <Shop />;
    if (currentPage === 'collections') return <Collection />;
    if (currentPage === 'about') return <About />;
    if (currentPage === 'contact') return <Contact />;
    if (currentPage === 'cart') return <Cart cart={cart} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} onCheckout={() => setCurrentPage('checkout')} />;
    if (currentPage === 'checkout') return <Checkout cartItems={cart} onOrderPlaced={(order) => { clearCart(); setCurrentPage('order-success'); }} />;
    if (currentPage === 'login') return <Login onLogin={handleLogin} />;
    if (currentPage === 'signup') return <Signup onSignup={handleSignup} />;
    if (currentPage === 'admin') return <AdminLayout />;

    return (
      <div style={{ padding: '120px 60px' }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 44, margin: 0, color: colors.primary }}>A24 PERFUMES</h1>
            <p style={{ color: colors.textMuted, marginTop: 20 }}>Discover timeless elegance. Crafted scents inspired by nature.</p>
            <button style={{ marginTop: 20, padding: '10px 20px', background: colors.royalGreen, color: colors.white, border: 'none', borderRadius: 6 }} onClick={() => handleNavClick('shop')}>Shop Now</button>
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <img src={img1} alt="img1" style={{ width: '100%', borderRadius: 8 }} />
            <img src={img2} alt="img2" style={{ width: '100%', borderRadius: 8 }} />
            <img src={img3} alt="img3" style={{ width: '100%', borderRadius: 8 }} />
            <img src={img4} alt="img4" style={{ width: '100%', borderRadius: 8 }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>A24 PERFUMES</div>
        <nav style={styles.nav}>
          <NavItem label="Home" page="home" />
          <NavItem label="Shop" page="shop" />
          <NavItem label="Collections" page="collections" />
          <NavItem label="About" page="about" />
          <NavItem label="Contact" page="contact" />
          <NavItem label={`Cart (${getCartItemCount()})`} page="cart" />
          {user ? (
            <span
              style={{ ...styles.navItem, color: colors.text, cursor: 'pointer' }}
              onClick={handleLogout}
            >
              Logout
            </span>
          ) : (
            <>
              <NavItem label="Login" page="login" />
              <NavItem label="Signup" page="signup" />
            </>
          )}
        </nav>
      </header>

      <main>{renderContent()}</main>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerTitle}>A24 PERFUMES</div>
          <p style={styles.footerText}>Experience the art of perfumery. Discover timeless elegance in every bottle.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
