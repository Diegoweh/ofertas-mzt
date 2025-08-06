import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Clock, Star } from 'lucide-react'
import { Button } from '../ui/button'

const CarouselHotels = () => {
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
  return (
    <>
    {/* Featured Activities */}
    <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Hoteles</h2>
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

    </div>
    </>
  )
}

export default CarouselHotels