from datetime import datetime
from decimal import Decimal

from sqlalchemy import DateTime, Numeric, String
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin


class Tender(TimestampMixin, Base):
    __tablename__ = "tenders"

    source: Mapped[str | None] = mapped_column(String(80), nullable=True)
    title: Mapped[str] = mapped_column(String(255))
    reference_number: Mapped[str | None] = mapped_column(String(120), nullable=True)
    organization: Mapped[str | None] = mapped_column(String(255), nullable=True)
    due_date: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    value_estimate: Mapped[Decimal | None] = mapped_column(Numeric(12, 2), nullable=True)
    status: Mapped[str] = mapped_column(String(32), default="open")
    document_urls: Mapped[list] = mapped_column(JSONB, default=list)
    ai_summary: Mapped[dict] = mapped_column(JSONB, default=dict)
