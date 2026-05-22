import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Astrallabs" }, { name: "description", content: "Admin sign in." }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const cls = "w-full rounded-md border border-[color:var(--hairline)] bg-black/[0.03] px-4 py-3 text-sm outline-none focus:border-[color:var(--hairline-strong)]";
  return (
    <Section className="pt-40" eyebrow="Studio" title="Sign in." align="center">
      <form className="mx-auto grid max-w-sm gap-4" onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email: String(fd.get("email")||""), password: String(fd.get("password")||"") });
        setLoading(false);
        if (error) { toast.error(error.message); return; }
        toast.success("Signed in.");
        navigate({ to: "/" });
      }}>
        <input name="email" type="email" placeholder="you@studio.com" required className={cls} />
        <input name="password" type="password" placeholder="Password" required minLength={6} className={cls} />
        <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background disabled:opacity-60">{loading ? "Signing in…" : "Sign in"}</button>
        <p className="text-center text-xs text-[color:var(--text-mute)]">Admin access only.</p>
      </form>
    </Section>
  );
}
