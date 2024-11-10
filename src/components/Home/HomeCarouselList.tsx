import { CarouselMovie } from "../../utils/constant";
import CarouselMiniCardSkel from "../skeleton/CarouselMiniCardSkel";
import CarouselMiniCard from "./CarouselMiniCard";

interface HomeCarouselListProps {
  next : number[]
  carouselMovies: CarouselMovie[]
}

function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {

  return (
    <div>
        <h1 className="font-bold text-xl text-yellow-500">Up Next </h1>
        <div className="row">

        {
          carouselMovies.length > 0 ? 
          next.map((item, ind)=>(
            <CarouselMiniCard carouselMovies={carouselMovies} item={item} ind={item} />
           
             ))  
             :
             [...Array(3)].map(item =>
              <CarouselMiniCardSkel />
             )
             
        }
             </div>
       
        
    </div>
  )
}

export default HomeCarouselList