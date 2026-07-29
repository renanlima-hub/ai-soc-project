import {
  useEffect,
  useState
} from "react"

import {
  useNavigate
} from "react-router-dom"

import MetricCard from "../components/ui/MetricCard"
import SeverityBadge from "../components/ui/SeverityBadge"

import api from "../services/api"

import type { Incident } from "../types/Incident"

import {
  AlertTriangle,
  ShieldAlert,
  CheckCircle,
  Clock
} from "lucide-react"



function Incidents(){


  const [incidents,setIncidents] = useState<Incident[]>([])

  const [loading,setLoading] = useState(true)


  const navigate = useNavigate()



  useEffect(()=>{


    api("/incidents")

      .then(response=>{

        setIncidents(response)

      })

      .catch(error=>{

        console.error(
          "Erro carregando incidents:",
          error
        )

      })

      .finally(()=>{

        setLoading(false)

      })


  },[])






  const critical = incidents.filter(

    incident =>
      incident.severity === "Critical"

  ).length





  const investigating = incidents.filter(

    incident =>
      incident.status === "Investigating"

  ).length





  const resolved = incidents.filter(

    incident =>
      incident.status === "Resolved"

  ).length





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
          Investigação e gerenciamento de ameaças detectadas pelo SOC.
        </p>


      </div>








      <div className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-6
      ">


        <MetricCard
          title="Critical"
          value={critical}
          icon={<ShieldAlert/>}
          color="text-red-400"
        />



        <MetricCard
          title="Investigating"
          value={investigating}
          icon={<Clock/>}
          color="text-yellow-400"
        />



        <MetricCard
          title="Resolved"
          value={resolved}
          icon={<CheckCircle/>}
          color="text-green-400"
        />



        <MetricCard
          title="Total Alerts"
          value={incidents.length}
          icon={<AlertTriangle/>}
          color="text-blue-400"
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
          Detected Incidents
        </h2>






        {
          loading ? (

            <p className="text-zinc-400">
              Carregando incidentes...
            </p>

          ) : (



            <div className="overflow-x-auto">


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
                      Source IP
                    </th>


                    <th>
                      Severity
                    </th>


                    <th>
                      Status
                    </th>


                    <th>
                      Priority
                    </th>


                    <th>
                      Risk
                    </th>


                  </tr>


                </thead>






                <tbody>


                  {
                    incidents.map((incident)=>(


                      <tr

                        key={incident.id}

                        onClick={() =>
                          navigate(`/incidents/${incident.id}`)
                        }

                        className="
                          border-b
                          border-zinc-800
                          text-zinc-300
                          hover:bg-zinc-800/40
                          transition
                          cursor-pointer
                        "

                      >




                        <td className="
                          py-4
                          text-blue-400
                          font-semibold
                        ">

                          #{incident.id}

                        </td>







                        <td className="
                          text-white
                          font-medium
                        ">

                          {incident.attack_type}

                        </td>







                        <td>

                          {incident.source_ip}

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

                          {incident.priority}

                        </td>







                        <td>

                          {incident.risk_score}/100

                        </td>



                      </tr>


                    ))
                  }



                </tbody>


              </table>


            </div>


          )
        }




      </div>




    </div>

  )

}



export default Incidents