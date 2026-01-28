import { GraduationCap, Calendar, MapPin } from "lucide-react";

function EducationSection() {
  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Education Card */}
          <div className="card-glow p-8 relative overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 gradient-orb opacity-50" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Bachelor of Technology
                      </h3>
                      <p className="text-primary font-medium">
                        Specialization in Artificial Intelligence & Machine Learning
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-mono w-fit">
                      Currently Enrolled
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Noida Institute of Engineering & Technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2024 – 2028</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    Pursuing a comprehensive computer science education with a
                    focus on artificial intelligence, machine learning, and data
                    science. Coursework includes algorithms, data structures,
                    statistical learning, neural networks, and software
                    engineering.
                  </p>

                  {/* Relevant Courses */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Machine Learning",
                        "Data Structures & Algorithms",
                        "Statistical Methods",
                        "Linear Algebra",
                        "Database Systems",
                        "Web Development",
        
                      ].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-full border border-border bg-background text-xs font-mono text-muted-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Currently pursuing certifications in Machine Learning, Probability and Statistics using Python
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
