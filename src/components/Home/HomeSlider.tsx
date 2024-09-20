import { useEffect, useState } from "react";
import { CarouselMovie } from "../../constant";
import api from "../../api/axiosInstance";
import HomeCarousel from "./HomeCarousel";
import HomeCarouselList from "./HomeCarouselList";

function HomeSlider() {
  const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([]);
  const [next, setNext] = useState<number[]>([]);
  const [selected, setSelected] = useState(0)

  useEffect(()=>{
    if (carouselMovies.length){
      const index1 = (selected +1 ) % carouselMovies.length
      const index2 =( selected +2) % carouselMovies.length
      const index3 =( selected +3 ) % carouselMovies.length
      setNext([index1,index2,index3]);
    }
  },[carouselMovies, selected])

  useEffect(()=>{
    const myCarousel = document.getElementById('carouselExample')

    const handleSlide = (event:Event) => {
      const customEvent = event as any
      
      setSelected(customEvent.to)
    }
    if (myCarousel){
      myCarousel.addEventListener('slid.bs.carousel', handleSlide)

      return ()=>{
        myCarousel.removeEventListener('slid.bs.carousel', handleSlide)
      }
    }


  },[])

  const fetchUpComing = async () => {
    try {
      const response = await api.get("/3/movie/upcoming?language=en-US&page=1");
      setCarouselMovies(response.data.results);
    } catch (err) {
      console.log("fetch upcoming movie error", err);
    }
  };

  useEffect(() => {
    fetchUpComing();
  }, []);

  return (
    <div className="row">
      <div className="relative col-8">
        <div id="carouselExample" className="carousel slide">
          {<HomeCarousel carouselMovies={carouselMovies} />}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span>Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span /*  className="visually-hidden" */>Next</span>
          </button>
        </div>
      </div>
      <div className="col-4">
        <HomeCarouselList 
        next={next}
        carouselMovies={carouselMovies} />
      </div>
    </div>
  );
}

export default HomeSlider;
