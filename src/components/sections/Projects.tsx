import { Section } from "@/components/site/Section";
import { CardSwap } from "@/components/site/CardSwap";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function Projects() {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false })
        .limit(50);
      if (error) return { projects: [] as any[] };
      return { projects: data ?? [] };
    },
  });

  const cards = (data?.projects ?? []).map((p: any) => ({
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