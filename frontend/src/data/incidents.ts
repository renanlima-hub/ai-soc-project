import type { Incident } from "../types/Incident"


export const incidents: Incident[] = [

  {
    id: "#001",
    type: "SQL Injection",
    source: "192.168.1.24",
    severity: "Critical",
    status: "Blocked",
    action: "Firewall Rule Applied",
    time: "10 min ago"
  },

  {
    id: "#002",
    type: "Brute Force Attack",
    source: "45.32.120.8",
    severity: "High",
    status: "Investigating",
    action: "User Locked",
    time: "35 min ago"
  },

  {
    id: "#003",
    type: "Malware Detection",
    source: "Endpoint-04",
    severity: "Medium",
    status: "Resolved",
    action: "File Removed",
    time: "1 hour ago"
  },

  {
    id: "#004",
    type: "Suspicious Login",
    source: "VPN Gateway",
    severity: "Low",
    status: "Monitoring",
    action: "Session Logged",
    time: "3 hours ago"
  }

]