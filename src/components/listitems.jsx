import Delete from '../assets/delete.png';
const listitems = ({text, id, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2">
        <div onClick={()=>{toggle(id)}} className="flex flex-1 itels-center cursor-poiter">
            <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
        </div>
        <img onClick={()=>{deleteTodo(id)}} src={Delete} alt="" className="w-6 mr-3 cursor-pointer"/>
    </div>
  )
}

export default listitems