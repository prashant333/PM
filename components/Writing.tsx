import { ArrowUpRight } from "lucide-react";
import { writing } from "@/lib/data";

export default function Writing() {
  return (
    <section className="container-max py-20">
      <h2 className="font-display text-headline-lg font-semibold tracking-tight">
        Product Thinking
      </h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {writing.map((post) => (
          <article
            key={post.title}
            className="card group flex gap-5 overflow-hidden p-5 transition hover:border-primary/30"
          >
            {/* thumbnail placeholder */}
            <div
              className={`relative hidden h-28 w-40 shrink-0 overflow-hidden rounded-md border border-white/[0.06] bg-gradient-to-br ${post.tone} sm:block`}
            />
            <div>
              <div className="flex items-center gap-2 text-label-sm uppercase tracking-[0.12em] text-on-surface-variant">
                <span className="text-primary">{post.kind}</span>
                <span className="h-1 w-1 rounded-full bg-outline" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-2 font-display text-body-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-body-md text-on-surface-variant line-clamp-2">
                {post.desc}
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1.5 text-label-md font-medium text-primary transition group-hover:gap-2.5"
              >
                Read <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
