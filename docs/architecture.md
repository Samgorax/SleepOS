# SleepOS Architecture

## High-Level Design

SleepOS is structured as a modular commerce and operations platform with three runtime layers:

1. `frontend`: Next.js 15 App Router application for D2C, B2B, tender, customer, and admin experiences.
2. `backend`: FastAPI REST API handling authentication, business logic, payment orchestration, and PostgreSQL persistence.
3. `ai-services`: dedicated AI orchestration service for recommendations, consultations, segmentation, demand forecasting, and tender intelligence.

## Domain Boundaries

- Identity: users, roles, sessions, OAuth, JWT
- Commerce: products, categories, carts, orders, payments, reviews, wishlist
- Loyalty: referrals, sleep coins, loyalty tiers
- Warranty: digital warranty vault, QR mattress passport, claim tracking
- B2B: accounts, procurement projects, bulk orders, asset lifecycle
- Tender: discovery, analysis, compliance, risk and cost estimation
- Content: blogs, CMS, FAQs, sleep health resources
- Intelligence: AI recommendations, demand forecasting, segmentation, analytics

## Clean Architecture

Backend follows layered boundaries:

- `api`: HTTP controllers and request validation
- `schemas`: input/output contracts
- `services`: domain use cases and integrations
- `repositories`: persistence abstraction
- `models`: ORM entities
- `core`: configuration, security, shared concerns

Frontend follows feature-oriented boundaries:

- `app`: route modules and layouts
- `components`: reusable UI units grouped by domain
- `lib`: API clients, auth helpers, constants, utilities
- `types`: shared frontend contracts

## Runtime Flow

1. User interacts with the Next.js app.
2. Frontend calls FastAPI through `/api/v1/*`.
3. FastAPI persists operational data in PostgreSQL.
4. FastAPI delegates AI-heavy workflows to `ai-services`.
5. Storage-heavy assets and warranty files go to S3.
6. Razorpay handles checkout and webhook callbacks.
7. Nginx terminates traffic and routes to frontend/backend services.

## Scaling Strategy

- Stateless app containers behind AWS ALB
- PostgreSQL with read replicas for analytics-heavy workloads
- S3 + CloudFront for images, manuals, warranty PDFs, QR assets
- Background jobs for forecasting, scoring, and notification pipelines
- Redis recommended for caching, sessions, rate limiting, and queue workloads

