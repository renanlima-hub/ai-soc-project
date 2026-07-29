import {
  useEffect,
  useState
} from "react"

import MetricCard from "../components/ui/MetricCard"

import {
  ShieldAlert,
  ShieldCheck,
  Users,
  Activity,
  AlertTriangle
} from "lucide-react"

import api from "../services/api"



function Dashboard() {


  const [dashboard,setDashboard] = useState<any>(null)

  const [incidents,setIncidents] = useState<any[]>([])



  useEffect(()=>{


    async function loadDashboard(){


      try{


        const dashboardData = await api.get(
          "/dashboard"
        )


        const incidentsData = await api.get(
          "/incidents"
        )


        setDashboard(
          dashboardData
        )


        setIncidents(
          incidentsData.slice(0,5)
        )


      }catch(error){

        console.error(
          "Erro ao carregar dashboard",
          error
        )

      }


    }


    loadDashboard()


  },[])





  if(!dashboard){


    return (

      <div className="
        min-h-screen
        bg-black
        p-8
        text-white
      ">

        Loading dashboard...

      </div>

    )

  }






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






      <div className="
        grid
        grid-cols-4
        gap-6
      ">


        <MetricCard

          title="Critical Incidents"

          value={
            dashboard.severity.critical
          }

          icon={<ShieldAlert />}

          color="text-red-400"

        />



        <MetricCard

          title="Blocked Attacks"

          value={
            dashboard.blocked_incidents
          }

          icon={<ShieldCheck />}

          color="text-green-400"

        />



        <MetricCard

          title="Total Incidents"

          value={
            dashboard.total_incidents
          }

          icon={<Users />}

          color="text-blue-400"

        />



        <MetricCard

          title="AI Security Score"

          value={
            `${dashboard.average_risk}%`
          }

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


            {

              Object.values(
                dashboard.severity
              ).map(
                (value:any,index)=>(

                <div

                  key={index}

                  className="
                    flex-1
                    bg-blue-500
                    rounded-t-lg
                  "

                  style={{
                    height:`${value * 10}%`
                  }}

                />

              ))

            }


          </div>


        </div>


      </div>









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


            {
              incidents.map(
                incident=>(


                <tr

                  key={incident.id}

                  className="
                    border-b
                    border-zinc-800
                    text-zinc-300
                  "

                >


                  <td className="py-4">

                    #{incident.id}

                  </td>



                  <td>

                    {incident.attack_type}

                  </td>



                  <td>

                    {incident.severity}

                  </td>



                  <td>

                    {incident.status}

                  </td>


                </tr>


              ))
            }


          </tbody>


        </table>


      </div>


    </div>

  )

}



export default Dashboard