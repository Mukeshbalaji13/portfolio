import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { useReveal } from "@/lib/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mukesh Balaji — Software Engineer & Frontend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mukesh Balaji, Software Engineer with 2+ years building scalable Angular & React frontends, reusable UI libraries, and AI-assisted developer tools.",
      },
      { property: "og:title", content: "Mukesh Balaji — Software Engineer" },
      {
        property: "og:description",
        content:
          "Frontend specialist crafting scalable, high-performance web apps with Angular, React, and modern UI systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mukesh Balaji — Software Engineer" },
      {
        name: "twitter:description",
        content:
          "Portfolio: Angular, React, scalable UI systems & AI-assisted developer tools.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mukesh Balaji",
          jobTitle: "Software Engineer · Frontend Developer",
          email: "mailto:mukeshbalaji0804@gmail.com",
          url: "https://mukesh-balaji.dev",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          sameAs: [
            "https://github.com/Mukeshbalaji13",
            "https://www.linkedin.com/in/mukesh-balaji",
          ],
          knowsAbout: ["Angular", "React", "TypeScript", "UI Architecture", "Data Visualization"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
