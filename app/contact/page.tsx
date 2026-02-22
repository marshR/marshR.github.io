export default function ContactPage() {
  return (
    <section className="section stack">
      <header>
        <h1>Contact</h1>
        <p>
          If you’re hiring and need someone who can own UI quality, move fast, and not break the
          site in the process — let’s talk.
        </p>
      </header>

      <article className="card">
        <h2>Email</h2>
        <p>
          <a className="text-link" href="mailto:marce@example.com">
            marce@example.com
          </a>
        </p>
        <p>Replace with your real email before publishing.</p>
      </article>

      <article className="card">
        <h2>Profiles</h2>
        <ul className="bullets">
          <li>
            <a className="text-link" href="https://github.com/marshR">
              GitHub
            </a>
          </li>
          <li>
            <a className="text-link" href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
