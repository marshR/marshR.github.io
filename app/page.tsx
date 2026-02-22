import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="section hero">
        <p className="kicker">
          Frontend / UI Developer — I ship clean, reliable interfaces and I’m the person you want
          when the UI is “almost right” but not quite.
        </p>
        <h1>Hi, I’m Marce.</h1>
        <p className="lead">
          I’m a frontend / UI developer. I work on production websites and dashboards — shipping UI
          updates, debugging messy stuff, and making layouts consistent across devices.
        </p>
        <p className="lead">
          I’ve spent the last few years deep in WordPress ecosystems (Elementor/ACF + custom
          fixes), and I’m also comfortable building clean UI with modern frontend tooling when
          that’s the right move.
        </p>
        <div className="cta-row">
          <Link className="btn primary" href="/projects">
            See projects
          </Link>
          <Link className="btn" href="/resume">
            Download CV
          </Link>
        </div>
        <p className="meta">Remote (MX) · English/Spanish · Available for UI / Frontend roles</p>

        <ul className="proof">
          <li>WordPress (Elementor, ACF, multi-site setups)</li>
          <li>HTML/CSS/JS (+ Tailwind when needed)</li>
          <li>UI QA, cross-browser fixes, responsive cleanup</li>
          <li>Documentation + process (I don’t “just patch it”)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Featured projects</h2>
        <div className="cards">
          <article className="card">
            <h3>WordPress template system / migration</h3>
            <p>Reusable templates + consistent layouts that are easier to maintain.</p>
            <Link className="text-link" href="/projects#wp-templates">
              Read
            </Link>
          </article>
          <article className="card">
            <h3>Production UI bug fixing</h3>
            <p>Cross-browser + responsive fixes on real customer sites.</p>
            <Link className="text-link" href="/projects#ui-debugging">
              Read
            </Link>
          </article>
          <article className="card">
            <h3>Landing pages + documentation</h3>
            <p>Fast delivery + clear internal workflows for repeatable updates.</p>
            <Link className="text-link" href="/projects#landing-docs">
              Read
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>How I work</h2>
        <ul className="bullets">
          <li>I’m big on shipping clean UI, not “close enough.”</li>
          <li>
            I debug fast by isolating what’s actually breaking (CSS rules, JS conflicts,
            theme/plugin behavior).
          </li>
          <li>I do a real QA pass: responsive + browser sanity + edge cases.</li>
          <li>I leave things more maintainable than I found them (docs, patterns, fewer one-offs).</li>
        </ul>
      </section>

      <section className="section">
        <h2>About</h2>
        <p>
          I’ve worked across agency + product-ish environments, usually in the middle of “design
          wants X” and “production reality says Y.” I’m comfortable collaborating with
          designers/devs, handling support-style debugging, and also doing the more intentional UI
          work like layout systems and reusable sections.
        </p>
      </section>

      <section className="section">
        <h2>Let’s talk</h2>
        <p>
          If you’re hiring and need someone who can own UI quality, move fast, and not break the
          site in the process — let’s talk.
        </p>
        <div className="cta-row">
          <Link className="btn primary" href="/contact">
            Email me
          </Link>
          <Link className="btn" href="/resume">
            Download CV
          </Link>
        </div>
      </section>
    </>
  );
}
