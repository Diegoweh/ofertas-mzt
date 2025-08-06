import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Users, Waves, Camera, Utensils, Building2, Palmtree, Sun } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function MazatlanHero() {
  const activities = [
    {
      title: "Tours en Lancha",
      description: "Isla de la Piedra, Deer Island y más",
      discount: "25%",
      originalPrice: "$800",
      newPrice: "$600",
      image: "/home/munbaExp.webp",
      duration: "4 horas",
      rating: 4.8,
    },
    {
      title: "City Tour Histórico",
      description: "Centro Histórico y Malecón",
      discount: "20%",
      originalPrice: "$450",
      newPrice: "$360",
      image: "/home/mazaImg.webp",
      duration: "3 horas",
      rating: 4.9,
    },
    {
      title: "Experiencia Gastronómica",
      description: "Mariscos frescos y cocina local",
      discount: "15%",
      originalPrice: "$650",
      newPrice: "$550",
      image: "/home/palmaress.webp",
      duration: "2 horas",
      rating: 4.7,
    },
    {
      title: "Hoteles Zona Dorada",
      description: "Hospedaje frente al mar",
      discount: "30%",
      originalPrice: "$2,500",
      newPrice: "$1,750",
      image: "/home/gaviana@600.webp",
      duration: "Por noche",
      rating: 4.6,
    },
  ]

  const highlights = [
    { icon: Waves, title: "Playas Doradas", description: "21 km de costa" },
    { icon: Building2, title: "Centro Histórico", description: "Patrimonio UNESCO" },
    { icon: Utensils, title: "Gastronomía", description: "Mariscos frescos" },
    { icon: Camera, title: "Malecón", description: "El más largo del mundo" },
    { icon: Palmtree, title: "Isla de la Piedra", description: "Paraíso natural" },
    { icon: Sun, title: "Clima Perfecto", description: "320 días de sol" },
  ]

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Main Hero Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          {/* <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2 mb-6">🏖️ Ofertas Exclusivas Mazatlán</Badge> */}
          <h1 className="text-4xl font-sonny-vol2 md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Descubre la Perla del Pacífico
            <br />
            <span className="text-yellow-600">con descuentos reales</span>
          </h1>
          <p className="text-xl font-helvetica-bond md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Mazatlán te espera con sus playas doradas, su rica historia y su deliciosa gastronomía. Aprovecha nuestros{" "}
            <span className="font-bold text-yellow-600">acuerdos directos</span> con los mejores hoteles, restaurantes y
            operadores turísticos para vivir experiencias únicas
            <span className="font-bold text-yellow-600"> sin pagar comisiones extras</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Ver Todas las Ofertas
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 font-bold text-lg px-8 py-4 rounded-full bg-transparent"
            >
              Planear mi Viaje
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 mb-16">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold">4.8/5 Calificación</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">+15,000 Viajeros</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-500" />
              <span className="font-semibold">100% Local</span>
            </div>
          </div>
        </div>

        {/* Mazatlán Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-sonny-vol2 font-bold text-center mb-12 text-gray-900">
            ¿Por qué elegir Mazatlán?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full p-4 shadow-lg mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <highlight.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Activities */}
        <div className="mb-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Actividades y Ofertas Destacadas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Precios directos sin intermediarios. Ahorra hasta un 30% en las mejores experiencias de Mazatlán.
            </p>
        </div>

        <Carousel
            opts={{
            align: "start",
            loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="-ml-2 md:-ml-4">
            {activities.map((activity, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full">
                    <div className="relative">
                    <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    />
                    <Badge className="absolute top-3 left-3 bg-red-500 text-white font-bold">
                        -{activity.discount} OFF
                    </Badge>
                    <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{activity.rating}</span>
                    </div>
                    </div>
                    <CardContent className="p-4 flex flex-col h-full">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{activity.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 flex-grow">{activity.description}</p>
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                        <span className="text-gray-400 line-through text-sm">{activity.originalPrice}</span>
                        <span className="text-2xl font-bold text-yellow-600 ml-2">{activity.newPrice}</span>
                        </div>
                    </div>
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold mt-auto">
                        Reservar Ahora
                    </Button>
                    </CardContent>
                </Card>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
        </div>

        


        {/* Special Offers Banner */}
        {/* <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 text-center text-white mb-16">
          <h2 className="text-3xl font-sonny-vol2 font-bold mb-4">🎉 Oferta Especial por Tiempo Limitado</h2>
          <p className="text-xl mb-6 opacity-90">
            Reserva tu paquete completo (hotel + tours + restaurantes) y obtén un
            <span className="font-bold text-2xl"> 35% de descuento adicional</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-yellow-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full"
            >
              Crear mi Paquete
            </Button>
            <div className="text-sm opacity-75">⏰ Válido hasta fin de mes</div>
          </div>
        </div> */}

        {/* Why Choose Us */}
        {/* <div className="text-center">
          <h2 className="text-3xl font-sonny-vol2 font-bold mb-8 text-gray-900">
            Tu experiencia en Mazatlán, garantizada
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Precios Directos</h3>
              <p className="text-gray-600">Sin comisiones ocultas. Trabajamos directamente con proveedores locales.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">Todos nuestros partners están verificados y tienen excelentes reseñas.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Soporte 24/7</h3>
              <p className="text-gray-600">Estamos aquí para ayudarte antes, durante y después de tu viaje.</p>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  )
}
