import type { Metadata } from "next";
import Link from "next/link";
import { NavLink } from "./components/nav-link";
import "./globals.css";

const NAV_ITEMS = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
] as const;

export const metadata: Metadata = {
  title: "Marce Romero — Frontend / UI Developer",
  description:
    "Frontend / UI developer focused on clean, reliable interfaces, WordPress systems, and production-ready UI fixes."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <header className="sticky top-0 z-40 border-b border-[var(--line)]/70 bg-[var(--bg)]/85 backdrop-blur">
          <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <Link className="text-lg font-bold tracking-tight" href="/">
              Marce
            </Link>

            <nav className="flex items-center gap-1 text-sm font-medium" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>
          </div>
        </header>

        <main id="main" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          {children}
        </main>

        <footer className="mt-12 border-t border-[var(--line)] py-6 text-sm text-[var(--muted)]">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">© {new Date().getFullYear()} Marce Romero</div>
        </footer>
      </body>
    </html>
  );
}
