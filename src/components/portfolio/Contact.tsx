import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useRef } from "react";

const CONTACT_INFO = [
  { icon: "pi-map-marker", title: "Location", value: "Chennai, Tamil Nadu" },
  { icon: "pi-envelope", title: "Email", value: "mukeshbalaji0804@gmail.com", href: "mailto:mukeshbalaji0804@gmail.com" },
  { icon: "pi-phone", title: "Phone", value: "+91 90927 56406", href: "tel:+919092756406" },
];

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

function validate(data: { name: string; email: string; subject: string; message: string }): Errors {
  const e: Errors = {};
  if (!data.name.trim()) e.name = "Name is required";
  else if (data.name.trim().length < 2) e.name = "Name is too short";
  if (!data.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email";
  if (!data.subject.trim()) e.subject = "Subject is required";
  if (!data.message.trim()) e.message = "Message is required";
  else if (data.message.trim().length < 10) e.message = "Message should be at least 10 characters";
  return e;
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const toast = useRef<Toast>(null);

  const update = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    setSubmitting(true);
    // Simulate send (no email backend wired). Open user's mail client as fallback.
    await new Promise((r) => setTimeout(r, 700));
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:mukeshbalaji0804@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    toast.current?.show({
      severity: "success",
      summary: "Ready to send",
      detail: "Your email client has been opened.",
      life: 3500,
    });
    setSubmitting(false);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative bg-surface py-20 lg:py-32">
      <Toast ref={toast} position="bottom-right" />
      <div className="container-prose">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title mt-4">
            Let&rsquo;s build something{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              great together
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have an opportunity or want to collaborate? Drop a message — I&rsquo;d
            love to connect and discuss.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {CONTACT_INFO.map((c) => {
              const Inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <i className={`pi ${c.icon} text-lg`} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
                    <p className="truncate font-semibold text-foreground">{c.value}</p>
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.title}
                  href={c.href}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={c.title}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
                >
                  {Inner}
                </div>
              );
            })}

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm text-muted-foreground">Find me on</p>
              {[
                { icon: "pi-github", url: "https://github.com/Mukeshbalaji13", label: "GitHub" },
                { icon: "pi-linkedin", url: "https://www.linkedin.com/in/mukesh-balaji", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <i className={`pi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <InputText
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                  className="w-full"
                  invalid={!!errors.name}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <InputText
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@email.com"
                  className="w-full"
                  invalid={!!errors.email}
                />
              </Field>
            </div>
            <Field label="Subject" error={errors.subject}>
              <InputText
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                placeholder="What's this about?"
                className="w-full"
                invalid={!!errors.subject}
              />
            </Field>
            <Field label="Message" error={errors.message}>
              <InputTextarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell me a bit about your project..."
                rows={5}
                autoResize
                className="w-full"
                invalid={!!errors.message}
              />
            </Field>

            <Button
              type="submit"
              loading={submitting}
              className="!w-full !justify-center !rounded-full !py-3 !font-semibold"
            >
              <i className="pi pi-send mr-2" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && (
        <span className="mt-1 flex items-center gap-1 text-xs text-destructive">
          <i className="pi pi-exclamation-circle text-[10px]" />
          {error}
        </span>
      )}
    </label>
  );
}
