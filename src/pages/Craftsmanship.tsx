import { motion } from 'framer-motion';


import legacyImg from '../assets/legacy_workshop.png';

export default function Craftsmanship() {
  const steps = [
    { title: "Design", desc: "Every masterpiece begins as a vision, sketched with precision and passion." },
    { title: "Sourcing", desc: "We travel the world to hand-select the finest, ethically sourced gemstones." },
    { title: "Cutting", desc: "Master lapidaries unlock the inner fire of each stone with exacting geometric cuts." },
    { title: "Setting", desc: "The gold is sculpted to cradle the stone, creating tension and harmony." },
    { title: "Polishing", desc: "A flawless, mirror-like finish is achieved through hours of meticulous hand-polishing." },
    { title: "Perfection", desc: "The final piece undergoes rigorous inspection to ensure it meets our exacting standards." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}
    >
      <div className="container" style={{ textAlign: 'center', marginBottom: '120px' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', marginBottom: '24px' }}
        >
          The Journey of <span style={{ fontStyle: 'italic', color: 'var(--color-secondary)' }}>Perfection</span>
        </motion.h1>
      </div>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '0 24px', paddingBottom: '160px' }}>
        {/* Vertical Line */}
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: '160px', width: '1px', backgroundColor: 'var(--color-secondary)', opacity: 0.3, transform: 'translateX(-50%)' }} />

        {steps.map((step, i) => (
          <motion.div 
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{ 
              display: 'flex', 
              justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '120px'
            }}
          >
            {/* Dot */}
            <div style={{ 
              position: 'absolute', 
              left: '50%', 
              transform: 'translate(-50%, 0)', 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-secondary)' 
            }} />

            {/* Content */}
            <div style={{ width: '45%', textAlign: i % 2 === 0 ? 'right' : 'left', padding: i % 2 === 0 ? '0 40px 0 0' : '0 0 0 40px' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-secondary)', letterSpacing: '0.2em' }}>STEP 0{i + 1}</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', margin: '8px 0 16px' }}>{step.title}</h2>
              <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.8 }}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div style={{ width: '100%', height: '600px', overflow: 'hidden' }}>
        <motion.img 
           initial={{ scale: 1.1 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           src={legacyImg} 
           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </motion.div>
  );
}
