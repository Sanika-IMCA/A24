import React, { useState } from 'react';
import img1 from '../../assets/images/img1.jpeg';
// Removed unused imports img2, img3, img4 as they are not needed for a contact page

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
  container: {
    paddingTop: '40px',
  },
  headerSection: {
    padding: '100px 100px 60px',
    textAlign: 'center',
    background: `linear-gradient(135deg, #F8FBF9 0%, #F0F7F2 30%, #E8F3EC 60%, ${colors.royalGreenLight}15 100%)`,
    position: 'relative',
  },
  headerPattern: {
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
  badge: {
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
  title: {
    fontSize: '64px',
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: '-2px',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '20px',
    position: 'relative',
    zIndex: 1,
  },
  subtitle: {
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
  contentSection: {
    padding: '80px 100px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: colors.white,
    boxShadow: `0 4px 20px ${colors.shadow}, 0 0 15px ${colors.royalGreenLight}20`,
    borderRadius: '4px',
    marginTop: '-40px',
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '30px',
    backgroundColor: colors.cream,
    borderRadius: '4px',
    boxShadow: `0 2px 10px ${colors.shadowMedium}`,
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
    backgroundColor: colors.white,
    color: colors.text,
    transition: 'border-color 0.3s ease',
    outline: 'none',
  },
  textarea: {
    minHeight: '120px',
    resize: 'vertical',
  },
  submitButton: {
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
  },
  contactInfo: {
    textAlign: 'left',
    fontSize: '17px',
    lineHeight: '1.8',
    color: colors.text,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  infoIcon: {
    fontSize: '24px',
    color: colors.royalGreenDark,
  },
  infoText: {
    margin: 0,
  },
  mapContainer: {
    width: '100%',
    height: '300px',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: `0 5px 15px ${colors.shadowMedium}`,
    border: `1px solid ${colors.border}`,
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.textMuted,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white,
    fontSize: '20px',
    fontWeight: '600',
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div style={styles.container}>
        {/* Contact Header */}
        <section style={styles.headerSection}>
          <div style={styles.headerPattern}></div>
          <div style={styles.badge}>Get in Touch</div>
          <h1 style={styles.title}>Contact Us</h1>
          <p style={styles.subtitle}>
            We'd love to hear from you! Send us a message or find our details below.
          </p>
        </section>

        {/* Contact Content */}
        <section style={styles.contentSection}>
            <div style={styles.formContainer}>
                <h2 style={{...styles.title, fontSize: '30px', marginBottom: '15px', textAlign: 'left'}}>Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="name" style={styles.label}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
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
                        <label htmlFor="message" style={styles.label}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            style={{...styles.input, ...styles.textarea}}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" style={styles.submitButton}>Send Message</button>
                </form>
            </div>
            
            <div style={styles.contactInfo}>
                <h2 style={{...styles.title, fontSize: '30px', marginBottom: '15px', textAlign: 'left'}}>Our Details</h2>
                <div style={styles.infoItem}>
                    <span style={styles.infoIcon}>📍</span>
                    <p style={styles.infoText}>123 Perfume Avenue, Scent City, PC 45678</p>
                </div>
                <div style={styles.infoItem}>
                    <span style={styles.infoIcon}>📞</span>
                    <p style={styles.infoText}>+1 (555) 123-4567</p>
                </div>
                <div style={styles.infoItem}>
                    <span style={styles.infoIcon}>📧</span>
                    <p style={styles.infoText}>info@a24perfumes.com</p>
                </div>
                <div style={styles.mapContainer}>
                    <div style={styles.mapPlaceholder}>Map Placeholder</div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Contact;