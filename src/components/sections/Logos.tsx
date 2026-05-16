import { Section } from "@/components/site/Section";
import { LogoLoop } from "@/components/site/LogoLoop";

const brands = [
  "Lumen", "Northwind", "Atlas", "Mercury", "Orbit",
  "Helix", "Pinecast", "Lattice", "Vellum", "Stratos",
];

export function Logos() {
  return (
    <Section
      eyebrow="Trusted by"
      title="Teams we've collaborated with."
      align="center"
    >
      <LogoLoop items={brands} />
    </Section>
  );
}