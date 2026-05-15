import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/shell/Header";
import { UtilityRail } from "@/components/shell/UtilityRail";
import { TabNav } from "@/components/shell/TabNav";
import { SubBrandBadge } from "@/components/shell/SubBrandBadge";
import { AppContextPanel } from "@/components/shell/AppContextPanel";
import { ActionPanel } from "@/components/shell/ActionPanel";
import applicationData from "@/data/application.json";

export const metadata: Metadata = {
  title: "ColCap Decision Engine",
  description: "ColCap DE — demo prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col" style={{ background: "var(--colcap-page-bg)" }}>
        {/* ── Top header band ── */}
        <Header />

        {/* ── Below header: utility rail + content ── */}
        <div className="flex flex-1 overflow-hidden">
          {/* Far-left utility rail */}
          <UtilityRail />

          {/* Main content column */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Sub-brand badge + tab nav row */}
            <div
              className="flex items-center gap-6 px-4 py-2 bg-white border-b flex-shrink-0"
              style={{ borderColor: "var(--colcap-divider)" }}
            >
              <SubBrandBadge brand={applicationData.brand} />
              <TabNav activeTab="Financials" />
            </div>

            {/* Content row: left panels + main area */}
            <div className="flex flex-1 overflow-hidden">
              {/* Left: App Context Panel + Action Panel */}
              <div
                className="flex flex-col flex-shrink-0 overflow-y-auto bg-white border-r"
                style={{ borderColor: "var(--colcap-divider)" }}
              >
                <AppContextPanel
                  data={{
                    applicationId: applicationData.applicationId,
                    status: applicationData.status,
                    queue: applicationData.queue,
                    submittedDate: applicationData.submittedDate,
                    submittedHoursAgo: applicationData.submittedHoursAgo,
                    refinanceAmount: applicationData.refinanceAmount,
                    valuation: applicationData.valuation,
                    estimatedPrice: applicationData.estimatedPrice,
                    lvr: applicationData.lvr,
                    lmi: applicationData.lmi,
                    threatMetrixRun: applicationData.threatMetrixRun,
                    applicationAlerts: applicationData.applicationAlerts,
                    applicantAlerts: applicationData.applicantAlerts,
                    primaryApplicant: applicationData.primaryApplicant,
                    additionalApplicants: applicationData.additionalApplicants,
                  }}
                />
                <ActionPanel />
              </div>

              {/* Right: page content */}
              <main
                className="flex-1 overflow-y-auto"
                style={{ backgroundColor: "var(--colcap-page-bg)" }}
              >
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
