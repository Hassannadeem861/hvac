"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { stats } from "@/data/site";

export default function CompanyIntro() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="position-relative"
            >
              <div
                className="position-relative overflow-hidden"
                style={{ borderRadius: "var(--radius-lg)", height: 420 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80"
                  alt="Mr Technician crew working on a commercial HVAC unit"
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="position-absolute p-4"
                style={{
                  bottom: -30,
                  right: -20,
                  background: "var(--color-primary)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-hover)",
                  color: "#fff",
                  maxWidth: 220,
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 700 }}>18+</div>
                <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                  Years keeping homes &amp; businesses comfortable
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">
                <i className="bi bi-house-heart" /> Who We Are
              </span>
              <h2 className="mt-3 mb-3" style={{ fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.4rem)" }}>
                Your Trusted HVAC Partner Since Day One
              </h2>
              <p style={{ color: "#5b6b7c", fontSize: "1.05rem" }}>
                Mr Technician was built on a simple idea: HVAC service should be
                honest, fast, and done right the first time. Today we serve
                homeowners, offices, restaurants, and commercial buildings with
                the same standard — licensed technicians, upfront pricing, and
                equipment we&apos;d install in our own homes.
              </p>
              <ul className="list-unstyled d-flex flex-column gap-3 mt-4">
                {[
                  "NATE-certified technicians on every job",
                  "Flat-rate pricing approved before we start",
                  "Same-day service for most repair calls",
                ].map((item) => (
                  <li key={item} className="d-flex align-items-center gap-2">
                    <span
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "rgba(13,110,253,0.1)",
                        color: "var(--color-primary)",
                      }}
                    >
                      <i className="bi bi-check-lg" style={{ fontSize: "0.85rem" }} />
                    </span>
                    <span style={{ color: "#3b4a59" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-brand-dark mt-4">
                More About Us <i className="bi bi-arrow-right" />
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="row g-4 mt-5 pt-4"
          style={{ borderTop: "1px solid rgba(10,37,64,0.08)" }}
        >
          {stats.map((stat) => (
            <div className="col-6 col-md-3 text-center" key={stat.label}>
              <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--color-secondary)" }}>
                {stat.value}
                {stat.suffix}
              </div>
              <div style={{ color: "#8a97a5", fontSize: "0.95rem" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
