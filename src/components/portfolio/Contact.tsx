import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-44 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 -translate-y-1/2 left-0 font-display text-[15vw] italic text-foreground pointer-events-none select-none leading-none"
      >
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-7"
          >
            <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-6">
              Get in Touch
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground leading-[1.05] mb-8">
              Let's create
              <br />
              something <span className="italic text-primary">remarkable</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-lg">
              I'm seeking opportunities to grow and contribute to meaningful UX work.
              If you value enthusiasm, research-driven design, and someone who isn't afraid to
              challenge assumptions — let's talk.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end"
          >
            <div className="space-y-6">
              <a
                href="mailto:sofianna.maenpaa@hotmail.com"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors duration-300"
              >
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-1">Email</p>
                  <p className="text-foreground font-body text-sm">sofianna.maenpaa@hotmail.com</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="tel:+358404164005"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors duration-300"
              >
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-1">Phone</p>
                  <p className="text-foreground font-body text-sm">040 416 4005</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <div className="py-4 border-b border-border">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-1">Location</p>
                <p className="text-foreground font-body text-sm">Tampere, Finland</p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs tracking-[0.2em] uppercase text-primary font-body mb-4">References</p>
              <div className="space-y-3">
                <div>
                  <p className="font-body text-sm text-foreground">Mikki Aalto-Ylevä</p>
                  <p className="text-xs text-muted-foreground font-body">The Good Side Oy · mikki@goodside.fi</p>
                </div>
                <div>
                  <p className="font-body text-sm text-foreground">Janne Gylling</p>
                  <p className="text-xs text-muted-foreground font-body">Moretag Agency · janne@moretag.fi</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 pt-8 border-t border-border flex items-center justify-between"
        >
          <p className="text-muted-foreground text-xs font-body tracking-wide">
            © 2026 Sofianna Mäenpää
          </p>
          <p className="text-muted-foreground text-xs font-body italic">
            Designed with insight.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;