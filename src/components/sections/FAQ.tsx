import { Container } from "@/components/site/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do we get started?",
    a: "Book a free 15-minute discovery call or message us. We'll align on scope, timeline, and budget — then send a fixed quote within 24 hours.",
  },
  {
    q: "How does the process look?",
    a: "Brief → wireframes → design → development → QA → launch. You'll get daily updates and a weekly demo, never weekly silence.",
  },
  {
    q: "What if I already have a design?",
    a: "Perfect. We can take your Figma file and rebuild it pixel-perfect in modern code, fully responsive.",
  },
  {
    q: "Can you migrate my existing site?",
    a: "Yes — we move sites from WordPress, Webflow, Wix, and Squarespace to a faster, modern stack without losing SEO.",
  },
  {
    q: "What happens after launch?",
    a: "You get one month of free support. After that, hop onto a retainer or call us only when you need updates.",
  },
  {
    q: "Do you offer refunds?",
    a: "If we haven't started production work, yes. Once design begins, we work on milestones — you only pay for what we ship.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-3 text-[14px] tracking-[-0.01em] text-[color:var(--text-mute)] font-mono-friendly">
              FAQ · 04 | 04
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Frequently asked questions.
            </h2>
            <p className="mt-4 max-w-sm text-[color:var(--text-soft)]">
              Everything you need to know about our services. Still got questions?{" "}
              <a href="/contact" className="underline underline-offset-4">
                Book a call
              </a>
              .
            </p>
          </div>

          <div className="md:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-[color:var(--hairline)]"
                >
                  <AccordionTrigger className="py-5 text-left text-lg font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[color:var(--text-soft)]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
