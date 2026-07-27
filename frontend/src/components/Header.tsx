import {
  Bell,
  Search
} from "lucide-react"


function Header() {

  return (

    <header className="
      h-20
      border-b
      border-zinc-800
      bg-black
      flex
      items-center
      justify-between
      px-8
    ">


      <div className="
        flex
        items-center
        gap-4
      ">

        <div className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-xl
          px-4
          py-2
          flex
          items-center
          gap-2
        ">

          <Search 
            size={18}
            className="text-zinc-400"
          />

          <span className="
            text-zinc-500
            text-sm
          ">
            Buscar ameaças...
          </span>


        </div>


      </div>



      <div className="
        flex
        items-center
        gap-5
      ">


        <button className="
          relative
          text-zinc-400
          hover:text-white
        ">

          <Bell size={22}/>

          <span className="
            absolute
            -top-1
            -right-1
            w-3
            h-3
            rounded-full
            bg-red-500
          " />

        </button>



        <div className="
          flex
          items-center
          gap-3
        ">


          <div className="
            w-10
            h-10
            rounded-full
            bg-blue-600
            flex
            items-center
            justify-center
            text-white
            font-bold
          ">
            RL
          </div>


          <div>

            <p className="
              text-white
              text-sm
              font-medium
            ">
              Renan Lima
            </p>


            <p className="
              text-zinc-500
              text-xs
            ">
              Security Analyst
            </p>

          </div>


        </div>


      </div>


    </header>

  )

}


export default Header