from app.schemas import AIWorkflowRequest, AIWorkflowResponse


class BaseAIProvider:
    provider_name = "base"

    def run(self, workflow_name: str, payload: AIWorkflowRequest) -> AIWorkflowResponse:
        raise NotImplementedError

