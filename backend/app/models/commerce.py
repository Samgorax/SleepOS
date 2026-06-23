from decimal import Decimal

from sqlalchemy import Boolean, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin


class Order(TimestampMixin, Base):
    __tablename__ = "orders"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"))
    order_number: Mapped[str] = mapped_column(String(40), unique=True)
    status: Mapped[str] = mapped_column(String(32), default="pending")
    subtotal: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    discount_total: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=0)
    tax_total: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=0)
    shipping_total: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=0)
    grand_total: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    payment_status: Mapped[str] = mapped_column(String(32), default="pending")
    shipping_address: Mapped[dict] = mapped_column(JSONB, default=dict)
    billing_address: Mapped[dict | None] = mapped_column(JSONB, nullable=True)


class Payment(TimestampMixin, Base):
    __tablename__ = "payments"

    order_id: Mapped[str] = mapped_column(ForeignKey("orders.id"))
    provider: Mapped[str] = mapped_column(String(32), default="razorpay")
    provider_order_id: Mapped[str | None] = mapped_column(String(120), nullable=True)
    provider_payment_id: Mapped[str | None] = mapped_column(String(120), nullable=True)
    status: Mapped[str] = mapped_column(String(32), default="created")
    amount: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    payload: Mapped[dict] = mapped_column(JSONB, default=dict)


class Review(TimestampMixin, Base):
    __tablename__ = "reviews"

    product_id: Mapped[str] = mapped_column(ForeignKey("products.id"))
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"))
    rating: Mapped[int] = mapped_column(Integer)
    title: Mapped[str | None] = mapped_column(String(255), nullable=True)
    body: Mapped[str | None] = mapped_column(Text, nullable=True)
    is_verified_purchase: Mapped[bool] = mapped_column(Boolean, default=False)


class Wishlist(TimestampMixin, Base):
    __tablename__ = "wishlist"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"))
    product_id: Mapped[str] = mapped_column(ForeignKey("products.id"))

