from app.schemas.engagement import ReviewCreateRequest, ReviewResponse, WishlistResponse


class EngagementService:
    def list_categories(self) -> list[dict[str, str]]:
        return [
            {"name": "Orthopedic", "slug": "orthopedic"},
            {"name": "Memory Foam", "slug": "memory-foam"},
            {"name": "Hospitality", "slug": "hospitality"},
        ]

    def get_wishlist(self, current_user: dict) -> list[WishlistResponse]:
        return [
            WishlistResponse(
                product_id="prod-ortho",
                product_name="SleepOS Ortho Restore",
                price="Rs 21,999",
            )
        ]

    def add_to_wishlist(self, product_id: str, current_user: dict) -> WishlistResponse:
        return WishlistResponse(
            product_id=product_id,
            product_name="SleepOS Wishlist Product",
            price="Rs 18,499",
        )

    def remove_from_wishlist(self, product_id: str, current_user: dict) -> dict[str, str]:
        return {"message": f"Removed {product_id} from wishlist."}

    def get_reviews(self, product_id: str) -> list[ReviewResponse]:
        return [
            ReviewResponse(
                product_id=product_id,
                user_name="Priya Sharma",
                rating=5,
                title="Excellent support",
                body="Great pressure relief and noticeably better sleep quality.",
            )
        ]

    def create_review(self, payload: ReviewCreateRequest, current_user: dict) -> ReviewResponse:
        return ReviewResponse(
            product_id=payload.product_id,
            user_name=current_user.get("full_name", "Customer"),
            rating=payload.rating,
            title=payload.title,
            body=payload.body,
        )

