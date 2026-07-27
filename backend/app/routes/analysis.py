from fastapi import APIRouter
from app.models.log_model import LogRequest
from app.services.ai_service import analyze_security_log


router = APIRouter()


@router.post("/analyze")
def analyze_log(request: LogRequest):

    result = analyze_security_log(request.log)

    return {
        "original_log": request.log,
        "analysis": result
    }