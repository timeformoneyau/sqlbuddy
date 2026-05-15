import { SectionHeader } from "@/components/shell/SectionHeader";

// ── Shared style constants ────────────────────────────────────────────────────

const th: React.CSSProperties = {
  backgroundColor: "var(--colcap-section-bg)",
  color: "var(--colcap-section-text)",
  fontWeight: "bold",
  textAlign: "left",
  padding: "4px 8px",
  fontSize: "12px",
  borderBottom: "1px solid #D0D0D0",
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: "3px 8px",
  fontSize: "12px",
  fontWeight: "normal",
  borderBottom: "1px solid #D0D0D0",
  verticalAlign: "middle",
};

const totalTd: React.CSSProperties = {
  ...td,
  fontWeight: "bold",
  backgroundColor: "#eef3f8",
};

const inputStyle: React.CSSProperties = {
  border: "1px solid #D0D0D0",
  borderRadius: 0,
  padding: "1px 4px",
  fontSize: "12px",
  fontFamily: "Arial, Helvetica, sans-serif",
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
};

const selectStyle: React.CSSProperties = {
  border: "1px solid #D0D0D0",
  borderRadius: 0,
  padding: "1px 2px",
  fontSize: "11px",
  fontFamily: "Arial, Helvetica, sans-serif",
  backgroundColor: "white",
  outline: "none",
};

const greenBtn: React.CSSProperties = {
  backgroundColor: "var(--colcap-button-green)",
  border: "1px solid var(--colcap-button-green-border)",
  borderRadius: 0,
  padding: "4px 14px",
  fontSize: "12px",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "#2a2a2a",
  cursor: "pointer",
};

const tableWrap: React.CSSProperties = {
  backgroundColor: "white",
  border: "1px solid #D0D0D0",
  borderTop: "none",
};

const sectionGap: React.CSSProperties = { marginBottom: "16px" };

// ── Frequency options (shared across income, expense, liabilities) ─────────────

const FREQ_OPTIONS = ["Weekly", "Fortnightly", "Monthly", "4 Weekly", "Quarterly", "Yearly"];

const REPAYMENT_TYPE_OPTIONS = [
  "-Select-",
  "Principle And Interest",
  "Interest Only",
  "Line of Credit",
  "None",
];

const ASSET_TYPE_OPTIONS = [
  "-Select-",
  "Real Estate",
  "Vehicle",
  "Savings/Cash",
  "Shares/Managed Funds",
  "Superannuation",
  "Other",
];

// ── Primitive controls ────────────────────────────────────────────────────────

function AmountInput() {
  return (
    <input
      type="number"
      style={{ ...inputStyle, width: "76px" }}
    />
  );
}

function FreqSelect() {
  return (
    <select style={{ ...selectStyle, width: "88px" }}>
      {FREQ_OPTIONS.map((f) => (
        <option key={f}>{f}</option>
      ))}
    </select>
  );
}

// td containing amount input + frequency select side-by-side
function ApplicantCell() {
  return (
    <td style={td}>
      <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
        <AmountInput />
        <FreqSelect />
      </div>
    </td>
  );
}

// ── HEM tag ───────────────────────────────────────────────────────────────────

type HemType = "HEMINC" | "HEMEXC" | "HEMNON" | null;

function HemTag({ type }: { type: HemType }) {
  if (!type) return null;
  const color =
    type === "HEMINC" ? "var(--colcap-status-ok)" : "var(--colcap-status-warning)";
  return (
    <span
      style={{ color, fontSize: "10px", fontWeight: "bold", marginLeft: "5px" }}
    >
      {type}
    </span>
  );
}

// ── Income / Expense table (shared structure) ─────────────────────────────────

function IncomeExpenseTable({
  rows,
  totalLabel,
}: {
  rows: { label: string; hem?: HemType }[];
  totalLabel: string;
}) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ ...th, minWidth: "220px" }}>Type</th>
          <th style={{ ...th, width: "188px" }}>Homer</th>
          <th style={{ ...th, width: "188px" }}>Homey</th>
          <th style={{ ...th, width: "110px" }}>Monthly Total</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td style={td}>
              {row.label}
              {row.hem && <HemTag type={row.hem} />}
            </td>
            <ApplicantCell />
            <ApplicantCell />
            <td style={td} />
          </tr>
        ))}
        <tr>
          <td style={{ ...totalTd, textAlign: "right" }}>{totalLabel}</td>
          <td style={totalTd} />
          <td style={totalTd} />
          <td style={totalTd} />
        </tr>
      </tbody>
    </table>
  );
}

// ── Row data ──────────────────────────────────────────────────────────────────

