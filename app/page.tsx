import { FinancialSummary } from "@/components/screens/FinancialSummary";
import applicationData from "@/data/application.json";

export default function Page() {
  const { property, existingLoan, newLoan, customerObjectives, validatedDetails } =
    applicationData;

  const propertyAddress = `${property.street}, ${property.suburb}, ${property.state} ${property.postcode}`;

  return (
    <FinancialSummary
      propertyAddress={propertyAddress}
      existingLoan={existingLoan}
      newLoan={newLoan}
      refinanceObjective={customerObjectives.refinanceObjective}
      validatedDetails={validatedDetails}
    />
  );
}
