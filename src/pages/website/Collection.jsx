import React, { useState } from 'react';
import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpeg';
import img3 from '../../assets/images/img3.jpeg';
import img4 from '../../assets/images/img4.jpeg';

const colors = {
  primary: '#0A0A0A',
  secondary: '#6C5F5B',
  accent: '#C9A961',
  accentLight: '#E8D8B8',
  royalGreen: '#90C695',
  royalGreenLight: '#B8E6C1',
  royalGreenDark: '#6FA47C',
  greenAccent: '#A8D5BA',
  background: '#F8FBF9',
  white: '#FFFFFF',
  cream: '#F0F7F2',
  text: '#1F1F1F',
  textLight: '#8B8885',
  textMuted: '#B8B5B2',
  border: '#D5E5DB',
  gradient1: 'linear-gradient(135deg, #F8FBF9 0%, #F0F7F2 50%, #E8F3EC 100%)',
  gradient2: 'linear-gradient(135deg, #C9A961 0%, #D4B778 50%, #DFC590 100%)',
  gradientGreen: 'linear-gradient(135deg, #90C695 0%, #A8D5BA 50%, #B8E6C1 100%)',
  gradientRoyal: 'linear-gradient(135deg, #C9A961 0%, #90C695 50%, #6FA47C 100%)',
  shadow: 'rgba(144, 198, 149, 0.15)',
  shadowMedium: 'rgba(111, 164, 124, 0.25)',
  shadowDark: 'rgba(96, 156, 109, 0.35)',
  overlay: 'rgba(144, 198, 149, 0.08)',
  greenGlow: 'rgba(168, 213, 186, 0.4)',
};

const products = [
  { id: 1, name: 'Floral Essence', price: '$129', image: img2, description: 'Soft, elegant, feminine aromas' },
  { id: 2, name: 'Woody Notes', price: '$149', image: img3, description: 'Warm, bold and masculine tones' },
  { id: 3, name: 'Fresh Citrus', price: '$119', image: img4, description: 'Clean, energetic fragrances' },
  { id: 4, name: 'Royal Elegance', price: '$169', image: img1, description: 'Premium luxury fragrance' },
  { id: 5, name: 'Midnight Bloom', price: '$139', image: img2, description: 'Mysterious evening scent' },
  { id: 6, name: 'Golden Hour', price: '$159', image: img3, description: 'Warm sunset-inspired notes' },
  { id: 7, name: 'Ocean Breeze', price: '$124', image: img4, description: 'Fresh coastal fragrance' },
  { id: 8, name: 'Velvet Rose', price: '$134', image: img1, description: 'Luxurious floral bouquet' },
  { id: 9, name: 'Amber Night', price: '$149', image: img2, description: 'Rich, sensual evening scent' },
];

const styles = {
  page: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: colors.background,
    minHeight: '100vh',
    color: colors.text,
    position: 'relative',
    overflowX: 'hidden',
  },
  shopContainer: {
    paddingTop: '40px',
  },
  shopHeader: {
    padding: '100px 100px 60px',
    textAlign: 'center',
    background: `linear-gradient(135deg, #F8FBF9 0%, #F0F7F2 30%, #E8F3EC 60%, ${colors.royalGreenLight}15 100%)`,
    position: 'relative',
  },
  shopHeaderPattern: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '400px',
    height: '400px',
    background: `radial-gradient(circle, ${colors.royalGreenLight}20 0%, ${colors.accentLight}15 40%, transparent 70%)`,
    borderRadius: '50%',
    transform: 'translate(20%, -20%)',
    zIndex: 0,
  },
  shopBadge: {
    display: 'inline-block',
    padding: '6px 18px',
    backgroundColor: colors.royalGreenLight + '40',
    color: colors.royalGreenDark,
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '25px',
    borderRadius: '0',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    zIndex: 1,
  },
  shopTitle: {
    fontSize: '64px',
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: '-2px',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '20px',
    position: 'relative',
    zIndex: 1,
  },
  shopSubtitle: {
    fontSize: '19px',
    color: colors.textLight,
    fontWeight: '400',
    lineHeight: '1.7',
    fontFamily: "'Inter', sans-serif",
    maxWidth: '600px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  filtersSection: {
    padding: '40px 100px',
    backgroundColor: colors.white,
    borderBottom: `1px solid ${colors.border}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  filterGroup: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  filterLabel: {
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: colors.text,
    fontFamily: "'Inter', sans-serif",
  },
  filterButton: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: colors.text,
    border: `1px solid ${colors.border}`,
    fontSize: '12px',
    fontWeight: '500',
    letterSpacing: '1px',
    cursor: 'pointer',
    borderRadius: '0',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
  },
  filterButtonActive: {
    backgroundColor: colors.royalGreenDark,
    color: colors.white,
    border: `1px solid ${colors.royalGreenDark}`,
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '50px',
    padding: '80px 100px',
    maxWidth: '1600px',
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
};

function Collection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Floral', 'Woody', 'Fresh', 'Oriental'];

  const handleCardHover = (e, isEntering) => {
    const card = e.currentTarget;
    const imgWrapper = card.querySelector('[data-image-wrapper]');
    const img = imgWrapper?.querySelector('img');
    const overlay = card.querySelector('[data-overlay]');
    
    if (isEntering) {
      card.style.transform = 'translateY(-12px)';
      card.style.boxShadow = `0 20px 60px ${colors.shadowDark}`;
      if (img) img.style.transform = 'scale(1.08)';
      if (overlay) overlay.style.transform = 'translateY(0)';
    } else {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = `0 4px 20px ${colors.shadow}, 0 0 15px ${colors.royalGreenLight}20`;
      if (img) img.style.transform = 'scale(1)';
      if (overlay) overlay.style.transform = 'translateY(100%)';
    }
  };

  return (
    <div style={styles.shopContainer}>
        {/* Collection Header */}
        <section style={styles.shopHeader}>
          <div style={styles.shopHeaderPattern}></div>
          <div style={styles.shopBadge}>Explore Our Scents</div>
          <h1 style={styles.shopTitle}>Our Collections</h1>
          <p style={styles.shopSubtitle}>
            Browse through our exquisite collections, each telling a unique story of aroma and elegance.
          </p>
        </section>

        {/* Filters */}
        <div style={styles.filtersSection}>
          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>Category:</span>
            {categories.map((category) => (
              <button
                key={category}
                style={{
                  ...styles.filterButton,
                  ...(selectedCategory === category ? styles.filterButtonActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = colors.royalGreenLight + '40';
                    e.target.style.borderColor = colors.royalGreen;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = colors.border;
                  }
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div style={styles.productsGrid}>
          {products.map((product) => (
            <div
              key={product.id}
              style={styles.card}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.cardImageWrapper} data-image-wrapper>
                <img src={product.image} alt={product.name} style={styles.cardImage} />
                <div style={styles.cardOverlay} data-overlay>
                  <div style={{color: 'white', fontSize: '14px', lineHeight: '1.8'}}>
                    {product.description}. Perfect for any occasion, crafted with premium ingredients.
                  </div>
                </div>
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{product.name}</h3>
                <p style={styles.cardText}>{product.description}</p>
                <div style={styles.cardFooter}>
                  <div style={styles.cardPrice}>{product.price}</div>
                  <button 
                    style={styles.cardButton}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.royalGreenDark;
                      e.target.style.color = colors.white;
                      e.target.style.borderColor = colors.royalGreenDark;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = colors.primary;
                      e.target.style.borderColor = colors.primary;
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Collection;