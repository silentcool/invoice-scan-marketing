import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on invoice processing, job costing, and running a trades business smarter.",
};

const posts = [
  {
    slug: "why-manual-invoice-entry-kills-profit-margins",
    title: "Why Manual Invoice Entry Is Killing Your Profit Margins",
    excerpt:
      "The average trades contractor spends 4+ hours a week on invoice data entry. Here's what that actually costs you — and how to get that time back.",
    date: "March 10, 2026",
    readTime: "5 min read",
    category: "Business",
  },
  {
    slug: "job-costing-101-for-contractors",
    title: "Job Costing 101 for Contractors",
    excerpt:
      "If you don't know your actual cost per job, you're guessing at your margins. A practical guide to setting up job costing from scratch.",
    date: "March 5, 2026",
    readTime: "8 min read",
    category: "Job Costing",
  },
  {
    slug: "quickbooks-online-for-trades-businesses",
    title: "QuickBooks Online for Trades: What to Set Up First",
    excerpt:
      "Most trades businesses set up QuickBooks wrong. Here's the chart of accounts structure that actually makes job costing work.",
    date: "February 28, 2026",
    readTime: "6 min read",
    category: "QuickBooks",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-gray-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Insights on invoice processing, job costing, and running a trades
          business smarter.
        </p>

        <div className="mt-16 space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-white/10 pb-12 last:border-0"
            >
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white transition group-hover:text-blue-400 sm:text-2xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mt-3 leading-7 text-gray-400">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition hover:text-blue-300"
              >
                Read more <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-gray-800/50 p-8 text-center">
          <h3 className="text-lg font-semibold text-white">
            Get new posts in your inbox
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            We write about invoice automation, job costing, and trades business
            operations. No spam.
          </p>
          <form className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-full border border-white/20 bg-gray-900 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-64"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
