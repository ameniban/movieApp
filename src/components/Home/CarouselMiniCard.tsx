import { useState } from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { img_path, CarouselMovie } from '../../utils/constant'

interface CarouselMiniCardProps{
  carouselMovies : CarouselMovie[]
  item: number
  ind : number
}

function CarouselMiniCard({ carouselMovies, item, ind }: CarouselMiniCardProps) {
    const [hover, setHover] = useState<number | null> (null)

  return (
    <>
    <Link to={`/details/${carouselMovies[item].id}`} className='col-xl-12 col'>

<div key={ind} className="flex gap-3"
onMouseEnter={()=>setHover(ind)}
onMouseLeave={()=>setHover(null)}
>
<img src={img_path + carouselMovies[item]?.poster_path} className='w-[100px] aspect[4/6]' alt="" />
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

</Link>  
    </>
  )
}

export default CarouselMiniCard