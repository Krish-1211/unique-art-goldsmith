import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Craftsmanship', path: '/craftsmanship' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.5s var(--ease-out-expo)',
          backgroundColor: isScrolled ? 'rgba(253, 252, 248, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          padding: isScrolled ? '16px 0' : '32px 0',
          borderBottom: isScrolled ? '1px solid rgba(119, 90, 25, 0.1)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src={logo} alt="UAG Logo" style={{ height: isScrolled ? '40px' : '56px', transition: 'height 0.5s', mixBlendMode: 'multiply' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', lineHeight: 1, letterSpacing: '0.05em' }}>UNIQUE ART</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--color-primary)' }}>GOLDSMITH</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', gap: '32px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: location.pathname === link.path ? 'var(--color-secondary)' : 'var(--color-on-surface)',
                  transition: 'color 0.3s',
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            style={{ display: 'block', zIndex: 60 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--color-surface)',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    color: location.pathname === link.path ? 'var(--color-secondary)' : 'var(--color-on-surface)',
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
