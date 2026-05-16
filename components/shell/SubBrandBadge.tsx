interface SubBrandBadgeProps {
  brand?: string;
}

export function SubBrandBadge({ brand = "homestar" }: SubBrandBadgeProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, userSelect: "none" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
        <span
          style={{
            fontWeight: "700",
            fontSize: "15px",
            letterSpacing: "-0.3px",
            color: "#1B5EB5",
          }}
        >
          {brand}
        </span>
        {/* Modest star — matches production weight */}
        <svg
          width="11"
          height="11"
          viewBox="0 0 16 16"
          style={{ marginBottom: "5px", flexShrink: 0 }}
        >
          <polygon
            points="8,1 9.8,6 15,6 10.9,9.2 12.4,14.5 8,11.5 3.6,14.5 5.1,9.2 1,6 6.2,6"
            fill="#F5A623"
            stroke="#E8941A"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      <span style={{ fontSize: "10px", color: "#888", marginTop: "1px" }}>finance</span>
    </div>
  );
}
