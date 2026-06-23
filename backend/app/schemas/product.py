from decimal import Decimal

from pydantic import BaseModel, Field


class ProductBase(BaseModel):
    name: str
    slug: str
    sku: str
    short_description: str
    price: Decimal
    compare_at_price: Decimal | None = None
    emi_price: Decimal | None = None
    mattress_type: str
    firmness: str
    stock_quantity: int = 0
    warranty_months: int = 60
    image_urls: list[str] = Field(default_factory=list)


class ProductCreateRequest(ProductBase):
    pass


class ProductResponse(ProductBase):
    id: str


class ProductListResponse(BaseModel):
    items: list[ProductResponse]

