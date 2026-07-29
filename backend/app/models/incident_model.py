from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from app.database.connection import Base



class Incident(Base):

    __tablename__ = "incidents"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    log = Column(
        String
    )


    attack_type = Column(
        String
    )


    severity = Column(
        String
    )


    description = Column(
        String
    )


    recommendation = Column(
        String
    )


    status = Column(
        String,
        default="Open"
    )


    risk_score = Column(
        Integer
    )


    priority = Column(
        String
    )


    mitre_id = Column(
        String
    )


    mitre_name = Column(
        String
    )


    confidence = Column(
        Integer
    )


    evidence = Column(
        String
    )


    source_ip = Column(
        String
    )


    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )