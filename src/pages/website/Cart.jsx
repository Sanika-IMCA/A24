import React from 'react';

const Cart = ({ cart, removeFromCart, updateCartQuantity, onCheckout }) => {
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Your cart is empty</h2>
        <p>Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: '50px auto', padding: 20 }}>
      <h2>Shopping Cart</h2>

      <div style={{ marginBottom: 30 }}>
        {cart.map(item => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #eee' }}>
            <img src={item.image_url} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover', marginRight: 20 }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0 }}>{item.name}</h3>
              <p style={{ margin: '5px 0', color: '#666' }}>${item.price}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button
                onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                style={{ padding: '5px 10px', background: '#f0f0f0', border: 'none', borderRadius: 4 }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                style={{ padding: '5px 10px', background: '#f0f0f0', border: 'none', borderRadius: 4 }}
              >
                +
              </button>
            </div>
            <div style={{ marginLeft: 20 }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{ marginLeft: 20, padding: '5px 10px', background: '#ff4444', color: 'white', border: 'none', borderRadius: 4 }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'right', marginBottom: 30 }}>
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onCheckout}
          style={{ padding: '15px 30px', background: '#90C695', color: 'white', border: 'none', borderRadius: 4, fontSize: 16, cursor: 'pointer' }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
