export default function TargetAudience() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-[#0047FF]">Primary Target Audience</h2>
          <p className="text-[#4a5568]">Our tailored solutions for different business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* SMEs & Startups Column */}
          <div className="bg-[#0a1845] p-6 rounded-lg shadow-lg border-l-4 border-[#FF9500]">
            <h3 className="text-xl font-bold text-white mb-4">Small & Medium Enterprises (SMEs) & Startups</h3>
            
            <div className="mb-4">
              <h4 className="text-[#FF9500] font-bold mb-2">Industries:</h4>
              <p className="text-gray-200">Technology, Finance, Digital Marketing, E-commerce, and Consulting.</p>
            </div>
            
            <div className="mb-4 bg-[#0d1e4e] p-3 rounded-md">
              <h4 className="text-[#FF9500] font-bold mb-2">Key Decision-Makers:</h4>
              <p className="text-gray-200">Founders, CEOs, HR Managers, and Operations Heads.</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-[#FF9500] font-bold mb-2">Pain Points:</h4>
              <ul className="text-gray-200 list-disc pl-5 space-y-2">
                <li>High cost of expanding internationally.</li>
                <li>Lack of local compliance knowledge when hiring in South Africa.</li>
                <li>Administrative burden of payroll and tax management.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[#FF9500] font-bold mb-2">How Talentfi Solves Their Problems:</h4>
              <ul className="text-gray-200 list-disc pl-5 space-y-2">
                <li>Provides a cost-effective, compliant, and streamlined way to hire South African professionals without the need to set up a local entity.</li>
                <li>Ensures full payroll, tax, and HR compliance, reducing operational risks.</li>
                <li>Helps startups quickly scale teams without legal complications.</li>
              </ul>
            </div>
          </div>

          {/* Corporate Enterprises Column */}
          <div className="bg-[#0a1845] p-6 rounded-lg shadow-lg border-l-4 border-[#FF9500]">
            <h3 className="text-xl font-bold text-white mb-4">Corporate Enterprises & Multinational Companies</h3>
            
            <div className="mb-4">
              <h4 className="text-[#FF9500] font-bold mb-2">Industries:</h4>
              <p className="text-gray-200">IT, Engineering, Business Process Outsourcing (BPO), Customer Support, and Fintech.</p>
            </div>
            
            <div className="mb-4 bg-[#0d1e4e] p-3 rounded-md">
              <h4 className="text-[#FF9500] font-bold mb-2">Key Decision-Makers:</h4>
              <p className="text-gray-200">CHROs (Chief Human Resource Officers), HR Directors, Talent Acquisition Leads, and CFOs.</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-[#FF9500] font-bold mb-2">Pain Points:</h4>
              <ul className="text-gray-200 list-disc pl-5 space-y-2">
                <li>Challenges in navigating South African labor laws and tax structures.</li>
                <li>Ensuring cost-effective yet high-quality workforce expansion.</li>
                <li>The need for a reliable, fast, and scalable hiring solution.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[#FF9500] font-bold mb-2">How Talentfi Solves Their Problems:</h4>
              <ul className="text-gray-200 list-disc pl-5 space-y-2">
                <li>Offers an Employer of Record (EOR) solution that eliminates the need for legal entity setup.</li>
                <li>Provides access to a skilled workforce at a lower cost than hiring in Europe or North America.</li>
                <li>Ensures seamless onboarding, payroll, and contract management for large teams.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}