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

1. Frontend Setup & Debug
Install dependencies
npm install
Run frontend
npm run dev
Check React / Three.js versions
npm ls react react-dom @react-three/fiber @react-three/drei three
Type checking
npm run typecheck
Production build
npm run build
2. Backend Setup
Go to backend
cd backend
Create virtual environment
python -m venv venv
Activate venv
.\venv\Scripts\activate
Install requirements
pip install -r requirements.txt
Check Python version
python --version
3. FastAPI Run
Find main.py
gci -r -filter main.py
Run backend
python -m uvicorn app.main:app --reload
Health endpoint
http://127.0.0.1:8000/health
Swagger docs
http://127.0.0.1:8000/docs
4. Product API Testing
Products List
http://127.0.0.1:8000/api/v1/products
Single Product
http://127.0.0.1:8000/api/v1/products/sleepos-ortho-restore
5. Project Structure Investigation
Models
gci app\models
Database
gci app\db
Repositories
gci app\repositories
View README
cat README.md
View Config
cat .env
6. Git LFS Setup
Check git
git --version
Initialize repo
git init
Install Git LFS
git lfs install
Track large files
git lfs track "*.glb"
git lfs track "*.gltf"
git lfs track "*.fbx"
git lfs track "*.mp4"
git lfs track "*.zip"
git lfs track "*.psd"
Verify
cat .gitattributes
7. Git Status
Check files
git status
Check ignored files
git status --ignored
8. First Commit
Stage everything
git add .
Commit
git commit -m "Initial SleepOS Platform Architecture"
9. Connect GitHub
Add remote
git remote add origin https://github.com/Samgorax/SleepOS.git
Verify
git remote -v
Rename branch
git branch -M main
10. Push GitHub
Push repository
git push -u origin main --force
Verify
git status

Expected:

On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
11. Current Working Commands (Daily)
Frontend
cd frontend
npm run dev

Frontend:

http://localhost:3000
Backend
cd backend
.\venv\Scripts\activate
python -m uvicorn app.main:app --reload

Backend:

http://127.0.0.1:8000

Swagger:

http://127.0.0.1:8000/docs

Health:

http://127.0.0.1:8000/health
SleepOS Current Status
Frontend          ✅ Running
Backend           ✅ Running
Swagger           ✅ Running
Health API        ✅ Running
Products API      ✅ Running
Build             ✅ Success
Typecheck         ✅ Success
GitHub            ✅ Live
Git LFS           ✅ Configured

Next Target:
➡ PostgreSQL Setup
➡ SQLAlchemy Tables
➡ Repository Layer
➡ Dynamic Products
➡ Frontend ↔ Backend Integration
➡ AI Intelligence Layer



Terminal 1 — Backend

cd D:\shree-ram-mattresses\sleepos-platform\backend
.\venv\Scripts\activate
python -m uvicorn app.main:app --reload
Terminal 2 — Frontend

cd D:\shree-ram-mattresses\sleepos-platform\frontend
npm run dev
Terminal 3 — AI Service (jab use karna ho)

cd D:\shree-ram-mattresses\sleepos-platform\ai-services
.\venv\Scripts\activate
python -m uvicorn app.main:app --reload --port 8100
Open:

Frontend      → http://localhost:3000
Backend Docs  → http://127.0.0.1:8000/docs
AI Service    → http://127.0.0.1:8100/docs
![Uploading image.png…]()
