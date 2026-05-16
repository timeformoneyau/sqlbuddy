import { UserCheck } from "lucide-react";

const ACTIONS = [
  "Awaiting Valuation",
  "Sync & Reassess",
  "Additional Info Required",
  "Verify ID",
  "Approve",
  "Decline",
];

/* Matches AppContextPanel row style exactly */
const actionRow: React.CSSProperties = {
  padding: "6px 12px",
  fontSize: "12px",
  borderBottom: "1px solid #E0E0E0",
  background: "white",
  lineHeight: "1.35",
  cursor: "pointer",
  color: "var(--colcap-text)",
  display: "block",
  width: "100%",
  textAlign: "left",
};

export function ActionPanel() {
  return (
    <div style={{ borderTop: "1px solid #E0E0E0" }}>
      {/* Select Action — same pastel-blue header as SectionHeader */}
      <div
        style={{
          padding: "5px 12px",
          fontSize: "12px",
          fontWeight: "700",
          backgroundColor: "var(--colcap-section-bg)",
          color: "var(--colcap-section-text)",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        Select Action
      </div>

      {/* Action items — flat rows, same style as metadata, NOT buttons */}
      {ACTIONS.map((action) => (
        <div key={action} style={actionRow}>
          {action}
        </div>
      ))}

      {/* Become Underwriter — small, de-emphasised, rail-button style */}
      <div style={{ padding: "8px 12px" }}>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "5px 8px",
            fontSize: "12px",
            cursor: "pointer",
            backgroundColor: "var(--colcap-button-green)",
            border: "1px solid var(--colcap-button-green-border)",
            borderRadius: "2px",
            color: "#2a2a2a",
            fontFamily: "inherit",
            lineHeight: "1.3",
          }}
        >
          <UserCheck size={13} strokeWidth={2} />
          <span>Become Underwriter</span>
        </button>
      </div>
    </div>
  );
}
