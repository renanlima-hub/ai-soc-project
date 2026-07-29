import {
  Bot,
  Bell,
  Database,
  ShieldCheck,
  Zap,
  Activity,
  Network,
  Cpu,
  Brain,
  Lock,
  FileText
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
          grid-cols-1
          md:grid-cols-4
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


          <StatusCard
            title="API Service"
            status="Running"
            icon={<Activity />}
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
            AI Threat Engine
          </h2>


        </div>





        <div className="space-y-4">


          <InfoRow
            title="AI Model"
            value="Security AI Engine v1.0"
          />


          <InfoRow
            title="Threat Classification"
            value="Automatic"
          />


          <InfoRow
            title="MITRE ATT&CK Mapping"
            value="Enabled"
          />


          <InfoRow
            title="Confidence Threshold"
            value="75%"
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


          <Zap
            className="text-yellow-400"
          />


          <h2 className="
            text-white
            text-xl
            font-semibold
          ">
            SOC Automation
          </h2>


        </div>





        <div className="space-y-4">


          <ConfigItem
            title="Auto Block Threats"
            description="Bloqueia automaticamente ameaças críticas identificadas."
          />


          <ConfigItem
            title="Automatic Incident Creation"
            description="Cria incidentes automaticamente após análise da IA."
          />


          <ConfigItem
            title="Report Generation"
            description="Geração automática de relatórios de segurança."
          />


          <ConfigItem
            title="Threat Intelligence Sync"
            description="Atualização automática de inteligência de ameaças."
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





        <div className="space-y-4">


          <ConfigItem
            title="Critical Alerts"
            description="Receber alertas de incidentes críticos."
          />


          <ConfigItem
            title="High Severity Alerts"
            description="Notificar ameaças de alto impacto."
          />


          <ConfigItem
            title="Security Reports"
            description="Enviar relatórios automatizados."
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
            className="text-green-400"
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
          md:grid-cols-3
          gap-6
        ">


          <StatusCard
            title="SIEM Integration"
            status="Connected"
            icon={<Lock />}
          />


          <StatusCard
            title="Threat Intelligence"
            status="Active"
            icon={<Network />}
          />


          <StatusCard
            title="Log Collector"
            status="Running"
            icon={<Cpu />}
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
        ">


          <FileText
            className="text-purple-400"
          />


          <h2 className="
            text-white
            text-xl
            font-semibold
          ">
            Platform Information
          </h2>


        </div>





        <div className="
          mt-6
          space-y-3
          text-zinc-300
        ">


          <p>
            AI SOC Platform
          </p>


          <p className="text-zinc-500">
            Version: 1.0.0 Beta
          </p>


          <p className="text-zinc-500">
            Environment: Production
          </p>


          <p className="text-zinc-500">
            AI Engine: Operational
          </p>


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

  )

}








function InfoRow({

  title,

  value

}:{

  title:string

  value:string

}){


  return (

    <div className="
      flex
      justify-between
      bg-zinc-950
      rounded-xl
      p-4
    ">


      <span className="
        text-zinc-400
      ">
        {title}
      </span>


      <span className="
        text-white
        font-medium
      ">
        {value}
      </span>


    </div>

  )

}





export default Settings