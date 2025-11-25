import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Centro Spedizioni Lecce Express e Logistica Magazzino"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col justify-center h-full">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Spedisci Ovunque,<br />
            <span className="text-brand-orange">Senza Pensieri.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Il tuo punto di riferimento a <strong>Lecce in Via di Leuca</strong> per spedizioni nazionali e internazionali, 
            ritiro pacchi (Vinted, Fermopoint) e attivazione utenze luce e gas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-600 md:text-lg transition-all shadow-lg"
              aria-label="Scopri i nostri servizi di spedizione"
            >
              I Nostri Servizi
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#map" 
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-100 bg-transparent hover:bg-white hover:text-gray-900 md:text-lg transition-all"
              aria-label="Vedi la posizione sulla mappa"
            >
              Dove Siamo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;