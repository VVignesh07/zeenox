import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="pt-32 pb-24 bg-background min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="mb-8">
          <span className="text-[120px] md:text-[180px] font-extrabold leading-none bg-gradient-to-b from-primary to-primary/20 bg-clip-text text-transparent">
            404
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Page Not Found
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 justify-center"
          >
            <Home size={16} /> Go to Homepage
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-full border border-white/10 bg-card text-foreground hover:bg-white/10 font-semibold transition-all"
          >
            <Search size={16} /> Contact Us
          </Link>
        </div>

        <div className="card-apple p-8 bg-card/50 backdrop-blur-md">
          <h2 className="text-lg font-bold mb-4">Explore Our Services</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/services/video-editing"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={12} className="rotate-180" /> Video Editing
            </Link>
            <Link
              href="/services/web-development"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={12} className="rotate-180" /> Web Development
            </Link>
            <Link
              href="/services/seo"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={12} className="rotate-180" /> SEO Services
            </Link>
            <Link
              href="/services/digital-marketing"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={12} className="rotate-180" /> Digital Marketing
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={12} className="rotate-180" /> Our Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
