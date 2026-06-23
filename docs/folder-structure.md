# Folder Structure

```text
sleepos-platform/
├── README.md
├── .gitignore
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── middleware.ts
│   └── src/
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── globals.css
│       │   ├── (marketing)/
│       │   ├── (customer)/
│       │   └── (admin)/
│       ├── components/
│       ├── lib/
│       └── types/
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── utils/
│   └── tests/
├── ai-services/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── app/
│       ├── providers/
│       └── workflows/
├── database/
│   ├── schema.sql
│   ├── migrations/
│   └── seeds/
├── deployment/
│   ├── docker/
│   ├── nginx/
│   └── aws/
├── docs/
└── assets/
```

