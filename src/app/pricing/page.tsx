import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for every stage of your business. Start free, scale as you grow.",
};

type Tier = {
  name: string;
  price: string;
  description: string;
  cta: string;
  href: string;
  highlighted: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$29",
    description: "For solo contractors just getting started.",
    cta: "Start Free Trial",
    href: "https://app.invoicescan.com/signup",
    highlighted: false,
    features: [
      "Up to 50 invoices/month",
      "AI extraction (photo & PDF)",
      "1 user",
      "2 active jobs",
      "CSV export",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "For growing trades businesses processing more volume.",
    cta: "Start Free Trial",
    href: "https://app.invoicescan.com/signup",
    highlighted: true,
    features: [
      "Up to 300 invoices/month",
      "AI extraction + email intake",
      "5 users",
      "Unlimited active jobs",
      "QuickBooks Online sync",
      "Approval workflows",
      "Job costing reports",
      "Priority email support",
    ],
  },
  {
    name: "Business",
    price: "$199",
    description: "For established contractors with multiple crews and projects.",
    cta: "Start Free Trial",
    href: "https://app.invoicescan.com/signup",
    highlighted: false,
    features: [
      "Unlimited invoices",
      "Everything in Pro",
      "15 users",
      "Multi-company support",
      "Custom cost codes",
      "Bulk operations",
      "Advanced reporting",
      "Phone + email support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large contractors or groups with complex requirements.",
    cta: "Contact Sales",
    href: "mailto:sales@invoicescan.com",
    highlighted: false,
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "Custom integrations",
      "SSO / SAML",
      "SLA guarantee",
      "On-site onboarding",
      "API access",
      "Custom contracts",
    ],
  },
];

const featureComparison = [
  {
    category: "Invoices",
    rows: [
      {
        feature: "Monthly invoice limit",
        starter: "50",
        pro: "300",
        business: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        feature: "Photo & PDF extraction",
        starter: true,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        feature: "Email intake",
        starter: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        feature: "Bulk operations",
        starter: false,
        pro: false,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Integrations",
    rows: [
      {
        feature: "QuickBooks Online",
        starter: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        feature: "CSV export",
        starter: true,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        feature: "API access",
        starter: false,
        pro: false,
        business: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Team",
    rows: [
      {
        feature: "Users",
        starter: "1",
        pro: "5",
        business: "15",
        enterprise: "Unlimited",
      },
      {
        feature: "Approval workflows",
        starter: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        feature: "Multi-company",
        starter: false,
        pro: false,
        business: true,
        enterprise: true,
      },
    ],
  },
];

function Check() {
  return (
    <svg
      className="h-5 w-5 text-blue-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function X() {
  return <span className="text-gray-600">—</span>;
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-gray-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Start free. Scale as you grow. No hidden fees.
            </p>
          </div>

          {/* Tier cards */}
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-blue-500 bg-blue-950/30 ring-1 ring-blue-500"
                    : "border-white/10 bg-gray-800/50"
                }`}
              >
                {tier.highlighted && (
                  <div className="mb-4 inline-block self-start rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
                    Most popular
                  </div>
                )}

                <h2 className="text-lg font-semibold text-white">
                  {tier.name}
                </h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-sm text-gray-400">/month</span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {tier.description}
                </p>

                <a
                  href={tier.href}
                  className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 ${
                    tier.highlighted
                      ? "bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-500"
                      : "border border-white/20 text-white hover:bg-white/10 focus:ring-white/20"
                  }`}
                >
                  {tier.cta}
                </a>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="bg-gray-900/50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-bold text-white">
            Compare plans
          </h2>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 pr-6 text-left font-medium text-gray-400">
                    Feature
                  </th>
                  {tiers.map((t) => (
                    <th
                      key={t.name}
                      className={`pb-4 px-4 text-center font-semibold ${
                        t.highlighted ? "text-blue-400" : "text-white"
                      }`}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((section) => (
                  <>
                    <tr key={`section-${section.category}`}>
                      <td
                        colSpan={5}
                        className="pt-8 pb-3 text-xs font-semibold uppercase tracking-wider text-gray-500"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-b border-white/5 last:border-0"
                      >
                        <td className="py-3 pr-6 text-gray-300">
                          {row.feature}
                        </td>
                        {(["starter", "pro", "business", "enterprise"] as const).map(
                          (tier) => (
                            <td
                              key={tier}
                              className="px-4 py-3 text-center"
                            >
                              {typeof row[tier] === "boolean" ? (
                                row[tier] ? (
                                  <Check />
                                ) : (
                                  <X />
                                )
                              ) : (
                                <span className="text-gray-300">
                                  {row[tier] as string}
                                </span>
                              )}
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ stub */}
      <section className="bg-gray-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Questions? We&apos;ve got answers.
          </h2>
          <p className="mt-4 text-gray-400">
            Email us at{" "}
            <a
              href="mailto:support@invoicescan.com"
              className="text-blue-400 hover:text-blue-300"
            >
              support@invoicescan.com
            </a>{" "}
            or start a free trial and explore the product yourself.
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
