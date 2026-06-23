from fastapi import APIRouter

from app.schemas.tender import TenderAnalysisRequest, TenderAnalysisResponse, TenderResponse
from app.services.tender_service import TenderService

router = APIRouter()
tender_service = TenderService()


@router.get("", response_model=list[TenderResponse])
def list_tenders() -> list[TenderResponse]:
    return tender_service.list_tenders()


@router.post("/analyze", response_model=TenderAnalysisResponse)
def analyze_tender(payload: TenderAnalysisRequest) -> TenderAnalysisResponse:
    return tender_service.analyze(payload)


@router.post("/eligibility-check", response_model=TenderAnalysisResponse)
def eligibility_check(payload: TenderAnalysisRequest) -> TenderAnalysisResponse:
    return tender_service.eligibility_check(payload)


@router.post("/cost-estimate", response_model=TenderAnalysisResponse)
def cost_estimate(payload: TenderAnalysisRequest) -> TenderAnalysisResponse:
    return tender_service.cost_estimate(payload)


@router.post("/risk-assessment", response_model=TenderAnalysisResponse)
def risk_assessment(payload: TenderAnalysisRequest) -> TenderAnalysisResponse:
    return tender_service.risk_assessment(payload)

