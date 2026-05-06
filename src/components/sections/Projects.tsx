import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "../Reveal";
import projectAnnotation from "@/assets/project-annotation.jpg";
import projectTelecom from "@/assets/project-telecom.jpg";
import projectUav from "@/assets/project-uav.jpg";
import projectAngularDashboard from "@/assets/project-angular-dashboard.jpg";
import projectPortfolioUi from "@/assets/project-portfolio-ui.jpg";

interface Project {
  title: string;
  category: string;
  description: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  image: string;
  link?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    title: "Automated Image Annotation System",
    category: "Computer Vision",
    description:
      "Annotated 15,000+ images with 98% accuracy for object detection — covering vehicles and pedestrians for autonomous-driving datasets.",
    metrics: [
      { value: "15K+", label: "Images" },
      { value: "98%", label: "Accuracy" },
    ],
    tech: ["CVAT", "Labelbox", "OpenCV", "Python"],
    image: projectAnnotation,
    repo: "#",
  },
  {
    title: "Telecom Network Optimization",
    category: "Predictive Analytics",
    description:
      "Built predictive models analyzing 2M+ records to forecast network failures, helping prioritize maintenance with executive-grade dashboards.",
    metrics: [
      { value: "87%", label: "Model Accuracy" },
      { value: "2M+", label: "Records" },
    ],
    tech: ["Scikit-learn", "SQL", "Power BI"],
    image: projectTelecom,
    repo: "#",
  },
  {
    title: "UAV-Assisted Cognitive Relay Networks",
    category: "Academic Research",
    description:
      "Developed power-control algorithms in MATLAB/Python that optimized data transfer efficiency by 30% in cognitive relay scenarios.",
    metrics: [
      { value: "+30%", label: "Throughput" },
      { value: "B.Tech", label: "Capstone" },
    ],
    tech: ["MATLAB", "Python", "Signal Processing"],
    image: projectUav,
    repo: "#",
  },
  {
    title: "Angular Admin Dashboard",
    category: "Frontend Development",
    description:
      "Built a responsive admin dashboard with Angular and Tailwind CSS, featuring reusable standalone components, dark mode, and interactive charts.",
    metrics: [
      { value: "20+", label: "Components" },
      { value: "100%", label: "Responsive" },
    ],
    tech: ["Angular", "TypeScript", "Tailwind CSS", "RxJS"],
    image: projectAngularDashboard,
    repo: "#",
  },
  {
    title: "Portfolio & UI Showcase",
    category: "UI/UX Design",
    description:
      "Designed and developed a modern portfolio with smooth animations, accessible components, and a clean design system using Figma and Tailwind CSS.",
    metrics: [
      { value: "A+", label: "Lighthouse" },
      { value: "WCAG", label: "Accessible" },
    ],
    tech: ["Figma", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    image: projectPortfolioUi,
    repo: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 gradient-subtle relative">
      <div className="container">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">02 — Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Selected <span className="gradient-text">projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A snapshot of professional and academic work — built around measurable outcomes.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group h-full flex flex-col rounded-2xl bg-card border border-border overflow-hidden shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-background/90 backdrop-blur text-xs font-medium text-foreground border border-border">
                    {p.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 py-4 border-y border-border">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-2xl font-bold text-primary">{m.value}</div>
                        <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-accent text-accent-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-2">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-smooth"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
