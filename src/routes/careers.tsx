import { createFileRoute } from "@tanstack/react-router";
import { PageHero, pageMono as mono } from "@/components/site/PageHero";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Astrallabs" }, { name: "description", content: "Join the talent network." }] }),
  component: CareersPage,
});

function CareersPage() {
  const [loading, setLoading] = useState(false);
  const cls = "w-full rounded-md border border-[color:var(--hairline)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[color:var(--hairline-strong)]";
  const labelStyle = {
    fontFamily: mono,
    fontSize: "12px",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    color: "rgba(37, 37, 37, 0.6)",
  };
  return (
    <>
      <PageHero
        eyebrow="Careers"
        meta="Join us"
        title="Join the talent network."
        description="Real, paid project experience alongside senior mentors — on work that ships."
      />
      <OuterContainer borders="x">
        <InnerContainer borders="xb" className="!px-0">
          <div className="px-6 md:px-10 py-16 md:py-20">
            <form className="mx-auto grid max-w-xl gap-5" onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setLoading(true);
        try {
          const university = String(fd.get("university") || "").trim();
          const portfolio_url = String(fd.get("portfolio_url") || "").trim();
          const message = String(fd.get("message") || "").trim();
          const { error } = await supabase.from("applications").insert({
            name: String(fd.get("name") || "").trim(),
            email: String(fd.get("email") || "").trim(),
            university: university || null,
            role: String(fd.get("role") || "").trim(),
            portfolio_url: portfolio_url || null,
            message: message || null,
          });
          if (error) throw new Error(error.message);
          toast.success("Application received.");
          (e.target as HTMLFormElement).reset();
        } catch (err: any) { toast.error(err?.message ?? "Something went wrong"); }
        finally { setLoading(false); }
      }}>
        <label className="grid gap-2"><span style={labelStyle}>Full name</span><input name="name" required maxLength={200} className={cls} /></label>
        <label className="grid gap-2"><span style={labelStyle}>Email</span><input name="email" type="email" required maxLength={320} className={cls} /></label>
        <label className="grid gap-2"><span style={labelStyle}>University</span><input name="university" maxLength={200} className={cls} /></label>
        <label className="grid gap-2"><span style={labelStyle}>Role (e.g. UI/UX Designer)</span><input name="role" required maxLength={200} className={cls} /></label>
        <label className="grid gap-2"><span style={labelStyle}>Portfolio URL (optional)</span><input name="portfolio_url" type="url" maxLength={500} className={cls} /></label>
        <label className="grid gap-2"><span style={labelStyle}>A few lines about you</span><textarea name="message" rows={5} maxLength={4000} className={cls} /></label>
        <button
          type="submit"
          disabled={loading}
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-dark-gradient px-6 py-3 text-white transition-all hover:opacity-90 disabled:opacity-60"
          style={{ fontFamily: mono, fontSize: "14px", letterSpacing: "-0.03em" }}
        >
          {loading ? "Submitting…" : "Submit application"}
        </button>
      </form>
          </div>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}
