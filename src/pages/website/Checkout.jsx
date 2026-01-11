import React, { useState } from 'react';
import { createOrder } from '../../services/order.service';

const Checkout = ({ cartItems, onOrderPlaced }) => {
  const [formData, setFormData] = useState({
    shippingAddress: '',
    paymentMethod: 'card'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await createOrder(cartItems, totalAmount);
      if (error) throw error;
      onOrderPlaced(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 800, margin: '50px auto', padding: 20 }}>
      <h2>Checkout</h2>

      <div style={{ marginBottom: 30 }}>
        <h3>Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontWeight: 'bold' }}>
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label>Shipping Address:</label>
          <textarea
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 10, marginTop: 5, minHeight: 80 }}
            placeholder="Enter your shipping address"
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, marginTop: 5 }}
          >
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ width: '100%', padding: 15, background: '#90C695', color: 'white', border: 'none', borderRadius: 4, fontSize: 16 }}
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
