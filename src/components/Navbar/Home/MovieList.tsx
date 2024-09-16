import { img_path, MovieCard } from "../../../constant";

interface MovieListProps {
  movies: MovieCard[];
}

function MovieList({ movies }: MovieListProps) {
  return (
    <div className="my-14">
      <h1 className="font-bold text-3xl text-yellow-500">Top Rated Movies</h1>
      <div className="row row-cols-6">
        {movies.length > 0 &&
          movies.map((movie, idx) => (
            <div className="col">
            <div key={idx} className="my-3 border-1 border-zinc-800 rounded-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img src={img_path + movie.poster_path} alt="" />
                <div className="absolute -bottom-6 w-full h-25 _crouselGradient"></div>
              </div>
              <div className="bg-[#222] p-2">
                <h1 className="text-[17px] font-semibold line-clamp-1">
                  {movie?.title}
                </h1>
                <div className=" text-zinc-300 text-[15px]">
                  <h1 className="">
                    {" "}
                    Rating : {String(movie?.vote_average).substring(0, 3)}{" "}
                  </h1>
                  <h1> language : {movie?.original_language} </h1>
                  <h1> Released : {movie?.release_date} </h1>
                </div>
              </div>
            </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieList;
