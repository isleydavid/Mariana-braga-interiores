
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Stages from './pages/Stages';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Router>
        <ScrollToTop />
        <div className={`min-h-screen flex flex-col font-sans text-mb-graphite bg-mb-off-white selection:bg-mb-sand/50 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/etapas" element={<Stages />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
