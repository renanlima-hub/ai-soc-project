def detect_attack(log_text: str):

    log = log_text.lower()


    if (
        "failed login" in log
        or "multiple failed login" in log
        or "brute force" in log
        or "authentication failures" in log
    ):

        return {
            "attack_type": "Brute Force",
            "confidence": 92,
            "evidence": [
                "Multiple authentication failures detected"
            ]
        }


    if (
        "sql injection" in log
        or "union select" in log
        or "select *" in log
    ):

        return {
            "attack_type": "SQL Injection",
            "confidence": 95,
            "evidence": [
                "SQL manipulation pattern detected"
            ]
        }



    if (
        "malware" in log
        or "ransomware" in log
        or "trojan" in log
    ):

        return {
            "attack_type": "Malware",
            "confidence": 96,
            "evidence": [
                "Malicious software indicator detected"
            ]
        }



    return {

        "attack_type":"Unknown",

        "confidence":30,

        "evidence":[
            "No known attack pattern detected"
        ]

    }