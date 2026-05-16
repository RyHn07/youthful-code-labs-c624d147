import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { Section } from "@/components/site/Section";
import { JoinCTA } from "@/components/sections/JoinCTA";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — Novara Studio" }, { name: "description", content: "Design, engineering, brand, content, growth, and AI." }] }),
  component: () => (<><Section className="pt-40" eyebrow="Services" title="What our teams build." description="From identity to engineering to growth." /><Services /><JoinCTA /></>),
});
