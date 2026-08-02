import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import team from "@/data/team";
import { stats } from "@/data/site";
import { siteUrl } from "../layout";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Mr Technician's story, mission, and the licensed, NATE-certified team behind our heating and cooling services.",
  alternates: { canonical: `${siteUrl}/about` },
};

const certifications = [
  { icon: "bi-award-fill", title: "NATE Certified", desc: "North American Technician Excellence certification for every field technician." },
  { icon: "bi-shield-fill-check", title: "EPA 608 Universal", desc: "Certified for handling and servicing all refrigerant types safely." },
  { icon: "bi-patch-check-fill", title: "Manufacturer Certified", desc: "Trained and certified installers for Carrier, Trane, and Lennox equipment." },
  { icon: "bi-file-earmark-check-fill", title: "Fully Licensed & Insured", desc: "State-licensed HVAC contractor with full liability and workers' comp coverage." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Mr Technician"
        subtitle="Nearly two decades of honest heating and cooling service, one appointment at a time."
      />

      {/* Company Story */}
      <section className="section section-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className="position-relative overflow-hidden"
                style={{ borderRadius: "var(--radius-lg)", height: 440 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80"
                  alt="Mr Technician founder inspecting an HVAC unit"
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="eyebrow">
                <i className="bi bi-book" /> Our Story
              </span>
              <h2 className="mt-3 mb-3" style={{ fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.4rem)" }}>
                Built on One Frustrating Repair Bill
              </h2>
              <p style={{ color: "#5b6b7c" }}>
                Mr Technician started in 2007 after our founder, Robert Hail, watched
                a neighbor get overcharged for a repair that should have taken twenty
                minutes. He set out to build an HVAC company that explained problems
                clearly, priced work fairly, and stood behind every job.
              </p>
              <p style={{ color: "#5b6b7c" }}>
                Almost two decades later, that same standard runs through every truck
                we send out — whether it&apos;s a single-family home, a downtown
                restaurant kitchen, or a six-story office building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-brand-bg">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft p-5 h-100">
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: "rgba(13,110,253,0.1)",
                    color: "var(--color-primary)",
                    fontSize: "1.6rem",
                  }}
                >
                  <i className="bi bi-bullseye" />
                </div>
                <h3 style={{ fontWeight: 600 }}>Our Mission</h3>
                <p style={{ color: "#5b6b7c" }}>
                  To deliver heating and cooling service that customers trust without
                  question — through honest diagnostics, fair pricing, and
                  workmanship we&apos;re proud to guarantee.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft p-5 h-100">
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: "rgba(0,180,216,0.1)",
                    color: "var(--color-accent)",
                    fontSize: "1.6rem",
                  }}
                >
                  <i className="bi bi-binoculars-fill" />
                </div>
                <h3 style={{ fontWeight: 600 }}>Our Vision</h3>
                <p style={{ color: "#5b6b7c" }}>
                  To be the HVAC company every homeowner and business in our region
                  calls first — recommended by neighbors, not just found in a search.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ background: "var(--color-secondary)", padding: "64px 0" }}>
        <div className="container">
          <div className="row g-4">
            {stats.map((stat) => (
              <div className="col-6 col-md-3" key={stat.label}>
                <Counter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the People Behind the Work"
            description="Licensed, background-checked, and trained on the equipment they install."
          />
          <div className="row g-4">
            {team.map((member) => (
              <div className="col-sm-6 col-lg-3" key={member.name}>
                <div className="card-soft h-100 text-center p-4">
                  <div
                    className="mx-auto position-relative rounded-circle overflow-hidden mb-3"
                    style={{ width: 96, height: 96 }}
                  >
                    <Image src={member.image} alt={member.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600 }}>{member.name}</h3>
                  <p className="text-brand-primary fw-semibold mb-2" style={{ fontSize: "0.9rem" }}>
                    {member.role}
                  </p>
                  <p style={{ color: "#5b6b7c", fontSize: "0.88rem" }}>{member.bio}</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
                    {member.certifications.map((c) => (
                      <span
                        key={c}
                        className="badge rounded-pill"
                        style={{ background: "rgba(13,110,253,0.08)", color: "var(--color-primary)", fontWeight: 500 }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section className="section bg-brand-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Certifications"
            title="Why Customers Trust Us"
            description="Credentials that back up the work — not just marketing claims."
          />
          <div className="row g-4">
            {certifications.map((cert) => (
              <div className="col-sm-6 col-lg-3" key={cert.title}>
                <div className="card-soft h-100 p-4 text-center">
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                      color: "#fff",
                      fontSize: "1.5rem",
                    }}
                  >
                    <i className={`bi ${cert.icon}`} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>{cert.title}</h3>
                  <p style={{ color: "#5b6b7c", fontSize: "0.88rem" }}>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
