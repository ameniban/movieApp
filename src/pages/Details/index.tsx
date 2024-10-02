import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../api/axiosInstance"
import { img_path, MovieDetailType } from "../../utils/constant"

function Details() {
  const params = useParams()
  const[details, setDetails] = useState<MovieDetailType>()

  const fetchDetails = async ()=>{
    try{
      const response = await api.get(`/3/movie/${params.id}?language=en-US`)
      setDetails(response?.data)
      console.log("details",details)
      console.log("responser",response.data)


    }catch(err){
      console.log("Fetch Deatils Error", err)
    }
  }

  useEffect(()=>{
    fetchDetails()

  },[params])
  return (
    <div>
      {details && 
      <div className="relative ">
        <img src={img_path + details.backdrop_path} alt="background" 
        className="opacity-40 w-full aspect-[7/4] object-center"
        />
        
         {details.id} </div>
      }
    </div>
  )
}

export default Details
