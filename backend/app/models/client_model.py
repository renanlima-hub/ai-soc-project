from sqlalchemy import Column, Integer, String

from app.database.connection import Base


class Client(Base):

    __tablename__ = "clients"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    name = Column(
        String
    )


    sector = Column(
        String
    )


    assets = Column(
        Integer
    )


    incidents = Column(
        Integer
    )


    risk = Column(
        String
    )


    status = Column(
        String
    )