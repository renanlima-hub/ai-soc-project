import {
  Building2,
  Server,
  ShieldAlert,
  ShieldCheck
} from "lucide-react"


function Clients() {


  const clients = [
    {
      name: "TechCorp Solutions",
      sector: "Technology",
      assets: 124,
      incidents: 3,
      risk: "Low",
      status: "Protected"
    },
    {
      name: "NovaLabs",
      sector: "Financial",
      assets: 87,
      incidents: 12,
      risk: "High",
      status: "Attention"
    },
    {
      name: "CloudOne",
      sector: "Cloud Services",
      assets: 56,
      incidents: 5,
      risk: "Medium",
      status: "Protected"
    },
    {
      name: "DataSecure",
      sector: "Healthcare",
      assets: 203,
      incidents: 8,
      risk: "Medium",
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
          Client Management
        </h1>


        <p className="
          text-zinc-400
          mt-2
        ">
          Empresas e ambientes protegidos pelo AI SOC.
        </p>

      </div>




      {/* Summary Cards */}


      <div className="
        grid
        grid-cols-4
        gap-6
      ">


        <ClientCard
          title="Active Clients"
          value="18"
          icon={<Building2 />}
          color="text-blue-400"
        />


        <ClientCard
          title="Monitored Assets"
          value="470"
          icon={<Server />}
          color="text-purple-400"
        />


        <ClientCard
          title="Open Incidents"
          value="28"
          icon={<ShieldAlert />}
          color="text-red-400"
        />


        <ClientCard
          title="Protected"
          value="94%"
          icon={<ShieldCheck />}
          color="text-green-400"
        />


      </div>





      {/* Clients Table */}


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
          Monitored Companies
        </h2>



        <table className="
          w-full
          text-left
        ">


          <thead>

            <tr className="
              border-b
              border-zinc-800
              text-zinc-500
              text-sm
            ">

              <th className="pb-4">
                Company
              </th>

              <th>
                Sector
              </th>

              <th>
                Assets
              </th>

              <th>
                Incidents
              </th>

              <th>
                Risk
              </th>

              <th>
                Status
              </th>


            </tr>

          </thead>


          <tbody>


            {clients.map((client)=>(


              <tr
                key={client.name}
                className="
                  border-b
                  border-zinc-800
                  text-zinc-300
                "
              >


                <td className="
                  py-4
                  text-white
                  font-medium
                ">
                  {client.name}
                </td>


                <td>
                  {client.sector}
                </td>


                <td>
                  {client.assets}
                </td>


                <td>
                  {client.incidents}
                </td>


                <td>

                  <RiskBadge
                    risk={client.risk}
                  />

                </td>


                <td>

                  <StatusBadge
                    status={client.status}
                  />

                </td>


              </tr>


            ))}


          </tbody>


        </table>


      </div>



    </div>

  )

}





function ClientCard({
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





function RiskBadge({
  risk
}:{
  risk:string
}){


  const colors = {

    Low:
      "bg-green-500/20 text-green-400",

    Medium:
      "bg-yellow-500/20 text-yellow-400",

    High:
      "bg-red-500/20 text-red-400"

  }


  return (

    <span className={`
      px-3
      py-1
      rounded-full
      text-xs
      font-medium
      ${colors[risk as keyof typeof colors]}
    `}>

      {risk}

    </span>

  )

}





function StatusBadge({
  status
}:{
  status:string
}){


  const colors = {

    Protected:
      "bg-green-500/20 text-green-400",

    Attention:
      "bg-red-500/20 text-red-400",

    Monitoring:
      "bg-yellow-500/20 text-yellow-400"

  }


  return (

    <span className={`
      px-3
      py-1
      rounded-full
      text-xs
      font-medium
      ${colors[status as keyof typeof colors]}
    `}>

      {status}

    </span>

  )

}



export default Clients