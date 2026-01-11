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

// These are not needed for an About page, but kept for consistency if needed later
const products = [
  { id: 1, name: 'Floral Essence', price: '$129', image: img2, description: 'Soft, elegant, feminine aromas' },
  { id: 2, name: 'Woody Notes', price: '$149', image: img3, description: 'Warm, bold and masculine tones' },
  { id: 3, name: 'Fresh Citrus', price: '$119', image: img4, description: 'Clean, energetic fragrances' },
  { id: 4, name: 'Royal Elegance', price: '$169', image: img1, description: 'Premium luxury fragrance' },
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
  contentText: {
    textAlign: 'left',
    fontSize: '17px',
    lineHeight: '1.8',
    color: colors.text,
  },
  contentTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: colors.primary,
    fontFamily: "'Playfair Display', serif",
    marginBottom: '20px',
  },
  contentParagraph: {
    marginBottom: '20px',
  },
  imageContainer: {
    position: 'relative',
    padding: '20px',
    background: colors.cream,
    borderRadius: '4px',
    boxShadow: `0 10px 30px ${colors.shadowMedium}`,
  },
  aboutImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    display: 'block',
  },
  quoteBox: {
    background: colors.royalGreenLight + '20',
    borderLeft: `4px solid ${colors.royalGreenDark}`,
    padding: '20px 30px',
    marginTop: '30px',
    fontStyle: 'italic',
    color: colors.royalGreenDark,
    fontSize: '18px',
    lineHeight: '1.6',
  },
};

function About() {
  return (
    <div style={styles.container}>
        {/* About Header */}
        <section style={styles.headerSection}>
          <div style={styles.headerPattern}></div>
          <div style={styles.badge}>Our Journey</div>
          <h1 style={styles.title}>About Us</h1>
          <p style={styles.subtitle}>
            We are dedicated to crafting unique and luxurious fragrances that tell a story.
          </p>
        </section>

        {/* About Content */}
        <section style={styles.contentSection}>
            <div style={styles.contentText}>
                <h2 style={styles.contentTitle}>The Art of Perfumery</h2>
                <p style={styles.contentParagraph}>
                    At A24 Perfumes, we believe fragrance is more than just a scent; 
                    it's an experience, a memory, a statement. Our journey began 
                    with a passion for the intricate art of perfumery, a desire 
                    to capture emotions and moments in a bottle.
                </p>
                <p style={styles.contentParagraph}>
                    Each of our creations is a masterpiece, meticulously blended 
                    by master perfumers using the finest, ethically sourced ingredients 
                    from around the globe. We pride ourselves on our commitment to 
                    quality, creativity, and sustainability.
                </p>
                <div style={styles.quoteBox}>
                    "A perfume is a story in scent, sometimes a poem in memory."
                </div>
            </div>
            <div style={styles.imageContainer}>
                <img src={img1} alt="About A24 Perfumes" style={styles.aboutImage} />
            </div>
        </section>

    </div>
  );
}

export default About;