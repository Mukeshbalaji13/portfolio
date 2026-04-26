import aboutImg from "@/assets/images/aboutme.png";

const HIGHLIGHTS = [
  { icon: "pi-code", title: "Clean Architecture", text: "Modular, scalable codebases that grow gracefully." },
  { icon: "pi-th-large", title: "Reusable Systems", text: "Built an 80+ component UI library from scratch." },
  { icon: "pi-chart-bar", title: "Custom Charting", text: "Canvas-based charts for advanced data viz." },
  { icon: "pi-sparkles", title: "AI-Assisted Tools", text: "LLM workflows that boost developer velocity." },
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32">
      <div className="container-prose grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card animate-float">
            <img
              src={aboutImg}
              alt="Mukesh working"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="reveal">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title mt-4">
            Software Engineer crafting <span className="bg-gradient-primary bg-clip-text text-transparent">delightful</span> frontends.
          </h2>

          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I&rsquo;m a Software Engineer with 2 years of experience specializing
              in Angular and modern frontend technologies. I focus on building
              scalable, high-performance web applications and designing reusable
              UI systems that improve development efficiency across teams.
            </p>
            <p>
              I&rsquo;ve architected an 80+ component UI library and a charting
              library built from scratch on HTML Canvas, and engineered an
              LLM-powered system using the ChatGPT API to generate chart configs
              from images — significantly cutting development effort.
            </p>
            <p>
              Currently, I&rsquo;m contributing to a US Government workforce platform,
              shipping scalable Angular modules, REST integrations, and responsive,
              user-centric interfaces.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <i className={`pi ${h.icon}`} />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{h.title}</p>
                  <p className="text-sm text-muted-foreground">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
