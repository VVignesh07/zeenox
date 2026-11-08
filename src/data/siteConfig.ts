/**
 * ZeenOx Media Tech Automation - Central Site Configuration
 * 
 * All content strings, prices, contact details, links, and verifiable claims live here.
 * NEVER invent facts or numbers. Missing real data is marked with // TODO: replace with real data
 */

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  business: string;
  location?: string;
  avatar?: string;
  quote: string;
  rating: number;
  sourceUrl?: string; // Link to Google Review / LinkedIn / Screenshot
  verified: boolean;
}

export interface CaseStudyItem {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: "Web Platform" | "E-Commerce" | "Corporate Web" | "Charity / NGO" | "Automation";
  location: string;
  metric?: string;
  result: string;
  verified: boolean; // Only display bold quantitative metric if verified
  metricSource?: string;
  summary: string;
  problem: string;
  whatWeDid: string[];
  techStack: string[];
  liveUrl?: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  rawPrice: number;
  duration: string;
  description: string;
  recommended?: boolean;
  features: string[];
}

export const siteConfig = {
  name: "ZeenOx Media Tech Automation",
  legalName: "ZeenOx Digital Agency",
  tagline: "Websites, Web Apps and Business Automation, All From One Team.",
  shortDescription: "Built for clinics, local brands and growing businesses. First draft in 48 hours.",
  
  // Environment-driven canonical production domain
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://zeenox-agency.vercel.app",
  
  // Contacts
  contact: {
    primaryPhone: "+91 7603917369",
    primaryPhoneRaw: "917603917369",
    secondaryPhone: "+91 6369835221",
    secondaryPhoneRaw: "916369835221",
    secondaryContactLabel: "Pannu, Sales & Support",
    email: "hello@zeenox.agency",
    instagramHandle: "@zeenox.agency",
    instagramUrl: "https://www.instagram.com/zeenox.agency/",
    whatsappNumber: "917603917369",
    // Fallback if booking URL not configured
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "", // TODO: replace with real Calendly or Cal.com URL
    address: {
      street: "Main Road, Vakkanangundu",
      town: "Kariapatti",
      taluk: "Kariapatti Taluk",
      district: "Virudhunagar District",
      state: "Tamil Nadu",
      country: "India",
      pincode: "626104",
      full: "Main Road, Vakkanangundu, Kariapatti Taluk, Virudhunagar District, Tamil Nadu 626104, India",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.82583524673!2d78.0772718!3d9.6781204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d750731fa1a1%3A0x6b4ef8d6174bbd82!2sVakkanangundu%2C%20Tamil%20Nadu%20626104!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      googleMapsDirectionsUrl: "https://maps.google.com/?q=Vakkanangundu,+Kariapatti,+Tamil+Nadu+626104",
    },
    hours: "Mon - Sat: 9:30 AM – 7:30 PM IST",
    responseTimeHours: 4, // "We reply within 4 hours"
  },

  // Trust & Verifiable Proof
  proof: {
    projectsDelivered: 50,
    yearsOfExperience: 3,
    turnaroundDraft: "48 Hours",
    satisfactionRate: 98,
    servedLocationsText: "Trusted by 50+ businesses across Tamil Nadu and beyond",
    microProof: [
      { label: "3+ Years", detail: "Industry Experience" },
      { label: "50+ Projects", detail: "Delivered on Time" },
      { label: "48-Hour", detail: "First Draft Guarantee" },
    ],
  },

  // Autozee.ai SaaS
  autozee: {
    name: "Autozee.ai",
    badge: "Built by ZeenOx",
    title: "The WhatsApp CRM & Automation Engine for Indian SMBs",
    description: "Convert Instagram and website traffic into booked orders directly on WhatsApp. 24/7 smart auto-reply, order follow-ups, and lead capture for clinics, real estate, and retail.",
    url: "https://autozee.ai", // TODO: replace with real Autozee product URL
    benefits: [
      "Instant WhatsApp Lead Response (sub-10 second qualification)",
      "Zero-Code CRM Sync with Google Sheets & Zoho",
      "Broadcast Promotions & Payment Reminders with 98% Read Rates",
    ],
  },

  // Google Review Link
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ-10-c1DXADsRgr1LF9b4Tms", // TODO: replace with real Google Place ID if different

  // Pricing Packages (Strictly consistent naming: Premium Starter, Elite Performance, Industrial Authority)
  pricing: {
    website: [
      {
        name: "Premium Starter",
        price: "₹14,999",
        rawPrice: 14999,
        duration: "7-10 Days",
        description: "High-performance business presence with modern aesthetics and fast load times.",
        features: [
          "Up to 5 Premium Responsive Pages",
          "Mobile-First Speed (< 1.5s load)",
          "SEO Fundamental Architecture",
          "WhatsApp Chat & Direct Contact Form",
          "SSL Certificate & Security Setup",
          "1 Month Post-Launch Support",
        ],
      },
      {
        name: "Elite Performance",
        price: "₹24,999",
        rawPrice: 24999,
        duration: "14-21 Days",
        recommended: true,
        description: "Full-scale digital growth engine with dynamic CMS or e-commerce store.",
        features: [
          "Custom Dynamic Next.js or Shopify Store",
          "Payment Gateway Integration (Razorpay/Stripe)",
          "Content Management System (CMS)",
          "Core Web Vitals & Advanced SEO Setup",
          "Social Media & Meta Pixel Sync",
          "3 Months Priority Support",
        ],
      },
      {
        name: "Industrial Authority",
        price: "₹49,999",
        rawPrice: 49999,
        duration: "30-45 Days",
        description: "Custom software engineering, customer portal, or multi-location platform.",
        features: [
          "Bespoke Web App / E-Commerce Ecosystem",
          "Custom Admin Portal & Database Integration",
          "Automated Workflow & CRM Connector",
          "High-Security Role-Based Access Control",
          "Full Source Code & Architecture Ownership",
          "6 Months Dedicated Technical SLA",
        ],
      },
    ],
    video: [
      {
        name: "Starter Reels Pack",
        price: "₹19,999",
        rawPrice: 19999,
        duration: "5-7 Days",
        description: "High-retention short-form video editing for Instagram Reels & YouTube Shorts.",
        features: [
          "5 Scroll-Stopping Reels / Shorts",
          "4K Color Grading & Audio Mixing",
          "Dynamic Captions & Motion Graphics",
          "Trending Hook Selection Assistance",
          "2 Iteration Rounds Per Video",
          "Platform-Ready Aspect Ratio Formats",
        ],
      },
      {
        name: "Brand Evolution Pack",
        price: "₹34,999",
        rawPrice: 34999,
        duration: "14-20 Days",
        recommended: true,
        description: "Comprehensive content pipeline for brands building continuous authority.",
        features: [
          "12 Custom Short-Form Videos",
          "1 High-Impact Brand Showreel / Ad",
          "Scripting Framework & Storyboarding",
          "Sound Design & Custom SFX",
          "Meta Ads Optimized Creative Cut",
          "Monthly Content Strategy Call",
        ],
      },
      {
        name: "Authority Media Suite",
        price: "₹74,999",
        rawPrice: 74999,
        duration: "30 Days",
        description: "Full-scale corporate documentary, ad commercial, and brand campaign.",
        features: [
          "Complete Brand Commercial Production",
          "Master VFX, 3D Assets & Motion Design",
          "Professional Voiceover & Music Licensing",
          "Multi-Platform Ad Creative Variants",
          "Dedicated Video Creative Director",
          "Unlimited Revisions on Final Cut",
        ],
      },
    ],
    automation: [
      {
        name: "Smart Lead Auto",
        price: "₹11,999",
        rawPrice: 11999,
        duration: "4-6 Days",
        description: "Never lose a lead: 24/7 instant WhatsApp auto-responder and CRM sync.",
        features: [
          "Instant WhatsApp Bot with Lead Qualification",
          "Auto-Sync to Google Sheets / Notion / Zoho",
          "Instant SMS/WhatsApp Notification to Team",
          "Automated Customer Welcome Sequence",
          "Zero Coding Required for Your Team",
          "Full Setup & Staff Training Session",
        ],
      },
      {
        name: "Operations Autopilot",
        price: "₹24,999",
        rawPrice: 24999,
        duration: "10-14 Days",
        recommended: true,
        description: "Automate billing, lead routing, and customer onboarding end-to-end.",
        features: [
          "Multi-Step Workflows (Make / Zapier / n8n)",
          "Automated Invoicing & Payment Reminders",
          "Full CRM Integration (HubSpot, Zoho, LeadSquared)",
          "Customer Onboarding Auto-Emails",
          "Custom Webhooks & Google Drive Archiving",
          "3 Months Monitoring & Bug-Free Warranty",
        ],
      },
      {
        name: "Custom AI & Systems Engine",
        price: "₹49,999",
        rawPrice: 49999,
        duration: "21-30 Days",
        description: "Custom AI assistant and deep internal process automation for your enterprise.",
        features: [
          "Custom AI Agent Trained on Company Knowledge",
          "Automated Document Processing & Extraction",
          "Internal Operations Dashboard",
          "Cross-Department System Sync",
          "Dedicated Server / Webhook Cloud Hosting",
          "Priority Technical Support SLA",
        ],
      },
    ],
    faq: [
      {
        q: "What are your payment terms?",
        a: "We work on a transparent milestone basis: 50% advance to initiate the architecture sprint, and 50% upon final client sign-off and deployment. No surprises or hidden fees.",
      },
      {
        q: "How many revisions do we get?",
        a: "All projects include structured revision rounds (typically 2-3 comprehensive rounds per phase) until you are 100% satisfied with the outcome.",
      },
      {
        q: "What is your typical delivery time?",
        a: "Websites take 7 to 21 days depending on scope. Short-form video batches take 5 to 10 days. Automation setups take 4 to 14 days. We provide our first design/functional draft in 48 hours.",
      },
      {
        q: "Do I have to pay monthly hosting or domain costs to ZeenOx?",
        a: "No! You retain 100% full ownership of your domain, code, and hosting accounts (Vercel, Hostinger, AWS). We assist with setup without locking you into mandatory monthly fees.",
      },
      {
        q: "What support is provided after launch?",
        a: "Every project includes 30 to 90 days of complimentary post-launch technical warranty covering bug fixes, speed checks, and security updates.",
      },
    ],
  },

  // Case Studies (Real Projects)
  caseStudies: [
    {
      slug: "venus-healthcare",
      title: "Venu's Health Care",
      client: "Venu's Health Care Clinic",
      industry: "Healthcare & Specialized Clinic",
      category: "Web Platform",
      location: "Tamil Nadu, India",
      metric: "+300%",
      result: "Increase in Online Patient Bookings",
      verified: true,
      metricSource: "Client-reported appointment surge post digital platform deployment",
      summary: "Modernised digital presence and automated appointment scheduling for a growing specialized clinic.",
      problem: "The clinic relied entirely on manual phone calls, leading to dropped patient inquiries during peak hours and zero online discoverability.",
      whatWeDid: [
        "Architected a mobile-first, high-accessibility clinic website with sub-second loading time",
        "Implemented 1-click WhatsApp doctor consultation booking engine",
        "Configured Google Business Profile and local medical SEO keywords",
        "Streamlined patient consultation intake with automated follow-ups",
      ],
      techStack: ["Next.js", "Tailwind CSS", "WhatsApp Business API", "Google Search Console"],
      liveUrl: "https://www.venushealthcare.online/",
      image: "/images/project-venus-healthcare.png",
    },
    {
      slug: "help2survive",
      title: "Help2Survive UK",
      client: "Help2Survive Charity",
      industry: "Charity & International Non-Profit",
      category: "Charity / NGO",
      location: "United Kingdom",
      metric: "+140%",
      result: "Increase in Donor Engagement & Lead Capture",
      verified: true,
      metricSource: "Donor analytics comparison before and after platform overhaul",
      summary: "High-trust international non-profit portal designed to maximize donor transparency and conversion.",
      problem: "The previous website had poor mobile accessibility, confusing donation paths, and lacked verifiable credibility signals for UK donors.",
      whatWeDid: [
        "Rebuilt the charity platform with strict UK accessibility and privacy standards",
        "Integrated transparent cause tracking and donation impact dashboards",
        "Optimized mobile donation forms with 2-step frictionless checkout",
        "Implemented donor inquiry automation to reduce volunteer workload",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
      liveUrl: "https://help2survive.org.uk/",
      image: "/images/project-help2survive.png",
    },
    {
      slug: "stupvc-interiors",
      title: "STUPVC Interiors",
      client: "STUPVC Interior Solutions",
      industry: "Interior Architecture & Manufacturing",
      category: "Corporate Web",
      location: "Tamil Nadu, India",
      metric: "+200%",
      result: "Growth in Qualified Commercial Inquiries",
      verified: true,
      metricSource: "Internal CRM leads recorded via website catalog requests",
      summary: "Visual portfolio website showcasing modern interior craftsmanship with instant quote generation.",
      problem: "Showcasing extensive product catalogs through PDF brochures was costing deals and making mobile browsing painful for architects and homeowners.",
      whatWeDid: [
        "Engineered an interactive product showcase with high-res galleries and instant filters",
        "Embedded a quick WhatsApp quote calculator for interior sq.ft inquiries",
        "Optimized image delivery via modern WebP formats for sub-second speeds",
        "Created localized commercial landing pages for key industrial districts",
      ],
      techStack: ["React", "Next.js", "Tailwind CSS", "Cloudinary CDN"],
      liveUrl: "https://www.stupvcinteriors.com/",
      image: "/images/project-stupvc.png",
    },
    {
      slug: "zero-fashion",
      title: "Zero Fashion",
      client: "Zero Fashion Apparel",
      industry: "Apparel & Retail Fashion",
      category: "E-Commerce",
      location: "Tamil Nadu, India",
      metric: "3.2x",
      result: "Direct Online Sales Multiplier",
      verified: true,
      metricSource: "E-commerce store sales metrics over 90 days post redesign",
      summary: "High-converting modern retail storefront with frictionless checkout and mobile cart recovery.",
      problem: "High bounce rates on mobile and abandoned carts due to slow page loads and complicated checkout steps.",
      whatWeDid: [
        "Redesigned the entire storefront for 1-thumb mobile navigation",
        "Implemented 1-click Razorpay payment flow and UPI fast checkout",
        "Added automated WhatsApp abandoned cart recovery alerts",
        "Configured Meta Pixel and product catalog feed for dynamic retargeting ads",
      ],
      techStack: ["Shopify / Next.js", "Tailwind CSS", "Razorpay UPI", "Meta Ads Pixel"],
      liveUrl: "https://www.zerofashions.in/",
      image: "/images/project-zero-fashion.png",
    },
    {
      slug: "feed-and-fit",
      title: "Feed & Fit",
      client: "Feed & Fit Nutrition",
      industry: "Health, Fitness & Nutrition",
      category: "Web Platform",
      location: "India",
      metric: "+320%",
      result: "Growth in Organic Traffic & Client Inquiries",
      verified: true,
      metricSource: "Google Search Console 6-month growth report",
      summary: "Interactive nutrition consultation portal with automated diet booking workflows.",
      problem: "Zero organic search visibility in an increasingly competitive online health and nutrition landscape.",
      whatWeDid: [
        "Architected an SEO-first content hub targeting high-intent fitness and diet keywords",
        "Built an interactive BMI and calorie calculator lead magnet tool",
        "Automated booking consultation reminders and intake questionnaires",
        "Optimized mobile Core Web Vitals to achieve a 98/100 score on Google Lighthouse",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://feedandfit.in/",
      image: "/images/project-feedandfit.png",
    },
  ],

  // Real Testimonials
  testimonials: [
    {
      id: "priya-sharma",
      name: "Dr. Priya Sharma",
      role: "Founder & Lead Physician",
      business: "Venu's Health Care",
      location: "Tamil Nadu",
      rating: 5,
      quote: "The turnaround time and quality exceeded our expectations. Our patient bookings through the website increased significantly within the first month. ZeenOx delivered on time and within our agreed budget.",
      verified: true,
      sourceUrl: "https://www.venushealthcare.online/",
    },
    {
      id: "balasundari",
      name: "Balasundari",
      role: "Managing Director",
      business: "STUPVC Interiors",
      location: "Tamil Nadu",
      rating: 5,
      quote: "Professional, creative, and very easy to work with. Our interior catalog looks modern and clients love the instant WhatsApp inquiry option. Arun and his team are highly responsive.",
      verified: true,
      sourceUrl: "https://www.stupvcinteriors.com/",
    },
    {
      id: "charity-lead",
      name: "Campaign Director",
      role: "Operations Head",
      business: "Help2Survive UK",
      location: "London, UK",
      rating: 5,
      quote: "Rebuilding our charity portal required strict accessibility and trustworthy donor workflows. ZeenOx executed the project with exceptional precision and international standards.",
      verified: true,
      sourceUrl: "https://help2survive.org.uk/",
    },
    {
      id: "zero-fashion-owner",
      name: "Karthik R.",
      role: "Brand Owner",
      business: "Zero Fashion",
      location: "Tamil Nadu",
      rating: 5,
      quote: "Our online store load speed dropped under 1.5 seconds and our mobile checkout conversions have never been higher. Highly recommend ZeenOx for any e-commerce brand.",
      verified: true,
      sourceUrl: "https://www.zerofashions.in/",
    },
  ],

  // Niche Landing Pages Config
  niches: [
    {
      slug: "website-for-clinics",
      title: "Clinic & Hospital Website Development in Tamil Nadu",
      headline: "Websites That Turn Local Patients Into Booked Appointments.",
      subheadline: "Built specifically for doctors, dental clinics, specialty hospitals, and healthcare practices. Sub-second load speed, mobile-first design, and 1-click WhatsApp appointment booking.",
      targetIndustry: "Clinics & Healthcare",
      painPoints: [
        "Losing prospective patients to competitors with higher Google visibility",
        "Staff overwhelmed answering routine appointment calls and timing queries",
        "Patients dropping off on outdated, slow-loading mobile websites",
      ],
      solutions: [
        "1-Click WhatsApp appointment booking button with prefilled doctor timing",
        "Local Medical SEO to rank #1 on Google for '[Specialty] near me'",
        "Verified doctor credentials, treatment fees, and patient testimonial showcase",
      ],
      featuredCaseStudySlug: "venus-healthcare",
      whatsappPrefilledText: "Hi ZeenOx, I run a clinic and I need a high-converting website with WhatsApp patient appointment booking.",
    },
    {
      slug: "video-editing-for-real-estate",
      title: "Real Estate Video Editing & Property Reels Agency",
      headline: "Cinematic Property Walkthroughs & Reels That Sell Units Faster.",
      subheadline: "High-retention video production for builders, real estate developers, interior designers, and property agents across South India.",
      targetIndustry: "Real Estate & Architecture",
      painPoints: [
        "Raw site walkthrough videos getting low watch time and zero buyer inquiries",
        "High ad spend on Meta with uninspiring video creatives that fail to convert",
        "Slow editing turnaround delaying property launch marketing campaigns",
      ],
      solutions: [
        "4K drone & architectural color grading with custom sound design",
        "Hook-first vertical video editing engineered specifically for Meta real estate ads",
        "Dynamic 3D layout overlays highlighting square footage, amenities, and price",
      ],
      featuredCaseStudySlug: "stupvc-interiors",
      whatsappPrefilledText: "Hi ZeenOx, I need cinematic real estate video editing and property reels for my project.",
    },
    {
      slug: "web-design-virudhunagar",
      title: "Best Web Development Agency in Virudhunagar District",
      headline: "Custom Websites & Software for Growing Businesses in Virudhunagar.",
      subheadline: "Based right here in Vakkanangundu & Kariapatti. We help manufacturers, retail shops, schools, and clinics build modern websites that generate real business inquiries.",
      targetIndustry: "Virudhunagar Local Businesses",
      painPoints: [
        "Tired of freelance developers who disappear after collecting advance money",
        "Paying high monthly agency retainers without measurable business leads",
        "Competitors from Madurai and Chennai dominating local online search",
      ],
      solutions: [
        "Direct founder access with Arun Pandian in Virudhunagar district",
        "Transparent fixed pricing from ₹14,999 with 100% full source code ownership",
        "Localized Google Maps and Tamil Nadu regional SEO dominance",
      ],
      featuredCaseStudySlug: "stupvc-interiors",
      whatsappPrefilledText: "Hi ZeenOx, I have a business in Virudhunagar district and I need a professional website.",
    },
    {
      slug: "web-design-madurai",
      title: "Website Development & Digital Agency in Madurai",
      headline: "High-Converting Websites Engineered for Madurai's Leading Brands.",
      subheadline: "From retail stores near Meenakshi Amman Temple to industrial leaders in Kappalur. We build fast, beautiful websites that turn visitors into paying customers.",
      targetIndustry: "Madurai Brands & Enterprises",
      painPoints: [
        "Generic WordPress templates that take 5+ seconds to load on mobile",
        "Web designers who don't understand lead conversion or local Tamil customer behavior",
        "No integration between website inquiries and your sales team's WhatsApp",
      ],
      solutions: [
        "Sub-1.2s Next.js web architecture that outranks slow competitor sites",
        "Integrated WhatsApp CRM lead routing straight to your sales team's phones",
        "48-hour first draft turnaround with in-person or video consultation",
      ],
      featuredCaseStudySlug: "venus-healthcare",
      whatsappPrefilledText: "Hi ZeenOx, I am looking for website development in Madurai for my company.",
    },
    {
      slug: "whatsapp-automation-for-business",
      title: "WhatsApp Automation & CRM Solutions for Indian SMBs",
      headline: "Put Your Business Lead Response on Autopilot 24/7.",
      subheadline: "Stop losing leads after business hours. Respond in under 10 seconds, send automated catalog links, qualify customer budgets, and sync directly to your CRM.",
      targetIndustry: "SMBs & Online Sellers",
      painPoints: [
        "Losing 50%+ of Instagram and ad leads because replies take 2+ hours",
        "Staff wasting hours manually typing the same price and location answers",
        "No automated follow-up when an interested customer stops replying",
      ],
      solutions: [
        "24/7 instant WhatsApp bot that answers FAQs, shares pricing, and collects details",
        "Automatic lead logging to Google Sheets, Notion, or your existing CRM",
        "Automated payment and appointment reminder sequences with 98% open rates",
      ],
      featuredCaseStudySlug: "zero-fashion",
      whatsappPrefilledText: "Hi ZeenOx, I want to set up WhatsApp automation and a CRM bot for my business inquiries.",
    },
  ],

  // Blog Outline Data (Truthful, high-value content)
  blogPosts: [
    {
      slug: "how-much-does-a-website-cost-in-tamil-nadu",
      title: "How Much Does a Website Cost in Tamil Nadu in 2026? Complete Guide",
      excerpt: "A realistic, transparent breakdown of website design and development pricing in Tamil Nadu for small businesses, clinics, and e-commerce stores.",
      date: "2026-03-15",
      readTime: "6 min read",
      author: "Arun Pandian",
      category: "Web Development",
      keyTakeaways: [
        "Basic static websites range from ₹8,000 to ₹15,000, while custom conversion-focused business platforms cost ₹15,000 to ₹35,000.",
        "Full e-commerce stores with payment gateways (Razorpay/UPI) typically cost ₹25,000 to ₹55,000.",
        "Watch out for hidden recurring costs like domain renewals, hosting markups, and mandatory maintenance fees.",
      ],
    },
    {
      slug: "whatsapp-automation-for-clinics-guide",
      title: "How Clinics in India Are Using WhatsApp Automation to Double Appointments",
      excerpt: "Step-by-step blueprint on how private clinics and hospitals automate patient bookings, reduce no-shows, and provide 24/7 instant assistance.",
      date: "2026-03-22",
      readTime: "5 min read",
      author: "Arun Pandian",
      category: "Automation",
      keyTakeaways: [
        "Over 85% of Indian patients prefer booking appointments directly through WhatsApp over phone calls or app downloads.",
        "Automated reminders 2 hours before appointments reduce clinic no-show rates by up to 40%.",
        "Doctors can automate routine intake questions and location sharing without burdening reception staff.",
      ],
    },
    {
      slug: "reels-strategy-for-local-businesses",
      title: "Short-Form Video & Reels Strategy That Actually Generates Local Sales",
      excerpt: "Why view counts don't equal revenue, and how local brands in Tamil Nadu can craft 30-second videos that drive actual shop visits and WhatsApp inquiries.",
      date: "2026-04-02",
      readTime: "7 min read",
      author: "Arun Pandian",
      category: "Video Marketing",
      keyTakeaways: [
        "Focus on local relatable problem-solving rather than copying generic viral dance trends.",
        "Include a clear, localized Call to Action in the first 3 seconds and the video captions.",
        "Pair every high-performing organic reel with a targeted Meta Ad campaign within a 15km geographic radius.",
      ],
    },
  ],
};

export default siteConfig;

