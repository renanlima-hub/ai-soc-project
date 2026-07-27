interface Props {
 status:string
}


function StatusBadge({
 status
}:Props){


const colors = {

Protected:
"bg-green-500/20 text-green-400",

Completed:
"bg-green-500/20 text-green-400",

Blocked:
"bg-green-500/20 text-green-400",

Processing:
"bg-yellow-500/20 text-yellow-400",

Pending:
"bg-zinc-700 text-zinc-300",

Attention:
"bg-red-500/20 text-red-400",

Monitoring:
"bg-yellow-500/20 text-yellow-400"

}



return (

<span
className={`
px-3
py-1
rounded-full
text-xs
font-medium

${colors[status as keyof typeof colors]}
`}
>

{status}

</span>

)

}


export default StatusBadge