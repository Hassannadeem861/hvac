import Link from "next/link";

const variantClass = {
  primary: "btn-brand",
  outline: "btn-brand-outline",
  dark: "btn-brand-dark",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}) {
  const classes = `${variantClass[variant] || variantClass.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {icon && <i className={`bi ${icon}`} />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <i className={`bi ${icon}`} />}
    </button>
  );
}
