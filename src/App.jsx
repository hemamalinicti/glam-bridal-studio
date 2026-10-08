import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import AccessoriesPage from './pages/AccessoriesPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemForBooking, setSelectedItemForBooking] = useState('');

  const handleOpenBooking = (itemName = '') => {
    setSelectedItemForBooking(itemName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FDF9F8] text-[#2D2326] font-sans antialiased">
        {/* Navigation Bar */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Multi-Page Routes matching exact Studio & Shop Scope */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
            
            {/* Friendly aliases */}
            <Route path="/shop" element={<Navigate to="/accessories" replace />} />
            <Route path="/boutique" element={<Navigate to="/accessories" replace />} />
            <Route path="/book" element={<Navigate to="/appointment" replace />} />
            <Route path="/portfolio" element={<Navigate to="/gallery" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Global Appointment Modal */}
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={handleCloseBooking}
          defaultItem={selectedItemForBooking}
        />

        {/* Sticky WhatsApp Trigger */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
