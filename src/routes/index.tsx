import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { ServicesList } from "@/components/sections/ServicesList";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { PricingIncludes } from "@/components/sections/PricingIncludes";
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
      <TrustBar />
      <ServicesList />
      <WhyUs />
      <TrustBar />
      <PricingPlans />
      <PricingIncludes />
      <TrustBar />
      <FAQ />
      <FinalCTA />
    </>
  );
}
