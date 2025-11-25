import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      author: "Marco Rossi",
      rating: 5,
      text: "Servizio impeccabile! Ho spedito un pacco in Germania ed è arrivato in tempi record. Personale gentilissimo e disponibile.",
      date: "2 settimane fa"
    },
    {
      id: 2,
      author: "Giulia Bianchi",
      rating: 5,
      text: "Comodissimo per i ritiri Vinted. Non c'è mai troppa fila e sono sempre sorridenti. Consigliato!",
      date: "1 mese fa"
    },
    {
      id: 3,
      author: "Alessandro Verdi",
      rating: 5,
      text: "Ho attivato luce e gas con loro, procedura veloce e trasparente. Molto meglio che al telefono.",
      date: "3 giorni fa"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Cosa dicono di noi</h2>
          <p className="mt-4 text-xl text-gray-500">La soddisfazione dei nostri clienti è la nostra priorità</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-gray-900">{review.author}</span>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="https://g.page/r/lecceexpress" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold hover:text-brand-orange transition-colors">
                Leggi tutte le recensioni su Google &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
