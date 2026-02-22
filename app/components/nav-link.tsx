"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname?.startsWith(`${href}/`));

  return (
    <Link
      className={`rounded-full px-3 py-1.5 transition ${isActive ? "bg-black/10" : "hover:bg-black/5"}`}
      href={href}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
