import NotificationDropdown from "./NotificationDropdown"



function Header() {


  return (

    <header className="
      h-20
      border-b
      border-zinc-800
      bg-black
      flex
      items-center
      justify-end
      px-8
    ">



      <div className="
        flex
        items-center
        gap-5
      ">


        <div className="
          flex
          items-center
          gap-3
          bg-zinc-900
          border
          border-zinc-800
          rounded-xl
          px-4
          py-2
        ">


          <div className="
            w-2
            h-2
            rounded-full
            bg-green-500
          "/>



          <span className="
            text-green-400
            text-sm
            font-medium
          ">

            AI Engine Online

          </span>


        </div>




        <NotificationDropdown />





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