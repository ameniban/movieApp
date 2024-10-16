import { CarouselMovie } from "../../utils/constant";
import CarouselMiniCard from "./CarouselMiniCard";

interface HomeCarouselListProps {
  next : number[]
  carouselMovies: CarouselMovie[]
}

function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {

  return (
    <div>
        <h1 className="font-bold text-xl text-yellow-500">Up Next </h1>
       
        {
          next.map((item, ind)=>(
            <CarouselMiniCard carouselMovies={carouselMovies} item={item} ind={item} />
           
             ))  
        }
       
        
    </div>
  )
}

export default HomeCarouselList