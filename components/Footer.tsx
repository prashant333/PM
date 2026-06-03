import { Gem } from "lucide-react";
import { footerColumns } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-container-lowest/40">
      <div className="container-max grid gap-10 py-14 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2 font-display text-body-lg font-semibold tracking-tight">
            <Gem className="h-5 w-5 text-primary" strokeWidth={2} />
            Rahul
          </div>
          <p className="mt-3 max-w-xs text-body-md text-on-surface-variant">
            Strategic Product Leadership in Mobility &amp; AI.
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h4 className="font-display text-label-sm uppercase tracking-[0.14em] text-on-surface-variant">
              {col.heading}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-md text-on-surface transition hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-max py-6 text-label-sm text-on-surface-variant">
          © 2026 Rahul Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
