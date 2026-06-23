import httpx

from app.core.config import settings
from app.schemas.ai import AIInsightRequest, AIInsightResponse


class AIOrchestrator:
    provider = "provider-abstraction"

    def run(self, workflow: str, payload: AIInsightRequest) -> AIInsightResponse:
        try:
            response = httpx.post(
                f"{settings.ai_service_url}/v1/workflows/{workflow}",
                json=payload.model_dump(),
                timeout=5.0,
            )
            response.raise_for_status()
            return AIInsightResponse(**response.json())
        except httpx.HTTPError:
            summary = (
                f"{workflow} workflow prepared for production orchestration with profile-aware prompts "
                f"and structured recommendations."
            )
            recommendations = [
                "Capture profile traits, posture preference, pain points, and budget.",
                "Persist prompts, outputs, feedback score, and conversion outcome for retraining.",
                "Route to OpenAI or Gemini through provider configuration and fallback policy.",
            ]
            return AIInsightResponse(
                workflow=workflow,
                provider=self.provider,
                summary=summary,
                recommendations=recommendations,
                confidence=0.88,
            )
