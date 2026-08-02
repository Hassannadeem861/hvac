"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service, index = 0, compact = false }) {
  return (
    <motion.div
      id={service.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="card-soft h-100 overflow-hidden"
      style={{ scrollMarginTop: "110px" }}
    >
      <div className="position-relative overflow-hidden" style={{ height: 210 }}>
        <div className="service-image-wrap h-100 w-100 position-relative">
          <Image
            src={service.image}
            alt={`${service.title} — Mr Technician HVAC service`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
            className="service-image"
          />
        </div>
        <div
          className="position-absolute d-flex align-items-center justify-content-center"
          style={{
            top: 16,
            left: 16,
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "var(--color-white)",
            boxShadow: "var(--shadow-soft)",
            color: "var(--color-primary)",
            fontSize: "1.4rem",
          }}
        >
          <i className={`bi ${service.icon}`} aria-hidden="true" />
        </div>
      </div>

      <div className="p-4">
        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>{service.title}</h3>
        <p style={{ color: "#5b6b7c", fontSize: "0.95rem" }}>
          {service.shortDescription}
        </p>
        {!compact && (
          <Link
            href={`/services#${service.slug}`}
            className="d-inline-flex align-items-center gap-2 fw-semibold text-brand-primary"
          >
            Learn More <i className="bi bi-arrow-right" />
          </Link>
        )}
      </div>

      <style jsx>{`
        :global(.card-soft:hover) .service-image {
          transform: scale(1.08);
        }
      `}</style>
    </motion.div>
  );
}
