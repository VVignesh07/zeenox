import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./Providers";
import siteConfig from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = siteConfig.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "ZeenOx",
  title: {
    default: "ZeenOx — Digital Agency in Tamil Nadu | Websites, Apps & Automation",
    template: "%s | ZeenOx Digital Agency",
  },
  description: "ZeenOx is a full-service digital agency specializing in high-converting websites, web apps, and WhatsApp automation in Tamil Nadu, India. First draft in 48 hours.",
  keywords: [
    "website development agency Tamil Nadu",
    "web development company India",
    "video editing agency Tamil Nadu",
    "WhatsApp automation agency India",
    "best digital agency Virudhunagar",
    "web design Madurai",
    "website development Kariapatti",
    "ZeenOx agency",
    "Autozee WhatsApp CRM",
    "clinic website development",
    "real estate video editing",
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
    title: "ZeenOx — Digital Agency in Tamil Nadu | Websites, Apps & Automation",
    description: "Built for clinics, local brands, and growing businesses in Tamil Nadu. High-converting websites, web apps, and WhatsApp automation.",
    images: [
      {
        url: `${BASE_URL}/images/founder-arun.webp`,
        width: 1200,
        height: 630,
        alt: "ZeenOx Media Tech Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeenOx — Websites, Apps and WhatsApp Automation",
    description: "Built for clinics, local brands, and growing businesses in Tamil Nadu. First draft in 48 hours.",
    images: [`${BASE_URL}/images/founder-arun.webp`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  // JSON-LD Structured Data
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo2.png`,
    image: `${BASE_URL}/images/founder-arun.webp`,
    description: siteConfig.shortDescription,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.primaryPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.town,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.6781",
      longitude: "78.0772",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Kariapatti" },
      { "@type": "AdministrativeArea", name: "Virudhunagar District" },
      { "@type": "City", name: "Madurai" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      siteConfig.contact.instagramUrl,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Engineering & Media Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Converting Website Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web & Mobile App Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & WhatsApp Business Automation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Short-Form Video Production & Reels" } },
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${BASE_URL}/#work` },
      { "@type": "ListItem", position: 3, name: "Pricing", item: `${BASE_URL}/#pricing` },
      { "@type": "ListItem", position: 4, name: "Blog", item: `${BASE_URL}/blog` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.pricing.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <html lang="en-IN" className="scroll-smooth light" style={{ colorScheme: "light" }} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Virudhunagar, Tamil Nadu, India" />
        <meta name="geo.position" content="9.6781;78.0772" />
        <meta name="ICBM" content="9.6781, 78.0772" />
        
        {/* UTM Parameter Capture Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var urlParams = new URLSearchParams(window.location.search);
                  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function(param) {
                    if (urlParams.get(param)) {
                      sessionStorage.setItem(param, urlParams.get(param));
                    }
                  });
                  if (document.referrer && !sessionStorage.getItem('referrer')) {
                    sessionStorage.setItem('referrer', document.referrer);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />

        {/* Structured Data */}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Microsoft Clarity (Only if NEXT_PUBLIC_CLARITY_ID is configured) */}
        {clarityId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              `,
            }}
          />
        )}

        {/* Meta Pixel (Only if NEXT_PUBLIC_META_PIXEL_ID is configured) */}
        {metaPixelId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </head>

      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {/* Google Analytics (Only if NEXT_PUBLIC_GA_ID is configured) */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
