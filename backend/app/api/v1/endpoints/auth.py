from fastapi import APIRouter, Depends

from app.api.deps import get_current_user
from app.schemas.auth import (
    GoogleAuthRequest,
    LoginRequest,
    RefreshTokenRequest,
    TokenPairResponse,
    UserProfileResponse,
    UserRegisterRequest,
)
from app.services.auth.auth_service import AuthService

router = APIRouter()
auth_service = AuthService()


@router.post("/register", response_model=TokenPairResponse)
def register(payload: UserRegisterRequest) -> TokenPairResponse:
    return auth_service.register(payload)


@router.post("/login", response_model=TokenPairResponse)
def login(payload: LoginRequest) -> TokenPairResponse:
    return auth_service.login(payload)


@router.post("/google", response_model=TokenPairResponse)
def google_login(payload: GoogleAuthRequest) -> TokenPairResponse:
    return auth_service.google_login(payload)


@router.post("/refresh", response_model=TokenPairResponse)
def refresh(payload: RefreshTokenRequest) -> TokenPairResponse:
    return auth_service.refresh_tokens(payload.refresh_token)


@router.post("/logout")
def logout() -> dict[str, str]:
    return {"message": "Logout completed. Client should revoke local tokens."}


@router.get("/me", response_model=UserProfileResponse)
def me(current_user: dict = Depends(get_current_user)) -> UserProfileResponse:
    return UserProfileResponse(**current_user)

