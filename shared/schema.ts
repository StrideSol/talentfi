import { pgTable, text, serial, integer, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Base users schema from the template
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Content Types for the Yaqeen site

export const contentCategories = pgTable("content_categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  icon: varchar("icon", { length: 100 }),
  description: text("description"),
});

export const insertContentCategorySchema = createInsertSchema(contentCategories).pick({
  name: true,
  slug: true, 
  icon: true,
  description: true
});

export type InsertContentCategory = z.infer<typeof insertContentCategorySchema>;
export type ContentCategory = typeof contentCategories.$inferSelect;

export const content = pgTable("content", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content"),
  imageUrl: varchar("image_url", { length: 255 }),
  author: varchar("author", { length: 100 }),
  readTime: integer("read_time"),
  categoryId: integer("category_id").notNull(),
  contentType: varchar("content_type", { length: 50 }).notNull(), // article, publication, resource, etc.
  publishedAt: timestamp("published_at"),
});

export const insertContentSchema = createInsertSchema(content).pick({
  title: true,
  slug: true,
  excerpt: true,
  content: true,
  imageUrl: true,
  author: true,
  readTime: true,
  categoryId: true,
  contentType: true,
  publishedAt: true
});

export type InsertContent = z.infer<typeof insertContentSchema>;
export type Content = typeof content.$inferSelect;

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  eventDate: timestamp("event_date").notNull(),
  location: varchar("location", { length: 255 }),
  registrationUrl: varchar("registration_url", { length: 255 }),
});

export const insertEventSchema = createInsertSchema(events).pick({
  title: true,
  description: true,
  eventDate: true,
  location: true,
  registrationUrl: true
});

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  subscribedAt: timestamp("subscribed_at").notNull(),
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).pick({
  email: true,
  subscribedAt: true
});

export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;

// Carousel slide types (using simple interface instead of database table)
export interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type InsertCarouselSlide = Omit<CarouselSlide, 'id' | 'createdAt' | 'updatedAt'>;
