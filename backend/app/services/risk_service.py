def calculate_risk(attack_type):


    risks = {


        "Brute Force": {

            "severity": "High",

            "risk_score": 80

        },



        "SQL Injection": {

            "severity": "Critical",

            "risk_score": 90

        },



        "Malware": {

            "severity": "Critical",

            "risk_score": 95

        },



        "Suspicious Login": {

            "severity": "Medium",

            "risk_score": 50

        },



        "Phishing": {

            "severity": "High",

            "risk_score": 75

        },



        "Port Scan": {

            "severity": "Medium",

            "risk_score": 45

        },



        "DDoS": {

            "severity": "Critical",

            "risk_score": 92

        },



        "Privilege Escalation": {

            "severity": "Critical",

            "risk_score": 88

        }



    }



    return risks.get(

        attack_type,

        {

            "severity": "Low",

            "risk_score": 20

        }

    )