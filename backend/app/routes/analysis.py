from fastapi import APIRouter
from app.models.log_model import LogRequest


router = APIRouter()


@router.post("/analyze")
def analyze_log(request: LogRequest):

    return {
        "status": "received",
        "message": "Log recebido para análise",
        "log": request.log
    }