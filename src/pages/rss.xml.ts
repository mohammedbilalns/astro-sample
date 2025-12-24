import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");

  return rss({
    title: "Sample Tech Blog",
    description: "Insights on web, mobile & software development",
    site: "https://sampleastro.netlify.app",
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
