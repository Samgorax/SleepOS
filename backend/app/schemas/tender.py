from pydantic import BaseModel, Field


class TenderResponse(BaseModel):
    id: str
    title: str
    organization: str
    status: str
    reference_number: str | None = None


class TenderAnalysisRequest(BaseModel):
    title: str
    organization: str
    scope: str
    documents: list[str] = Field(default_factory=list)


class TenderAnalysisResponse(BaseModel):
    summary: str
    score: float
    action_items: list[str] = Field(default_factory=list)

