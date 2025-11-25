import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section id="map" className="w-full h-96 md:h-[500px] relative z-0">
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
         {/* Using an iframe for the map as it doesn't require an API key for basic embedding and is robust */}
        <iframe 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          loading="lazy" 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa Lecce Express"
          src="https://maps.google.com/maps?q=Via+di+Leuca+202+Lecce&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      
      {/* Optional Overlay Card for Context */}
      <div className="hidden md:block absolute top-10 left-10 bg-white p-6 rounded-lg shadow-xl max-w-xs z-10 border-l-4 border-brand-orange">
        <h3 className="font-bold text-lg text-gray-900">Lecce Express</h3>
        <p className="text-gray-600 mt-1">Via di Leuca 202</p>
        <p className="text-gray-600">73100 Lecce</p>
        <a 
          href="https://maps.google.com/maps?q=Via+di+Leuca+202+Lecce" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center bg-brand-blue text-white py-2 rounded text-sm hover:bg-blue-700 transition-colors"
        >
          Ottieni indicazioni
        </a>
      </div>
    </section>
  );
};

export default MapSection;
