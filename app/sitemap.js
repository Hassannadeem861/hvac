import { siteUrl } from "./layout";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/gallery", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
