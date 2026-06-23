import { InsightPage } from "@/components/marketing/insight-page";


export default function TenderSolutionsPage() {
  return (
    <InsightPage
      title="Tender Solutions"
      description="Tender intake, AI document analysis, compliance workflows, and risk scoring for public and private bids."
      cards={[
        "Eligibility checks against policy and past submissions",
        "Cost estimation with contingency assumptions",
        "Risk assessment and document action lists",
      ]}
    />
  );
}

