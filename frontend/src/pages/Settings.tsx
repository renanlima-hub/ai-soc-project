import {
  Bot,
  Database,
  ShieldCheck,
  Server,
  Brain,
  Network,
  Activity,
  Code,
  Cpu
} from "lucide-react"



function Settings() {


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
          Platform Settings
        </h1>



        <p className="
          text-zinc-400
          mt-2
        ">
          Informações e status dos componentes da plataforma AI SOC.
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
          font-semibold
          mb-6
        ">
          System Health
        </h2>




        <div className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-6
        ">



          <StatusCard

            title="AI Threat Engine"

            status="Online"

            description="Modelo de análise de ameaças ativo."

            icon={<Bot />}

          />



          <StatusCard

            title="Database"

            status="Connected"

            description="Banco de dados operacional."

            icon={<Database />}

          />



          <StatusCard

            title="Security Layer"

            status="Active"

            description="Proteção e análise funcionando."

            icon={<ShieldCheck />}

          />



          <StatusCard

            title="API Gateway"

            status="Running"

            description="FastAPI backend conectado."

            icon={<Server />}

          />



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


          <Brain
            className="text-purple-400"
          />


          <h2 className="
            text-white
            text-xl
            font-semibold
          ">
            AI Engine Configuration
          </h2>


        </div>





        <div className="
          space-y-4
        ">


          <InfoCard

            title="Threat Detection"

            description="Análise automática de eventos e classificação de ameaças."

            status="ACTIVE"

          />



          <InfoCard

            title="Risk Scoring"

            description="Cálculo automático de risco baseado em severidade."

            status="ACTIVE"

          />



          <InfoCard

            title="MITRE ATT&CK Mapping"

            description="Relacionamento automático entre ataques e técnicas MITRE."

            status="ACTIVE"

          />


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


          <Network
            className="text-blue-400"
          />


          <h2 className="
            text-white
            text-xl
            font-semibold
          ">
            Integrations
          </h2>


        </div>





        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
        ">


          <IntegrationCard

            icon={<Activity />}

            title="Threat Intelligence"

            status="READY"

          />



          <IntegrationCard

            icon={<Database />}

            title="Database Connection"

            status="CONNECTED"

          />



          <IntegrationCard

            icon={<Cpu />}

            title="AI Processing"

            status="ACTIVE"

          />



          <IntegrationCard

            icon={<Code />}

            title="SIEM Integration"

            status="COMING SOON"

          />


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
          mb-6
        ">
          Platform Information
        </h2>




        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          text-zinc-300
        ">


          <InfoLine

            label="Application"

            value="AI SOC Platform"

          />



          <InfoLine

            label="Version"

            value="1.0.0"

          />



          <InfoLine

            label="Environment"

            value="Development"

          />



          <InfoLine

            label="Framework"

            value="React + FastAPI"

          />



        </div>



      </div>





    </div>

  )

}








function StatusCard({

  title,

  status,

  description,

  icon


}:{

  title:string

  status:string

  description:string

  icon:React.ReactNode

}){


  return (

    <div className="
      bg-zinc-950
      rounded-xl
      p-5
    ">


      <div className="
        text-green-400
      ">
        {icon}
      </div>



      <p className="
        text-white
        font-semibold
        mt-4
      ">
        {title}
      </p>



      <p className="
        text-green-400
        mt-2
        font-medium
      ">
        {status}
      </p>



      <p className="
        text-zinc-500
        text-sm
        mt-2
      ">
        {description}
      </p>


    </div>

  )

}








function InfoCard({

  title,

  description,

  status


}:{

  title:string

  description:string

  status:string

}){


  return (

    <div className="
      bg-zinc-950
      rounded-xl
      p-4
      flex
      justify-between
      items-center
    ">


      <div>

        <p className="
          text-white
          font-medium
        ">
          {title}
        </p>


        <p className="
          text-zinc-500
          text-sm
          mt-1
        ">
          {description}
        </p>


      </div>




      <span className="
        text-green-400
        font-semibold
        text-sm
      ">
        {status}
      </span>


    </div>

  )

}









function IntegrationCard({

  icon,

  title,

  status


}:{

  icon:React.ReactNode

  title:string

  status:string

}){


  return (

    <div className="
      bg-zinc-950
      rounded-xl
      p-5
      flex
      items-center
      gap-4
    ">


      <div className="
        text-blue-400
      ">
        {icon}
      </div>



      <div>

        <p className="
          text-white
          font-medium
        ">
          {title}
        </p>


        <p className="
          text-zinc-500
          text-sm
        ">
          {status}
        </p>


      </div>


    </div>

  )

}







function InfoLine({

  label,

  value


}:{

  label:string

  value:string

}){


  return (

    <div className="
      bg-zinc-950
      rounded-xl
      p-4
    ">


      <p className="
        text-zinc-500
        text-sm
      ">
        {label}
      </p>


      <p className="
        text-white
        mt-1
        font-medium
      ">
        {value}
      </p>


    </div>

  )

}





export default Settings