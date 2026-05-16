import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Talent } from "@/components/sections/Talent";
import { Workflow } from "@/components/sections/Workflow";
import { Projects } from "@/components/sections/Projects";
import { Logos } from "@/components/sections/Logos";
import { Stats } from "@/components/sections/Stats";
import { JoinCTA } from "@/components/sections/JoinCTA";

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
      <AboutTeaser />
      <Services />
      <WhyUs />
      <Talent />
      <Workflow />
      <Projects />
      <Logos />
      <Stats />
      <JoinCTA />
    </>
  );
}
