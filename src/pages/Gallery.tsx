import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

import ringImg from '../assets/collection_rings.png';
import earringImg from '../assets/collection_earrings.png';
import necklaceImg from '../assets/collection_necklaces.png';
import legacyImg from '../assets/legacy_workshop.png';

export default function Gallery() {
  const images = [
    { id: 1, src: ringImg, span: 'row-span-2' },
    { id: 2, src: earringImg, span: 'col-span-2' },
    { id: 3, src: necklaceImg, span: '' },
    { id: 4, src: legacyImg, span: 'col-span-2 row-span-2' },
    { id: 5, src: ringImg, span: '' },
    { id: 6, src: earringImg, span: 'col-span-2' },
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}
    >
      <div className="container" style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', marginBottom: '24px' }}>
          The <span style={{ fontStyle: 'italic', color: 'var(--color-secondary)' }}>Atelier</span> Gallery
        </h1>
      </div>

      <div className="container" style={{ paddingBottom: '120px' }}>
        <style>{`
          .masonry-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-auto-rows: 300px;
            gap: 24px;
          }
          @media (min-width: 768px) {
            .masonry-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .col-span-2 { grid-column: span 2; }
            .row-span-2 { grid-row: span 2; }
          }
        `}</style>
        
        <div className="masonry-grid">
          {images.map((img, i) => (
            <motion.div 
              key={img.id}
              className={img.span}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => setSelectedImg(img.src)}
            >
              <motion.img 
                src={img.src} 
                alt="Gallery item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(234, 224, 213, 0.95)',
              zIndex: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px'
            }}
            onClick={() => setSelectedImg(null)}
          >
            <button 
              onClick={() => setSelectedImg(null)}
              style={{ position: 'absolute', top: '40px', right: '40px' }}
            >
              <X size={32} color="var(--color-on-surface)" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg} 
              style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
