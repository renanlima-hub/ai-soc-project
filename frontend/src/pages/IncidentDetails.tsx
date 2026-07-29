import {
  ShieldAlert,
  ShieldCheck,
  Brain,
  Activity,
  Target,
  Clock
} from "lucide-react"

import {
  useEffect,
  useState
} from "react"

import {
  useParams
} from "react-router-dom"

import apiRequest from "../services/api"





interface Incident {


  id:number

  attack_type:string

  severity:string

  status:string

  risk_score:number

  confidence:number

  evidence:string

  source_ip:string

  mitre_id:string

  mitre_name:string

  description:string

  recommendation:string


}







function IncidentDetails(){


  const {
    id
  } = useParams()



  const [
    incident,
    setIncident
  ] = useState<Incident | null>(null)



  const [
    loading,
    setLoading
  ] = useState(true)





  useEffect(()=>{


    apiRequest(`/incidents/${id}`)

      .then(data=>{

        setIncident(data)

      })

      .catch(error=>{

        console.error(
          "Erro carregando incidente:",
          error
        )

      })

      .finally(()=>{

        setLoading(false)

      })


  },[id])









  if(loading){


    return (

      <div className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
      ">

        Carregando investigação...

      </div>

    )

  }







  if(!incident){


    return (

      <div className="
        p-8
        bg-black
        min-h-screen
        text-white
      ">

        Incident not found

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

          Incident Investigation

        </h1>



        <p className="
          text-zinc-400
          mt-2
        ">

          Análise detalhada realizada pelo AI Threat Engine.

        </p>


      </div>









      <div className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-6
        mb-8
      ">



        <div className="
          flex
          items-center
          gap-3
        ">


          <ShieldAlert
            className="text-red-400"
          />



          <h2 className="
            text-2xl
            font-bold
            text-white
          ">

            {incident.attack_type}

          </h2>



        </div>


      </div>









      <div className="
        grid
        grid-cols-1
        md:grid-cols-5
        gap-6
      ">



        <InfoCard

          icon={<ShieldAlert />}

          title="Severity"

          value={incident.severity}

          color="text-red-400"

        />





        <InfoCard

          icon={<Activity />}

          title="AI Risk Score"

          value={`${incident.risk_score}/100`}

          color="text-purple-400"

        />







        <InfoCard

          icon={<Clock />}

          title="Status"

          value={incident.status}

          color="text-yellow-400"

        />








        <InfoCard

          icon={<ShieldCheck />}

          title="Response"

          value="Analyzed"

          color="text-green-400"

        />







        <InfoCard

          icon={<Brain />}

          title="AI Confidence"

          value={`${incident.confidence ?? 0}%`}

          color="text-blue-400"

        />



      </div>









      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
        mt-8
      ">







        <div className="
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
          ">


            <Brain
              className="text-purple-400"
            />



            <h2 className="
              text-xl
              font-semibold
              text-white
            ">

              AI Analysis

            </h2>


          </div>





          <p className="
            text-zinc-300
            mt-6
            leading-relaxed
          ">

            {incident.description}

          </p>




        </div>









        <div className="
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
          ">


            <Target
              className="text-blue-400"
            />



            <h2 className="
              text-xl
              font-semibold
              text-white
            ">

              MITRE ATT&CK

            </h2>


          </div>







          <p className="
            text-zinc-300
            mt-6
          ">

            {incident.mitre_id}

            {" - "}

            {incident.mitre_name}

          </p>


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


        <h2 className="
          text-white
          text-xl
          font-semibold
        ">

          Evidence Detected

        </h2>





        <p className="
          text-zinc-300
          mt-4
        ">

          {incident.evidence || "Nenhuma evidência registrada."}

        </p>




        <p className="
          text-zinc-500
          mt-4
        ">

          Source IP:

          {" "}

          {incident.source_ip || "Unknown"}

        </p>



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
        ">

          Automated Response

        </h2>







        <div className="
          mt-6
          space-y-3
          text-zinc-300
        ">


          <p>
            ✓ Evento classificado pela IA
          </p>



          <p>
            ✓ Técnica MITRE identificada
          </p>



          <p>
            ✓ Recomendação gerada automaticamente:
          </p>



          <p className="
            text-purple-400
          ">

            {incident.recommendation}

          </p>


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



        <h2 className="
          text-white
          text-xl
          font-semibold
        ">

          Incident Timeline

        </h2>







        <div className="
          mt-6
          space-y-4
          text-zinc-300
        ">



          <p>
            ✓ Log recebido pelo SOC
          </p>



          <p>
            ✓ IA analisou comportamento suspeito
          </p>



          <p>
            ✓ Classificação:
            {" "}
            {incident.severity}
          </p>



          <p>
            ✓ Status atual:
            {" "}
            {incident.status}
          </p>



        </div>


      </div>






    </div>

  )

}









function InfoCard({

  icon,

  title,

  value,

  color


}:{

  icon:React.ReactNode

  title:string

  value:string

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
        text-xl
        font-bold
        mt-2
      ">

        {value}

      </h2>


    </div>

  )

}






export default IncidentDetails