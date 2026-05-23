import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { OuterContainer, InnerContainer } from "@/components/site/Containers";

const mono =
  '"Saans SemiMono TRIAL", "Saans SemiMono-TRIAL Regular", ui-monospace, SFMono-Regular, Menlo, monospace';
const display =
  '"Gordita", "Geist", "Inter", ui-sans-serif, system-ui, sans-serif';

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Call — Astrallabs" },
      {
        name: "description",
        content:
          "Schedule a 20-minute intro call with Astrallabs. Pick a time that works and we'll send a Google Meet link.",
      },
      { property: "og:title", content: "Book a Call — Astrallabs" },
      {
        property: "og:description",
        content: "Schedule a 20-minute intro call with the studio.",
      },
    ],
  }),
  component: BookPage,
});

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

function BookPage() {
  const time = useLocalTime("Asia/Dhaka");

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="bg-background">
      {/* Status strip */}
      <OuterContainer>
        <InnerContainer
          borders="xb"
          className="flex items-center justify-between py-3"
          style={{
            fontFamily: mono,
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(37,37,37,0.6)",
          }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for new projects
          </span>
          <span className="tabular-nums">
            {time ?? "—"} <span className="ml-2">Dhaka, BD</span>
          </span>
        </InnerContainer>
      </OuterContainer>

      {/* Headline */}
      <OuterContainer>
        <InnerContainer borders="x" className="py-20 text-center md:py-28">
          <h1
            style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: "clamp(40px, 5.6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#252525",
            }}
          >
            Book A 20-Min Call
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl"
            style={{
              fontFamily: mono,
              fontSize: "15px",
              lineHeight: 1.6,
              color: "rgba(37,37,37,0.55)",
            }}
          >
            If any of the times don't work for you, just shoot us a message on{" "}
            <a
              href="mailto:hello@astrallabs.studio"
              className="font-medium text-[#252525] underline-offset-4 hover:underline"
            >
              email
            </a>
            .
          </p>
        </InnerContainer>
      </OuterContainer>

      {/* Embed */}
      <OuterContainer>
        <InnerContainer borders="xb" className="px-0 py-10 md:px-0 md:py-14">
          <div className="overflow-hidden bg-white">
            <Cal
              namespace="15min"
              calLink="raihan-reaz-uyxafc/15min"
              style={{ width: "100%", height: "100%", minHeight: "720px", overflow: "scroll" }}
              config={{
                layout: "month_view",
                theme: "light",
              }}
            />
          </div>
        </InnerContainer>
      </OuterContainer>
    </div>
  );
}