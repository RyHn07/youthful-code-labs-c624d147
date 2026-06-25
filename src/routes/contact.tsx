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
  const [topic, setTopic] = useState("Web Design");

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
          <div className="px-6 md:px-10 py-8 md:py-10">
            <FormShell
              title="Contact Information"
              blurb="Fill up the form and our team will get back to you within 24 hours."
              contacts={[
                { icon: <PhoneIcon />, label: "+0123 4567 8910" },
                { icon: <MailIcon />, label: "hello@astrallabs.com" },
                { icon: <PinIcon />, label: "Remote — Worldwide" },
              ]}
            >
            <form
              className="grid gap-7"
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
              body: `[${topic}] ${String(fd.get("body") || "").trim()}`,
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
        <div className="grid gap-7 sm:grid-cols-2">
          <Field name="name" label="First name" placeholder="Jane" />
          <Field name="subject" label="Last name" placeholder="Doe" required={false} />
        </div>
        <div className="grid gap-7 sm:grid-cols-2">
          <Field name="email" label="Mail" type="email" placeholder="you@studio.com" />
          <Field name="phone" label="Phone" required={false} placeholder="+1 555 000 0000" />
        </div>

        <fieldset className="grid gap-3">
          <legend style={fieldLabel}>What kind of website do you need?</legend>
          <div className="mt-1 flex flex-wrap gap-x-8 gap-y-3">
            {["Web Design", "Web Development", "Branding", "Other"].map((opt) => {
              const active = topic === opt;
              return (
                <label key={opt} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="topic"
                    value={opt}
                    checked={active}
                    onChange={() => setTopic(opt)}
                    className="sr-only"
                  />
                  <span
                    className={`grid h-4 w-4 place-items-center rounded-full border ${active ? "border-[#FF6B2C]" : "border-[color:var(--hairline-strong)]"}`}
                  >
                    {active && <span className="h-2 w-2 rounded-full bg-[#FF6B2C]" />}
                  </span>
                  <span style={{ fontFamily: mono, fontSize: "14px", color: "#252525" }}>{opt}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <Field name="body" label="Message" textarea placeholder="Write your message…" />

        <div className="flex justify-end pt-2">
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
        </div>
            </form>
            </FormShell>
          </div>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

function Field({ name, label, type = "text", textarea = false, required = true, placeholder }: { name: string; label: string; type?: string; textarea?: boolean; required?: boolean; placeholder?: string }) {
  return (
    <label className="grid gap-2">
      <span style={fieldLabel}>{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={3}
          placeholder={placeholder}
          className={underlineInput + " resize-none"}
          maxLength={4000}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={underlineInput}
          maxLength={320}
        />
      )}
    </label>
  );
}