from fastapi import FastAPI

app = FastAPI(
    title="AI SOC",
    description="Projeto de Portfólio - AI SOC",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "status": "online",
        "message": "Bem-vindo ao AI SOC!",
        "version": "1.0.0"
    }

from fastapi import FastAPI
from app.routes import analysis


app = FastAPI(
    title="AI SOC",
    description="Projeto de Portfólio - AI SOC",
    version="1.0.0"
)


app.include_router(
    analysis.router,
    prefix="/api"
)


@app.get("/")
def home():
    return {
        "status": "online",
        "message": "Bem-vindo ao AI SOC!",
        "version": "1.0.0"
    }