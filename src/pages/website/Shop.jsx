import React, { useState, useEffect } from 'react';
import { fetchProductsWithCategories, fetchCategories } from '../../services/product.service';
import ProductCard from '../../components/product/ProductCard';
import useCartStore from '../../store/cart.store';

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
  categorySection: {
    padding: '80px 100px',
  },
  categoryTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: colors.primary,
    marginBottom: '40px',
    textAlign: 'center',
    fontFamily: "'Playfair Display', serif",
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '30px',
    marginBottom: '80px',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: '18px',
    color: colors.textLight,
    gridColumn: '1 / -1',
  },
  noProductsText: {
    textAlign: 'center',
    fontSize: '18px',
    color: colors.textLight,
    gridColumn: '1 / -1',
  },
};

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsResult, categoriesResult] = await Promise.all([
          fetchProductsWithCategories(),
          fetchCategories()
        ]);

        if (!productsResult.error) {
          // Transform products to include category name
          const transformedProducts = (productsResult.data || []).map(product => ({
            ...product,
            category: product.categories?.name || 'Uncategorized'
          }));
          setProducts(transformedProducts);
        }

        if (!categoriesResult.error) {
          setCategories(categoriesResult.data || []);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const categoryNames = ['All', ...Object.keys(groupedProducts).sort()];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div style={styles.page}>
      <div style={styles.shopContainer}>
        {/* Shop Header */}
        <section style={styles.shopHeader}>
          <div style={styles.shopHeaderPattern}></div>
          <div style={styles.shopBadge}>Premium Collection</div>
          <h1 style={styles.shopTitle}>Our Shop</h1>
          <p style={styles.shopSubtitle}>
            Discover our complete collection of luxury fragrances.
            Each bottle is carefully crafted to deliver an unforgettable experience.
          </p>
        </section>

        {/* Filters */}
        <div style={styles.filtersSection}>
          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>Category:</span>
            {categoryNames.map((category) => (
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

        {/* Products by Category */}
        {loading ? (
          <div style={styles.categorySection}>
            <div style={styles.loadingText}>Loading products...</div>
          </div>
        ) : selectedCategory === 'All' ? (
          // Show all categories with their products
          Object.entries(groupedProducts)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([categoryName, categoryProducts]) => (
              <div key={categoryName} style={styles.categorySection}>
                <h2 style={styles.categoryTitle}>{categoryName}</h2>
                <div style={styles.productsGrid}>
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))
        ) : (
          // Show filtered category
          <div style={styles.categorySection}>
            <h2 style={styles.categoryTitle}>{selectedCategory}</h2>
            <div style={styles.productsGrid}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div style={styles.noProductsText}>No products found in this category.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
