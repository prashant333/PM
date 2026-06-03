import { journeyPillars, timeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="container-max scroll-mt-20 py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — narrative */}
        <div>
          <h2 className="font-display text-headline-lg font-semibold tracking-tight">
            Bridging Strategy &{" "}
            <span className="text-primary">Customer Centricity</span>
          </h2>

          <div className="mt-6 space-y-4 text-body-md text-on-surface-variant">
            <p>
              My journey started in high-stakes operational roles where I learned
              that the most elegant technology fails without sound logistics.
              Transitioning to Product Management, I brought that &ldquo;boots on the
              ground&rdquo; reality to every roadmap, ensuring technical solutions
              translated to real-world performance.
            </p>
            <p>
              Today, I lead cross-functional squads to solve complex mobility
              infrastructure challenges, turning ambiguous data into scalable SaaS
              products. I thrive where software meets the physical world, managing
              the delicate balance between rapid innovation and operational stability.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-10">
            {journeyPillars.map((p) => (
              <div key={p.title}>
                <div className="font-display text-headline-md font-semibold text-primary">
                  {p.title}
                </div>
                <div className="mt-1 text-label-sm uppercase tracking-[0.12em] text-on-surface-variant">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — vertical stepper / timeline */}
        <div className="flex flex-col gap-3">
          {timeline.map((step) => (
            <div
              key={step.title}
              className={
                step.featured
                  ? "relative overflow-hidden rounded-lg border border-primary/40 p-5"
                  : "card p-5"
              }
            >
              {step.featured && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-container/30 to-transparent"
                />
              )}
              <div className="relative">
                <h3 className="font-display text-body-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-body-md text-on-surface-variant">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
