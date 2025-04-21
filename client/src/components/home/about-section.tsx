import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Talentfi</h2>
          <p className="text-[#4a5568]">Connecting South African talent with global opportunities</p>
        </div>

        <div className="mb-10 text-center">
          <p className="text-[#0047FF] text-2xl font-semibold">
            We believe talent knows no borders—and we're here to ensure opportunity doesn't either.
          </p>
        </div>

        <div className="mt-8 flex justify-center mb-12">
          <img 
            src="attached_assets/image_1745233829405.png" 
            alt="Global talent concept" 
            className="rounded-lg shadow-lg max-w-full md:max-w-md lg:max-w-lg" 
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="mb-4">
              After decades in South Africa's BPO industry, a team of HR experts, business leaders, and industry veterans came together with a shared belief: South Africa is home to world-class talent ready to thrive on the global stage.
            </p>
            
            <p className="mb-4">
              We've hired, trained, and supported thousands of professionals for international roles—and time and again, South African talent has proven itself: highly skilled, adaptable, hardworking, and culturally aligned with markets like the UK, US, and Australia.
            </p>
            
            <p className="mb-4">
              But we kept seeing the same roadblock.
            </p>
            
            <p className="mb-4">
              Global companies wanted to hire—yet hesitated due to legal, compliance, and cross-border complexities. The result? Great candidates missed out. So, we set out to change that.
            </p>
            
            <p className="mb-4">
              We built an Employer of Record (EOR) platform designed to make hiring South African professionals easy, compliant, and stress-free. From payroll and contracts to benefits and local compliance—we handle the details so companies can focus on building great teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}