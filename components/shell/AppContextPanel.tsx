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

/* Flat text row — no outer container, just a divider line on the bottom */
const row: React.CSSProperties = {
  padding: "6px 12px",
  fontSize: "12px",
  borderBottom: "1px solid #E0E0E0",
  background: "white",
  lineHeight: "1.35",
};

export function AppContextPanel({ data }: { data: AppData }) {
  return (
    /* No outer border, no card — just a plain white column */
    <div style={{ width: "280px", minWidth: "280px", background: "white" }}>
      <div style={row}>
        <span style={{ color: "#666" }}>Application ID : </span>
        {data.applicationId}
      </div>

      <div style={row}>
        <span style={{ color: "#666" }}>Current Status : </span>
        {data.status.label} –{" "}
        <a href="#" style={{ color: "var(--colcap-link)" }}>
          {data.status.detail}
        </a>
      </div>

      <div style={row}>
        <span style={{ color: "#666" }}>Current Queue : </span>
        {data.queue.name} for {data.queue.hours} hours
      </div>

      <div style={row}>
        Submitted on {data.submittedDate} which was {data.submittedHoursAgo} hours ago
      </div>

      <div style={row}>
        <span style={{ color: "#666" }}>Refinance </span>for {data.refinanceAmount}
      </div>

      <div style={row}>
        Valuation {data.valuation} | Estimated Price {data.estimatedPrice}
      </div>

      <div style={row}>
        LVR {data.lvr} | LMI {data.lmi}
      </div>

      {/* ThreatMetrix — no divider line, just padding */}
      <div
        style={{
          padding: "6px 12px",
          fontSize: "12px",
          fontWeight: "600",
          lineHeight: "1.35",
          color: "var(--colcap-status-warning)",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        {data.threatMetrixRun
          ? "ThreatMetrix Call Has Been Run"
          : "ThreatMetrix Call Has Not Been Run"}
      </div>

      {/* Alert links */}
      <div style={{ padding: "4px 12px 2px", fontSize: "12px", borderBottom: "1px solid #E0E0E0" }}>
        <a href="#" style={{ color: "var(--colcap-link)" }}>
          {data.applicationAlerts} new application level alerts.
        </a>
      </div>
      <div style={{ padding: "2px 12px 4px", fontSize: "12px", borderBottom: "1px solid #E0E0E0" }}>
        <a href="#" style={{ color: "var(--colcap-link)" }}>
          {data.applicantAlerts} new applicant level alerts.
        </a>
      </div>

      {/* Applicants */}
      <div style={{ padding: "6px 12px", fontSize: "12px" }}>
        <div style={{ display: "flex", gap: "4px", marginBottom: "3px" }}>
          <span style={{ color: "#666", flexShrink: 0, width: "108px" }}>
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
            <span style={{ color: "#666", flexShrink: 0, width: "108px" }}>
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
