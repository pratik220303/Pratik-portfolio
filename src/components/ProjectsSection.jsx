import {
  ExternalLink,
  Github,
  Brain,
  TrendingUp,
  Layout,
} from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Atelier – E-Commerce",
    description:
      "It is a modern, responsive AI-inspired e-commerce frontend application built using React and Tailwind CSS",
    tags: ["HTML", "CSS", "JAvascript", "React", "Tailwind CSS"],
    category: "Frontend",
     icon: TrendingUp,
    github: "https://github.com/pratik220303/Atelier-E-Commerce",
    demo: "https://atelier-e-commerce-47oh.vercel.app/",
    featured: true,
  },
  {
    title: "Currency Converter",
    description:
      "Web-based currency converter that fetches real-time exchange rates using a public API. Allows users to convert between multiple currencies with accurate and up-to-date values.",
    tags: ["JavaScript", "React", "REST API", "Tailwind CSS"],
    category: "Web / API",
    icon: Brain,
    github: "https://github.com/pratik220303/Atelier-E-Commerce",
    demo: "https://currency-converter-zeta-nine-44.vercel.app/",
    featured: true,
  },
  {
    title: "Weather-Forecast",
    description:
      "Developed a dynamic weather forecasting website that allows users to search for real-time weather conditions and view future forecasts. Integrated a Weather API to fetch accurate temperature, humidity, wind speed, and precipitation data with a clean and responsive UI.",
    tags:["JavaScript", "React", "API Integration", "UI Design"],
    category: "Web Development",
    icon: TrendingUp,
    github: "https://github.com/pratik220303/Weather-Forecast/tree/main/Weather-Forecast-main",
    demo: "https://weather-forecast-nine-zeta.vercel.app/",
    featured: true,
  },
  
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my journey in AI, machine
              learning, and web development
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`card-glow p-6 flex flex-col ${
                  project.featured ? "ring-1 ring-primary/30" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>

                  {project.featured && (
                    <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono">
                      Featured
                    </span>
                  )}
                </div>

                {/* Category */}
                <span className="text-xs font-mono text-primary mb-2">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="flex-1" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>

                  <Button
                    variant="glow-outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="glow-outline" size="lg" asChild>
              <a
                href="https://github.com/pratik220303"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
