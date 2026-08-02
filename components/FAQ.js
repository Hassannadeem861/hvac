"use client";

import { motion } from "framer-motion";

export default function FAQ({ faqs }) {
  return (
    <div className="accordion" id="faqAccordion">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
          className="accordion-item mb-3 border-0 overflow-hidden"
          style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-soft)" }}
        >
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded="false"
              aria-controls={`collapse-${index}`}
              style={{ color: "var(--color-secondary)" }}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`collapse-${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body" style={{ color: "#5b6b7c" }}>
              {faq.answer}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
