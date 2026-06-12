import { motion } from 'framer-motion';
import ringImg from '../assets/collection_rings.png';
import earringImg from '../assets/collection_earrings.png';
import necklaceImg from '../assets/collection_necklaces.png';

export default function Collections() {
  const collections = [
    { title: 'The Royal Ring Collection', img: ringImg, desc: 'A statement of eternal commitment, featuring flawless center stones with intricate pavé settings.' },
    { title: 'Celestial Earrings', img: earringImg, desc: 'Inspired by the night sky, bringing light and movement to perfectly frame the face.' },
    { title: 'Eternal Necklaces', img: necklaceImg, desc: 'Fluid designs that drape elegantly, combining architectural structure with delicate brilliance.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: '120px', minHeight: '100vh' }}
    >
      <div className="container" style={{ marginBottom: '80px', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', marginBottom: '24px' }}
        >
          High Jewellery <span style={{ fontStyle: 'italic', color: 'var(--color-secondary)' }}>Collections</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-on-surface-variant)', letterSpacing: '0.05em' }}
        >
          Discover our curated selection of masterpieces, where exceptional gemstones meet unparalleled craftsmanship.
        </motion.p>
      </div>

      <div className="container" style={{ paddingBottom: '120px' }}>
        <div style={{ display: 'grid', gap: '80px' }}>
          {collections.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}
            >
              <div style={{ order: i % 2 === 1 ? 1 : 0 }}>
                <div style={{ position: 'relative', overflow: 'hidden', height: '500px' }}>
                  <motion.img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
              <div style={{ padding: '0 40px', order: i % 2 === 1 ? 0 : 1 }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', marginBottom: '16px' }}>{item.title}</h2>
                <p style={{ color: 'var(--color-on-surface-variant)', marginBottom: '32px', lineHeight: 1.8 }}>{item.desc}</p>
                <button className="btn-secondary">View Collection</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
