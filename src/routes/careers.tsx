import { createFileRoute } from "@tanstack/react-router";
import { PageHero, pageMono as mono } from "@/components/site/PageHero";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "sonner";
import {
  FormShell,
  underlineInput,
  fieldLabel,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/site/FormShell";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Astrallabs" }, { name: "description", content: "Join the talent network." }] }),
  component: CareersPage,
});

function CareersPage() {
  const [loading, setLoading] = useState(false);
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
          <div className="px-6 md:px-10 py-16 md:py-24">
            <FormShell
              title="Apply to the studio"
              blurb="Share a bit about yourself. Senior mentors review every application."
              contacts={[
                { icon: <MailIcon />, label: "careers@astrallabs.com" },
                { icon: <PhoneIcon />, label: "+0123 4567 8910" },
                { icon: <PinIcon />, label: "Remote — Worldwide" },
              ]}
            >
            <form className="grid gap-7" onSubmit={async (e) => {
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
        <div className="grid gap-7 sm:grid-cols-2">
          <label className="grid gap-2"><span style={fieldLabel}>Full name</span><input name="name" required placeholder="Jane Doe" maxLength={200} className={underlineInput} /></label>
          <label className="grid gap-2"><span style={fieldLabel}>Email</span><input name="email" type="email" required placeholder="you@studio.com" maxLength={320} className={underlineInput} /></label>
        </div>
        <div className="grid gap-7 sm:grid-cols-2">
          <label className="grid gap-2"><span style={fieldLabel}>University</span><input name="university" placeholder="Optional" maxLength={200} className={underlineInput} /></label>
          <label className="grid gap-2"><span style={fieldLabel}>Role</span><input name="role" required placeholder="UI/UX Designer" maxLength={200} className={underlineInput} /></label>
        </div>
        <label className="grid gap-2"><span style={fieldLabel}>Portfolio URL</span><input name="portfolio_url" type="url" placeholder="https://" maxLength={500} className={underlineInput} /></label>
        <label className="grid gap-2"><span style={fieldLabel}>A few lines about you</span><textarea name="message" rows={3} placeholder="What you'd like to work on…" maxLength={4000} className={underlineInput + " resize-none"} /></label>
        <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={loading}
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-dark-gradient px-6 py-3 text-white transition-all hover:opacity-90 disabled:opacity-60"
          style={{ fontFamily: mono, fontSize: "14px", letterSpacing: "-0.03em" }}
        >
          {loading ? "Submitting…" : "Submit application"}
        </button>
        </div>
      </form>
            </FormShell>
          </div>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}
