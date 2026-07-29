import {
  Brain,
  AlertCircle,
  ShieldCheck,
  Timer
} from "lucide-react"



function AITriageCard() {


  return (

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
          size={26}
        />

        <h2 className="
          text-white
          font-semibold
          text-lg
        ">
          AI Threat Triage
        </h2>

      </div>





      <div className="
        mt-6
        space-y-5
      ">


        <div className="
          flex
          justify-between
          items-center
        ">

          <div className="flex items-center gap-3">

            <AlertCircle
              className="text-red-400"
            />

            <span className="text-zinc-400">
              Alerts Analyzed
            </span>

          </div>


          <span className="
            text-white
            font-bold
          ">
            12,482
          </span>


        </div>





        <div className="
          flex
          justify-between
          items-center
        ">

          <div className="flex items-center gap-3">

            <ShieldCheck
              className="text-green-400"
            />

            <span className="text-zinc-400">
              False Positives Removed
            </span>

          </div>


          <span className="
            text-white
            font-bold
          ">
            8,940
          </span>


        </div>






        <div className="
          flex
          justify-between
          items-center
        ">

          <div className="flex items-center gap-3">

            <Timer
              className="text-blue-400"
            />

            <span className="text-zinc-400">
              Analysis Time
            </span>

          </div>


          <span className="
            text-green-400
            font-bold
          ">
            0.8s
          </span>


        </div>


      </div>


    </div>

  )

}



export default AITriageCard