import {
  useState
} from "react"


import {
  ShieldAlert,
  Activity,
  Crosshair,
  CheckCircle,
  Search,
  Network,
  Brain
} from "lucide-react"


import {
  useNavigate
} from "react-router-dom"


import api from "../services/api"







interface AnalysisResult {


  message:string


  incident:{


    id:number

    attack_type:string

    severity:string

    risk_score:number

    priority:string

    status:string


    confidence:number

    evidence:string

    source_ip:string



    mitre:{


      id:string

      name:string

    }


  }


}








function Analyze(){


  const navigate = useNavigate()



  const [log,setLog] = useState("")


  const [result,setResult] = useState<AnalysisResult | null>(null)


  const [loading,setLoading] = useState(false)


  const [error,setError] = useState<string | null>(null)






  const examples = [


    {

      name:"Brute Force",

      value:
      "Multiple failed login attempts detected from IP 192.168.1.50 targeting administrator account"

    },



    {

      name:"SQL Injection",

      value:
      "SQL Injection attempt detected using UNION SELECT payload from IP 10.0.0.25"

    },



    {

      name:"Malware",

      value:
      "Ransomware malware detected executing suspicious file on endpoint"

    },



    {

      name:"Port Scan",

      value:
      "Nmap network scanning detected from external IP 172.16.0.20"

    }


  ]









  async function analyzeLog(){


    if(!log.trim()){

      return

    }



    try{


      setLoading(true)

      setError(null)



      const response = await api.post(

        "/analyze",

        {

          log

        }

      )



      setResult(

        response

      )


    }


    catch(error){


      console.error(

        "Erro analisando log:",

        error

      )


      setError(

        "Não foi possível analisar o log."

      )


    }


    finally{


      setLoading(false)


    }


  }









  return (


    <div className="
      min-h-screen
      bg-black
      p-8
    ">



      <div className="
        mb-8
      ">


        <h1 className="
          text-3xl
          font-bold
          text-white
        ">

          Threat Analyzer

        </h1>



        <p className="
          text-zinc-400
          mt-2
        ">

          Analise eventos de segurança utilizando o AI Threat Engine.

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



        <h2 className="
          text-white
          font-bold
          text-xl
          mb-4
        ">

          Security Log

        </h2>





        <div className="
          flex
          flex-wrap
          gap-3
          mb-5
        ">


          {

            examples.map((example)=>(


              <button

                key={example.name}

                onClick={()=>setLog(example.value)}

                className="
                  bg-zinc-800
                  hover:bg-purple-600
                  text-zinc-200
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  transition
                "

              >

                {example.name}

              </button>


            ))

          }


        </div>







        <textarea


          value={log}


          onChange={(e)=>setLog(e.target.value)}


          placeholder="Cole o evento de segurança aqui..."


          className="
            w-full
            h-40
            bg-black
            border
            border-zinc-700
            rounded-xl
            p-4
            text-white
            outline-none
            resize-none
          "


        />






        <button


          onClick={analyzeLog}


          disabled={loading}


          className="
            mt-5
            bg-purple-600
            hover:bg-purple-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            transition
          "


        >


          {

            loading

            ?

            "Analyzing..."

            :

            "Analyze Threat"

          }



        </button>





        {

          error && (


            <p className="
              mt-4
              text-red-400
            ">

              {error}

            </p>


          )


        }



      </div>













      {

        result && (


          <div className="
            space-y-6
          ">



            <div className="
              bg-red-500/10
              border
              border-red-500/30
              rounded-2xl
              p-6
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

                  Threat Detected

                </h2>


              </div>



              <p className="
                text-red-300
                mt-3
              ">

                {result.incident.attack_type}

              </p>


            </div>









            <div className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            ">



              <ResultCard

                title="Severity"

                value={result.incident.severity}

                icon={<Activity />}

              />



              <ResultCard

                title="Risk Score"

                value={`${result.incident.risk_score}/100`}

                icon={<Crosshair />}

              />



              <ResultCard

                title="Confidence"

                value={`${result.incident.confidence ?? 0}%`}

                icon={<Brain />}

              />



            </div>









            <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            ">


              <ResultCard

                title="MITRE ATT&CK"

                value={
                  `${result.incident.mitre.id} - ${result.incident.mitre.name}`
                }

                icon={<CheckCircle />}

              />



              <ResultCard

                title="Source IP"

                value={
                  result.incident.source_ip || "Unknown"
                }

                icon={<Network />}

              />


            </div>









            <div className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              p-6
            ">



              <h2 className="
                text-white
                text-xl
                font-bold
                mb-4
              ">

                Evidence Detected

              </h2>




              <p className="
                text-zinc-300
              ">

                {result.incident.evidence || "Nenhuma evidência registrada."}

              </p>


            </div>









            <div className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              p-6
            ">



              <h2 className="
                text-white
                text-xl
                font-bold
                mb-4
              ">

                Incident Created

              </h2>




              <p className="
                text-zinc-300
              ">

                Incident ID:

                {" "}

                #{result.incident.id}

              </p>



              <p className="
                text-zinc-300
                mt-2
              ">

                Status:

                {" "}

                {result.incident.status}

              </p>



              <button

                onClick={()=>navigate(`/incidents/${result.incident.id}`)}

                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  bg-purple-600
                  hover:bg-purple-700
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  transition
                "

              >

                <Search size={18}/>

                Investigate Incident

              </button>



            </div>





          </div>


        )


      }





    </div>


  )


}









function ResultCard({

  title,

  value,

  icon

}:{

  title:string

  value:string

  icon:React.ReactNode

}){


  return (


    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      p-6
    ">


      <div className="
        text-purple-400
        mb-4
      ">

        {icon}

      </div>




      <p className="
        text-zinc-400
      ">

        {title}

      </p>



      <p className="
        text-white
        font-bold
        text-xl
        mt-2
      ">

        {value}

      </p>


    </div>


  )

}





export default Analyze