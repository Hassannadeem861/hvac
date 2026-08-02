"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export default function EmergencyBanner() {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{ background: "var(--color-secondary)", padding: "72px 0" }}
    >
      <div
        className="position-absolute d-none d-md-block"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,216,0.2), transparent 70%)",
          top: -180,
          left: -100,
        }}
      />
      <div className="container position-relative">
        <div className="row align-items-center g-4">
          <div className="col-lg-2 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="d-inline-flex align-items-center justify-content-center"
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "rgba(0,180,216,0.15)",
                color: "var(--color-accent)",
                fontSize: "2.5rem",
              }}
            >
              <i className="bi bi-lightning-charge-fill" />
            </motion.div>
          </div>
          <div className="col-lg-7 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-white mb-2" style={{ fontWeight: 700, fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)" }}>
                24/7 Emergency HVAC Service
              </h2>
              <p className="mb-0" style={{ color: "rgba(255,255,255,0.7)" }}>
                No heat, no cool, or a system that just quit — our emergency team
                answers the phone and dispatches a technician, any hour, any day.
              </p>
            </motion.div>
          </div>
          <div className="col-lg-3 text-center text-lg-end">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href={`tel:${siteConfig.emergencyPhone}`}
              className="btn-brand justify-content-center"
              style={{ fontSize: "1.1rem" }}
            >
              <i className="bi bi-telephone-forward-fill" />
              {siteConfig.emergencyPhoneDisplay}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
