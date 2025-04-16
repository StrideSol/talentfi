import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const carouselData = [
  {
    id: 1,
    title: "South African Workforce Solutions",
    description: "Expand your team into South Africa without establishing a local entity. Our EOR services make hiring in South Africa simple and compliant.",
    imageUrl: "https://images.unsplash.com/photo-1576485375217-d6a95e34d041?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    primaryButtonText: "Get Started",
    primaryButtonUrl: "#",
    secondaryButtonText: "How It Works",
    secondaryButtonUrl: "#",
  },
  {
    id: 2,
    title: "Fully Compliant with SA Labor Laws",
    description: "Hire, onboard and pay employees in South Africa with complete legal compliance, including BEE requirements and labor regulations.",
    imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    primaryButtonText: "Compliance Guide",
    primaryButtonUrl: "#",
    secondaryButtonText: "SA Labor FAQ",
    secondaryButtonUrl: "#",
  },
  {
    id: 3,
    title: "South African Payroll & Benefits",
    description: "Manage payroll, benefits, UIF, and taxes in South Africa while ensuring local compliance and employee satisfaction.",
    imageUrl: "https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    primaryButtonText: "Payroll Solutions",
    primaryButtonUrl: "#",
    secondaryButtonText: "Request Demo",
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
                <span className="text-white">Your</span> <span className="text-[#FF9500]">South African</span> <span className="text-white">employment</span><br/>
                <span className="text-white">partner for global businesses.</span>
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
              alt="South African Employer of Record services"
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
                  ? "w-8 bg-[#FF9500]"
                  : "w-2 bg-white hover:bg-[#FF9500]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
