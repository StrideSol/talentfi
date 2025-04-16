import { 
  users, 
  type User, 
  type InsertUser, 
  type ContentCategory, 
  type Content, 
  type Event, 
  type InsertNewsletterSubscription, 
  type NewsletterSubscription,
  type CarouselSlide,
  type InsertCarouselSlide
} from "@shared/schema";
import { mockCategories, mockContent, mockEvents } from "../client/src/lib/data";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Content methods
  getContentCategories(): Promise<ContentCategory[]>;
  getFeaturedContent(): Promise<Content[]>;
  getContentByType(type: string): Promise<Content[]>;
  
  // Event methods
  getEvents(): Promise<Event[]>;
  
  // Newsletter methods
  createNewsletterSubscription(data: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  
  // Carousel methods
  getCarouselSlides(): Promise<CarouselSlide[]>;
  getCarouselSlide(id: number): Promise<CarouselSlide | undefined>;
  createCarouselSlide(data: InsertCarouselSlide): Promise<CarouselSlide>;
  updateCarouselSlide(id: number, data: Partial<InsertCarouselSlide>): Promise<CarouselSlide | undefined>;
  deleteCarouselSlide(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: ContentCategory[];
  private content: Content[];
  private events: Event[];
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private carouselSlides: Map<number, CarouselSlide>;
  
  currentId: number;
  private subscriptionId: number;
  private carouselSlideId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
    this.subscriptionId = 1;
    this.carouselSlideId = 1;
    this.newsletterSubscriptions = new Map();
    this.carouselSlides = new Map();
    
    // Initialize with mock data
    this.categories = mockCategories.map((cat, index) => ({
      ...cat,
      id: index + 1,
      icon: cat.icon || null,
      description: cat.description || null
    }));
    
    this.content = mockContent.map((cont, index) => ({
      ...cont,
      id: index + 1,
      content: cont.content || null,
      excerpt: cont.excerpt || null,
      imageUrl: cont.imageUrl || null,
      author: cont.author || null,
      readTime: cont.readTime || null,
      publishedAt: cont.publishedAt || null
    }));
    
    this.events = mockEvents.map((event, index) => ({
      ...event,
      id: index + 1,
      description: event.description || null,
      location: event.location || null,
      registrationUrl: event.registrationUrl || null
    }));
    
    // Initialize carousel slides with current data
    const initialCarouselSlides: CarouselSlide[] = [
      {
        id: this.carouselSlideId++,
        title: "South African Workforce Solutions",
        description: "Your trusted South African employment partner. Our local EOR services make hiring in South Africa simple and fully compliant.",
        imageUrl: "https://images.unsplash.com/photo-1576485375217-d6a95e34d041?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        primaryButtonText: "Get Started",
        primaryButtonUrl: "#",
        secondaryButtonText: "How It Works",
        secondaryButtonUrl: "#",
        order: 0,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: this.carouselSlideId++,
        title: "Fully Compliant with SA Labor Laws",
        description: "Hire, onboard and pay employees in South Africa with complete legal compliance, including BEE requirements and labor regulations.",
        imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        primaryButtonText: "Compliance Guide",
        primaryButtonUrl: "#",
        secondaryButtonText: "SA Labor FAQ",
        secondaryButtonUrl: "#",
        order: 1,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: this.carouselSlideId++,
        title: "South African Payroll & Benefits",
        description: "Manage payroll, benefits, UIF, and taxes in South Africa while ensuring local compliance and employee satisfaction.",
        imageUrl: "https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        primaryButtonText: "Payroll Solutions",
        primaryButtonUrl: "#",
        secondaryButtonText: "Request Demo",
        secondaryButtonUrl: "#",
        order: 2,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    initialCarouselSlides.forEach(slide => {
      this.carouselSlides.set(slide.id, slide);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Content methods
  async getContentCategories(): Promise<ContentCategory[]> {
    return this.categories;
  }
  
  async getFeaturedContent(): Promise<Content[]> {
    return this.content.filter(item => item.contentType === "article").slice(0, 3);
  }
  
  async getContentByType(type: string): Promise<Content[]> {
    return this.content.filter(item => item.contentType === type);
  }
  
  // Event methods
  async getEvents(): Promise<Event[]> {
    // Return events that haven't happened yet
    const now = new Date();
    return this.events.filter(event => new Date(event.eventDate) >= now);
  }
  
  // Newsletter methods
  async createNewsletterSubscription(data: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = this.subscriptionId++;
    const subscription: NewsletterSubscription = { ...data, id };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }
  
  // Carousel methods
  async getCarouselSlides(): Promise<CarouselSlide[]> {
    return Array.from(this.carouselSlides.values())
      .filter(slide => slide.isActive)
      .sort((a, b) => a.order - b.order);
  }
  
  async getCarouselSlide(id: number): Promise<CarouselSlide | undefined> {
    return this.carouselSlides.get(id);
  }
  
  async createCarouselSlide(data: InsertCarouselSlide): Promise<CarouselSlide> {
    const id = this.carouselSlideId++;
    const now = new Date();
    const slide: CarouselSlide = { 
      ...data, 
      id, 
      createdAt: now,
      updatedAt: now
    };
    this.carouselSlides.set(id, slide);
    return slide;
  }
  
  async updateCarouselSlide(id: number, data: Partial<InsertCarouselSlide>): Promise<CarouselSlide | undefined> {
    const slide = this.carouselSlides.get(id);
    if (!slide) return undefined;
    
    const updatedSlide: CarouselSlide = {
      ...slide,
      ...data,
      updatedAt: new Date()
    };
    
    this.carouselSlides.set(id, updatedSlide);
    return updatedSlide;
  }
  
  async deleteCarouselSlide(id: number): Promise<boolean> {
    return this.carouselSlides.delete(id);
  }
}

export const storage = new MemStorage();
