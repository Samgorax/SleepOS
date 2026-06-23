from pydantic import BaseModel, Field


class AIInsightRequest(BaseModel):
    profile: dict = Field(default_factory=dict)
    prompt: str | None = None
    context: dict = Field(default_factory=dict)


class AIInsightResponse(BaseModel):
    workflow: str
    provider: str
    summary: str
    recommendations: list[str] = Field(default_factory=list)
    confidence: float = 0.82

