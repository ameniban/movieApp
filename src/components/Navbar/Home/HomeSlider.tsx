import { useEffect, useState } from "react";
import { CarouselMovie } from "../../../constant";
import { baseApi } from "../../../api/axiosInstance";
import HomeCarousel from "./HomeCarousel";

function HomeSlider() {

  const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([]);

  const fetchUpComing = async () => {
    try {
      const response = await baseApi.get(
        "/3/movie/upcoming?language=en-US&page=1"
      );
      setCarouselMovies(response.data.results);
      console.log(response.data.results);
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
      {<HomeCarousel 
      carouselMovies={carouselMovies} />}
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div className="col-4 bg-red-500"></div>
    </div>
  );
}

export default HomeSlider;
