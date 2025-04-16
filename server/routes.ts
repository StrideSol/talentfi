import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertNewsletterSubscriptionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the Yaqeen Institute clone
  
  // Get all content categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getContentCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  // Get featured content
  app.get("/api/content/featured", async (req, res) => {
    try {
      const featuredContent = await storage.getFeaturedContent();
      res.json(featuredContent);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured content" });
    }
  });

  // Get latest publications
  app.get("/api/content/publications", async (req, res) => {
    try {
      const publications = await storage.getContentByType("publication");
      res.json(publications);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch publications" });
    }
  });
  
  // Get educational resources
  app.get("/api/content/resources", async (req, res) => {
    try {
      const resources = await storage.getContentByType("resource");
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch resources" });
    }
  });

  // Get upcoming events
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  // Newsletter signup
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const data = insertNewsletterSubscriptionSchema.parse({
        ...req.body,
        subscribedAt: new Date()
      });
      
      const subscription = await storage.createNewsletterSubscription(data);
      res.status(201).json(subscription);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid email address", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to subscribe to newsletter" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
