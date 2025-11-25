import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import InfoSection from './components/InfoSection';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InfoSection />
        <MapSection />
        <Reviews />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <a 
        href="https://wa.me/390832522635" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors z-40 md:hidden flex items-center justify-center"
        aria-label="Contattaci su Whatsapp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
};

export default App;
