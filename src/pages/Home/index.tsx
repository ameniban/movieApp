import { useEffect, useState } from "react"
import HomeSlider from "../../components/Home/HomeSlider"
import api from "../../api/axiosInstance"
import { MovieCardType } from "../../utils/constant"
import MovieList from "../../components/Home/MovieList"
import LoadMoreButton from "../../components/Button/LoadMoreButton"

function Home() {
  const [movies, setMovies]=useState<MovieCardType[]>([])
  const [page, setPage] = useState<number>(1)

  const fetTopRated = async (page: number)=>{
    try{
      const res = await api.get(`/3/movie/top_rated?language=en-US&page=${page}`)
      setMovies(prev => [...prev, ...res.data?.results])
    }
    catch (err ){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetTopRated(page)

  },[page])

  const handleShowMore= ()=>{
    setPage(prev => prev + 1)
  }
 
  return (
    <div className="w-[90%] mx-auto mb-20">
    <HomeSlider  />
    <MovieList movies={movies} />
    <div onClick={() => handleShowMore() }>
    <LoadMoreButton />
    </div>
    </div>
  )
}

export default Home
