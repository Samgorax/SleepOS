import boto3

from app.core.config import settings


class S3StorageService:
    def __init__(self) -> None:
        self.client = boto3.client(
            "s3",
            aws_access_key_id=settings.aws_access_key_id,
            aws_secret_access_key=settings.aws_secret_access_key,
            region_name=settings.aws_region,
        )

    def upload_placeholder(self, key: str, content_type: str) -> dict[str, str]:
        return {
            "bucket": settings.aws_s3_bucket,
            "key": key,
            "content_type": content_type,
        }

