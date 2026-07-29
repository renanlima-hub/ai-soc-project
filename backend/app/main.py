from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from app.database.connection import (
    engine,
    Base,
    SessionLocal
)


# Models
from app.models import incident_model
from app.models import client_model
from app.models import report_model



# Routes
from app.routes import analysis
from app.routes import incidents
from app.routes import dashboard
from app.routes import ai_analysis
from app.routes import reports
from app.routes import clients



from app.database.seed import create_reports





# Criar tabelas
Base.metadata.create_all(bind=engine)



# Criar dados iniciais de reports
db = SessionLocal()

create_reports(db)

db.close()






app = FastAPI(

    title="AI SOC",

    description="Projeto de Portfólio - AI SOC",

    version="1.0.0"

)








app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:5173"

    ],

    allow_credentials=True,

    allow_methods=[

        "*"

    ],

    allow_headers=[

        "*"

    ],

)







# ==========================
# API ROUTES
# ==========================



app.include_router(

    analysis.router,

    prefix="/api"

)



app.include_router(

    incidents.router,

    prefix="/api"

)



app.include_router(

    dashboard.router,

    prefix="/api"

)



app.include_router(

    ai_analysis.router,

    prefix="/api"

)



app.include_router(

    reports.router,

    prefix="/api"

)



app.include_router(

    clients.router,

    prefix="/api"

)








@app.get("/")
def home():

    return {

        "status": "online",

        "message": "Bem-vindo ao AI SOC!",

        "version": "1.0.0"

    }