from fastapi import APIRouter, Depends

from app.api.deps import get_current_user
from app.schemas.order import OrderCreateRequest, OrderResponse, PaymentOrderResponse
from app.services.order_service import OrderService
from app.services.payments.razorpay_service import RazorpayService

router = APIRouter()
order_service = OrderService()
payment_service = RazorpayService()


@router.post("/orders", response_model=OrderResponse)
def create_order(
    payload: OrderCreateRequest,
    current_user: dict = Depends(get_current_user),
) -> OrderResponse:
    return order_service.create_order(payload, current_user)


@router.get("/orders")
def list_orders(current_user: dict = Depends(get_current_user)) -> list[OrderResponse]:
    return order_service.list_orders(current_user)


@router.post("/payments/create-order", response_model=PaymentOrderResponse)
def create_payment_order(payload: OrderCreateRequest) -> PaymentOrderResponse:
    return payment_service.create_order(payload)


@router.post("/payments/webhook")
def razorpay_webhook(payload: dict) -> dict[str, str]:
    return payment_service.handle_webhook(payload)

