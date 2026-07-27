def analyze_security_log(log: str):

    analysis = {
        "attack_type": "Unknown",
        "severity": "Low",
        "description": "Log recebido para análise.",
        "recommendation": "Realizar investigação adicional."
    }

    if "sql" in log.lower():
        analysis = {
            "attack_type": "SQL Injection",
            "severity": "High",
            "description": "Possível tentativa de manipulação de consultas SQL.",
            "recommendation": "Aplicar prepared statements e validar entradas."
        }

    elif "failed login" in log.lower() or "login failure" in log.lower():
        analysis = {
            "attack_type": "Brute Force",
            "severity": "Medium",
            "description": "Múltiplas tentativas de autenticação detectadas.",
            "recommendation": "Implementar bloqueio temporário e MFA."
        }

    return analysis