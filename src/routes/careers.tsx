import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { useServerFn } from "@tanstack/react-start";
import { submitApplication } from "@/lib/contact.functions";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Novara Studio" }, { name: "description", content: "Join the talent network." }] }),
  component: CareersPage,
});

function CareersPage() {
  const apply = useServerFn(submitApplication);
  const [loading, setLoading] = useState(false);
  const cls = "w-full rounded-md border border-[color:var(--hairline)] bg-black/[0.03] px-4 py-3 text-sm outline-none focus:border-[color:var(--hairline-strong)]";
  return (
    <Section className="pt-40" eyebrow="Careers" title="Join the talent network." description="Real, paid project experience alongside senior mentors.">
      <form className="mx-auto grid max-w-xl gap-4" onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setLoading(true);
        try {
          await apply({ data: { name: String(fd.get("name")||""), email: String(fd.get("email")||""), university: String(fd.get("university")||""), role: String(fd.get("role")||""), portfolio_url: String(fd.get("portfolio_url")||""), message: String(fd.get("message")||"") } });
          toast.success("Application received.");
          (e.target as HTMLFormElement).reset();
        } catch (err: any) { toast.error(err?.message ?? "Something went wrong"); }
        finally { setLoading(false); }
      }}>
        <input name="name" required maxLength={200} placeholder="Full name" className={cls} />
        <input name="email" type="email" required maxLength={320} placeholder="Email" className={cls} />
        <input name="university" maxLength={200} placeholder="University" className={cls} />
        <input name="role" required maxLength={200} placeholder="Role (e.g. UI/UX Designer)" className={cls} />
        <input name="portfolio_url" type="url" maxLength={500} placeholder="Portfolio URL (optional)" className={cls} />
        <textarea name="message" rows={5} maxLength={4000} placeholder="A few lines about you" className={cls} />
        <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background disabled:opacity-60">{loading ? "Submitting…" : "Submit application"}</button>
      </form>
    </Section>
  );
}
