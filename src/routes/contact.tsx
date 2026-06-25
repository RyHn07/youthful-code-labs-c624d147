import { createFileRoute } from "@tanstack/react-router";
import { PageHero, pageMono as mono } from "@/components/site/PageHero";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Astrallabs" },
      { name: "description", content: "Tell us about your project." },
      { property: "og:title", content: "Contact — Astrallabs" },
      { property: "og:description", content: "Start a conversation with the studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        meta="Say hello"
        title="Tell us about your project."
        description="We typically reply within one business day."
      />
      <OuterContainer borders="x">
        <InnerContainer borders="xb" className="!px-0">
          <div className="px-6 md:px-10 py-16 md:py-20">
            <form
              className="mx-auto grid max-w-xl gap-5"
        onSubmit={async (e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setLoading(true);
          try {
            const subject = String(fd.get("subject") || "").trim();
            const { error } = await supabase.from("messages").insert({
              name: String(fd.get("name") || "").trim(),
              email: String(fd.get("email") || "").trim(),
              subject: subject || null,
              body: String(fd.get("body") || "").trim(),
            });
            if (error) throw new Error(error.message);
            toast.success("Thanks — we'll be in touch shortly.");
            (e.target as HTMLFormElement).reset();
          } catch (err: any) {
            toast.error(err?.message ?? "Something went wrong");
          } finally {
            setLoading(false);
          }
        }}
      >
        <Field name="name" label="Your name" />
        <Field name="email" label="Email" type="email" />
        <Field name="subject" label="Subject" required={false} />
        <Field name="body" label="Message" textarea />
        <button
          type="submit"
          disabled={loading}
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-dark-gradient px-6 py-3 text-white transition-all hover:opacity-90 disabled:opacity-60"
          style={{
            fontFamily: mono,
            fontSize: "14px",
            letterSpacing: "-0.03em",
          }}
        >
          {loading ? "Sending…" : "Send message"}
        </button>
            </form>
          </div>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

function Field({ name, label, type = "text", textarea = false, required = true }: { name: string; label: string; type?: string; textarea?: boolean; required?: boolean }) {
  const cls = "w-full rounded-md border border-[color:var(--hairline)] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[color:var(--hairline-strong)]";
  return (
    <label className="grid gap-2">
      <span
        style={{
          fontFamily: mono,
          fontSize: "12px",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "rgba(37, 37, 37, 0.6)",
        }}
      >
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} maxLength={4000} />
      ) : (
        <input name={name} type={type} required={required} className={cls} maxLength={320} />
      )}
    </label>
  );
}