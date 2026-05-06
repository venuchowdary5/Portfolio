import { useState, type FormEvent } from "react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Reveal } from "../Reveal";

const EMAIL = "medarametlavenu7866@gmail.com";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      toast.success("Opening your email client…", {
        description: "If nothing happens, email me directly at the address shown.",
      });
      form.reset();
    }, 400);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 gradient-subtle">
      <div className="container">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">06 — Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a role, project, or research idea? I&apos;d love to hear about it.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-card-soft hover:shadow-elegant transition-smooth group"
            >
              <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-medium truncate">{EMAIL}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-card-soft">
              <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                <p className="font-medium">Narasaraopet, Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/medarametla-venu-5b8333294"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 hover:text-primary shadow-card-soft transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/venuchowdary5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 hover:text-primary shadow-card-soft transition-smooth"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card-soft space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about the role or project…"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full sm:w-auto rounded-full px-7 shadow-elegant hover:shadow-glow transition-smooth"
              >
                <Send className="mr-1 h-4 w-4" />
                {loading ? "Sending…" : "Send message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
