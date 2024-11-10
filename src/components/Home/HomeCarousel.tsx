import { FaRegThumbsUp } from "react-icons/fa";
import { CarouselMovie, img_path } from "../../utils/constant";
import { Link } from "react-router-dom";
interface HomeCarouselProps {
  carouselMovies: CarouselMovie[];
}

function HomeCarousel({ carouselMovies }: HomeCarouselProps) {
  return (
    <div className="carousel-inner h-full">
      {carouselMovies?.map((movie, index) => (
        <Link key={index} to={`/details/${movie.id}`}>
        <div key={index} className={`carousel-item ${index == 0 ? "active" : ""} h-full`}>
          <div className="relative h-full">
            {/*     <div className="block bg-red-300 aspect-[7/4] " />
             */}{" "}
            <img 
              src={img_path + movie?.backdrop_path}
              alt=""
              className="w-full h-full min-h-[300px] object-cover aspect-[7/4] "
            />
            <div className={`absolute w-full h-full top-0 left-0 bg-black  opacity-[0.1] hover:opacity-[0.2]`}></div>
            <div className="absolute bottom-0 h-44 w-full _crouselGradient"></div>
          </div>
          <div className="absolute bottom-0 md:flex gap-4 px-4 items-end">
            <img
              src={img_path + movie?.poster_path}
              alt=""
              className="block bg-blue-400 md:w-[160px] w-[120px] aspect-[4/5] "
            />

            <div className="flex flex-col gap-1  ">
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white">{movie?.title} </h1>
              <h2 className="lg:text-xl md:text-lg text-md line-clamp-3 w-[95%] text-zinc-400">
                {" "}
                {movie?.overview}{" "}
              </h2>
              <div className="flex items-center gap-2 py-2 text-zinc-400 lg:text-lg md:text-md text-sm">
                <FaRegThumbsUp />
                <h3>{movie?.vote_count}</h3>
              </div>
            </div>
          </div>
        </div>
        </Link>))}
    </div>
  );
}

export default HomeCarousel;
