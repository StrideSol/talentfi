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
    name: "Faith",
    slug: "faith",
    icon: "book-open",
    description: "Theology, spirituality, and religious practice"
  },
  {
    name: "Society",
    slug: "society",
    icon: "users",
    description: "Social issues, ethics, and community development"
  },
  {
    name: "History",
    slug: "history",
    icon: "landmark",
    description: "Islamic history and historical analysis"
  },
  {
    name: "Law",
    slug: "law",
    icon: "scale",
    description: "Islamic jurisprudence and legal theory"
  },
  {
    name: "Spirituality",
    slug: "spirituality",
    icon: "heart",
    description: "Inner dimensions of faith and spiritual growth"
  },
  {
    name: "Education",
    slug: "education",
    icon: "graduation-cap",
    description: "Teaching methods and educational resources"
  },
  {
    name: "Culture",
    slug: "culture",
    icon: "globe",
    description: "Art, literature, and cultural expressions"
  },
  {
    name: "Science",
    slug: "science",
    icon: "microscope",
    description: "Islamic perspectives on scientific topics"
  }
];

// Mock Content Data
export const mockContent: InsertContent[] = [
  {
    title: "Understanding Islamic Ethics in Contemporary Society",
    slug: "understanding-islamic-ethics",
    excerpt: "A comprehensive analysis of how traditional Islamic ethics can be applied to modern moral questions.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Omar Abdullah",
    readTime: 15,
    categoryId: 1, // Faith
    contentType: "article",
    publishedAt: new Date("2023-04-15")
  },
  {
    title: "The Historical Development of Islamic Scholarship",
    slug: "historical-development-scholarship",
    excerpt: "Exploring the evolution of Islamic scholarly traditions from the classical period to modernity.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Sarah Rahman",
    readTime: 20,
    categoryId: 3, // History
    contentType: "article",
    publishedAt: new Date("2023-03-28")
  },
  {
    title: "Islam and Environmental Ethics",
    slug: "islam-environmental-ethics",
    excerpt: "How Islamic teachings provide guidance for addressing environmental challenges and climate change.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Aisha Mohammad",
    readTime: 12,
    categoryId: 2, // Society
    contentType: "article",
    publishedAt: new Date("2023-04-02")
  },
  {
    title: "Prophetic Leadership: Lessons for Modern Governance",
    slug: "prophetic-leadership",
    excerpt: "Examining leadership principles from the prophetic tradition and their applications in contemporary governance.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Yusuf Khan",
    readTime: 18,
    categoryId: 1, // Faith
    contentType: "publication",
    publishedAt: new Date("2023-04-10")
  },
  {
    title: "Faith and Mental Health: An Islamic Perspective",
    slug: "faith-mental-health",
    excerpt: "Exploring the intersection of Islamic teachings and modern mental health practices for holistic well-being.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1590076215667-875d3c33b438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Leila Patel",
    readTime: 15,
    categoryId: 2, // Society
    contentType: "publication",
    publishedAt: new Date("2023-03-30")
  },
  {
    title: "Digital Ethics: Islamic Guidelines for Technology Use",
    slug: "digital-ethics",
    excerpt: "Developing an Islamic framework for ethical engagement with modern technology and digital spaces.",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1584037018612-812b569c7f9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Tariq Rahman",
    readTime: 14,
    categoryId: 2, // Society
    contentType: "publication",
    publishedAt: new Date("2023-03-25")
  },
  {
    title: "Foundations of Islamic Theology",
    slug: "foundations-islamic-theology",
    excerpt: "A comprehensive introduction to core theological concepts",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1588580000645-5e582b74e0c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Hamza Yusuf",
    readTime: 30,
    categoryId: 1, // Faith
    contentType: "resource",
    publishedAt: new Date("2023-02-15")
  },
  {
    title: "Quranic Studies for Beginners",
    slug: "quranic-studies-beginners",
    excerpt: "Learn the basics of Quranic interpretation and analysis",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Omar Suleiman",
    readTime: 25,
    categoryId: 1, // Faith
    contentType: "resource",
    publishedAt: new Date("2023-02-01")
  },
  {
    title: "Islamic Ethics in Daily Life",
    slug: "islamic-ethics-daily-life",
    excerpt: "Practical guidance for applying ethical principles",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1612599316791-451087c7fe15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Yasmin Mogahed",
    readTime: 20,
    categoryId: 2, // Society
    contentType: "resource",
    publishedAt: new Date("2023-03-10")
  },
  {
    title: "History of Islamic Civilization",
    slug: "history-islamic-civilization",
    excerpt: "Exploring the development of Muslim societies",
    content: "Full content would go here...",
    imageUrl: "https://images.unsplash.com/photo-1597007030739-6d2e7172e222?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Jonathan Brown",
    readTime: 28,
    categoryId: 3, // History
    contentType: "resource",
    publishedAt: new Date("2023-01-20")
  }
];

// Mock Events Data
export const mockEvents: InsertEvent[] = [
  {
    title: "Faith in Modern Times: Challenges and Solutions",
    description: "A symposium exploring contemporary challenges to faith and practical approaches to addressing them.",
    eventDate: new Date("2023-05-15"),
    location: "Online Webinar",
    registrationUrl: "https://example.com/register/faith-symposium"
  },
  {
    title: "Islamic Ethics and Technology Conference",
    description: "A conference exploring ethical frameworks for engaging with emerging technologies from an Islamic perspective.",
    eventDate: new Date("2023-06-22"),
    location: "Dallas, TX & Online",
    registrationUrl: "https://example.com/register/ethics-tech-conference"
  }
];
