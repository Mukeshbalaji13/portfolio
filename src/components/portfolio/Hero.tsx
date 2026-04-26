import personImg from "@/assets/images/person.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 md:pt-40 lg:pb-32"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="pointer-events-none absolute -left-24 top-32 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-20 top-10 -z-10 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl animate-blob [animation-delay:-7s]" />

      <div className="container-prose grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal text-center lg:text-left">
          <span className="section-eyebrow">
            <span className="pi pi-sparkles" />
            Available for new opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I&rsquo;m{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mukesh Balaji
            </span>
            <br />
            <span className="text-foreground/80">
              I build scalable frontends.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            Software Engineer with 2 years of experience crafting high-performance
            web apps, reusable component libraries, and AI-assisted developer tools
            with Angular & React.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="mailto:mukeshbalaji0804@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <i className="pi pi-envelope" /> Say Hello
            </a>
            <a
              href="/Mukesh_Balaji_Software_Engineer_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <i className="pi pi-download" /> Download CV
            </a>
            <div className="flex items-center gap-3">
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
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <i className={`pi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-4 border-t border-border pt-8 max-w-md mx-auto lg:mx-0">
            {[
              { v: "2", l: "Years Exp." },
              { v: "3+", l: "Projects Shipped" },
              { v: "80+", l: "UI Components" },
              { v: "12+", l: "Chart Components" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-bold text-foreground sm:text-3xl">{s.v}</dt>
                <dd className="text-xs text-muted-foreground sm:text-sm">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-card animate-float">
            <img
              src={personImg}
              alt="Portrait of Mukesh Balaji"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="absolute -left-4 top-10 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-card backdrop-blur sm:block">
            <p className="text-xs text-muted-foreground">Currently building</p>
            <p className="text-sm font-semibold">US Gov workforce platform</p>
          </div>
          <div className="absolute -right-4 bottom-16 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-card backdrop-blur sm:block">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-soft text-primary">
                <i className="pi pi-bolt text-sm" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Stack</p>
                <p className="text-sm font-semibold">Angular · React · TS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
