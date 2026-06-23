from pydantic import BaseModel


class BlogResponse(BaseModel):
    slug: str
    title: str
    excerpt: str
    status: str


class BlogListResponse(BaseModel):
    items: list[BlogResponse]

