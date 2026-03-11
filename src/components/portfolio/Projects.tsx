import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Paytrail",
    subtitle: "Turning blind spots into insights",
    description:
      "Finland's largest digital payment provider had no structured way to understand user behavior. I introduced Hotjar analytics — heatmaps, session recordings, user flows — transforming gut feelings into evidence-based design decisions.",
    tags: ["Analytics", "User Research", "Heatmaps", "Data Strategy"],
    impact: "Enabled data-driven UX decisions across the entire product team",
  },
  {
    num: "02",
    title: "Gebwell",
    subtitle: "When design meets engineering",
    description:
      "An energy company building smart heating systems needed a designer who could speak code. I embedded into the dev team, redesigning the Smart Hub interface — device management, reporting dashboards — creating a cohesive product that engineers and end users both love.",
    tags: ["Product Design", "UI Design", "Dev Collaboration", "Dashboard"],
    impact: "Unified design language across a complex technical product",
  },
  {
    num: "03",
    title: "Design Systems Research",
    subtitle: "M.Sc. thesis — mapping uncharted territory",
    description:
      "Surveyed 24 Finnish organizations and conducted 7 deep interviews to uncover how Finnish companies have built design systems, and what issues have the faced in the process. The finding? Communication is both the biggest driver and the biggest blocker of design system success.",
    tags: ["Research", "Design Systems", "Academic", "Strategy"],
    impact: "Published findings on organizational design system maturity",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 md:py-44 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-20 -left-10 font-display text-[12vw] italic text-foreground pointer-events-none select-none leading-none"
      >
        Work
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-6">
            Selected Work
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-t border-border py-14 md:py-20 last:border-b"
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-1">
                  <span className="font-display text-5xl md:text-6xl italic text-primary/20 leading-none">
                    {project.num}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="font-display italic text-primary text-lg">
                    {project.subtitle}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-5 md:col-start-7">
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary/60 font-body mb-4">
                    {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 border border-border text-muted-foreground font-body hover:border-primary/40 hover:text-primary transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;