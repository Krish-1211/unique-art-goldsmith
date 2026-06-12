import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--color-primary-container)' }}
    >
      <div className="container" style={{ paddingBottom: '120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', marginTop: '60px' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '48px', marginBottom: '24px' }}>
              Bespoke <span style={{ fontStyle: 'italic', color: 'var(--color-secondary)' }}>Inquiries</span>
            </h1>
            <p style={{ color: 'var(--color-on-surface-variant)', marginBottom: '40px', lineHeight: 1.8 }}>
              To arrange a private viewing or discuss a bespoke commission, please contact our concierge team. We offer appointments at our global boutiques or via secure virtual consultation.
            </p>
            
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '8px' }}>Paris Atelier</h3>
              <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '14px' }}>15 Place Vendôme, 75001 Paris, France<br/>+33 1 42 61 00 00</p>
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '8px' }}>London Boutique</h3>
              <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '14px' }}>175 New Bond Street, London W1S 4RN<br/>+44 20 7493 0000</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ backgroundColor: 'var(--color-surface)', padding: '40px' }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '12px 0', border: 'none', borderBottom: '1px solid var(--color-surface-dim)', background: 'transparent', outline: 'none', fontFamily: 'var(--font-body)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '12px 0', border: 'none', borderBottom: '1px solid var(--color-surface-dim)', background: 'transparent', outline: 'none', fontFamily: 'var(--font-body)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Inquiry Type</label>
                <select style={{ width: '100%', padding: '12px 0', border: 'none', borderBottom: '1px solid var(--color-surface-dim)', background: 'transparent', outline: 'none', fontFamily: 'var(--font-body)', appearance: 'none' }}>
                  <option>Bespoke Commission</option>
                  <option>Private Viewing</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Message</label>
                <textarea rows={4} style={{ width: '100%', padding: '12px 0', border: 'none', borderBottom: '1px solid var(--color-surface-dim)', background: 'transparent', outline: 'none', fontFamily: 'var(--font-body)', resize: 'none' }}></textarea>
              </div>
              <button type="button" className="btn-primary" style={{ marginTop: '16px' }}>Submit Request</button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
