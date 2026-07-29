import {
  Bell,
  ShieldAlert
} from "lucide-react"

import {
  useNavigate
} from "react-router-dom"

import {
  useEffect,
  useState
} from "react"



function NotificationDropdown(){


  const [open,setOpen] = useState(false)

  const [notifications,setNotifications] = useState<any[]>([])


  const navigate = useNavigate()



  useEffect(()=>{


    async function loadNotifications(){


      try {


        const response = await fetch(
          "http://localhost:8000/api/incidents"
        )


        const data = await response.json()



        const activeIncidents = data.filter(
          (incident:any)=>

            incident.status?.toLowerCase() !== "closed" &&
            incident.status?.toLowerCase() !== "resolved"

        )



        setNotifications(activeIncidents)



      } catch(error){


        console.error(
          "Erro ao carregar incidentes:",
          error
        )


      }


    }



    loadNotifications()



    const interval = setInterval(
      loadNotifications,
      5000
    )



    return ()=>clearInterval(interval)



  },[])






  return (


    <div className="
      relative
    ">



      <button


        onClick={()=>setOpen(!open)}


        className="
          relative
          text-zinc-400
          hover:text-white
          transition
        "


      >


        <Bell size={22}/>



        {
          notifications.length > 0 && (


            <>


              <span className="
                absolute
                -top-1
                -right-1
                w-3
                h-3
                rounded-full
                bg-red-500
              "/>



              <span className="
                absolute
                -top-3
                -right-3
                bg-red-500
                text-white
                text-[10px]
                rounded-full
                px-1.5
              ">

                {notifications.length}

              </span>


            </>


          )
        }



      </button>







      {
        open && (


          <div className="
            absolute
            right-0
            mt-4
            w-80
            bg-zinc-900
            border
            border-zinc-800
            rounded-xl
            shadow-xl
            p-4
            z-50
          ">



            <h3 className="
              text-white
              font-semibold
              mb-4
            ">


              Active Incidents


            </h3>






            {
              notifications.length === 0 ? (


                <p className="
                  text-zinc-500
                  text-sm
                ">


                  No active incidents


                </p>



              ) : (



                notifications.map(
                  (notification)=>(



                    <button


                      key={notification.id}



                      onClick={()=>{


                        navigate(
                          `/incidents/${notification.id}`
                        )


                        setOpen(false)


                      }}



                      className="
                        w-full
                        text-left
                        bg-zinc-950
                        hover:bg-zinc-800
                        rounded-xl
                        p-4
                        mb-2
                        transition
                      "



                    >



                      <div className="
                        flex
                        gap-3
                        items-start
                      ">



                        <ShieldAlert

                          size={20}

                          className="
                            text-red-400
                          "

                        />





                        <div>



                          <p className="
                            text-white
                            text-sm
                            font-medium
                          ">


                            {
                              notification.attack_type ??
                              "Unknown Attack"
                            }


                          </p>





                          <p className="
                            text-zinc-400
                            text-xs
                            mt-1
                          ">


                            IP:

                            {" "}

                            {
                              notification.source_ip ??
                              "Unknown"
                            }


                          </p>





                          <div className="
                            flex
                            gap-2
                            mt-2
                          ">



                            <span className="
                              text-red-400
                              text-xs
                            ">


                              {
                                notification.severity ??
                                "Unknown"
                              }


                            </span>




                            <span className="
                              text-zinc-500
                              text-xs
                            ">


                              {
                                notification.status ??
                                "Open"
                              }


                            </span>



                          </div>





                        </div>




                      </div>




                    </button>



                  )

                )


              )

            }





          </div>


        )


      }



    </div>


  )


}


export default NotificationDropdown