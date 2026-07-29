from fastapi import APIRouter

from app.services.ai_service import analyze_log



router = APIRouter()



@router.post("/analyze")
def analyze(
    data:dict
):


    log = data.get("log")



    result = analyze_log(log)



    return result