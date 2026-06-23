from pydantic import BaseModel


class AdminAnalyticsOverview(BaseModel):
    revenue_mtd: float
    active_orders: int
    open_leads: int
    low_stock_skus: int
    warranty_claims_open: int

