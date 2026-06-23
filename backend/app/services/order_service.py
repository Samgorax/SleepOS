from decimal import Decimal

from app.schemas.order import OrderCreateRequest, OrderResponse


class OrderService:
    def create_order(self, payload: OrderCreateRequest, current_user: dict) -> OrderResponse:
        grand_total = sum((item.unit_price * item.quantity for item in payload.items), Decimal("0"))
        return OrderResponse(
            id="order-demo-1",
            order_number="SLP-20260617-001",
            status="created",
            grand_total=grand_total,
            payment_status="pending",
        )

    def list_orders(self, current_user: dict) -> list[OrderResponse]:
        return [
            OrderResponse(
                id="order-demo-1",
                order_number="SLP-20260617-001",
                status="processing",
                grand_total=Decimal("21999.00"),
                payment_status="paid",
            )
        ]

