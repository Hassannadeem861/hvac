import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site";
import { siteUrl } from "../layout";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Mr Technician for AC and heating repair, installation, or emergency HVAC service. Call, email, or request an appointment online.",
  alternates: { canonical: `${siteUrl}/contact` },
};

const contactCards = [
  {
    icon: "bi-telephone-fill",
    label: "Call Us",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: "bi-lightning-charge-fill",
    label: "Emergency Line",
    value: siteConfig.emergencyPhoneDisplay,
    href: `tel:${siteConfig.emergencyPhone}`,
  },
  {
    icon: "bi-envelope-fill",
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "bi-geo-alt-fill",
    label: "Visit Us",
    value: siteConfig.address,
    href: "https://maps.google.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Request an appointment, ask a question, or call our emergency line — a real person answers."
      />

      <section className="section section-white">
        <div className="container">
          <div className="row g-4 mb-5">
            {contactCards.map((card) => (
              <div className="col-sm-6 col-lg-3" key={card.label}>
                <a
                  href={card.href}
                  target={card.label === "Visit Us" ? "_blank" : undefined}
                  rel={card.label === "Visit Us" ? "noopener noreferrer" : undefined}
                  className="card-soft d-block h-100 p-4 text-center"
                >
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(13,110,253,0.1)",
                      color: "var(--color-primary)",
                      fontSize: "1.4rem",
                    }}
                  >
                    <i className={`bi ${card.icon}`} />
                  </div>
                  <div className="fw-semibold" style={{ color: "var(--color-secondary)" }}>
                    {card.label}
                  </div>
                  <div style={{ color: "#5b6b7c", fontSize: "0.92rem" }}>{card.value}</div>
                </a>
              </div>
            ))}
          </div>

          <div className="row g-5">
            <div className="col-lg-7">
              <h2 className="mb-4" style={{ fontWeight: 700 }}>
                Request an Appointment
              </h2>
              <ContactForm />
            </div>

            <div className="col-lg-5">
              <h2 className="mb-4" style={{ fontWeight: 700 }}>
                Business Hours
              </h2>
              <div className="card-soft p-4 mb-4">
                <ul className="list-unstyled mb-0">
                  {siteConfig.hours.map((h, i) => (
                    <li
                      key={h.day}
                      className={`d-flex justify-content-between py-2 ${
                        i !== siteConfig.hours.length - 1 ? "border-bottom" : ""
                      }`}
                      style={{ borderColor: "rgba(10,37,64,0.06)" }}
                    >
                      <span className="fw-medium" style={{ color: "var(--color-secondary)" }}>
                        {h.day}
                      </span>
                      <span style={{ color: "#5b6b7c" }}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-4 overflow-hidden"
                style={{ height: 300, boxShadow: "var(--shadow-soft)" }}
              >
                <iframe
                  src={siteConfig.mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mr Technician location map"
                />
              </div>

              {/* <div className="d-flex gap-2 mt-4">
                {[
                  { icon: "bi-facebook", href: siteConfig.social.facebook, label: "Facebook" },
                  { icon: "bi-instagram", href: siteConfig.social.instagram, label: "Instagram" },
                  { icon: "bi-twitter-x", href: siteConfig.social.twitter, label: "Twitter" },
                  { icon: "bi-linkedin", href: siteConfig.social.linkedin, label: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "rgba(13,110,253,0.08)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <i className={`bi ${s.icon}`} />
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
