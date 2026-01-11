import React, { useState } from 'react';
import img1 from './assets/images/img1.jpeg';
import img2 from './assets/images/img2.jpeg';
import img3 from './assets/images/img3.jpeg';
import img4 from './assets/images/img4.jpeg';
import Shop from './pages/website/Shop.jsx';
import Collection from './pages/website/Collection.jsx';
import About from './pages/website/About.jsx';
import Contact from './pages/website/Contact.jsx';
import Login from './pages/auth/Login.jsx';
import AdminDashboard from './pages/admin/dashboard/Dashboard.jsx';

const colors = {
  // Premium royal color palette with light green shades
  primary: '#0A0A0A',        // deep black
  secondary: '#6C5F5B',      // sophisticated taupe
  accent: '#C9A961',         // luxurious gold
  accentLight: '#E8D8B8',    // soft gold
  royalGreen: '#90C695',     // light emerald green
  royalGreenLight: '#B8E6C1', // soft mint green
  royalGreenDark: '#6FA47C', // deeper emerald
  greenAccent: '#A8D5BA',    // sage green accent
  background: '#F8FBF9',     // light green-tinted off-white
  white: '#FFFFFF',
  cream: '#F0F7F2',          // soft green-tinted cream
  text: '#1F1F1F',
  textLight: '#8B8885',
  textMuted: '#B8B5B2',
  border: '#D5E5DB',         // light green-tinted border
  gradient1: 'linear-gradient(135deg, #F8FBF9 0%, #F0F7F2 50%, #E8F3EC 100%)',
  gradient2: 'linear-gradient(135deg, #C9A961 0%, #D4B778 50%, #DFC590 100%)',
  gradientGreen: 'linear-gradient(135deg, #90C695 0%, #A8D5BA 50%, #B8E6C1 100%)',
  gradientRoyal: 'linear-gradient(135deg, #C9A961 0%, #90C695 50%, #6FA47C 100%)',
  shadow: 'rgba(144, 198, 149, 0.15)',      // light green shadow
  shadowMedium: 'rgba(111, 164, 124, 0.25)', // medium green shadow
  shadowDark: 'rgba(96, 156, 109, 0.35)',    // darker green shadow
  overlay: 'rgba(144, 198, 149, 0.08)',      // green overlay
  greenGlow: 'rgba(168, 213, 186, 0.4)',     // green glow effect
};

