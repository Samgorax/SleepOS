from fastapi import HTTPException

from app.schemas.content import BlogResponse


class ContentService:
    def __init__(self) -> None:
        self._blogs = [
            BlogResponse(
                slug="how-to-choose-a-mattress-for-back-pain",
                title="How To Choose A Mattress For Back Pain",
                excerpt="A practical guide to matching support, firmness, and recovery goals.",
                status="published",
            ),
            BlogResponse(
                slug="hotel-mattress-procurement-playbook",
                title="Hotel Mattress Procurement Playbook",
                excerpt="A framework for balancing comfort, lifecycle cost, and brand standards.",
                status="published",
            ),
        ]

    def list_blogs(self) -> list[BlogResponse]:
        return self._blogs

    def get_blog(self, slug: str) -> BlogResponse:
        for blog in self._blogs:
            if blog.slug == slug:
                return blog
        raise HTTPException(status_code=404, detail="Blog not found.")

