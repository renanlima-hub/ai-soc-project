from fastapi import APIRouter, Depends

from app.models.log_model import LogRequest

from app.services.ai_service import analyze_security_log
from app.services.incident_service import create_incident

from app.database.dependencies import get_db


router = APIRouter(
    tags=["Analysis"]
)



@router.post("/analyze")
def analyze_log(
    request: LogRequest,
    db=Depends(get_db)
):


    result = analyze_security_log(
        request.log
    )



    incident = create_incident(
        db,
        request.log,
        result
    )



    return {

        "message": "Incident created successfully",


        "incident": {


            "id": incident.id,


            "attack_type": incident.attack_type,


            "severity": incident.severity,


            "risk_score": incident.risk_score,


            "priority": incident.priority,


            "status": incident.status,


            "confidence": incident.confidence,


            "evidence": incident.evidence,


            "source_ip": incident.source_ip,


            "description": incident.description,


            "recommendation": incident.recommendation,


            "mitre": {


                "id": incident.mitre_id,


                "name": incident.mitre_name

            }


        }

    }