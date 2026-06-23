# Authentication Flow

## Methods

- Email/password with JWT access + refresh tokens
- Google OAuth 2.0 for quick onboarding

## Sequence

1. User signs up or signs in from Next.js.
2. Backend validates credentials or OAuth token.
3. Backend issues:
   - short-lived access token
   - longer-lived refresh token
4. Frontend stores access token in memory and refresh token in secure HTTP-only cookie.
5. Protected frontend routes use middleware and server-side session checks.
6. Backend enforces RBAC for `customer`, `b2b_manager`, `tender_manager`, `admin`, `super_admin`.

## Google OAuth

1. Frontend triggers Google sign-in flow.
2. Google returns authorization code or ID token.
3. Backend verifies token with Google.
4. Backend creates or links local user record.
5. JWT pair is issued with platform roles and tenant context.

## Security Controls

- Password hashing with bcrypt
- Refresh token rotation
- Role-based access control
- Optional device fingerprinting
- Audit logging for admin actions
- Webhook signature verification for Razorpay

