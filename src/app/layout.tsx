import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ['normal', 'italic'] });

const BASE_URL = "https://zeenox.agency";
const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/jLoU2MXZvaYhOfgJn3Q8noByHry1/social-images/social-1772335584493-download_(3).webp";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ZeenOx — No.1 Digital Agency in India | Video Editing, Web Development & SEO",
    template: "%s | ZeenOx Digital Agency",
  },
  description: "ZeenOx is India's #1 full-service digital agency specializing in professional video editing, website development, SEO, digital marketing, and automation. 50+ brands trust us. Book a free discovery call today.",
  keywords: [
    "video editing agency India",
    "website development company India",
    "SEO specialist India",
    "best digital agency India",
    "No 1 digital agency",
    "professional video editing services",
    "best website development agency",
    "SEO agency India",
    "digital marketing agency India",
    "web development company India",
    "ZeenOx",
    "ZeenOx agency",
    "video editing company",
    "motion graphics agency",
    "automation agency India",
    "digital marketing agency Kariapatti",
    "website development Kariapatti",
    "digital agency Virudhunagar district",
    "best digital agency Tamil Nadu",
  ],
  authors: [{ name: "ZeenOx Digital Agency", url: BASE_URL }],
  creator: "ZeenOx Digital Agency",
  publisher: "ZeenOx Digital Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "ZeenOx Digital Agency",
    title: "ZeenOx — No.1 Digital Agency in India | Video Editing, Web Development & SEO",
    description: "India's #1 full-service digital agency. Professional video editing, website development, SEO, and digital marketing. 50+ brands. Book a free discovery call.",
    images: [{
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      alt: "ZeenOx Digital Agency — India's No.1 Agency for Video Editing, Web Development & SEO",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ZeenOxAgency",
    creator: "@ZeenOxAgency",
    title: "ZeenOx — No.1 Digital Agency in India | Video Editing, Web Development & SEO",
    description: "India's #1 full-service digital agency. Professional video editing, website development, SEO, and digital marketing. 50+ brands. Book a free discovery call.",
    images: [OG_IMAGE],
  },
  verification: {
    google: "zeenox-google-verification",
  },
  category: "Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "name": "ZeenOx Digital Agency",
    "alternateName": ["ZeenOx", "Zeenox Agency", "ZeenOx Media"],
    "url": "https://zeenox.agency",
    "logo": "https://zeenox.agency/images/logo2.png",
    "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/jLoU2MXZvaYhOfgJn3Q8noByHry1/social-images/social-1772335584493-download_(3).webp",
    "description": "ZeenOx is India's No.1 full-service digital agency specializing in professional video editing, website development, SEO, digital marketing, and automation. Trusted by 50+ brands across India.",
    "email": "hello@zeenox.agency",
    "telephone": "+917603917369",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kariapatti",
      "addressLocality": "Kariapatti",
      "addressRegion": "Tamil Nadu",
      "postalCode": "626106",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.2193",
      "longitude": "77.5702"
    },
    "areaServed": [
      { "@type": "City", "name": "Kariapatti" },
      { "@type": "AdministrativeArea", "name": "Virudhunagar district" },
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": [
      "Video Editing",
      "Website Development",
      "SEO Services",
      "Digital Marketing",
      "Automation",
      "Motion Graphics"
    ],
    "sameAs": [
      "https://www.instagram.com/zeenox.agency/",
      "https://www.linkedin.com/company/zeenox-agency",
      "https://www.youtube.com/@zeenoxagency",
      "https://www.facebook.com/zeenoxagency"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Agency Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Editing Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation" } }
      ]
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zeenox.agency" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zeenox.agency/services/video-editing" },
      { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://zeenox.agency/blog" }
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ZeenOx Digital Agency",
    "url": "https://zeenox.agency",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zeenox.agency/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en-IN" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Geo tags pinned to Kariapatti, Virudhunagar district */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Kariapatti, Virudhunagar, Tamil Nadu" />
        <meta name="geo.position" content="9.2193;77.5702" />
        <meta name="ICBM" content="9.2193, 77.5702" />
        <meta name="theme-color" content="#39ff14" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
