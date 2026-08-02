
export default function Logo({ variant = "light" }) {
  const isDark = variant === "dark";
  return (
    <span
      className="navbar-brand-custom"
      style={isDark ? { color: "#fff" } : undefined}
    >
      <span className="logo-mark">
        <i className="bi bi-snow2" aria-hidden="true" />
      </span>
      <span>
        Mr <span className={isDark ? "" : "text-brand-primary"}>Technician</span>
      </span>
    </span>
  );
}
