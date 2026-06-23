from decimal import Decimal

from app.schemas.b2b import B2BClientRequest, B2BClientResponse, BulkOrderCalculationRequest, BulkOrderCalculationResponse


class B2BService:
    def list_clients(self) -> list[B2BClientResponse]:
        return [
            B2BClientResponse(
                id="b2b-001",
                company_name="Sunrise Hotels Group",
                client_type="hotel",
                contact_name="Aarav Mehta",
                contact_email="procurement@sunrisehotels.com",
                contact_phone="+91-9876543210",
                lifecycle_stage="proposal",
            )
        ]

    def create_client(self, payload: B2BClientRequest) -> B2BClientResponse:
        return B2BClientResponse(id="b2b-new", lifecycle_stage="lead", **payload.model_dump())

    def calculate_bulk_order(self, payload: BulkOrderCalculationRequest) -> BulkOrderCalculationResponse:
        discount = 20.0 if payload.quantity > 100 else 15.0 if payload.quantity > 50 else 10.0
        gross_total = payload.unit_price * payload.quantity
        net_total = gross_total * Decimal(1 - (discount / 100))
        return BulkOrderCalculationResponse(
            quantity=payload.quantity,
            gross_total=gross_total,
            discount_percentage=discount,
            net_total=net_total,
            projected_roi_months=18 if payload.client_type == "hotel" else 24,
        )

