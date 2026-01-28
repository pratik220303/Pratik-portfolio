const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "NumPy", level: 80 },
      { name: "Pandas", level: 70 },
      { name: "Scikit-learn", level: 40 },
      { name: "TensorFlow (basics)", level: 50 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 60 },
      { name: "Tailwind CSS", level: 65 },
      { name: "HTML/CSS", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 75 },
      { name: "Firebase", level: 55 },
      { name: "Jupyter", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A growing toolkit of technologies and frameworks I use to bring
              ideas to life
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="card-glow p-6"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="font-heading text-xl font-semibold mb-6 text-foreground flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-mono text-sm text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-primary">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Also familiar with
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Matplotlib",
                "MYSQL",
                "REST APIs",
                "JSON",
                "Linux",
                "Docker (basics)",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-border bg-card text-xs font-mono text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
