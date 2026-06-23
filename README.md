# SleepOS Platform

Enterprise-grade AI-powered mattress and sleep ecosystem platform for D2C, B2B procurement, tender intelligence, and post-purchase lifecycle management.

## Stack

- Frontend: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui-inspired component architecture
- Backend: FastAPI, SQLAlchemy, Pydantic
- Database: PostgreSQL
- Auth: JWT, Google OAuth 2.0
- Payments: Razorpay
- Storage: AWS S3
- AI: OpenAI / Gemini provider abstraction
- Infra: Docker, Nginx, AWS

## Repository Layout

```text
sleepos-platform/
├── frontend/
├── backend/
├── ai-services/
├── database/
├── deployment/
├── docs/
└── assets/
```

## Quick Start

1. Copy `.env.example` files in `frontend/`, `backend/`, and `ai-services/`.
2. Review `database/schema.sql` and provision PostgreSQL.
3. Start local services with `deployment/docker/docker-compose.yml`.
4. Read `docs/architecture.md` and `docs/deployment-plan.md` before production rollout.

## Core Capabilities

- Retail commerce, product discovery, wishlist, reviews, comparison, EMI
- AI mattress finder, sleep consultant, personalized recommendations
- B2B procurement workspace, asset/warranty tracking, replacement prediction
- Tender analysis, eligibility checks, cost/risk estimation
- Admin CRM, catalog, order, loyalty, analytics, and content management

