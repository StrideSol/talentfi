export default function TargetAudience() {
  return (
    <section id="hire-smarter" className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-[#0047FF]">Services</h2>
          <h3 className="text-2xl font-bold mb-2">Hire smarter, grow faster</h3>
          <p className="text-[#4a5568]">Whether you're scaling your team, entering new markets, or tackling high-volume hiring, Talentfi simplifies every step to help you build great teams quickly and confidently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Row 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#03AFA7]">
            <div className="h-36 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#03AFA7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Find Top Talent Without the Wait</h3>
            <p className="text-gray-600">Quickly discover qualified candidates, reduce irrelevant applications, and fill critical roles with ease, saving time and resources.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#FF9500]">
            <div className="h-36 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#FF9500]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V4" />
                <path d="M5 12h14" />
                <path d="M5 12l-3-3 3-3" />
                <path d="M19 12l3-3-3-3" />
                <path d="M5 12l-3 3 3 3" />
                <path d="M19 12l3 3-3 3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Confidently Expand Across Borders</h3>
            <p className="text-gray-600">Leverage insights into talent markets, salary trends, and compliance requirements to ensure seamless and successful international hiring.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#0047FF]">
            <div className="h-36 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0047FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Smarter Hiring, Better Business</h3>
            <p className="text-gray-600">Streamline your hiring process with tools that align every hire with your business goals, ensuring you secure the right talent quickly and effectively.</p>
          </div>

          {/* Row 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#03AFA7]">
            <div className="h-36 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#03AFA7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hassle-Free Legally Compliant Global Hiring</h3>
            <p className="text-gray-600">We handle local compliance, labour laws, and onboarding, so you can scale your team globally without unnecessary delays or complexities.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#FF9500]">
            <div className="h-36 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#FF9500]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Technology for Smarter Hiring</h3>
            <p className="text-gray-600">Incorporate AI-driven interviews, online assessments, and remote work readiness training through our learning academy to create a seamless and efficient hiring process.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#0047FF]">
            <div className="h-36 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0047FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Balancing Innovation with a Human Touch</h3>
            <p className="text-gray-600">While we utilize advanced technology, our human-first approach ensures every interaction is thoughtful, personal, and tailored to meet your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}