interface Applicant {
  surname: string;
  firstName: string;
}

interface AppData {
  applicationId: string;
  status: { label: string; detail: string };
  queue: { name: string; hours: number };
  submittedDate: string;
  submittedHoursAgo: number;
  refinanceAmount: string;
  valuation: string;
  estimatedPrice: string;
  lvr: string;
  lmi: string;
  threatMetrixRun: boolean;
  applicationAlerts: number;
  applicantAlerts: number;
  primaryApplicant: Applicant;
  additionalApplicants: Applicant[];
}

const row: React.CSSProperties = {
  padding: "3px 6px",
  fontSize: "11px",
  borderBottom: "1px solid #D0D0D0",
  background: "white",
  lineHeight: "1.35",
};

export function AppContextPanel({ data }: { data: AppData }) {
  return (
    <div
      style={{
        width: "256px",
        minWidth: "256px",
        border: "1px solid #D0D0D0",
        background: "white",
      }}
    >
      <div style={row}>
        <span style={{ color: "#555" }}>Application ID : </span>
        {data.applicationId}
      </div>

      <div style={row}>
        <span style={{ color: "#555" }}>Current Status : </span>
        {data.status.label} –{" "}
        <a href="#" style={{ color: "var(--colcap-link)" }}>
          {data.status.detail}
        </a>
      </div>

      <div style={row}>
        <span style={{ color: "#555" }}>Current Queue : </span>
        {data.queue.name} for {data.queue.hours} hours
      </div>

      <div style={row}>
        Submitted on {data.submittedDate} which was {data.submittedHoursAgo} hours ago
      </div>

      <div style={row}>
        <span style={{ color: "#555" }}>Refinance </span>for {data.refinanceAmount}
      </div>

      <div style={row}>
        Valuation {data.valuation} | Estimated Price {data.estimatedPrice}
      </div>

      <div style={row}>
        LVR {data.lvr} | LMI {data.lmi}
      </div>

      {/* ThreatMetrix */}
      <div
        style={{
          padding: "3px 6px",
          fontSize: "11px",
          fontWeight: "600",
          lineHeight: "1.35",
          color: "var(--colcap-status-warning)",
        }}
      >
        {data.threatMetrixRun
          ? "ThreatMetrix Call Has Been Run"
          : "ThreatMetrix Call Has Not Been Run"}
      </div>

      {/* Alert links */}
      <div style={{ padding: "1px 6px", fontSize: "11px" }}>
        <a href="#" style={{ color: "var(--colcap-link)" }}>
          {data.applicationAlerts} new application level alerts.
        </a>
      </div>
      <div style={{ padding: "1px 6px 4px", fontSize: "11px" }}>
        <a href="#" style={{ color: "var(--colcap-link)" }}>
          {data.applicantAlerts} new applicant level alerts.
        </a>
      </div>

      {/* Applicants */}
      <div style={{ padding: "4px 6px 5px", fontSize: "11px", borderTop: "1px solid #D0D0D0" }}>
        <div style={{ display: "flex", gap: "4px", marginBottom: "2px" }}>
          <span style={{ color: "#555", flexShrink: 0, width: "104px" }}>
            Primary Applicant:
          </span>
          <span>
            {data.primaryApplicant.surname},{" "}
            <a href="#" style={{ color: "var(--colcap-link)" }}>
              {data.primaryApplicant.firstName}
            </a>
          </span>
        </div>
        {data.additionalApplicants.map((ap, i) => (
          <div key={i} style={{ display: "flex", gap: "4px" }}>
            <span style={{ color: "#555", flexShrink: 0, width: "104px" }}>
              Addtnl. Applicant {i + 1}:
            </span>
            <span>
              {ap.surname},{" "}
              <a href="#" style={{ color: "var(--colcap-link)" }}>
                {ap.firstName}
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
