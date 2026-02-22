import { Card } from "../components/ui/card";
import { PageHeader } from "../components/ui/page-header";
import { Section } from "../components/ui/section";
import { PROJECT_CASE_STUDIES } from "../lib/projects";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">{children}</h3>;
}

export default function ProjectsPage() {
  return (
    <Section>
      <PageHeader title="Project case studies" description="Short sections, no fluff." />

      <div className="mt-8 grid gap-5">
        {PROJECT_CASE_STUDIES.map((project) => (
          <Card key={project.id} id={project.id}>
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-3">
              <strong className="text-[var(--text)]">What it was:</strong> {project.whatItWas}
              <br />
              <strong className="text-[var(--text)]">Why it mattered:</strong> {project.whyItMattered}
            </p>

            <SectionTitle>What I did</SectionTitle>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              {project.whatIDid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <SectionTitle>Result</SectionTitle>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              {project.result.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-4">
              <strong className="text-[var(--text)]">Stack</strong>
              <br />
              {project.stack}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
