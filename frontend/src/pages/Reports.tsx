import MetricCard from "../components/ui/MetricCard"
import StatusBadge from "../components/ui/StatusBadge"

import {
  FileText,
  Sparkles,
  Clock,
  CheckCircle,
  Download
} from "lucide-react"



function Reports() {


  const reports = [
    {
      id: "#001",
      client: "TechCorp Solutions",
      period: "July 2026",
      threats: 42,
      status: "Completed"
    },
    {
      id: "#002",
      client: "NovaLabs",
      period: "July 2026",
      threats: 87,
      status: "Processing"
    },
    {
      id: "#003",
      client: "CloudOne",
      period: "June 2026",
      threats: 21,
      status: "Completed"
    },
    {
      id: "#004",
      client: "DataSecure",
      period: "June 2026",
      threats: 15,
      status: "Pending"
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
          Security Reports
        </h1>


        <p className="
          text-zinc-400
          mt-2
        ">
          Relatórios automatizados de segurança gerados pelo AI SOC.
        </p>


      </div>







      <div className="
        grid
        grid-cols-4
        gap-6
      ">


        <MetricCard
          title="Total Reports"
          value="128"
          icon={<FileText />}
          color="text-blue-400"
        />


        <MetricCard
          title="AI Generated"
          value="94"
          icon={<Sparkles />}
          color="text-purple-400"
        />


        <MetricCard
          title="Processing"
          value="6"
          icon={<Clock />}
          color="text-yellow-400"
        />


        <MetricCard
          title="Completed"
          value="118"
          icon={<CheckCircle />}
          color="text-green-400"
        />


      </div>







      <div className="
        mt-8
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-6
        flex
        justify-between
        items-center
      ">


        <div>


          <h2 className="
            text-white
            text-xl
            font-semibold
          ">
            AI Report Generator
          </h2>


          <p className="
            text-zinc-400
            mt-2
          ">
            Gere análises de ameaças automaticamente utilizando inteligência artificial.
          </p>


        </div>





        <button className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-3
          rounded-xl
          flex
          items-center
          gap-2
          transition
        ">


          <Sparkles size={18}/>

          Generate Report


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
          Recent Reports
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


              <th>
                Action
              </th>


            </tr>


          </thead>





          <tbody>


            {reports.map((report)=>(


              <tr
                key={report.id}
                className="
                  border-b
                  border-zinc-800
                  text-zinc-300
                "
              >


                <td className="py-4">
                  {report.id}
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


                <td>


                  <button className="
                    text-blue-400
                    hover:text-blue-300
                    flex
                    items-center
                    gap-2
                  ">


                    <Download size={16}/>


                    View


                  </button>


                </td>


              </tr>


            ))}


          </tbody>


        </table>


      </div>



    </div>

  )

}



export default Reports