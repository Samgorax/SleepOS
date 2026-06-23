from app.providers.base import BaseAIProvider
from app.schemas import AIWorkflowRequest, AIWorkflowResponse


class MockAIProvider(BaseAIProvider):
    provider_name = "mock"

    def run(self, workflow_name: str, payload: AIWorkflowRequest) -> AIWorkflowResponse:
        return AIWorkflowResponse(
            workflow=workflow_name,
            provider=self.provider_name,
            summary=f"{workflow_name} workflow prepared with provider abstraction for OpenAI or Gemini integration.",
            recommendations=[
                "Persist prompt input, output, acceptance, and conversion metrics.",
                "Introduce guardrails and human review for high-risk procurement outputs.",
                "Fallback across providers when rate limits or safety blocks occur.",
            ],
            confidence=0.86,
        )

