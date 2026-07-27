import {
  ShieldAlert,
  ShieldCheck,
  Users,
  Activity,
  AlertTriangle
} from "lucide-react"


function Dashboard() {

  const incidents = [
    {
      id: "#001",
      type: "SQL Injection",
      severity: "Critical",
      status: "Blocked"
    },
    {
      id: "#002",
      type: "Brute Force",
      severity: "High",
      status: "Investigating"
    },
    {
      id: "#003",
      type: "Malware Detection",
      severity: "Medium",
      status: "Resolved"
    },
    {
      id: "#004",
      type: "Suspicious Login",
      severity: "Low",
      status: "Monitoring"
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
          Security Overview
        </h1>


        <p className="
          text-zinc-400
          mt-2
        ">
          Monitoramento inteligente de ameaças em tempo real
        </p>

      </div>



      {/* Cards principais */}

      <div className="
        grid
        grid-cols-4
        gap-6
      ">


        <MetricCard
          title="Critical Incidents"
          value="24"
          icon={<ShieldAlert />}
          color="text-red-400"
        />


        <MetricCard
          title="Blocked Attacks"
          value="542"
          icon={<ShieldCheck />}
          color="text-green-400"
        />


        <MetricCard
          title="Protected Clients"
          value="18"
          icon={<Users />}
          color="text-blue-400"
        />


        <MetricCard
          title="AI Security Score"
          value="94%"
          icon={<Activity />}
          color="text-purple-400"
        />


      </div>




      <div className="
        grid
        grid-cols-3
        gap-6
        mt-8
      ">


        {/* AI Status */}

        <div className="
          col-span-1
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          p-6
        ">


          <h2 className="
            text-white
            font-semibold
            text-lg
          ">
            AI Threat Engine
          </h2>


          <div className="
            mt-6
            flex
            items-center
            gap-4
          ">

            <div className="
              w-14
              h-14
              rounded-full
              bg-green-500/20
              flex
              items-center
              justify-center
            ">

              <ShieldCheck
                className="text-green-400"
                size={30}
              />

            </div>


            <div>

              <p className="
                text-green-400
                font-bold
                text-xl
              ">
                Protected
              </p>


              <p className="
                text-zinc-400
                text-sm
              ">
                IA operando normalmente
              </p>

            </div>

          </div>


        </div>



        {/* Threat Level */}

        <div className="
          col-span-2
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          p-6
        ">


          <h2 className="
            text-white
            font-semibold
            text-lg
          ">
            Threat Activity
          </h2>


          <div className="
            mt-6
            flex
            items-end
            gap-4
            h-32
          ">

            {[40,70,55,90,60,80,45].map((height,index)=>(

              <div
                key={index}
                className="
                  flex-1
                  bg-blue-500
                  rounded-t-lg
                "
                style={{
                  height:`${height}%`
                }}
              />

            ))}


          </div>


        </div>


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


        <div className="
          flex
          items-center
          gap-3
          mb-6
        ">

          <AlertTriangle
            className="text-yellow-400"
          />

          <h2 className="
            text-white
            text-lg
            font-semibold
          ">
            Recent Incidents
          </h2>


        </div>



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

              <th className="pb-3">
                ID
              </th>

              <th>
                Attack Type
              </th>

              <th>
                Severity
              </th>

              <th>
                Status
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

                  <span className="
                    text-red-400
                  ">
                    {incident.severity}
                  </span>

                </td>


                <td>
                  {incident.status}
                </td>


              </tr>

            ))}


          </tbody>


        </table>


      </div>


    </div>

  )
}



function MetricCard({
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
        text-sm
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


export default Dashboard