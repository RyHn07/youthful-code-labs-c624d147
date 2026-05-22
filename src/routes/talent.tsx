import { createFileRoute } from "@tanstack/react-router";
import { Talent } from "@/components/sections/Talent";
import { Section } from "@/components/site/Section";
import { JoinCTA } from "@/components/sections/JoinCTA";

export const Route = createFileRoute("/talent")({
  head: () => ({ meta: [{ title: "Talent — Astrallabs" }, { name: "description", content: "Meet the talent network." }] }),
  component: () => (<><Section className="pt-40" eyebrow="Talent" title="A community of young specialists." description="Vetted students, organized into teams." /><Talent /><JoinCTA /></>),
});
