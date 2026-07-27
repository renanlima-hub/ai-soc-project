interface MetricCardProps {
  title: string
  value: string
  icon: React.ReactNode
  color?: string
}


function MetricCard({
  title,
  value,
  icon,
  color = "text-blue-400"
}: MetricCardProps) {


  return (

    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      p-6
    ">


      <div className={color}>
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
        text-3xl
        font-bold
        mt-2
      ">
        {value}
      </h2>


    </div>

  )

}


export default MetricCard