const individualIncomeRows: { label: string }[] = [
  { label: "Salary" },
  { label: "Salary Net" },
  { label: "Commissions/Bonuses" },
  { label: "Expected Rent" },
  { label: "Dividends" },
  { label: "Overtime" },
  { label: "Car Allowance" },
  { label: "Other" },
  { label: "Government Benefits" },
  { label: "Other Addbacks" },
  { label: "Salary Sacrifice/Packaging" },
  { label: "Fringe Benefits" },
  { label: "Permanent Allowances" },
  { label: "Parental Leave" },
  { label: "Return to Work" },
  { label: "Child Support/Maintenance" },
  { label: "Sustainable Investment Income" },
  { label: "Superannuation/Private Pension" },
  { label: "Commercial Rental Income" },
];

const selfEmployedIncomeRows: { label: string }[] = [
  { label: "Salary" },
  { label: "Salary Net" },
  { label: "Self-employed net profit" },
  { label: "Abnormal expenses" },
  { label: "Abnormal income" },
  { label: "Car Allowance" },
  { label: "Depreciation" },
  { label: "Other addbacks" },
];

const expenseRows: { label: string; hem: HemType }[] = [
  { label: "Mortgage", hem: null },
  { label: "Rent", hem: null },
  { label: "Board", hem: null },
  { label: "Grocery", hem: "HEMINC" },
  { label: "General Basic Insurances", hem: "HEMINC" },
  { label: "Subscriptions", hem: "HEMINC" },
  { label: "Health", hem: "HEMINC" },
  { label: "Personal Care", hem: "HEMINC" },
  { label: "Entertainment", hem: "HEMINC" },
  { label: "Childcare", hem: "HEMINC" },
  { label: "Public primary and secondary education", hem: "HEMINC" },
  {
    label: "Higher Education / Vocational Training and Professional Fees",
    hem: "HEMINC",
  },
  { label: "Transportation", hem: "HEMINC" },
  {
    label: "Primary Residence Ongoing Running Costs inc. Body Corporate/Strata Fees",
    hem: "HEMINC",
  },
  { label: "Pet Care", hem: "HEMINC" },
  {
    label: "Sickness and personal accident insurance / life insurance",
    hem: "HEMEXC",
  },
  { label: "Private Schooling and Tuition", hem: "HEMEXC" },
  { label: "Land Tax for place you live in", hem: "HEMEXC" },
  { label: "Investment Property", hem: "HEMNON" },
  { label: "Health Insurance", hem: "HEMNON" },
  { label: "Secondary Residence Running Costs", hem: "HEMNON" },
  { label: "Other", hem: "HEMNON" },
];

// ── Liabilities type ──────────────────────────────────────────────────────────

interface Liability {
  type: string;
  lender: string;
  repaymentType: string;
  balance: string;
  limit: string;
  accNo: string;
  rent: string;
  homer: boolean;
  homey: boolean;
  repayment: string;
  postCode: string;
  remainingTermsMonths: string;
  repaymentFrequency: string;
  pctOwn: string;
  interestRate: string;
  details: string;
}

const LIABILITY_COLS = [
  "Type",
  "Lender",
  "Repayment Type",
  "Balance",
  "Limit",
  "Acc No",
  "Rent",
  "Homer",
  "Homey",
  "Repayment",
  "Post Code",
  "Remaining terms in months",
  "Repayment Frequency",
  "Pct Own",
  "Interest rate",
  "Details",
];

// ── Main page ─────────────────────────────────────────────────────────────────

