import { GraduationCap } from "lucide-react";
import { Reveal } from "../Reveal";

const items = [
  {
    icon: GraduationCap,
    period: "",
    title: "Bachelor of Technology",
    institution: "Electronics & Communication Engineering (2023)",
    detail: "National Institute of Technology, Andhra Pradesh, India",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">05 — Background</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Education & <span className="gradient-text">credentials</span>
          </h2>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-8">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 120}>
                <div className="relative pl-14 sm:pl-20">
                  <div className="absolute left-0 sm:left-2 top-1 flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground shadow-elegant">
                    <it.icon className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl gradient-card border border-border p-6 shadow-card-soft hover:shadow-elegant transition-smooth">
                    <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                      {it.period}
                    </p>
                    <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{it.institution}</p>
                    <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{it.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
