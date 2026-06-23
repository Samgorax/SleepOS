from fastapi import APIRouter, Depends

from app.api.deps import get_current_user
from app.schemas.engagement import ReviewCreateRequest, ReviewResponse, WishlistResponse
from app.services.engagement_service import EngagementService

router = APIRouter()
engagement_service = EngagementService()


@router.get("/categories")
def list_categories() -> list[dict[str, str]]:
    return engagement_service.list_categories()


@router.get("/wishlist", response_model=list[WishlistResponse])
def get_wishlist(current_user: dict = Depends(get_current_user)) -> list[WishlistResponse]:
    return engagement_service.get_wishlist(current_user)


@router.post("/wishlist/{product_id}", response_model=WishlistResponse)
def add_to_wishlist(product_id: str, current_user: dict = Depends(get_current_user)) -> WishlistResponse:
    return engagement_service.add_to_wishlist(product_id, current_user)


@router.delete("/wishlist/{product_id}")
def remove_from_wishlist(product_id: str, current_user: dict = Depends(get_current_user)) -> dict[str, str]:
    return engagement_service.remove_from_wishlist(product_id, current_user)


@router.get("/reviews/product/{product_id}", response_model=list[ReviewResponse])
def get_product_reviews(product_id: str) -> list[ReviewResponse]:
    return engagement_service.get_reviews(product_id)


@router.post("/reviews", response_model=ReviewResponse)
def create_review(
    payload: ReviewCreateRequest,
    current_user: dict = Depends(get_current_user),
) -> ReviewResponse:
    return engagement_service.create_review(payload, current_user)

