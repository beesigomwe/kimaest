import { contacts, newsletters, blogPosts, type Contact, type InsertContact, type Newsletter, type InsertNewsletter, type BlogPost, type InsertBlogPost } from "@shared/schema";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Newsletter methods
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
  
  // Blog methods
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private blogPosts: Map<number, BlogPost>;
  private currentContactId: number;
  private currentNewsletterId: number;
  private currentBlogId: number;

  constructor() {
    this.contacts = new Map();
    this.newsletters = new Map();
    this.blogPosts = new Map();
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
    this.currentBlogId = 1;
    
    // Initialize with sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "5 Essential Cybersecurity Tips for Small Businesses",
        excerpt: "Learn how to protect your business from cyber threats with these practical security measures that every small business should implement.",
        content: "In today's digital landscape, cybersecurity is crucial for businesses of all sizes. Here are five essential tips to protect your business...",
        category: "IT Security",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        isPublished: true,
      },
      {
        title: "The Benefits of Cloud Computing for Uganda Businesses",
        excerpt: "Discover how cloud computing can transform your business operations, reduce costs, and improve efficiency in the Ugandan market.",
        content: "Cloud computing offers numerous advantages for businesses in Uganda, from cost savings to improved scalability...",
        category: "Cloud Solutions",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        isPublished: true,
      },
      {
        title: "Building a Robust Network Infrastructure",
        excerpt: "Essential considerations for designing and implementing a reliable network infrastructure that supports business growth.",
        content: "A solid network infrastructure is the backbone of any modern business. This guide covers the essential components...",
        category: "Network Infrastructure",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        isPublished: true,
      },
    ];

    samplePosts.forEach(post => {
      const blogPost: BlogPost = {
        ...post,
        id: this.currentBlogId++,
        createdAt: new Date(),
      };
      this.blogPosts.set(blogPost.id, blogPost);
    });
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      isActive: true,
      createdAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.isPublished)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }
}

export const storage = new MemStorage();
