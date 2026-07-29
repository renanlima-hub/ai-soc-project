import {
  useEffect,
  useState
} from "react"


import MetricCard from "../components/ui/MetricCard"
import StatusBadge from "../components/ui/StatusBadge"

import api from "../services/api"


import {
  FileText,
  Clock,
  CheckCircle,
  ShieldAlert
} from "lucide-react"



interface Report {

  id: number

  client: string

  period: string

  threats: number

  status: string

}





function Reports(){


  const [reports,setReports] = useState<Report[]>([])

  const [loading,setLoading] = useState(true)





  useEffect(()=>{


    async function loadReports(){


      try {


        const response = await api.get("/reports")


        setReports(response)


      } catch(error){


        console.error(
          "Erro carregando reports:",
          error
        )


      } finally {


        setLoading(false)


      }


    }


    loadReports()


  },[])







  const totalReports = reports.length



  const completedReports = reports.filter(

    report =>
      report.status === "Completed"

  ).length




  const processingReports = reports.filter(

    report =>
      report.status === "Processing"

  ).length




  const totalThreats = reports.reduce(

    (total,report)=>

      total + report.threats,

    0

  )








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

          Security Reports

        </h1>




        <p className="
          text-zinc-400
          mt-2
        ">

          Relatórios automatizados de segurança gerados pelo SOC.

        </p>


      </div>









      <div className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-6
      ">



        <MetricCard

          title="Total Reports"

          value={totalReports}

          icon={<FileText/>}

          color="text-blue-400"

        />





        <MetricCard

          title="Completed"

          value={completedReports}

          icon={<CheckCircle/>}

          color="text-green-400"

        />





        <MetricCard

          title="Processing"

          value={processingReports}

          icon={<Clock/>}

          color="text-yellow-400"

        />





        <MetricCard

          title="Threats Found"

          value={totalThreats}

          icon={<ShieldAlert/>}

          color="text-red-400"

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

          Recent Reports

        </h2>






        {

          loading ? (


            <p className="text-zinc-400">

              Carregando relatórios...

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
                      Client
                    </th>


                    <th>
                      Period
                    </th>


                    <th>
                      Threats
                    </th>


                    <th>
                      Status
                    </th>


                  </tr>


                </thead>







                <tbody>


                  {

                    reports.map(report=>(


                      <tr

                        key={report.id}

                        className="
                          border-b
                          border-zinc-800
                          text-zinc-300
                          hover:bg-zinc-800/40
                          transition
                        "

                      >



                        <td className="py-4">

                          #{report.id}

                        </td>





                        <td className="
                          text-white
                          font-medium
                        ">

                          {report.client}

                        </td>





                        <td>

                          {report.period}

                        </td>





                        <td>

                          {report.threats}

                        </td>





                        <td>


                          <StatusBadge

                            status={report.status}

                          />


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



export default Reports