import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Design",
    items: ["UI/Visual Design", "Usability Testing", "Heuristic Evaluation", "Accessibility Auditing", "User Data Analysis"],
  },
  {
    title: "Interests",
    items: ["User Research", "Prototyping", "Design Systems", "Accessibility", "Branding", "Analytics"],
  },
  {
    title: "Tools",
    items: ["Figma", "Hotjar", "Microsoft 365"],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-44 bg-card relative overflow-hidden">
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
            Toolkit
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            Skills <span className="italic text-primary">&</span> Interests
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="col-span-12 md:col-span-4"
            >
              <h3 className="font-display text-2xl text-foreground mb-6 pb-4 border-b border-primary/30">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground font-body text-sm group">
                    <span className="w-2 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    <span className="group-hover:text-foreground transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;