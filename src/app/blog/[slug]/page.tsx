import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, CheckCircle2, MessageCircle } from "lucide-react";
import siteConfig from "@/data/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = siteConfig.blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found | ZeenOx" };

  return {
    title: `${post.title} | ZeenOx Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = siteConfig.blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const prefilledWa = `Hi Arun, I read your article "${post.title}" on ZeenOx blog and would like to ask a question.`;
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(prefilledWa)}`;

  return (
    <main className="pt-28 sm:pt-36 pb-20 bg-background min-h-screen text-foreground">
      <article className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 pb-8 border-b border-border/50">
          <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
            <span>•</span>
            <span>Published by {post.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Key Takeaways Box */}
        <div className="p-6 rounded-3xl bg-card border border-primary/30 mb-10 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
            Key Architecture Takeaways
          </h2>
          <div className="space-y-2.5 pt-1">
            {post.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            When building or upgrading digital infrastructure for businesses in Tamil Nadu, founders frequently ask whether to prioritize flashy aesthetics or conversion speed. The data across our 50+ deployed platforms is conclusive: <strong>clarity and speed win every time</strong>.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            Why Generic Templates Fail
          </h3>
          <p>
            Most off-the-shelf templates look attractive in demos but fail in real production. They bundle dozens of unneeded scripts, deliver bloated page sizes (3MB+), and load in 4 to 6 seconds on 4G networks in Tier-2 and Tier-3 cities.
          </p>
          <p>
            By contrast, a modern Next.js or headless architecture delivers pages under 1.2 seconds, uses localized SEO keywords that rank in Virudhunagar, Madurai, and Chennai, and immediately routes qualified prospects into your WhatsApp inbox.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            Implementation Next Steps
          </h3>
          <p>
            Whether you run a clinic, real estate firm, or retail e-commerce brand, audit your current conversion funnel before spending money on ads. If your site doesn't load in under 2 seconds on mobile, 40%+ of your paid traffic leaves before reading a single word.
          </p>
        </div>

        {/* Founder WhatsApp Action Box */}
        <div className="mt-14 p-8 rounded-3xl bg-foreground/[0.02] border border-primary/30 text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">
            Have questions about this strategy for your business?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            Discuss your requirements directly with Arun Pandian on WhatsApp. We provide honest feedback and fixed-scope quotes.
          </p>
          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <MessageCircle size={15} />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

