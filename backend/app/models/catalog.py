from decimal import Decimal

from sqlalchemy import Boolean, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin


class Category(TimestampMixin, Base):
    __tablename__ = "categories"

    name: Mapped[str] = mapped_column(String(120))
    slug: Mapped[str] = mapped_column(String(140), unique=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)


class Product(TimestampMixin, Base):
    __tablename__ = "products"

    category_id: Mapped[str | None] = mapped_column(ForeignKey("categories.id"), nullable=True)
    name: Mapped[str] = mapped_column(String(255))
    slug: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    sku: Mapped[str] = mapped_column(String(80), unique=True)
    short_description: Mapped[str | None] = mapped_column(Text, nullable=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    mattress_type: Mapped[str | None] = mapped_column(String(80), nullable=True)
    firmness: Mapped[str | None] = mapped_column(String(40), nullable=True)
    price: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    compare_at_price: Mapped[Decimal | None] = mapped_column(Numeric(12, 2), nullable=True)
    emi_price: Mapped[Decimal | None] = mapped_column(Numeric(12, 2), nullable=True)
    stock_quantity: Mapped[int] = mapped_column(Integer, default=0)
    warranty_months: Mapped[int] = mapped_column(Integer, default=60)
    metadata_json: Mapped[dict] = mapped_column("metadata", JSONB, default=dict)
    image_urls: Mapped[list] = mapped_column(JSONB, default=list)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

