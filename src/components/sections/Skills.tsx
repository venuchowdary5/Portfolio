import { Code2, Palette, Layers, Layout, FileCode, Braces, Terminal, Cpu, GitBranch, Github, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "../Reveal";

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

const skills: Skill[] = [
  {
    icon: Code2,
    title: "Angular Developer",
    description: "Building modern, scalable web applications with Angular framework.",
    tags: ["Angular", "TypeScript", "RxJS", "NgRx", "Standalone Components"],
  },
  {
    icon: Palette,
    title: "Frontend Development",
    description: "Crafting responsive and interactive user interfaces.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SPA"],
  },
  {
    icon: Layout,
    title: "Tailwind CSS",
    description: "Rapidly building custom designs with utility-first CSS framework.",
    tags: ["Tailwind CSS", "Custom Themes", "Dark Mode", "Animations"],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user experiences.",
    tags: ["Figma", "Component Design", "Design Systems", "Accessibility"],
  },
  {
    icon: Terminal,
    title: "Python",
    description: "Writing scripts and solving problems with Python.",
    tags: ["Python", "Scripting", "OOP", "Problem Solving"],
  },
  {
    icon: FileCode,
    title: "Cascading Style Sheets (CSS)",
    description: "Styling modern web layouts with advanced CSS techniques.",
    tags: ["CSS3", "Flexbox", "Grid", "Animations"],
  },
  {
    icon: Braces,
    title: "JavaScript",
    description: "Building dynamic and interactive web experiences.",
    tags: ["ES6+", "DOM", "Async/Await", "Fetch API"],
  },
  {
    icon: Cpu,
    title: "C++",
    description: "Solving algorithmic challenges with C++ fundamentals.",
    tags: ["C++", "OOP", "DSA", "STL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "Everyday tools I use for version control, collaboration, and development.",
    tags: ["Git", "GitHub", "VS Code"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="container">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">04 — Expertise</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Professional <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Frontend development expertise in Angular, Tailwind CSS, and modern web technologies.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group h-full p-7 rounded-2xl gradient-card border border-border hover:border-primary/40 shadow-card-soft hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
