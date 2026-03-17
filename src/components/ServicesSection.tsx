import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import servicePpf from "@/assets/service-ppf.jpg";
import servicePaint from "@/assets/service-paint.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceMods from "@/assets/service-mods.jpg";

const services = [
  {
    title: "Premium PPF Installation",
    description: "Self-healing paint protection film that shields your investment from road debris, scratches, and UV damage.",
    image: servicePpf,
  },
  {
    title: "Full Body Paint Restoration",
    description: "Multi-stage paint correction and ceramic coating to restore your vehicle's factory-fresh brilliance.",
    image: servicePaint,
  },
  {
    title: "Accidental Damage Repair",
    description: "Expert panel beating, dent removal, and precision color matching to bring damaged vehicles back to life.",
    image: serviceRepair,
  },
  {
    title: "Bespoke Modifications",
    description: "Custom interior retrimming, exterior upgrades, and performance modifications tailored to your vision.",
    image: serviceMods,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden bg-card border border-border/50 hover:border-gold/50 transition-all duration-500"
      style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gold rim light */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3">
          {service.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 md:py-40 px-6 bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Our Services
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Precision <span className="italic text-gold">Craftsmanship</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
