import {
  AlertTriangle,
  ShieldAlert,
  CheckCircle,
  Clock
} from "lucide-react"


function Incidents() {


  const incidents = [
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



  return (

    <div className="
      p-8
      bg-black
      min-h-screen
    ">


      <div className="mb-8">

        <h1 className="
          text-3xl
          font-bold
          text-white
        ">
          Incident Center
        </h1>


        <p className="
          text-zinc-400
          mt-2
        ">
          Investigação e gerenciamento de ameaças detectadas pela IA.
        </p>

      </div>




      {/* Summary Cards */}


      <div className="
        grid
        grid-cols-4
        gap-6
      ">


        <SummaryCard
          title="Critical"
          value="12"
          icon={<ShieldAlert />}
          color="text-red-400"
        />


        <SummaryCard
          title="Investigating"
          value="8"
          icon={<Clock />}
          color="text-yellow-400"
        />


        <SummaryCard
          title="Resolved"
          value="45"
          icon={<CheckCircle />}
          color="text-green-400"
        />


        <SummaryCard
          title="Total Alerts"
          value="65"
          icon={<AlertTriangle />}
          color="text-blue-400"
        />


      </div>





      {/* Filters */}


      <div className="
        mt-8
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-5
        flex
        gap-4
      ">


        <button className="
          bg-blue-600
          text-white
          px-4
          py-2
          rounded-lg
          text-sm
        ">
          All
        </button>


        <button className="
          bg-zinc-800
          text-zinc-300
          px-4
          py-2
          rounded-lg
          text-sm
        ">
          Critical
        </button>


        <button className="
          bg-zinc-800
          text-zinc-300
          px-4
          py-2
          rounded-lg
          text-sm
        ">
          High
        </button>


        <button className="
          bg-zinc-800
          text-zinc-300
          px-4
          py-2
          rounded-lg
          text-sm
        ">
          Blocked
        </button>


      </div>





      {/* Incident Table */}


      <div className="
        mt-8
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-6
      ">


        <h2 className="
          text-white
          text-xl
          font-semibold
          mb-6
        ">
          Detected Incidents
        </h2>



        <table className="
          w-full
          text-left
        ">


          <thead>

            <tr className="
              text-zinc-500
              text-sm
              border-b
              border-zinc-800
            ">

              <th className="pb-4">
                ID
              </th>

              <th>
                Attack
              </th>

              <th>
                Source
              </th>

              <th>
                Severity
              </th>

              <th>
                Status
              </th>

              <th>
                Action
              </th>

              <th>
                Time
              </th>

            </tr>

          </thead>


          <tbody>


            {incidents.map((incident)=>(


              <tr
                key={incident.id}
                className="
                  border-b
                  border-zinc-800
                  text-zinc-300
                "
              >

                <td className="py-4">
                  {incident.id}
                </td>


                <td>
                  {incident.type}
                </td>


                <td>
                  {incident.source}
                </td>


                <td>

                  <SeverityBadge
                    severity={incident.severity}
                  />

                </td>


                <td>
                  {incident.status}
                </td>


                <td>
                  {incident.action}
                </td>


                <td>
                  {incident.time}
                </td>


              </tr>


            ))}


          </tbody>


        </table>


      </div>



    </div>

  )

}





function SummaryCard({
  title,
  value,
  icon,
  color
}:{
  title:string
  value:string
  icon:React.ReactNode
  color:string
}){


  return (

    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      p-6
    ">


      <div className={color}>
        {icon}
      </div>


      <p className="
        text-zinc-400
        mt-4
      ">
        {title}
      </p>


      <h2 className="
        text-white
        text-3xl
        font-bold
        mt-2
      ">
        {value}
      </h2>


    </div>

  )

}





function SeverityBadge({
  severity
}:{
  severity:string
}){


  const styles = {

    Critical:
      "bg-red-500/20 text-red-400",

    High:
      "bg-orange-500/20 text-orange-400",

    Medium:
      "bg-yellow-500/20 text-yellow-400",

    Low:
      "bg-blue-500/20 text-blue-400"

  }


  return (

    <span className={`
      px-3
      py-1
      rounded-full
      text-xs
      font-medium
      ${styles[severity as keyof typeof styles]}
    `}>

      {severity}

    </span>

  )

}



export default Incidents