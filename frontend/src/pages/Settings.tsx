import {
  Bot,
  Bell,
  Database,
  ShieldCheck,
  Zap
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
          Gerencie configurações e integrações do AI SOC.
        </p>


      </div>





      {/* System Status */}


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
          System Status
        </h2>



        <div className="
          grid
          grid-cols-3
          gap-6
        ">


          <StatusCard
            title="AI Engine"
            status="Online"
            icon={<Bot />}
          />


          <StatusCard
            title="Database"
            status="Connected"
            icon={<Database />}
          />


          <StatusCard
            title="Security Layer"
            status="Active"
            icon={<ShieldCheck />}
          />


        </div>


      </div>






      {/* AI Configuration */}


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

          <Zap
            className="text-purple-400"
          />


          <h2 className="
            text-white
            text-xl
            font-semibold
          ">
            AI Configuration
          </h2>


        </div>



        <div className="
          space-y-4
        ">


          <ConfigItem
            title="Threat Detection"
            description="IA analisando eventos de segurança automaticamente."
          />


          <ConfigItem
            title="Automatic Response"
            description="Bloqueio automático de ameaças críticas."
          />


          <ConfigItem
            title="Behavior Analysis"
            description="Monitoramento de padrões suspeitos."
          />


        </div>


      </div>







      {/* Notifications */}


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

          <Bell
            className="text-blue-400"
          />


          <h2 className="
            text-white
            text-xl
            font-semibold
          ">
            Notifications
          </h2>


        </div>



        <div className="
          flex
          justify-between
          items-center
          bg-zinc-950
          rounded-xl
          p-4
        ">


          <div>

            <p className="
              text-white
            ">
              Critical Alerts
            </p>


            <p className="
              text-zinc-500
              text-sm
            ">
              Receber notificações de incidentes críticos.
            </p>


          </div>



          <div className="
            w-12
            h-6
            bg-blue-600
            rounded-full
            flex
            items-center
            justify-end
            px-1
          ">


            <div className="
              w-4
              h-4
              bg-white
              rounded-full
            "/>


          </div>


        </div>


      </div>



    </div>

  )

}





function StatusCard({
  title,
  status,
  icon
}:{
  title:string
  status:string
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
        text-zinc-400
        mt-4
      ">
        {title}
      </p>


      <p className="
        text-green-400
        font-semibold
        mt-1
      ">
        {status}
      </p>


    </div>

  )

}





function ConfigItem({
  title,
  description
}:{
  title:string
  description:string
}){


  return (

    <div className="
      flex
      justify-between
      items-center
      bg-zinc-950
      rounded-xl
      p-4
    ">


      <div>

        <p className="
          text-white
        ">
          {title}
        </p>


        <p className="
          text-zinc-500
          text-sm
        ">
          {description}
        </p>


      </div>



      <div className="
        w-12
        h-6
        rounded-full
        bg-blue-600
        flex
        items-center
        justify-end
        px-1
      ">


        <div className="
          w-4
          h-4
          rounded-full
          bg-white
        "/>


      </div>


    </div>

  )

}



export default Settings