import Link from "next/link";

export default function Breadcrumb({ current }) {
  return (
    <nav aria-label="breadcrumb" className="pt-3">
      <ol className="breadcrumb mb-0" style={{ "--bs-breadcrumb-divider": "'/'" }}>
        <li className="breadcrumb-item">
          <Link href="/" style={{ color: "rgba(255,255,255,0.7)" }}>
            Home
          </Link>
        </li>
        <li className="breadcrumb-item active text-brand-accent" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}
