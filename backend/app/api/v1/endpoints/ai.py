from fastapi import APIRouter

from app.schemas.ai import AIInsightRequest, AIInsightResponse
from app.services.ai.client import AIOrchestrator

router = APIRouter()
ai_orchestrator = AIOrchestrator()


@router.post("/mattress-finder", response_model=AIInsightResponse)
def mattress_finder(payload: AIInsightRequest) -> AIInsightResponse:
    return ai_orchestrator.run("mattress-finder", payload)


@router.post("/sleep-consultant", response_model=AIInsightResponse)
def sleep_consultant(payload: AIInsightRequest) -> AIInsightResponse:
    return ai_orchestrator.run("sleep-consultant", payload)


@router.post("/recommendations", response_model=AIInsightResponse)
def recommendations(payload: AIInsightRequest) -> AIInsightResponse:
    return ai_orchestrator.run("recommendations", payload)


@router.post("/customer-segmentation", response_model=AIInsightResponse)
def customer_segmentation(payload: AIInsightRequest) -> AIInsightResponse:
    return ai_orchestrator.run("customer-segmentation", payload)


@router.post("/lead-scoring", response_model=AIInsightResponse)
def lead_scoring(payload: AIInsightRequest) -> AIInsightResponse:
    return ai_orchestrator.run("lead-scoring", payload)


@router.post("/inventory-forecast", response_model=AIInsightResponse)
def inventory_forecast(payload: AIInsightRequest) -> AIInsightResponse:
    return ai_orchestrator.run("inventory-forecast", payload)


@router.post("/demand-prediction", response_model=AIInsightResponse)
def demand_prediction(payload: AIInsightRequest) -> AIInsightResponse:
    return ai_orchestrator.run("demand-prediction", payload)

