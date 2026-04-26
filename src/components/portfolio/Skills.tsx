import angular from "@/assets/images/skills/angular.png";
import react from "@/assets/images/skills/react.png";
import typescript from "@/assets/images/skills/typescript.png";
import javascript from "@/assets/images/skills/javascript.png";
import html5 from "@/assets/images/skills/html5.png";
import css3 from "@/assets/images/skills/css3.png";
import scss from "@/assets/images/skills/scss.png";
import tailwind from "@/assets/images/skills/tailwind.png";
import redux from "@/assets/images/skills/redux.png";
import primeng from "@/assets/images/skills/primeng.png";
import chartjs from "@/assets/images/skills/chartjs.png";
import git from "@/assets/images/skills/git.webp";
import rxjs from "@/assets/images/skills/rxjs.svg";
import antdesign from "@/assets/images/skills/antdesign.svg";

const SKILLS = [
  { name: "Angular", img: angular },
  { name: "React", img: react },
  { name: "TypeScript", img: typescript },
  { name: "JavaScript", img: javascript },
  { name: "HTML5", img: html5 },
  { name: "CSS3", img: css3 },
  { name: "Tailwind CSS", img: tailwind },
  { name: "SCSS", img: scss },
  { name: "Redux", img: redux },
  { name: "RxJS", img: rxjs },
  { name: "PrimeNG", img: primeng },
  { name: "Ant Design", img: antdesign },
  { name: "Chart.js", img: chartjs },
  { name: "Git", img: git },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-surface py-20 lg:py-32">
      <div className="container-prose">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Tech Stack</span>
          <h2 className="section-title mt-4">
            Tools I use to ship{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              great products
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A blend of frameworks, libraries, and tooling I rely on every day to
            craft fast, accessible and maintainable web experiences.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="reveal group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card"
            >
              <div className="grid h-14 w-14 place-items-center">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <p className="text-sm font-semibold text-foreground">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
