import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "We built InvoiceScan because we watched trades contractors drown in paper invoices. There had to be a better way.",
};

const values = [
  {
    name: "Built for the trades",
    description:
      "We're not a generic document tool. Every feature is designed around the way electricians, plumbers, and contractors actually work.",
  },
  {
    name: "Accuracy you can trust",
    description:
      "We obsess over extraction quality. If our AI isn't confident, we flag it for review — we'd rather surface a question than silently get it wrong.",
  },
  {
    name: "Simple by default",
    description:
      "Job costing can be complex. The software doesn't have to be. We hide the complexity until you need it.",
  },
  {
    name: "Fast first",
    description:
      "Every second spent on admin is a second not spent on the job. We measure ourselves by how fast we get out of your way.",
  },
];

const team = [
  {
    name: "Alex Morgan",
    role: "Co-founder & CEO",
    bio: "Former field estimator turned software founder. Spent 8 years watching skilled trades businesses lose money to bad bookkeeping.",
  },
  {
    name: "Jordan Lee",
    role: "Co-founder & CTO",
    bio: "Machine learning engineer with a background in document understanding. Previously built OCR systems at scale.",
  },
  {
    name: "Sam Rivera",
    role: "Head of Product",
    bio: "Product manager who spent 5 years at a mid-sized electrical contractor before pivoting to software.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="bg-gray-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We built this because we were tired of watching great contractors
            drown in paperwork.
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-8 text-gray-400">
            <p>
              The trades are the backbone of every building we work and live in.
              Electricians, plumbers, HVAC techs, general contractors — these
              are skilled professionals running real businesses. But too many of
              them still process invoices by hand, typing line items from paper
              into spreadsheets or accounting software.
            </p>
            <p>
              InvoiceScan was founded to solve that. We use AI to extract every
              line item from a vendor invoice — from a blurry photo or a
              forwarded email — and route it to the right job cost code
              automatically. What used to take 20 minutes per invoice now takes
              seconds.
            </p>
            <p>
              We&apos;re a small, focused team. We talk to contractors every
              week. We don&apos;t build features that look good in demos but
              don&apos;t work in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-900/50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-white">What we believe</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.name}
                className="rounded-2xl border border-white/10 bg-gray-800/50 p-8"
              >
                <h3 className="text-lg font-semibold text-white">
                  {value.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-white">The team</h2>
          <p className="mt-3 text-gray-400">
            Small enough to move fast. Focused enough to stay sharp.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="h-20 w-20 rounded-full bg-gray-700" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-400">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Want to learn more? Just start the trial.
          </h2>
          <p className="mt-4 text-gray-400">
            No sales call required. Set up takes 5 minutes.
          </p>
          <a
            href="https://app.invoicescan.com/signup"
            className="mt-8 inline-block rounded-full bg-blue-500 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-blue-400"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </>
  );
}
