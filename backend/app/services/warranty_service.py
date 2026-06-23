from app.schemas.warranty import WarrantyPassportResponse, WarrantyRegisterRequest, WarrantyResponse


class WarrantyService:
    def list_warranties(self, current_user: dict) -> list[WarrantyResponse]:
        return [
            WarrantyResponse(
                id="war-001",
                product_id="prod-ortho",
                serial_number="SLEEP-QR-0001",
                status="active",
                qr_code_url="https://example.com/qrs/SLEEP-QR-0001",
            )
        ]

    def register(self, payload: WarrantyRegisterRequest, current_user: dict) -> WarrantyResponse:
        return WarrantyResponse(
            id="war-new",
            product_id=payload.product_id,
            serial_number=payload.serial_number,
            status="active",
            qr_code_url=f"https://example.com/qrs/{payload.serial_number}",
        )

    def get_passport(self, warranty_id: str) -> WarrantyPassportResponse:
        return WarrantyPassportResponse(
            warranty_id=warranty_id,
            serial_number="SLEEP-QR-0001",
            coverage="84 months limited mattress warranty",
            qr_code_url="https://example.com/qrs/SLEEP-QR-0001",
            support_contact="support@sleepos.ai",
        )

