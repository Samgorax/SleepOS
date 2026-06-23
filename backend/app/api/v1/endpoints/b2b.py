from fastapi import APIRouter

from app.schemas.b2b import B2BClientRequest, B2BClientResponse, BulkOrderCalculationRequest, BulkOrderCalculationResponse
from app.services.b2b_service import B2BService

router = APIRouter()
b2b_service = B2BService()


@router.get("/clients", response_model=list[B2BClientResponse])
def list_clients() -> list[B2BClientResponse]:
    return b2b_service.list_clients()


@router.post("/clients", response_model=B2BClientResponse)
def create_client(payload: B2BClientRequest) -> B2BClientResponse:
    return b2b_service.create_client(payload)


@router.post("/bulk-orders/calculate", response_model=BulkOrderCalculationResponse)
def calculate_bulk_order(payload: BulkOrderCalculationRequest) -> BulkOrderCalculationResponse:
    return b2b_service.calculate_bulk_order(payload)

