type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${centered ? "section-heading--center" : ""}`}>
      <span className="eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </span>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}
