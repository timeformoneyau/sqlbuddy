const TABS = ["Property", "Product", "Customer", "Financials", "Result", "Summary"];

const TAB_BORDER = "#A8BFD0";

interface TabNavProps {
  activeTab?: string;
}

export function TabNav({ activeTab = "Financials" }: TabNavProps) {
  return (
    <nav style={{ display: "flex", alignItems: "flex-end" }}>
      {TABS.map((tab, index) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            style={{
              /* Folder-tab shape: rounded top corners only */
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
              /* Connected — overlap left borders, active sits on top */
              marginLeft: index > 0 ? "-1px" : "0",
              position: "relative",
              zIndex: isActive ? 2 : 1,
              /* Border: top+left+right only; active has no bottom so it merges with shelf */
              borderTop: `1px solid ${TAB_BORDER}`,
              borderLeft: `1px solid ${TAB_BORDER}`,
              borderRight: `1px solid ${TAB_BORDER}`,
              borderBottom: isActive ? "none" : `1px solid ${TAB_BORDER}`,
              /* Active tab extends 1px below container shelf to cover it */
              marginBottom: isActive ? "-1px" : "0",
              /* Fill */
              backgroundColor: isActive ? "var(--colcap-tab-active)" : "#EDF2F7",
              /* Text */
              color: "#1A4778",
              fontSize: "12px",
              fontStyle: isActive ? "italic" : "normal",
              fontWeight: isActive ? "700" : "400",
              /* Dimensions */
              padding: "5px 14px",
              minWidth: "88px",
              textAlign: "center",
              cursor: "pointer",
              fontFamily: "inherit",
              lineHeight: "1.3",
            }}
          >
            {tab}
          </button>
        );
      })}
    </nav>
  );
}
