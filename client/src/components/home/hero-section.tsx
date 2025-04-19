import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative bg-[#0047FF]">
      <div className="container mx-auto px-0">
        <div className="flex flex-col md:flex-row">
          {/* Main Hero Content */}
          <div className="w-full p-6 md:p-12 py-20 md:py-32 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">Global seamless hiring</span><br/>
                <span className="text-white">saving you up to</span> <span className="text-[#FF9500] font-bold">65%</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Your trusted South African employment partner. Our local EOR services make hiring simple and fully compliant.
              </p>
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 mt-10 max-w-5xl mx-auto">
                {/* USA Salary Block - Left */}
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 text-white w-64 lg:mr-8">
                  <div className="text-lg font-semibold">USA Mid Level Software Engineer</div>
                  <div className="text-2xl font-bold text-[#FF9500]">$100,000</div>
                </div>
                
                {/* Button Group - Center */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                  <Button
                    className="bg-[#FF9500] hover:bg-[#E68600] text-white py-4 px-8 rounded-md font-semibold text-lg"
                    asChild
                  >
                    <a href="#">Get Started</a>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white border border-[#0047FF] text-[#0047FF] hover:bg-[#f7f7f7] py-4 px-8 rounded-md font-semibold text-lg"
                    asChild
                  >
                    <a href="#">How It Works</a>
                  </Button>
                </div>
                
                {/* SA Salary Block - Right */}
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 text-white w-64 lg:ml-8">
                  <div className="text-lg font-semibold">SA Mid Level Software Engineer</div>
                  <div className="text-2xl font-bold text-[#FF9500]">$30,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}