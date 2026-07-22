import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="py-32 md:py-44 relative overflow-hidden">
      {/* Oversized label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-20 -left-10 font-display text-[12vw] italic text-foreground pointer-events-none select-none leading-none"
      >
        About
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - headline */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-5"
          >
            <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-6">
              Who am I
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground leading-[1.05]">
              Designing with
              <br />
              <span className="italic text-primary">insight</span>
            </h2>
          </motion.div>

          {/* Right column - content */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-12 md:col-span-6 md:col-start-7 space-y-6"
          >
            <p className="text-foreground/90 font-body text-lg leading-relaxed">
            I'm a UX Designer and M.Sc. (IT) passionate about creating impactful digital experiences. 
            By combining user-centered design, research, and AI-powered workflows, 
            I help build products that people genuinely enjoy using. I'm driven by curiosity, continuous learning, 
            and a constant ambition to grow as a designer.
            </p>
            <p className="text-base text-muted-foreground font-body leading-relaxed">
            I love solving complex problems by understanding the people behind them. 
            From research to collaborating with cross-functional teams, 
            I'm motivated by turning insights into meaningful product decisions.
            </p>

            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-border">
              {[
                { label: "Strengths", items: ["UI Design", "Usability testing", "AI", "Design Systems"] },
                { label: "Languages", items: ["Finnish — native", "English — C2", "Swedish — B2", "German — A1"] },
                { label: "Stack", items: ["Figma","Claude", "Cursor", "M365"] },
              ].map((col) => (
                <div key={col.label}>
                  <p className="text-xs tracking-[0.25em] uppercase text-primary font-body mb-3">
                    {col.label}
                  </p>
                  {col.items.map((item) => (
                    <p key={item} className="text-base text-muted-foreground font-body leading-loose">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;