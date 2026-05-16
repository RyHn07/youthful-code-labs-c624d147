import { Section } from "@/components/site/Section";
import { CardSwap } from "@/components/site/CardSwap";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listProjects } from "@/lib/projects.functions";

export function Projects() {
  const fetchProjects = useServerFn(listProjects);
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: () => fetchProjects(),
  });

  const cards = (data?.projects ?? []).map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    summary: p.summary,
    tags: p.tags ?? [],
  }));

  return (
    <Section
      eyebrow="Recent work"
      title="Selected projects."
      description="A glimpse of what our teams have shipped."
    >
      {cards.length > 0 ? (
        <CardSwap cards={cards} />
      ) : (
        <div className="rounded-md border border-[color:var(--hairline)] bg-black/[0.025] p-12 text-center text-sm text-[color:var(--text-soft)]">
          New work coming soon.
        </div>
      )}
    </Section>
  );
}