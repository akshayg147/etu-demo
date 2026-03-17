import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Youtube, Instagram } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", car: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    toast.success("Thank you! We'll contact you shortly to confirm your VIP session.");
    setForm({ name: "", phone: "", car: "", service: "" });
  };

  return (
    <section id="contact" className="py-32 md:py-40 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Get In Touch
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            Request <span className="italic text-gold">Access</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {[
              { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
              { key: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
              { key: "car", label: "Car Make / Model", placeholder: "e.g. BMW 5 Series", type: "text" },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-card border border-border/50 px-5 py-4 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none transition-colors duration-300"
                />
              </div>
            ))}

            <div>
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Service Required
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-card border border-border/50 px-5 py-4 font-body text-foreground focus:border-gold/50 focus:outline-none transition-colors duration-300 appearance-none"
              >
                <option value="">Select a service</option>
                <option value="ppf">Premium PPF Installation</option>
                <option value="paint">Full Body Paint Restoration</option>
                <option value="repair">Accidental Damage Repair</option>
                <option value="mods">Bespoke Modifications</option>
              </select>
            </div>

            <Button variant="vip" size="xl" type="submit" className="w-full">
              Book Your VIP Session
            </Button>
            <a
              href="https://wa.me/918800434110?text=Hi%20ETU%20Studio!%20I'd%20like%20to%20book%20a%20VIP%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" size="xl" type="button" className="w-full border-green-600 text-green-500 hover:bg-green-600/10 hover:text-green-400 gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Book via WhatsApp
              </Button>
            </a>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <p className="font-body text-sm text-foreground">+91 8800434110</p>
                  <p className="font-body text-sm text-foreground">+91 8800454210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p className="font-body text-sm text-foreground">
                  Baharampur Naya, Sector 61, Near Cup of Joy,<br />
                  Gurugram, Haryana 122102
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@ETUStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.instagram.com/etustudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[4/3] border border-border/50 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.123456789!2d76.9876543!3d28.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzI0LjQiTiA3NsKwNTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ETU Studio Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
