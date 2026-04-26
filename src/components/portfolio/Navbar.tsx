import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useTheme, type Theme } from "@/lib/theme";
import logo from "@/assets/images/logo.png";


const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const THEME_OPTIONS: { value: Theme; icon: string; label: string }[] = [
  { value: "light", icon: "pi-sun", label: "Light" },
  { value: "dark", icon: "pi-moon", label: "Dark" },
  { value: "system", icon: "pi-desktop", label: "System" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // active section detection
      const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= y) {
          setActive(NAV_LINKS[i].href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentThemeIcon =
    THEME_OPTIONS.find((t) => t.value === theme)?.icon ?? "pi-desktop";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "border-b border-border bg-background/80 backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <nav className="container-prose flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <img
            src={logo}
            alt="Mukesh Balaji"
            className="overflow-hidden rounded-xl w-12 h-12 object-cover"
          />
          <span className="hidden sm:inline">Mukesh Balaji</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === l.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {l.label}
                {active === l.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme cycle button */}
          <div className="relative">
            <Button
              text
              rounded
              aria-label="Toggle theme"
              className="!h-10 !w-10 !flex items-center justify-center"
              onClick={() => {
                const order: Theme[] = ["light", "dark", "system"];
                const next = order[(order.indexOf(theme) + 1) % order.length];
                setTheme(next);
              }}
            >
              <i className={`pi ${currentThemeIcon} text-base`} />
            </Button>
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 sm:inline-flex"
          >
            <i className="pi pi-send text-xs" />
            Hire Me
          </a>

          <Button
            text
            rounded
            aria-label="Toggle menu"
            className="!h-10 !w-10 lg:!hidden !flex justify-center items-center"
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`pi ${open ? "pi-times" : "pi-bars"} text-base`} />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${open ? "max-h-96" : "max-h-0"
          }`}
      >
        <ul className="container-prose flex flex-col gap-1 py-4">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${active === l.href
                  ? "bg-primary-soft text-primary"
                  : "text-foreground hover:bg-muted"
                  }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
