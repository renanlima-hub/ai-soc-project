import MetricCard from "../components/ui/MetricCard"
import { clients } from "../data/clients"

import {
  Users,
  ShieldCheck,
  AlertTriangle,
  Server
} from "lucide-react"



function Clients() {


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
          Gerenciamento dos clientes protegidos pelo AI SOC.
        </p>


      </div>






      <div className="
        grid
        grid-cols-4
        gap-6
      ">


        <MetricCard
          title="Total Clients"
          value="18"
          icon={<Users />}
          color="text-blue-400"
        />


        <MetricCard
          title="Protected"
          value="15"
          icon={<ShieldCheck />}
          color="text-green-400"
        />


        <MetricCard
          title="Risk Alerts"
          value="7"
          icon={<AlertTriangle />}
          color="text-red-400"
        />


        <MetricCard
          title="Assets"
          value="225"
          icon={<Server />}
          color="text-purple-400"
        />


      </div>







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
          Protected Clients
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
                Client
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


            {clients.map((client) => (

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
                  {client.risk}
                </td>


                <td>
                  {client.status}
                </td>


              </tr>

            ))}


          </tbody>


        </table>


      </div>



    </div>

  )

}



export default Clients