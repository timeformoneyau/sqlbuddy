import {
  Home,
  LogOut,
  Phone,
  ArrowLeft,
  ArrowRight,
  FileText,
  GitFork,
  File,
} from "lucide-react";

function RailButton({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
}) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        padding: "2px 5px",
        fontSize: "11px",
        width: "100%",
        textAlign: "left",
        cursor: "pointer",
        backgroundColor: "var(--colcap-button-green)",
        border: "1px solid var(--colcap-button-green-border)",
        borderRadius: "2px",
        color: "#2a2a2a",
        fontFamily: "inherit",
        lineHeight: "1.4",
      }}
    >
      <Icon size={11} strokeWidth={2} />
      <span>{label}</span>
    </button>
  );
}

export function UtilityRail() {
  return (
    <nav
      style={{
        width: "86px",
        minWidth: "86px",
        flexShrink: 0,
        backgroundColor: "white",
        borderRight: "1px solid var(--colcap-divider)",
        padding: "4px 3px",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      <RailButton icon={Home} label="Home" />
      <RailButton icon={LogOut} label="Log Out" />
      <RailButton icon={Phone} label="Contact Us" />
      <RailButton icon={ArrowLeft} label="Back" />
      <RailButton icon={ArrowRight} label="Next" />
      <RailButton icon={FileText} label="Notes" />
      <RailButton icon={GitFork} label="Trail" />
      <RailButton icon={File} label="Docs" />
    </nav>
  );
}
