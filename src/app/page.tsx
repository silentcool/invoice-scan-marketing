import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InvoiceScan — Stop Typing Invoices. Start Scanning Them.",
};

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Extraction",
    description:
      "Snap a photo or forward an email. Our AI reads vendor names, line items, amounts, and dates — no manual entry required.",
  },
  {
    icon: "🔨",
    title: "Built for the Trades",
    description:
      "Electricians, plumbers, HVAC, general contractors — map every invoice line to your job cost codes automatically.",
  },
  {
    icon: "📊",
    title: "Job Costing in Real Time",
    description:
      "See exactly where every dollar went on each job. Compare estimates to actuals before the project closes.",
  },
  {
    icon: "🔄",
    title: "QuickBooks Sync",
    description:
      "One-click sync to QuickBooks Online. Approved invoices post as bills with the right class and job code attached.",
  },
  {
    icon: "✉️",
    title: "Email Intake",
    description:
      "Forward vendor emails to your unique InvoiceScan inbox. Attachments are parsed automatically — no app switching.",
  },
  {
    icon: "✅",
    title: "Approval Workflows",
    description:
      "Route invoices to the right approver. Full audit trail, bulk approve, and status tracking out of the box.",
  },
];

const testimonials = [
  {
    quote:
      "We used to spend 3 hours a week just keying invoices into QuickBooks. InvoiceScan cut that to 20 minutes. It's a no-brainer.",
    name: "Marcus T.",
    role: "Owner, Tri-State Electrical",
  },
  {
    quote:
      "The job costing feature alone paid for itself in the first month. Now I know exactly which jobs are profitable before I close them.",
    name: "Sarah K.",
    role: "CFO, Cascade Plumbing & HVAC",
  },
  {
    quote:
      "My bookkeeper was skeptical at first. Now she says she'd quit if we ever switched away from it.",
    name: "James R.",
    role: "Partner, Ridge Line General Contractors",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 px-6 pb-24 pt-20 lg:px-8 lg:pt-32">
        {/* Gradient orbs */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Now with QuickBooks Online sync
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Stop typing invoices.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Start scanning them.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            InvoiceScan uses AI to extract every line item from your vendor
            invoices — instantly. Built for trades contractors who are done
            wasting time on manual data entry.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://app.invoicescan.com/signup"
              className="rounded-full bg-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="text-base font-semibold leading-6 text-gray-300 transition hover:text-white"
            >
              View pricing <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Free 14-day trial · No credit card required · Cancel anytime
          </p>
        </div>

        {/* Hero image placeholder */}
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl">
          <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-gray-800/50 px-4">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex items-center justify-center p-12 text-gray-600">
            <div className="text-center">
              <div className="text-6xl">📄</div>
              <p className="mt-4 text-lg font-medium text-gray-400">
                Invoice → AI → Job Cost Code
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Upload a photo, PDF, or forward an email
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-900/50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to kill invoice chaos
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              From the field to the books — InvoiceScan handles the data entry
              so your team doesn&apos;t have to.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-gray-800/50 p-8 transition hover:border-blue-500/30 hover:bg-gray-800"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by trades contractors
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-white/10 bg-gray-800/50 p-8"
              >
                <blockquote className="text-sm leading-7 text-gray-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="mt-0.5 text-sm text-gray-500">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-900 px-6 py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to stop doing data entry?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Join hundreds of trades contractors using InvoiceScan to process
            invoices in seconds, not hours.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://app.invoicescan.com/signup"
              className="rounded-full bg-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="text-base font-semibold leading-6 text-gray-300 transition hover:text-white"
            >
              See pricing <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            14-day free trial · No credit card · Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
