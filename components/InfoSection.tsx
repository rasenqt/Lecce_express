import React from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section id="hours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info (Left) */}
          <div className="lg:w-1/2 p-10 md:p-16 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Vieni a trovarci</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-orange mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Indirizzo</h3>
                  <p className="text-blue-100">Via di Leuca 202</p>
                  <p className="text-blue-100">73100 Lecce (LE)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-brand-orange mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Telefono</h3>
                  <a href="tel:0832522635" className="text-blue-100 hover:text-white underline decoration-brand-orange">
                    0832 522635
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-brand-orange mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-blue-100">info@lecceexpress.it</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours (Right) */}
          <div className="lg:w-1/2 bg-white p-10 md:p-16 text-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Clock className="mr-3 text-brand-orange h-8 w-8" />
              Orari di Apertura
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="font-medium text-lg">Lunedì</span>
                <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="font-medium text-lg">Martedì</span>
                <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="font-medium text-lg">Mercoledì</span>
                <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="font-medium text-lg">Giovedì</span>
                <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="font-medium text-lg">Venerdì</span>
                <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="font-medium text-lg">Sabato</span>
                <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">09:00 - 12:30</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-medium text-lg text-red-500">Domenica</span>
                <span className="text-red-500 font-semibold px-3 py-1">Chiuso</span>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-gray-500 italic">
              * Orari continuati dal Lunedì al Venerdì. Sabato solo mattina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
