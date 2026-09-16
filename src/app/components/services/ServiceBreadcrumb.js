import Link from "next/link";

export default function ServiceBreadcrumb({ title, serviceNumber, flagship }) {
  return (
    <div className="svc-breadcrumb">
      <Link href="/services">Services</Link>
      <span>/</span>
      <span className="svc-breadcrumb__current">{title}</span>
      <span className="svc-breadcrumb__rule" />
      <span>
        Service {serviceNumber}
        {flagship ? " — Flagship" : ""}
      </span>
    </div>
  );
}
