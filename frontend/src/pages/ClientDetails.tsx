import {
  useLocation,
  useNavigate
} from "react-router-dom"


import {
  ArrowLeft,
  Building2,
  Server,
  ShieldAlert,
  Activity,
  Users
} from "lucide-react"





function ClientDetails(){


  const location = useLocation()

  const navigate = useNavigate()



  const client = location.state






  if(!client){


    return (

      <div className="
        p-8
        bg-black
        min-h-screen
        text-white
      ">


        Cliente não encontrado.


      </div>

    )

  }







  const descriptions:any = {



    "TechCorp Solutions":

      "Empresa de tecnologia especializada em desenvolvimento de sistemas corporativos, infraestrutura digital e soluções baseadas em nuvem para organizações de grande porte.",




    "NovaLabs":

      "Centro de pesquisa e inovação tecnológica responsável por ambientes experimentais, desenvolvimento de novas soluções digitais e análise avançada de dados.",




    "CloudOne":

      "Empresa provedora de serviços em nuvem, oferecendo infraestrutura escalável, armazenamento seguro e ambientes corporativos distribuídos.",




    "DataSecure":

      "Instituição financeira que opera com dados sensíveis e infraestrutura crítica, exigindo monitoramento constante contra ameaças digitais."



  }








  return (



    <div className="
      p-8
      bg-black
      min-h-screen
    ">





      <button

        onClick={() =>
          navigate("/clients")
        }

        className="
          flex
          items-center
          gap-2
          text-zinc-400
          hover:text-white
          mb-8
        "

      >


        <ArrowLeft size={18}/>


        Voltar para clientes


      </button>









      <div className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-8
      ">




        <div className="
          flex
          items-center
          gap-4
        ">


          <div className="
            w-16
            h-16
            rounded-xl
            bg-blue-500/20
            flex
            items-center
            justify-center
          ">


            <Building2

              className="text-blue-400"

              size={35}

            />


          </div>





          <div>


            <h1 className="
              text-3xl
              font-bold
              text-white
            ">


              {client.name}


            </h1>




            <p className="
              text-zinc-400
              mt-1
            ">


              {client.sector}


            </p>


          </div>



        </div>








        <p className="
          text-zinc-300
          mt-8
          leading-relaxed
        ">


          {descriptions[client.name] ||

            "Cliente protegido pelo SOC com monitoramento contínuo de segurança."
          }



        </p>




      </div>









      <div className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-6
        mt-8
      ">





        <InfoCard

          icon={<Server/>}

          title="Assets Protegidos"

          value={client.assets}

        />





        <InfoCard

          icon={<ShieldAlert/>}

          title="Incidentes"

          value={client.incidents}

        />






        <InfoCard

          icon={<Activity/>}

          title="Nível de Risco"

          value={client.risk}

        />






        <InfoCard

          icon={<Users/>}

          title="Status"

          value={client.status}

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
          text-white
          text-xl
          font-semibold
        ">


          Security Overview


        </h2>





        <p className="
          text-zinc-300
          mt-4
          leading-relaxed
        ">


          Este cliente possui monitoramento ativo pelo SOC.
          O ambiente é analisado continuamente para identificação
          de ameaças, comportamentos suspeitos e possíveis riscos
          de segurança.


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


          Protection Status


        </h2>





        <div className="
          mt-5
          space-y-3
          text-zinc-300
        ">


          <p>
            ✓ Monitoramento de ameaças ativo
          </p>


          <p>
            ✓ Análise de incidentes habilitada
          </p>


          <p>
            ✓ Relatórios de segurança disponíveis
          </p>


        </div>



      </div>






    </div>


  )

}









function InfoCard({

  icon,

  title,

  value


}:{

  icon:React.ReactNode

  title:string

  value:string | number

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
        text-blue-400
      ">


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




export default ClientDetails