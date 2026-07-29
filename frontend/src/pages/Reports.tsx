import {
  useEffect,
  useState
} from "react"

import {
  FileText,
  ShieldAlert,
  AlertTriangle,
  Activity
} from "lucide-react"



function Reports(){


  const [incidents,setIncidents] = useState<any[]>([])



  useEffect(()=>{


    async function loadIncidents(){


      try {


        const response = await fetch(
          "http://localhost:8000/api/incidents"
        )


        const data = await response.json()


        setIncidents(data)



      } catch(error){


        console.error(
          "Erro ao carregar relatórios:",
          error
        )


      }


    }



    loadIncidents()



  },[])





  const total = incidents.length



  const critical = incidents.filter(
    incident =>
      incident.severity?.toLowerCase() === "critical"
  ).length



  const high = incidents.filter(
    incident =>
      incident.severity?.toLowerCase() === "high"
  ).length



  const medium = incidents.filter(
    incident =>
      incident.severity?.toLowerCase() === "medium"
  ).length



  const low = incidents.filter(
    incident =>
      incident.severity?.toLowerCase() === "low"
  ).length





  const averageRisk = total > 0

    ? Math.round(

        incidents.reduce(

          (acc,incident)=>

            acc + (incident.risk_score || 0),

          0

        ) / total

      )

    : 0






  const attacks = incidents.reduce(

    (acc:any,incident)=>{


      const type =
        incident.attack_type ||
        "Unknown"



      acc[type] =
        (acc[type] || 0) + 1



      return acc


    },

    {}

  )




  const mostCommonAttack = Object.keys(attacks)

    .sort(

      (a,b)=>

        attacks[b] - attacks[a]

    )[0]

    || "No data"






  return (


    <main className="
      p-8
      text-white
    ">



      <div className="
        flex
        justify-between
        items-center
        mb-8
      ">


        <div>


          <h1 className="
            text-3xl
            font-bold
          ">


            Security Reports


          </h1>



          <p className="
            text-zinc-400
            mt-2
          ">


            Executive security overview


          </p>


        </div>





        <button className="
          flex
          items-center
          gap-2
          bg-blue-600
          hover:bg-blue-700
          px-5
          py-3
          rounded-xl
          transition
        ">


          <FileText size={18}/>


          Generate Report


        </button>



      </div>







      <section className="
        grid
        grid-cols-4
        gap-5
        mb-8
      ">



        <MetricCard

          title="Total Incidents"

          value={total}

          icon={<Activity size={22}/>}

        />



        <MetricCard

          title="Critical"

          value={critical}

          icon={<ShieldAlert size={22}/>}

        />



        <MetricCard

          title="High"

          value={high}

          icon={<AlertTriangle size={22}/>}

        />



        <MetricCard

          title="Risk Score"

          value={`${averageRisk}%`}

          icon={<Activity size={22}/>}

        />



      </section>







      <section className="
        grid
        grid-cols-2
        gap-6
      ">




        <div className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          p-6
        ">


          <h2 className="
            font-semibold
            text-lg
            mb-5
          ">


            Severity Distribution


          </h2>



          <div className="
            space-y-3
          ">


            <ReportRow

              label="Critical"

              value={critical}

            />


            <ReportRow

              label="High"

              value={high}

            />


            <ReportRow

              label="Medium"

              value={medium}

            />


            <ReportRow

              label="Low"

              value={low}

            />


          </div>


        </div>







        <div className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          p-6
        ">



          <h2 className="
            font-semibold
            text-lg
            mb-5
          ">


            Threat Intelligence


          </h2>




          <div className="
            space-y-4
          ">


            <div>


              <p className="
                text-zinc-400
                text-sm
              ">

                Most Common Attack

              </p>



              <p className="
                text-xl
                font-bold
              ">


                {mostCommonAttack}


              </p>


            </div>





            <div>


              <p className="
                text-zinc-400
                text-sm
              ">

                Total Analyzed Events

              </p>



              <p className="
                text-xl
                font-bold
              ">


                {total}


              </p>


            </div>


          </div>



        </div>



      </section>





    </main>


  )

}







function MetricCard({
  title,
  value,
  icon
}:any){


  return (


    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      p-5
    ">


      <div className="
        flex
        justify-between
        items-center
        text-zinc-400
        mb-4
      ">


        {title}


        {icon}


      </div>




      <p className="
        text-3xl
        font-bold
      ">


        {value}


      </p>



    </div>


  )

}





function ReportRow({
  label,
  value
}:any){


  return (


    <div className="
      flex
      justify-between
      bg-zinc-950
      rounded-xl
      p-3
    ">


      <span className="text-zinc-400">

        {label}

      </span>


      <span className="font-bold">

        {value}

      </span>


    </div>


  )

}



export default Reports