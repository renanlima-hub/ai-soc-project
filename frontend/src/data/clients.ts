import type { Client } from "../types/Client"


export const clients: Client[] = [

  {
    name: "TechCorp Solutions",
    sector: "Technology",
    assets: 42,
    incidents: 8,
    risk: "Low",
    status: "Protected"
  },

  {
    name: "NovaLabs",
    sector: "Research",
    assets: 67,
    incidents: 15,
    risk: "Medium",
    status: "Monitoring"
  },

  {
    name: "CloudOne",
    sector: "Cloud Services",
    assets: 31,
    incidents: 4,
    risk: "Low",
    status: "Protected"
  },

  {
    name: "DataSecure",
    sector: "Finance",
    assets: 85,
    incidents: 22,
    risk: "High",
    status: "Attention Required"
  }

]