from fastapi import APIRouter, Depends

from app.api.deps import get_current_user
from app.schemas.warranty import WarrantyPassportResponse, WarrantyRegisterRequest, WarrantyResponse
from app.services.warranty_service import WarrantyService

router = APIRouter()
warranty_service = WarrantyService()


@router.get("", response_model=list[WarrantyResponse])
def list_warranties(current_user: dict = Depends(get_current_user)) -> list[WarrantyResponse]:
    return warranty_service.list_warranties(current_user)


@router.post("/register", response_model=WarrantyResponse)
def register_warranty(
    payload: WarrantyRegisterRequest,
    current_user: dict = Depends(get_current_user),
) -> WarrantyResponse:
    return warranty_service.register(payload, current_user)


@router.get("/{warranty_id}/passport", response_model=WarrantyPassportResponse)
def get_passport(warranty_id: str) -> WarrantyPassportResponse:
    return warranty_service.get_passport(warranty_id)

