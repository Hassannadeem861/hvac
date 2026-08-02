"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, var(--color-secondary) 0%, #0e3a63 60%, #0b2f52 100%)",
        paddingTop: "150px",
        paddingBottom: "90px",
      }}
    >
      {/* Ambient accent glow — signature motif referencing airflow */}
      <div
        className="position-absolute d-none d-lg-block"
        style={{
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,216,0.22), transparent 70%)",
          top: -160,
          right: -120,
        }}
      />
      <div
        className="position-absolute d-none d-lg-block"
        style={{
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13,110,253,0.18), transparent 70%)",
          bottom: -140,
          left: -100,
        }}
      />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span
                className="eyebrow"
                style={{ background: "rgba(0,180,216,0.15)", color: "var(--color-accent)" }}
              >
                <i className="bi bi-patch-check-fill" /> Licensed &amp; Insured HVAC Experts
              </span>
              <h1
                className="text-white mt-4 mb-4"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.15 }}
              >
                Heating &amp; Cooling Comfort, <span className="text-brand-accent">Done Right</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: 520 }}>
                From same-day repairs to full system installs, Mr Technician keeps
                homes, offices, and restaurants comfortable — with upfront pricing
                and a workmanship guarantee on every job.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button href="/contact" icon="bi-arrow-right">
                  Get Free Estimate
                </Button>
                <a href={`tel:${siteConfig.phone}`} className="btn-brand-outline">
                  <i className="bi bi-telephone-fill" />
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="d-flex flex-wrap gap-4 mt-5">
                {[
                  { icon: "bi-clock-history", text: "24/7 Emergency Service" },
                  { icon: "bi-shield-check", text: "Workmanship Guarantee" },
                ].map((item) => (
                  <div key={item.text} className="d-flex align-items-center gap-2">
                    <i className={`bi ${item.icon} text-brand-accent fs-5`} />
                    <span style={{ color: "rgba(255,255,255,0.85)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="position-relative"
            >
              <div
                className="position-relative overflow-hidden"
                style={{
                  borderRadius: "var(--radius-lg)",
                  height: 460,
                  boxShadow: "var(--shadow-soft-lg)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&q=80"
                  alt="HVAC technician servicing an air conditioning unit"
                  fill
                  priority
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Floating rating badge — signature element */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="position-absolute d-flex align-items-center gap-3 p-3"
                style={{
                  bottom: -28,
                  left: 24,
                  right: 24,
                  background: "#fff",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-soft-lg)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                >
                  <i className="bi bi-star-fill" />
                </div>
                <div>
                  <div className="fw-bold" style={{ color: "var(--color-secondary)" }}>
                    4.9 / 5 Average Rating
                  </div>
                  <small style={{ color: "#8a97a5" }}>From 2,400+ verified customers</small>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
