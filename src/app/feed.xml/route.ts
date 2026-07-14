import { NextResponse } from 'next';

export async function GET() {
  const siteUrl = "https://zeenox.agency";
  
  // Later we can import the blog posts here dynamically.
  // For now, we'll syndicate the main case studies and portfolio.
  const posts = [
    {
      title: "Rebuilt web presence for a UK-based charity",
      description: "Healthcare Marketing Agency Case Study: Improving accessibility and lead capture by 140%.",
      url: `${siteUrl}/work`,
      date: new Date().toUTCString(),
    },
    {
      title: "10th-anniversary campaign design for a special-needs rehabilitation center",
      description: "Clinic Marketing Case Study: Digital rollout and branding.",
      url: `${siteUrl}/work`,
      date: new Date().toUTCString(),
    },
    {
      title: "ZeenOx Internship Program",
      description: "Join ZeenOx's structured internship program and get hands-on experience in Video Editing, Marketing, and Web Development.",
      url: `${siteUrl}/internship`,
      date: new Date().toUTCString(),
    }
  ];

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>ZeenOx Digital Agency - Insights &amp; Work</title>
      <link>${siteUrl}</link>
      <description>Latest case studies, insights, and news from ZeenOx Media, Tech, and Automation.</description>
      <language>en</language>
      <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
      ${posts
        .map(
          (post) => `
        <item>
          <title>${post.title}</title>
          <link>${post.url}</link>
          <guid isPermaLink="true">${post.url}</guid>
          <description>${post.description}</description>
          <pubDate>${post.date}</pubDate>
        </item>`
        )
        .join("")}
    </channel>
  </rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
