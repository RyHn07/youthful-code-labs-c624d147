import { OuterContainer, InnerContainer } from "@/components/site/Containers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", "Saans SemiMono-TRIAL Regular Placeholder", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Gordita", "Geist", "Inter", ui-sans-serif, system-ui, sans-serif';

const statusBarStyle = {
  fontFamily: mono,
  fontSize: "12px",
  lineHeight: "16px",
  textTransform: "uppercase" as const,
  color: "rgb(22, 22, 18)",
};

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

export function FAQ({ showSidebar = true }: { showSidebar?: boolean } = {}) {
  return (
    <section id="faq" className="relative">
      <OuterContainer>
        <InnerContainer borders="x" className="!px-0 border-b border-[color:var(--hairline)]">
          {/* Status bar */}
          <div className="border-b border-[color:var(--hairline)] px-6 md:px-10">
            <div className="flex items-center justify-between py-3" style={statusBarStyle}>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ff7a1a] text-[10px] font-bold text-white">
                  ◉
                </span>
                FAQ
              </div>
              <div className="tabular-nums">04 | 04</div>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0">
            {/* Left: title + accordion */}
            <div className={showSidebar ? "lg:col-span-8 lg:border-r lg:border-[color:var(--hairline)]" : "lg:col-span-12"}>
              <div className="px-6 md:px-10 pt-12 pb-14 lg:py-12">
                <h2
                  style={{
                    fontFamily: display,
                    fontWeight: 700,
                    fontSize: "44px",
                    lineHeight: "1.1",
                    letterSpacing: "-0.03em",
                    color: "#252525",
                  }}
                >
                  Frequently Asked
                  <br />
                  Questions
                </h2>
                <p
                  className="mt-5 max-w-md"
                  style={{
                    fontFamily: mono,
                    fontSize: "14px",
                    lineHeight: "1.5em",
                    letterSpacing: "-0.01em",
                    color: "rgba(37, 37, 37, 0.65)",
                  }}
                >
                  Everything you need to know about our services
                </p>

                <div className="mt-10 border-t border-[color:var(--hairline)]">
                  <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                    {faqs.map((f, i) => (
                      <AccordionItem
                        key={f.q}
                        value={`item-${i}`}
                        className="border-b border-[color:var(--hairline)]"
                      >
                        <AccordionTrigger
                          className="py-6 text-left hover:no-underline"
                          style={{
                            fontFamily: display,
                            fontWeight: 600,
                            fontSize: "16px",
                            letterSpacing: "-0.01em",
                            color: "#252525",
                          }}
                        >
                          {f.q}
                        </AccordionTrigger>
                        <AccordionContent
                          className="pb-6"
                          style={{
                            fontFamily: mono,
                            fontSize: "14px",
                            lineHeight: "1.6em",
                            color: "rgba(37, 37, 37, 0.65)",
                          }}
                        >
                          {f.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Right: still got questions */}
            {showSidebar && (
            <div className="lg:col-span-4">
              <div className="px-6 md:px-10 pb-14 lg:py-12 lg:sticky lg:top-12">
                <h3
                  style={{
                    fontFamily: display,
                    fontWeight: 700,
                    fontSize: "22px",
                    letterSpacing: "-0.02em",
                    color: "#252525",
                  }}
                >
                  Still got questions?
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: mono,
                    fontSize: "14px",
                    color: "rgba(37, 37, 37, 0.65)",
                  }}
                >
                  Book a call or send us a message on Telegram
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-dark-gradient px-5 py-2.5 text-white transition hover:opacity-90"
                    style={{ fontFamily: display, fontSize: "14px", fontWeight: 500 }}
                  >
                    Book a call <span aria-hidden>›</span>
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--hairline)] bg-white px-5 py-2.5 text-[#252525] transition hover:bg-black/[0.03]"
                    style={{ fontFamily: display, fontSize: "14px", fontWeight: 500 }}
                  >
                    Message <span aria-hidden>›</span>
                  </a>
                </div>

                <p
                  className="mt-6"
                  style={{
                    fontFamily: mono,
                    fontSize: "13px",
                    color: "rgba(37, 37, 37, 0.65)",
                  }}
                >
                  Or send us a email{" "}
                  <span style={{ color: "#252525", fontWeight: 600 }}>Hello@astrallabs.com</span>
                </p>
              </div>
            </div>
            )}
          </div>
        </InnerContainer>
      </OuterContainer>
    </section>
  );
}
