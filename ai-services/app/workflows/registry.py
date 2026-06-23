from app.providers.mock import MockAIProvider
from app.schemas import AIWorkflowRequest, AIWorkflowResponse


provider = MockAIProvider()


def run_workflow(workflow_name: str, payload: AIWorkflowRequest) -> AIWorkflowResponse:
    return provider.run(workflow_name, payload)

