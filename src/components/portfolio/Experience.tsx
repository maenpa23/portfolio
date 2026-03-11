import { motion } from "framer-motion";

const experiences = [
  {
    title: "Freelance UX Designer",
    company: "The Good Side Oy",
    period: "2025",
    description:
      "Returned as a freelance designer at the request of a client. Designed a new software used in the deployment of heating systems. Lead the project and worked closely with the client developing the new product iteratively.",
  },
  {
    
    title: "UX Designer & UXR Lead",
    company: "The Good Side Oy",
    period: "2024 — 2025",
    description:
      "Worked on client projects designing digital solutions that help clients succeed in international markets. Was responsible for UX research, conducting user data analysis for clients. Actively participated in project management and handled several clients. Also created content for the company's marketing and developed internal documentation.",
  },
  {
    title: "UX Design Trainee",
    company: "Haltu Oy",
    period: "2023",
    description:
      "Worked on client projects designing user-centered digital solutions and interfaces. Implemented UI designs iteratively based on client feedback and actively participated in project management and client collaboration. Was responsible for user experience design from concept to prototype implementation.",
  },
  
];

const education = [
  {
    title: "M.Sc. Information Technology",
    place: "Tampere University",
    period: "2022 — 2024",
    detail: "Human-Technology Interaction · Minor in Psychology",
    thesis: "Development Process of Design Systems in Finnish Companies",
  },
  {
    title: "B.Sc. Automation Engineering",
    place: "Tampere University",
    period: "2018 — 2022",
    detail: "Foundation in systems thinking and technical problem solving",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 md:py-44 bg-card relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-20 -right-10 font-display text-[12vw] italic text-foreground pointer-events-none select-none leading-none"
      >
        Path
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
            Career
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            Experience <span className="italic text-primary">&</span> Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          {/* Work */}
          <div className="col-span-12 md:col-span-6">
            <div className="border-l border-primary/40 pl-8 space-y-14">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-2">{exp.period}</p>
                  <h3 className="font-display text-2xl text-foreground mb-1">{exp.title}</h3>
                  <p className="text-sm text-primary font-body mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="border-l border-border pl-8 space-y-14">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">{edu.period}</p>
                  <h3 className="font-display text-2xl text-foreground mb-1">{edu.title}</h3>
                  <p className="text-sm text-primary font-body mb-3">{edu.place}</p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{edu.detail}</p>
                  {edu.thesis && (
                    <p className="text-sm text-muted-foreground font-body mt-2 italic">
                      Thesis: "{edu.thesis}"
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;