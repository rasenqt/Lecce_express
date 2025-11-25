import React from 'react';
import { Truck, Package, Zap, ShoppingBag, Globe, Building2 } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Spedizioni Nazionali & Internazionali",
      description: "Spedisci pacchi, buste e pallet in Italia e nel mondo con i migliori corrieri (BRT, DHL, UPS). Servizio rapido e tracciabile.",
      icon: Truck
    },
    {
      title: "Punto Ritiro & Fermopoint",
      description: "Non sei a casa? Fai recapitare qui i tuoi acquisti Amazon, Vinted e eBay. Siamo un Fermopoint autorizzato.",
      icon: Package
    },
    {
      title: "Luce & Gas",
      description: "Attiviamo le tue utenze di luce e gas in pochi minuti. Consulenza gratuita per trovare la tariffa migliore.",
      icon: Zap
    },
    {
      title: "Resi Vinted & E-commerce",
      description: "Gestiamo i tuoi resi Vinted e di altri e-commerce in modo semplice. Stampa dell'etichetta disponibile in sede.",
      icon: ShoppingBag
    },
    {
      title: "Servizi per Privati",
      description: "Imballaggio professionale, raccomandate, e assistenza personalizzata per ogni tua esigenza di spedizione.",
      icon: Globe
    },
    {
      title: "Servizi Business",
      description: "Soluzioni logistiche dedicate per aziende e professionisti. Contratti agevolati per spedizioni frequenti.",
      icon: Building2
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-orange font-semibold tracking-wide uppercase">Cosa Facciamo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Soluzioni complete per le tue esigenze
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Siamo più di un semplice centro spedizioni. Scopri tutti i servizi offerti da Lecce Express.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-start"
            >
              <div className="p-3 bg-blue-50 rounded-lg mb-6">
                <service.icon className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
