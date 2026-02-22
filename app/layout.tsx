import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link className="logo" href="/">
              Marce
            </Link>
            <nav className="nav" aria-label="Primary">
              <Link href="/projects">Projects</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main id="main" className="container">
          {children}
        </main>
        <footer className="site-footer">
          <div className="container">© {new Date().getFullYear()} Marce Romero</div>
        </footer>
      </body>
    </html>
  );
}
