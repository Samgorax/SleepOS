from decimal import Decimal

from fastapi import HTTPException

from app.schemas.product import ProductCreateRequest, ProductResponse


class ProductService:
    def __init__(self) -> None:
        self._products = [
            ProductResponse(
                id="prod-ortho",
                name="SleepOS Ortho Restore",
                slug="sleepos-ortho-restore",
                sku="SLP-ORTHO-001",
                short_description="Orthopedic support mattress for pressure relief and posture alignment.",
                price=Decimal("21999.00"),
                compare_at_price=Decimal("25999.00"),
                emi_price=Decimal("1833.00"),
                mattress_type="orthopedic",
                firmness="medium-firm",
                stock_quantity=48,
                warranty_months=84,
                image_urls=["/products/ortho-restore.jpg"],
            ),
            ProductResponse(
                id="prod-hotel",
                name="SleepOS Hotel Signature",
                slug="sleepos-hotel-signature",
                sku="SLP-HOTEL-009",
                short_description="Premium hospitality mattress optimized for durability and comfort consistency.",
                price=Decimal("28999.00"),
                compare_at_price=Decimal("32999.00"),
                emi_price=Decimal("2417.00"),
                mattress_type="hospitality",
                firmness="plush-medium",
                stock_quantity=26,
                warranty_months=60,
                image_urls=["/products/hotel-signature.jpg"],
            ),
        ]

    def list_products(self) -> list[ProductResponse]:
        return self._products

    def get_product(self, slug: str) -> ProductResponse:
        for product in self._products:
            if product.slug == slug:
                return product
        raise HTTPException(status_code=404, detail="Product not found.")

    def create_product(self, payload: ProductCreateRequest) -> ProductResponse:
        return ProductResponse(id=f"prod-{payload.slug}", **payload.model_dump())

