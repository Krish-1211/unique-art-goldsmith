import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/hero_diamond.png';

export default function DiamondHero() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          top: '-10%', 
          left: 0, 
          width: '100%', 
          height: '120%', 
          y: yImage,
          zIndex: 1 
        }} 
      >
        <img 
          src={heroImage} 
          alt="Flawless Diamond" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'calc(50% + 15vw) center' }} 
        />
      </motion.div>
      
      {/* Soft overlay gradient to ensure text remains legible */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(to right, rgba(253, 252, 248, 0.95) 0%, rgba(253, 252, 248, 0.4) 40%, rgba(253, 252, 248, 0) 100%), linear-gradient(to bottom, rgba(253, 252, 248, 0.9) 0%, rgba(253, 252, 248, 0) 20%)',
          zIndex: 2 
        }} 
      />

      {/* Typography Overlay */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '10%', 
          transform: 'translateY(-50%)', 
          zIndex: 10, 
          pointerEvents: 'none', 
          maxWidth: '600px',
          opacity: opacityText
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.2, ease: "easeOut" },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.2 }
          }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.1, color: 'var(--color-on-surface)', marginBottom: '24px' }}
        >
          Crafted Through <span style={{ color: 'var(--color-secondary)', fontStyle: 'italic' }}>Light.</span><br />
          Defined By <span style={{ fontStyle: 'italic' }}>Excellence.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.8 },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }
          }}
          style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-on-surface-variant)', letterSpacing: '0.05em', lineHeight: 1.8, marginBottom: '40px', maxWidth: '400px' }}
        >
          Luxury Diamond Manufacturing & Fine Jewellery Craftsmanship.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ pointerEvents: 'auto' }}
        >
          <button className="btn-primary">Explore Our Craft</button>
        </motion.div>
      </motion.div>
    </div>
  );
}
