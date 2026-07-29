from sqlalchemy import Column, Integer, String

from app.database.connection import Base



class Report(Base):

    __tablename__ = "reports"



    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    client = Column(
        String
    )


    period = Column(
        String
    )


    threats = Column(
        Integer
    )


    status = Column(
        String
    )