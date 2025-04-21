import { Code, LineChart, Headphones as HeadphonesIcon } from "lucide-react";

export default function CustomerJourney() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#0047FF] to-[#001d66]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-white">Roles We Source</h2>
          <p className="text-gray-200">Top specialized positions we regularly source for our clients in South Africa</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Role 1 */}
          <div className="flex flex-col md:flex-row mb-8 items-start">
            <div className="w-full md:w-1/6 flex justify-center mb-4 md:mb-0">
              <div className="bg-[#2f1b75] p-6 rounded-lg shadow-lg border-l-4 border-[#FF9500]">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="w-full md:w-5/6 md:pl-8">
              <h3 className="text-xl font-bold text-white mb-2">Software Engineering</h3>
              <p className="text-gray-200 mb-2">Full-stack developers, mobile developers, DevOps engineers, and data engineers.</p>
              <p className="text-gray-200">Up to 65% cost savings compared to US-based engineering talent.</p>
            </div>
          </div>

          {/* Role 2 */}
          <div className="flex flex-col md:flex-row mb-8 items-start">
            <div className="w-full md:w-1/6 flex justify-center mb-4 md:mb-0">
              <div className="bg-[#2f1b75] p-6 rounded-lg shadow-lg border-l-4 border-[#FF9500]">
                <LineChart className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="w-full md:w-5/6 md:pl-8">
              <h3 className="text-xl font-bold text-white mb-2">Finance & Accounting</h3>
              <p className="text-gray-200 mb-2">Financial analysts, bookkeepers, accountants, and financial controllers.</p>
              <p className="text-gray-200">Qualified professionals with international accounting standard experience.</p>
            </div>
          </div>

          {/* Role 3 */}
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/6 flex justify-center mb-4 md:mb-0">
              <div className="bg-[#2f1b75] p-6 rounded-lg shadow-lg border-l-4 border-[#FF9500]">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="w-full md:w-5/6 md:pl-8">
              <h3 className="text-xl font-bold text-white mb-2">Customer Support</h3>
              <p className="text-gray-200 mb-2">Support specialists, technical support agents, and customer success managers.</p>
              <p className="text-gray-200">English-fluent professionals available in compatible time zones for your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}