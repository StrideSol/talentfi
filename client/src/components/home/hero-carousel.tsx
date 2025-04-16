import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { type CarouselSlide } from "@shared/schema";

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const { data: slides, isLoading, error } = useQuery<CarouselSlide[]>({
    queryKey: ['/api/carousel'],
    refetchOnWindowFocus: false,
  });

  // Filter active slides
  const activeSlides = slides?.filter(slide => slide.isActive) || [];

  useEffect(() => {
    if (!activeSlides.length) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % activeSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlides.length]);
  
  // Handle loading state
  if (isLoading) {
    return (
      <div className="bg-[#0047FF] py-24 flex justify-center items-center">
        <Loader2 className="h-16 w-16 text-white animate-spin" />
      </div>
    );
  }
  
  // Handle error or no data
  if (error || !activeSlides.length) {
    const defaultSlide = {
      id: 1,
      title: "South Africa's Premier EOR Solution",
      description: "Your trusted South African employment partner. Our local EOR services make hiring in South Africa simple and fully compliant.",
      imageUrl: "https://images.unsplash.com/photo-1576485375217-d6a95e34d041?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      primaryButtonText: "Get Started",
      primaryButtonUrl: "#",
      secondaryButtonText: "How It Works",
      secondaryButtonUrl: "#",
      order: 0,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return (
      <div className="relative bg-[#0047FF]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Main Hero Content */}
            <div className="w-full md:w-2/3 p-6 md:p-12 flex items-center text-white">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-white">South Africa's premier</span> <span className="text-[#FF9500] font-bold">Employee of Record</span><br/>
                  <span className="text-white">solution</span>
                </h1>
                <p className="text-lg md:text-xl mb-8">{defaultSlide.description}</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button
                    className="bg-[#FF9500] hover:bg-[#E68600] text-white py-3 px-6 rounded-md font-semibold"
                    asChild
                  >
                    <a href={defaultSlide.primaryButtonUrl}>{defaultSlide.primaryButtonText}</a>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white border border-[#0047FF] text-[#0047FF] hover:bg-[#f7f7f7] py-3 px-6 rounded-md font-semibold"
                    asChild
                  >
                    <a href={defaultSlide.secondaryButtonUrl}>{defaultSlide.secondaryButtonText}</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/3 bg-gray-300">
              <img
                src={defaultSlide.imageUrl}
                alt="South African Employee of Record services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Sort slides by order
  const sortedSlides = [...activeSlides].sort((a, b) => a.order - b.order);
  
  // Get the current slide
  const currentSlide = sortedSlides[activeSlide];

  return (
    <div className="relative bg-[#0047FF]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Main Hero Content */}
          <div className="w-full md:w-2/3 p-6 md:p-12 flex items-center text-white">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-white">South Africa's premier</span> <span className="text-[#FF9500] font-bold">Employee of Record</span><br/>
                <span className="text-white">solution</span>
              </h1>
              <p className="text-lg md:text-xl mb-8">{currentSlide.description}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  className="bg-[#FF9500] hover:bg-[#E68600] text-white py-3 px-6 rounded-md font-semibold"
                  asChild
                >
                  <a href={currentSlide.primaryButtonUrl}>{currentSlide.primaryButtonText}</a>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white border border-[#0047FF] text-[#0047FF] hover:bg-[#f7f7f7] py-3 px-6 rounded-md font-semibold"
                  asChild
                >
                  <a href={currentSlide.secondaryButtonUrl}>{currentSlide.secondaryButtonText}</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/3 bg-gray-300">
            <img
              src={currentSlide.imageUrl}
              alt="South African Employee of Record services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Carousel Indicators */}
        {sortedSlides.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {sortedSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeSlide
                    ? "w-8 bg-[#FF9500]"
                    : "w-2 bg-white hover:bg-[#FF9500]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}