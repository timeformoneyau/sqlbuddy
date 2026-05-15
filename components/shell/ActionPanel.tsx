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
    <div className="border-t" style={{ borderColor: "var(--colcap-divider)" }}>
      {/* Select Action header */}
      <div
        className="px-3 py-2 text-sm font-bold"
        style={{
          backgroundColor: "var(--colcap-section-bg)",
          color: "var(--colcap-section-text)",
        }}
      >
        Select Action
      </div>

      {/* Action rows */}
      <div className="flex flex-col">
        {ACTIONS.map((action) => (
          <button
            key={action}
            className="text-left px-3 py-2 text-xs border-b cursor-pointer hover:bg-gray-50"
            style={{
              borderColor: "var(--colcap-divider)",
              color: "var(--colcap-text)",
              background: "white",
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