export function FinancialsPage({ liabilities }: { liabilities: Liability[] }) {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "var(--colcap-page-bg)",
        minHeight: "100%",
      }}
    >
      {/* ── 1. Applicant Finance ── */}
      <div style={sectionGap}>
        <SectionHeader title="Applicant Finance" />
      </div>

      {/* ── 2. Income - Individual ── */}
      <div style={sectionGap}>
        <SectionHeader title="Income - Individual" />
        <div style={tableWrap}>
          <IncomeExpenseTable
            rows={individualIncomeRows}
            totalLabel="Income Monthly Total"
          />
        </div>
      </div>

      {/* ── 3. Income - Self-Employed ── */}
      <div style={sectionGap}>
        <SectionHeader title="Income - Self-Employed" />
        <div style={tableWrap}>
          <IncomeExpenseTable
            rows={selfEmployedIncomeRows}
            totalLabel="Income Monthly Total"
          />
        </div>
      </div>

      {/* ── 4. Expenses ── */}
      <div style={sectionGap}>
        <SectionHeader title="Expenses" />
        <div style={tableWrap}>
          <IncomeExpenseTable
            rows={expenseRows}
            totalLabel="Expense Monthly Total"
          />
        </div>
      </div>

      {/* ── 5. DigitalExpense ── */}
      <div style={sectionGap}>
        <SectionHeader title="DigitalExpense" />
        <div style={tableWrap}>
          <IncomeExpenseTable
            rows={[{ label: "Total Digital" }]}
            totalLabel="Expense Monthly Total"
          />
        </div>
      </div>

      {/* ── 6. Assets ── */}
      <div style={sectionGap}>
        <SectionHeader title="Assets" />
        <div style={tableWrap}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...th, width: "180px" }}>Type</th>
                <th style={{ ...th, width: "56px", textAlign: "center" }}>Homer</th>
                <th style={{ ...th, width: "56px", textAlign: "center" }}>Homey</th>
                <th style={{ ...th, width: "140px" }}>Value</th>
                <th style={th}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>
                  <select style={{ ...selectStyle, width: "100%" }}>
                    {ASSET_TYPE_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </td>
                <td style={{ ...td, textAlign: "center" }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...td, textAlign: "center" }}>
                  <input type="checkbox" />
                </td>
                <td style={td}>
                  <input type="number" style={inputStyle} />
                </td>
                <td style={td}>
                  <input type="text" style={inputStyle} />
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ ...totalTd, textAlign: "right" }}>
                  Total Assets
                </td>
                <td style={totalTd} />
                <td style={totalTd} />
              </tr>
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "6px 8px",
              borderTop: "1px solid #D0D0D0",
            }}
          >
            <button style={greenBtn}>Add Additional Asset</button>
          </div>
        </div>
      </div>

      {/* ── 7. HECS/HELP Debt ── */}
      <div style={sectionGap}>
        <SectionHeader title="HECS/HELP Debt" />
        <div
          style={{
            ...tableWrap,
            padding: "10px 12px",
          }}
        >
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <label style={{ fontSize: "12px" }}>
                Applicant 1 has HECS Debt?
              </label>
              <select style={selectStyle}>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <label style={{ fontSize: "12px" }}>
                Applicant 2 has HECS Debt?
              </label>
              <select style={selectStyle}>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ── 8. Liabilities ── */}
      <div style={sectionGap}>
        <SectionHeader title="Liabilities" />
        <div style={{ ...tableWrap, overflowX: "auto" }}>
          <table
            style={{
              borderCollapse: "collapse",
              minWidth: "1300px",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                {LIABILITY_COLS.map((col) => (
                  <th key={col} style={th}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {liabilities.map((row, i) => (
                <tr key={i}>
                  <td style={td}>{row.type}</td>
                  <td style={td}>{row.lender}</td>
                  <td style={td}>
                    <select
                      style={{ ...selectStyle, width: "100%" }}
                      defaultValue={row.repaymentType}
                    >
                      {REPAYMENT_TYPE_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </td>
                  <td style={td}>{row.balance}</td>
                  <td style={td}>{row.limit}</td>
                  <td style={td}>{row.accNo}</td>
                  <td style={td}>{row.rent}</td>
                  <td style={{ ...td, textAlign: "center" }}>
                    <input type="checkbox" defaultChecked={row.homer} />
                  </td>
                  <td style={{ ...td, textAlign: "center" }}>
                    <input type="checkbox" defaultChecked={row.homey} />
                  </td>
                  <td style={td}>{row.repayment}</td>
                  <td style={td}>{row.postCode}</td>
                  <td style={td}>{row.remainingTermsMonths}</td>
                  <td style={td}>
                    <select
                      style={{ ...selectStyle, width: "100%" }}
                      defaultValue={row.repaymentFrequency}
                    >
                      {FREQ_OPTIONS.map((f) => (
                        <option key={f}>{f}</option>
                      ))}
                    </select>
                  </td>
                  <td style={td}>{row.pctOwn}</td>
                  <td style={td}>{row.interestRate}</td>
                  <td style={td}>{row.details}</td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan={15}
                  style={{ ...totalTd, textAlign: "right" }}
                >
                  Total Liabilities
                </td>
                <td style={totalTd} />
              </tr>
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "6px 8px",
              borderTop: "1px solid #D0D0D0",
            }}
          >
            <button style={greenBtn}>Add Additional Liability</button>
          </div>
        </div>
      </div>

      {/* ── 9. Footer ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "8px",
        }}
      >
        <button style={greenBtn}>Back</button>
        <div style={{ display: "flex", gap: "8px" }}>
          <button style={greenBtn}>Save</button>
          <button style={greenBtn}>Next</button>
        </div>
      </div>
    </div>
  );
}
