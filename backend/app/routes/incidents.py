from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.incident_model import Incident


router = APIRouter(
    tags=["Incidents"]
)



@router.get("/incidents")
def list_incidents(
    db: Session = Depends(get_db)
):

    incidents = (
        db.query(Incident)
        .order_by(
            Incident.id.desc()
        )
        .all()
    )


    return incidents





@router.get("/incidents/{incident_id}")
def get_incident(
    incident_id: int,
    db: Session = Depends(get_db)
):


    incident = (
        db.query(Incident)
        .filter(
            Incident.id == incident_id
        )
        .first()
    )


    if not incident:

        raise HTTPException(
            status_code=404,
            detail="Incident not found"
        )


    return incident





@router.patch("/incidents/{incident_id}")
def update_incident_status(
    incident_id: int,
    status: str,
    db: Session = Depends(get_db)
):

    incident = (
        db.query(Incident)
        .filter(
            Incident.id == incident_id
        )
        .first()
    )


    if not incident:

        raise HTTPException(
            status_code=404,
            detail="Incident not found"
        )


    incident.status = status


    db.commit()

    db.refresh(incident)


    return incident