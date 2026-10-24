import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedClients from './components/TrustedClients';
import ProductsAndServices from './components/ProductsAndServices';
import IndustriesWeServe from './components/IndustriesWeServe';
import ImplementationAndWhyUs from './components/ImplementationAndWhyUs';
import ImpactAndTestimonials from './components/ImpactAndTestimonials';
import LatestInsights from './components/LatestInsights';
import TransformCtaBanner from './components/TransformCtaBanner';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import DemoModal from './components/DemoModal';
import ContactModal from './components/ContactModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#products' || hash === '#tally-products') {
        setCurrentPage('products');
      } else if (hash === '#services' || hash === '#our-services') {
        setCurrentPage('services');
      } else if (hash === '#solutions' || hash === '#our-solutions') {
        setCurrentPage('solutions');
      } else if (hash === '#industries' || hash === '#our-industries') {
        setCurrentPage('industries');
      } else if (hash === '#resources' || hash === '#our-resources') {
        setCurrentPage('resources');
      } else if (hash === '#about' || hash === '#about-us') {
        setCurrentPage('about');
      } else if (hash === '#contact' || hash === '#contact-us') {
        setCurrentPage('contact');
      } else if (hash === '#home' || hash === '' || hash === '#/') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '#home';
    } else if (page === 'products') {
      window.location.hash = '#products';
    } else if (page === 'services') {
      window.location.hash = '#services';
    } else if (page === 'solutions') {
      window.location.hash = '#solutions';
    } else if (page === 'industries') {
      window.location.hash = '#industries';
    } else if (page === 'resources') {
      window.location.hash = '#resources';
    } else if (page === 'about') {
      window.location.hash = '#about';
    } else if (page === 'contact') {
      window.location.hash = '#contact';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemo = (serviceTitle = '') => {
    setSelectedService(serviceTitle);
    setDemoModalOpen(true);
  };

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0052cc] selection:text-white flex flex-col justify-between">
      {/* 1. Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenDemoModal={() => handleOpenDemo()}
        onOpenContactModal={handleOpenContact}
      />

      {/* Main Page Body: Switched by currentPage */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 2. Hero Section */}
            <Hero
              onNavigate={navigateTo}
              onOpenDemoModal={() => handleOpenDemo()}
              onOpenContactModal={handleOpenContact}
            />

            {/* 3. Trusted By Clients */}
            <TrustedClients />

            {/* 4. Products & Services */}
            <ProductsAndServices
              onNavigate={navigateTo}
              onSelectService={(service) => handleOpenDemo(service.title)}
            />

            {/* 5. Industries We Serve */}
            <IndustriesWeServe onNavigate={navigateTo} />

            {/* 6. Why Businesses Choose Us & Implementation Process */}
            <ImplementationAndWhyUs
              onOpenDemoModal={() => handleOpenDemo()}
            />

            {/* 7. Impact Numbers & Testimonials */}
            <ImpactAndTestimonials />

            {/* 8. Latest Insights */}
            <LatestInsights onNavigate={navigateTo} />

            {/* 9. Blue Transformation CTA Banner */}
            <TransformCtaBanner
              onOpenDemoModal={() => handleOpenDemo()}
              onOpenContactModal={handleOpenContact}
            />
          </>
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={navigateTo}
            onOpenDemoModal={handleOpenDemo}
            onOpenContactModal={handleOpenContact}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenDemoModal={handleOpenDemo}
            onOpenContactModal={handleOpenContact}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onNavigate={navigateTo}
            onOpenDemoModal={handleOpenDemo}
            onOpenContactModal={handleOpenContact}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={navigateTo}
            onOpenDemoModal={handleOpenDemo}
            onOpenContactModal={handleOpenContact}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage
            onNavigate={navigateTo}
            onOpenDemoModal={handleOpenDemo}
            onOpenContactModal={handleOpenContact}
          />
        )}

        {currentPage === 'about' && (
          <AboutUsPage
            onNavigate={navigateTo}
            onOpenDemoModal={handleOpenDemo}
            onOpenContactModal={handleOpenContact}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenDemoModal={handleOpenDemo}
            onOpenContactModal={handleOpenContact}
          />
        )}
      </main>

      {/* 10. Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultService={selectedService}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
