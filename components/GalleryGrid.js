"use client";

import { useState } from "react";
import GalleryCard from "./GalleryCard";
import { galleryItems } from "@/data/site";

const categories = ["All", ...new Set(galleryItems.map((g) => g.category))];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <>
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="btn rounded-pill px-4 py-2 fw-medium"
            style={{
              border: "1px solid rgba(10,37,64,0.12)",
              background: active === cat ? "var(--color-primary)" : "transparent",
              color: active === cat ? "#fff" : "var(--color-secondary)",
              transition: "all 0.2s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filtered.map((item, index) => (
          <div className="col-sm-6 col-lg-4" key={`${item.title}-${index}`}>
            <GalleryCard item={item} index={index} />
          </div>
        ))}
      </div>
    </>
  );
}
