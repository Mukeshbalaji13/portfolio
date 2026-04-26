import logo from "@/assets/images/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-prose flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <img
            src={logo}
            alt="Mukesh Balaji"
            className="overflow-hidden rounded-xl w-12 h-12 object-cover"
          />
          Mukesh Balaji
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mukesh Balaji
        </p>
        <div className="flex items-center gap-2">
          {[
            { icon: "pi-github", url: "https://github.com/Mukeshbalaji13" },
            { icon: "pi-linkedin", url: "https://www.linkedin.com/in/mukesh-balaji" },
            { icon: "pi-envelope", url: "mailto:mukeshbalaji0804@gmail.com" },
          ].map((s) => (
            <a
              key={s.icon}
              href={s.url}
              target={s.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <i className={`pi ${s.icon} text-sm`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
