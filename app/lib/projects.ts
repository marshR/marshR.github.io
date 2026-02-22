export type ProjectCaseStudy = {
  id: string;
  title: string;
  blurb: string;
  whatItWas: string;
  whyItMattered: string;
  whatIDid: string[];
  result: string[];
  stack: string;
};

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "wp-templates",
    title: "Project 1 — WordPress template system / migration work",
    blurb: "Reusable templates + consistent layouts that are easier to maintain.",
    whatItWas:
      "Setting up or migrating WordPress templates so sites stay consistent and easier to update.",
    whyItMattered:
      "Without a system, every page becomes a one-off and maintenance turns into chaos.",
    whatIDid: [
      "Built / migrated reusable templates (headers, footers, page sections) using Elementor + ACF patterns.",
      "Matched design spacing/typography and fixed the “it breaks on mobile” stuff.",
      "Cleaned up inconsistent layouts and made updates less fragile.",
      "Did QA passes so changes didn’t create random regressions."
    ],
    result: [
      "Less repeated work, more consistency, easier long-term maintenance.",
      "Updates became predictable instead of “hope this doesn’t break.”"
    ],
    stack: "WordPress · Elementor · ACF · HTML/CSS · JS"
  },
  {
    id: "ui-debugging",
    title: "Project 2 — Production UI bug fixing + cross-browser cleanup",
    blurb: "Cross-browser + responsive fixes on real customer sites.",
    whatItWas:
      "Debugging UI issues on live customer sites (layout bugs, JS weirdness, styling conflicts).",
    whyItMattered: "These are the problems that actually affect users and support teams.",
    whatIDid: [
      "Reproduced issues properly (instead of guessing), then isolated root causes.",
      "Fixed layout bugs with minimal risk changes (clean CSS, scoped fixes, better structure).",
      "Handled JS conflicts when scripts/components fought each other.",
      "Verified across breakpoints + common browsers so fixes stayed fixed."
    ],
    result: [
      "More stable UI, fewer repeated issues, less “works on my machine.”",
      "Cleaner, more reliable patterns going forward."
    ],
    stack: "HTML · CSS · JS/jQuery · WordPress · Git"
  },
  {
    id: "landing-docs",
    title: "Project 3 — Lead capture landing pages + documentation",
    blurb: "Fast delivery + clear internal workflows for repeatable updates.",
    whatItWas:
      "Building and maintaining landing pages for campaigns + documenting the workflow so it didn’t rely on tribal knowledge.",
    whyItMattered: "Fast campaigns + frequent changes = you need speed and consistency.",
    whatIDid: [
      "Built landing pages that were clear, responsive, and easy to adjust.",
      "Maintained updates without breaking layout or tracking.",
      "Wrote internal docs so others could follow the process and ship safely."
    ],
    result: [
      "Faster iteration, fewer “how do we do this again?” moments.",
      "More consistent delivery across multiple pages."
    ],
    stack: "WordPress · HTML/CSS · Design tools · Documentation"
  }
];
