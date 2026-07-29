from sqlalchemy.orm import Session

from app.models.incident_model import Incident


def calculate_priority(severity: str):

    severity = severity.lower()

    if severity == "critical":
        return "Critical"

    if severity == "high":
        return "High"

    if severity == "medium":
        return "Medium"

    return "Low"


def create_incident(
    db: Session,
    log: str,
    analysis: dict
):

    risk_score = analysis.get("risk_score", 0)

    # Caso o risk_score venha como objeto/dicionário
    if isinstance(risk_score, dict):
        risk_score = risk_score.get(
            "risk_score",
            0
        )

    evidence = analysis.get(
        "evidence",
        ""
    )

    # Caso evidence venha como lista
    if isinstance(evidence, list):
        evidence = ", ".join(evidence)

    incident = Incident(

        log=log,

        attack_type=analysis["attack_type"],

        severity=analysis["severity"],

        description=analysis["description"],

        recommendation=analysis["recommendation"],

        risk_score=risk_score,

        confidence=analysis.get(
            "confidence",
            0
        ),

        evidence=evidence,

        source_ip=analysis.get(
            "source_ip",
            "Unknown"
        ),

        priority=calculate_priority(
            analysis["severity"]
        ),

        mitre_id=analysis["mitre_id"],

        mitre_name=analysis["mitre_name"],

        status="Open"

    )

    db.add(incident)

    db.commit()

    db.refresh(incident)

    return incident