import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="border-y border-white/[0.06] bg-surface-container-lowest/50 py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {row.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="font-display text-label-md uppercase tracking-[0.22em] text-on-surface-variant">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
