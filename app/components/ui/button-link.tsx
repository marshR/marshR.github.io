import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "muted";
};

export function ButtonLink({ href, children, variant = "muted" }: ButtonLinkProps) {
  const base = "rounded-xl px-4 py-2.5 font-semibold";
  const tone = variant === "primary" ? "btn-primary" : "btn-muted";

  return (
    <Link className={`${tone} ${base}`} href={href}>
      {children}
    </Link>
  );
}
