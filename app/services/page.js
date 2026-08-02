import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import services from "@/data/services";
import { siteUrl } from "../layout";

export const metadata = {
  title: "HVAC Services",
  description:
    "Explore Mr Technician's full range of HVAC services — AC installation and repair, heating repair, furnace and heat pump service, duct cleaning, indoor air quality, and commercial HVAC.",
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.shortDescription,
        provider: { "@type": "HVACBusiness", name: "Mr Technician" },
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHeader
        title="Our Services"
        subtitle="Full-service heating, cooling, and air quality solutions for homes and businesses — installed and repaired by licensed technicians."
      />

      <section className="section section-white">
        <div className="container d-flex flex-column gap-5">
          {services.map((service, index) => (
            <div
              id={service.slug}
              key={service.slug}
              className="row align-items-center g-4"
              style={{ scrollMarginTop: "110px" }}
            >
              <div className={`col-lg-6 ${index % 2 === 1 ? "order-lg-2" : ""}`}>
                <div
                  className="position-relative overflow-hidden"
                  style={{ borderRadius: "var(--radius-lg)", height: 340 }}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} service by Mr Technician`}
                    fill
                    sizes="(max-width: 992px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className={`col-lg-6 ${index % 2 === 1 ? "order-lg-1" : ""}`}>
                <div
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                >
                  <i className={`bi ${service.icon}`} />
                </div>
                <h2 style={{ fontWeight: 700, fontSize: "1.6rem" }}>{service.title}</h2>
                <p style={{ color: "#5b6b7c" }}>{service.description}</p>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-brand-primary" />
                      <span style={{ color: "#3b4a59" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/contact" icon="bi-arrow-right">
                  Request This Service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
