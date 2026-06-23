from pydantic import BaseModel, Field


class WishlistResponse(BaseModel):
    product_id: str
    product_name: str
    price: str


class ReviewCreateRequest(BaseModel):
    product_id: str
    rating: int = Field(ge=1, le=5)
    title: str
    body: str


class ReviewResponse(BaseModel):
    product_id: str
    user_name: str
    rating: int
    title: str
    body: str

