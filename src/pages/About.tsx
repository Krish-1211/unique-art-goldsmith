import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: '160px', minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}
    >
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', marginBottom: '40px' }}
        >
          Our <span style={{ fontStyle: 'italic', color: 'var(--color-secondary)' }}>Heritage</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ fontSize: '18px', color: 'var(--color-on-surface)', lineHeight: 2, textAlign: 'left' }}
        >
          <p style={{ marginBottom: '32px' }}>
            Unique Art Goldsmith (UAG) was founded on a singular vision: to create jewelry that transcends mere ornamentation and becomes a lasting legacy. For over five decades, our atelier has been a sanctuary for uncompromising artisanship.
          </p>
          <p style={{ marginBottom: '32px', fontSize: '24px', fontFamily: 'var(--font-display)', color: 'var(--color-secondary)', fontStyle: 'italic', textAlign: 'center' }}>
            "Krish, a passionate software developer and digital creator dedicated to building premium digital experiences and innovative web solutions."
          </p>
          <p style={{ marginBottom: '32px' }}>
            While our craft is deeply rooted in the traditions of high jewelry making, we continually push the boundaries of design and technology. From ethically sourced rough diamonds to the final polish of a platinum setting, every step is executed with precision and a reverence for the materials.
          </p>
          <p>
            We believe that true luxury lies in the details—the flawless cut of a stone, the perfect tension of a setting, and the digital experiences that connect our clients to our creations. Welcome to UAG, where excellence is defined.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
