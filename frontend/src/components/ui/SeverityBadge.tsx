interface Props {
  severity:string
}


function SeverityBadge({
  severity
}:Props){


const colors = {

Critical:
"bg-red-500/20 text-red-400",

High:
"bg-orange-500/20 text-orange-400",

Medium:
"bg-yellow-500/20 text-yellow-400",

Low:
"bg-blue-500/20 text-blue-400"

}



return (

<span
className={`
px-3
py-1
rounded-full
text-xs
font-medium

${colors[severity as keyof typeof colors]}
`}
>

{severity}

</span>

)

}


export default SeverityBadge