"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryCard({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
      className="position-relative overflow-hidden rounded-4"
      style={{ height: 280, cursor: "pointer" }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
        className="gallery-image"
      />
      <div
        className="position-absolute bottom-0 start-0 end-0 p-3 gallery-overlay"
        style={{
          background: "linear-gradient(to top, rgba(10,37,64,0.88), transparent)",
          color: "#fff",
        }}
      >
        <span className="badge rounded-pill" style={{ background: "var(--color-accent)" }}>
          {item.category}
        </span>
        <p className="mb-0 mt-2 fw-semibold" style={{ fontSize: "0.95rem" }}>
          {item.title}
        </p>
      </div>

      <style jsx>{`
        div:hover :global(.gallery-image) {
          transform: scale(1.1);
        }
      `}</style>
    </motion.div>
  );
}
