import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, User, Clock, ArrowRight } from "lucide-react";
import siteConfig from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Agency Insights & Technical Guides | ZeenOx",
  description: "Actionable engineering and marketing blueprints for businesses in Tamil Nadu and India. Written directly by technical lead Arun Pandian.",
  alternates: { canonical: `${siteConfig.siteUrl}/blog` },
};

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 bg-background min-h-screen text-foreground">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
            Agency Thinking & Guides
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Practical Guides for{" "}
            <span className="font-serif-accent italic text-primary">Growing Businesses.</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Honest pricing breakdowns, automation blueprints, and conversion advice for founders in Tamil Nadu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 text-xs text-muted-foreground">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Key Takeaways:</p>
                  {post.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <p key={idx} className="text-xs text-foreground/80 line-clamp-2">
                      • {takeaway}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-medium">By {post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Guide</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
