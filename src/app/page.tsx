import CarouselActivities from "@/components/layout/CarouselActivities";
import CarouselHotels from "@/components/layout/CarouselHotels";
import CarouselRestaurantes from "@/components/layout/CarouselRestaurant";
import DiscountBanner from "@/components/layout/DiscountBanner";
import MazatlanHero from "@/components/layout/Hero";
import Testimonials from "@/components/layout/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>

    <MazatlanHero />

    <div id="destinations">
      <CarouselHotels />

      <DiscountBanner
      imageUrl="https://image-tc.galaxy.tf/wijpeg-6svbgpj6182xpk0gbqqhtozw2/_photo.jpg"
      imageAlt="Underwater diving scene in Mazatlán"
      title="Obtén descuentos al instante"
      subtitle="Ahorra hasta 10% en tu primera reservación en Mazatlán"
      ctaText="Reclamar"
      onCtaClick={() => console.log("CTA clickeado")}
    />

      <CarouselActivities />

      <DiscountBanner
      imageUrl="https://images.pexels.com/photos/1540108/pexels-photo-1540108.jpeg"
      imageAlt="Underwater diving scene in Mazatlán"
      title="Obtén descuentos al instante"
      subtitle="Ahorra hasta 10% en tu primera actividad en Mazatlán"
      ctaText="Reclamar"
      onCtaClick={() => console.log("CTA clickeado")}
    />
    </div>

    <Testimonials />

    {/* <CarouselRestaurantes />

    <DiscountBanner
      imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/54/dc/89/plato-de-exhibicion.jpg?w=900&h=-1&s=1"
      imageAlt="Underwater diving scene in Mazatlán"
      title="Obtén descuentos al instante"
      subtitle="Ahorra hasta 10% en tu primera actividad en Mazatlán"
      ctaText="Reclamar"
      onCtaClick={() => console.log("CTA clickeado")}
    />     */}

    </>

  );
}
