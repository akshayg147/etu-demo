import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Full Body Paint Restoration — 8 Yr Old Ford Endeavour",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Accidental BMW 5 Series Got Another Life",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Range Rover Defender Complete Transformation",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Premium PPF Installation on Mercedes AMG",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
];

const VideoCard = ({ video, index }: { video: typeof videos[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 0.98 }}
      className="group relative block overflow-hidden bg-card border border-border/50 hover:border-gold/50 transition-all duration-500"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center group-hover:bg-gold/20 transition-all duration-500">
            <Play className="w-6 h-6 text-gold ml-1" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="font-body text-sm text-foreground group-hover:text-gold transition-colors duration-300">
          {video.title}
        </p>
      </div>
    </motion.a>
  );
};

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-32 md:py-40 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Transformations
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground">
            The <span className="italic text-gold">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <a
            href="https://www.youtube.com/@ETUStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm uppercase tracking-widest text-gold hover:text-foreground transition-colors duration-300 border-b border-gold/30 hover:border-foreground pb-1"
          >
            Watch More on YouTube →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
