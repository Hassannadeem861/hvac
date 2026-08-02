"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function Counter({ value, suffix = "", duration = 1.8, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const isDecimal = value % 1 !== 0;

    function step(timestamp) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div
        style={{
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 700,
          color: "#fff",
        }}
      >
        {display}
        {suffix}
      </div>
      {label && (
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>{label}</div>
      )}
    </motion.div>
  );
}
