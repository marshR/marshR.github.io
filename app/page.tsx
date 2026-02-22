import Link from "next/link";
import { ButtonLink } from "./components/ui/button-link";
import { Card } from "./components/ui/card";
import { Section } from "./components/ui/section";
import { PROJECT_CASE_STUDIES } from "./lib/projects";

export default function HomePage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20">
        <p className="chip inline-block rounded-full px-3 py-2 text-sm font-medium">
          Frontend / UI Developer — I ship clean, reliable interfaces and I’m the person you want
          when the UI is “almost right” but not quite.
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Hi, I’m Marce.</h1>

        <p className="mt-5 max-w-3xl text-lg">
          I’m a frontend / UI developer. I work on production websites and dashboards — shipping UI
          updates, debugging messy stuff, and making layouts consistent across devices.
        </p>
        <p className="mt-4 max-w-3xl text-lg">
          I’ve spent the last few years deep in WordPress ecosystems (Elementor/ACF + custom
          fixes), and I’m also comfortable building clean UI with modern frontend tooling when
          that’s the right move.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/projects" variant="primary">
            See projects
          </ButtonLink>
          <ButtonLink href="/resume">Download CV</ButtonLink>
        </div>

        <p className="mt-4 text-sm">Remote (MX) · English/Spanish · Available for UI / Frontend roles</p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <li className="panel p-4">WordPress (Elementor, ACF, multi-site setups)</li>
          <li className="panel p-4">HTML/CSS/JS (+ Tailwind when needed)</li>
          <li className="panel p-4">UI QA, cross-browser fixes, responsive cleanup</li>
          <li className="panel p-4">Documentation + process (I don’t “just patch it”)</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold tracking-tight">Featured projects</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PROJECT_CASE_STUDIES.map((project) => (
            <Card key={project.id} className="p-5">
              <h3 className="text-xl font-semibold">{project.title.replace(/^Project \d+ — /, "")}</h3>
              <p className="mt-2">{project.blurb}</p>
              <Link
                className="mt-4 inline-block text-sm font-semibold text-[var(--accent)] underline"
                href={`/projects#${project.id}`}
              >
                Read
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold tracking-tight">How I work</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>I’m big on shipping clean UI, not “close enough.”</li>
          <li>
            I debug fast by isolating what’s actually breaking (CSS rules, JS conflicts,
            theme/plugin behavior).
          </li>
          <li>I do a real QA pass: responsive + browser sanity + edge cases.</li>
          <li>I leave things more maintainable than I found them (docs, patterns, fewer one-offs).</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <p className="mt-4 max-w-3xl">
          I’ve worked across agency + product-ish environments, usually in the middle of “design
          wants X” and “production reality says Y.” I’m comfortable collaborating with
          designers/devs, handling support-style debugging, and also doing the more intentional UI
          work like layout systems and reusable sections.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold tracking-tight">Let’s talk</h2>
        <p className="mt-4 max-w-3xl">
          If you’re hiring and need someone who can own UI quality, move fast, and not break the
          site in the process — let’s talk.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="primary">
            Email me
          </ButtonLink>
          <ButtonLink href="/resume">Download CV</ButtonLink>
        </div>
      </Section>
    </>
  );
}
