import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            Invoice<span className="text-blue-400">Scan</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://app.invoicescan.com/login"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Sign in
          </a>
          <a
            href="https://app.invoicescan.com/signup"
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Start Free Trial
          </a>
        </div>
      </nav>
    </header>
  );
}
