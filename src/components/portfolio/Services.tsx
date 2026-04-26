const SERVICES = [
  {
    icon: "pi-desktop",
    title: "Frontend Development",
    text: "Scalable, high-performance web apps with Angular, React, and modern JavaScript — built for responsiveness and seamless UX.",
  },
  {
    icon: "pi-th-large",
    title: "Component & Library Development",
    text: "Reusable UI component libraries built from scratch — enabling faster development, consistency, and scalable architecture.",
  },
  {
    icon: "pi-chart-line",
    title: "Data Visualization & APIs",
    text: "Custom Canvas-based charting, REST integrations, and complex data flows powering dynamic, interactive interfaces.",
  },
  {
    icon: "pi-sparkles",
    title: "AI & Automation",
    text: "LLM-driven solutions that automate frontend workflows, generate dynamic configs, and supercharge developer productivity.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32">
      <div className="container-prose grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <span className="section-eyebrow">What I Do</span>
          <h2 className="section-title mt-4">
            Services tailored to <span className="bg-gradient-primary bg-clip-text text-transparent">your product</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            I specialize in building scalable frontend applications, reusable UI
            components, and high-performance web solutions using modern
            technologies. I focus on writing clean, maintainable code and
            designing architectures that improve dev efficiency.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <i className="pi pi-send" /> Start a project
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <i className={`pi ${s.icon} text-xl`} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
