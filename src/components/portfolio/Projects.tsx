import { motion } from "framer-motion";
import { ChevronDown} from "lucide-react";
import { projects } from "@/data/projects";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
              key={project.num}
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
                  <h3 className="font-display text-3xl tracking-[0.05em] md:text-4xl text-foreground">
                    {project.title}
                  </h3>
                  <p className="font-display italic text-primary text-lg">
                    {project.subtitle}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-5 md:col-start-7">
                  <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1.5 border border-border text-muted-foreground font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-none">
                    <AccordionTrigger className="group inline-flex w-auto items-center gap-2 py-0 text-xs font-body tracking-[0.2em] uppercase text-foreground hover:text-primary hover:no-underline transition-colors duration-300 [&>svg:last-child]:hidden">
                      <span className="group-data-[state=open]:hidden">Read more</span>
                      <span className="hidden group-data-[state=open]:inline">Read less</span>

                      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </AccordionTrigger>

                      <AccordionContent className="pt-8 pb-0">
                        <div className="space-y-10 border-t border-border pt-8">
                        <div className="space-y-4">
                            <h4 className="text-xs font-body tracking-[0.4em] uppercase text-primary">
                              My Role
                            </h4>
                            <p className="text-base text-muted-foreground font-body leading-relaxed">
                              {project.role}
                            </p>
                          </div>

                          <div className="space-y-4">
                            <h4 className="text-xs font-body tracking-[0.4em] uppercase text-primary">
                              Context
                            </h4>
                            <p className="text-base text-muted-foreground font-body leading-relaxed">
                              {project.context}
                            </p>
                          </div>

                          <div className="space-y-4">
                            <h4 className="text-xs font-body tracking-[0.4em] uppercase text-primary">
                              Overview
                            </h4>
                            <div className="space-y-4">
                              {project.overview.map((paragraph, j) => (
                                <p
                                  key={j}
                                  className="text-base text-muted-foreground font-body leading-relaxed"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-5">
                            <h4 className="text-xs font-body tracking-[0.4em] uppercase text-primary">
                              Key Contributions
                            </h4>
                            <ul className="space-y-3">
                              {project.highlights.map((item, j) => (
                                <li
                                  key={j}
                                  className="text-base flex gap-4 text-muted-foreground font-body leading-relaxed"
                                >
                                  <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <h4 className="text-xs font-body tracking-[0.4em] uppercase text-primary">
                              Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="text-sm px-3 py-1.5 border border-border text-muted-foreground font-body"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
