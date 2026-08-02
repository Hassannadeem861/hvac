"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { process } from "@/data/site";

export default function ProcessSteps() {
  return (
    <section className="section section-white">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="From First Call to Fixed — Four Simple Steps"
          description="A predictable, no-pressure process so you always know what happens next."
        />
        <div className="row g-4">
          {process.map((step, index) => (
            <div className="col-md-6 col-lg-3" key={step.step}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="position-relative p-4 h-100"
                style={{
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid rgba(10,37,64,0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "rgba(13,110,253,0.12)",
                    lineHeight: 1,
                  }}
                >
                  {step.step}
                </span>
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(13,110,253,0.08)",
                    color: "var(--color-primary)",
                    fontSize: "1.4rem",
                    marginTop: -8,
                  }}
                >
                  <i className={`bi ${step.icon}`} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>{step.title}</h3>
                <p style={{ color: "#5b6b7c", fontSize: "0.92rem" }}>{step.description}</p>

                {index < process.length - 1 && (
                  <i
                    className="bi bi-arrow-right d-none d-lg-block position-absolute"
                    style={{
                      right: -30,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "rgba(10,37,64,0.15)",
                      fontSize: "1.5rem",
                    }}
                  />
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
