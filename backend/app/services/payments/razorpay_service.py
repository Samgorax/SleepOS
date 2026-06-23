from decimal import Decimal

from app.schemas.order import OrderCreateRequest, PaymentOrderResponse


class RazorpayService:
    def create_order(self, payload: OrderCreateRequest) -> PaymentOrderResponse:
        amount = sum((item.unit_price * item.quantity for item in payload.items), Decimal("0"))
        return PaymentOrderResponse(
            provider="razorpay",
            provider_order_id="order_RZP_DEMO_001",
            amount=amount,
            currency="INR",
        )

    def handle_webhook(self, payload: dict) -> dict[str, str]:
        return {"status": "received", "event": payload.get("event", "unknown")}

