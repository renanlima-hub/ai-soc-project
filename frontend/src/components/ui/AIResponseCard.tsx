import {
  Zap,
  Server,
  ShieldCheck
} from "lucide-react"



function AIResponseCard() {


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


        <Zap
          className="text-yellow-400"
          size={26}
        />


        <h2 className="
          text-white
          font-semibold
          text-lg
        ">
          Automated Response
        </h2>


      </div>






      <div className="
        mt-6
      ">


        <p className="
          text-zinc-400
          text-sm
        ">
          Last AI Action
        </p>


        <h3 className="
          text-white
          text-xl
          font-bold
          mt-2
        ">
          Malware Isolation
        </h3>



        <div className="
          mt-5
          flex
          items-center
          gap-3
        ">


          <Server
            className="text-red-400"
          />


          <span className="text-zinc-300">
            Endpoint-04 isolated
          </span>


        </div>





        <div className="
          mt-4
          flex
          items-center
          gap-3
        ">


          <ShieldCheck
            className="text-green-400"
          />


          <span className="text-green-400">
            Executed in 3.2 seconds
          </span>


        </div>


      </div>


    </div>

  )

}


export default AIResponseCard