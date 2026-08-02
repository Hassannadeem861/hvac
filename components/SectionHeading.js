"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-5 ${align === "center" ? "text-center mx-auto" : ""}`}
      style={align === "center" ? { maxWidth: 680 } : { maxWidth: 640 }}
    >
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2
        className="mt-3 mb-3"
        style={{
          fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
          fontWeight: 700,
          color: light ? "#fff" : "var(--color-secondary)",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mb-0"
          style={{
            fontSize: "1.05rem",
            color: light ? "rgba(255,255,255,0.75)" : "#5b6b7c",
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
