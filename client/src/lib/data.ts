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
    name: "South African Compliance",
    slug: "sa-compliance",
    icon: "scale",
    description: "Stay compliant with South African employment laws and regulations"
  },
  {
    name: "SA Payroll Management",
    slug: "sa-payroll",
    icon: "book-open",
    description: "Process payroll, UIF, and tax filing in South Africa"
  },
  {
    name: "BEE Compliance",
    slug: "bee",
    icon: "heart",
    description: "Navigate Broad-Based Black Economic Empowerment requirements"
  },
  {
    name: "Employee Onboarding",
    slug: "onboarding",
    icon: "users",
    description: "Streamlined hiring and onboarding for employees in South Africa"
  },
  {
    name: "South African Tax",
    slug: "sa-tax",
    icon: "landmark",
    description: "Navigate South African tax requirements for employers"
  },
  {
    name: "Work Visas for SA",
    slug: "sa-visa",
    icon: "graduation-cap",
    description: "Simplify work permits and visa applications for South Africa"
  },
  {
    name: "SA Employment Contracts",
    slug: "sa-contracts",
    icon: "microscope",
    description: "Legally-compliant employment agreements for South Africa"
  },
  {
    name: "South African Market Entry",
    slug: "sa-market",
    icon: "globe",
    description: "Strategic guidance for entering the South African market"
  }
];

// Mock Content Data
export const mockContent: InsertContent[] = [
  {
    title: "Navigating South African Labor Laws When Hiring Remotely",
    slug: "sa-labor-laws",
    excerpt: "A comprehensive guide to understanding South African employment regulations for international companies.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Thabo Mbeki",
    readTime: 15,
    categoryId: 1, // SA Compliance
    contentType: "article",
    publishedAt: new Date("2023-04-15")
  },
  {
    title: "Entering the South African Market: Strategy Guide",
    slug: "sa-market-entry-strategy",
    excerpt: "Key insights for companies looking to expand their operations into South Africa.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    readTime: 20,
    categoryId: 8, // SA Market Entry
    contentType: "article",
    publishedAt: new Date("2023-03-28")
  },
  {
    title: "BEE Compliance for Foreign Companies",
    slug: "bee-for-foreign-companies",
    excerpt: "How to navigate Broad-Based Black Economic Empowerment requirements as a foreign entity.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1576485375217-d6a95e34d041?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Nomsa Dlamini",
    readTime: 12,
    categoryId: 3, // BEE Compliance
    contentType: "article",
    publishedAt: new Date("2023-04-02")
  },
  {
    title: "South African Payroll: UIF, PAYE and Tax Filing",
    slug: "sa-payroll-guide",
    excerpt: "Best practices for managing payroll and mandatory deductions in South Africa.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "David Mabaso",
    readTime: 18,
    categoryId: 2, // SA Payroll
    contentType: "publication",
    publishedAt: new Date("2023-04-10")
  },
  {
    title: "Tax Compliance for South African Remote Teams",
    slug: "sa-tax-compliance",
    excerpt: "Understanding South African tax implications when employing remote workers.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1590076215667-875d3c33b438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Rachel Thompson",
    readTime: 15,
    categoryId: 5, // SA Tax
    contentType: "publication",
    publishedAt: new Date("2023-03-30")
  },
  {
    title: "Digital Onboarding Processes for South African Hires",
    slug: "sa-digital-onboarding",
    excerpt: "Creating effective remote onboarding experiences for South African employees.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1584037018612-812b569c7f9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Thomas Wilson",
    readTime: 14,
    categoryId: 4, // Onboarding
    contentType: "publication",
    publishedAt: new Date("2023-03-25")
  },
  {
    title: "South African Employment Guide 2023",
    slug: "sa-employment-guide",
    excerpt: "Essential information for employers hiring in South Africa",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1576485375217-d6a95e34d041?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Emma Phillips",
    readTime: 30,
    categoryId: 1, // SA Compliance
    contentType: "resource",
    publishedAt: new Date("2023-02-15")
  },
  {
    title: "Johannesburg & Cape Town Regional Guide",
    slug: "joburg-capetown-guide",
    excerpt: "Complete guide to hiring, managing, and compensating employees in South Africa's main business centers",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1580746738099-78c8abc74942?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Sipho Nkosi",
    readTime: 25,
    categoryId: 1, // SA Compliance
    contentType: "resource",
    publishedAt: new Date("2023-02-01")
  },
  {
    title: "South African Employment Contract Templates",
    slug: "sa-contract-templates",
    excerpt: "Customizable and compliant employment agreement templates for South Africa",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1612599316791-451087c7fe15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Sophia Martinez",
    readTime: 20,
    categoryId: 7, // SA Contracts
    contentType: "resource",
    publishedAt: new Date("2023-03-10")
  },
  {
    title: "South African Work Visa Guide",
    slug: "sa-work-visa-guide",
    excerpt: "Processing requirements and timelines for work permits in South Africa",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1597007030739-6d2e7172e222?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "James Anderson",
    readTime: 28,
    categoryId: 6, // SA Visa
    contentType: "resource",
    publishedAt: new Date("2023-01-20")
  }
];

// Mock Events Data
export const mockEvents: InsertEvent[] = [
  {
    title: "South African Payroll Compliance Webinar 2023",
    description: "Learn about the latest South African payroll regulations and how to maintain compliance with local labor laws.",
    eventDate: new Date("2023-05-15"),
    location: "Johannesburg & Online",
    registrationUrl: "https://example.com/register/sa-payroll-compliance-webinar"
  },
  {
    title: "BEE Certification Workshop",
    description: "Join our panel of experts to discuss the key requirements and benefits of BEE certification for companies operating in South Africa.",
    eventDate: new Date("2023-06-22"),
    location: "Cape Town & Online",
    registrationUrl: "https://example.com/register/bee-certification-workshop"
  }
];
