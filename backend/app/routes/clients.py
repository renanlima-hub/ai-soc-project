from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.client_model import Client


router = APIRouter(
    tags=["Clients"]
)



@router.get("/clients")
def get_clients(
    db: Session = Depends(get_db)
):

    clients = (
        db.query(Client)
        .all()
    )


    return clients