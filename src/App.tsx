import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import Craftsmanship from './pages/Craftsmanship';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/craftsmanship" element={<Craftsmanship />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Navigation />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
