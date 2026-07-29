# AI SOC Platform

## Overview

AI SOC Platform is a Security Operations Center (SOC) platform designed to centralize security incidents, analyze threats, monitor alerts, and provide executive security visibility.

The project combines cybersecurity concepts with software development practices, creating a platform capable of managing security events, incident investigation, and operational reporting.

## Features

### Authentication

- Login interface for SOC access.
- Structure prepared for future implementation of JWT authentication and role-based access control.

### SOC Dashboard

Centralized security monitoring dashboard containing:

- Incident overview.
- Security indicators.
- Risk visualization.
- Operational status monitoring.

### Incident Management

Module responsible for security incident investigation and tracking.

Capabilities:

- Incident listing.
- Incident details visualization.
- Severity classification.
- Incident status management.
- Technical threat information.

Each incident contains security-related information:

- Attack type.
- Severity level.
- Risk score.
- Confidence level.
- Evidence.
- Source IP.
- Recommended actions.
- MITRE ATT&CK mapping.

### Notification System

Integrated notification system connected to the backend API.

Features:

- Active incident detection.
- Alert visualization.
- Incident counter.
- Direct navigation to incident details.

### Client Management

Module responsible for managing monitored clients.

Future improvements:

- Client security score.
- Attack history.
- Security trends.
- Individual security reports.

### Security Reports

Executive security analysis module containing:

- Total incidents.
- Critical incidents.
- High severity incidents.
- Average risk score.
- Most common attack types.
- Security indicators.

Prepared for future features:

- PDF report generation.
- CSV exports.
- Compliance reports.

## Architecture

The platform follows a client-server architecture:

```text
Frontend
   |
   | REST API
   |
Backend
   |
Database

Security workflow:

Threat Detection
        |
        |
Incident Creation
        |
        |
Backend API
        |
        |
SOC Dashboard
        |
        |
Security Analyst Investigation
Technologies
Frontend
React
TypeScript
Vite
TailwindCSS
React Router
Axios
Lucide Icons
Backend
Python
FastAPI
SQLAlchemy
REST API
Database

The database structure stores security incident information, including:

Threat classification.
Security evidence.
Risk analysis.
MITRE ATT&CK references.
Incident lifecycle information.
Project Structure
AI-SOC-Platform

├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── services
│   │
│   └── package.json
│
└── backend
    ├── app
    │   ├── database
    │   ├── models
    │   ├── routes
    │   └── services
    │
    └── requirements.txt
Installation
Backend

Navigate to the backend folder:

cd backend

Create a virtual environment:

python -m venv venv

Activate the environment:

Windows:

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Run the API:

uvicorn app.main:app --reload

Backend:

http://localhost:8000
Frontend

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Run the application:

npm run dev

Frontend:

http://localhost:5173
Future Improvements

Possible improvements for future versions:

Threat intelligence integration.
AI-powered threat analysis.
Real-time log ingestion.
WebSocket alert system.
JWT authentication.
User permissions.
Automated PDF reports.
SIEM integrations.
Project Goal

The objective of this project is to develop a modern SOC platform, combining cybersecurity and software engineering concepts to demonstrate:

Security incident management.
Threat monitoring.
Risk analysis.
Automation.
Development of cybersecurity solutions.
Author

Renan Lima

ADS student focused on Cybersecurity, Cloud Security, and development of security-oriented solutions.