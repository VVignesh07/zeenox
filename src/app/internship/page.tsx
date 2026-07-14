import { Metadata } from "next";
import { GraduationCap, Code2, Video, Rocket } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Internship in India | ZeenOx Internship Program",
  description: "Join the ZeenOx digital marketing internship program. Gain hands-on experience in video editing, web development, SEO, and marketing with India's leading digital agency. Apply now.",
  keywords: [
    "digital marketing internship India",
    "video editing internship",
    "web development internship Tamil Nadu",
    "digital agency internship program",
    "ZeenOx internship",
    "marketing internship for freshers",
    "learn digital marketing India",
    "internship program Kariapatti",
    "digital media internship",
  ],
  alternates: { canonical: "https://zeenox.agency/internship" },
  openGraph: {
    title: "Digital Marketing Internship | ZeenOx Internship Program",
    description: "Gain real-world experience in video editing, web development, and digital marketing. Apply to ZeenOx's structured internship program.",
    url: "https://zeenox.agency/internship",
  },
};

export default function InternshipPage() {
  const internshipJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "ZeenOx Digital Marketing Internship Program",
    "description": "A structured internship program offering hands-on experience in video editing, web development, SEO, and digital marketing with live client projects.",
    "provider": {
      "@type": "Organization",
      "name": "ZeenOx Digital Agency",
      "url": "https://zeenox.agency"
    },
    "educationalProgramMode": "onsite",
    "occupationalCategory": ["Digital Marketing", "Video Production", "Web Development"],
    "programType": "Internship",
    "timeToComplete": "P3M",
    "offers": {
      "@type": "Offer",
      "category": "Internship",
      "availability": "https://schema.org/InStock"
    },
    "applicationDeadline": "2026-12-31",
    "startDate": "2026-01-01",
    "url": "https://zeenox.agency/internship"
  };

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(internshipJsonLd) }} />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            The ZeenOx <br className="hidden md:block" />
            <span className="font-serif-accent italic text-primary">Internship Program</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just hire talent—we build it. Our highly structured internship program offers real-world experience, mentorship from industry veterans, and a pathway to a full-time career in digital media.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="card-apple p-8 bg-card/50">
            <Video size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Video Production</h3>
            <p className="text-sm text-muted-foreground">Learn advanced editing techniques, color grading, and retention-based cutting on real client projects.</p>
          </div>
          <div className="card-apple p-8 bg-card/50">
            <Rocket size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
            <p className="text-sm text-muted-foreground">Master ad buying, social media strategy, and data analytics. Run campaigns that generate actual revenue.</p>
          </div>
          <div className="card-apple p-8 bg-card/50">
            <Code2 size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Web Development</h3>
            <p className="text-sm text-muted-foreground">Build scalable web applications using React, Next.js, and modern CSS frameworks alongside senior devs.</p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-6">Why Intern at ZeenOx?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most digital marketing internship programs involve fetching coffee and scheduling social media posts. At ZeenOx, interns are integrated directly into our production teams from day one. You will work on live client accounts, participate in creative strategy sessions, and build a portfolio of impactful work.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our goal is to train the next generation of digital talent. We invest heavily in our interns because the most successful graduates of our program are offered full-time positions at the agency.
          </p>
        </div>

        <div className="text-center card-apple p-12 bg-primary/5 border-primary/20">
          <GraduationCap size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Apply for the Next Cohort</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Send us your resume and a link to your best work. Show us why you belong at ZeenOx.</p>
          <a href="mailto:hello@zeenox.agency?subject=Internship Application" className="btn-apple inline-flex">
            Email Your Application
          </a>
        </div>
      </div>
    </main>
  );
}
