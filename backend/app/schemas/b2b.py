from decimal import Decimal

from pydantic import BaseModel, EmailStr, Field


class B2BClientRequest(BaseModel):
    company_name: str
    client_type: str
    contact_name: str
    contact_email: EmailStr
    contact_phone: str | None = None


class B2BClientResponse(B2BClientRequest):
    id: str
    lifecycle_stage: str


class BulkOrderCalculationRequest(BaseModel):
    quantity: int = Field(ge=1)
    unit_price: Decimal = Field(gt=0)
    client_type: str


class BulkOrderCalculationResponse(BaseModel):
    quantity: int
    gross_total: Decimal
    discount_percentage: float
    net_total: Decimal
    projected_roi_months: int

