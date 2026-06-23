# API Routes

Base URL: `/api/v1`

## Auth

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/google`
- `POST /auth/refresh`
- `POST /auth/logout`
- `GET /auth/me`

## Catalog

- `GET /products`
- `GET /products/{slug}`
- `POST /products`
- `PATCH /products/{product_id}`
- `DELETE /products/{product_id}`
- `GET /categories`

## Commerce

- `GET /wishlist`
- `POST /wishlist/{product_id}`
- `DELETE /wishlist/{product_id}`
- `POST /orders`
- `GET /orders`
- `GET /orders/{order_id}`
- `POST /payments/create-order`
- `POST /payments/webhook`

## Reviews & Warranty

- `GET /reviews/product/{product_id}`
- `POST /reviews`
- `GET /warranties`
- `POST /warranties/register`
- `GET /warranties/{warranty_id}/passport`

## AI

- `POST /ai/mattress-finder`
- `POST /ai/sleep-consultant`
- `POST /ai/recommendations`
- `POST /ai/customer-segmentation`
- `POST /ai/lead-scoring`
- `POST /ai/inventory-forecast`
- `POST /ai/demand-prediction`

## B2B

- `GET /b2b/clients`
- `POST /b2b/clients`
- `POST /b2b/bulk-orders/calculate`
- `POST /b2b/bulk-orders`
- `GET /b2b/assets`
- `GET /b2b/replacement-predictions`

## Tenders

- `GET /tenders`
- `POST /tenders`
- `POST /tenders/analyze`
- `POST /tenders/eligibility-check`
- `POST /tenders/cost-estimate`
- `POST /tenders/risk-assessment`

## Admin

- `GET /admin/analytics/overview`
- `GET /admin/crm/leads`
- `GET /admin/customers`
- `GET /admin/inventory`
- `GET /admin/referrals`
- `GET /admin/loyalty`
- `GET /admin/blogs`

