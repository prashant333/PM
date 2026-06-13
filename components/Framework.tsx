import { framework } from "@/lib/data";

export default function Framework() {
  return (
    <section id="impact" className="container-max scroll-mt-20 py-20">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-headline-lg font-semibold tracking-tight">
            The Product Framework
          </h2>
          <p className="mt-3 max-w-2xl text-body-md text-on-surface-variant">
            A systematic approach to building high-integrity products that users
            love and businesses value at scale.
          </p>
        </div>
        <span className="eyebrow shrink-0">Methodology Focused</span>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {framework.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="card group p-6 transition hover:border-primary/30 hover:bg-surface-container-high"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-surface-container-lowest text-primary transition group-hover:border-primary/30">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-body-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-body-md text-on-surface-variant">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
