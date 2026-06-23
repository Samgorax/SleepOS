import { CalculatorPanel } from "@/components/marketing/calculator-panel";


export default function ContactPage() {
  return (
    <CalculatorPanel
      eyebrow="Contact"
      title="Capture retail, B2B, and tender leads with routed workflows"
      description="This page should branch submissions into CRM pipelines, notify the right team, and score leads for follow-up priority."
      bullets={[
        "Retail consultations and AI recommendation handoff",
        "Bulk procurement and tender-specific intake fields",
        "Lead routing, SLA tracking, and reminder automation",
      ]}
    />
  );
}

