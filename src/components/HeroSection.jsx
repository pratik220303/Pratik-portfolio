import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-grid opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-orb animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-orb animate-float animation-delay-400" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for internships & collaborations
            </span>
          </div>

          {/* Name */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up animation-delay-200">
            Hi, I&apos;m <span className="text-gradient">Pratik Anand</span>
          </h1>

          {/* Title */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 animate-fade-in-up animation-delay-400">
            AI &amp; Machine Learning Student
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-600">
            Building intelligent systems with data and code. Passionate about
            transforming complex problems into elegant AI-powered solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
            <Button variant="hero-primary" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>

            <Button variant="hero-secondary" size="xl" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com/pratik220303"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/pratik-anand-501828244/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
