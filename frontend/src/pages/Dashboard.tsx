import StatCard from "../components/StatCard"


function Dashboard() {

  return (

    <div className="
      p-8
      w-full
      bg-black
      min-h-screen
    ">

      <div className="mb-8">

        <h1 className="
          text-3xl
          font-bold
          text-white
        ">
          Overview
        </h1>


        <p className="
          text-zinc-400
          mt-2
        ">
          Monitoramento inteligente de segurança com IA
        </p>

      </div>


      <div className="
        grid
        grid-cols-3
        gap-6
      ">


        <StatCard
          title="Incidentes detectados"
          value="245"
          description="+12% hoje"
        />


        <StatCard
          title="Ataques bloqueados"
          value="542"
          description="Últimas 24 horas"
        />


        <StatCard
          title="Clientes monitorados"
          value="18"
          description="Ambientes ativos"
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
          text-xl
          font-semibold
          text-white
        ">
          Threat Intelligence
        </h2>


        <p className="
          text-zinc-400
          mt-2
        ">
          Análise de ameaças em tempo real através de inteligência artificial.
        </p>


        <div className="
          mt-6
          flex
          justify-between
          items-center
          bg-zinc-950
          rounded-xl
          p-4
        ">

          <div>
            <p className="text-zinc-400 text-sm">
              AI Security Score
            </p>

            <p className="
              text-4xl
              font-bold
              text-blue-400
              mt-1
            ">
              94%
            </p>
          </div>


          <div className="
            text-right
          ">

            <p className="
              text-zinc-400
              text-sm
            ">
              Status
            </p>


            <p className="
              text-green-400
              font-semibold
              mt-1
            ">
              Protected
            </p>

          </div>

        </div>

      </div>


    </div>

  )
}


export default Dashboard