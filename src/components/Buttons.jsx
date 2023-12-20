export default function Buttons({ icon,text, onClick}){
    return(
       <button onClick={onClick} className="flex items-center gap-2 border bg-black text-white rounded-md py-[5px] px-[9px] lg:py-[10px] lg:px-[18px]">
             {icon} {text}
       </button> 
    )
}           