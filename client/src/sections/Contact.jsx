import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useContactForm } from "@/hooks/useContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/icons";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: GithubIcon, label: "GitHub", value: "Sujanshrestha712", href: profile.github },
];

const fieldClass =
  "w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-text placeholder:text-muted/60 transition focus:border-mint/60 focus:outline-none focus:ring-2 focus:ring-mint/20";

function Field({ label, name, error, children }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-xs text-muted">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const { values, errors, status, onChange, onSubmit } = useContactForm();
  const sending = status === "sending";

  return (
    <section id="contact" className="py-24">
      <div className="container-page">
        <SectionHeading index={5} title="contact">
          Let's build something <span className="gradient-text">reliable</span> together.
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ul className="space-y-4">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-mint/15 to-violet/15 text-mint">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs text-muted">{label}</span>
                      <span className="block truncate">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-mint/50"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="glass flex items-center gap-4 rounded-2xl p-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-2xl p-6 sm:p-8">
              {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
              <div aria-hidden="true" className="absolute -left-[9999px]">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" error={errors.name}>
                  <input id="name" name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Your name" value={values.name} onChange={onChange} className={fieldClass} />
                </Field>
                <Field label="Email" name="email" error={errors.email}>
                  <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" value={values.email} onChange={onChange} className={fieldClass} />
                </Field>
              </div>
              <Field label="Message" name="message" error={errors.message}>
                <textarea id="message" name="message" required minLength={10} maxLength={3000} rows={5} placeholder="Tell me about your project or role..." value={values.message} onChange={onChange} className={`${fieldClass} resize-y`} />
              </Field>

              {errors.form && (
                <p role="alert" className="text-sm text-red-400">
                  {errors.form}
                </p>
              )}
              {status === "sent" && (
                <p role="status" className="flex items-center gap-2 text-sm text-mint">
                  <CheckCircle2 size={16} /> Message sent. I'll get back to you soon.
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-mint to-violet px-6 py-3 font-semibold text-ink transition hover:shadow-[0_0_30px_-4px] hover:shadow-mint/60 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
