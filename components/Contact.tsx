import { ExternalLink, FileText, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container-max scroll-mt-20 py-20">
      <div className="card-reflective grid gap-10 p-8 lg:grid-cols-2 lg:p-12">
        {/* Left — pitch */}
        <div>
          <h2 className="font-display text-display-lg font-semibold leading-[1.05] tracking-[-0.03em]">
            Interested in working together?
          </h2>
          <p className="mt-6 max-w-md text-body-lg text-on-surface-variant">
            I&apos;m always open to discussing strategic product leadership roles or
            solving complex infrastructure challenges. Let&apos;s build something
            impactful.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="btn-primary">
              LinkedIn Profile <ExternalLink className="h-4 w-4" strokeWidth={2} />
            </a>
            <a href="#" className="btn-secondary">
              <FileText className="h-4 w-4" strokeWidth={2} /> View Resume
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form className="grid gap-5" action="#" method="post">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="field-label">
                Full Name
              </label>
              <input id="name" name="name" className="field-input" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="field-label">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="field-label">
              Inquiry Subject
            </label>
            <select id="subject" name="subject" className="field-input" defaultValue="">
              <option value="" disabled>
                Leadership Opportunity / Consulting
              </option>
              <option>Leadership Opportunity</option>
              <option>Consulting</option>
              <option>Advisory / Mentorship</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input resize-none"
              placeholder="Tell me about your project or role…"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message <Send className="h-4 w-4" strokeWidth={2} />
          </button>
        </form>
      </div>
    </section>
  );
}
