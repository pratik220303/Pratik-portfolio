import { Brain, Code, Database, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Exploring neural networks and predictive models",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Transforming raw data into meaningful insights",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and efficient solutions",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Approaching challenges with analytical thinking",
  },
];

function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate{" "}
                <span className="text-foreground font-medium">
                  AI & Machine Learning student
                </span>{" "}
                on a journey to understand how intelligent systems can solve
                real-world problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently focused on mastering the fundamentals of machine
                learning, data analysis, and building practical projects that
                demonstrate AI concepts.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring research papers,
                contributing to open-source projects, or experimenting with new
                datasets.
              </p>

             {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-gradient">
                    3+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Projects Built
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-gradient">
                    1+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    ML Models
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-gradient">
                    ∞
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Curiosity
                  </div>
                </div>
              </div>
            </div> 

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="card-glow p-6 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
