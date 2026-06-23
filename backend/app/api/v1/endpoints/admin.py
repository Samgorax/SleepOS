from fastapi import APIRouter

from app.schemas.admin import AdminAnalyticsOverview
from app.services.admin_service import AdminService

router = APIRouter()
admin_service = AdminService()


@router.get("/analytics/overview", response_model=AdminAnalyticsOverview)
def analytics_overview() -> AdminAnalyticsOverview:
    return admin_service.analytics_overview()

