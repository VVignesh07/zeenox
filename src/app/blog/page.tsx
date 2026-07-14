import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Blog | ZeenOx Digital Agency",
  description: "Read our latest insights, case studies, and ultimate guides on video marketing, digital transformation, and web development.",
};

const blogPosts = [
  {
    title: "How Video Automation is Changing South Indian Retail",
    slug: "video-automation-south-indian-retail",
    excerpt: "Retailers are using AI and automated video pipelines to produce daily social content. Here's how you can do it too.",
    category: "Video Marketing",
    author: "Arun",
    date: "Oct 24, 2026",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "The Ultimate Guide to Local SEO for Clinics in 2026",
    slug: "local-seo-for-clinics-2026",
    excerpt: "Stop losing patients to competitors. A step-by-step guide to dominating the Google Local Pack in your city.",
    category: "SEO",
    author: "ZeenOx Team",
    date: "Oct 15, 2026",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Why Your Next.js Website Needs a Headless CMS",
    slug: "nextjs-headless-cms-benefits",
    excerpt: "Decoupling your frontend from your content is no longer a luxury. Explore the performance and SEO benefits of a headless architecture.",
    category: "Web Development",
    author: "Arun",
    date: "Oct 02, 2026",
    color: "from-orange-500/20 to-rose-500/20",
  }
];

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Our Thinking <br className="hidden md:block" />
            <span className="font-serif-accent italic text-primary">Out Loud</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Actionable strategies, industry reports, and deep dives into the mechanics of digital growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer flex flex-col h-full">
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className={`aspect-video rounded-3xl bg-gradient-to-br ${post.color} mb-6 overflow-hidden relative card-apple transition-transform duration-500 group-hover:-translate-y-2`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/20 backdrop-blur-sm">
                    <span className="h-14 w-14 rounded-full bg-background flex items-center justify-center text-primary shadow-xl">
                      <ArrowUpRight size={24} />
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col px-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground leading-snug mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
