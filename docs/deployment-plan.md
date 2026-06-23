# Deployment Plan

## Environments

- Local: Docker Compose with hot-reload where possible
- Staging: AWS ECS or EC2 with separate PostgreSQL and S3 buckets
- Production: ECS Fargate or EKS, RDS PostgreSQL, CloudFront, ALB, WAF

## Services

- `frontend`: Next.js SSR application
- `backend`: FastAPI API service
- `ai-services`: AI orchestration service
- `postgres`: managed RDS in production
- `nginx`: reverse proxy for containerized environments

## AWS Recommendations

- RDS PostgreSQL for transactional data
- S3 for product media, warranty assets, exports
- CloudFront for static assets and media delivery
- Secrets Manager for app secrets
- CloudWatch for logs and alarms
- SNS / SES for notifications and email

## CI/CD Flow

1. Run lint, type-check, backend tests, and migration checks.
2. Build versioned Docker images.
3. Push images to ECR.
4. Deploy to staging.
5. Run smoke checks for auth, checkout, AI, and admin APIs.
6. Promote to production with rolling or blue/green deployment.

