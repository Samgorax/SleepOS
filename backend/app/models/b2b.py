from decimal import Decimal

from sqlalchemy import ForeignKey, Integer, Numeric, String
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin


class B2BClient(TimestampMixin, Base):
    __tablename__ = "b2b_clients"

    company_name: Mapped[str] = mapped_column(String(255))
    client_type: Mapped[str] = mapped_column(String(40))
    contact_name: Mapped[str] = mapped_column(String(255))
    contact_email: Mapped[str] = mapped_column(String(255))
    contact_phone: Mapped[str | None] = mapped_column(String(32), nullable=True)
    lifecycle_stage: Mapped[str] = mapped_column(String(40), default="lead")


class BulkOrder(TimestampMixin, Base):
    __tablename__ = "bulk_orders"

    b2b_client_id: Mapped[str] = mapped_column(ForeignKey("b2b_clients.id"))
    tender_id: Mapped[str | None] = mapped_column(ForeignKey("tenders.id"), nullable=True)
    quantity: Mapped[int] = mapped_column(Integer)
    total_amount: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    negotiated_discount: Mapped[Decimal] = mapped_column(Numeric(5, 2), default=0)
    roi_projection: Mapped[dict] = mapped_column(JSONB, default=dict)
    status: Mapped[str] = mapped_column(String(32), default="draft")

