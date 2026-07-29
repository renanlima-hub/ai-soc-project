def map_mitre_attack(attack_type):


    mappings = {


        "Brute Force": {

            "id": "T1110",

            "name": "Brute Force"

        },



        "SQL Injection": {

            "id": "T1190",

            "name": "Exploit Public-Facing Application"

        },



        "Malware": {

            "id": "T1204",

            "name": "User Execution"

        },



        "Suspicious Login": {

            "id": "T1078",

            "name": "Valid Accounts"

        },



        "Phishing": {

            "id": "T1566",

            "name": "Phishing"

        },



        "Port Scan": {

            "id": "T1046",

            "name": "Network Service Scanning"

        },



        "DDoS": {

            "id": "T1498",

            "name": "Network Denial of Service"

        },



        "Privilege Escalation": {

            "id": "T1068",

            "name": "Exploitation for Privilege Escalation"

        }



    }



    return mappings.get(

        attack_type,

        {

            "id": "N/A",

            "name": "Unknown"

        }

    )