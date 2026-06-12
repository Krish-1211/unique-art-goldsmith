import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-surface)', paddingTop: '120px', paddingBottom: '40px', borderTop: '1px solid var(--color-surface-dim)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px', marginBottom: '80px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img src={logo} alt="UAG Logo" style={{ height: '48px', mixBlendMode: 'multiply' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', lineHeight: 1, letterSpacing: '0.05em' }}>UNIQUE ART</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--color-primary)' }}>GOLDSMITH</span>
              </div>
            </Link>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-on-surface-variant)', maxWidth: '300px', lineHeight: 1.8 }}>
              Crafting elegance since 1974. Every piece tells a story of precision, passion, and unparalleled mastery.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', letterSpacing: '0.05em' }}>Collections</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/collections" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-on-surface-variant)', transition: 'color 0.3s' }}>High Jewellery</Link>
              <Link to="/collections" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-on-surface-variant)', transition: 'color 0.3s' }}>Bridal & Engagement</Link>
              <Link to="/collections" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-on-surface-variant)', transition: 'color 0.3s' }}>Bespoke Creations</Link>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', letterSpacing: '0.05em' }}>The Maison</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/craftsmanship" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-on-surface-variant)', transition: 'color 0.3s' }}>Our Craftsmanship</Link>
              <Link to="/about" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-on-surface-variant)', transition: 'color 0.3s' }}>Heritage</Link>
              <Link to="/contact" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-on-surface-variant)', transition: 'color 0.3s' }}>Boutiques</Link>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', letterSpacing: '0.05em' }}>Stay Connected</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>Subscribe to receive exclusive invitations and the latest news.</p>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--color-on-surface-variant)' }}>
              <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '12px 0', border: 'none', background: 'transparent', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px' }} />
              <button style={{ fontFamily: 'var(--font-body)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Subscribe</button>
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', borderTop: '1px solid var(--color-surface-dim)', paddingTop: '40px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-on-surface-variant)', letterSpacing: '0.1em' }}>
            &copy; {new Date().getFullYear()} UNIQUE ART GOLDSMITH. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
