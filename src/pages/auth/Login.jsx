import React, { useState } from 'react';
import { signIn } from '../../services/auth.service.js';

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: colors.white,
    boxShadow: `0 8px 30px ${colors.shadowMedium}`,
    borderRadius: '8px',
    maxWidth: '450px',
    width: '100%',
    margin: 'auto', // Center the container
    position: 'relative',
    zIndex: 1,
  },
  headerPattern: {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '200px',
    height: '200px',
    background: `radial-gradient(circle, ${colors.royalGreenLight}20 0%, ${colors.accentLight}15 40%, transparent 70%)`,
    borderRadius: '50%',
    zIndex: 0,
  },
  headerPatternBottom: {
    position: 'absolute',
    bottom: '-50px',
    left: '-50px',
    width: '150px',
    height: '150px',
    background: `radial-gradient(circle, ${colors.accentLight}20 0%, ${colors.royalGreenLight}15 40%, transparent 70%)`,
    borderRadius: '50%',
    zIndex: 0,
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: '-1px',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '30px',
    position: 'relative',
    zIndex: 1,
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    position: 'relative',
    zIndex: 1,
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: colors.text,
    marginBottom: '8px',
    fontFamily: "'Inter', sans-serif",
  },
  input: {
    padding: '12px 15px',
    border: `1px solid ${colors.border}`,
    borderRadius: '4px',
    fontSize: '16px',
    fontFamily: "'Inter', sans-serif",
    backgroundColor: colors.cream,
    color: colors.text,
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none',
  },
  button: {
    padding: '15px 30px',
    background: colors.gradientRoyal,
    color: colors.white,
    border: `2px solid ${colors.royalGreenLight}`,
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '2px',
    cursor: 'pointer',
    borderRadius: '0',
    textTransform: 'uppercase',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: "'Inter', sans-serif",
    boxShadow: `0 8px 20px ${colors.shadowMedium}`,
    outline: 'none',
    marginTop: '20px',
  },
  link: {
    marginTop: '20px',
    fontSize: '14px',
    color: colors.royalGreenDark,
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    transition: 'color 0.3s ease',
  },
};

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const { user, error } = await signIn(formData.email.trim().toLowerCase(), formData.password);
        if (error) throw error;
        if (typeof onLogin === 'function') onLogin(user);
        setFormData({ email: '', password: '' });
      } catch (err) {
        alert('Invalid credentials — please try again');
      }
    })();
  };

  return (
    <div style={styles.page}>
      <div style={styles.loginContainer}>
        <div style={styles.headerPattern}></div>
        <div style={styles.headerPatternBottom}></div>
        <h1 style={styles.title}>Welcome Back</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <a 
          href="#" // Placeholder for actual routing
          style={styles.link}
          onMouseEnter={(e) => e.target.style.color = colors.accent}
          onMouseLeave={(e) => e.target.style.color = colors.royalGreenDark}
        >
          Forgot Password?
        </a>
        <a 
          href="#" // Placeholder for actual routing
          style={styles.link}
          onMouseEnter={(e) => e.target.style.color = colors.accent}
          onMouseLeave={(e) => e.target.style.color = colors.royalGreenDark}
        >
          Don't have an account? Register
        </a>
      </div>
    </div>
  );
}

export default Login;