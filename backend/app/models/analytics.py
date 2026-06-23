from decimal import Decimal

from sqlalchemy import Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin


class AnalyticsMetric(TimestampMixin, Base):
    __tablename__ = "analytics"

    metric_name: Mapped[str] = mapped_column(String(120))
    dimension: Mapped[str | None] = mapped_column(String(120), nullable=True)
    dimension_value: Mapped[str | None] = mapped_column(String(120), nullable=True)
    metric_value: Mapped[Decimal] = mapped_column(Numeric(14, 4))

