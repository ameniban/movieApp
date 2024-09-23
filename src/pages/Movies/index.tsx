import { useState } from "react"
import { Categories } from "../../utils/constant"


function Movies() {
  const [filter, setfilter] = useState(Categories[0])
  const toggleSelection = (item: string)=>{
    setfilter(item)
  }
  return (
    <div className="w-[90%] mx-auto mt-4">
      <h1 className="text-3xl font-bold text-yellow-500">
        Explore Movies
      </h1>
     <div className="flex mt-2">{
        Categories.map((item, ind) => (
         <div key={ind}>
        <button className="text-base font semobold w-44 h-10 hover:bg-[#121212]"
        onClick={()=>toggleSelection(item)}
        >  {item} </button>  
        <div className={`h-0.5 bg-blue-400 mx-auto ${filter === item ? "w-full" : "w-0"} duration-200`}>
        
        </div>
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default Movies
