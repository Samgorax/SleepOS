from pydantic import BaseModel


class WarrantyRegisterRequest(BaseModel):
    product_id: str
    order_id: str | None = None
    serial_number: str


class WarrantyResponse(BaseModel):
    id: str
    product_id: str
    serial_number: str
    status: str
    qr_code_url: str


class WarrantyPassportResponse(BaseModel):
    warranty_id: str
    serial_number: str
    coverage: str
    qr_code_url: str
    support_contact: str

