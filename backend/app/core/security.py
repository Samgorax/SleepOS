from datetime import UTC, datetime, timedelta

from jose import JWTError, jwt
from passlib.context import CryptContext

from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
ALGORITHM = "HS256"


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(password: str, password_hash: str) -> bool:
    return pwd_context.verify(password, password_hash)


def create_access_token(subject: dict) -> str:
    payload = subject.copy()
    payload["exp"] = datetime.now(UTC) + timedelta(minutes=settings.jwt_access_expires_minutes)
    return jwt.encode(payload, settings.jwt_secret, algorithm=ALGORITHM)


def create_refresh_token(subject: dict) -> str:
    payload = subject.copy()
    payload["exp"] = datetime.now(UTC) + timedelta(days=settings.jwt_refresh_expires_days)
    return jwt.encode(payload, settings.jwt_refresh_secret, algorithm=ALGORITHM)


def decode_token(token: str, refresh: bool = False) -> dict | None:
    secret = settings.jwt_refresh_secret if refresh else settings.jwt_secret
    try:
        return jwt.decode(token, secret, algorithms=[ALGORITHM])
    except JWTError:
        return None

