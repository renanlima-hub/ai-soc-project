function Incidents() {

  return (

    <div className="
      p-8
      bg-black
      min-h-screen
    ">

      <h1 className="
        text-3xl
        font-bold
        text-white
      ">
        Incidents
      </h1>


      <p className="
        text-zinc-400
        mt-2
      ">
        Central de investigação e resposta a incidentes.
      </p>


      <div className="
        mt-8
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-6
      ">

        <p className="
          text-zinc-400
        ">
          Nenhum incidente carregado da API ainda.
        </p>


      </div>


    </div>

  )

}

export default Incidents