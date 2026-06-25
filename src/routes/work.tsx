import { createFileRoute } from "@tanstack/react-router";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { PageHero } from "@/components/site/PageHero";
import { Logos } from "@/components/sections/Logos";
import { JoinCTA } from "@/components/sections/JoinCTA";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [{ title: "Work — Astrallabs" }, { name: "description", content: "Selected projects." }] }),
  component: () => (
    <>
      <PageHero
        eyebrow="Work"
        meta="Selected projects"
        title="Selected projects."
        description="A growing catalog of work shipped with founders and teams around the world."
      />
      <WorkGrid />
      <Logos />
      <JoinCTA />
    </>
  ),
});
