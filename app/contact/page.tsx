import { Card } from "../components/ui/card";
import { PageHeader } from "../components/ui/page-header";
import { Section } from "../components/ui/section";

export default function ContactPage() {
  return (
    <Section>
      <PageHeader
        title="Contact"
        description="If you’re hiring and need someone who can own UI quality, move fast, and not break the site in the process — let’s talk."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-semibold">Email</h2>
          <p className="mt-2">
            <a className="font-semibold text-[var(--accent)] underline" href="mailto:marce@example.com">
              marce@example.com
            </a>
          </p>
          <p className="mt-2 text-sm">Replace with your real email before publishing.</p>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold">Profiles</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>
              <a className="font-semibold text-[var(--accent)] underline" href="https://github.com/marshR">
                GitHub
              </a>
            </li>
            <li>
              <a className="font-semibold text-[var(--accent)] underline" href="https://www.linkedin.com/">
                LinkedIn
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
