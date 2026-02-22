import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description?: ReactNode;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {description ? <p className="mt-3 max-w-3xl">{description}</p> : null}
    </header>
  );
}
