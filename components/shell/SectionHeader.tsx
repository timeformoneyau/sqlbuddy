interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div
      className="px-3 py-2 text-sm font-bold"
      style={{
        backgroundColor: "var(--colcap-section-bg)",
        color: "var(--colcap-section-text)",
      }}
    >
      {title}
    </div>
  );
}
