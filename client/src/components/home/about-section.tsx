import React from "react";

export default function AboutSection() {
  return (
    <section id="about">
      {/* Purple Hero Banner */}
      <div className="bg-[#5000FF] text-white relative">
        <div className="text-center pt-8">
          <h1 className="text-4xl font-bold">About Talentfi</h1>
          <p className="text-xl mt-2">Connecting South African talent with global opportunities</p>
        </div>
        <div className="container mx-auto px-4 md:px-10 py-16">
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-2/3">
              <h2 className="text-5xl font-bold mb-6">
                Talent is everywhere,<br />
                opportunity should<br />
                be too
              </h2>
              <p className="text-xl">
                Remote eliminates barriers to international hiring so<br />
                great companies can work with great people, no<br />
                matter where those people are.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-end items-center mt-8 md:mt-0">
              <img 
                src="/globe.png" 
                alt="Global connectivity" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">

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
      </div>
    </section>
  );
}