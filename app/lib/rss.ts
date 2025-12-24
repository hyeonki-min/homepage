import Parser from "rss-parser";

export type RssPost = {
  title: string;
  link: string;
  publishedAt: string;
  excerpt: string;
};

const parser = new Parser({
  timeout: 10_000,
});

const RSS_URL = "https://hyeonki-min.github.io/feed";

export async function fetchRssPosts(limit = 4): Promise<RssPost[]> {
  const feed = await parser.parseURL(RSS_URL);

  return feed.items
    .filter(item => item.title && item.link)
    .slice(0, limit)
    .map(item => ({
      title: item.title!,
      link: item.link!,
      publishedAt: item.pubDate ?? "",
      excerpt: item.summary ?? "",
    }));
}
