import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="section stack">
      <header>
        <h1>Resume</h1>
        <p>Frontend / UI Developer — focused on reliable production delivery.</p>
      </header>

      <div className="cta-row">
        <a className="btn primary" href="/resume.pdf">
          Download CV
        </a>
        <Link className="btn" href="/contact">
          Email me
        </Link>
      </div>

      <article className="card">
        <h2>Quick fit summary</h2>
        <ul className="bullets">
          <li>WordPress: Elementor, ACF, custom fixes, multi-site consistency.</li>
          <li>Frontend: HTML, CSS, JS, responsive cleanup, UI QA, debugging.</li>
          <li>Delivery: low-risk fixes, clear docs, maintainable patterns.</li>
        </ul>
      </article>
    </section>
  );
}
