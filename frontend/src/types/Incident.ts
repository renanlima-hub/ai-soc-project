export interface Incident {

    id: number

    log: string

    attack_type: string

    severity:
        | "Critical"
        | "High"
        | "Medium"
        | "Low"


    description: string

    recommendation: string


    status:
        | "Open"
        | "Processing"
        | "Blocked"
        | "Completed"
        | "Pending"


    risk_score: number

    priority:
        | "Critical"
        | "High"
        | "Medium"
        | "Low"


    mitre_id: string

    mitre_name: string


    confidence: number


    evidence: string


    source_ip: string


    created_at: string

}