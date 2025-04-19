import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative bg-[#0047FF]">
      <div className="container mx-auto px-0">
        <div className="flex flex-col md:flex-row">
          {/* Main Hero Content */}
          <div className="w-full p-6 md:p-12 py-16 md:py-24 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">Global seamless hiring</span><br/>
                <span className="text-white">saving you up to</span> <span className="text-[#FF9500] font-bold">65%</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Your trusted South African employment partner. Our local EOR services make hiring simple and fully compliant.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Button
                  className="bg-[#FF9500] hover:bg-[#E68600] text-white py-3 px-6 rounded-md font-semibold"
                  asChild
                >
                  <a href="#">Get Started</a>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white border border-[#0047FF] text-[#0047FF] hover:bg-[#f7f7f7] py-3 px-6 rounded-md font-semibold"
                  asChild
                >
                  <a href="#">How It Works</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}