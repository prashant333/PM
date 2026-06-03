import { toolkit } from "@/lib/data";

export default function Toolkit() {
  return (
    <section className="container-max py-20">
      <h2 className="text-center font-display text-headline-lg font-semibold tracking-tight">
        Product Toolkit
      </h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {toolkit.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.label} className="card p-6">
              <div className="flex items-center gap-2 text-primary">
                <Icon className="h-4 w-4" strokeWidth={2} />
                <span className="font-display text-label-sm uppercase tracking-[0.14em] text-on-surface-variant">
                  {group.label}
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-body-md text-on-surface">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
