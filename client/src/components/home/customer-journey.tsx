import { Rocket, Heart, ClipboardCheck } from "lucide-react";

export default function CustomerJourney() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#0047FF] to-[#001d66]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-white">Customer Journey</h2>
          <p className="text-gray-200">How we help companies streamline their South African employment needs</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Journey Step 1 */}
          <div className="flex flex-col md:flex-row mb-8 items-start">
            <div className="w-full md:w-1/6 flex justify-center mb-4 md:mb-0">
              <div className="bg-[#2f1b75] p-6 rounded-lg shadow-lg border-l-4 border-[#FF9500]">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="w-full md:w-5/6 md:pl-8">
              <h3 className="text-xl font-bold text-white mb-2">Engagement</h3>
              <p className="text-gray-200 mb-2">Customer books a consultation to discuss specific hiring needs.</p>
              <p className="text-gray-200">talentfi provides a tailored proposal with pricing and compliance details.</p>
            </div>
          </div>

          {/* Journey Step 2 */}
          <div className="flex flex-col md:flex-row mb-8 items-start">
            <div className="w-full md:w-1/6 flex justify-center mb-4 md:mb-0">
              <div className="bg-[#2f1b75] p-6 rounded-lg shadow-lg border-l-4 border-[#FF9500]">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="w-full md:w-5/6 md:pl-8">
              <h3 className="text-xl font-bold text-white mb-2">Onboarding</h3>
              <p className="text-gray-200 mb-2">Seamless setup with legal, payroll, and compliance assistance.</p>
              <p className="text-gray-200">Customer receives dedicated account manager support.</p>
            </div>
          </div>

          {/* Journey Step 3 */}
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/6 flex justify-center mb-4 md:mb-0">
              <div className="bg-[#2f1b75] p-6 rounded-lg shadow-lg border-l-4 border-[#FF9500]">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="w-full md:w-5/6 md:pl-8">
              <h3 className="text-xl font-bold text-white mb-2">Joy!</h3>
              <p className="text-gray-200">Customer experiences hassle-free hiring and payroll.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}