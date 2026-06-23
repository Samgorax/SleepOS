from fastapi import FastAPI

from app.schemas import AIWorkflowRequest, AIWorkflowResponse
from app.workflows.registry import run_workflow


app = FastAPI(title="SleepOS AI Service", version="1.0.0")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "ai-services"}


@app.post("/v1/workflows/{workflow_name}", response_model=AIWorkflowResponse)
def workflow(workflow_name: str, payload: AIWorkflowRequest) -> AIWorkflowResponse:
    return run_workflow(workflow_name, payload)

