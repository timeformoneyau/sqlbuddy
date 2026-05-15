const TABS = ["Property", "Product", "Customer", "Financials", "Result", "Summary"];

interface TabNavProps {
  activeTab?: string;
}

export function TabNav({ activeTab = "Financials" }: TabNavProps) {
  return (
    <nav className="flex items-center gap-1">
      {TABS.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            className="px-4 py-1 text-xs rounded-sm border cursor-pointer"
            style={
              isActive
                ? {
                    backgroundColor: "var(--colcap-tab-active)",
                    borderColor: "#bbb",
                    color: "#333",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }
                : {
                    backgroundColor: "#f4f4f4",
                    borderColor: "#ccc",
                    color: "var(--colcap-tab-inactive-text)",
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
