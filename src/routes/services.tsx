import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Layout,
  Code2,
  PenTool,
  ShoppingCart,
  Globe,
  Layers,
  Component,
  Gauge,
  Search,
  Wrench,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Graphik Trial Medium", "Graphik Trial Medium Placeholder", sans-serif';

const services = [
  { icon: Layout, title: "Website Design", desc: "Conversion-aware layouts, wireframes, and high-fidelity UI." },
  { icon: PenTool, title: "UI/UX Design", desc: "User flows, prototypes, and accessible interface design." },
  { icon: Component, title: "Design Systems", desc: "Reusable component libraries, tokens, and brand guidelines." },
  { icon: Code2, title: "React Development", desc: "Modern React, Next.js, and Vite apps with TypeScript." },
  { icon: Globe, title: "Webflow Development", desc: "CMS-driven Webflow sites with custom interactions." },
  { icon: Layers, title: "Framer Development", desc: "Framer sites with motion, CMS, and responsive layouts." },
  { icon: Wrench, title: "WordPress Development", desc: "Custom themes, headless WP, and Elementor builds." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Shopify, WooCommerce, and headless storefronts." },
  { icon: Smartphone, title: "Responsive & Mobile", desc: "Pixel-perfect responsive builds across every device." },
  { icon: Gauge, title: "Performance & Core Web Vitals", desc: "Speed audits, optimization, and Lighthouse 95+ scores." },
  { icon: Search, title: "Technical SEO", desc: "Schema, sitemaps, metadata, and search-ready markup." },
  { icon: ShieldCheck, title: "Maintenance & Support", desc: "Ongoing updates, monitoring, security, and care plans." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Astrallabs" },
      {
        name: "description",
        content:
          "Design, engineering, brand, content, and growth — studio-grade work across the full digital stack.",
      },
      { property: "og:title", content: "Services — Astrallabs" },
      {
        property: "og:description",
        content: "Studio-grade work across the full digital stack.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="relative isolate overflow-hidden">
      <OuterContainer borders="x">
        <InnerContainer borders="x" className="!px-0">
          {/* Status bar */}
          <div className="border-b border-[color:var(--hairline)] px-6 md:px-10">
            <div
              className="flex items-center justify-between py-3"
              style={{
                fontFamily: mono,
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "rgb(22, 22, 18)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B2C]" />
                <span>01 — Services</span>
              </div>
              <span>What we build</span>
            </div>
          </div>

          {/* Hero */}
          <div className="px-6 md:px-10 py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <h1
                className="text-balance"
                style={{
                  fontFamily: display,
                  fontWeight: 500,
                  fontSize: "clamp(40px, 6vw, 68px)",
                  lineHeight: "1.02",
                  letterSpacing: "-0.04em",
                  color: "#252525",
                }}
              >
                Studio-grade work across the full digital stack.
              </h1>
              <p
                className="mt-6 max-w-xl mx-auto"
                style={{
                  fontFamily: mono,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.01em",
                  color: "rgba(37, 37, 37, 0.65)",
                }}
              >
                Cherry-picked talent assembled into a small, senior-led team for each
                engagement — from identity to engineering to growth.
              </p>
            </div>
          </div>

          {/* Services grid */}
          <div className="border-t border-[color:var(--hairline)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative p-8 md:p-10 border-b border-r border-[color:var(--hairline)] last:border-r-0 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(2n)]:lg:border-r [&:nth-child(3n)]:lg:border-r-0 transition-colors hover:bg-black/[0.02]"
                >
                  <span
                    className="absolute right-6 top-6"
                    style={{
                      fontFamily: mono,
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "rgba(37, 37, 37, 0.45)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-dark-gradient text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3
                    className="mt-8"
                    style={{
                      fontFamily: display,
                      fontWeight: 500,
                      fontSize: "22px",
                      lineHeight: "1.15",
                      letterSpacing: "-0.02em",
                      color: "#252525",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: mono,
                      fontSize: "14px",
                      lineHeight: "22px",
                      letterSpacing: "-0.01em",
                      color: "rgba(37, 37, 37, 0.65)",
                    }}
                  >
                    {s.desc}
                  </p>

                  <div
                    className="mt-10 inline-flex items-center gap-1.5 transition-all group-hover:gap-2.5"
                    style={{
                      fontFamily: mono,
                      fontSize: "13px",
                      letterSpacing: "-0.01em",
                      color: "#252525",
                    }}
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="px-6 md:px-10 py-20 md:py-28 text-center">
            <h2
              style={{
                fontFamily: display,
                fontWeight: 500,
                fontSize: "clamp(32px, 4.5vw, 48px)",
                lineHeight: "1.05",
                letterSpacing: "-0.03em",
                color: "#252525",
              }}
            >
              Have a project in mind?
            </h2>
            <p
              className="mt-4 max-w-md mx-auto"
              style={{
                fontFamily: mono,
                fontSize: "15px",
                lineHeight: "24px",
                color: "rgba(37, 37, 37, 0.65)",
              }}
            >
              Tell us about it — we typically reply within one business day.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-dark-gradient px-6 py-3 text-white transition-all hover:opacity-90"
                style={{
                  fontFamily: mono,
                  fontSize: "14px",
                  letterSpacing: "-0.03em",
                }}
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </InnerContainer>
      </OuterContainer>
    </section>
  );
}