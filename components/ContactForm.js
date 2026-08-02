"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import services from "@/data/services";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.message.trim()) next.message = "Tell us a bit about the issue.";
    return next;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-soft p-5 text-center"
      >
        <div
          className="mx-auto mb-3 d-flex align-items-center justify-content-center"
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(13,110,253,0.1)",
            color: "var(--color-primary)",
            fontSize: "2rem",
          }}
        >
          <i className="bi bi-check2" />
        </div>
        <h3>Request received</h3>
        <p style={{ color: "#5b6b7c" }}>
          Thanks for reaching out — a member of our team will contact you shortly to
          confirm your appointment.
        </p>
        <button className="btn-brand mx-auto" onClick={() => setSubmitted(false)}>
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form className="card-soft p-4 p-md-5" onSubmit={handleSubmit} noValidate>
      <div className="row g-4">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label fw-semibold">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={form.name}
            onChange={handleChange}
            placeholder="John Carter"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label fw-semibold">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={form.email}
            onChange={handleChange}
            placeholder="john@email.com"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="col-md-6">
          <label htmlFor="phone" className="form-label fw-semibold">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <div className="col-md-6">
          <label htmlFor="service" className="form-label fw-semibold">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="form-select"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label fw-semibold">
            Tell us what&apos;s going on
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            value={form.message}
            onChange={handleChange}
            placeholder="Describe the issue or the service you're looking for..."
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <div className="col-12">
          <button type="submit" className="btn-brand w-100 w-sm-auto justify-content-center">
            Send Request <i className="bi bi-send-fill" />
          </button>
        </div>
      </div>
    </form>
  );
}
