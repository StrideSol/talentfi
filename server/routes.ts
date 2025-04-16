import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';
import { insertNewsletterSubscriptionSchema } from "@shared/schema";

// Get current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  
  // Configure multer storage for carousel image uploads
  const carouselStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/carousel/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, 'carousel-' + uniqueSuffix + ext);
    }
  });
  
  const carouselUpload = multer({ 
    storage: carouselStorage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
      // Accept only images
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    }
  });
  
  // Get all carousel slides
  app.get("/api/carousel", async (req, res) => {
    try {
      const slides = await storage.getCarouselSlides();
      res.json(slides);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch carousel slides" });
    }
  });
  
  // Get a specific carousel slide
  app.get("/api/carousel/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const slide = await storage.getCarouselSlide(id);
      if (!slide) {
        return res.status(404).json({ message: "Carousel slide not found" });
      }
      
      res.json(slide);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch carousel slide" });
    }
  });
  
  // Create a new carousel slide with image upload
  app.post("/api/carousel", carouselUpload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Image file is required" });
      }
      
      const imageUrl = `/uploads/carousel/${req.file.filename}`;
      
      const slideData = {
        title: req.body.title,
        description: req.body.description,
        imageUrl,
        primaryButtonText: req.body.primaryButtonText,
        primaryButtonUrl: req.body.primaryButtonUrl,
        secondaryButtonText: req.body.secondaryButtonText,
        secondaryButtonUrl: req.body.secondaryButtonUrl,
        order: parseInt(req.body.order) || 0,
        isActive: req.body.isActive === 'true'
      };
      
      const slide = await storage.createCarouselSlide(slideData);
      res.status(201).json(slide);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid slide data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create carousel slide" });
      }
    }
  });
  
  // Update a carousel slide with optional image upload
  app.put("/api/carousel/:id", carouselUpload.single('image'), async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const existingSlide = await storage.getCarouselSlide(id);
      if (!existingSlide) {
        return res.status(404).json({ message: "Carousel slide not found" });
      }
      
      let imageUrl = existingSlide.imageUrl;
      
      // If a new image was uploaded, use it and delete the old one if it's a local file
      if (req.file) {
        imageUrl = `/uploads/carousel/${req.file.filename}`;
        
        // Delete old image if it's a local file
        if (existingSlide.imageUrl.startsWith('/uploads/carousel/')) {
          const oldImagePath = path.join('./public', existingSlide.imageUrl);
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          }
        }
      }
      
      const slideData: any = {};
      
      // Only update fields that were provided
      if (req.body.title) slideData.title = req.body.title;
      if (req.body.description) slideData.description = req.body.description;
      if (req.file) slideData.imageUrl = imageUrl;
      if (req.body.primaryButtonText) slideData.primaryButtonText = req.body.primaryButtonText;
      if (req.body.primaryButtonUrl) slideData.primaryButtonUrl = req.body.primaryButtonUrl;
      if (req.body.secondaryButtonText) slideData.secondaryButtonText = req.body.secondaryButtonText;
      if (req.body.secondaryButtonUrl) slideData.secondaryButtonUrl = req.body.secondaryButtonUrl;
      if (req.body.order) slideData.order = parseInt(req.body.order);
      if (req.body.isActive !== undefined) slideData.isActive = req.body.isActive === 'true';
      
      const updatedSlide = await storage.updateCarouselSlide(id, slideData);
      res.json(updatedSlide);
    } catch (error) {
      res.status(500).json({ message: "Failed to update carousel slide" });
    }
  });
  
  // Delete a carousel slide
  app.delete("/api/carousel/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const slide = await storage.getCarouselSlide(id);
      if (!slide) {
        return res.status(404).json({ message: "Carousel slide not found" });
      }
      
      // Delete the image file if it's a local upload
      if (slide.imageUrl.startsWith('/uploads/carousel/')) {
        const imagePath = path.join('./public', slide.imageUrl);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
      
      await storage.deleteCarouselSlide(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete carousel slide" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
