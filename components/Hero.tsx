import { ArrowRight, Download } from "lucide-react";
import { heroMetrics } from "@/lib/data";
import { asset } from "@/lib/assetPath";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      {/* ambient copper glow, top-down light source */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="container-max relative grid items-center gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — headline + actions */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-container px-3 py-1 text-label-sm uppercase tracking-[0.14em] text-on-surface-variant">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for Leadership Roles
          </span>

          <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-display-lg">
            Building products at the intersection of{" "}
            <span className="text-primary">Sustainability, Mobility, AI, and SaaS.</span>
          </h1>

          <p className="mt-6 max-w-xl text-body-lg text-on-surface-variant">
            Strategizing EV infrastructure and driving data-led growth for fleet
            management systems through operational precision and executive vision.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/prashant-mani/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              LinkedIN Profile <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href={asset("/Prashant-mani.pdf")}
              download="Prashant-Mani-CV.pdf"
              className="btn-secondary"
            >
              <Download className="h-4 w-4" strokeWidth={2} /> Download CV
            </a>
          </div>
        </div>

        {/* Right — executive dashboard card */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <DashboardCard />
        </div>
      </div>
    </section>
  );
}

function DashboardCard() {
  const bars = [40, 62, 48, 80, 58, 95];
  return (
    <div className="card-reflective relative overflow-hidden p-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-display text-label-sm uppercase tracking-[0.16em] text-on-surface-variant">
          Executive Dashboard
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {heroMetrics.map((m) => (
          <div
            key={m.label}
            className="rounded-md border border-white/[0.06] bg-surface-container-lowest/60 p-4"
          >
            <div className="font-display text-headline-lg font-semibold text-primary">
              {m.value}
            </div>
            <div className="mt-1 text-label-sm text-on-surface-variant">{m.label}</div>
          </div>
        ))}

        {/* sparkline / bar chart cell */}
        <div className="rounded-md border border-white/[0.06] bg-surface-container-lowest/60 p-4">
          <div className="flex h-[68px] items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-primary/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
