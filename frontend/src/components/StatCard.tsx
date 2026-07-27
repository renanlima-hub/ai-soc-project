interface Props {
  title:string
  value:string
  description:string
}

function StatCard({
  title,
  value,
  description
}:Props){

  return (
    <div className="
      bg-white
      rounded-2xl
      p-6
      shadow-sm
      border
      border-slate-200
    ">

      <p className="
        text-sm
        text-slate-500
      ">
        {title}
      </p>


      <h2 className="
        text-3xl
        font-bold
        text-slate-900
        mt-2
      ">
        {value}
      </h2>


      <p className="
        text-sm
        text-green-600
        mt-2
      ">
        {description}
      </p>

    </div>
  )
}

export default StatCard