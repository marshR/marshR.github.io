import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Card({ children, className = "", id }: CardProps) {
  return (
    <article id={id} className={`panel p-5 sm:p-6 ${className}`.trim()}>
      {children}
    </article>
  );
}
