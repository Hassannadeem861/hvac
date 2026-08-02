import Breadcrumb from "./Breadcrumb";

export default function PageHeader({ title, subtitle }) {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, var(--color-secondary) 0%, #0e3a63 100%)",
        paddingTop: "140px",
        paddingBottom: "56px",
      }}
    >
      <div
        className="position-absolute d-none d-lg-block"
        style={{
          width: 340,
          height: 340,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,216,0.2), transparent 70%)",
          top: -140,
          right: -80,
        }}
      />
      <div className="container position-relative">
        <Breadcrumb current={title} />
        <h1 className="text-white mt-3 mb-2" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mb-0" style={{ color: "rgba(255,255,255,0.72)", maxWidth: 620 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
