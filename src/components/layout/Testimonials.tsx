import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    location: "Ciudad de México",
    rating: 5,
    comment: "Increíble experiencia en Mazatlán. Los descuentos fueron reales y el proceso de reservación muy fácil. Ahorré más de $3,000 pesos en mi hotel y actividades. ¡Totalmente recomendado!",
    avatar: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=fbbf24&color=fff&size=200",
    date: "Hace 2 semanas"
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    location: "Guadalajara",
    rating: 5,
    comment: "Excelente servicio. Reservé un tour de snorkel y una cena en un restaurante con vista al mar. Los precios fueron mucho mejores que en otras plataformas. Sin duda volveré a usar este sitio.",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Ramirez&background=3b82f6&color=fff&size=200",
    date: "Hace 1 mes"
  },
  {
    id: 3,
    name: "Laura Martínez",
    location: "Monterrey",
    rating: 5,
    comment: "Me encantó que no hubiera comisiones ocultas. Todo fue transparente desde el inicio. El hotel que reservé fue exactamente como se mostraba y el descuento del 20% fue real.",
    avatar: "https://ui-avatars.com/api/?name=Laura+Martinez&background=ec4899&color=fff&size=200",
    date: "Hace 3 semanas"
  },
  {
    id: 4,
    name: "Roberto Silva",
    location: "Tijuana",
    rating: 5,
    comment: "La mejor forma de conocer Mazatlán sin gastar de más. Contraté varios tours y todos fueron excepcionales. El ahorro en comparación con otros sitios fue notable.",
    avatar: "https://ui-avatars.com/api/?name=Roberto+Silva&background=10b981&color=fff&size=200",
    date: "Hace 1 semana"
  },
  {
    id: 5,
    name: "Ana Herrera",
    location: "Puebla",
    rating: 5,
    comment: "Perfecta para planear unas vacaciones familiares. Los descuentos en hoteles familiares nos permitieron quedarnos más días. El servicio al cliente fue muy atento y respondieron todas mis dudas.",
    avatar: "https://ui-avatars.com/api/?name=Ana+Herrera&background=8b5cf6&color=fff&size=200",
    date: "Hace 2 meses"
  },
  {
    id: 6,
    name: "Jorge López",
    location: "Querétaro",
    rating: 5,
    comment: "Impresionante la variedad de actividades y restaurantes disponibles. Probé mariscos en lugares que nunca hubiera encontrado por mi cuenta. Los precios directos hacen toda la diferencia.",
    avatar: "https://ui-avatars.com/api/?name=Jorge+Lopez&background=f97316&color=fff&size=200",
    date: "Hace 1 mes"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-yellow-600">viajeros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de personas han disfrutado Mazatlán ahorrando con nuestras ofertas directas
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.9/5</span>
            <span className="text-gray-500">• Más de 1,500 reseñas</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 line-clamp-4">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <span className="text-xs text-gray-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver todas las reseñas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
