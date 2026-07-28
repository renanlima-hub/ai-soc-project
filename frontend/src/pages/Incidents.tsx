import MetricCard from "../components/ui/MetricCard"
import SeverityBadge from "../components/ui/SeverityBadge"
import { incidents } from "../data/incidents"

import {
  AlertTriangle,
  ShieldAlert,
  CheckCircle,
  Clock
} from "lucide-react"



function Incidents() {


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





      <div className="
        grid
        grid-cols-4
        gap-6
      ">


        <MetricCard
          title="Critical"
          value="12"
          icon={<ShieldAlert />}
          color="text-red-400"
        />


        <MetricCard
          title="Investigating"
          value="8"
          icon={<Clock />}
          color="text-yellow-400"
        />


        <MetricCard
          title="Resolved"
          value="45"
          icon={<CheckCircle />}
          color="text-green-400"
        />


        <MetricCard
          title="Total Alerts"
          value="65"
          icon={<AlertTriangle />}
          color="text-blue-400"
        />


      </div>






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
        ">
          All
        </button>


        <button className="
          bg-zinc-800
          text-zinc-300
          px-4
          py-2
          rounded-lg
        ">
          Critical
        </button>


        <button className="
          bg-zinc-800
          text-zinc-300
          px-4
          py-2
          rounded-lg
        ">
          High
        </button>


        <button className="
          bg-zinc-800
          text-zinc-300
          px-4
          py-2
          rounded-lg
        ">
          Blocked
        </button>


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


            {incidents.map((incident) => (

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



export default Incidents