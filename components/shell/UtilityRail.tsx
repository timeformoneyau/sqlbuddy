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
      className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-sm w-full text-left cursor-pointer hover:opacity-90"
      style={{
        backgroundColor: "var(--colcap-button-green)",
        border: "1px solid var(--colcap-button-green-border)",
        color: "#2a2a2a",
      }}
    >
      <Icon size={12} strokeWidth={2} />
      <span>{label}</span>
    </button>
  );
}

function RailButtonSmall({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
}) {
  return (
    <button
      className="flex items-center gap-1 px-1.5 py-1 text-xs rounded-sm flex-1 justify-center cursor-pointer hover:opacity-90"
      style={{
        backgroundColor: "var(--colcap-button-green)",
        border: "1px solid var(--colcap-button-green-border)",
        color: "#2a2a2a",
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
      className="flex flex-col gap-1 p-1.5 bg-white border-r flex-shrink-0"
      style={{ width: "92px", borderColor: "var(--colcap-divider)" }}
    >
      <RailButton icon={Home} label="Home" />
      <RailButton icon={LogOut} label="Log Out" />
      <RailButton icon={Phone} label="Contact Us" />
      <div className="flex gap-1">
        <RailButtonSmall icon={ArrowLeft} label="Back" />
        <RailButtonSmall icon={ArrowRight} label="Next" />
      </div>
      <RailButton icon={FileText} label="Notes" />
      <RailButton icon={GitFork} label="Trail" />
      <RailButton icon={File} label="Docs" />
    </nav>
  );
}
