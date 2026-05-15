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

function Field({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="px-2 py-1.5 text-xs border-b"
      style={{ borderColor: "var(--colcap-divider)", background: "white" }}
    >
      {children}
    </div>
  );
}

export function AppContextPanel({ data }: { data: AppData }) {
  return (
    <div
      className="flex flex-col border border-gray-300 bg-white"
      style={{ width: "270px", minWidth: "270px" }}
    >
      <Field>
        <span className="text-gray-600">Application ID : </span>
        {data.applicationId}
      </Field>

      <Field>
        <span className="text-gray-600">Current Status : </span>
        {data.status.label} –{" "}
        <a href="#" style={{ color: "var(--colcap-link)" }}>
          {data.status.detail}
        </a>
      </Field>

      <Field>
        <span className="text-gray-600">Current Queue : </span>
        {data.queue.name} for {data.queue.hours} hours
      </Field>

      <Field>
        Submitted on {data.submittedDate} which was {data.submittedHoursAgo}{" "}
        hours ago
      </Field>

      <Field>
        <span className="text-gray-600">Refinance </span>for{" "}
        {data.refinanceAmount}
      </Field>

      <Field>
        Valuation {data.valuation} | Estimated Price {data.estimatedPrice}
      </Field>

      <Field>
        LVR {data.lvr} | LMI {data.lmi}
      </Field>

      {/* ThreatMetrix warning */}
      <div className="px-2 py-1.5 text-xs font-semibold" style={{ color: "var(--colcap-status-warning)" }}>
        {data.threatMetrixRun ? "ThreatMetrix Call Has Been Run" : "ThreatMetrix Call Has Not Been Run"}
      </div>

      {/* Alert links */}
      <div className="px-2 py-0.5 text-xs">
        <a href="#" style={{ color: "var(--colcap-link)" }}>
          {data.applicationAlerts} new application level alerts.
        </a>
      </div>
      <div className="px-2 py-1.5 text-xs">
        <a href="#" style={{ color: "var(--colcap-link)" }}>
          {data.applicantAlerts} new applicant level alerts.
        </a>
      </div>

      {/* Applicants */}
      <div className="px-2 py-2 text-xs space-y-1">
        <div className="flex gap-1">
          <span className="text-gray-600 flex-shrink-0" style={{ width: "110px" }}>
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
          <div key={i} className="flex gap-1">
            <span className="text-gray-600 flex-shrink-0" style={{ width: "110px" }}>
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
