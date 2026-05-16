const TABS = ["Property", "Product", "Customer", "Financials", "Result", "Summary"];

interface TabNavProps {
  activeTab?: string;
}

export function TabNav({ activeTab = "Financials" }: TabNavProps) {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "3px" }}>
      {TABS.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            style={
              isActive
                ? {
                    backgroundColor: "var(--colcap-tab-active)",
                    border: "1px solid #aaa",
                    borderRadius: "1px",
                    color: "#333",
                    fontStyle: "italic",
                    fontWeight: "700",
                    fontSize: "11px",
                    padding: "2px 10px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }
                : {
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #ccc",
                    borderRadius: "1px",
                    color: "var(--colcap-tab-inactive-text)",
                    fontSize: "11px",
                    padding: "2px 10px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }
            }
          >
            {tab}
          </button>
        );
      })}
    </nav>
  );
}
