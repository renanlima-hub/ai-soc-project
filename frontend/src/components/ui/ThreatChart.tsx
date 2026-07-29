   function ThreatChart() {


  const values = [
    40,
    70,
    55,
    90,
    60,
    80,
    45
  ]



  return (

    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      p-6
    ">


      <h2 className="
        text-white
        font-semibold
        text-lg
      ">
        Threat Activity
      </h2>



      <div className="
        mt-6
        flex
        items-end
        gap-4
        h-40
      ">


        {values.map((value,index)=>(


          <div
            key={index}
            className="
              flex-1
              bg-blue-500
              rounded-t-lg
            "
            style={{
              height:`${value}%`
            }}
          />


        ))}


      </div>


    </div>

  )

}


export default ThreatChart