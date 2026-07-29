from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.incident_model import Incident


router = APIRouter(
    tags=["Dashboard"]
)



@router.get("/dashboard")
def get_dashboard(
    db: Session = Depends(get_db)
):


    incidents = db.query(Incident).all()


    total_incidents = len(incidents)


    open_incidents = len(
        [
            i for i in incidents
            if i.status == "Open"
        ]
    )


    blocked_incidents = len(
        [
            i for i in incidents
            if i.status == "Blocked"
        ]
    )


    critical = len(
        [
            i for i in incidents
            if i.severity == "Critical"
        ]
    )


    high = len(
        [
            i for i in incidents
            if i.severity == "High"
        ]
    )


    medium = len(
        [
            i for i in incidents
            if i.severity == "Medium"
        ]
    )


    low = len(
        [
            i for i in incidents
            if i.severity == "Low"
        ]
    )


    if total_incidents > 0:

        average_risk = sum(
            i.risk_score
            for i in incidents
        ) / total_incidents

    else:

        average_risk = 0



    return {

        "total_incidents": total_incidents,

        "severity": {

            "critical": critical,

            "high": high,

            "medium": medium,

            "low": low

        },

        "open_incidents": open_incidents,

        "blocked_incidents": blocked_incidents,

        "average_risk": round(
            average_risk
        )

    }