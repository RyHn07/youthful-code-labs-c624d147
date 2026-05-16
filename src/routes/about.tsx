import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Stats } from "@/components/sections/Stats";
import { Workflow } from "@/components/sections/Workflow";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Novara Studio" },
      { name: "description", content: "A talent-network studio guided by senior experts." },
      { property: "og:title", content: "About — Novara Studio" },
      { property: "og:description", content: "How our talent-network model works." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section
        className="pt-40"
        eyebrow="About"
        title="Studio-grade work, community-driven."
        description="Novara is a project-based studio built around a curated network of university talent and senior experts. We assemble the right team for each engagement — and ship like a startup."
      />
      <AboutTeaser />
      <Workflow />
      <Stats />
    </>
  );
}