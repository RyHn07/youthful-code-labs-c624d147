import { createFileRoute } from "@tanstack/react-router";
import { Talent } from "@/components/sections/Talent";
import { PageHero } from "@/components/site/PageHero";
import { JoinCTA } from "@/components/sections/JoinCTA";

export const Route = createFileRoute("/talent")({
  head: () => ({ meta: [{ title: "Talent — Astrallabs" }, { name: "description", content: "Meet the talent network." }] }),
  component: () => (
    <>
      <PageHero
        eyebrow="Talent"
        meta="The network"
        title="A community of young specialists."
        description="Vetted students and senior mentors, organized into small teams matched to each engagement."
      />
      <Talent />
      <JoinCTA />
    </>
  ),
});
