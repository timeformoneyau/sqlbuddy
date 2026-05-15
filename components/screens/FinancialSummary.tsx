import { SectionHeader } from "@/components/shell/SectionHeader";

interface ExistingLoan {
  loanType: string;
  outstandingBalance: string;
  loanTerm: string;
  interestRate: string;
  monthlyRepayment: string;
  institution: string;
  accountNumber: string;
  cashoutAmount: string;
}

interface NewLoan {
  product: string;
  loanAmount: string;
  loanTerm: string;
  interestRate: string;
  monthlyRepayment: string;
}

interface ValidatedDetail {
  type: string;
  repaymentType: string;
  lender: string;
  balance: string;
  accNo: string;
  homer: string;
  homey: string;
  piRepayment: string;
  remainingTermYears: number;
  repaymentFrequency: string;
  pctOwn: string;
  piInterestRate: string;
}

interface FinancialSummaryProps {
  propertyAddress: string;
  existingLoan: ExistingLoan;
  newLoan: NewLoan;
  refinanceObjective: string;
  validatedDetails: ValidatedDetail[];
}

const tableHeaderStyle: React.CSSProperties = {
  backgroundColor: "var(--colcap-section-bg)",
  color: "var(--colcap-section-text)",
  fontWeight: "bold",
  textAlign: "left",
  padding: "4px 8px",
  fontSize: "12px",
  borderBottom: "1px solid #D0D0D0",
};

const tableCellStyle: React.CSSProperties = {
  padding: "3px 8px",
  fontSize: "12px",
  fontWeight: "normal",
  borderBottom: "1px solid #D0D0D0",
  verticalAlign: "top",
};

export function FinancialSummary({
  propertyAddress,
  existingLoan,
  newLoan,
  refinanceObjective,
  validatedDetails,
}: FinancialSummaryProps) {
  const existingLoanRows = [
    { label: "Loan Type", stated: existingLoan.loanType },
    { label: "Outstanding Balance", stated: existingLoan.outstandingBalance },
    { label: "Loan Term", stated: existingLoan.loanTerm },
    { label: "Interest Rate", stated: existingLoan.interestRate },
    { label: "Monthly Repayment", stated: existingLoan.monthlyRepayment },
    { label: "Institution", stated: existingLoan.institution },
    { label: "Account Number", stated: existingLoan.accountNumber },
    { label: "Cashout Amount", stated: existingLoan.cashoutAmount },
  ];

  const newLoanRows = [
    { label: "Product", value: newLoan.product },
    { label: "Loan Amount", value: newLoan.loanAmount },
    { label: "Loan Term", value: newLoan.loanTerm },
    { label: "Interest Rate", value: newLoan.interestRate },
    { label: "Monthly Repayment", value: newLoan.monthlyRepayment },
  ];

  return (
    <div className="p-4" style={{ backgroundColor: "var(--colcap-page-bg)", minHeight: "100%" }}>
      {/* Page title */}
      <h1
        className="text-xl font-semibold mb-4"
        style={{ color: "var(--colcap-section-text)" }}
      >
        Financial Summary
      </h1>

      {/* ── Refinance Property Details ── */}
      <div className="mb-4">
        <SectionHeader title="Refinance Property Details" />
        <div
          className="px-3 py-2 bg-white border-x border-b text-xs"
          style={{ borderColor: "var(--colcap-divider)" }}
        >
          {propertyAddress}
        </div>
      </div>

      {/* ── Two-column loan cards ── */}
      <div className="flex gap-4 mb-4 items-start">
        {/* LEFT — Existing Loan */}
        <div
          className="flex-1 border bg-white"
          style={{ borderColor: "#D0D0D0", borderRadius: 0 }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Existing Loan</th>
                <th style={tableHeaderStyle}>Stated</th>
                <th style={tableHeaderStyle}>Manually Validated</th>
              </tr>
            </thead>
            <tbody>
              {existingLoanRows.map((row) => (
                <tr key={row.label}>
                  <td style={tableCellStyle}>{row.label}</td>
                  <td style={tableCellStyle}>{row.stated}</td>
                  <td style={tableCellStyle}>&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT — New Loan Details */}
        <div
          className="flex-1 border bg-white"
          style={{ borderColor: "#D0D0D0", borderRadius: 0 }}
        >
          <SectionHeader title="New Loan Details" />
          <table className="w-full border-collapse">
            <tbody>
              {newLoanRows.map((row) => (
                <tr key={row.label}>
                  <td style={tableCellStyle}>{row.label}</td>
                  <td style={tableCellStyle}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Customer Objectives ── */}
      <div className="mb-4">
        <SectionHeader title="Customer Objectives" />
        <div
          className="bg-white border-x border-b"
          style={{ borderColor: "var(--colcap-divider)" }}
        >
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td
                  style={{
                    ...tableCellStyle,
                    width: "240px",
                    backgroundColor: "var(--colcap-section-bg)",
                    color: "var(--colcap-section-text)",
                    fontWeight: "normal",
                  }}
                >
                  Refinance Objective
                </td>
                <td style={tableCellStyle}>{refinanceObjective}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Validated Details ── */}
      <div className="mb-4">
        <SectionHeader title="Validated Details" />
        <div
          className="bg-white border-x border-b overflow-x-auto"
          style={{ borderColor: "var(--colcap-divider)" }}
        >
          <table className="w-full border-collapse" style={{ minWidth: "900px" }}>
            <thead>
              <tr>
                {[
                  "Type",
                  "Repayment Type",
                  "Lender",
                  "Balance",
                  "Acc No",
                  "Homer",
                  "Homey",
                  "PI Repayment",
                  "Remaining term in years",
                  "Repayment Frequency",
                  "Pct Own",
                  "PI Interest rate",
                ].map((col) => (
                  <th key={col} style={tableHeaderStyle}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {validatedDetails.map((row, i) => (
                <tr key={i}>
                  <td style={tableCellStyle}>{row.type}</td>
                  <td style={tableCellStyle}>{row.repaymentType}</td>
                  <td style={tableCellStyle}>{row.lender}</td>
                  <td style={{ ...tableCellStyle, textAlign: "right" }}>{row.balance}</td>
                  <td style={tableCellStyle}>{row.accNo}</td>
                  <td style={{ ...tableCellStyle, textAlign: "center" }}>{row.homer}</td>
                  <td style={{ ...tableCellStyle, textAlign: "center" }}>{row.homey}</td>
                  <td style={{ ...tableCellStyle, textAlign: "right" }}>{row.piRepayment}</td>
                  <td style={{ ...tableCellStyle, textAlign: "center" }}>{row.remainingTermYears}</td>
                  <td style={tableCellStyle}>{row.repaymentFrequency}</td>
                  <td style={{ ...tableCellStyle, textAlign: "center" }}>{row.pctOwn}</td>
                  <td style={{ ...tableCellStyle, textAlign: "right" }}>{row.piInterestRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
