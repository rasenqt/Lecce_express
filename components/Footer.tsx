import React from 'react';
import { Package, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Package className="h-6 w-6 text-brand-orange mr-2" />
              <span className="text-xl font-bold">Lecce Express</span>
            </div>
            <p className="text-gray-400 text-sm">
              Il tuo partner affidabile per spedizioni, logistica e servizi al cittadino a Lecce.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-orange">Servizi</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition">Spedizioni Nazionali</a></li>
              <li><a href="#services" className="hover:text-white transition">Spedizioni Estere</a></li>
              <li><a href="#services" className="hover:text-white transition">Fermopoint & Vinted</a></li>
              <li><a href="#services" className="hover:text-white transition">Attivazione Utenze</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-orange">Info Legali</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Termini e Condizioni</a></li>
              <li className="mt-4 text-xs text-gray-500">P.IVA: 03978880163 (Fermopoint)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-orange">Seguici</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/lecce_express" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Pier Luigi Monteferro
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lecce Express. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;