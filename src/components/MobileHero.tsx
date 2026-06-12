import heroImage from '../assets/hero_diamond.png';

export default function MobileHero() {
  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
      {/* Background Image (Optimized fallback for mobile) */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          zIndex: 1 
        }} 
      />
      
      {/* Gradient Overlay for text readability */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(to bottom, rgba(234, 224, 213, 0.4), var(--color-surface))',
          zIndex: 2 
        }} 
      />

      {/* Typography Overlay */}
      <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', transform: 'translateY(-50%)', zIndex: 10, padding: '0 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 10vw, 56px)', lineHeight: 1.1, color: 'var(--color-on-surface)', marginBottom: '16px' }}>
          Crafted Through <span style={{ color: 'var(--color-secondary)', fontStyle: 'italic' }}>Light.</span><br />
          Defined By <span style={{ fontStyle: 'italic' }}>Excellence.</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-on-surface-variant)', letterSpacing: '0.05em', lineHeight: 1.6, marginBottom: '32px', marginInline: 'auto', maxWidth: '300px' }}>
          Luxury Diamond Manufacturing & Fine Jewellery Craftsmanship.
        </p>
        <button className="btn-primary" style={{ width: '100%' }}>Explore Our Craft</button>
      </div>
    </div>
  );
}
