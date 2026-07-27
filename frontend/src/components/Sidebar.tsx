import {
  LayoutDashboard,
  ShieldAlert,
  FileText,
  Users,
  Settings,
  Activity
} from "lucide-react"

import { Link, useLocation } from "react-router-dom"


function Sidebar() {

  const location = useLocation()


  const menu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard"
    },
    {
      name: "Incidentes",
      icon: ShieldAlert,
      path: "/incidents"
    },
    {
      name: "Relatórios",
      icon: FileText,
      path: "/reports"
    },
    {
      name: "Clientes",
      icon: Users,
      path: "/clients"
    },
    {
      name: "Configurações",
      icon: Settings,
      path: "/settings"
    }
  ]


  return (

    <aside className="
      w-64
      min-h-screen
      bg-zinc-950
      border-r
      border-zinc-800
      p-6
      flex
      flex-col
    ">


      <div className="
        flex
        items-center
        gap-3
        mb-10
      ">

        <div className="
          bg-blue-600
          rounded-xl
          p-2
        ">

          <Activity
            size={22}
            className="text-white"
          />

        </div>


        <h1 className="
          text-2xl
          font-bold
          text-white
        ">
          AI SOC
        </h1>


      </div>



      <nav className="space-y-2">


        {menu.map((item) => {

          const Icon = item.icon

          const active = location.pathname === item.path


          return (

            <Link
              key={item.name}
              to={item.path}
              className={`
                flex
                items-center
                gap-3
                p-3
                rounded-xl
                transition
                ${
                  active
                  ? "bg-blue-600 text-white"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-blue-400"
                }
              `}
            >

              <Icon size={20}/>

              <span>
                {item.name}
              </span>


            </Link>

          )

        })}


      </nav>




      <div className="
        mt-auto
        bg-zinc-900
        border
        border-zinc-800
        rounded-xl
        p-4
      ">


        <p className="
          text-xs
          text-zinc-500
        ">
          AI Engine
        </p>


        <div className="
          flex
          items-center
          gap-2
          mt-2
        ">

          <div className="
            w-2
            h-2
            rounded-full
            bg-green-500
          "/>


          <span className="
            text-sm
            text-green-400
            font-medium
          ">
            Online
          </span>


        </div>


      </div>


    </aside>

  )

}


export default Sidebar