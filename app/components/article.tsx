import Link from "next/link";
import { RssPost } from "@/lib/rss";

type Props = {
  posts?: RssPost[];
};

export default function Articles({ posts = [] }: Props) {
  return (
    <section className="">
      <h1 className="mb-10 text-4xl font-semibold tracking-tighter">
        Writing
      </h1>

      {posts.length === 0 && (
        <p className="text-sm text-slate-500">
          게시글을 불러올 수 없습니다.
        </p>
      )}

      <ol className="space-y-4">
        {posts.map((post) => (
          <li key={post.link} className="">
            {/* Date */}
            <time
              className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
              dateTime={post.publishedAt}
            >
              {formatDate(post.publishedAt)}
            </time>

            {/* Title */}
            <h3 className="mt-2 text-lg font-medium leading-snug text-slate-200">
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition-colors"
              >
                {post.title}
              </Link>
            </h3>

            {/* Excerpt */}
            <p className="mt-2 text-sm leading-normal text-slate-400 line-clamp-2">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-4 mb-12">
        <Link
          href="https://hyeonki-min.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-200 hover:bg-neutral-800 hover:border-slate-500 transition-all duration-200 group"
        >
          View all posts
        </Link>
      </div>
    </section>
  );
}

/* ---------- utils ---------- */
function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}
