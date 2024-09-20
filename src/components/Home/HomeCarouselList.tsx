import { FaRegThumbsUp } from "react-icons/fa";
import { CarouselMovie, img_path } from "../../constant";
import { useState } from "react";

interface HomeCarouselListProps {
  next : number[]
  carouselMovies: CarouselMovie[]
}

function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {
  const [hover, setHover] = useState <number | null> (null)

  return (
    <div>
        <h1 className="font-bold text-xl text-yellow-500">Up Next </h1>
       
        {
          next.map((item, ind)=>(
            <div key={ind} className="flex gap-3"
            onMouseEnter={()=>setHover(ind)}
            onMouseLeave={()=>setHover(null)}
            >
            <img src={img_path + carouselMovies[item]?.poster_path} className='w-[100px]' alt="" />
           <div className="flex flex-col justify-between py-3">
            <div className="leading-5">
              <h1 className={`py-2 ${hover === ind ? "underline scale-[1.02]" : ''}`} >{carouselMovies[item]?.title}</h1>
              <h1 className="text-md text-zinc-300 line-clamp-3">{carouselMovies[item]?.overview}</h1>
              </div>

              <div className="flex gap-1 text-zinc-400 align-items-center">
              <FaRegThumbsUp />
              <h2>{carouselMovies[item]?.vote_count}</h2>
            </div>
            </div>
           
            </div>
          ))
        }
       
        
    </div>
  )
}

export default HomeCarouselList