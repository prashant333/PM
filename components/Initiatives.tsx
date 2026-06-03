import { ArrowUpRight } from "lucide-react";
import { initiatives, featuredInitiative } from "@/lib/data";

function CaseChips({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <span key={c} className="chip-muted">
          {c}
        </span>
      ))}
    </div>
  );
}

/** Placeholder visual — swap for a real screenshot/photo when available. */
function Visual({ tone, className = "" }: { tone: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md border border-white/[0.06] bg-gradient-to-br ${tone} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

export default function Initiatives() {
  return (
    <section id="work" className="container-max scroll-mt-20 py-20">
      <div className="text-center">
        <h2 className="font-display text-headline-lg font-semibold tracking-tight">
          Featured Strategic Initiatives
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-body-md text-on-surface-variant">
          Selected deep-dives into high-impact products solving complex
          physical-to-digital infrastructure challenges.
        </p>
      </div>

      {/* Two side-by-side cards */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {initiatives.map((it) => (
          <article
            key={it.title}
            className="card-reflective group overflow-hidden p-6 transition hover:border-primary/30"
          >
            <Visual tone={it.tone} className="h-48 w-full" />
            <span className="eyebrow mt-5 block">{it.tag}</span>
            <h3 className="mt-2 font-display text-headline-md font-semibold">
              {it.title}
            </h3>
            <p className="mt-2 text-body-md text-on-surface-variant">{it.desc}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <CaseChips chips={it.chips} />
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-label-md font-medium text-primary transition group-hover:gap-2.5"
              >
                {it.cta} <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Full-width featured card */}
      <article className="card-reflective mt-6 grid gap-6 overflow-hidden p-6 lg:grid-cols-2 lg:items-center lg:p-8">
        <Visual tone="from-slate-800/60 via-surface-container to-surface-container" className="h-64 w-full" />
        <div>
          <span className="eyebrow block">{featuredInitiative.tag}</span>
          <h3 className="mt-2 font-display text-headline-lg font-semibold tracking-tight">
            {featuredInitiative.title}
          </h3>
          <p className="mt-3 text-body-lg text-on-surface-variant">
            {featuredInitiative.desc}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <CaseChips chips={featuredInitiative.chips} />
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-label-md font-medium text-primary transition hover:gap-2.5"
            >
              {featuredInitiative.cta} <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
