# AWS Deployment Blueprint

## Recommended Topology

- Route 53 -> CloudFront -> ALB
- ALB -> ECS services (`frontend`, `backend`, `ai-services`)
- RDS PostgreSQL multi-AZ
- S3 buckets for media, warranty, exports
- Secrets Manager for runtime secrets

## Buckets

- `sleepos-prod-media`
- `sleepos-prod-warranty`
- `sleepos-prod-exports`

## Secrets

- JWT secrets
- Google OAuth credentials
- Razorpay keys
- OpenAI and Gemini keys
- Database URL
- S3 access configuration