const styles = {
  page: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: colors.background,
    minHeight: '100vh',
    color: colors.text,
    position: 'relative',
    overflowX: 'hidden',
  },

  /* Header */
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 100px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    boxShadow: `0 1px 0 ${colors.border}, 0 4px 20px ${colors.shadow}, 0 0 30px ${colors.greenGlow}`,
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    borderBottom: `2px solid ${colors.royalGreenLight}40`,
  },
  logo: {
    fontSize: '24px',
    fontWeight: '700',
    letterSpacing: '6px',
    color: colors.primary,
    cursor: 'pointer',
    fontFamily: "'Playfair Display', serif",
    position: 'relative',
  },
  nav: {
    display: 'flex',
    gap: '50px',
    fontSize: '12px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
  },
  navItem: {
    color: colors.text,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    paddingBottom: '8px',
    fontFamily: "'Inter', sans-serif",
  },

  /* Hero Section */
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '80px',
    padding: '140px 100px',
    background: `linear-gradient(135deg, #F8FBF9 0%, #F0F7F2 30%, #E8F3EC 60%, ${colors.royalGreenLight}15 100%)`,
    position: 'relative',
    minHeight: '90vh',
    overflow: 'hidden',
  },
  heroPattern: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '600px',
    height: '600px',
    background: `radial-gradient(circle, ${colors.royalGreenLight}25 0%, ${colors.accentLight}15 40%, transparent 70%)`,
    borderRadius: '50%',
    transform: 'translate(30%, -30%)',
    zIndex: 0,
  },
  heroPatternGreen: {
    position: 'absolute',
    bottom: '-100px',
    left: '-100px',
    width: '500px',
    height: '500px',
    background: `radial-gradient(circle, ${colors.royalGreen}20 0%, ${colors.greenAccent}15 40%, transparent 70%)`,
    borderRadius: '50%',
    zIndex: 0,
  },
  heroText: {
    maxWidth: '580px',
    textAlign: 'left',
    position: 'relative',
    zIndex: 2,
  },
  heroBadge: {
    display: 'inline-block',
    padding: '8px 20px',
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '30px',
    borderRadius: '0',
    fontFamily: "'Inter', sans-serif",
  },
  heroTitle: {
    fontSize: '82px',
    fontWeight: '700',
    lineHeight: '1.05',
    color: colors.primary,
    marginBottom: '35px',
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '-2px',
    position: 'relative',
  },
  heroTitleAccent: {
    display: 'block',
    color: colors.accent,
    fontStyle: 'italic',
  },
  heroSub: {
    margin: '0 0 50px 0',
    fontSize: '19px',
    color: colors.textLight,
    fontWeight: '400',
    lineHeight: '1.8',
    fontFamily: "'Inter', sans-serif",
    maxWidth: '500px',
  },
  button: {
    padding: '20px 50px',
    background: colors.gradientRoyal,
    color: colors.white,
    border: `2px solid ${colors.royalGreenLight}`,
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2.5px',
    cursor: 'pointer',
    borderRadius: '0',
    textTransform: 'uppercase',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: "'Inter', sans-serif",
    boxShadow: `0 8px 30px ${colors.shadowMedium}, 0 0 20px ${colors.greenGlow}`,
    position: 'relative',
    overflow: 'hidden',
  },
  heroImageContainer: {
    position: 'relative',
    zIndex: 2,
  },
  heroImage: {
    width: '100%',
    height: '650px',
    borderRadius: '4px',
    boxShadow: `0 30px 80px ${colors.shadowDark}, 0 15px 40px ${colors.shadowMedium}, 0 0 50px ${colors.greenGlow}`,
    objectFit: 'cover',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    filter: 'brightness(1.02) contrast(1.05)',
    border: `1px solid ${colors.royalGreenLight}30`,
  },
  heroImageOverlay: {
    position: 'absolute',
    top: '-40px',
    right: '-40px',
    width: '300px',
    height: '300px',
    background: colors.gradientRoyal,
    borderRadius: '50%',
    opacity: 0.2,
    zIndex: -1,
    filter: 'blur(20px)',
  },

  /* Collections */
  section: {
    padding: '140px 100px',
    textAlign: 'center',
    backgroundColor: colors.white,
    background: `linear-gradient(to bottom, ${colors.white} 0%, ${colors.cream} 100%)`,
    position: 'relative',
  },
  sectionHeader: {
    maxWidth: '700px',
    margin: '0 auto 90px',
  },
  sectionBadge: {
    display: 'inline-block',
    padding: '6px 18px',
    backgroundColor: colors.cream,
    color: colors.text,
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '25px',
    borderRadius: '0',
    fontFamily: "'Inter', sans-serif",
  },
  sectionTitle: {
    fontSize: '56px',
    marginBottom: '25px',
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: '-1.5px',
    fontFamily: "'Playfair Display', serif",
    lineHeight: '1.1',
  },
  sectionSub: {
    color: colors.textLight,
    marginBottom: '0',
    fontSize: '18px',
    fontWeight: '400',
    fontFamily: "'Inter', sans-serif",
    lineHeight: '1.7',
  },
  collectionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '50px',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: '4px',
    boxShadow: `0 4px 20px ${colors.shadow}, 0 0 15px ${colors.royalGreenLight}20`,
    border: `1px solid ${colors.border}`,
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    background: colors.white,
  },
  cardImageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: colors.cream,
  },
  cardImage: {
    width: '100%',
    height: '380px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: `linear-gradient(to top, ${colors.royalGreenDark}E6 0%, ${colors.royalGreen}CC 50%, transparent 100%)`,
    padding: '30px',
    transform: 'translateY(100%)',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardContent: {
    padding: '35px',
    textAlign: 'left',
  },
  cardTitle: {
    margin: '0 0 12px 0',
    fontSize: '26px',
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: '-0.5px',
    fontFamily: "'Playfair Display', serif",
    lineHeight: '1.2',
  },
  cardText: {
    color: colors.textLight,
    fontSize: '15px',
    lineHeight: '1.7',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '25px',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '25px',
    borderTop: `1px solid ${colors.border}`,
  },
  cardPrice: {
    fontSize: '24px',
    fontWeight: '700',
    color: colors.primary,
    fontFamily: "'Playfair Display', serif",
  },
  cardButton: {
    padding: '10px 24px',
    backgroundColor: 'transparent',
    color: colors.primary,
    border: `2px solid ${colors.primary}`,
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    cursor: 'pointer',
    borderRadius: '0',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
  },

  /* Fragrance Types */
  fragranceSection: {
    padding: '140px 100px',
    background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.royalGreenLight}15 50%, ${colors.cream} 100%)`,
    position: 'relative',
  },
  fragranceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    marginTop: '80px',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  fragranceItem: {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '600',
    padding: '35px 25px',
    backgroundColor: colors.white,
    borderRadius: '4px',
    color: colors.text,
    boxShadow: `0 2px 10px ${colors.shadow}, 0 0 10px ${colors.royalGreenLight}15`,
    border: `1px solid ${colors.border}`,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },

  /* Story */
  story: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '100px',
    alignItems: 'center',
    padding: '140px 100px',
    backgroundColor: colors.white,
    position: 'relative',
  },
  storyImageContainer: {
    position: 'relative',
  },
  storyImage: {
    width: '100%',
    height: '500px',
    borderRadius: '4px',
    boxShadow: `0 25px 70px ${colors.shadowDark}, 0 0 40px ${colors.greenGlow}`,
    objectFit: 'cover',
    filter: 'brightness(1.02) contrast(1.05)',
    border: `1px solid ${colors.royalGreenLight}30`,
  },
  storyImageDecoration: {
    position: 'absolute',
    bottom: '-30px',
    left: '-30px',
    width: '200px',
    height: '200px',
    background: colors.gradientGreen,
    borderRadius: '50%',
    opacity: 0.25,
    zIndex: -1,
    filter: 'blur(15px)',
  },
  storyText: {
    maxWidth: '560px',
  },
  storyBadge: {
    display: 'inline-block',
    padding: '6px 18px',
    backgroundColor: colors.cream,
    color: colors.text,
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '30px',
    borderRadius: '0',
    fontFamily: "'Inter', sans-serif",
  },
  storyTitle: {
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '30px',
    color: colors.primary,
    letterSpacing: '-1px',
    fontFamily: "'Playfair Display', serif",
    lineHeight: '1.2',
  },
  storyParagraph: {
    fontSize: '17px',
    lineHeight: '1.9',
    color: colors.textLight,
    fontWeight: '400',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '25px',
  },
  storyQuote: {
    fontSize: '24px',
    fontStyle: 'italic',
    color: colors.royalGreenDark,
    lineHeight: '1.6',
    marginTop: '40px',
    paddingLeft: '30px',
    borderLeft: `4px solid ${colors.royalGreen}`,
    fontFamily: "'Playfair Display', serif",
    textShadow: `0 2px 10px ${colors.royalGreenLight}30`,
  },

  /* Footer */
  footer: {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '80px 100px 50px',
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: '400',
    letterSpacing: '1.5px',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
  },
  footerContent: {
    maxWidth: '600px',
    margin: '0 auto 50px',
  },
  footerTitle: {
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '4px',
    marginBottom: '30px',
    fontFamily: "'Playfair Display', serif",
  },
  footerText: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: colors.textMuted,
    marginBottom: '40px',
  },
  footerCopyright: {
    paddingTop: '40px',
    borderTop: `1px solid ${colors.textMuted}30`,
    color: colors.textMuted,
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'shop') {
    return (
      <div style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logo}>A24 PERFUMES</div>
          <nav style={styles.nav}>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'home' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'home' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'shop' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'shop' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('shop')}
            >
              Shop
            </span>
          <span 
            style={styles.navItem}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('collections')}
          >
            Collections
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'about' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'about' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('about')}
          >
            About
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'contact' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'contact' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'admin' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'admin' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('login')}
          >
            Login
          </span>
        </nav>
      </header>
      <Shop />
      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerTitle}>A24 PERFUMES</div>
          <p style={styles.footerText}>
            Experience the art of perfumery. Discover timeless elegance in every bottle.
          </p>
        </div>
        <div style={styles.footerCopyright}>
          © 2026 A24 Perfumes. All Rights Reserved.
        </div>
      </footer>
      </div>
    );
  } else if (currentPage === 'collections') {
    return (
      <div style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logo}>A24 PERFUMES</div>
          <nav style={styles.nav}>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'home' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'home' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'shop' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'shop' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('shop')}
            >
              Shop
            </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'collections' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'collections' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('collections')}
          >
            Collections
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'about' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'about' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('about')}
          >
            About
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'contact' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'contact' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'admin' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'admin' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('login')}
          >
            Login
          </span>
        </nav>
      </header>
      <Collection />
      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerTitle}>A24 PERFUMES</div>
          <p style={styles.footerText}>
            Experience the art of perfumery. Discover timeless elegance in every bottle.
          </p>
        </div>
        <div style={styles.footerCopyright}>
          © 2026 A24 Perfumes. All Rights Reserved.
        </div>
      </footer>
      </div>
    );
  } else if (currentPage === 'about') {
    return (
      <div style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logo}>A24 PERFUMES</div>
          <nav style={styles.nav}>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'home' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'home' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'shop' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'shop' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('shop')}
            >
              Shop
            </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'collections' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'collections' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('collections')}
          >
            Collections
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'about' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'about' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('about')}
          >
            About
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'contact' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'contact' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'login' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'login' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('login')}
          >
            Login
          </span>
        </nav>
      </header>
      <About />
      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerTitle}>A24 PERFUMES</div>
          <p style={styles.footerText}>
            Experience the art of perfumery. Discover timeless elegance in every bottle.
          </p>
        </div>
        <div style={styles.footerCopyright}>
          © 2026 A24 Perfumes. All Rights Reserved.
        </div>
      </footer>
      </div>
    );
  } else if (currentPage === 'contact') {
    return (
      <div style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logo}>A24 PERFUMES</div>
          <nav style={styles.nav}>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'home' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'home' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'shop' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'shop' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('shop')}
            >
              Shop
            </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'collections' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'collections' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('collections')}
          >
            Collections
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'about' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'about' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('about')}
          >
            About
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'contact' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'contact' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'login' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'login' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('login')}
          >
            Login
          </span>
        </nav>
      </header>
      <Contact />
      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerTitle}>A24 PERFUMES</div>
          <p style={styles.footerText}>
            Experience the art of perfumery. Discover timeless elegance in every bottle.
          </p>
        </div>
        <div style={styles.footerCopyright}>
          © 2026 A24 Perfumes. All Rights Reserved.
        </div>
      </footer>
      </div>
    );
  }

  else if (currentPage === 'login') {
    return (
      <div style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logo}>A24 PERFUMES</div>
          <nav style={styles.nav}>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'home' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'home' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'shop' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'shop' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('shop')}
            >
              Shop
            </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'collections' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'collections' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('collections')}
          >
            Collections
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'about' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'about' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('about')}
          >
            About
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'contact' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'contact' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'login' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'login' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('login')}
          >
            Login
          </span>
        </nav>
      </header>
      <Login onLogin={handleNavClick} />
      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerTitle}>A24 PERFUMES</div>
          <p style={styles.footerText}>
            Experience the art of perfumery. Discover timeless elegance in every bottle.
          </p>
        </div>
        <div style={styles.footerCopyright}>
          © 2026 A24 Perfumes. All Rights Reserved.
        </div>
      </footer>
      </div>
    );
  }

  else if (currentPage === 'admin') {
    return (
      <div style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logo}>A24 PERFUMES</div>
          <nav style={styles.nav}>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'home' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'home' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
            <span 
              style={{
                ...styles.navItem,
                color: currentPage === 'shop' ? colors.royalGreen : colors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.royalGreen;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentPage === 'shop' ? colors.royalGreen : colors.text;
                e.target.style.transform = 'translateY(0)';
              }}
              onClick={() => handleNavClick('shop')}
            >
              Shop
            </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'collections' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'collections' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('collections')}
          >
            Collections
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'about' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'about' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('about')}
          >
            About
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'contact' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'contact' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </span>
          <span 
            style={{
              ...styles.navItem,
              color: currentPage === 'admin' ? colors.royalGreen : colors.text,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.royalGreen;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = currentPage === 'admin' ? colors.royalGreen : colors.text;
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('login')}
          >
            Login
          </span>
        </nav>
      </header>
      <AdminDashboard />
      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerTitle}>A24 PERFUMES</div>
          <p style={styles.footerText}>
            Experience the art of perfumery. Discover timeless elegance in every bottle.
          </p>
        </div>
        <div style={styles.footerCopyright}>
          © 2026 A24 Perfumes. All Rights Reserved.
        </div>
      </footer>
      </div>
    );
  }
