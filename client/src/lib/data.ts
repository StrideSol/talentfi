import { 
  type Content, 
  type ContentCategory, 
  type Event, 
  type InsertContent, 
  type InsertContentCategory, 
  type InsertEvent 
} from "@shared/schema";

// Preload data for initial loading until backend storage is in place
// These will be replaced by actual database calls in a real application

// Mock Categories Data
export const mockCategories: InsertContentCategory[] = [
  {
    name: "Global Compliance",
    slug: "compliance",
    icon: "scale",
    description: "Stay compliant with employment laws worldwide"
  },
  {
    name: "Payroll Management",
    slug: "payroll",
    icon: "book-open",
    description: "Process payroll in multiple currencies and jurisdictions"
  },
  {
    name: "Benefits Administration",
    slug: "benefits",
    icon: "heart",
    description: "Manage competitive benefits packages for global teams"
  },
  {
    name: "Employee Onboarding",
    slug: "onboarding",
    icon: "users",
    description: "Streamlined hiring and onboarding for international employees"
  },
  {
    name: "Tax Management",
    slug: "tax",
    icon: "landmark",
    description: "Navigate complex international tax requirements"
  },
  {
    name: "Visa & Immigration",
    slug: "visa",
    icon: "graduation-cap",
    description: "Simplify work permits and visa application processes"
  },
  {
    name: "Employment Contracts",
    slug: "contracts",
    icon: "microscope",
    description: "Legally-compliant employment agreements for all jurisdictions"
  },
  {
    name: "Global Expansion",
    slug: "global",
    icon: "globe",
    description: "Strategic guidance for entering new international markets"
  }
];

// Mock Content Data
export const mockContent: InsertContent[] = [
  {
    title: "Navigating US Labor Laws When Hiring Remotely",
    slug: "navigating-us-labor-laws",
    excerpt: "A comprehensive guide to understanding US employment regulations when hiring remote workers.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    readTime: 15,
    categoryId: 1, // Compliance
    contentType: "article",
    publishedAt: new Date("2023-04-15")
  },
  {
    title: "Global Expansion: European Market Entry Strategy",
    slug: "european-market-entry-strategy",
    excerpt: "Key insights for companies looking to expand their operations into European markets.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Michael Chen",
    readTime: 20,
    categoryId: 8, // Global Expansion
    contentType: "article",
    publishedAt: new Date("2023-03-28")
  },
  {
    title: "Benefits Packages That Attract Global Talent",
    slug: "global-benefits-packages",
    excerpt: "How to structure competitive benefits offerings that appeal to international employees.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Elena Rodriguez",
    readTime: 12,
    categoryId: 3, // Benefits
    contentType: "article",
    publishedAt: new Date("2023-04-02")
  },
  {
    title: "Streamlining International Payroll Operations",
    slug: "international-payroll-operations",
    excerpt: "Best practices for managing payroll across multiple countries and currencies.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "David Kim",
    readTime: 18,
    categoryId: 2, // Payroll
    contentType: "publication",
    publishedAt: new Date("2023-04-10")
  },
  {
    title: "Tax Compliance for Remote Global Teams",
    slug: "tax-compliance-remote-teams",
    excerpt: "Understanding the complex tax implications when employing distributed teams across borders.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1590076215667-875d3c33b438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Rachel Thompson",
    readTime: 15,
    categoryId: 5, // Tax Management
    contentType: "publication",
    publishedAt: new Date("2023-03-30")
  },
  {
    title: "Digital Onboarding Processes for Global Hires",
    slug: "digital-onboarding-global-hires",
    excerpt: "Creating effective remote onboarding experiences for international employees.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1584037018612-812b569c7f9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Thomas Wilson",
    readTime: 14,
    categoryId: 4, // Onboarding
    contentType: "publication",
    publishedAt: new Date("2023-03-25")
  },
  {
    title: "UK Employment Guide 2023",
    slug: "uk-employment-guide",
    excerpt: "Essential information for employers hiring in the United Kingdom",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1588580000645-5e582b74e0c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Emma Phillips",
    readTime: 30,
    categoryId: 1, // Compliance
    contentType: "resource",
    publishedAt: new Date("2023-02-15")
  },
  {
    title: "Singapore Employment Regulations",
    slug: "singapore-employment-regulations",
    excerpt: "Complete guide to hiring, managing, and compensating employees in Singapore",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Li Wei",
    readTime: 25,
    categoryId: 1, // Compliance
    contentType: "resource",
    publishedAt: new Date("2023-02-01")
  },
  {
    title: "Employment Contract Templates by Country",
    slug: "contract-templates-by-country",
    excerpt: "Customizable and compliant employment agreement templates for major global markets",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1612599316791-451087c7fe15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Sophia Martinez",
    readTime: 20,
    categoryId: 7, // Contracts
    contentType: "resource",
    publishedAt: new Date("2023-03-10")
  },
  {
    title: "International Work Visa Guide",
    slug: "international-work-visa-guide",
    excerpt: "Processing requirements and timelines for work permits across major economies",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1597007030739-6d2e7172e222?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "James Anderson",
    readTime: 28,
    categoryId: 6, // Visa
    contentType: "resource",
    publishedAt: new Date("2023-01-20")
  }
];

// Mock Events Data
export const mockEvents: InsertEvent[] = [
  {
    title: "Global Payroll Compliance Webinar 2023",
    description: "Learn about the latest international payroll regulations and how to maintain compliance across multiple jurisdictions.",
    eventDate: new Date("2023-05-15"),
    location: "Online Webinar",
    registrationUrl: "https://example.com/register/payroll-compliance-webinar"
  },
  {
    title: "Expanding to Europe: Legal and HR Considerations",
    description: "Join our panel of experts to discuss the key legal and HR challenges when establishing operations in European markets.",
    eventDate: new Date("2023-06-22"),
    location: "London & Online",
    registrationUrl: "https://example.com/register/europe-expansion-webinar"
  }
];
