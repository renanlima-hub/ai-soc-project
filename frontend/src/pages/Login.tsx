import {
  useState
} from "react"

import {
  useNavigate
} from "react-router-dom"

import {
  ShieldCheck,
  Activity
} from "lucide-react"



function Login(){


  const navigate = useNavigate()


  const [email,setEmail] = useState("")

  const [password,setPassword] = useState("")





  function handleLogin(){


    navigate("/dashboard")


  }







  return (


    <div className="
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
      p-8
    ">


      <div className="
        w-full
        max-w-md
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-8
      ">



        <div className="
          flex
          flex-col
          items-center
          mb-8
        ">


          <div className="
            bg-blue-600
            rounded-xl
            p-3
            mb-4
          ">


            <Activity
              size={32}
              className="text-white"
            />


          </div>



          <h1 className="
            text-3xl
            font-bold
            text-white
          ">

            AI SOC

          </h1>



          <p className="
            text-zinc-400
            mt-2
            text-center
          ">

            Intelligent Security Operations Center

          </p>


        </div>







        <div className="
          space-y-5
        ">



          <div>


            <label className="
              text-zinc-400
              text-sm
            ">

              Email

            </label>



            <input

              type="email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              placeholder="analyst@aisoc.com"

              className="
                mt-2
                w-full
                bg-black
                border
                border-zinc-700
                rounded-xl
                p-3
                text-white
                outline-none
                focus:border-blue-500
              "

            />


          </div>






          <div>


            <label className="
              text-zinc-400
              text-sm
            ">

              Password

            </label>



            <input

              type="password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              placeholder="••••••••"

              className="
                mt-2
                w-full
                bg-black
                border
                border-zinc-700
                rounded-xl
                p-3
                text-white
                outline-none
                focus:border-blue-500
              "

            />


          </div>







          <button

            onClick={handleLogin}

            className="
              w-full
              mt-4
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              rounded-xl
              py-3
              transition
            "

          >

            Entrar no SOC

          </button>



        </div>








        <div className="
          mt-8
          bg-zinc-950
          rounded-xl
          p-4
          flex
          items-center
          gap-3
        ">



          <ShieldCheck
            className="text-green-400"
          />



          <div>


            <p className="
              text-green-400
              text-sm
              font-medium
            ">

              Secure Environment

            </p>



            <p className="
              text-zinc-500
              text-xs
            ">

              AI Threat Engine Online

            </p>


          </div>



        </div>



      </div>



    </div>


  )

}



export default Login