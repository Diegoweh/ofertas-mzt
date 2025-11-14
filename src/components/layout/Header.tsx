import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

// https://www.gomazatlan.com/assets/site/img/slider/hoteles.mp4

const Header = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="https://www.gomazatlan.com/assets/site/img/slider/hoteles.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl font-sonny-vol2 md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Menos comisiones,
                <br />
                <span className="text-yellow-400 font-sonny-vol2">más descuentos para ti.</span>
              </h1>

              <p className="text-xl font-helvetica-bond md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Gracias a acuerdos directos con hoteles, tours y restaurantes en Mazatlán, te ofrecemos{" "}
                <span className="font-bold text-yellow-400">precios especiales</span> y{" "}
                <span className="font-bold text-yellow-400">ofertas reales</span>. ¡Ahorra hasta un{" "}
                <span className="font-bold text-yellow-400">27%</span> en tus actividades favoritas{" "}
                <span className="font-bold text-yellow-400">sin intermediarios</span>!
              </p>


              <Link
                href="#destinations"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                ↓
              </Link>
            </div>
    </section>
  )
}

export default Header