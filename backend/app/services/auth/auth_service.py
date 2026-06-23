from fastapi import HTTPException

from app.core.security import create_access_token, create_refresh_token, decode_token, hash_password
from app.schemas.auth import (
    GoogleAuthRequest,
    LoginRequest,
    TokenPairResponse,
    UserProfileResponse,
    UserRegisterRequest,
)


class AuthService:
    def register(self, payload: UserRegisterRequest) -> TokenPairResponse:
        user = {
            "sub": "user-demo-1",
            "email": payload.email,
            "full_name": payload.full_name,
            "role": "customer",
        }
        return self._issue_tokens(user)

    def login(self, payload: LoginRequest) -> TokenPairResponse:
        user = {
            "sub": "user-demo-1",
            "email": payload.email,
            "full_name": "Demo Customer",
            "role": "customer",
            "password_hash_preview": hash_password(payload.password),
        }
        user.pop("password_hash_preview", None)
        return self._issue_tokens(user)

    def google_login(self, payload: GoogleAuthRequest) -> TokenPairResponse:
        user = {
            "sub": "google-user-demo",
            "email": "google.user@sleepos.ai",
            "full_name": "Google User",
            "role": "customer",
            "id_token_preview": payload.id_token[:12],
        }
        user.pop("id_token_preview", None)
        return self._issue_tokens(user)

    def refresh_tokens(self, refresh_token: str) -> TokenPairResponse:
        if not refresh_token:
            raise HTTPException(status_code=400, detail="Refresh token required.")
        user = decode_token(refresh_token, refresh=True)
        if user is None:
            raise HTTPException(status_code=401, detail="Invalid refresh token.")
        return self._issue_tokens(user)

    def _issue_tokens(self, user: dict) -> TokenPairResponse:
        access_token = create_access_token(user)
        refresh_token = create_refresh_token(user)
        return TokenPairResponse(
            access_token=access_token,
            refresh_token=refresh_token,
            user=UserProfileResponse(**user),
        )
