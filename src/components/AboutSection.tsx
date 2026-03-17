import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "150K+", label: "YouTube Subscribers" },
  { value: "500+", label: "Luxury Cars Transformed" },
  { value: "8+", label: "Years of Excellence" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-4">
            About ETU Studio
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground mb-8">
            Where Your Car Deserves <br />
            <span className="italic text-gold">The VIP Treatment</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            ETU Studio is the ultimate destination for car lovers who want their vehicles
            treated like royalty. From full-body paint restorations to premium PPF installations,
            we bring a meticulous, red-carpet standard to every project. Our studio in Gurugram
            is where precision meets passion — transforming vehicles into showroom masterpieces.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 gap-8 mt-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-stats text-4xl md:text-6xl text-gold">{stat.value}</p>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
