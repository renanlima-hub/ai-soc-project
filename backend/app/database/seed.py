from sqlalchemy.orm import Session

from app.models.report_model import Report



def create_reports(db: Session):


    existing = db.query(Report).first()


    if existing:
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