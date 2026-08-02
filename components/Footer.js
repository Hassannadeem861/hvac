"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { siteConfig } from "@/data/site";
import services from "@/data/services";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-brand-secondary text-white pt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <Logo variant="dark" />
            <p className="mt-3" style={{ color: "rgba(255,255,255,0.7)" }}>
              Licensed, insured, and trusted heating and cooling experts serving
              homeowners and businesses with honest pricing and same-day service.
            </p>
            {/* <div className="d-flex gap-2 mt-3">
              {[
                { icon: "bi-facebook", href: siteConfig.social.facebook, label: "Facebook" },
                { icon: "bi-instagram", href: siteConfig.social.instagram, label: "Instagram" },
                { icon: "bi-twitter-x", href: siteConfig.social.twitter, label: "Twitter" },
                { icon: "bi-linkedin", href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: "bi-youtube", href: siteConfig.social.youtube, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    transition: "background 0.2s ease",
                  }}
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div> */}
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="text-white mb-3 fw-semibold">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.7)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white mb-3 fw-semibold">Services</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} style={{ color: "rgba(255,255,255,0.7)" }}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white mb-3 fw-semibold">Contact Info</h6>
            <ul className="list-unstyled d-flex flex-column gap-3" style={{ color: "rgba(255,255,255,0.7)" }}>
              <li className="d-flex gap-2">
                <i className="bi bi-geo-alt-fill mt-1 text-brand-accent" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="d-flex gap-2">
                <i className="bi bi-telephone-fill mt-1 text-brand-accent" />
                <a href={`tel:${siteConfig.phone}`} style={{ color: "rgba(255,255,255,0.7)" }}>
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="d-flex gap-2">
                <i className="bi bi-envelope-fill mt-1 text-brand-accent" />
                <a href={`mailto:${siteConfig.email}`} style={{ color: "rgba(255,255,255,0.7)" }}>
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <h6 className="text-white mt-4 mb-2 fw-semibold">Newsletter</h6>
            {subscribed ? (
              <p className="text-brand-accent mb-0">
                <i className="bi bi-check-circle-fill me-1" />
                Subscribed — thanks!
              </p>
            ) : (
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  className="form-control"
                  style={{ borderRadius: "50px 0 0 50px" }}
                />
                <button
                  onClick={handleSubscribe}
                  className="btn"
                  style={{
                    borderRadius: "0 50px 50px 0",
                    backgroundColor: "var(--color-primary)",
                    color: "#fff",
                  }}
                  type="submit"
                >
                  <i className="bi bi-send-fill" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-top" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <small style={{ color: "rgba(255,255,255,0.55)" }}>
            &copy; {new Date().getFullYear()} Mr Technician. All rights reserved.
          </small>
          <small style={{ color: "rgba(255,255,255,0.55)" }}>
            Licensed &amp; Insured HVAC Contractor
          </small>
        </div>
      </div>
    </footer>
  );
}
