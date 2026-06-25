import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/sections/Projects";
import { PageHero } from "@/components/site/PageHero";
import { Logos } from "@/components/sections/Logos";

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
      <Projects />
      <Logos />
    </>
  ),
});
