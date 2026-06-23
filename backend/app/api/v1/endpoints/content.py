from fastapi import APIRouter

from app.schemas.content import BlogListResponse, BlogResponse
from app.services.content_service import ContentService

router = APIRouter()
content_service = ContentService()


@router.get("/blogs", response_model=BlogListResponse)
def list_blogs() -> BlogListResponse:
    return BlogListResponse(items=content_service.list_blogs())


@router.get("/blogs/{slug}", response_model=BlogResponse)
def get_blog(slug: str) -> BlogResponse:
    return content_service.get_blog(slug)

