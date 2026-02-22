import { ButtonLink } from "../components/ui/button-link";
import { Card } from "../components/ui/card";
import { PageHeader } from "../components/ui/page-header";
import { Section } from "../components/ui/section";

export default function ResumePage() {
  return (
    <Section>
      <PageHeader
        title="Resume"
        description="Frontend / UI Developer — focused on reliable production delivery."
      />

      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn-primary rounded-xl px-4 py-2.5 font-semibold" href="/resume.pdf">
          Download CV
        </a>
        <ButtonLink href="/contact">Email me</ButtonLink>
      </div>

      <Card className="mt-6">
        <h2 className="text-2xl font-semibold">Quick fit summary</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>WordPress: Elementor, ACF, custom fixes, multi-site consistency.</li>
          <li>Frontend: HTML, CSS, JS, responsive cleanup, UI QA, debugging.</li>
          <li>Delivery: low-risk fixes, clear docs, maintainable patterns.</li>
        </ul>
      </Card>
    </Section>
  );
}
