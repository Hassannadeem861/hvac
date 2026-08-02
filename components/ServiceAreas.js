"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { serviceAreas } from "@/data/site";

export default function ServiceAreas() {
  return (
    <section className="section section-white">
      <div className="container">
        <SectionHeading
          eyebrow="Where We Work"
          title="Proudly Serving the Metro Area"
          description="Fast dispatch across the following neighborhoods and surrounding suburbs."
        />
        <div className="row g-3">
          {serviceAreas.map((area, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={area}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                className="d-flex align-items-center gap-2 p-3"
                style={{
                  borderRadius: "var(--radius-sm)",
                  background: "var(--color-bg)",
                  border: "1px solid rgba(10,37,64,0.06)",
                }}
              >
                <i className="bi bi-geo-alt-fill text-brand-primary" />
                <span className="fw-medium" style={{ color: "var(--color-secondary)" }}>
                  {area}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
