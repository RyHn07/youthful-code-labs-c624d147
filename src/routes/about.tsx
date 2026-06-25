import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Stats } from "@/components/sections/Stats";
import { Workflow } from "@/components/sections/Workflow";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Astrallabs" },
      { name: "description", content: "A talent-network studio guided by senior experts." },
      { property: "og:title", content: "About — Astrallabs" },
      { property: "og:description", content: "How our talent-network model works." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        meta="Who we are"
        title="Studio-grade work, community-driven."
        description="Astrallabs is a project-based studio built around a curated network of university talent and senior experts. We assemble the right team for each engagement — and ship like a startup."
      />
      <AboutTeaser />
      <Workflow />
      <Stats />
    </>
  );
}