import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Malhotra",
    car: "BMW 7 Series",
    text: "ETU Studio transformed my 7 Series like nothing I've seen before. The paint correction was flawless — it looked better than the day I bought it. True VIP experience.",
  },
  {
    name: "Priya Kapoor",
    car: "Range Rover Velar",
    text: "I was skeptical about PPF, but the team at ETU showed me the difference with real-time demonstrations. My Velar is now protected and looks absolutely stunning.",
  },
  {
    name: "Vikram Singh",
    car: "Mercedes S-Class",
    text: "After an accident, I thought my S-Class would never be the same. ETU's restoration work was nothing short of miraculous. You can't tell it was ever damaged.",
  },
  {
    name: "Ananya Sharma",
    car: "Audi RS5",
    text: "The bespoke interior work they did on my RS5 is incredible. Custom leather, perfect stitching — it feels like a completely different car. Highly recommend.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-32 md:py-40 px-6 bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Client Reviews
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Voices of <span className="italic text-gold">Excellence</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="bg-card border border-border/50 p-8 md:p-12 text-center" style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-display text-xl md:text-2xl font-light italic text-foreground leading-relaxed mb-8">
              "{t.text}"
            </p>
            <p className="font-body text-sm uppercase tracking-widest text-gold">{t.name}</p>
            <p className="font-body text-xs text-muted-foreground mt-1">{t.car}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
