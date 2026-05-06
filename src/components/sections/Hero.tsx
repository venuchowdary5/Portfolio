import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-[0.18] dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary-glow/20 blur-3xl animate-float [animation-delay:2s]" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-secondary border border-border text-xs font-medium text-muted-foreground animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary-glow opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-glow" />
            </span>
            Open to opportunities
          </div>

          <div className="flex items-center gap-5 sm:gap-7 opacity-0 animate-fade-in-slow [animation-delay:120ms]">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-glow blur-md opacity-60" />
              <img
                src={profilePhoto}
                alt="Venu Medarametla portrait"
                width={160}
                height={160}
                className="relative h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full object-cover border-4 border-background shadow-elegant"
              />
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Venu Medarametla
            </h1>
          </div>

          <p
            className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-3xl leading-relaxed opacity-0 animate-fade-in-slow [animation-delay:260ms]"
          >
            <span className="gradient-text font-semibold">UI/UX Designer</span> |{" "}
            <span className="gradient-text font-semibold">Front End Developer (Angular)</span> |{" "}
            <span className="gradient-text font-semibold">Tailwind CSS</span> |{" "}
            <span className="gradient-text font-semibold">HTML</span> |{" "}
            <span className="gradient-text font-semibold">Intern @REMIT2ANY</span>
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground opacity-0 animate-fade-in-slow [animation-delay:380ms]">
            <MapPin className="h-4 w-4" />
            Bengaluru, India
          </div>

          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in-slow [animation-delay:500ms]">
            <Button asChild size="lg" className="group rounded-full px-7 shadow-elegant hover:shadow-glow transition-smooth">
              <a href="#projects">
                View My Projects
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-7 border-2">
              <a href="#contact">
                <Download className="mr-1 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
