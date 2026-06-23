from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin


class User(TimestampMixin, Base):
    __tablename__ = "users"

    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    password_hash: Mapped[str | None] = mapped_column(String(255), nullable=True)
    full_name: Mapped[str] = mapped_column(String(255))
    phone: Mapped[str | None] = mapped_column(String(32), nullable=True)
    role: Mapped[str] = mapped_column(String(32), default="customer")
    status: Mapped[str] = mapped_column(String(32), default="active")
    loyalty_tier: Mapped[str] = mapped_column(String(32), default="bronze")
    sleep_coins_balance: Mapped[int] = mapped_column(Integer, default=0)
    referred_by: Mapped[str | None] = mapped_column(ForeignKey("users.id"), nullable=True)

