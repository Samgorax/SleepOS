from app.schemas.tender import TenderAnalysisRequest, TenderAnalysisResponse, TenderResponse


class TenderService:
    def list_tenders(self) -> list[TenderResponse]:
        return [
            TenderResponse(
                id="tender-001",
                title="District Hospital Mattress Modernization",
                organization="State Health Procurement Board",
                status="open",
                reference_number="SHPB-2026-441",
            )
        ]

    def analyze(self, payload: TenderAnalysisRequest) -> TenderAnalysisResponse:
        return TenderAnalysisResponse(
            summary=f"Strong tender fit for {payload.organization} with manageable documentation scope.",
            score=0.84,
            action_items=["Validate compliance matrix.", "Review delivery SLA.", "Attach QA certifications."],
        )

    def eligibility_check(self, payload: TenderAnalysisRequest) -> TenderAnalysisResponse:
        return TenderAnalysisResponse(
            summary="Eligibility looks favorable based on operational scope and mattress category alignment.",
            score=0.79,
            action_items=["Verify turnover threshold.", "Confirm manufacturing certifications."],
        )

    def cost_estimate(self, payload: TenderAnalysisRequest) -> TenderAnalysisResponse:
        return TenderAnalysisResponse(
            summary="Estimated cost model prepared with logistics and warranty reserve assumptions.",
            score=0.81,
            action_items=["Lock raw material assumptions.", "Add transportation contingency."],
        )

    def risk_assessment(self, payload: TenderAnalysisRequest) -> TenderAnalysisResponse:
        return TenderAnalysisResponse(
            summary="Primary risks are delivery timelines, compliance attachment quality, and price undercutting.",
            score=0.73,
            action_items=["Prepare alternative suppliers.", "Run pricing floor review.", "Escalate legal checklist."],
        )

