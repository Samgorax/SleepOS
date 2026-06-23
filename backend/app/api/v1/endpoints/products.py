from fastapi import APIRouter

from app.schemas.product import ProductCreateRequest, ProductListResponse, ProductResponse
from app.services.product_service import ProductService

router = APIRouter()
product_service = ProductService()


@router.get("", response_model=ProductListResponse)
def list_products() -> ProductListResponse:
    return ProductListResponse(items=product_service.list_products())


@router.get("/{slug}", response_model=ProductResponse)
def get_product(slug: str) -> ProductResponse:
    return product_service.get_product(slug)


@router.post("", response_model=ProductResponse)
def create_product(payload: ProductCreateRequest) -> ProductResponse:
    return product_service.create_product(payload)

