import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import BranchSelectionModal from './components/BranchSelectionModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import PinEntryModal from './components/PinEntryModal';
import Sidebar from './components/Sidebar';
import { AuthProvider, useAuth } from './context/AuthContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import StartProjectPage from './pages/StartProjectPage';
import PhotoboothPage from './pages/PhotoboothPage';
import AdminPage from './pages/AdminPage';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Wrapper component to use useLocation
const AppContent = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (isLoggedIn && location.pathname === '/') {
      navigate('/admin');
    }
  }, [isLoggedIn, location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <ScrollToTop />
      {!isAdminPage && <Navbar />}
      <PinEntryModal />
      <BranchSelectionModal />
      <Sidebar />
      {!isAdminPage && <WhatsAppFloat />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/start-project" element={<StartProjectPage />} />
          <Route path="/photobooth" element={<PhotoboothPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
