import { FaRegThumbsUp } from "react-icons/fa"
import { CarouselMovie, img_path } from "../../../constant"
interface HomeCarouselProps {
    carouselMovies: CarouselMovie[]
}

function HomeCarousel({ carouselMovies } : HomeCarouselProps) {

  return (
    <div className="carousel-inner">


        {carouselMovies?.map((movie , index)=>(
                <div className={`carousel-item ${index == 0 ? "active" : "" }`}>

             <div className="relative">
        {/*     <div className="block bg-red-300 aspect-[7/4] " />
         */}{" "}
        <img
          src={img_path+ movie?.backdrop_path}
          alt=""
          className="w-full aspect-[7/4] "
        />
        <div className="absolute bottom-0 h-44 w-full _crouselGradient"></div>
      </div>
      <div className="flex bottom-0 absolute gap-4 px-4 items-end">
        
     <img src={img_path + movie?.poster_path} alt="" className="block bg-blue-400 w-[160px] aspect-[4/5] " /> 
       
        <div className="flex flex-col gap-1  ">
          <h1 className="text-4xl text-white">{movie?.title} </h1>
          <h2 className="text-xl line-clamp-3 w-[600px] text-zinc-400">
            {" "}
            {movie?.overview}{" "}
          </h2>
          <div className="flex gap-2 items-center py-2 text-zinc-400 ">
            <FaRegThumbsUp />
            <h3>{movie?.vote_count}</h3>
          </div>
        </div>
      </div>


            </div>

          
        ))}
  


   
    
  </div>
  )
}

export default HomeCarousel