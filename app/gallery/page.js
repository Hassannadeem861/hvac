import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import { siteUrl } from "../layout";

export const metadata = {
  title: "Gallery",
  description:
    "Browse photos of Mr Technician's completed AC installations, repairs, heating projects, and commercial HVAC work.",
  alternates: { canonical: `${siteUrl}/gallery` },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="A look at real installations, repairs, and commercial projects completed by our team."
      />

      <section className="section section-white">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      <CTA />
    </>
  );
}
