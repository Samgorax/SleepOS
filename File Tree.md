# File Tree: SleepOS

```
├── 📁 ai-services
│   ├── 📁 app
│   │   ├── 📁 providers
│   │   │   ├── 🐍 __init__.py
│   │   │   ├── 🐍 base.py
│   │   │   └── 🐍 mock.py
│   │   ├── 📁 workflows
│   │   │   ├── 🐍 __init__.py
│   │   │   └── 🐍 registry.py
│   │   ├── 🐍 __init__.py
│   │   ├── 🐍 main.py
│   │   └── 🐍 schemas.py
│   ├── ⚙️ .env.example
│   ├── 🐳 Dockerfile
│   └── 📄 requirements.txt
├── 📁 assets
│   └── 📝 README.md
├── 📁 backend
│   ├── 📁 app
│   │   ├── 📁 api
│   │   │   ├── 📁 v1
│   │   │   │   ├── 📁 endpoints
│   │   │   │   │   ├── 🐍 __init__.py
│   │   │   │   │   ├── 🐍 admin.py
│   │   │   │   │   ├── 🐍 ai.py
│   │   │   │   │   ├── 🐍 auth.py
│   │   │   │   │   ├── 🐍 b2b.py
│   │   │   │   │   ├── 🐍 content.py
│   │   │   │   │   ├── 🐍 engagement.py
│   │   │   │   │   ├── 🐍 orders.py
│   │   │   │   │   ├── 🐍 products.py
│   │   │   │   │   ├── 🐍 tenders.py
│   │   │   │   │   └── 🐍 warranties.py
│   │   │   │   └── 🐍 __init__.py
│   │   │   ├── 🐍 __init__.py
│   │   │   ├── 🐍 deps.py
│   │   │   └── 🐍 router.py
│   │   ├── 📁 core
│   │   │   ├── 🐍 __init__.py
│   │   │   ├── 🐍 config.py
│   │   │   └── 🐍 security.py
│   │   ├── 📁 db
│   │   │   ├── 🐍 __init__.py
│   │   │   └── 🐍 session.py
│   │   ├── 📁 models
│   │   │   ├── 🐍 __init__.py
│   │   │   ├── 🐍 analytics.py
│   │   │   ├── 🐍 b2b.py
│   │   │   ├── 🐍 base.py
│   │   │   ├── 🐍 catalog.py
│   │   │   ├── 🐍 commerce.py
│   │   │   ├── 🐍 content.py
│   │   │   ├── 🐍 tender.py
│   │   │   └── 🐍 user.py
│   │   ├── 📁 repositories
│   │   │   └── 📝 README.md
│   │   ├── 📁 schemas
│   │   │   ├── 🐍 admin.py
│   │   │   ├── 🐍 ai.py
│   │   │   ├── 🐍 auth.py
│   │   │   ├── 🐍 b2b.py
│   │   │   ├── 🐍 content.py
│   │   │   ├── 🐍 engagement.py
│   │   │   ├── 🐍 order.py
│   │   │   ├── 🐍 product.py
│   │   │   ├── 🐍 tender.py
│   │   │   └── 🐍 warranty.py
│   │   ├── 📁 services
│   │   │   ├── 📁 ai
│   │   │   │   ├── 🐍 __init__.py
│   │   │   │   └── 🐍 client.py
│   │   │   ├── 📁 auth
│   │   │   │   ├── 🐍 __init__.py
│   │   │   │   └── 🐍 auth_service.py
│   │   │   ├── 📁 payments
│   │   │   │   ├── 🐍 __init__.py
│   │   │   │   └── 🐍 razorpay_service.py
│   │   │   ├── 📁 storage
│   │   │   │   ├── 🐍 __init__.py
│   │   │   │   └── 🐍 s3_service.py
│   │   │   ├── 🐍 __init__.py
│   │   │   ├── 🐍 admin_service.py
│   │   │   ├── 🐍 b2b_service.py
│   │   │   ├── 🐍 content_service.py
│   │   │   ├── 🐍 engagement_service.py
│   │   │   ├── 🐍 order_service.py
│   │   │   ├── 🐍 product_service.py
│   │   │   ├── 🐍 tender_service.py
│   │   │   └── 🐍 warranty_service.py
│   │   ├── 📁 utils
│   │   │   └── 📝 README.md
│   │   ├── 🐍 __init__.py
│   │   └── 🐍 main.py
│   ├── 📁 tests
│   │   └── 🐍 test_health.py
│   ├── ⚙️ .env.example
│   ├── 🐳 Dockerfile
│   └── 📄 requirements.txt
├── 📁 database
│   ├── 📁 migrations
│   │   └── 📝 README.md
│   ├── 📁 seeds
│   │   └── 📝 README.md
│   ├── 📝 README.md
│   └── 📄 schema.sql
├── 📁 deployment
│   ├── 📁 aws
│   │   └── 📝 README.md
│   ├── 📁 docker
│   │   └── ⚙️ docker-compose.yml
│   └── 📁 nginx
│       └── ⚙️ default.conf
├── 📁 docs
│   ├── 📝 admin-architecture.md
│   ├── 📝 api-routes.md
│   ├── 📝 architecture.md
│   ├── 📝 authentication-flow.md
│   ├── 📝 deployment-plan.md
│   ├── 📝 folder-structure.md
│   └── 📝 ui-ux-structure.md
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 app
│   │   │   ├── 📁 (admin)
│   │   │   │   └── 📁 admin
│   │   │   │       └── 📄 page.tsx
│   │   │   ├── 📁 (customer)
│   │   │   │   └── 📁 dashboard
│   │   │   │       └── 📄 page.tsx
│   │   │   ├── 📁 (marketing)
│   │   │   │   ├── 📁 ai-mattress-finder
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 b2b-solutions
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 blog
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 contact
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 products
│   │   │   │   │   ├── 📁 [slug]
│   │   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 sleep-health-center
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 tender-solutions
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📄 layout.tsx
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 🎨 globals.css
│   │   │   └── 📄 layout.tsx
│   │   ├── 📁 components
│   │   │   ├── 📁 admin
│   │   │   │   └── 📄 admin-dashboard-page.tsx
│   │   │   ├── 📁 ai
│   │   │   │   └── 📄 ai-mattress-finder-page.tsx
│   │   │   ├── 📁 b2b
│   │   │   │   └── 📄 b2b-solutions-page.tsx
│   │   │   ├── 📁 catalog
│   │   │   │   ├── 📄 product-catalog-page.tsx
│   │   │   │   └── 📄 product-details-page.tsx
│   │   │   ├── 📁 content
│   │   │   │   └── 📄 sleep-health-center-page.tsx
│   │   │   ├── 📁 customer
│   │   │   │   └── 📄 customer-dashboard-page.tsx
│   │   │   ├── 📁 layout
│   │   │   │   ├── 📄 dashboard-shell.tsx
│   │   │   │   ├── 📄 site-footer.tsx
│   │   │   │   └── 📄 site-header.tsx
│   │   │   ├── 📁 marketing
│   │   │   │   ├── 📄 calculator-panel.tsx
│   │   │   │   ├── 📄 insight-page.tsx
│   │   │   │   └── 📄 landing-page.tsx
│   │   │   ├── 📁 shared
│   │   │   │   ├── 📄 gsap-parallax.tsx
│   │   │   │   ├── 📄 metric-card.tsx
│   │   │   │   ├── 📄 motion-reveal.tsx
│   │   │   │   ├── 📄 section-heading.tsx
│   │   │   │   └── 📄 smooth-scroll-provider.tsx
│   │   │   ├── 📁 three
│   │   │   │   └── 📄 mattress-canvas.tsx
│   │   │   └── 📁 ui
│   │   │       ├── 📄 badge.tsx
│   │   │       ├── 📄 button.tsx
│   │   │       └── 📄 card.tsx
│   │   ├── 📁 lib
│   │   │   ├── 📁 api
│   │   │   │   └── 📄 client.ts
│   │   │   ├── 📁 auth
│   │   │   │   └── 📄 session.ts
│   │   │   ├── 📁 constants
│   │   │   │   ├── 📄 mock-data.ts
│   │   │   │   └── 📄 nav.ts
│   │   │   └── 📁 utils
│   │   │       └── 📄 cn.ts
│   │   └── 📁 types
│   │       └── 📄 domain.ts
│   ├── ⚙️ .env.example
│   ├── 🐳 Dockerfile
│   ├── 📄 middleware.ts
│   ├── 📄 next-env.d.ts
│   ├── 📄 next.config.ts
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── 📄 postcss.config.js
│   ├── 📄 tailwind.config.ts
│   ├── ⚙️ tsconfig.json
│   └── 📄 tsconfig.tsbuildinfo
├── ⚙️ .gitattributes
├── ⚙️ .gitignore
└── 📝 README.md
```
