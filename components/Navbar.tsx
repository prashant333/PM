import Link from "next/link";
import { Gem } from "lucide-react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
      <nav className="container-max flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2 font-display text-body-lg font-semibold tracking-tight">
          <Gem className="h-5 w-5 text-primary" strokeWidth={2} />
          Rahul
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-body-md text-on-surface-variant transition hover:text-on-surface"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link href="#contact" className="btn-primary !px-4 !py-2 text-label-md">
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
