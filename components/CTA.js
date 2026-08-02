"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { siteConfig } from "@/data/site";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="position-relative overflow-hidden text-center text-md-start"
          style={{
            borderRadius: "var(--radius-lg)",
            background:
              "linear-gradient(120deg, var(--color-secondary) 0%, #0e3a63 100%)",
            padding: "56px 40px",
          }}
        >
          <div
            className="position-absolute d-none d-md-block"
            style={{
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,180,216,0.25), transparent 70%)",
              top: -120,
              right: -80,
            }}
          />
          <div className="row align-items-center position-relative">
            <div className="col-md-8">
              <h2 className="text-white mb-2" style={{ fontWeight: 700 }}>
                Ready for reliable heating &amp; cooling?
              </h2>
              <p className="mb-0" style={{ color: "rgba(255,255,255,0.75)" }}>
                Book a free estimate or call our emergency line — a real technician
                answers, day or night.
              </p>
            </div>
            <div className="col-md-4 d-flex flex-column flex-sm-row gap-3 justify-content-md-end mt-4 mt-md-0">
              <Button href="/contact" icon="bi-arrow-right">
                Get Free Estimate
              </Button>
              <a
                href={`tel:${siteConfig.emergencyPhone}`}
                className="btn-brand-outline"
              >
                <i className="bi bi-telephone-fill" />
                {siteConfig.emergencyPhoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
