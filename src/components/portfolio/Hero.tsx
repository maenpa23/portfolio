import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pb-20">
      {/* Abstract art background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>
      

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block text-xs font-body tracking-[0.4em] uppercase text-primary border border-primary/30 px-4 py-2">
                UX Designer · M.Sc.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] text-foreground mb-8"
            >
              Sofianna
              <br />
              <span className="italic text-primary">Mäenpää</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-8"
            >
              <div className="w-16 h-px bg-primary" />
              <p className="font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
              Crafting human-centered digital experiences with emphaty, AI, and relentless curiosity.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="col-span-12 md:col-span-4 flex md:flex-col items-end justify-between md:justify-end gap-6"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 text-xs font-body tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors"
            >
              Explore work
              <span className="inline-block w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-0 left-8 w-px h-20 bg-gradient-to-b from-transparent to-primary origin-top"
      />
    </section>
  );
};

export default Hero;