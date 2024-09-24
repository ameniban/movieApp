import { useEffect, useState } from "react"
import { Categories, CategoriesType } from "../../utils/constant"
import api from "../../api/axiosInstance"


function Movies() {
  const [filter, setfilter] = useState(Categories[0].name)
  const [nowplaying, setnowplaying] = useState<CategoriesType[]>([])
  const [popular, setPopular] = useState<CategoriesType[]>([])
  const [upcoming, setUpcoming] = useState<CategoriesType[]>([])
  const [topRated, setTopRated] = useState<CategoriesType[]>([])

  const toggleSelection = (item:string)=>{
    setfilter(item)

  }
  const fecthMovies = async (path:string) =>{
    try{
      const resp = await api.get(`/3/movie/${path}?language=en-US&page=1`)
      console.log(resp.data?.results)

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    const current = Categories.filter(item => item.name == filter)

    fecthMovies(current[0].path)
  },[filter])
  return (
    <div className="w-[90%] mx-auto mt-4">
      <h1 className="text-3xl font-bold text-yellow-500">
        Explore Moviesname
      </h1>
     <div className="flex mt-2">{
        Categories.map((item, ind) => (
         <div key={ind}>
        <button className="text-base font semobold w-44 h-10 hover:bg-[#121212]"
        onClick={()=>toggleSelection(item.name)}
        >  {item.name} </button>  
        <div className={`h-0.5 bg-blue-400 mx-auto ${filter === item.name ? "w-full" : "w-0"} duration-200`}>
          
        </div>
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default Movies
