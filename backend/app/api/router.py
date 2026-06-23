from fastapi import APIRouter

from app.api.v1.endpoints import admin, ai, auth, b2b, content, engagement, orders, products, tenders, warranties


api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(products.router, prefix="/products", tags=["products"])
api_router.include_router(engagement.router, tags=["engagement"])
api_router.include_router(orders.router, tags=["commerce"])
api_router.include_router(warranties.router, prefix="/warranties", tags=["warranties"])
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])
api_router.include_router(b2b.router, prefix="/b2b", tags=["b2b"])
api_router.include_router(tenders.router, prefix="/tenders", tags=["tenders"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
api_router.include_router(content.router, tags=["content"])

