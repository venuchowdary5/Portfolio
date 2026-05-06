import { Reveal } from "../Reveal";

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border/60">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-4">
            <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">01 — About</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Engineering meets <span className="gradient-text">data storytelling</span>.
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m an Electronics & Communication Engineering from{" "}
              <span className="text-foreground font-medium">National Institute of Technology, Andhra Pradesh, India</span> who fell in love with what
              data can reveal. Today I work at the intersection of analytics, geospatial systems, and machine
              learning — turning messy datasets into decisions that move the needle.
            </p>
            <p>
              Recent work spans annotating 15,000+ images for autonomous-driving pipelines, building
              predictive models on 2M+ telecom records, and crafting executive dashboards in Power BI. I care
              about clean code, reproducible analysis, and outcomes you can measure.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
