import { Metadata } from "next";
import { Video, Star, Play, CheckCircle, ArrowRight, Clock, Zap, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Video Editing Agency in India | ZeenOx — No.1 Video Editing Services",
  description: "ZeenOx is India's #1 professional video editing agency. We deliver high-retention reel editing, YouTube video editing, motion graphics, and brand films. 50+ brands trust us. Get a free quote today.",
  keywords: [
    "video editing agency India",
    "professional video editing services",
    "best video editing company India",
    "reel editing agency",
    "YouTube video editing services",
    "motion graphics agency India",
    "video editing for businesses",
    "short form video editing",
    "video production company India",
  ],
  alternates: { canonical: "https://zeenox.agency/services/video-editing" },
  openGraph: {
    title: "Professional Video Editing Agency in India | ZeenOx",
    description: "India's #1 video editing agency. High-retention reel editing, YouTube editing, motion graphics. 50+ brands. Free quote today.",
    url: "https://zeenox.agency/services/video-editing",
  },
};

export default function VideoEditingService() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Video Editing Services",
    "alternateName": "Video Editing Agency India",
    "provider": {
      "@type": "Organization",
      "name": "ZeenOx Digital Agency",
      "url": "https://zeenox.agency"
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "description": "Professional video editing services in India including reel editing, YouTube editing, motion graphics, brand films, and ad creatives.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "offerCount": "3",
      "highPrice": "50000",
      "lowPrice": "5000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": "50"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best video editing agency in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ZeenOx is widely considered one of India's best video editing agencies, offering professional reel editing, YouTube editing, motion graphics, and brand film production for 50+ brands across India."
        }
      },
      {
        "@type": "Question",
        "name": "How much does professional video editing cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional video editing in India ranges from ₹5,000 to ₹50,000+ depending on complexity, duration, and deliverable type. ZeenOx offers flexible packages for short-form reels, YouTube edits, and brand films."
        }
      },
      {
        "@type": "Question",
        "name": "Does ZeenOx do reel editing for Instagram and YouTube Shorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ZeenOx specializes in high-retention short-form video editing optimized for Instagram Reels, YouTube Shorts, and TikTok — designed to hook viewers in the first 3 seconds."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide video editing services for healthcare and clinics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ZeenOx has specialized experience creating professional, compliant video content for healthcare providers, clinics, and medical professionals — balancing engagement with professionalism."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is ZeenOx video editing turnaround?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard reels are delivered within 24–48 hours. Long-form YouTube edits take 3–5 business days. Rush delivery is available on request."
        }
      },
      {
        "@type": "Question",
        "name": "Can ZeenOx handle bulk video editing for social media agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer white-label bulk video editing packages for agencies managing multiple clients, with volume discounts on 30+ reels per month."
        }
      },
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How ZeenOx's Video Editing Process Works",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Discovery Call", "text": "We understand your brand, platform, target audience, and content goals." },
      { "@type": "HowToStep", "position": 2, "name": "Raw Footage Submission", "text": "You upload your raw footage to our shared drive." },
      { "@type": "HowToStep", "position": 3, "name": "Expert Editing", "text": "Our editors apply strategic pacing, captions, color grading, and sound design." },
      { "@type": "HowToStep", "position": 4, "name": "Review & Revisions", "text": "You review the edit and request up to 2 rounds of revisions." },
      { "@type": "HowToStep", "position": 5, "name": "Final Delivery", "text": "Final files delivered in your preferred format and resolution." },
    ]
  };

  const features = [
    { icon: Clock, label: "24-48hr Turnaround", desc: "Fast delivery without quality compromise" },
    { icon: Zap, label: "Algorithm-Optimized", desc: "Edits engineered for maximum retention" },
    { icon: Award, label: "50+ Brands Served", desc: "Trusted by businesses across India" },
    { icon: Star, label: "5-Star Rated", desc: "Consistently top-rated by our clients" },
  ];

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <div className="container mx-auto px-6 max-w-5xl">

        {/* Hero */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            #1 Video Editing Agency India
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional Video Editing Agency <br className="hidden md:block" />
            <span className="font-serif-accent italic text-primary">in India</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            ZeenOx is India's leading professional video editing agency. We create high-retention video content — reels, YouTube edits, brand films, and ad creatives — that stop the scroll, hold attention, and drive real business results. Trusted by <strong>50+ brands</strong> across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn-apple inline-flex items-center gap-2">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link href="/#work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/[0.08] bg-white text-[#1D1D1F] hover:bg-black/[0.04] font-semibold text-xs tracking-wide shadow-sm transition-all">
              See Case Studies
            </Link>
          </div>
        </div>

        {/* Feature Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {features.map((f) => (
            <div key={f.label} className="card-apple p-6 text-center">
              <f.icon size={28} className="text-primary mx-auto mb-3" />
              <p className="font-bold text-sm text-foreground">{f.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Core Offerings */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Video size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Reel Editing & Short-Form Content</h2>
            <p className="text-muted-foreground mb-6">
              Algorithms across Instagram, TikTok, and YouTube Shorts favor one thing: retention. We engineer short-form video edits specifically designed to hook the audience in the first three seconds. Our video editing agency uses strategic pacing, viral B-roll, dynamic captions, and platform-specific aspect ratios to maximize watch time.
            </p>
            <ul className="space-y-3">
              {["Dynamic captions and kinetic typography", "Pacing optimized for maximum retention", "Viral-style B-roll and transition integration", "Platform-specific format (9:16, 1:1, 16:9)", "Trending audio and sound design"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Play size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">YouTube Video Editing Agency</h2>
            <p className="text-muted-foreground mb-6">
              Long-form content builds deep trust with your audience. ZeenOx provides comprehensive YouTube editing services for businesses, podcasts, educators, and personal brands — turning raw footage into highly engaging, polished episodes that rank higher and retain viewers longer.
            </p>
            <ul className="space-y-3">
              {["Multi-cam syncing & professional color grading", "Sound design & studio-quality audio mixing", "Narrative structuring for maximum engagement", "Custom intros, outros & brand animations", "Thumbnail design and chapter markers"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Star size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Brand Films & Ad Creatives</h2>
            <p className="text-muted-foreground mb-6">
              Your brand deserves cinematic quality. We produce premium brand films, corporate videos, and high-converting ad creatives for Meta and Google campaigns. Our ad creative edits are built around conversion psychology — designed to lower your CPA and maximize ROAS.
            </p>
            <ul className="space-y-3">
              {["Cinematic color grading & LUT application", "Ad creative variants (hook testing)", "Product showcase and testimonial edits", "Motion graphics & 2D animation", "Multi-platform ad format delivery"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-apple p-10 bg-card/50 backdrop-blur-md">
            <Zap size={48} className="text-primary mb-6" />
            <h2 className="text-2xl font-bold mb-4">Motion Graphics & Animation</h2>
            <p className="text-muted-foreground mb-6">
              Elevate your brand with stunning motion graphics. Our motion design team creates custom 2D animations, animated logos, explainer videos, and eye-catching visual effects that make your content stand out in any feed or presentation.
            </p>
            <ul className="space-y-3">
              {["Animated logo reveals & brand intros", "2D explainer video production", "Lower thirds & social media templates", "Kinetic typography videos", "Custom visual effects (VFX)"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Long-form SEO Content */}
        <div className="prose prose-lg prose-neutral max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Why ZeenOx is India's Best Video Editing Agency</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Producing raw content is only half the battle. Whether you run a healthcare clinic, a jewellery brand, a fitness studio, or a tech startup, the way your video is edited determines how your audience perceives your brand's value. Professional video editing services do more than just trim clips — they establish authority, trigger emotions, and drive action.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At ZeenOx, we don't just edit — we strategize. Before cutting a single frame, we analyze the platform's current algorithm trends, your brand's unique voice, and your audience's behavior patterns. If we are producing ad creatives for paid campaigns, we ensure the pacing aligns with conversion psychology. If we are editing educational content for a clinic, we focus on clarity, trust signals, and professional presentation.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-10">Our Video Editing Process (Step-by-Step)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We operate a streamlined post-production pipeline that guarantees fast turnarounds without compromising our premium quality bar:
          </p>
          <ol className="space-y-3 text-muted-foreground">
            <li><strong>Step 1 — Discovery:</strong> We understand your brand, target audience, platform goals, and content style.</li>
            <li><strong>Step 2 — Footage Review:</strong> Our editors review all raw footage and identify the strongest moments to build around.</li>
            <li><strong>Step 3 — Edit Assembly:</strong> We apply strategic pacing, music selection, and narrative arc to create the first cut.</li>
            <li><strong>Step 4 — Motion & Sound Design:</strong> Captions, color grading, sound effects, and music are layered in for full polish.</li>
            <li><strong>Step 5 — Review & Revisions:</strong> You get 2 rounds of revisions to perfect the final output.</li>
            <li><strong>Step 6 — Final Delivery:</strong> Files delivered in your preferred platform format within the agreed timeline.</li>
          </ol>

          <h3 className="text-2xl font-bold mb-4 mt-10">Industries We Serve</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our video editing agency in India works with businesses across a wide range of industries. We've delivered video content for healthcare clinics, luxury jewellery brands, fitness and wellness studios, real estate companies, restaurants, fashion labels, educational institutions, and tech startups. Each industry requires a different visual language, and our editors are trained to adapt their style to match your brand's identity.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-10">Video Editing Services That Rank #1</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            What sets ZeenOx apart as the No.1 video editing agency in India is our commitment to results, not just aesthetics. Every edit we produce is measured against one benchmark: does it serve the business goal? Whether that's growing a YouTube channel, generating leads through social ads, or building brand awareness through organic reels — our video editing services are always aligned with your larger marketing strategy.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 not-prose">
            {[
              "Video Editing Agency India",
              "Reel Editing Services",
              "YouTube Video Editing",
              "Motion Graphics Agency",
              "Ad Creative Production",
              "Brand Film Production",
              "Short Form Video Editing",
              "Social Media Video Agency",
              "Video Editing for Businesses"
            ].map((kw) => (
              <span key={kw} className="text-xs text-muted-foreground/60 font-medium px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 text-center">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Internal Links */}
        <div className="mb-16 card-apple p-8 bg-primary/5 border-primary/20">
          <h3 className="text-xl font-bold mb-4">Explore Our Other Services</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/web-development" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              <ArrowRight size={14} /> Best Website Development Agency →
            </Link>
            <Link href="/services/seo" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              <ArrowRight size={14} /> SEO Specialist Services →
            </Link>
            <Link href="/services/digital-marketing" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              <ArrowRight size={14} /> Digital Marketing Agency →
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions — Video Editing Agency India</h2>
          <div className="space-y-6">
            {[
              { q: "What is the best video editing agency in India?", a: "ZeenOx is widely considered one of India's best video editing agencies, offering professional reel editing, YouTube editing, motion graphics, and brand film production for 50+ brands across India with 5-star client ratings." },
              { q: "How much does professional video editing cost in India?", a: "Professional video editing in India ranges from ₹5,000 to ₹50,000+ depending on complexity, duration, and deliverable type. ZeenOx offers flexible packages for short-form reels, YouTube edits, and brand films. Contact us for a custom quote." },
              { q: "Does ZeenOx do reel editing for Instagram and YouTube Shorts?", a: "Yes. ZeenOx specializes in high-retention short-form video editing optimized for Instagram Reels, YouTube Shorts, and TikTok — designed to hook viewers in the first 3 seconds and maximize watch completion rate." },
              { q: "Do you provide video editing services for healthcare and clinics?", a: "Yes. ZeenOx has specialized experience creating professional, compliant video content for healthcare providers, clinics, and medical professionals — balancing engagement with professionalism and regulatory standards." },
              { q: "How fast is ZeenOx's video editing turnaround?", a: "Standard reels are delivered within 24–48 hours. Long-form YouTube edits take 3–5 business days. Rush delivery within 12 hours is available on request for urgent projects." },
              { q: "Can ZeenOx handle bulk video editing for social media agencies?", a: "Absolutely. We offer white-label bulk video editing packages for agencies managing multiple clients, with volume discounts on 30+ reels per month and dedicated account management." },
            ].map((faq, i) => (
              <div key={i} className="card-apple p-6">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center card-apple p-12 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Visual Content?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Join 50+ brands that trust ZeenOx as their go-to video editing agency in India. Get a free quote in 24 hours.</p>
          <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
