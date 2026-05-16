import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/sections/Projects";
import { Section } from "@/components/site/Section";
import { Logos } from "@/components/sections/Logos";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [{ title: "Work — Novara Studio" }, { name: "description", content: "Selected projects." }] }),
  component: () => (<><Section className="pt-40" eyebrow="Work" title="Selected projects." description="A growing catalog." /><Projects /><Logos /></>),
});
