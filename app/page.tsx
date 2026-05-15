import { FinancialsPage } from "@/components/screens/FinancialsPage";
import applicationData from "@/data/application.json";

export default function Page() {
  return <FinancialsPage liabilities={applicationData.liabilities} />;
}
