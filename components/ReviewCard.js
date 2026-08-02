"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ReviewCard({ review, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="card-soft p-4 h-100 d-flex flex-column"
    >
      <div className="mb-3 text-brand-accent" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className={`bi ${i < review.rating ? "bi-star-fill" : "bi-star"} me-1`}
          />
        ))}
      </div>
      <p className="flex-grow-1" style={{ color: "#4c5b6b" }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="d-flex align-items-center gap-3 mt-3">
        <div
          className="position-relative rounded-circle overflow-hidden flex-shrink-0"
          style={{ width: 48, height: 48 }}
        >
          <Image src={review.avatar} alt={review.name} fill style={{ objectFit: "cover" }} />
        </div>
        <div>
          <div className="fw-semibold" style={{ color: "var(--color-secondary)" }}>
            {review.name}
          </div>
          <small style={{ color: "#8a97a5" }}>{review.location}</small>
        </div>
      </div>
    </motion.div>
  );
}
