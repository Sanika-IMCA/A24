import React from 'react';
import useCartStore from '../../store/cart.store';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore(state => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      border: '1px solid #f0f0f0'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
    }}
    >
      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <img
          src={product.image_url || '/placeholder-image.jpg'}
          alt={product.name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '18px',
          fontWeight: '600',
          color: '#1a1a1a'
        }}>
          {product.name}
        </h3>
        <p style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          color: '#666',
          lineHeight: '1.5'
        }}>
          {product.description}
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#90C695'
          }}>
            ${product.price}
          </span>
          {product.category && (
            <span style={{
              fontSize: '12px',
              color: '#666',
              background: '#f5f5f5',
              padding: '4px 8px',
              borderRadius: '12px'
            }}>
              {product.category}
            </span>
          )}
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
        style={{
          width: '100%',
          padding: '12px',
          background: 'linear-gradient(135deg, #90C695 0%, #A8D5BA 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #7BAF82 0%, #96C4A7 100%)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #90C695 0%, #A8D5BA 100%)';
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;