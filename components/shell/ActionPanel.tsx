import { UserCheck } from "lucide-react";

const ACTIONS = [
  "Awaiting Valuation",
  "Sync & Reassess",
  "Additional Info Required",
  "Verify ID",
  "Approve",
  "Decline",
];

export function ActionPanel() {
  return (
    <div style={{ borderTop: "1px solid #D0D0D0" }}>
      {/* Select Action header */}
      <div
        style={{
          padding: "3px 6px",
          fontSize: "12px",
          fontWeight: "bold",
          backgroundColor: "var(--colcap-section-bg)",
          color: "var(--colcap-section-text)",
        }}
      >
        Select Action
      </div>

      {/* Action rows */}
      {ACTIONS.map((action) => (
        <button
          key={action}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            padding: "3px 8px",
            fontSize: "11px",
            borderBottom: "1px solid #D0D0D0",
            cursor: "pointer",
            background: "white",
            color: "var(--colcap-text)",
            fontFamily: "inherit",
          }}
        >
          {action}
        </button>
      ))}

      {/* Become Underwriter — de-emphasised secondary action */}
      <div style={{ padding: "6px 6px 4px" }}>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            padding: "2px 6px",
            fontSize: "11px",
            cursor: "pointer",
            backgroundColor: "var(--colcap-button-green)",
            border: "1px solid var(--colcap-button-green-border)",
            borderRadius: "2px",
            color: "#2a2a2a",
            fontFamily: "inherit",
          }}
        >
          <UserCheck size={11} strokeWidth={2} />
          <span>Become Underwriter</span>
        </button>
      </div>
    </div>
  );
}
