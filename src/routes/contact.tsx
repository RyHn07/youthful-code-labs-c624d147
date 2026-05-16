import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Novara Studio" },
      { name: "description", content: "Tell us about your project." },
      { property: "og:title", content: "Contact — Novara Studio" },
      { property: "og:description", content: "Start a conversation with the studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const send = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);

  return (
    <Section
      className="pt-40"
      eyebrow="Contact"
      title="Tell us about your project."
      description="We typically reply within one business day."
    >
      <form
        className="mx-auto grid max-w-xl gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setLoading(true);
          try {
            await send({
              data: {
                name: String(fd.get("name") || ""),
                email: String(fd.get("email") || ""),
                subject: String(fd.get("subject") || ""),
                body: String(fd.get("body") || ""),
              },
            });
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
          className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background disabled:opacity-60"
        >
          {loading ? "Sending…" : "Send message"}
        </button>
      </form>
    </Section>
  );
}

function Field({ name, label, type = "text", textarea = false, required = true }: { name: string; label: string; type?: string; textarea?: boolean; required?: boolean }) {
  const cls = "w-full rounded-xl border border-[color:var(--hairline)] bg-black/[0.03] px-4 py-3 text-sm outline-none focus:border-[color:var(--hairline-strong)]";
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-[color:var(--text-mute)]">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} maxLength={4000} />
      ) : (
        <input name={name} type={type} required={required} className={cls} maxLength={320} />
      )}
    </label>
  );
}