"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "@/data/site";

export default function WhyChooseUs() {
  return (
    <section className="section bg-brand-bg">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Comfort Backed by Honest Craftsmanship"
          description="We built our reputation on doing right by every customer — here's what that looks like in practice."
        />
        <div className="row g-4">
          {whyChooseUs.map((item, index) => (
            <div className="col-sm-6 col-lg-3" key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-soft h-100 p-4 text-center"
              >
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                    color: "#fff",
                    fontSize: "1.75rem",
                  }}
                >
                  <i className={`bi ${item.icon}`} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>{item.title}</h3>
                <p style={{ color: "#5b6b7c", fontSize: "0.92rem" }}>{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
