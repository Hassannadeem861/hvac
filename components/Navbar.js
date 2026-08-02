"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { siteConfig } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top py-3 ${
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
      style={{
        transition: "box-shadow 0.3s ease, padding 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(10,37,64,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand m-0 p-0">
          <Logo />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto gap-lg-1 mt-3 mt-lg-0">
            {links.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li className="nav-item" key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link px-3 fw-medium"
                    style={{
                      color: active ? "var(--color-primary)" : "var(--color-secondary)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="d-none d-md-flex align-items-center gap-2 fw-semibold text-brand-primary"
            >
              <i className="bi bi-telephone-fill" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="btn-brand"
            >
              <i className="bi bi-telephone-fill" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
