from sqlalchemy.orm import Session

from app.database.connection import SessionLocal

from app.models.client_model import Client
from app.models.incident_model import Incident
from app.models.report_model import Report



def create_clients(db: Session):

    if db.query(Client).first():
        return


    clients = [

        Client(
            name="TechCorp Solutions",
            sector="Technology",
            assets=42,
            incidents=8,
            risk="Low",
            status="Protected"
        ),


        Client(
            name="NovaLabs",
            sector="Research",
            assets=67,
            incidents=15,
            risk="Medium",
            status="Monitoring"
        ),


        Client(
            name="CloudOne",
            sector="Cloud Services",
            assets=31,
            incidents=4,
            risk="Low",
            status="Protected"
        ),


        Client(
            name="DataSecure",
            sector="Finance",
            assets=85,
            incidents=22,
            risk="High",
            status="Attention Required"
        )

    ]


    db.add_all(clients)

    db.commit()





def create_incidents(db: Session):

    if db.query(Incident).first():
        return


    incidents = [

        Incident(
            log="SELECT * FROM users WHERE id=1",
            attack_type="SQL Injection",
            severity="Critical",
            description="Tentativa de exploração SQL detectada",
            recommendation="Bloquear origem e revisar aplicação",
            status="Blocked",
            risk_score=95,
            priority="Critical",
            mitre_id="T1190",
            mitre_name="Exploit Public-Facing Application",
            confidence=98,
            evidence="Payload SQL identificado",
            source_ip="192.168.1.50"
        ),


        Incident(
            log="Multiple failed login attempts",
            attack_type="Brute Force",
            severity="High",
            description="Múltiplas tentativas de autenticação",
            recommendation="Aplicar bloqueio temporário",
            status="Investigating",
            risk_score=80,
            priority="High",
            mitre_id="T1110",
            mitre_name="Brute Force",
            confidence=90,
            evidence="20 falhas consecutivas",
            source_ip="10.0.0.15"
        ),


        Incident(
            log="Malware detected in endpoint",
            attack_type="Malware Detection",
            severity="Medium",
            description="Arquivo malicioso encontrado",
            recommendation="Isolar máquina",
            status="Resolved",
            risk_score=60,
            priority="Medium",
            mitre_id="T1204",
            mitre_name="User Execution",
            confidence=85,
            evidence="Arquivo suspeito",
            source_ip="172.16.0.20"
        )

    ]


    db.add_all(incidents)

    db.commit()





def create_reports(db: Session):

    if db.query(Report).first():
        return


    reports = [

        Report(
            client="TechCorp Solutions",
            period="July 2026",
            threats=42,
            status="Completed"
        ),


        Report(
            client="NovaLabs",
            period="July 2026",
            threats=87,
            status="Processing"
        ),


        Report(
            client="CloudOne",
            period="June 2026",
            threats=21,
            status="Completed"
        ),


        Report(
            client="DataSecure",
            period="June 2026",
            threats=15,
            status="Pending"
        )

    ]


    db.add_all(reports)

    db.commit()






def seed():

    db = SessionLocal()


    try:

        create_clients(db)

        create_incidents(db)

        create_reports(db)


        print("Database populated successfully")


    finally:

        db.close()






if __name__ == "__main__":

    seed()