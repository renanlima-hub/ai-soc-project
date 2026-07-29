from fastapi import APIRouter


router = APIRouter(
    tags=["Reports"]
)



reports_data = [

    {
        "id": "#001",
        "client": "TechCorp Solutions",
        "period": "July 2026",
        "threats": 42,
        "status": "Completed"
    },

    {
        "id": "#002",
        "client": "NovaLabs",
        "period": "July 2026",
        "threats": 87,
        "status": "Processing"
    },

    {
        "id": "#003",
        "client": "CloudOne",
        "period": "June 2026",
        "threats": 21,
        "status": "Completed"
    },

    {
        "id": "#004",
        "client": "DataSecure",
        "period": "June 2026",
        "threats": 15,
        "status": "Pending"
    }

]



@router.get("/reports")
def get_reports():

    return reports_data