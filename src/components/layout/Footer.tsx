import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Star, Shield, Award } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-sonny-vol2 font-bold mb-4 text-yellow-400">
              Mazatlán Auténtico
            </h3>
            <p className="text-gray-300 mb-6 font-helvetica-bond leading-relaxed">
              Tu conexión directa con la Perla del Pacífico. Experiencias auténticas sin comisiones extras.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-semibold">4.8/5</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold">Verificado</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold">100% Local</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <Link href="#" className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-sonny-vol2 font-bold mb-4 text-yellow-400">Destinos</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Zona Dorada</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Centro Histórico</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Playa Norte</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Isla de la Piedra</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">El Faro</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Malecón</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-sonny-vol2 font-bold mb-4 text-yellow-400">Servicios</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Hoteles con Descuento</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Restaurantes Locales</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Tours y Excursiones</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Transporte</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Actividades Acuáticas</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Vida Nocturna</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-sonny-vol2 font-bold mb-4 text-yellow-400">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-helvetica-bond">
                    Av. del Mar 123<br />
                    Zona Dorada, Mazatlán<br />
                    Sinaloa, México
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-helvetica-bond">+52 669 123 4567</p>
                  <p className="text-sm text-gray-400">Lun - Dom: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300 font-helvetica-bond">info@mazatlanautentico.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h4 className="text-xl font-sonny-vol2 font-bold mb-2 text-yellow-400">
              ¡No te pierdas nuestras ofertas exclusivas!
            </h4>
            <p className="text-gray-300 mb-6 font-helvetica-bond">
              Suscríbete y recibe descuentos especiales directo en tu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email aquí..."
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-yellow-400 focus:outline-none"
              />
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-helvetica-bond">
              © {new Date().getFullYear()} Mazatlán Auténtico. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Aviso Legal
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
