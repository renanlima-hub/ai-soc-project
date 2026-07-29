import re

from app.services.mitre_service import map_mitre_attack
from app.services.risk_service import calculate_risk



def extract_ip(log_text):

    result = re.search(
        r"\b(?:\d{1,3}\.){3}\d{1,3}\b",
        log_text
    )

    if result:
        return result.group()

    return "Unknown"



def analyze_with_rules(log_text):

    log = log_text.lower()


    attack = "Unknown"
    severity = "Low"
    confidence = 60
    evidence = ""
    recommendation = ""
    description = ""


    if (
        "failed login" in log
        or "authentication failed" in log
        or "brute" in log
    ):

        attack = "Brute Force"
        severity = "High"
        confidence = 90

        evidence = (
            "Multiple failed authentication attempts detected."
        )

        description = (
            "Multiple unsuccessful authentication attempts "
            "were detected, indicating a possible brute force attack "
            "against an authentication service."
        )

        recommendation = (
            "Block or temporarily restrict the source IP, "
            "review authentication logs, enable MFA, "
            "and apply account lockout policies."
        )


    elif (
        "select * from" in log
        or "sql injection" in log
        or "union select" in log
    ):

        attack = "SQL Injection"
        severity = "Critical"
        confidence = 95

        evidence = (
            "Suspicious SQL query pattern detected."
        )

        description = (
            "Suspicious SQL manipulation patterns were detected, "
            "indicating a possible SQL Injection attempt "
            "against an application."
        )

        recommendation = (
            "Validate application inputs, enable WAF protection, "
            "review database access logs, and investigate affected endpoints."
        )


    elif (
        "port scan" in log
        or "nmap" in log
    ):

        attack = "Port Scan"
        severity = "Medium"
        confidence = 85

        evidence = (
            "Network reconnaissance activity detected."
        )

        description = (
            "Network scanning activity was detected, "
            "which may indicate reconnaissance performed "
            "before a potential attack."
        )

        recommendation = (
            "Analyze firewall logs, validate the source IP, "
            "and monitor exposed network services."
        )


    elif (
        "malware" in log
        or "trojan" in log
        or "virus" in log
    ):

        attack = "Malware"
        severity = "Critical"
        confidence = 90

        evidence = (
            "Malicious software indicators detected."
        )

        description = (
            "Indicators associated with malicious software "
            "were detected on the environment."
        )

        recommendation = (
            "Isolate affected hosts, perform malware analysis, "
            "run security scans, and investigate persistence mechanisms."
        )


    else:

        evidence = (
            "No known attack pattern identified."
        )

        description = (
            "No recognized attack pattern was identified "
            "from the analyzed security event."
        )

        recommendation = (
            "Perform additional investigation and collect "
            "more security telemetry."
        )



    return {

        "attack_type": attack,

        "severity": severity,

        "confidence": confidence,

        "evidence": evidence,

        "description": description,

        "recommendation": recommendation

    }



def analyze_security_log(log_text):


    result = analyze_with_rules(
        log_text
    )


    mitre = map_mitre_attack(
        result["attack_type"]
    )


    risk = calculate_risk(
        result["attack_type"]
    )


    return {


        "attack_type":
        result["attack_type"],


        "severity":
        result["severity"],


        "risk_score":
        risk,


        "confidence":
        result["confidence"],


        "evidence":
        result["evidence"],


        "source_ip":
        extract_ip(log_text),


        "mitre_id":
        mitre["id"],


        "mitre_name":
        mitre["name"],


        "description":
        result["description"],


        "recommendation":
        result["recommendation"]

    }



def analyze_log(log_text):

    return analyze_security_log(log_text)