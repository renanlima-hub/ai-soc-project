import {
  useEffect,
  useState
} from "react"

import {
  useNavigate
} from "react-router-dom"

import MetricCard from "../components/ui/MetricCard"

import api from "../services/api"

import {
  Users,
  ShieldCheck,
  AlertTriangle,
  Server
} from "lucide-react"



interface Client {

  id:number

  name:string

  sector:string

  assets:number

  incidents:number

  risk:string

  status:string

}





function Clients() {


  const [clients,setClients] = useState<Client[]>([])

  const [loading,setLoading] = useState(true)


  const navigate = useNavigate()





  useEffect(()=>{


    async function loadClients(){


      try {


        const data = await api.get(
          "/clients"
        )


        setClients(data)



      } catch(error){


        console.error(
          "Erro ao carregar clientes:",
          error
        )


      } finally {


        setLoading(false)


      }


    }


    loadClients()


  },[])







  const totalClients = clients.length



  const protectedClients = clients.filter(

    client =>
      client.status === "Protected"

  ).length





  const riskAlerts = clients.filter(

    client =>
      client.risk !== "Low"

  ).length






  const totalAssets = clients.reduce(

    (total,client)=>

      total + client.assets,

    0

  )








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

          Client Management

        </h1>




        <p className="
          text-zinc-400
          mt-2
        ">

          Gerenciamento dos clientes protegidos pelo SOC.

        </p>


      </div>









      <div className="
        grid
        grid-cols-4
        gap-6
      ">


        <MetricCard

          title="Total Clients"

          value={totalClients}

          icon={<Users />}

          color="text-blue-400"

        />





        <MetricCard

          title="Protected"

          value={protectedClients}

          icon={<ShieldCheck />}

          color="text-green-400"

        />





        <MetricCard

          title="Risk Alerts"

          value={riskAlerts}

          icon={<AlertTriangle />}

          color="text-red-400"

        />





        <MetricCard

          title="Assets"

          value={totalAssets}

          icon={<Server />}

          color="text-purple-400"

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
          mb-6
        ">

          Protected Clients

        </h2>









        {

          loading ? (


            <p className="text-zinc-400">

              Carregando clientes...

            </p>



          ) : (




          <table className="
            w-full
            text-left
          ">



            <thead>


              <tr className="
                text-zinc-500
                text-sm
                border-b
                border-zinc-800
              ">



                <th className="pb-4">

                  Client

                </th>



                <th>

                  Sector

                </th>



                <th>

                  Assets

                </th>



                <th>

                  Incidents

                </th>



                <th>

                  Risk

                </th>



                <th>

                  Status

                </th>



              </tr>


            </thead>









            <tbody>



              {


                clients.map(client=>(



                  <tr


                    key={client.id}



                    onClick={()=>


                      navigate(

                        `/clients/${client.id}`,

                        {
                          state: client
                        }

                      )


                    }



                    className="

                      border-b

                      border-zinc-800

                      text-zinc-300

                      hover:bg-zinc-800/40

                      transition

                      cursor-pointer

                    "



                  >





                    <td className="
                      py-4
                      text-white
                      font-medium
                    ">


                      {client.name}


                    </td>





                    <td>


                      {client.sector}


                    </td>





                    <td>


                      {client.assets}


                    </td>





                    <td>


                      {client.incidents}


                    </td>





                    <td>



                      <span className={


                        client.risk === "High"

                        ?

                        "text-red-400"


                        :


                        client.risk === "Medium"

                        ?

                        "text-yellow-400"


                        :


                        "text-green-400"



                      }>



                        {client.risk}



                      </span>



                    </td>







                    <td>


                      {client.status}


                    </td>





                  </tr>



                ))

              }





            </tbody>





          </table>



          )

        }




      </div>




    </div>


  )

}



export default Clients