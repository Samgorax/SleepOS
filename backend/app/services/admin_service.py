from app.schemas.admin import AdminAnalyticsOverview


class AdminService:
    def analytics_overview(self) -> AdminAnalyticsOverview:
        return AdminAnalyticsOverview(
            revenue_mtd=1865000.0,
            active_orders=62,
            open_leads=143,
            low_stock_skus=11,
            warranty_claims_open=7,
        )

