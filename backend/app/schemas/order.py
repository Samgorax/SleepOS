from decimal import Decimal

from pydantic import BaseModel, Field


class OrderItemRequest(BaseModel):
    product_id: str
    quantity: int = Field(ge=1)
    unit_price: Decimal


class OrderCreateRequest(BaseModel):
    items: list[OrderItemRequest]
    shipping_address: dict
    billing_address: dict | None = None


class OrderResponse(BaseModel):
    id: str
    order_number: str
    status: str
    grand_total: Decimal
    payment_status: str


class PaymentOrderResponse(BaseModel):
    provider: str
    provider_order_id: str
    amount: Decimal
    currency: str

