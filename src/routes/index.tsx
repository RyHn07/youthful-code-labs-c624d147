import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { ServicesList } from "@/components/sections/ServicesList";
import { WhyUs } from "@/components/sections/WhyUs";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novara Studio — Affordable, high-quality digital solutions" },
      {
        name: "description",
        content:
          "A talent-network studio: top university students and senior experts shipping design, engineering, and growth work at startup speed.",
      },
      { property: "og:title", content: "Novara Studio" },
      {
        property: "og:description",
        content:
          "Affordable, high-quality digital solutions powered by young talent.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WorkShowcase />
      <section
        aria-hidden="true"
        className="relative"
        style={{ height: 60 }}
      >
        <div className="mx-auto h-full w-full max-w-[1320px] border-x border-[color:var(--hairline)]" />
      </section>
      <ServicesList />
      <WhyUs />
      <PricingPlans />
      <FAQ />
      <FinalCTA />
    </>
  );
}
