import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const carouselData = [
  {
    id: 1,
    title: "Islamic Scholarship for the Modern World",
    description: "Addressing the most pressing questions through research and education.",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    primaryButtonText: "Explore Research",
    primaryButtonUrl: "#",
    secondaryButtonText: "About Yaqeen",
    secondaryButtonUrl: "#",
  },
  {
    id: 2,
    title: "Empowering Muslims Through Knowledge",
    description: "Access research-based content to navigate contemporary challenges.",
    imageUrl: "https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    primaryButtonText: "View Resources",
    primaryButtonUrl: "#",
    secondaryButtonText: "Our Mission",
    secondaryButtonUrl: "#",
  },
  {
    id: 3,
    title: "Building Bridges Through Research",
    description: "Fostering understanding through academic research and education.",
    imageUrl: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    primaryButtonText: "Recent Publications",
    primaryButtonUrl: "#",
    secondaryButtonText: "Contact Us",
    secondaryButtonUrl: "#",
  },
];

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = carouselData[activeSlide];

  return (
    <div className="relative bg-[#0047FF]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Main Hero Content */}
          <div className="w-full md:w-2/3 p-6 md:p-12 flex items-center text-white">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-white">Your</span> <span className="text-[#FF9500]">credible source</span> <span className="text-white">on</span><br/>
                <span className="text-white">contemporary Islamic topics.</span>
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
              alt="Islamic research and education"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeSlide
                  ? "w-8 bg-[#0047FF]"
                  : "w-2 bg-gray-400 hover:bg-[#0047FF]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
