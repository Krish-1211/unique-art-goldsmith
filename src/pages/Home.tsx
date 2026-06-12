import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DiamondHero from '../components/DiamondHero';
import MobileHero from '../components/MobileHero';

// Images
import legacyImg from '../assets/legacy_workshop.png';
import ringImg from '../assets/collection_rings.png';
import earringImg from '../assets/collection_earrings.png';
import necklaceImg from '../assets/collection_necklaces.png';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Hero Section */}
      {isMobile ? <MobileHero /> : <DiamondHero />}

      {/* Section 2: Our Legacy */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '32px' }}>
              A Legacy of <span style={{ color: 'var(--color-secondary)', fontStyle: 'italic' }}>Radiance</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-on-surface-variant)', marginBottom: '24px', lineHeight: 1.8 }}>
              For over five decades, Unique Art Goldsmith has been synonymous with uncompromising quality and artistic vision. Our master craftsmen combine traditional techniques with modern innovation to create pieces that transcend time.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--color-on-surface-variant)', marginBottom: '40px', lineHeight: 1.8 }}>
              Every diamond is ethically sourced and meticulously cut to reveal its inner fire, ensuring that your most precious moments are celebrated with unmatched brilliance.
            </p>
            <button className="btn-secondary">Discover Our Story</button>
          </motion.div>
          <motion.div 
            style={{ position: 'relative', height: isMobile ? '400px' : '600px', y: isMobile ? 0 : y }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src={legacyImg} alt="Master Goldsmith at work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Featured Collections */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary-container)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>Masterpiece Collections</h2>
            <p style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>Elegance Defined</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { title: 'The Royal Ring Collection', img: ringImg },
              { title: 'Celestial Earrings', img: earringImg },
              { title: 'Eternal Necklaces', img: necklaceImg },
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
                style={{ cursor: 'pointer' }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: '400px', marginBottom: '24px' }}>
                  <motion.img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '8px' }}>{item.title}</h3>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-secondary)' }}>Explore</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Statistics */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {[
              { num: '50+', label: 'Years of Heritage' },
              { num: '10k+', label: 'Bespoke Creations' },
              { num: '12', label: 'Global Boutiques' },
              { num: '100%', label: 'Ethical Sourcing' }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', color: 'var(--color-secondary)', marginBottom: '8px' }}>{stat.num}</h3>
                <p style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
