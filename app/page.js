import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSteps from "@/components/ProcessSteps";
import EmergencyBanner from "@/components/EmergencyBanner";
import ReviewCard from "@/components/ReviewCard";
import ServiceAreas from "@/components/ServiceAreas";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import services from "@/data/services";
import reviews from "@/data/reviews";
import faqs from "@/data/faq";
import { siteUrl } from "./layout";

export const metadata = {
  title: "Mr Technician | Licensed HVAC Company for Homes & Businesses",
  description:
    "Same-day AC repair, heating repair, and installation from licensed technicians. Trusted by homeowners, offices, restaurants, and shops. 24/7 emergency service.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Mr Technician | Licensed HVAC Company for Homes & Businesses",
    description:
      "Same-day AC repair, heating repair, and installation from licensed technicians with upfront pricing and 24/7 emergency response.",
    url: siteUrl,
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero />
      <CompanyIntro />

      <section className="section bg-brand-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Heating & Cooling Solutions"
            description="From routine tune-ups to full system replacements, our licensed technicians handle it all."
          />
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={service.slug}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSteps />

      <section className="section bg-brand-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Featured"
            title="Our Most Requested Services"
            description="These are the calls we get the most — and the ones we've refined to a science."
          />
          <div className="row g-4">
            {services.slice(0, 3).map((service, index) => (
              <div className="col-md-6 col-lg-4" key={service.slug}>
                <ServiceCard service={service} index={index} compact />
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Button href="/services" icon="bi-arrow-right">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <EmergencyBanner />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Our Customers Say"
            description="Real feedback from homeowners and businesses we've worked with."
          />
          <div className="row g-4">
            {reviews.map((review, index) => (
              <div className="col-md-6 col-lg-4" key={review.name}>
                <ReviewCard review={review} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas />
      <CTA />

      <section className="section bg-brand-bg">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers to what customers ask us most before booking."
          />
          <div className="container-narrow">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
