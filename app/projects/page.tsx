export default function ProjectsPage() {
  return (
    <section className="section stack">
      <header>
        <h1>Project case studies</h1>
        <p>Short sections, no fluff.</p>
      </header>

      <article id="wp-templates" className="card">
        <h2>Project 1 — WordPress template system / migration work</h2>
        <p>
          <strong>What it was:</strong> Setting up or migrating WordPress templates so sites stay
          consistent and easier to update.
          <br />
          <strong>Why it mattered:</strong> Without a system, every page becomes a one-off and
          maintenance turns into chaos.
        </p>
        <h3>What I did</h3>
        <ul className="bullets">
          <li>
            Built / migrated reusable templates (headers, footers, page sections) using Elementor +
            ACF patterns.
          </li>
          <li>Matched design spacing/typography and fixed the “it breaks on mobile” stuff.</li>
          <li>Cleaned up inconsistent layouts and made updates less fragile.</li>
          <li>Did QA passes so changes didn’t create random regressions.</li>
        </ul>
        <h3>Result</h3>
        <ul className="bullets">
          <li>Less repeated work, more consistency, easier long-term maintenance.</li>
          <li>Updates became predictable instead of “hope this doesn’t break.”</li>
        </ul>
        <p>
          <strong>Stack</strong>
          <br />
          WordPress · Elementor · ACF · HTML/CSS · JS
        </p>
      </article>

      <article id="ui-debugging" className="card">
        <h2>Project 2 — Production UI bug fixing + cross-browser cleanup</h2>
        <p>
          <strong>What it was:</strong> Debugging UI issues on live customer sites (layout bugs, JS
          weirdness, styling conflicts).
          <br />
          <strong>Why it mattered:</strong> These are the problems that actually affect users and
          support teams.
        </p>
        <h3>What I did</h3>
        <ul className="bullets">
          <li>Reproduced issues properly (instead of guessing), then isolated root causes.</li>
          <li>
            Fixed layout bugs with minimal risk changes (clean CSS, scoped fixes, better
            structure).
          </li>
          <li>Handled JS conflicts when scripts/components fought each other.</li>
          <li>Verified across breakpoints + common browsers so fixes stayed fixed.</li>
        </ul>
        <h3>Result</h3>
        <ul className="bullets">
          <li>More stable UI, fewer repeated issues, less “works on my machine.”</li>
          <li>Cleaner, more reliable patterns going forward.</li>
        </ul>
        <p>
          <strong>Stack</strong>
          <br />
          HTML · CSS · JS/jQuery · WordPress · Git
        </p>
      </article>

      <article id="landing-docs" className="card">
        <h2>Project 3 — Lead capture landing pages + documentation</h2>
        <p>
          <strong>What it was:</strong> Building and maintaining landing pages for campaigns +
          documenting the workflow so it didn’t rely on tribal knowledge.
          <br />
          <strong>Why it mattered:</strong> Fast campaigns + frequent changes = you need speed and
          consistency.
        </p>
        <h3>What I did</h3>
        <ul className="bullets">
          <li>Built landing pages that were clear, responsive, and easy to adjust.</li>
          <li>Maintained updates without breaking layout or tracking.</li>
          <li>Wrote internal docs so others could follow the process and ship safely.</li>
        </ul>
        <h3>Result</h3>
        <ul className="bullets">
          <li>Faster iteration, fewer “how do we do this again?” moments.</li>
          <li>More consistent delivery across multiple pages.</li>
        </ul>
        <p>
          <strong>Stack</strong>
          <br />
          WordPress · HTML/CSS · Design tools · Documentation
        </p>
      </article>
    </section>
  );
}
