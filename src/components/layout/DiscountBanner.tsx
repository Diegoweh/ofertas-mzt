import { Button } from "@/components/ui/button"

interface DiscountBannerProps {
  imageUrl: string
  imageAlt: string
  title: string
  subtitle: string
  ctaText: string
  onCtaClick?: () => void
}

export default function DiscountBanner({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  ctaText,
  onCtaClick,
}: DiscountBannerProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg mb-8">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
            {subtitle}
          </p>

          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full"
            
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  )
}
