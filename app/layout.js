import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

export const siteUrl = "https://www.mrtechnician.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mr Technician | Heating & Cooling You Can Trust",
    template: "%s | Mr Technician",
  },
  description:
    "Mr Technician provides licensed AC installation, repair, heating, and commercial HVAC services for homeowners and businesses, with 24/7 emergency response and upfront pricing.",
  keywords: [
    "HVAC company",
    "AC repair",
    "heating repair",
    "furnace installation",
    "emergency HVAC",
    "commercial HVAC",
    "air conditioning installation",
  ],
  authors: [{ name: "Mr Technician" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mr Technician",
    title: "Mr Technician | Heating & Cooling You Can Trust",
    description:
      "Licensed HVAC installation, repair, and maintenance for homes and businesses. 24/7 emergency service and upfront, flat-rate pricing.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mr Technician HVAC technician at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Technician | Heating & Cooling You Can Trust",
    description:
      "Licensed HVAC installation, repair, and maintenance for homes and businesses. 24/7 emergency service and upfront, flat-rate pricing.",
    images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.name,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "482 Industrial Parkway, Suite 6",
      addressLocality: "Metro City",
      addressRegion: "MC",
      postalCode: "10245",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <html lang="en">
      <body>
        <JsonLd data={localBusinessSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
