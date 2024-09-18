import { useEffect, useState } from "react"
import HomeSlider from "../../components/Navbar/Home/HomeSlider"
import api from "../../api/axiosInstance"
import { MovieCardType } from "../../constant"
import MovieList from "../../components/Navbar/Home/MovieList"

function Home() {
  const [movies, setMovies]=useState<MovieCardType[]>([])

  const fetTopRated = async ()=>{
    try{
      const res = await api.get("/3/movie/top_rated?language=en-US&page=1")
      setMovies(res.data.results)
    }
    catch (err ){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetTopRated()
  },[])
 
  return (
    <div className="w-[90%] mx-auto ">
    <HomeSlider  />
    <MovieList movies={movies} />
    </div>
  )
}

export default Home
