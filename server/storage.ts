import { 
  users, 
  type User, 
  type InsertUser, 
  type ContentCategory, 
  type Content, 
  type Event, 
  type InsertNewsletterSubscription, 
  type NewsletterSubscription 
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
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: ContentCategory[];
  private content: Content[];
  private events: Event[];
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  
  currentId: number;
  private subscriptionId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
    this.subscriptionId = 1;
    this.newsletterSubscriptions = new Map();
    
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
}

export const storage = new MemStorage();
