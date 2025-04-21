export default function CustomerJourney() {

  const categories = [
    {
      id: "software",
      title: "Technology",
      items: [
        "Front End Developer",
        "Back End Developer",
        "Full Stack Developer",
        "IT Support Specialist",
        "QA and Testing Engineer",
        "System Engineer",
        "Mobile Developer",
        "Wordpress Developer",
        "Web Developer"
      ]
    },
    {
      id: "finance",
      title: "Finance",
      items: [
        "Financial Underwriter",
        "Financial Analyst",
        "Finance Director",
        "Bookkeeper",
        "Accountant",
        "Financial Controller"
      ]
    },
    {
      id: "marketing",
      title: "Marketing",
      items: [
        "Social Media Manager",
        "Digital Marketing Specialist",
        "Email Marketer",
        "E-commerce Manager",
        "Shopify Expert",
        "SEO Specialist",
        "Paid Ads Manager",
        "Amazon Specialist",
        "Performance Marketer"
      ]
    }
  ];

  return (
    <section id="roles-we-source" className="py-16 bg-[#E0E0E0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-[#0047FF]">Roles We Source</h2>
          <p className="text-[#333333] max-w-4xl mx-auto mb-6">
            From startups to enterprises, businesses worldwide have used Talentfi to grow remote teams with professionals. 
            Unlock access to South Africa's top talent in IT, Marketing, Accounting, and more through our compliant and cost-effective Employer of Record solutions. Focus on growth while we handle payroll and compliance, making your expansion seamless and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-[#0047FF] p-4 border-b border-gray-200">{category.title}</h3>
              <div className="p-0">
                {category.items.map((item, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
                    <span className="text-[#333333]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}